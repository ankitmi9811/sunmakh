import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Healthy Snacking Blog — MakhanaHub" },
      { name: "description", content: "Tips, recipes and nutrition science on makhana, healthy Indian snacks, and weight loss foods." },
      { property: "og:title", content: "Blog — MakhanaHub" },
      { property: "og:description", content: "Nutrition science and healthy snacking guides." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { title: "9 Surprising Health Benefits of Makhana", cat: "Nutrition", read: "5 min", excerpt: "From heart health to better sleep — why ancient fox nuts are India's new superfood." },
  { title: "The Best Weight Loss Snacks for Indians", cat: "Weight Loss", read: "6 min", excerpt: "Tasty snacks under 150 calories that actually keep you full." },
  { title: "Protein-Rich Vegetarian Foods You're Missing", cat: "Protein", read: "4 min", excerpt: "Beyond paneer and dal — 10 powerhouse plant proteins." },
  { title: "Healthy Indian Snacks for Tea Time", cat: "Recipes", read: "7 min", excerpt: "Reinvent chai-time with these guilt-free crunchy classics." },
];

function Blog() {
  return (
    <div className="container-page py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Blog</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">The Crunch Journal</h1>
        <p className="text-muted-foreground">Nutrition, recipes, and the science of healthy snacking.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p, i) => (
          <article key={i} className="bg-card rounded-3xl overflow-hidden border border-border/60 hover-lift">
            <div className="aspect-[16/9] gradient-warm" />
            <div className="p-7">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="bg-primary-soft text-primary font-semibold px-2.5 py-1 rounded-full">{p.cat}</span>
                <span>{p.read} read</span>
              </div>
              <h2 className="font-display text-xl font-bold mb-2">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              <a href="#" className="text-primary text-sm font-semibold mt-4 inline-block hover:underline">Read more →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
