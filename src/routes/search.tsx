import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod";
import { SiteShell } from "@/components/SiteShell";
import { money } from "@/lib/assets";
import { searchProducts } from "@/lib/shopify.functions";

const sq = (q: string) => queryOptions({ queryKey: ["search", q], queryFn: () => searchProducts({ data: { q } }) });

export const Route = createFileRoute("/search")({
  validateSearch: z.object({ q: z.string().catch("") }),
  loaderDeps: ({ search }) => ({ q: search.q }),
  loader: ({ context, deps }) => context.queryClient.ensureQueryData(sq(deps.q)),
  head: () => ({ meta: [{ title: "Search — Painting Demons" }, { name: "description", content: "Search Painting Demons products." },
    { property: "og:title", content: "Search — Painting Demons" }, { property: "og:description", content: "Search Painting Demons products." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const { data } = useSuspenseQuery(sq(q));
  return (
    <SiteShell>
      <div className="pd-page">
        <h1>Search{q ? `: ${q}` : ""}</h1>
        {data.length === 0 ? <p className="pd-muted">No products found.</p> : (
          <div className="pd-grid">{data.map((p) => (
            <Link key={p.handle} to="/products/$handle" params={{ handle: p.handle }}>
              {p.image && <img src={p.image} alt={p.title} />}<div>{p.title}</div><div className="pd-muted">{money(p.price, p.currency)}</div>
            </Link>))}</div>
        )}
      </div>
    </SiteShell>
  );
}
