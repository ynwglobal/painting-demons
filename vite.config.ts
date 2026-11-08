import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GITHUB_PAGES=true builds a static single-page version for GitHub Pages.
// PAGES_BASE sets the sub-path, e.g. "/painting-demons-site/" (defaults to "/").
const pages = process.env['GITHUB_PAGES'] === "true";
const base = process.env['PAGES_BASE'] || "/";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    ...(pages ? { spa: { enabled: true, prerender: { outputPath: "/index.html", crawlLinks: false } } } : {}),
  },
  ...(pages ? { vite: { base } } : {}),
});
