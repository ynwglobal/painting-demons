import { clientFn as createServerFn } from "./client-fn";
import { z } from "zod";
import { storefront } from "./storefront";

export type ProductCard = { handle: string; title: string; image: string | null; price: string; currency: string };
export type ProductDetail = ProductCard & {
  descriptionHtml: string;
  images: { url: string; altText: string | null }[];
  variants: { id: string; title: string; availableForSale: boolean; price: string }[];
};
export type Cart = {
  id: string; checkoutUrl: string; totalQuantity: number; total: string; currency: string;
  lines: { id: string; quantity: number; title: string; variant: string; image: string | null; price: string }[];
};

const CARD = `handle title featuredImage { url } priceRange { minVariantPrice { amount currencyCode } }`;
type RawCard = { handle: string; title: string; featuredImage: { url: string } | null; priceRange: { minVariantPrice: { amount: string; currencyCode: string } } };
const toCard = (p: RawCard): ProductCard => ({
  handle: p.handle, title: p.title, image: p.featuredImage?.url ?? null,
  price: p.priceRange.minVariantPrice.amount, currency: p.priceRange.minVariantPrice.currencyCode,
});

export const getHomeProducts = createServerFn({ method: "GET" }).handler(async () => {
  const d = await storefront<{ newCol: { products: { nodes: RawCard[] } } | null; all: { nodes: RawCard[] } }>(
    `{ newCol: collection(handle: "new") { products(first: 24) { nodes { ${CARD} } } }
       all: products(first: 24, sortKey: CREATED_AT, reverse: true) { nodes { ${CARD} } } }`,
  );
  const all = d.all.nodes.map(toCard);
  const masks = d.newCol?.products.nodes.map(toCard) ?? all;
  return { masks, slider: all };
});

export const getProduct = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ handle: z.string().min(1).max(255) }).parse(d))
  .handler(async ({ data }) => {
    const d = await storefront<{ product: (RawCard & { descriptionHtml: string; images: { nodes: { url: string; altText: string | null }[] }; variants: { nodes: { id: string; title: string; availableForSale: boolean; price: { amount: string } }[] } }) | null }>(
      `query($h: String!) { product(handle: $h) { ${CARD} descriptionHtml images(first: 10) { nodes { url altText } }
        variants(first: 50) { nodes { id title availableForSale price { amount } } } } }`, { h: data.handle });
    if (!d.product) return null;
    const p = d.product;
    return { ...toCard(p), descriptionHtml: p.descriptionHtml, images: p.images.nodes,
      variants: p.variants.nodes.map((v) => ({ id: v.id, title: v.title, availableForSale: v.availableForSale, price: v.price.amount })) } as ProductDetail;
  });

export const getPage = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ handle: z.string().min(1).max(255) }).parse(d))
  .handler(async ({ data }) => {
    const d = await storefront<{ page: { title: string; body: string } | null }>(
      `query($h: String!) { page(handle: $h) { title body } }`, { h: data.handle });
    return d.page;
  });

export const searchProducts = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ q: z.string().max(200) }).parse(d))
  .handler(async ({ data }) => {
    if (!data.q.trim()) return [];
    const d = await storefront<{ products: { nodes: RawCard[] } }>(
      `query($q: String!) { products(first: 48, query: $q) { nodes { ${CARD} } } }`, { q: data.q });
    return d.products.nodes.map(toCard);
  });

const CART = `id checkoutUrl totalQuantity cost { totalAmount { amount currencyCode } }
  lines(first: 100) { nodes { id quantity merchandise { ... on ProductVariant { title image { url } price { amount }
  product { title featuredImage { url } } } } } }`;
type RawCart = { id: string; checkoutUrl: string; totalQuantity: number; cost: { totalAmount: { amount: string; currencyCode: string } };
  lines: { nodes: { id: string; quantity: number; merchandise: { title: string; image: { url: string } | null; price: { amount: string }; product: { title: string; featuredImage: { url: string } | null } } }[] } };
const toCart = (c: RawCart | null): Cart | null => c && ({
  id: c.id, checkoutUrl: c.checkoutUrl, totalQuantity: c.totalQuantity,
  total: c.cost.totalAmount.amount, currency: c.cost.totalAmount.currencyCode,
  lines: c.lines.nodes.map((l) => ({ id: l.id, quantity: l.quantity, title: l.merchandise.product.title,
    variant: l.merchandise.title, image: l.merchandise.image?.url ?? l.merchandise.product.featuredImage?.url ?? null, price: l.merchandise.price.amount })),
});

export const fetchCart = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ cartId: z.string().max(500) }).parse(d))
  .handler(async ({ data }) => toCart((await storefront<{ cart: RawCart | null }>(`query($id: ID!) { cart(id: $id) { ${CART} } }`, { id: data.cartId })).cart));

export const addToCart = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ cartId: z.string().max(500).nullable(), variantId: z.string().max(500), quantity: z.number().int().min(1).max(99) }).parse(d))
  .handler(async ({ data }) => {
    const lines = [{ merchandiseId: data.variantId, quantity: data.quantity }];
    if (data.cartId) {
      const r = await storefront<{ cartLinesAdd: { cart: RawCart | null } }>(
        `mutation($id: ID!, $lines: [CartLineInput!]!) { cartLinesAdd(cartId: $id, lines: $lines) { cart { ${CART} } } }`, { id: data.cartId, lines });
      if (r.cartLinesAdd.cart) return toCart(r.cartLinesAdd.cart);
    }
    const r = await storefront<{ cartCreate: { cart: RawCart } }>(
      `mutation($lines: [CartLineInput!]!) { cartCreate(input: { lines: $lines }) { cart { ${CART} } } }`, { lines });
    return toCart(r.cartCreate.cart);
  });

export const updateCartLine = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ cartId: z.string().max(500), lineId: z.string().max(500), quantity: z.number().int().min(0).max(99) }).parse(d))
  .handler(async ({ data }) => {
    const r = await storefront<{ cartLinesUpdate: { cart: RawCart } }>(
      `mutation($id: ID!, $lines: [CartLineUpdateInput!]!) { cartLinesUpdate(cartId: $id, lines: $lines) { cart { ${CART} } } }`,
      { id: data.cartId, lines: [{ id: data.lineId, quantity: data.quantity }] });
    return toCart(r.cartLinesUpdate.cart);
  });
