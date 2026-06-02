import { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { POSTS_QUERY } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Hotel Linen Buying Guides — GSM, Thread Count, Sourcing Tips",
  description:
    "Free procurement guides for hotel buyers. Learn about GSM, thread count, fabric types, QC checklists, MOQ requirements, and how to source hotel linens from China. Based on real Dieshiqiao market experience.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 60; // ISR: revalidate every 60 seconds

const CATEGORIES_QUERY = `*[_type == "category"]{ title, slug }`;

// Predefined category tabs for the Knowledge Hub
const HUB_TABS = [
  { label: "All Guides", slug: null },
  { label: "Buying Guide", slug: "buying-guide" },
  { label: "Fabric Encyclopedia", slug: "fabric-encyclopedia" },
  { label: "QC Checklist", slug: "qc-checklist" },
  { label: "Market Reports", slug: "market-reports" },
];

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.category || null;

  const [posts, categories] = await Promise.all([
    client.fetch(POSTS_QUERY),
    client.fetch(CATEGORIES_QUERY),
  ]);

  // Build tab list: predefined tabs that have matching categories in Sanity
  const availableSlugs = new Set(
    (categories as any[]).map((c: any) => c.slug.current)
  );
  const tabs = HUB_TABS.filter(
    (t) => t.slug === null || availableSlugs.has(t.slug)
  );

  // Filter posts by category slug if active
  const filteredPosts = activeCategory
    ? (posts as any[]).filter((post: any) =>
        (post.categories || []).some(
          (cat: any) => cat.slug?.current === activeCategory
        )
      )
    : (posts as any[]);

  return (
    <>
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Free Hotel Linen Procurement Guides
          </h1>
          <p className="mt-2 text-gray-500 max-w-xl">
            GSM explained, thread count comparisons, QC checklists, and sourcing
            strategies — all from daily experience in Dieshiqiao, the
            world&apos;s largest textile hub.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          {tabs.length > 1 && (
            <div className="mb-10 flex flex-wrap gap-2 border-b border-gray-200 pb-4">
              {tabs.map((tab) => {
                const isActive = tab.slug === activeCategory;
                return (
                  <Link
                    key={tab.slug || "all"}
                    href={tab.slug ? `/blog?category=${tab.slug}` : "/blog"}
                    className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-800 text-white shadow-sm"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          )}

          {filteredPosts && filteredPosts.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post: any) => (
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
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      {/* Categories — now clickable */}
                      {(post.categories || []).length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((cat: any) => (
                            <span
                              key={cat.title}
                              onClick={(e) => e.preventDefault()}
                              className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-0.5 rounded"
                            >
                              {cat.title}
                            </span>
                          ))}
                        </div>
                      )}

                      <h2 className="font-bold text-gray-900 group-hover:text-blue-800 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}

                      <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                        {post.publishedAt && (
                          <>
                            <time dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
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

              {/* Empty state for filtered results */}
              {filteredPosts.length === 0 && activeCategory && (
                <div className="text-center py-16">
                  <p className="text-gray-500">
                    No articles in this category yet. Check back soon.
                  </p>
                  <Link
                    href="/blog"
                    className="mt-4 inline-flex text-sm font-medium text-blue-800 hover:text-blue-600"
                  >
                    ← View all guides
                  </Link>
                </div>
              )}
            </>
          ) : (
            /* Placeholder content when no posts yet */
            <div className="space-y-10">
              {[
                {
                  slug: "how-to-choose-hotel-bed-sheets-complete-guide",
                  title:
                    "How to Choose Hotel Bed Sheets: The Complete Buyer's Guide",
                  excerpt:
                    "Everything hospitality managers need to know about thread count, weave types (percale vs sateen), material options, and cost-quality tradeoffs when buying hotel bed sheets in bulk.",
                },
                {
                  slug: "gsm-guide-hospitality-towels-what-you-need-know",
                  title:
                    "GSM Explained: What Hotel Buyers Need to Know About Towel Weight",
                  excerpt:
                    "GSM (grams per square meter) is the most important spec for towel quality. Learn what GSM range works for budget hotels vs luxury resorts, and why heavier isn't always better.",
                },
                {
                  slug: "sourcing-hotel-linens-china-moq-shipping-tips",
                  title:
                    "Sourcing Hotel Linens from China: MOQ, Shipping & Quality Control Tips",
                  excerpt:
                    "A practical guide for North American hoteliers importing textiles from China. Covers minimum order quantities, payment security, shipping options, and avoiding common pitfalls.",
                },
              ].map((post) => (
                <article
                  key={post.slug}
                  className="rounded-xl border border-gray-100 bg-white p-6 md:p-8"
                >
                  <h2 className="text-xl font-bold text-gray-900">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {post.excerpt}
                  </p>
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
