import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="size-9 rounded-full gradient-primary grid place-items-center text-primary-foreground font-bold">M</div>
            <span className="font-display font-bold text-xl">MakhanaHub</span>
          </div>
          <p className="text-sm text-background/70 leading-relaxed">
            India's premium makhana brand. Roasted, never fried. Made with love in Bihar.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="size-9 rounded-full bg-background/10 hover:bg-primary grid place-items-center transition-colors" aria-label="social">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/shop" className="hover:text-primary">All Products</Link></li>
            <li><Link to="/shop" className="hover:text-primary">Classic Makhana</Link></li>
            <li><Link to="/shop" className="hover:text-primary">Peri Peri</Link></li>
            <li><Link to="/shop" className="hover:text-primary">Gift Packs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><a href="#" className="hover:text-primary">Track Order</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Policies</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><a href="#" className="hover:text-primary">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-primary">Return & Refund</a></li>
            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-page py-5 text-center text-xs text-background/50">
          © {new Date().getFullYear()} MakhanaHub. Crafted with care in India.
        </div>
      </div>
    </footer>
  );
}
