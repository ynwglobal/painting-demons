import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { money } from "@/lib/assets";
import { useCart } from "@/lib/cart-store";
import { getProduct } from "@/lib/shopify.functions";
import { ArrowLeft, ShoppingBag, ShieldAlert, Sparkles, Check, AlertCircle } from "lucide-react";

const productQuery = (handle: string) =>
  queryOptions({
    queryKey: ["product", handle],
    queryFn: () => getProduct({ data: { handle } }),
  });

export const Route = createFileRoute("/products/$handle")({
  loader: async ({ context, params }) => {
    try {
      const p = await context.queryClient.ensureQueryData(productQuery(params.handle));
      if (!p) throw notFound();
      return { product: p, title: p.title, image: p.image };
    } catch {
      throw notFound();
    }
  },
  head: ({ loaderData }) => {
    const t = `${loaderData?.title ?? "Artifact"} — Painting Demons`;
    const meta = [
      { title: t },
      { name: "description", content: `${loaderData?.title ?? "Artifact"} from Painting Demons.` },
      { property: "og:title", content: t },
      { property: "og:description", content: `Inspect and acquire ${loaderData?.title ?? "this artifact"} at Painting Demons.` },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ];
    if (loaderData?.image) {
      meta.push(
        { property: "og:image", content: loaderData.image },
        { name: "twitter:image", content: loaderData.image }
      );
    }
    return { meta };
  },
  component: ProductPage,
  notFoundComponent: ProductNotFound,
  errorComponent: ProductError,
});

