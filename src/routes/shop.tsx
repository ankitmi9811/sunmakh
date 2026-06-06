import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Roasted Makhana Online — MakhanaHub" },
      { name: "description", content: "Browse our full range of roasted makhana flavors — classic, peri peri, pudina, cheese, chocolate and gift packs." },
      { property: "og:title", content: "Shop Roasted Makhana — MakhanaHub" },
      { property: "og:description", content: "Premium makhana flavors, delivered across India." },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

function Shop() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState<string>("popular");
  const [max, setMax] = useState(1500);

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      p.name.toLowerCase().includes(q.toLowerCase()) &&
      (cat === "All" || p.category === cat) &&
      p.price <= max,
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "popular") list = [...list].sort((a, b) => b.reviews - a.reviews);
    return list;
  }, [q, cat, sort, max]);

  return (
    <div className="container-page py-12">
      <div className="text-center mb-10">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">Shop all flavors</h1>
        <p className="text-muted-foreground">Premium roasted makhana, crafted in small batches.</p>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products"
              className="w-full pl-9 pr-4 py-3 bg-card rounded-full border border-border focus:border-primary focus:outline-none text-sm"
            />
          </div>

          <div className="bg-card rounded-2xl p-5 border border-border/60">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">Category</h3>
            <div className="flex flex-col gap-1.5">
              {["All", ...categories.map((c) => c.name)].map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${cat === c ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-secondary"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-5 border border-border/60">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">Max Price</h3>
            <input type="range" min={100} max={1500} step={50} value={max}
              onChange={(e) => setMax(Number(e.target.value))} className="w-full accent-primary" />
            <p className="text-sm mt-1 text-muted-foreground">Up to <span className="font-semibold text-foreground">₹{max}</span></p>
          </div>
        </aside>

        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">{filtered.length} products</p>
            <select value={sort} onChange={(e) => setSort(e.target.value)}
              className="bg-card border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary">
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No products match your filters.</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
