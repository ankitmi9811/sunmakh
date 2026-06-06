import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { categories } from "@/data/products";

export function Categories() {
  return (
    <section className="container-page py-16">
      <div className="text-center mb-10">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Shop by Category</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Find your flavor</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link to="/shop" className="group block">
              <div className="aspect-square rounded-2xl bg-cream overflow-hidden mb-3 border border-border/60">
                <img src={c.image} alt={c.name} loading="lazy" width={400} height={400}
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="text-center font-semibold text-sm group-hover:text-primary transition-colors">{c.name}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
