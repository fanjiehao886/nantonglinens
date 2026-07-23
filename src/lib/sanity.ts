import { createClient, SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityConfig = {
  projectId,
  dataset,
  apiVersion: "2024-01-01" as const,
  useCdn: process.env.NODE_ENV === "production",
};

// Lazy client — avoids crash when projectId is not configured
let _client: SanityClient | null = null;

export function getClient(): SanityClient | null {
  if (!projectId) return null;
  if (!_client) {
    try {
      _client = createClient(sanityConfig);
    } catch {
      return null;
    }
  }
  return _client;
}

// Compatibility shim — mimics SanityClient.fetch interface
export const client = {
  async fetch(query: string, params?: Record<string, any>, options?: any): Promise<any> {
    const c = getClient();
    if (!c) return [];
    try {
      return await c.fetch(query, params, options);
    } catch (err) {
      console.error("[sanity] fetch error:", err);
      return [];
    }
  },
} as unknown as SanityClient;

// Image URL builder with safe fallback
let _builder: ReturnType<typeof imageUrlBuilder> | null = null;

// Eagerly initialize builder when projectId is available
function getBuilder() {
  if (!_builder && projectId) {
    try {
      const c = getClient();
      if (c) _builder = imageUrlBuilder(c);
    } catch {
      // ignore
    }
  }
  return _builder;
}

export function urlFor(source: any) {
  const builder = getBuilder();
  if (!builder) {
    // Chainable mock so callers don't crash
    const mock: any = () => mock;
    mock.url = () => "";
    mock.width = () => mock;
    mock.height = () => mock;
    mock.quality = () => mock;
    mock.format = () => mock;
    mock.crop = () => mock;
    mock.fit = () => mock;
    return mock;
  }
  return builder.image(source);
}
