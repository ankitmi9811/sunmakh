import { Link } from "@tanstack/react-router";
import { Star, Plus } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cart";

export function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border/60 shadow-soft"
    >
      <Link to="/product/$id" params={{ id: product.id }} className="block relative aspect-square bg-cream overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        {off > 0 && (
          <span className="absolute top-3 right-3 z-10 bg-foreground text-background text-[10px] font-bold px-2.5 py-1 rounded-full">
            {off}% OFF
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </Link>
      <div className="p-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
          <Star className="size-3.5 fill-primary text-primary" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviews})</span>
          <span className="mx-1">•</span>
          <span>{product.weight}</span>
        </div>
        <Link to="/product/$id" params={{ id: product.id }}>
          <h3 className="font-display font-semibold text-base leading-tight hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-end justify-between mt-3">
          <div>
            <span className="font-bold text-lg">₹{product.price}</span>
            {off > 0 && <span className="text-sm text-muted-foreground line-through ml-1.5">₹{product.mrp}</span>}
          </div>
          <button
            onClick={() => add(product)}
            className="size-9 rounded-full bg-primary text-primary-foreground grid place-items-center hover:scale-110 hover:shadow-glow transition-all"
            aria-label="Add to cart"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
