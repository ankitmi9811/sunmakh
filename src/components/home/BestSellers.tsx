import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function BestSellers() {
  return (
    <section className="container-page py-16">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Bestsellers</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Loved by thousands</h2>
        </div>
        <Link to="/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
          View all <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
