import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "@/lib/queries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) return {};

  // Truncate description to 160 chars for SEO best practice
  const desc = (post.excerpt || "").slice(0, 157) + (post.excerpt && post.excerpt.length > 157 ? "..." : "");

  return {
    title: `${post.title} | Nantong Linens Blog`,
    description: desc,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: desc,
      type: "article",
      publishedTime: post.publishedAt || undefined,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: post.mainImage?.asset?.url
        ? [{ url: post.mainImage.asset.url, alt: post.mainImage.alt || "" }]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY).catch(() => []);
  return (posts || []).map((p: any) => ({
    slug: p.slug?.current,
  }));
}

/* ---- Minimal Portable Text renderer ---- */
function PortableTextContent({ content }: { content: any[] }) {
  if (!content) return null;
  return (
    <div className="space-y-4 text-base leading-relaxed text-gray-700">
      {content.map((block: any, i: number) => {
        if (block._type === "image") {
          const url = urlFor(block).width(1200).url();
          return (
            <img
              key={i}
              src={url}
              alt={block.alt || ""}
              className="my-6 rounded-xl w-full"
            />
          );
        }
        if (block._type === "callout") {
          const color =
            block.type === "warning"
              ? "border-yellow-300 bg-yellow-50 text-yellow-800"
              : block.type === "tip"
              ? "border-green-300 bg-green-50 text-green-800"
              : "border-blue-300 bg-blue-50 text-blue-800";
          return (
            <div key={i} className={`rounded-xl border p-4 ${color}`}>
              <PortableTextContent content={block.content} />
            </div>
          );
        }
        if (block._type !== "block") return null;
        const text =
          block.children?.map((c: any) => c.text).join("") || "";
        switch (block.style) {
          case "h1":
            return (
              <h1 key={i} className="mt-8 text-2xl font-bold text-gray-900">
                {text}
              </h1>
            );
          case "h2":
            return (
              <h2 key={i} className="mt-6 text-xl font-bold text-gray-900">
                {text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-4 text-lg font-semibold text-gray-900">
                {text}
              </h3>
            );
          case "blockquote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-blue-200 pl-4 italic text-gray-500"
              >
                {text}
              </blockquote>
            );
          default:
            if (!text.trim()) return null;
            return (
              <p key={i} className="mt-2">
                {text}
              </p>
            );
        }
      })}
    </div>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) notFound();

  /* Fetch related posts: match by same categories, excluding current */
  const allPosts = await client.fetch(POSTS_QUERY).catch(() => []);
  const currentCatSlugs = new Set(
    (post.categories || []).map((c: any) => c.slug?.current).filter(Boolean)
  );
  const related = (allPosts || [])
    .filter((p: any) => p.slug?.current !== slug)
    .sort((a: any, b: any) => {
      // Score: number of matching categories (higher = more relevant)
      const aMatches = (a.categories || []).filter((c: any) =>
        currentCatSlugs.has(c.slug?.current)
      ).length;
      const bMatches = (b.categories || []).filter((c: any) =>
        currentCatSlugs.has(c.slug?.current)
      ).length;
      return bMatches - aMatches;
    })
    .slice(0, 3);

  return (
    <>
      {/* Article Schema for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt || "",
            datePublished: post.publishedAt || undefined,
            author: post.author?.name
              ? { "@type": "Person", name: post.author.name }
              : undefined,
            publisher: {
              "@type": "Organization",
              name: "Nantong Linens",
              url: "https://www.nantonglinens.com",
            },
            mainEntityOfPage: `https://www.nantonglinens.com/blog/${slug}`,
            ...(post.mainImage?.asset?.url
              ? { image: post.mainImage.asset.url }
              : {}),
          }),
        }}
      />
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.nantonglinens.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.nantonglinens.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://www.nantonglinens.com/blog/${slug}`,
              },
            ],
          }),
        }}
      />

      {/* Article header */}
      <section className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {(post.categories || []).length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat: any) => (
                <Link
                  key={cat.slug?.current || cat.title}
                  href={`/blog?category=${cat.slug?.current}`}
                  className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-0.5 rounded hover:bg-blue-100 transition-colors"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          )}
          <h1 className="text-3xl font-bold text-gray-900 leading-snug">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            )}
            {post.author?.name && (
              <>
                <span>·</span>
                <span>{post.author.name}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured image */}
      {post.mainImage && (
        <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] overflow-hidden rounded-xl bg-gray-50">
            <img
              src={urlFor(post.mainImage).width(1200).url()}
              alt={post.mainImage.alt || post.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {post.body ? (
            <PortableTextContent content={post.body} />
          ) : (
            <p className="text-gray-400 italic">No content available.</p>
          )}

          {/* Download CTA (Lead Magnet) */}
          <div className="mt-12 rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900">
                  Free PDF: Complete Hotel Linen Buying Guide
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Step-by-step procurement guide covering specs, MOQ, pricing, QC, and shipping — based on real Dieshiqiao experience.
                </p>
              </div>
              <Link
                href="/guides/download"
                className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Download Free Guide
              </Link>
            </div>
          </div>

          {/* Share / CTA */}
          <div className="mt-6 rounded-xl bg-blue-950 p-8 text-center">
            <h2 className="text-xl font-bold text-white">
              Need help sourcing hotel linens?
            </h2>
            <p className="mt-2 text-blue-200/80">
              Get a free quote within 24 hours. No commitment required.
            </p>
            <Link
              href="/rfq"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-12 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p: any) => (
                <Link
                  key={p._id}
                  href={`/blog/${p.slug?.current}`}
                  className="group block rounded-xl border border-gray-100 bg-white p-5 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  {p.excerpt && (
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                      {p.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
