import { client } from "@/lib/sanity";
import { POSTS_QUERY } from "@/lib/queries";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const baseUrl = "https://www.nantonglinens.com";
  const posts = await client.fetch(POSTS_QUERY).catch(() => []);

  const items = (posts || [])
    .map((post: any) => {
      const url = `${baseUrl}/blog/${post.slug?.current}`;
      const pubDate = post.publishedAt
        ? new Date(post.publishedAt).toUTCString()
        : new Date().toUTCString();

      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.excerpt || ""}]]></description>
      <pubDate>${pubDate}</pubDate>
      ${post.categories?.map((c: any) => `      <category>${c.title}</category>`).join("\n") || ""}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nantong Linens — Hotel Linen Buying Guides &amp; Sourcing Tips</title>
    <link>${baseUrl}</link>
    <description>Free procurement guides for hotel buyers. GSM, thread count, fabric types, QC checklists, and sourcing strategies — from daily experience in Dieshiqiao, the world's largest textile hub.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
