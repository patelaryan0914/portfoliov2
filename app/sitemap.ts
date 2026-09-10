import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    "",
    "#about",
    "#skills",
    "#experience",
    "#projects",
    "#achievements",
    "#contact",
  ];

  return sections.map((hash) => ({
    url: `${siteUrl}/${hash}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: hash === "" ? 1 : 0.8,
  }));
}
