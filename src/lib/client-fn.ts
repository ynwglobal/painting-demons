// Browser-safe stand-in for server functions so the site also runs as a static
// build (GitHub Pages). Shopify's Storefront API is public and CORS-enabled.
type Validator<I> = (d: unknown) => I;
export function clientFn(_opts?: { method?: string }) {
  return {
    inputValidator<I>(v: Validator<I>) {
      return {
        handler<R>(h: (ctx: { data: I }) => Promise<R>) {
          return (arg: { data: unknown }) => h({ data: v(arg?.data) });
        },
      };
    },
    handler<R>(h: () => Promise<R>) {
      return () => h();
    },
  };
}
