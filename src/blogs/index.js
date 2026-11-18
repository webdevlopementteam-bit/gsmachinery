/*
  ===== BLOG REGISTRY =====
  Naya blog add karne ke liye:
  1. src/blogs/ me nayi file banao (e.g. my-new-blog.jsx). Existing
     pet-bottle-making-machine-price.jsx ko template ki tarah copy karo:
     `meta`, `faqs` (optional) aur default component export karo.
  2. Neeche import karke `posts` array me add kar do.
  3. public/sitemap.xml me URL add kar do.
  Baaki sab (URL /blog/<slug>, listing page card, SEO tags, schema) apne aap ho jayega.
*/
import PetBottleMachinePrice, {
  meta as petBottleMachinePriceMeta,
  faqs as petBottleMachinePriceFaqs,
} from "./pet-bottle-making-machine-price";

const posts = [
  {
    ...petBottleMachinePriceMeta,
    faqs: petBottleMachinePriceFaqs,
    Content: PetBottleMachinePrice,
  },
];

export const SITE_URL = "https://petbottlemakingmachines.com";

// Newest first
export function getAllPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
