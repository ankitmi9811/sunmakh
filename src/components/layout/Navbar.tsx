import { Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const count = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));

  return (
    <>
      <div className="bg-foreground text-background text-xs py-2 text-center font-medium">
        Free shipping on orders above ₹499 • COD available across India
      </div>
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/85 border-b border-border">
        <div className="container-page flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-9 rounded-full gradient-primary grid place-items-center text-primary-foreground font-bold">M</div>
            <span className="font-display font-bold text-xl tracking-tight">MakhanaHub</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button className="p-2 hover:text-primary transition-colors" aria-label="Search">
              <Search className="size-5" />
            </button>
            <button className="p-2 hover:text-primary transition-colors hidden sm:inline-flex" aria-label="Wishlist">
              <Heart className="size-5" />
            </button>
            <button className="p-2 hover:text-primary transition-colors hidden sm:inline-flex" aria-label="Account">
              <User className="size-5" />
            </button>
            <Link to="/cart" className="p-2 relative hover:text-primary transition-colors" aria-label="Cart">
              <ShoppingBag className="size-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full size-4 grid place-items-center">
                  {count}
                </span>
              )}
            </Link>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="md:hidden border-t border-border bg-background">
            <div className="container-page py-3 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
