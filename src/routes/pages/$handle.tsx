import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { ArchivedPage, loadArchived } from "@/components/ArchivedPage";
import { getPage } from "@/lib/shopify.functions";

const decode = (s: string) => s.replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/&#8203;/g, "\u200b");

export const Route = createFileRoute("/pages/$handle")({
  loader: async ({ params }) => {
    if (params.handle !== "home") {
      const archived = await loadArchived(params.handle);
      if (archived) return { kind: "archived" as const, title: decode(archived.title), content: archived };
    }
    const p = await getPage({ data: { handle: params.handle } });
    if (!p) throw notFound();
    return { kind: "shopify" as const, title: `${p.title} - Paintingdemons`, page: p };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.title ?? "Page - Paintingdemons";
    return {
      meta: [
        { title: t },
        { name: "description", content: `${t} — Painting Demons.` },
        { property: "og:title", content: t },
        { property: "og:description", content: `${t} — Painting Demons.` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => <SiteShell><div className="pd-page"><h1>Page not found</h1></div></SiteShell>,
  component: PageView,
});

function PageView() {
  const d = Route.useLoaderData();
  if (d.kind === "archived") {
    if (d.content.html.length < 400) return <ArchivedPage content={d.content} />;
    return <SiteShell raw><ArchivedPage content={d.content} /></SiteShell>;
  }
  return (
    <SiteShell>
      <div className="pd-page"><h1>{d.page.title}</h1><div className="pd-rich" dangerouslySetInnerHTML={{ __html: d.page.body }} /></div>
    </SiteShell>
  );
}
