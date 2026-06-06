import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-makhana.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-warm">
      <div className="container-page grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-background/70 backdrop-blur border border-border rounded-full px-3 py-1.5 text-xs font-medium mb-6">
            <Sparkles className="size-3.5 text-primary" />
            Trusted by 50,000+ healthy snackers
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            India's Healthiest <span className="text-primary">Makhana</span> Delivered To Your Doorstep
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
            Roasted • Healthy • Protein Rich • No Preservatives. Crafted with cold-pressed oils and the cleanest spices.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full shadow-glow hover:scale-[1.03] transition-transform"
            >
              Shop Now <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-background border border-border font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              Explore Products
            </Link>
          </div>
          <div className="mt-10 flex gap-8">
            {[
              { v: "50K+", l: "Happy Customers" },
              { v: "4.8★", l: "Avg Rating" },
              { v: "100%", l: "Natural" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full animate-float" aria-hidden />
          <img
            src={heroImg}
            alt="Bowl of premium roasted makhana"
            width={1536}
            height={1280}
            className="relative w-full rounded-3xl shadow-card object-cover aspect-[5/4]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-4 sm:left-6 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 border border-border"
          >
            <div className="size-12 rounded-xl bg-primary-soft grid place-items-center text-2xl">🌱</div>
            <div>
              <div className="font-semibold text-sm">100% Natural</div>
              <div className="text-xs text-muted-foreground">No preservatives</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
