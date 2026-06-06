import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — MakhanaHub" },
      { name: "description", content: "How a small farm in Bihar became India's most loved premium makhana brand." },
      { property: "og:title", content: "Our Story — MakhanaHub" },
      { property: "og:description", content: "Healthy snacking, rooted in tradition." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { year: "2019", title: "The Seed", text: "Founded by a small team obsessed with replacing junk snacks with something better." },
  { year: "2021", title: "Bihar Farms", text: "Partnered directly with 200+ makhana farmers in Madhubani for the cleanest harvest." },
  { year: "2023", title: "10,000 Customers", text: "Crossed a milestone — and launched our first chocolate-coated makhana." },
  { year: "2025", title: "Today", text: "50,000+ snackers, 6 flavors, shipping across India." },
];

function About() {
  return (
    <>
      <section className="gradient-warm py-20">
        <div className="container-page max-w-3xl text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-5">Snacking, the way it was meant to be</h1>
          <p className="text-lg text-muted-foreground">We believe healthy doesn't have to mean boring. MakhanaHub was born from a single belief — India deserves a snack that's clean, crunchy, and proud of where it comes from.</p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Mission", text: "Make India's healthiest ancient snack a daily habit for the next generation." },
            { title: "Origin", text: "Sourced directly from Madhubani, Bihar — the makhana capital of the world." },
            { title: "Promise", text: "No preservatives, no shortcuts, no compromises. Roasted in small batches." },
          ].map((c) => (
            <div key={c.title} className="bg-card rounded-2xl p-7 border border-border/60 shadow-soft">
              <h3 className="font-display text-xl font-bold mb-2 text-primary">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Our journey</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex gap-6 mb-10 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}
            >
              <div className="absolute left-4 md:left-auto md:right-0 md:translate-x-1/2 top-2 size-4 rounded-full bg-primary ring-4 ring-background" style={i % 2 !== 0 ? { left: "-0.5rem", right: "auto" } : undefined} />
              <div className="ml-12 md:ml-0 bg-card rounded-2xl p-5 border border-border/60 flex-1">
                <div className="text-primary font-bold text-sm">{t.year}</div>
                <h4 className="font-display font-semibold text-lg mt-1">{t.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
