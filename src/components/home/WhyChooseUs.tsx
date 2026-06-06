import { Dumbbell, Wheat, Flame, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { Icon: Dumbbell, title: "High Protein", desc: "9.7g protein per serving for sustained energy." },
  { Icon: Wheat, title: "Rich In Fiber", desc: "14.5g fiber to support healthy digestion." },
  { Icon: Flame, title: "Low Calories", desc: "Just 347 kcal per 100g. Snack guilt-free." },
  { Icon: MapPin, title: "Made In India", desc: "Sourced from Bihar's finest makhana farms." },
];

export function WhyChooseUs() {
  return (
    <section className="container-page py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why MakhanaHub</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Healthy snacking, finally done right</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 border border-border/60 hover-lift"
          >
            <div className="size-12 rounded-xl gradient-primary grid place-items-center text-primary-foreground mb-4">
              <it.Icon className="size-6" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-1.5">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
