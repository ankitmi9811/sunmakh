import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, Tag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — MakhanaHub" },
      { name: "description", content: "Review your cart and check out securely." },
    ],
    links: [{ rel: "canonical", href: "/cart" }],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, subtotal } = useCart();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(0);

  const sub = subtotal();
  const discount = Math.round(sub * applied);
  const shipping = sub - discount > 499 || sub === 0 ? 0 : 49;
  const gst = Math.round((sub - discount) * 0.05);
  const total = Math.max(0, sub - discount + shipping + gst);

  if (items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="font-display text-3xl font-bold mb-3">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Add some crunchy goodness to get started.</p>
        <Link to="/shop" className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        <div className="space-y-3">
          {items.map((i) => (
            <div key={i.product.id} className="bg-card rounded-2xl p-4 border border-border/60 flex gap-4">
              <div className="size-24 rounded-xl bg-cream overflow-hidden flex-shrink-0">
                <img src={i.product.image} alt={i.product.name} width={200} height={200} className="size-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold">{i.product.name}</h3>
                    <p className="text-xs text-muted-foreground">{i.product.weight} • {i.product.flavor}</p>
                  </div>
                  <button onClick={() => remove(i.product.id)} className="text-muted-foreground hover:text-destructive" aria-label="Remove">
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <div className="flex items-end justify-between mt-3">
                  <div className="flex items-center bg-secondary rounded-full">
                    <button onClick={() => setQty(i.product.id, i.qty - 1)} className="p-2"><Minus className="size-3.5" /></button>
                    <span className="px-3 font-semibold text-sm w-8 text-center">{i.qty}</span>
                    <button onClick={() => setQty(i.product.id, i.qty + 1)} className="p-2"><Plus className="size-3.5" /></button>
                  </div>
                  <div className="font-bold">₹{i.product.price * i.qty}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="bg-card rounded-2xl p-6 border border-border/60 h-fit lg:sticky lg:top-24">
          <h2 className="font-display font-bold text-xl mb-4">Order Summary</h2>

          <div className="flex gap-2 mb-5">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input value={coupon} onChange={(e) => setCoupon(e.target.value.toUpperCase())} placeholder="Coupon code"
                className="w-full pl-9 pr-3 py-2.5 bg-background border border-border rounded-full text-sm focus:border-primary focus:outline-none" />
            </div>
            <button onClick={() => setApplied(coupon === "HEALTHY20" ? 0.2 : 0)}
              className="px-4 py-2.5 bg-foreground text-background rounded-full text-sm font-semibold">
              Apply
            </button>
          </div>
          {applied > 0 && <p className="text-success text-xs mb-3 font-semibold">✓ Coupon applied: {applied * 100}% off</p>}

          <div className="space-y-2.5 text-sm pb-4 border-b border-border">
            <Row label="Subtotal" value={`₹${sub}`} />
            {discount > 0 && <Row label="Discount" value={`-₹${discount}`} positive />}
            <Row label="Shipping" value={shipping === 0 ? "FREE" : `₹${shipping}`} />
            <Row label="GST (5%)" value={`₹${gst}`} />
          </div>
          <div className="flex justify-between items-center py-4">
            <span className="font-display font-bold text-lg">Total</span>
            <span className="font-display font-bold text-2xl">₹{total}</span>
          </div>
          <button className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-full hover:shadow-glow transition-shadow">
            Proceed to Checkout
          </button>
          <p className="text-xs text-center text-muted-foreground mt-3">Secure payment • Razorpay / UPI / COD</p>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={positive ? "text-success font-semibold" : "font-medium"}>{value}</span>
    </div>
  );
}
