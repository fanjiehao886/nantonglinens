import { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { client } from "@/lib/sanity";
import { PRODUCTS_QUERY, CATEGORIES_QUERY } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Hotel Linens Products - Custom Bed Sheets, Towels, Bathrobes",
  description:
    "Browse our full catalog of hotel linens: bed sheets, pillowcases, towels, bathrobes, table linens, and more. Custom OEM/ODM manufacturing for hospitality brands.",
  openGraph: {
    title: "Hotel Linen Products Catalog | Nantong Linens",
    description: "Custom hotel linens manufactured in Nantong, China. Browse bed sheets, towels, bathrobes, and table linens.",
  },
};

const CATEGORIES = [
  { name: "All", slug: "" },
  { name: "Bed Sheets", slug: "bed-sheets" },
  { name: "Pillowcases", slug: "pillowcases" },
  { name: "Duvet Covers", slug: "duvet-covers" },
  { name: "Bath Towels", slug: "bath-towels" },
  { name: "Bath Mats", slug: "bath-mats" },
  { name: "Bathrobes", slug: "bathrobes" },
  { name: "Table Linen", slug: "table-linen" },
  { name: "Pool Towels", slug: "pool-towels" },
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
            Custom-manufactured textiles for hotels, resorts, and hospitality brands.
            All products available with logo customization and private labeling.
          </p>
        </div>
      </section>

      {/* Category filter + product grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.slug || "all"}
              href={cat.slug ? `/products?category=${cat.slug}` : "/products"}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                (!categoryParam && !cat.slug) || categoryParam === cat.slug
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </a>
          ))}
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
            <a href="/rfq" className="mt-4 inline-block text-blue-800 hover:underline">
              Tell us what you need — we can make it.
            </a>
          </div>
        )}

        {/* SEO-friendly bottom section */}
        <aside className="mt-16 rounded-xl bg-gray-50 p-8">
          <h2 className="text-lg font-semibold text-gray-900">About Our Hotel Linen Collection</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
            <p>
              Nantong Linens offers a comprehensive range of hotel-grade textile products,
              manufactured in Nantong — China&apos;s largest home textile production base.
              Our facility spans over 20,000 m² with a monthly output exceeding 500,000 pieces.
            </p>
            <p>
              All hotel linens are produced using premium long-staple cotton (Egyptian or Pima),
              bamboo fiber, and microfiber blends. Each product line is designed to withstand
              commercial laundering cycles of 100+ washes while maintaining colorfastness and softness.
            </p>
            <p>
              We support OEM/ODM orders starting from as low as 50 pieces per size/color combination,
              making us ideal for boutique hotels, independent properties, and large chain renovations alike.
              Standard lead time is 15-20 days from order confirmation to shipment readiness.
            </p>
          </div>

          {/* Internal links for SEO */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "hotel bedding wholesale",
              "bulk bath towels",
              "custom hotel robes",
              "hospitality linens supplier",
              "OEM hotel sheets China",
              "Nantong textile manufacturer",
              "hotel linen MOQ",
              "white hotel sheets bulk",
            ].map((keyword) => (
              <span key={keyword} className="rounded-full bg-white px-3 py-1 text-xs text-gray-500 border border-gray-200">
                {keyword}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
