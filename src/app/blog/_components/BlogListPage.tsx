"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import BlogSearch from "./BlogSearch";

interface BlogListPageProps {
  posts: any[];
  categories: any[];
  activeCategory: string | null;
  heroTitle: string;
  heroDescription: string;
  currentPage: number;
  totalPages: number;
  basePath: string;
}

const HUB_TABS = [
  { label: "All Guides", slug: null, href: "/blog" },
  { label: "Buying Guide", slug: "buying-guide", href: "/blog/buying-guide" },
  { label: "Fabric Encyclopedia", slug: "fabric-encyclopedia", href: "/blog/fabric-encyclopedia" },
  { label: "QC Checklist", slug: "qc-checklist", href: "/blog/qc-checklist" },
  { label: "Market Reports", slug: "market-reports", href: "/blog/market-reports" },
];

const POSTS_PER_PAGE = 9;

export default function BlogListPage({
  posts,
  categories,
  activeCategory,
  heroTitle,
  heroDescription,
  currentPage,
  totalPages,
  basePath,
}: BlogListPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const availableSlugs = new Set(
    (categories as any[]).map((c: any) => c.slug.current)
  );
  const tabs = HUB_TABS.filter(
    (t) => t.slug === null || availableSlugs.has(t.slug)
  );

  // Filter posts by search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const q = searchQuery.toLowerCase();
    return posts.filter(
      (post: any) =>
        post.title?.toLowerCase().includes(q) ||
        post.excerpt?.toLowerCase().includes(q) ||
        (post.categories || []).some((c: any) =>
          c.title?.toLowerCase().includes(q)
        )
    );
  }, [posts, searchQuery]);

  // Paginate filtered results
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const filteredTotalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  );

  // Build pagination URL helper
  const pageUrl = (p: number) => {
    const suffix = p > 1 ? `?page=${p}` : "";
    const searchSuffix = searchQuery ? `${p > 1 ? "&" : "?"}q=${encodeURIComponent(searchQuery)}` : "";
    return `${basePath}${suffix}${searchSuffix}`;
  };

  return (
    <>
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{heroTitle}</h1>
          <p className="mt-2 text-gray-500 max-w-xl">{heroDescription}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          {tabs.length > 1 && (
            <div className="mb-6 flex flex-wrap gap-2 border-b border-gray-200 pb-4">
              {tabs.map((tab) => {
                const isActive = tab.slug === activeCategory;
                return (
                  <Link
                    key={tab.slug || "all"}
                    href={tab.href}
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

          {/* Search */}
          <div className="mb-8 max-w-md">
            <BlogSearch onSearch={setSearchQuery} />
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-500">
                {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""} for &quot;{searchQuery}&quot;
              </p>
            )}
          </div>

          {filteredPosts.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post: any) => (
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
                      {/* Categories */}
                      {(post.categories || []).length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((cat: any) => (
                            <span
                              key={cat.title}
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

              {/* Pagination */}
              {filteredTotalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  {currentPage > 1 && (
                    <Link
                      href={pageUrl(currentPage - 1)}
                      className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      &larr; Previous
                    </Link>
                  )}
                  {Array.from({ length: filteredTotalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <Link
                        key={p}
                        href={pageUrl(p)}
                        className={`rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors ${
                          p === currentPage
                            ? "bg-blue-800 text-white"
                            : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {p}
                      </Link>
                    )
                  )}
                  {currentPage < filteredTotalPages && (
                    <Link
                      href={pageUrl(currentPage + 1)}
                      className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Next &rarr;
                    </Link>
                  )}
                </div>
              )}

              {/* Empty search results */}
              {searchQuery && paginatedPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    No results for &quot;{searchQuery}&quot;. Try a different keyword.
                  </p>
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
