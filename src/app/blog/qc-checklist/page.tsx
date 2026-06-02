import { Metadata } from "next";
import { client } from "@/lib/sanity";
import { POSTS_BY_CATEGORY_QUERY } from "@/lib/queries";
import BlogListPage from "../_components/BlogListPage";

export const metadata: Metadata = {
  title: "Hotel Linen QC Checklist — Quality Control for Textile Buyers",
  description:
    "Printable quality control checklists and inspection guides for hotel linen buyers. Covers fabric defects, stitching standards, GSM verification, shrinkage testing, and packaging requirements.",
  alternates: { canonical: "/blog/qc-checklist" },
};

export const revalidate = 60;

const POSTS_PER_PAGE = 9;
const CATEGORIES_QUERY = `*[_type == "category"]{ title, slug }`;

export default async function QcChecklistPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || "1", 10) || 1);

  const [posts, categories] = await Promise.all([
    client.fetch(POSTS_BY_CATEGORY_QUERY, { category: "qc-checklist" }),
    client.fetch(CATEGORIES_QUERY),
  ]);

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  return (
    <BlogListPage
      posts={posts}
      categories={categories}
      activeCategory="qc-checklist"
      heroTitle="Quality Control Checklists"
      heroDescription="Inspection standards and QC procedures every hotel buyer should know before accepting a shipment from Chinese textile suppliers."
      currentPage={currentPage}
      totalPages={totalPages}
      basePath="/blog/qc-checklist"
    />
  );
}
