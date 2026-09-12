import { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { client } from "@/lib/sanity";
import { PRODUCTS_QUERY, CATEGORIES_QUERY } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Hotel Linen Wholesale Catalog — Bed Sheets, Towels & Bathrobes by Spec",
  description:
    "Wholesale hotel linens by GSM, thread count, and material from Dieshiqiao factories. Low MOQ, 15–20 day lead time, on-site QC, FOB or DDP shipping worldwide.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Hotel Linen Wholesale Catalog — Bed Sheets, Towels & Bathrobes | Nantong Linens",
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
        {/* Trust bar */}
        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <span className="font-semibold text-gray-900">Why source with us:</span>
          <span className="flex items-center gap-1"><span className="text-green-600">✓</span> Vetted Dieshiqiao factories</span>
          <span className="flex items-center gap-1"><span className="text-green-600">✓</span> On-site QC before shipment</span>
          <span className="flex items-center gap-1"><span className="text-green-600">✓</span> 15–20 day lead time</span>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const isAll = cat.href === "/products";
            const isActive = isAll ? !categoryParam : cat.href === `/products/${categoryParam}`;
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

        {/* Long-tail keyword sections */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Wholesale Hotel Towels by GSM</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            We source bulk hotel towels in every weight class — from 400 GSM economy bath towels for motels and gyms,
            500–600 GSM ring-spun cotton standards for 3–4 star properties, up to 750+ GSM Egyptian cotton luxury towels
            for five-star resorts. Bath sheets, hand towels, washcloths, and bath mats can be mixed in one consolidated order.
            Read the <Link href="/guides/hotel-towel-gsm" className="font-medium text-blue-800 hover:underline">Hotel Towel GSM Guide</Link> for
            recommended weights by hotel tier, or <Link href="/products/bath-towels" className="font-medium text-blue-800 hover:underline">browse the towel catalog</Link>.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">Bulk Bed Sheets by Thread Count &amp; Weave</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            Order wholesale hotel bed sheets by exact specification: 200 TC poly-cotton percale for budget properties,
            300–400 TC 100% cotton for mid-scale hotels, and 400–600 TC long-staple sateen for luxury rooms.
            Fitted sheets, flat sheets, duvet covers, and pillowcases available in white, ivory, and custom colors —
            with logo embroidery or jacquard borders. See the{" "}
            <Link href="/guides/hotel-bedding-thread-count" className="font-medium text-blue-800 hover:underline">Thread Count Guide</Link> or{" "}
            <Link href="/products/bed-sheets" className="font-medium text-blue-800 hover:underline">browse bed sheets</Link>.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">Hotel Bathrobes, Table Linen &amp; More</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            Complete your property program with waffle and terry bathrobes, pool and beach towels, tablecloths and napkins,
            and mattress toppers — all from the same vetted Dieshiqiao factory network, consolidated into a single shipment.
            Start with the <Link href="/guides/hotel-bathrobe-buying-guide" className="font-medium text-blue-800 hover:underline">Hotel Bathrobe Buying Guide</Link>.
          </p>
        </section>

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

          {/* Blog cross-links */}
          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Related Buying Guides</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Hotel Procurement Guide 2026", href: "/blog/china-hotel-procurement-guide-2026" },
                { title: "Hotel Bedding Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
                { title: "Hotel Towel GSM Guide", href: "/guides/hotel-towel-gsm" },
                { title: "Cotton Market & Procurement Window", href: "/blog/cotton-market-june-2026-hotel-linen" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-800"
                >
                  {link.title} →
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ Schema — AI-search friendly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the minimum order quantity for wholesale hotel linens?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Orders start from as low as 50 pieces per size/color combination, making us ideal for boutique hotels and independent properties. Larger chain orders get volume-based factory pricing.",
                },
              },
              {
                "@type": "Question",
                name: "How long does hotel linen production take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard lead time is 15–20 days from order confirmation, plus ocean transit time. Rush production can be arranged for urgent openings or renovations.",
                },
              },
              {
                "@type": "Question",
                name: "Do you ship hotel linens to Singapore, the UAE, and Europe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We ship worldwide from Nantong on FOB, CIF, or DDP terms — including Singapore, Vietnam, Thailand, Malaysia, the UAE, Saudi Arabia, the UK, EU, US, Canada, and Australia, with full export documentation.",
                },
              },
              {
                "@type": "Question",
                name: "Can I get samples before placing a bulk hotel linen order?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We arrange physical samples from shortlisted factories for your approval before any commitment, and every production run is inspected on-site before shipment.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
