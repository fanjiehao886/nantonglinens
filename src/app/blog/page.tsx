import { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { POSTS_QUERY } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Blog - Hotel Linen Buying Guides & Hospitality Textile Tips",
  description:
    "Expert guides on sourcing hotel linens, understanding GSM and thread count, choosing the right bedding for your hotel, and more. By Nantong Linens.",
};

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <>
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog &amp; Buying Guides</h1>
          <p className="mt-2 text-gray-500 max-w-xl">
            Expert insights for hotel procurement managers, interior designers,
            and hospitality buyers. Learn how to source smart.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts && posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: any) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group block rounded-xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] bg-gray-50">
                    {post.mainImage?.asset?.url ? (
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-gray-300">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    {/* Categories */}
                    {(post.categories || []).length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((cat: any) => (
                          <span key={cat.title} className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                            {cat.title}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="font-bold text-gray-900 group-hover:text-blue-800 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="mt-2 text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
                    )}

                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                      {post.publishedAt && (
                        <>
                          <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                          <span>&middot;</span>
                        </>
                      )}
                      <span>Read time ~5 min</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Placeholder content when no posts yet */
            <div className="space-y-10">
              {/* SEO/GEO placeholder articles */}
              {[
                {
                  slug: "how-to-choose-hotel-bed-sheets-complete-guide",
                  title: "How to Choose Hotel Bed Sheets: The Complete Buyer's Guide (2024)",
                  excerpt:
                    "Everything hospitality managers need to know about thread count, weave types (percale vs sateen), material options, and cost-quality tradeoffs when buying hotel bed sheets in bulk.",
                },
                {
                  slug: "gsm-guide-hospitality-towels-what-you-need-know",
                  title: "GSM Explained: What Hotel Buyers Need to Know About Towel Weight",
                  excerpt:
                    "GSM (grams per square meter) is the most important spec for towel quality. Learn what GSM range works for budget hotels vs luxury resorts, and why heavier isn't always better.",
                },
                {
                  slug: "sourcing-hotel-linens-china-moq-shipping-tips",
                  title: "Sourcing Hotel Linens from China: MOQ, Shipping & Quality Control Tips",
                  excerpt:
                    "A practical guide for North American hoteliers importing textiles from China. Covers minimum order quantities, payment security, shipping options, and avoiding common pitfalls.",
                },
              ].map((post) => (
                <article
                  key={post.slug}
                  className="rounded-xl border border-gray-100 bg-white p-6 md:p-8"
                >
                  <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                      Coming Soon
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
