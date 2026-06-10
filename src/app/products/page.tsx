import { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { client } from "@/lib/sanity";
import { PRODUCTS_QUERY, CATEGORIES_QUERY } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Hotel Linen Catalog — Bed Sheets, Towels & Bathrobes by Specs",
  description:
    "Browse hotel linens by specification: GSM, thread count, and material. Sourced from Dieshiqiao's top factories — competitive pricing, strict QC, low MOQ, global shipping.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Hotel Linen Catalog — Bed Sheets, Towels & Bathrobes by Specs | Nantong Linens",
    description: "Source quality hotel linens by specification from Dieshiqiao, China's #1 textile market. Bed sheets, towels, bathrobes, and table linens at competitive prices.",
  },
};

const CATEGORIES = [
  { name: "All", href: "/products" },
  { name: "Bed Sheets", href: "/products/bed-sheets" },
  { name: "Pillowcases", href: "/products/pillowcases" },
  { name: "Duvet Covers", href: "/products/duvet-covers" },
  { name: "Bath Towels", href: "/products/bath-towels" },
  { name: "Bathrobes", href: "/products/bathrobes" },
  { name: "Pool & Beach Towels", href: "/products/pool-beach-towels" },
  { name: "Bath Mats", href: "/products/bath-mats" },
  { name: "Table Linen", href: "/products/table-linen" },
];

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const categoryParam = params?.category as string | undefined;

  const allProducts = await client.fetch(PRODUCTS_QUERY);
  const filtered = categoryParam
    ? allProducts.filter(
        (p: any) => p.category?.toLowerCase().replace(/\s+/g, "-") === categoryParam
      )
    : allProducts;

  return (
    <>
      {/* Page header */}
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Hotel Linens Catalog</h1>
          <p className="mt-2 text-gray-500">
            Sourced from Dieshiqiao's best factories — competitive pricing, strict QC, global shipping.
            Logo customization and private labeling available on all products.
          </p>
        </div>
      </section>

      {/* Category filter + product grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = cat.href === "/products" ? !categoryParam : false;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-gray-400">
          Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          {categoryParam ? ` in ${categoryParam.replace(/-/g, " ")}` : ""}
        </p>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-400">No products found in this category yet.</p>
            <Link href="/rfq" className="mt-4 inline-block text-blue-800 hover:underline">
              Tell us what you need — we can source it.
            </Link>
          </div>
        )}

        {/* SEO-friendly bottom section */}
        <aside className="mt-16 rounded-xl bg-gray-50 p-8">
          <h2 className="text-lg font-semibold text-gray-900">About Our Hotel Linen Collection</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
            <p>
              Nantong Linens is a sourcing agent based in Dieshiqiao — China&apos;s largest home textile wholesale market
              with over 6,000 factories. We handpick the best manufacturers for every product category,
              ensuring competitive pricing and consistent quality.
            </p>
            <p>
              All hotel linens are sourced from vetted factories using premium long-staple cotton (Egyptian or Pima),
              bamboo fiber, and microfiber blends. Each product line is selected to withstand
              commercial laundering cycles of 100+ washes while maintaining colorfastness and softness.
            </p>
            <p>
              We support orders starting from as low as 50 pieces per size/color combination,
              making us ideal for boutique hotels, independent properties, and large chain renovations alike.
              Our on-site QC team inspects every order before shipment. Standard lead time is 15–20 days from order confirmation.
            </p>
          </div>

          {/* Internal links for SEO */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { label: "hotel bedding wholesale", href: "/products/bed-sheets" },
              { label: "bulk bath towels", href: "/products/bath-towels" },
              { label: "hotel robes sourcing", href: "/products/bathrobes" },
              { label: "hospitality linens agent", href: "/about" },
              { label: "Dieshiqiao hotel sheets", href: "/products/bed-sheets" },
              { label: "Nantong textile sourcing", href: "/about" },
              { label: "hotel linen MOQ", href: "/blog/buying-guide" },
              { label: "white hotel sheets bulk", href: "/products/bed-sheets" },
            ].map((kw) => (
              <Link key={kw.label} href={kw.href} className="rounded-full bg-white px-3 py-1 text-xs text-gray-500 border border-gray-200 hover:text-blue-800 hover:border-blue-200 transition-colors">
                {kw.label}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
