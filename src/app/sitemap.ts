import type { MetadataRoute } from "next";
import { blogPosts, services } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/hizmetler",
    "/referanslar",
    "/blog",
    "/kariyer",
    "/iletisim",
    "/kvkk",
    "/gizlilik-politikasi",
    "/kullanim-sartlari",
  ];

  const serviceRoutes = services.map((service) => `/hizmetler/${service.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date("2026-06-06"),
    changeFrequency: route.includes("blog") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/hizmetler") ? 0.9 : 0.7,
  }));
}
