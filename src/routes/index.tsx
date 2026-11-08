import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { ArchivedPage, loadArchived } from "@/components/ArchivedPage";
import { DropAnnouncement } from "@/components/DropAnnouncement";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paintingdemons - Paintingdemons" },
      { name: "description", content: "Painting Demons: masks, souls, good attire and SlimeTech gear. Don't Paint Demons, Kids!" },
      { property: "og:title", content: "Paintingdemons - Paintingdemons" },
      { property: "og:description", content: "Masks, souls, good attire and SlimeTech gear from Painting Demons." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: async () => (await loadArchived("home"))!,
  component: Index,
});

function Index() {
  const content = Route.useLoaderData();
  return (
    <SiteShell raw>
      <DropAnnouncement />
      <ArchivedPage content={content} />
    </SiteShell>
  );
}
