import { useState } from "react";
import { Mail, Check } from "lucide-react";

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="container-page py-16">
      <div className="bg-secondary rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="max-w-md">
          <div className="size-11 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4">
            <Mail className="size-5" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">Join the crunch club</h2>
          <p className="text-muted-foreground text-sm">Get 10% off your first order, plus early access to new flavors.</p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setDone(true); }}
          className="flex w-full md:w-auto flex-col sm:flex-row gap-3 md:min-w-[420px]"
        >
          <input
            required
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-background rounded-full px-5 py-3.5 border border-border focus:border-primary focus:outline-none text-sm"
          />
          <button className="bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover:shadow-glow transition-shadow inline-flex items-center justify-center gap-2">
            {done ? (<><Check className="size-4" />Subscribed</>) : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
