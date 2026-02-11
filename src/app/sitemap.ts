import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://refractweb.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/work",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...routes];
}
