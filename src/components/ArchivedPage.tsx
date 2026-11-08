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

    // Keep internal links inside TanStack Router without duplicating repository basepath
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
      const rawHref = a.getAttribute("href");
      if (!rawHref) return;

      // Ignore external links, anchors, and non-http protocols
      if (
        rawHref.startsWith("#") ||
        rawHref.startsWith("//") ||
        /^https?:\/\//i.test(rawHref) ||
        /^(mailto|tel|javascript):/i.test(rawHref)
      ) {
        return;
      }

      e.preventDefault();

      // Normalize: strip any leading /painting-demons (single or repeated) so we have a clean app route
      let clean = rawHref.replace(/^(?:\/?painting-demons)+/i, "");
      if (!clean.startsWith("/")) {
        clean = "/" + clean;
      }

      // Route to product page
      const productMatch = clean.match(/^\/products\/([^/?#]+)/i);
      if (productMatch) {
        router.navigate({
          to: "/products/$handle",
          params: { handle: productMatch[1] },
        });
        return;
      }

      // Route to content page
      const pageMatch = clean.match(/^\/pages\/([^/?#]+)/i);
      if (pageMatch) {
        router.navigate({
          to: "/pages/$handle",
          params: { handle: pageMatch[1] },
        });
        return;
      }

      // Route to home
      if (clean === "/" || clean === "") {
        router.navigate({ to: "/" });
        return;
      }

      // Any other internal route (e.g. /search)
      router.navigate({ to: clean });
    };

    root.addEventListener("click", onClick);
    return () => {
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
