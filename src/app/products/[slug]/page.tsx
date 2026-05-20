import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { PRODUCT_BY_SLUG_QUERY, FEATURED_PRODUCTS_QUERY } from "@/lib/queries";
import { ProductCard } from "@/components/ProductCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });

  if (!product) return {};

  const title = `${product.name} - Custom Hotel Linen | Nantong Linens`;
  const description =
    product.shortDescription ||
    `${product.name} for hotels. ${product.category}. MOQ: ${product.moq || "50"} pcs. Custom logo embroidery available.`;

  return {
    title,
    description,
    openGraph: { title, description },
    alternates: { canonical: `https://www.nantonglinens.com/products/${slug}` },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });

  if (!product) notFound();

  const relatedProducts = await client.fetch(FEATURED_PRODUCTS_QUERY);
  const filteredRelated = (relatedProducts || []).filter(
    (p: any) => p._id !== product._id && p.category === product.category
  ).slice(0, 3);

  const specs = product.specifications as Record<string, any> | null;

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-gray-100 bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-800">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
              {product.images?.[0]?.asset?.url ? (
                <img
                  src={product.images[0].asset.url}
                  alt={product.images[0].alt || product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-300 text-lg">
                  Product Image
                </div>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1, 5).map((img: any, i: number) => (
                  <div key={i} className="aspect-square rounded-lg bg-gray-50 border border-gray-100 overflow-hidden cursor-pointer hover:border-blue-300 transition-colors">
                    {img.asset?.url && (
                      <img
                        src={img.asset.url}
                        alt={img.alt || ""}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            {/* Category badge + Name */}
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-blue-900/10 px-3 py-1 text-xs font-medium text-blue-800">
                {product.category}
              </span>
              {(product.hotelTiers || []).length > 0 && (
                <span className="text-xs text-gray-400">
                  For {product.hotelTiers.join(", ")} Hotels
                </span>
              )}
            </div>

            <h1 className="mt-4 text-3xl font-bold text-gray-900">{product.name}</h1>

            {/* Short description */}
            {product.shortDescription && (
              <p className="mt-3 text-base leading-relaxed text-gray-600">{product.shortDescription}</p>
            )}

            {/* Key specs cards */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "MOQ", value: product.moq ? `${product.moq} pcs` : "50 pcs" },
                { label: "Lead Time", value: product.leadTime || "15–20 days" },
                { label: "Price Range", value: product.priceRange || "Contact us" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-gray-50 p-3 text-center">
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="mt-1 font-semibold text-gray-900 text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Full specifications table */}
            {specs && Object.keys(specs).length > 0 && (
              <div className="mt-6 rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
                  <h3 className="font-semibold text-sm text-gray-900">Specifications</h3>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(specs)
                      .filter(([_, v]) => v !== undefined && v !== "")
                      .map(([key, value]) => (
                        <tr key={key} className="border-b border-gray-50 last:border-0">
                          <td className="px-4 py-2.5 font-medium text-gray-500 capitalize w-32">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </td>
                          <td className="px-4 py-2.5 text-gray-900">{String(value)}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Customization options */}
            {(product.customizations || []).length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Customization Available</h3>
                <div className="flex flex-wrap gap-2">
                  {product.customizations.map((c: string) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 border border-green-200"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/rfq?product=${encodeURIComponent(product.name)}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-blue-900 px-6 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                Request Quote
              </Link>
              <a
                href="/rfq#samples"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Order Samples
              </a>
              <a
                href={`https://wa.me/8612345678900?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-base font-medium text-white hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related products */}
        {filteredRelated.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">You May Also Like</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <ProductCard product={filteredRelated[0]} />
              {filteredRelated[1] && <ProductCard product={filteredRelated[1]} />}
              {filteredRelated[2] && <ProductCard product={filteredRelated[2]} />}
            </div>
          </section>
        )}

        {/* SEO content block */}
        <aside className="mt-16 rounded-xl bg-gray-50 p-8 prose max-w-none">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">About Our {product.name}</h2>
          <div className="text-sm leading-relaxed text-gray-600 space-y-3">
            <p>
              The {product.name} is manufactured at our facility in Nantong, China&apos;s home textile capital.
              With over 15 years of experience serving hospitality brands across North America and Europe,
              we understand the rigorous quality standards that hotel procurement demands.
            </p>
            <p>
              Each piece undergoes strict quality control including thread count verification,
              GSM testing, shrinkage rate assessment, and colorfastness evaluation.
              We guarantee compliance with international hospitality textile standards.
            </p>
            <p>
              Interested in customizing this product? We offer logo embroidery, Pantone color matching,
              private labeling, and custom sizing to match your brand specifications.
              Contact our team today for a free sample swatch and detailed quotation.
            </p>
          </div>
        </aside>
      </div>

      {/* Product Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription,
            category: product.category,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              priceSpecification: {
                price: product.priceRange || "Contact for quote",
              },
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "Nantong Linens",
              },
            },
            brand: {
              "@type": "Brand",
              name: "Nantong Linens",
            },
          }),
        }}
      />
    </>
  );
}
