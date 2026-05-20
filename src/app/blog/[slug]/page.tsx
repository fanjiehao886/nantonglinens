import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "@/lib/queries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) return {};

  return {
    title: `${post.title} | Nantong Linens Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author?.name || "Nantong Linens"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) notFound();

  const recentPosts = await client.fetch(POSTS_QUERY);

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-gray-100 bg-gray-50 py-4">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-800">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 truncate">{post.title}</span>
          </nav>
        </div>
      </section>

      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="max-w-3xl">
            {(post.categories || []).length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((cat: any) => (
                  <Link
                    key={cat.title}
                    href={`/blog?category=${cat.slug?.current}`}
                    className="text-xs font-medium text-blue-800 bg-blue-50 px-2.5 py-1 rounded hover:bg-blue-100 transition-colors"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            )}

            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-4 text-lg leading-relaxed text-gray-500">{post.excerpt}</p>
            )}

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-gray-100 py-4 text-sm text-gray-400">
              {post.author?.name && (
                <span className="flex items-center gap-2">
                  {authorImage(post.author)}
                  {post.author.name}
                </span>
              )}
              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              )}
              <span>~5 min read</span>
            </div>
          </header>

          {/* Main image */}
          {post.mainImage?.asset?.url && (
            <div className="mt-8 overflow-hidden rounded-xl">
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="w-full object-cover"
              />
            </div>
          )}

          {/* Body content */}
          <div className="mt-10 max-w-3xl prose prose-gray prose-headings:font-semibold prose-a:text-blue-800 prose-img:rounded-xl">
            {post.body ? (
              <PortableTextContent blocks={post.body} />
            ) : (
              <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  This article is being prepared by our team. Check back soon for the full version,
                  or subscribe to our updates to be notified when it&apos;s published.
                </p>
                <p>In the meantime, feel free to reach out with any questions about this topic.</p>
                <Link href="/rfq" className="inline-flex items-center rounded-full bg-blue-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors mt-4">
                  Ask Us a Question
                </Link>
              </div>
            )}
          </div>

          {/* CTA after article */}
          <div className="mt-12 rounded-xl bg-blue-950 p-8 max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white">Need help with your hotel linen sourcing?</h2>
            <p className="mt-2 text-sm text-blue-200/80">
              Our team can answer specific questions about materials, pricing, or custom requirements.
              Get a free quote within 24 hours.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href="/rfq"
                className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
              >
                Request Quote
              </Link>
              <a
                href={`https://wa.me/8612345678900?text=Hi, I read your blog about "${encodeURIComponent(post.title)}"`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Recent posts sidebar */}
      <aside className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">More Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(recentPosts || [])
              .filter((p: any) => p._id !== post?._id)
              .slice(0, 3)
              .map((rp: any) => (
                <Link
                  key={rp._id}
                  href={`/blog/${rp.slug.current}`}
                  className="group rounded-lg border border-gray-100 bg-white p-4 hover:border-blue-200 transition-colors"
                >
                  <h3 className="font-medium text-sm text-gray-900 group-hover:text-blue-800 line-clamp-2">
                    {rp.title}
                  </h3>
                  {rp.publishedAt && (
                    <p className="mt-1.5 text-xs text-gray-400">
                      {new Date(rp.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  )}
                </Link>
              ))}
          </div>
        </div>
      </aside>
    </>
  );
}

function PortableTextContent({ blocks }: { blocks: any[] }) {
  // Simplified portable text renderer for now — in production you'd use @portabletext/react
  return (
    <div className="space-y-4 text-base leading-relaxed text-gray-700">
      {blocks.map((block, i) => (
        <div key={i}>
          {block._type === "block" && (
            <p>{(block.children as any[])?.map((c: any) => c.text).join("")}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function authorImage(author: any) {
  if (author.image?.asset?.url) {
    return (
      <img
        src={author.image.asset.url}
        alt={author.name}
        className="h-7 w-7 rounded-full object-cover"
      />
    );
  }
  return null;
}
