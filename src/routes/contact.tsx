import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MakhanaHub" },
      { name: "description", content: "Get in touch with the MakhanaHub team. We'd love to hear from you." },
      { property: "og:title", content: "Contact MakhanaHub" },
      { property: "og:description", content: "Questions, partnerships, feedback — we're here." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container-page py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">Let's talk</h1>
        <p className="text-muted-foreground">Questions, partnerships, or just feedback — we read every message.</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-card rounded-3xl p-7 border border-border/60 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" type="text" />
            <Field label="Email" type="email" />
          </div>
          <Field label="Subject" type="text" />
          <div>
            <label className="block text-sm font-semibold mb-1.5">Message</label>
            <textarea required rows={5} className="w-full bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:border-primary text-sm" />
          </div>
          <button className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:shadow-glow transition-shadow">
            {sent ? "Message sent ✓" : "Send Message"}
          </button>
        </form>

        <aside className="space-y-4">
          {[
            { Icon: Mail, label: "Email", value: "hello@makhanahub.in" },
            { Icon: Phone, label: "Phone", value: "+91 98765 43210" },
            { Icon: MapPin, label: "Address", value: "Madhubani, Bihar, India 847211" },
          ].map((c) => (
            <div key={c.label} className="bg-card rounded-2xl p-5 border border-border/60 flex gap-4">
              <div className="size-10 rounded-xl bg-primary-soft text-primary grid place-items-center flex-shrink-0">
                <c.Icon className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="font-semibold mt-0.5">{c.value}</div>
              </div>
            </div>
          ))}
          <div className="aspect-square rounded-2xl overflow-hidden border border-border/60">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=86.0%2C26.3%2C86.2%2C26.4&layer=mapnik"
              className="size-full" loading="lazy"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5">{label}</label>
      <input required type={type} className="w-full bg-background border border-border rounded-full px-4 py-3 focus:outline-none focus:border-primary text-sm" />
    </div>
  );
}
