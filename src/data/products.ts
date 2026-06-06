import classic from "@/assets/product-classic.jpg";
import peri from "@/assets/product-peri.jpg";
import pudina from "@/assets/product-pudina.jpg";
import cheese from "@/assets/product-cheese.jpg";
import chocolate from "@/assets/product-chocolate.jpg";
import gift from "@/assets/product-gift.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  flavor: string;
  weight: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description: string;
  ingredients: string;
  nutrition: { protein: string; fiber: string; calories: string; fat: string };
};

export const products: Product[] = [
  {
    id: "classic-roasted",
    name: "Classic Roasted Makhana",
    category: "Classic",
    flavor: "Lightly Salted",
    weight: "100g",
    price: 199,
    mrp: 249,
    rating: 4.8,
    reviews: 1240,
    image: classic,
    badge: "Bestseller",
    description: "Lightly roasted in cold-pressed oil with a hint of Himalayan pink salt. The cleanest, crunchiest makhana you'll ever eat.",
    ingredients: "Makhana (Fox Nuts), Cold-pressed Sunflower Oil, Himalayan Pink Salt.",
    nutrition: { protein: "9.7g", fiber: "14.5g", calories: "347 kcal", fat: "0.1g" },
  },
  {
    id: "peri-peri",
    name: "Peri Peri Makhana",
    category: "Peri Peri",
    flavor: "Spicy",
    weight: "85g",
    price: 199,
    mrp: 249,
    rating: 4.7,
    reviews: 980,
    image: peri,
    badge: "Hot",
    description: "Bold African peri peri spices wrap every makhana with fiery flavor. Spicy, smoky, and seriously addictive.",
    ingredients: "Makhana, Sunflower Oil, Peri Peri Seasoning, Red Chilli, Garlic, Salt.",
    nutrition: { protein: "9.2g", fiber: "13.8g", calories: "362 kcal", fat: "1.2g" },
  },
  {
    id: "pudina",
    name: "Pudina Makhana",
    category: "Pudina",
    flavor: "Mint",
    weight: "85g",
    price: 189,
    mrp: 239,
    rating: 4.6,
    reviews: 612,
    image: pudina,
    description: "Cool mint and tangy chaat masala make this our most refreshing flavor. Perfect with chai.",
    ingredients: "Makhana, Sunflower Oil, Dried Mint, Chaat Masala, Black Salt.",
    nutrition: { protein: "9.4g", fiber: "14.2g", calories: "352 kcal", fat: "1.0g" },
  },
  {
    id: "cheese",
    name: "Cheese Makhana",
    category: "Cheese",
    flavor: "Cheesy",
    weight: "85g",
    price: 209,
    mrp: 259,
    rating: 4.7,
    reviews: 745,
    image: cheese,
    description: "Real cheddar powder, dialed up. Kid-approved, guilt-free crunch.",
    ingredients: "Makhana, Sunflower Oil, Cheddar Cheese Powder, Milk Solids, Salt.",
    nutrition: { protein: "10.1g", fiber: "13.5g", calories: "371 kcal", fat: "1.8g" },
  },
  {
    id: "chocolate",
    name: "Chocolate Coated Makhana",
    category: "Chocolate",
    flavor: "Sweet",
    weight: "100g",
    price: 299,
    mrp: 349,
    rating: 4.9,
    reviews: 410,
    image: chocolate,
    badge: "New",
    description: "Premium 54% dark chocolate over crunchy makhana. Dessert, reimagined.",
    ingredients: "Makhana, Dark Chocolate (54% cocoa), Sugar, Cocoa Butter, Milk Solids.",
    nutrition: { protein: "8.4g", fiber: "11.2g", calories: "445 kcal", fat: "12g" },
  },
  {
    id: "gift-pack",
    name: "Premium Gift Pack",
    category: "Gift Packs",
    flavor: "Assorted",
    weight: "500g",
    price: 899,
    mrp: 1199,
    rating: 4.9,
    reviews: 320,
    image: gift,
    badge: "Limited",
    description: "Six handpicked flavors in a beautifully designed gift box. The healthier way to celebrate.",
    ingredients: "Assorted makhana flavors. See individual packs.",
    nutrition: { protein: "9.5g", fiber: "13.5g", calories: "360 kcal", fat: "2g" },
  },
];

export const categories = [
  { name: "Classic", slug: "Classic", image: classic },
  { name: "Peri Peri", slug: "Peri Peri", image: peri },
  { name: "Pudina", slug: "Pudina", image: pudina },
  { name: "Cheese", slug: "Cheese", image: cheese },
  { name: "Chocolate", slug: "Chocolate", image: chocolate },
  { name: "Gift Packs", slug: "Gift Packs", image: gift },
];
