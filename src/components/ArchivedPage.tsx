import { useRouter } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { useCart } from "@/lib/cart-store";

export type ArchivedContent = { title: string; html: string; scripts: string[]; css?: string };

declare global {
  interface Window {
    pdOnReady?: (fn: () => void) => void;
    pdCartAddJs?: (url: unknown, init?: { body?: string }) => Promise<{ ok: boolean; status: number; json: () => Promise<unknown> }>;
    pdCartJs?: () => Promise<{ json: () => Promise<unknown> }>;
    PD_KRYPTOID_LOGO_URL?: string;
  }
}

/** Renders a page captured from the original paintingdemons.com theme and runs its scripts. */
export function ArchivedPage({ content }: { content: ArchivedContent }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { add, cart } = useCart();
  const cartRef = useRef(cart);
  cartRef.current = cart;

  useEffect(() => {
    window.pdOnReady = (fn) => fn();
    window.pdCartAddJs = async (_url, init) => {
      const body = JSON.parse(init?.body ?? "{}") as { id?: string | number; quantity?: number };
      const id = String(body.id ?? "");
      const gid = id.startsWith("gid://") ? id : `gid://shopify/ProductVariant/${id}`;
      await add(gid, body.quantity ?? 1);
      return { ok: true, status: 200, json: async () => ({ id }) };
    };
    window.pdCartJs = async () => ({ json: async () => ({ item_count: cartRef.current?.totalQuantity ?? 0 }) });
  }, [add]);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.innerHTML = content.html;
    for (const code of content.scripts) {
      const s = document.createElement("script");
      s.textContent = code;
      root.appendChild(s);
    }

    const base = (router.basepath || "").replace(/\/$/, "");

    // Rewrite internal <a> tags so hover, right-click, and middle-click stay on GitHub Pages base path
    const syncInternalLinks = () => {
      if (!base) return;
      const links = root.querySelectorAll<HTMLAnchorElement>("a[href^='/']");
      links.forEach((a) => {
        const h = a.getAttribute("href");
        if (h && !h.startsWith("//") && !h.startsWith(base)) {
          a.setAttribute("href", base + h);
        }
      });
    };
    syncInternalLinks();

    const observer = new MutationObserver(syncInternalLinks);
    observer.observe(root, { childList: true, subtree: true });

    // Keep internal links inside TanStack Router (works with a GitHub Pages base path too)
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
      let href = a.getAttribute("href");
      if (!href) return;
      if (href.startsWith("#") || href.startsWith("//") || /^https?:\/\//i.test(href) || /^(mailto|tel):/i.test(href)) {
        return;
      }
      if (!href.startsWith("/")) return;

      e.preventDefault();

      // Strip basepath so router.navigate receives the app-relative route
      if (base && href.startsWith(base)) {
        href = href.slice(base.length) || "/";
      }

      router.navigate({ to: href });
    };

    root.addEventListener("click", onClick);
    return () => {
      observer.disconnect();
      root.removeEventListener("click", onClick);
    };
  }, [content, router]);

  return (
    <>
      {content.css && <style dangerouslySetInnerHTML={{ __html: content.css }} />}
      <div ref={ref} dangerouslySetInnerHTML={{ __html: content.html }} suppressHydrationWarning />
    </>
  );
}

const loaders = import.meta.glob<{ default: ArchivedContent }>("../content/*.json");
export const ARCHIVED_HANDLES = Object.keys(loaders).map((k) => k.replace("../content/", "").replace(".json", ""));
export async function loadArchived(handle: string): Promise<ArchivedContent | null> {
  const l = loaders[`../content/${handle}.json`];
  return l ? (await l()).default : null;
}
