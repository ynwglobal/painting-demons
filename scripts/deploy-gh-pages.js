import { execSync } from "child_process";
import fs from "fs";
import path from "path";

console.log("🔨 Building static site for GitHub Pages...");
process.env.GITHUB_PAGES = "true";
process.env.PAGES_BASE = process.env.PAGES_BASE || "/painting-demons/";

execSync("bunx vite build", { stdio: "inherit", env: process.env });

// Setup SPA fallback and pre-create known route index.html files
execSync("bun run scripts/setup-spa-routes.js", { stdio: "inherit" });

const publicDir = path.resolve(".output", "public");

// Deploy to gh-pages branch
console.log("🚀 Deploying to gh-pages branch...");
const gitDir = path.join(publicDir, ".git");
if (fs.existsSync(gitDir)) {
  fs.rmSync(gitDir, { recursive: true, force: true });
}

execSync("git init", { cwd: publicDir, stdio: "inherit" });
execSync("git checkout -b gh-pages", { cwd: publicDir, stdio: "inherit" });
execSync("git add -A", { cwd: publicDir, stdio: "inherit" });
execSync('git commit -m "Deploy to GitHub Pages: responsive optimizations and product route fixes"', { cwd: publicDir, stdio: "inherit" });
execSync("git remote add origin https://github.com/ynwglobal/painting-demons.git", { cwd: publicDir, stdio: "inherit" });
execSync("git push origin gh-pages --force", { cwd: publicDir, stdio: "inherit" });

console.log("✅ Successfully deployed to GitHub Pages (gh-pages branch)!");
