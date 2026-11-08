// Public Storefront API credentials (safe to ship to the browser).
export const STOREFRONT_SHOP = "qjjfqu-5p.myshopify.com";
export const STOREFRONT_API = "2026-01";
export const STOREFRONT_TOKEN = "05d0beea5eb382d56f68164cc5980e9c";

export async function storefront<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(`https://${STOREFRONT_SHOP}/api/${STOREFRONT_API}/graphql.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN },
    body: JSON.stringify({ query, variables }),
  });
  const json = (await res.json()) as { data?: T; errors?: unknown };
  if (!res.ok || json.errors) throw new Error(`Shopify error: ${JSON.stringify(json.errors ?? res.status)}`);
  return json.data as T;
}
