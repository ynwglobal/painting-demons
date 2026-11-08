import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { asset, money } from "@/lib/assets";
import { useCart } from "@/lib/cart-store";

const NAV = [
  ["Home", "/"], ["Good Attire", "good-attire"], ["Projects", "projects"], ["Cyber Modeling", "cyber-modeling"],
  ["How To's", "how-tos"], ["Antagonist", "antagonist"], ["Kryptoids", "kryptoids"], ["Angels", "angels"], ["SlimeTech", "slimetech"],
] as const;

export function SiteShell({ children, raw = false }: { children: ReactNode; raw?: boolean }) {
  const { cart, setOpen } = useCart();
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const count = cart?.totalQuantity ?? 0;
  return (
    <div className="pd-homepage">
      <div className="pd-header-wrap">
        <div className="pd-topbar">
          <div className="pd-topbar-left">
            <a href="https://instagram.com/paintingdemons" target="_blank" rel="noopener" className="pd-ig-link" aria-label="Instagram">
              <img src={asset.ig} alt="Instagram" />
            </a>
            <form className="pd-search-form" role="search" onSubmit={(e) => { e.preventDefault(); navigate({ to: "/search", search: { q } }); }}>
              <input type="text" className="pd-search-input" aria-label="Search" value={q} onChange={(e) => setQ(e.target.value)} />
              <button type="submit" className="pd-search-btn">Search</button>
            </form>
            <span className="pd-cyberengine"><img src={asset.cyberengine} alt="Powered by Cyberengine 3.0" /></span>
            <div className="pd-cart-link" style={{ cursor: "pointer" }} onClick={() => setOpen(true)} role="button" aria-label="Open cart">
              <img src={asset.cart} alt="Cart" width={28} height={28} />
              <span className={`pd-cart-badge ${count > 0 ? "show" : ""}`}>{count}</span>
            </div>
          </div>
          <div className="pd-topbar-right">
            <Link to="/" className="pd-logo"><img src={asset.logo} alt="Don't Paint Demons, Kids!" /></Link>
          </div>
        </div>
        <nav className="pd-navbar" aria-label="Main navigation">
          {NAV.map(([label, h]) => h === "/" ? (
            <Link key={label} to="/" className="pd-nav-link">{label}</Link>
          ) : (
            <Link key={label} to="/pages/$handle" params={{ handle: h }} className="pd-nav-link">{label}</Link>
          ))}
        </nav>
      </div>
      <div className={raw ? undefined : "pd-main"} style={{ position: "relative" }}>
        {children}
      </div>
      <footer className="pd-footer">© Copyright 2026 paintingdemons.com, brought to you by SlimeTech. All rights reserved.</footer>
      <CartDrawer />
    </div>
  );
}

function CartDrawer() {
  const { cart, open, setOpen, update, busy } = useCart();
  if (!open) return null;
  return (
    <div className="pd-drawer-backdrop" onClick={() => setOpen(false)}>
      <aside className="pd-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="pd-drawer-head"><span>Your Cart</span><button onClick={() => setOpen(false)} aria-label="Close">✕</button></div>
        {!cart || cart.lines.length === 0 ? <p className="pd-muted">Your cart is empty.</p> : (
          <>
            <ul className="pd-drawer-lines">
              {cart.lines.map((l) => (
                <li key={l.id}>
                  {l.image && <img src={l.image} alt="" />}
                  <div style={{ flex: 1 }}>
                    <div>{l.title}</div>
                    {l.variant !== "Default Title" && <div className="pd-muted">{l.variant}</div>}
                    <div className="pd-qty">
                      <button disabled={busy} onClick={() => update(l.id, l.quantity - 1)}>−</button>
                      <span>{l.quantity}</span>
                      <button disabled={busy} onClick={() => update(l.id, l.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div>{money(l.price, cart.currency)}</div>
                </li>
              ))}
            </ul>
            <div className="pd-drawer-total"><span>Total</span><span>{money(cart.total, cart.currency)}</span></div>
            <a className="pd-btn" href={cart.checkoutUrl}>Checkout</a>
          </>
        )}
      </aside>
    </div>
  );
}
