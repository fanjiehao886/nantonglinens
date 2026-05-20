import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";
import { PRODUCTS_QUERY, POSTS_QUERY } from "@/lib/queries";

const BASE_URL = "https://www.nantonglinens.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await client.fetch(PRODUCTS_QUERY).catch(() => []);
  const posts = await client.fetch(POSTS_QUERY).catch(() => []);

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/rfq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  // Dynamic product pages
  const productPages = (products || []).map((p: any) => ({
    url: `${BASE_URL}/products/${p.slug?.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic blog pages
  const blogPages = (posts || []).map((p: any) => ({
    url: `${BASE_URL}/blog/${p.slug?.current}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
