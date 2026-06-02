import { Metadata } from "next";
import { client } from "@/lib/sanity";
import { POSTS_QUERY } from "@/lib/queries";
import BlogListPage from "./_components/BlogListPage";

export const metadata: Metadata = {
  title: "Hotel Linen Buying Guides — GSM, Thread Count, Sourcing Tips",
  description:
    "Free procurement guides for hotel buyers. Learn about GSM, thread count, fabric types, QC checklists, MOQ requirements, and how to source hotel linens from China. Based on real Dieshiqiao market experience.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 60;

const POSTS_PER_PAGE = 9;
const CATEGORIES_QUERY = `*[_type == "category"]{ title, slug }`;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.category || null;
  const currentPage = Math.max(1, parseInt(params.page || "1", 10) || 1);

  const [posts, categories] = await Promise.all([
    client.fetch(POSTS_QUERY),
    client.fetch(CATEGORIES_QUERY),
  ]);

  // Filter posts by category slug if active (for legacy query-string param)
  const filteredPosts = activeCategory
    ? (posts as any[]).filter((post: any) =>
        (post.categories || []).some(
          (cat: any) => cat.slug?.current === activeCategory
        )
      )
    : (posts as any[]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

  return (
    <BlogListPage
      posts={filteredPosts}
      categories={categories}
      activeCategory={activeCategory}
      heroTitle="Free Hotel Linen Procurement Guides"
      heroDescription="GSM explained, thread count comparisons, QC checklists, and sourcing strategies — all from daily experience in Dieshiqiao, the world's largest textile hub."
      currentPage={currentPage}
      totalPages={totalPages}
      basePath="/blog"
    />
  );
}