function ProductPage() {
  const { handle } = Route.useParams();
  const { data: p } = useSuspenseQuery(productQuery(handle));
  const { add, busy } = useCart();
  const [addedNotice, setAddedNotice] = useState(false);

  // Variant selection (dynamic across product handle changes)
  const defaultVariantId = p?.variants?.find((v) => v.availableForSale)?.id ?? p?.variants?.[0]?.id;
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>(undefined);
  const variantId = selectedVariantId ?? defaultVariantId;

  // Active image gallery (dynamic across product handle changes)
  const defaultImg = p?.images?.[0]?.url ?? p?.image ?? null;
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const activeImg = selectedImg ?? defaultImg;

  if (!p) return null;

  const currentVariant = p.variants?.find((x) => x.id === variantId) ?? p.variants?.[0];
  const isAvailable = Boolean(currentVariant?.availableForSale);

  const handleAddToCart = async () => {
    if (!currentVariant || !isAvailable || busy) return;
    await add(currentVariant.id);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2400);
  };

  return (
    <SiteShell>
      <div className="pd-page">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pd-product-breadcrumb">
          <Link to="/" className="pd-product-back-link">
            <ArrowLeft size={14} />
            <span>RETURN TO SANCTUARY</span>
          </Link>
          <span className="pd-breadcrumb-sep">/</span>
          <span className="pd-breadcrumb-curr">{p.title}</span>
        </nav>

        <div className="pd-product">
          {/* Gallery Section */}
          <div className="pd-product-media">
            <div className="pd-product-main-img-wrap">
              {activeImg ? (
                <img
                  src={activeImg}
                  alt={p.title}
                  className="pd-product-main-img"
                  loading="eager"
                />
              ) : (
                <div className="pd-product-no-img">NO VISUAL CAPTURE</div>
              )}
              {isAvailable ? (
                <span className="pd-product-badge pd-badge-live">LIVE ARTIFACT</span>
              ) : (
                <span className="pd-product-badge pd-badge-vault">VAULT LOCKED</span>
              )}
            </div>

            {p.images && p.images.length > 1 && (
              <div className="pd-thumbs" role="tablist" aria-label="Product thumbnails">
                {p.images.map((i, idx) => {
                  const isActive = (selectedImg ?? defaultImg) === i.url;
                  return (
                    <button
                      key={i.url + idx}
                      type="button"
                      className={`pd-thumb-btn ${isActive ? "active" : ""}`}
                      onClick={() => setSelectedImg(i.url)}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img src={i.url} alt={i.altText || `${p.title} preview ${idx + 1}`} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Details & Actions Section */}
          <div className="pd-product-info">
            <div className="pd-product-meta-tag">
              <Sparkles size={12} className="pd-icon-glow" />
              <span>OFFICIAL DEMONIC DROP</span>
            </div>

            <h1 className="pd-product-title">{p.title}</h1>

            <div className="pd-price-row">
              <span className="pd-price">{money(currentVariant?.price ?? p.price, p.currency)}</span>
              <span className={`pd-stock-pill ${isAvailable ? "in-stock" : "out-of-stock"}`}>
                {isAvailable ? "AVAILABLE FOR CLAIM" : "CURRENTLY CONSUMED"}
              </span>
            </div>

            {p.variants && p.variants.length > 1 && (
              <div className="pd-variant-wrap">
                <label htmlFor="variant-select" className="pd-label">
                  SELECT CONFIGURATION // VARIANT
                </label>
                <div className="pd-select-container">
                  <select
                    id="variant-select"
                    className="pd-select"
                    value={variantId}
                    onChange={(e) => {
                      setSelectedVariantId(e.target.value);
                    }}
                    aria-label="Product option"
                  >
                    {p.variants.map((x) => (
                      <option key={x.id} value={x.id} disabled={!x.availableForSale}>
                        {x.title} {x.availableForSale ? "" : "— SOLD OUT"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="pd-product-cta-wrap">
              <button
                type="button"
                className={`pd-btn pd-btn-product ${!isAvailable ? "pd-btn-soldout" : ""}`}
                disabled={busy || !isAvailable}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={16} />
                <span>
                  {isAvailable
                    ? busy
                      ? "SEALING TO CART..."
                      : addedNotice
                      ? "SECURED IN CART ✓"
                      : "CLAIM ARTIFACT (ADD TO CART)"
                    : "SOLD OUT // AWAITING SUMMON"}
                </span>
              </button>

              {addedNotice && (
                <div className="pd-added-banner">
                  <Check size={14} />
                  <span>ARTIFACT SECURED TO YOUR CART.</span>
                </div>
              )}
            </div>

            {/* Description / Story */}
            {p.descriptionHtml ? (
              <div className="pd-product-desc-box">
                <div className="pd-desc-header">ARTIFACT LOG // DESCRIPTION</div>
                <div
                  className="pd-rich pd-desc-content"
                  dangerouslySetInnerHTML={{ __html: p.descriptionHtml }}
                />
              </div>
            ) : (
              <div className="pd-product-desc-box">
                <div className="pd-desc-header">ARTIFACT LOG // LORE</div>
                <p className="pd-muted">
                  Forged in the veil. Keep away from daylight. Don't Paint Demons, Kids.
                </p>
              </div>
            )}

            {/* Discord Drop Notice */}
            <div className="pd-product-discord-notice">
              <ShieldAlert size={16} className="pd-icon-alert" />
              <div>
                <strong>WANT INSTANT DROP NOTIFICATIONS?</strong>
                <p>Track unlocked restocks and secret drops live in our Discord realm.</p>
                <a
                  href="https://discord.gg/XQFhMYMH9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-discord-link"
                >
                  JOIN DISCORD FOR STATUS BROADCASTS →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

function ProductNotFound() {
  return (
    <SiteShell>
      <div className="pd-page">
        <div className="pd-product-error-card">
          <AlertCircle size={44} className="pd-skull-icon" />
          <h1 className="pd-error-title">ARTIFACT NOT FOUND IN THIS REALM</h1>
          <p className="pd-error-desc">
            The demonic mask or artifact you sought has either been consumed by the abyss,
            has not yet materialized, or its password seal has locked it away.
          </p>
          <div className="pd-error-actions">
            <Link to="/" className="pd-btn pd-btn-secondary">
              <ArrowLeft size={14} />
              <span>RETURN TO HOME</span>
            </Link>
            <Link to="/pages/$handle" params={{ handle: "good-attire" }} className="pd-btn pd-btn-primary">
              <span>EXPLORE GOOD ATTIRE</span>
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

function ProductError({ reset }: { error: Error; reset: () => void }) {
  return (
    <SiteShell>
      <div className="pd-page">
        <div className="pd-product-error-card">
          <AlertCircle size={44} className="pd-skull-icon" />
          <h1 className="pd-error-title">CONNECTION TO REALM SEVERED</h1>
          <p className="pd-error-desc">
            Failed to retrieve live artifact status from the Shopify Storefront portal.
          </p>
          <div className="pd-error-actions">
            <button type="button" onClick={reset} className="pd-btn pd-btn-primary">
              <span>RE-ATTEMPT SUMMON</span>
            </button>
            <Link to="/" className="pd-btn pd-btn-secondary">
              <span>RETURN HOME</span>
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
