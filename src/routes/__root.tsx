import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import siteCss from "../site.css?url";
import { CartProvider } from "../lib/cart-store";
import { reportError } from "../lib/error-reporting";
import themeCss from "../pd-theme.css?url";
import { asset } from "../lib/assets";
import { SiteShell } from "../components/SiteShell";
import { Skull, AlertTriangle, ArrowLeft, ExternalLink, Flame } from "lucide-react";

function NotFoundComponent() {
  return (
    <CartProvider>
      <SiteShell raw>
        <div className="pd-404-wrap">
          <div className="pd-404-container">
            {/* Ominous Mask / Sigil */}
            <div className="pd-404-icon-wrap">
              <img
                src={asset.masktop}
                alt="Demonic Mask"
                className="pd-404-mask"
              />
              <div className="pd-404-sigil-badge">
                <AlertTriangle size={15} />
                <span>REALM ERROR // ENTITY NOT FOUND</span>
              </div>
            </div>

            {/* Title with blood-red gothic glow */}
            <h1 className="pd-404-code">404</h1>
            <h2 className="pd-404-subtitle">LOST IN THE VEIL // SOUL CONSUMED</h2>

            {/* Atmosphere text */}
            <p className="pd-404-desc">
              You stepped beyond the mortal boundaries into the dark abyss. The page, artifact, or product drop you are hunting does not exist in this realm — or the demons have already devoured it.
            </p>

            <div className="pd-404-warning-box">
              <Skull size={18} className="pd-404-skull" />
              <span>DON'T PAINT DEMONS, KIDS. STAY ON THE MARKED PATH.</span>
            </div>

            {/* Navigation links & Discord tracker */}
            <div className="pd-404-actions">
              <Link to="/" className="pd-404-btn pd-404-btn-primary">
                <ArrowLeft size={16} />
                <span>ESCAPE TO SANCTUARY (HOME)</span>
              </Link>
              <a
                href="https://discord.gg/XQFhMYMH9"
                target="_blank"
                rel="noopener noreferrer"
                className="pd-404-btn pd-404-btn-discord"
              >
                <Flame size={16} />
                <span>JOIN DISCORD FOR DROP UPDATES</span>
                <ExternalLink size={14} />
              </a>
              <Link to="/pages/$handle" params={{ handle: "good-attire" }} className="pd-404-btn pd-404-btn-sub">
                BROWSE GOOD ATTIRE
              </Link>
              <Link to="/pages/$handle" params={{ handle: "slimetech" }} className="pd-404-btn pd-404-btn-sub">
                EXPLORE SLIMETECH
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .pd-404-wrap {
            min-height: calc(100vh - 180px);
            background-color: #000;
            background-image: url('https://paintingdemons.com/cdn/shop/t/55/assets/blood.webp?v=39001067605903035731790206086');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 16px;
            font-family: 'Courier New', Courier, monospace;
            position: relative;
          }

          .pd-404-wrap::before {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.78);
            pointer-events: none;
          }

          .pd-404-container {
            position: relative;
            z-index: 2;
            max-width: 680px;
            width: 100%;
            background: linear-gradient(180deg, rgba(24, 0, 0, 0.96) 0%, rgba(8, 0, 0, 0.98) 100%);
            border: 2px solid #8b0000;
            box-shadow: 0 0 35px rgba(220, 20, 60, 0.45), inset 0 0 25px rgba(100, 0, 0, 0.3);
            border-radius: 6px;
            padding: 36px 28px;
            text-align: center;
            overflow: hidden;
          }

          .pd-404-icon-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 16px;
          }

          .pd-404-mask {
            width: 120px;
            height: auto;
            display: block;
            filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.7));
            animation: pdFloat 3s ease-in-out infinite;
          }

          @keyframes pdFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          .pd-404-sigil-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(139, 0, 0, 0.4);
            border: 1px solid #ff2222;
            color: #ff4d4d;
            font-size: 11px;
            letter-spacing: 0.12em;
            padding: 4px 12px;
            border-radius: 2px;
            margin-top: 14px;
            text-shadow: 0 0 8px rgba(255, 0, 0, 0.6);
          }

          .pd-404-code {
            font-size: clamp(64px, 12vw, 96px);
            font-weight: 900;
            color: #ff1a1a;
            line-height: 1;
            margin: 12px 0 6px 0;
            letter-spacing: 0.08em;
            text-shadow: 0 0 25px rgba(255, 0, 0, 0.8), 0 0 50px rgba(139, 0, 0, 0.6);
          }

          .pd-404-subtitle {
            font-size: clamp(14px, 3.5vw, 18px);
            font-weight: bold;
            color: #ffffff;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            margin-bottom: 16px;
            text-shadow: 0 0 10px rgba(255, 50, 50, 0.5);
          }

          .pd-404-desc {
            font-size: 13px;
            line-height: 1.6;
            color: #bbbbbb;
            margin-bottom: 20px;
            max-width: 540px;
            margin-left: auto;
            margin-right: auto;
          }

          .pd-404-warning-box {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: rgba(30, 0, 0, 0.6);
            border: 1px dashed #aa0000;
            color: #ff7777;
            font-size: 11px;
            letter-spacing: 0.1em;
            padding: 8px 12px;
            margin-bottom: 24px;
          }

          .pd-404-skull {
            color: #ff2222;
            flex-shrink: 0;
          }

          .pd-404-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            justify-content: center;
          }

          .pd-404-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 10px 16px;
            border-radius: 2px;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .pd-404-btn-primary {
            background: #ff1a1a;
            color: #000;
            border: 1px solid #ffffff;
            box-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
          }

          .pd-404-btn-primary:hover {
            background: #ffffff;
            color: #000000;
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.9);
            transform: translateY(-2px);
          }

          .pd-404-btn-discord {
            background: #3b0000;
            color: #ffffff;
            border: 1px solid #ff3333;
            box-shadow: 0 0 12px rgba(255, 51, 51, 0.4);
          }

          .pd-404-btn-discord:hover {
            background: #ff2222;
            color: #000000;
            box-shadow: 0 0 20px rgba(255, 34, 34, 0.8);
            transform: translateY(-2px);
          }

          .pd-404-btn-sub {
            background: #111;
            color: #888;
            border: 1px solid #333;
          }

          .pd-404-btn-sub:hover {
            background: #222;
            color: #fff;
            border-color: #666;
            transform: translateY(-1px);
          }

          @media (max-width: 600px) {
            .pd-404-container {
              padding: 24px 16px;
            }
            .pd-404-btn {
              width: 100%;
              justify-content: center;
            }
          }
        `}</style>
      </SiteShell>
    </CartProvider>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Paintingdemons - Paintingdemons" },
      { name: "description", content: "Don't Paint Demons, Kids!" },
      
      { property: "og:title", content: "Painting Demons" },
      { property: "og:description", content: "Don't Paint Demons, Kids!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: siteCss },
      { rel: "stylesheet", href: themeCss },
      { rel: "stylesheet", href: asset.sigilsCss },
      { rel: "icon", href: asset.favicon, type: "image/webp" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: `window.PD_KRYPTOID_LOGO_URL=${JSON.stringify(asset.kryptoidLogo)};` }} />
        <script src={asset.sigilsJs} defer />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <CartProvider>
        <Outlet />
      </CartProvider>
    </QueryClientProvider>
  );
}
