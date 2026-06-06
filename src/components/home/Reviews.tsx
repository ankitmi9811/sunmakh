import { Star } from "lucide-react";

const reviews = [
  { name: "Ananya S.", city: "Mumbai", rating: 5, text: "Replaced my evening chips with these. Crunchy, flavorful, and I don't feel bloated after. The peri peri is dangerously good." },
  { name: "Rohit M.", city: "Bengaluru", rating: 5, text: "Quality is genuinely premium. Packaging is gorgeous, makhana is crisp till the last bite. Subscribed monthly." },
  { name: "Priya K.", city: "Delhi", rating: 5, text: "Sent the gift pack to my parents for Diwali. They loved every flavor. This is my go-to gifting brand now." },
  { name: "Aditya V.", city: "Pune", rating: 4, text: "Cheese flavor is exactly like my favorite snack but healthier. Wish there were larger pack sizes." },
];

export function Reviews() {
  return (
    <section className="bg-secondary py-20 mt-10">
      <div className="container-page">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Customer Love</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">50,000+ happy snackers</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card rounded-2xl p-6 border border-border/60 shadow-soft">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/85 mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="size-10 rounded-full gradient-primary grid place-items-center text-primary-foreground font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
