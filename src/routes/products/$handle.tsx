import { createFileRoute, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { money } from "@/lib/assets";
import { useCart } from "@/lib/cart-store";
import { getProduct } from "@/lib/shopify.functions";

const productQuery = (handle: string) => queryOptions({ queryKey: ["product", handle], queryFn: () => getProduct({ data: { handle } }) });

export const Route = createFileRoute("/products/$handle")({
  loader: async ({ context, params }) => {
    const p = await context.queryClient.ensureQueryData(productQuery(params.handle));
    if (!p) throw notFound();
    return { title: p.title, image: p.image };
  },
  head: ({ loaderData }) => {
    const t = `${loaderData?.title ?? "Product"} — Painting Demons`;
    const meta = [{ title: t }, { name: "description", content: `${loaderData?.title ?? "Product"} from Painting Demons.` },
      { property: "og:title", content: t }, { property: "og:description", content: `Shop ${loaderData?.title ?? "this product"} at Painting Demons.` },
      { property: "og:type", content: "product" }, { name: "twitter:card", content: "summary_large_image" }];
    if (loaderData?.image) meta.push({ property: "og:image", content: loaderData.image }, { name: "twitter:image", content: loaderData.image });
    return { meta };
  },
  notFoundComponent: () => <SiteShell><div className="pd-page"><h1>Product not found</h1></div></SiteShell>,
  component: ProductPage,
});

function ProductPage() {
  const { handle } = Route.useParams();
  const { data: p } = useSuspenseQuery(productQuery(handle));
  const { add, busy } = useCart();
  const [variantId, setVariantId] = useState(p!.variants.find((v) => v.availableForSale)?.id ?? p!.variants[0]?.id);
  const [img, setImg] = useState(p!.images[0]?.url ?? p!.image);
  if (!p) return null;
  const v = p.variants.find((x) => x.id === variantId);
  return (
    <SiteShell>
      <div className="pd-page">
        <div className="pd-product">
          <div>
            {img && <img src={img} alt={p.title} />}
            {p.images.length > 1 && <div className="pd-thumbs">{p.images.map((i) => <img key={i.url} src={i.url} alt={i.altText ?? ""} onClick={() => setImg(i.url)} />)}</div>}
          </div>
          <div>
            <h1>{p.title}</h1>
            <div className="pd-price">{money(v?.price ?? p.price, p.currency)}</div>
            {p.variants.length > 1 && (
              <select className="pd-select" value={variantId} onChange={(e) => setVariantId(e.target.value)} aria-label="Option">
                {p.variants.map((x) => <option key={x.id} value={x.id} disabled={!x.availableForSale}>{x.title}{x.availableForSale ? "" : " (sold out)"}</option>)}
              </select>
            )}
            <button className="pd-btn" disabled={busy || !v?.availableForSale} onClick={() => v && add(v.id)}>
              {v?.availableForSale ? (busy ? "Adding..." : "Add to cart") : "Sold out"}
            </button>
            <div className="pd-rich" style={{ marginTop: 24 }} dangerouslySetInnerHTML={{ __html: p.descriptionHtml }} />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
