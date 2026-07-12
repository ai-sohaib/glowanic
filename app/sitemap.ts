export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";
import { guides } from "@/data/guides";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/shop", "/about", "/contact", "/disclosure", "/privacy", "/terms"];
  return [
    ...staticPages.map((path) => ({ url: `${siteConfig.url}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...categories.map((category) => ({ url: `${siteConfig.url}/category/${category.slug}`, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...products.map((product) => ({ url: `${siteConfig.url}/product/${product.slug}`, changeFrequency: "weekly" as const, priority: 0.75 })),
    ...guides.map((guide) => ({ url: `${siteConfig.url}/guides/${guide.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
