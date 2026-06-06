import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BestSellers } from "@/components/home/BestSellers";
import { Categories } from "@/components/home/Categories";
import { Reviews } from "@/components/home/Reviews";
import { Nutrition } from "@/components/home/Nutrition";
import { FeaturedBanner } from "@/components/home/FeaturedBanner";
import { Newsletter } from "@/components/home/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MakhanaHub — Buy Premium Roasted Makhana Online in India" },
      { name: "description", content: "Shop India's healthiest roasted makhana. Protein-rich, low calorie, no preservatives. Free shipping over ₹499." },
      { property: "og:title", content: "MakhanaHub — Premium Roasted Makhana" },
      { property: "og:description", content: "India's healthiest makhana, delivered to your doorstep." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <BestSellers />
      <Categories />
      <Nutrition />
      <FeaturedBanner />
      <Reviews />
      <Newsletter />
    </>
  );
}
