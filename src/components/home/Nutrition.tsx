import { motion } from "framer-motion";

const stats = [
  { label: "Protein", value: "9.7g", color: "oklch(0.68 0.17 50)" },
  { label: "Fiber", value: "14.5g", color: "oklch(0.62 0.14 150)" },
  { label: "Calcium", value: "60mg", color: "oklch(0.62 0.13 230)" },
  { label: "Iron", value: "1.4mg", color: "oklch(0.55 0.18 20)" },
];

const compare = [
  { name: "Makhana", calories: 347, fat: 0.1, color: "bg-primary" },
  { name: "Potato Chips", calories: 536, fat: 35, color: "bg-foreground/60" },
  { name: "Popcorn", calories: 387, fat: 4.5, color: "bg-foreground/40" },
];

export function Nutrition() {
  const maxCal = Math.max(...compare.map((c) => c.calories));
  return (
    <section className="container-page py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Nutrition</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Tiny pop. Big nutrition.</h2>
          <p className="text-muted-foreground mb-8">Per 100g serving of MakhanaHub Classic — naturally packed with what your body actually needs.</p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-5 border border-border/60 shadow-soft"
              >
                <div className="font-display text-3xl font-bold" style={{ color: s.color }}>{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border/60 shadow-card">
          <h3 className="font-display text-xl font-bold mb-1">The healthy snack scorecard</h3>
          <p className="text-sm text-muted-foreground mb-6">Calories per 100g</p>
          <div className="space-y-5">
            {compare.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm font-medium mb-1.5">
                  <span>{c.name}</span>
                  <span className="text-muted-foreground">{c.calories} kcal • {c.fat}g fat</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${c.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(c.calories / maxCal) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">Source: USDA & FSSAI nutrition databases.</p>
        </div>
      </div>
    </section>
  );
}
