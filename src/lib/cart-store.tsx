import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { addToCart, fetchCart, updateCartLine, type Cart } from "./shopify.functions";

const KEY = "pd_cart_id";
type Ctx = { cart: Cart | null; open: boolean; setOpen: (o: boolean) => void; busy: boolean;
  add: (variantId: string, qty?: number) => Promise<void>; update: (lineId: string, qty: number) => Promise<void> };
const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const id = localStorage.getItem(KEY);
    if (id) fetchCart({ data: { cartId: id } }).then((c) => { if (c) setCart(c); else localStorage.removeItem(KEY); }).catch(() => {});
  }, []);
  const save = (c: Cart | null) => { setCart(c); if (c) localStorage.setItem(KEY, c.id); };
  const add = useCallback(async (variantId: string, quantity = 1) => {
    setBusy(true);
    try { save(await addToCart({ data: { cartId: localStorage.getItem(KEY), variantId, quantity } })); setOpen(true); } finally { setBusy(false); }
  }, []);
  const update = useCallback(async (lineId: string, quantity: number) => {
    const id = localStorage.getItem(KEY); if (!id) return;
    setBusy(true);
    try { save(await updateCartLine({ data: { cartId: id, lineId, quantity } })); } finally { setBusy(false); }
  }, []);
  return <CartCtx.Provider value={{ cart, open, setOpen, busy, add, update }}>{children}</CartCtx.Provider>;
}
export const useCart = () => { const c = useContext(CartCtx); if (!c) throw new Error("no cart"); return c; };
