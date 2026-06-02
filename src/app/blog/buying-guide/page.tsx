import { Metadata } from "next";
import { client } from "@/lib/sanity";
import { POSTS_BY_CATEGORY_QUERY } from "@/lib/queries";
import BlogListPage from "../_components/BlogListPage";

export const metadata: Metadata = {
  title: "Hotel Linen Buying Guide — How to Source Hotel Linens from China",
  description:
    "Step-by-step procurement guides covering specifications, MOQ, pricing negotiation, quality inspection, and shipping logistics for hotel buyers sourcing from China's Dieshiqiao textile hub.",
  alternates: { canonical: "/blog/buying-guide" },
};

export const revalidate = 60;

const POSTS_PER_PAGE = 9;
const CATEGORIES_QUERY = `*[_type == "category"]{ title, slug }`;

export default async function BuyingGuidePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || "1", 10) || 1);

  const [posts, categories] = await Promise.all([
    client.fetch(POSTS_BY_CATEGORY_QUERY, { category: "buying-guide" }),
    client.fetch(CATEGORIES_QUERY),
  ]);

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  return (
    <BlogListPage
      posts={posts}
      categories={categories}
      activeCategory="buying-guide"
      heroTitle="Hotel Linen Buying Guides"
      heroDescription="Everything you need to know before placing an order: specs, MOQ, pricing, and how to work with Chinese textile factories."
      currentPage={currentPage}
      totalPages={totalPages}
      basePath="/blog/buying-guide"
    />
  );
}
