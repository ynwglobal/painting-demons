import fs from "fs";
import path from "path";

const publicDir = path.resolve(".output", "public");
if (!fs.existsSync(publicDir)) {
  console.error("Public directory not found:", publicDir);
  process.exit(1);
}

const indexPath = path.join(publicDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("index.html not found in public directory");
  process.exit(1);
}

// 404 SPA fallback and .nojekyll
fs.copyFileSync(indexPath, path.join(publicDir, "404.html"));
fs.writeFileSync(path.join(publicDir, ".nojekyll"), "");
console.log("✓ Created 404.html and .nojekyll in .output/public");

// Pre-create route directories with index.html so GitHub Pages serves 200 OK directly
const knownRoutes = [
  "products/mask-slot-1",
  "products/mask-slot-2",
  "products/mask-slot-3",
  "products/mask-slot-4",
  "products/mask-slot-5",
  "products/mask-slot-6",
  "products/mask-slot-7",
  "products/slime-karen",
  "products/kryptid-database-entity-002",
  "products/kryptoid-database-entity-001",
  "products/kryptid-database-entity-003",
  "pages/good-attire",
  "pages/projects",
  "pages/cyber-modeling",
  "pages/how-tos",
  "pages/antagonist",
  "pages/kryptoids",
  "pages/angels",
  "pages/slimetech",
  "pages/newsletter",
  "pages/dontlookbehindyou",
  "search"
];

for (const r of knownRoutes) {
  const dir = path.join(publicDir, r);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(indexPath, path.join(dir, "index.html"));
}

console.log(`✓ Generated static 200 fallbacks for ${knownRoutes.length} known routes in .output/public`);
