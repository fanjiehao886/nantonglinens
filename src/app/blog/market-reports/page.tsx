import { Metadata } from "next";
import { client } from "@/lib/sanity";
import { POSTS_BY_CATEGORY_QUERY } from "@/lib/queries";
import BlogListPage from "../_components/BlogListPage";

export const metadata: Metadata = {
  title: "Hotel Linen Market Reports — China Textile Pricing & Trends",
  description:
    "Monthly market intelligence on China's hotel linen industry. Cotton price trends, shipping rate updates, factory capacity shifts, and procurement outlook for hotel buyers sourcing from Dieshiqiao.",
  alternates: { canonical: "/blog/market-reports" },
};

export const revalidate = 60;

const CATEGORIES_QUERY = `*[_type == "category"]{ title, slug }`;

export default async function MarketReportsPage() {
  const [posts, categories] = await Promise.all([
    client.fetch(POSTS_BY_CATEGORY_QUERY, { category: "market-reports" }),
    client.fetch(CATEGORIES_QUERY),
  ]);

  return (
    <BlogListPage
      posts={posts}
      categories={categories}
      activeCategory="market-reports"
      heroTitle="Market Reports & Pricing Trends"
      heroDescription="Stay ahead with monthly data on cotton prices, factory capacity, and shipping rates — all focused on hotel linen procurement from China."
    />
  );
}
