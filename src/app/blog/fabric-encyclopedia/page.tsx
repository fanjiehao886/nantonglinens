import { Metadata } from "next";
import { client } from "@/lib/sanity";
import { POSTS_BY_CATEGORY_QUERY } from "@/lib/queries";
import BlogListPage from "../_components/BlogListPage";

export const metadata: Metadata = {
  title: "Hotel Linen Fabric Encyclopedia — GSM, Thread Count & Weave Types",
  description:
    "Master the technical specs that determine hotel linen quality. Learn about GSM, thread count, percale vs sateen, cotton blends, and fabric construction for bedding, towels, and table linens.",
  alternates: { canonical: "/blog/fabric-encyclopedia" },
};

export const revalidate = 60;

const CATEGORIES_QUERY = `*[_type == "category"]{ title, slug }`;

export default async function FabricEncyclopediaPage() {
  const [posts, categories] = await Promise.all([
    client.fetch(POSTS_BY_CATEGORY_QUERY, { category: "fabric-encyclopedia" }),
    client.fetch(CATEGORIES_QUERY),
  ]);

  return (
    <BlogListPage
      posts={posts}
      categories={categories}
      activeCategory="fabric-encyclopedia"
      heroTitle="Fabric Encyclopedia"
      heroDescription="Understand the materials behind every hotel linen. GSM, thread count, weave types, and fabric composition explained with real-world procurement examples."
    />
  );
}
