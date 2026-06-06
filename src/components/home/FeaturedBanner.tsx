import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FeaturedBanner() {
  return (
    <section className="container-page py-12">
      <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 sm:p-16 text-center">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 20% 20%, white, transparent 40%), radial-gradient(circle at 80% 80%, white, transparent 40%)" }} />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-primary-foreground/80 font-medium text-sm uppercase tracking-widest mb-3">Limited time</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Healthy snacking starts here
          </h2>
          <p className="text-primary-foreground/90 mb-7">Flat 20% off on your first order. Use code <span className="font-bold">HEALTHY20</span></p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-card"
          >
            Shop Collection <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
