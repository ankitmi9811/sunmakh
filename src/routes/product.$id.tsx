import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Minus, Plus, ShieldCheck, Truck, Leaf } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/store/cart";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: `${p?.name ?? "Product"} — MakhanaHub` },
        { name: "description", content: p?.description ?? "" },
        { property: "og:title", content: p?.name ?? "Product" },
        { property: "og:description", content: p?.description ?? "" },
        { property: "og:type", content: "product" },
        { property: "og:image", content: p?.image ?? "" },
      ],
      links: p ? [{ rel: "canonical", href: `/product/${p.id}` }] : [],
      scripts: p ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.description,
          image: p.image,
          aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviews },
          offers: { "@type": "Offer", priceCurrency: "INR", price: p.price, availability: "https://schema.org/InStock" },
        }),
      }] : [],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Product not found</h1>
      <Link to="/shop" className="text-primary mt-4 inline-block">Back to shop</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"desc" | "ingredients" | "nutrition" | "reviews">("desc");
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="container-page py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-cream rounded-3xl overflow-hidden aspect-square">
          <img src={product.image} alt={product.name} width={800} height={800} className="size-full object-cover" />
        </div>
        <div>
          {product.badge && (
            <span className="inline-block bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
              {product.badge}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`size-4 ${i < Math.round(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating} • {product.reviews} reviews</span>
          </div>

          <div className="flex items-end gap-3 mb-6">
            <span className="font-display text-4xl font-bold">₹{product.price}</span>
            <span className="text-muted-foreground line-through">₹{product.mrp}</span>
            {off > 0 && <span className="text-success font-semibold">Save {off}%</span>}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="mb-6">
            <p className="text-sm font-semibold mb-2">Weight</p>
            <div className="flex gap-2">
              {[product.weight, "200g", "500g"].map((w, i) => (
                <button key={w} className={`px-4 py-2 rounded-full border text-sm font-medium ${i === 0 ? "border-primary bg-primary-soft" : "border-border hover:border-primary"}`}>
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-secondary rounded-full">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3" aria-label="Decrease"><Minus className="size-4" /></button>
              <span className="px-4 font-semibold w-10 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-3" aria-label="Increase"><Plus className="size-4" /></button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => add(product, qty)} className="flex-1 bg-background border-2 border-primary text-primary font-semibold py-3.5 rounded-full hover:bg-primary-soft transition-colors">
              Add to Cart
            </button>
            <Link to="/cart" onClick={() => add(product, qty)} className="flex-1 text-center bg-primary text-primary-foreground font-semibold py-3.5 rounded-full hover:shadow-glow transition-shadow">
              Buy Now
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-8 pt-8 border-t border-border">
            {[
              { Icon: Truck, label: "Free shipping ₹499+" },
              { Icon: ShieldCheck, label: "Secure checkout" },
              { Icon: Leaf, label: "100% natural" },
            ].map((it) => (
              <div key={it.label} className="text-center">
                <it.Icon className="size-5 mx-auto text-primary mb-1.5" />
                <p className="text-xs text-muted-foreground">{it.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex gap-2 border-b border-border overflow-x-auto">
          {[
            { id: "desc", label: "Description" },
            { id: "ingredients", label: "Ingredients" },
            { id: "nutrition", label: "Nutrition Facts" },
            { id: "reviews", label: "Reviews" },
          ].map((t) => (
            <button key={t.id} onClick={() => setTab(t.id as typeof tab)}
              className={`px-5 py-3 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors ${tab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="py-8 text-muted-foreground max-w-3xl">
          {tab === "desc" && <p>{product.description}</p>}
          {tab === "ingredients" && <p>{product.ingredients}</p>}
          {tab === "nutrition" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(product.nutrition).map(([k, v]) => (
                <div key={k} className="bg-card rounded-xl p-4 border border-border/60">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
                  <div className="font-display font-bold text-xl text-foreground mt-1">{String(v)}</div>
                </div>
              ))}
            </div>
          )}
          {tab === "reviews" && <p>Loved by {product.reviews}+ customers. Average rating {product.rating}/5.</p>}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl font-bold mb-6">You may also like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
