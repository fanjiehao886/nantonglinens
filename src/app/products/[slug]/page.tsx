import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { PRODUCT_BY_SLUG_QUERY, PRODUCTS_QUERY } from "@/lib/queries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });

  if (!product) return {};

  return {
    title: `${product.name} | Nantong Linens`,
    description:
      product.shortDescription ||
      `Source ${product.name} in bulk through Nantong Linens — competitive pricing from Dieshiqiao factories, custom logo, low MOQ.`,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.name} | Nantong Linens`,
      description: product.shortDescription || "",
      images: product.images?.[0]?.asset?.url
        ? [product.images[0].asset.url]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const products = await client.fetch(PRODUCTS_QUERY).catch(() => []);
  return (products || []).map((p: any) => ({
    slug: p.slug?.current,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });

  if (!product) notFound();

  const imageUrl = (src: any) => {
    if (!src?.asset?.url) return "";
    return src.asset.url;
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-800">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-800">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product detail */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Image gallery */}
            <div>
              {/* Main image */}
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-50">
                {product.images?.[0]?.asset?.url ? (
                  <img
                    src={product.images?.[0]?.asset?.url}
                    alt={product.images?.[0]?.alt || product.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-gray-300">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Thumbnail row */}
              {product.images && product.images.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {product.images.map((img: any, i: number) => (
                    <div
                      key={i}
                      className="h-20 w-20 overflow-hidden rounded-lg bg-gray-50 border border-gray-100"
                    >
                      {img.asset?.url ? (
                        <img
                          src={img.asset.url}
                          alt={img.alt || `${product.name} ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div>
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                {product.category}
              </span>

              <h1 className="mt-3 text-3xl font-bold text-gray-900">
                {product.name}
              </h1>

              {product.shortDescription && (
                <p className="mt-4 text-base leading-relaxed text-gray-500">
                  {product.shortDescription}
                </p>
              )}

              {/* Key specs row */}
              <div className="mt-6 flex flex-wrap gap-4">
                {product.moq && (
                  <div className="rounded-lg bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-400">MOQ</p>
                    <p className="font-semibold text-gray-900">
                      {product.moq} pcs
                    </p>
                  </div>
                )}
                {product.priceRange && (
                  <div className="rounded-lg bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-400">Price Range</p>
                    <p className="font-semibold text-gray-900">
                      {product.priceRange}
                    </p>
                  </div>
                )}
                {product.leadTime && (
                  <div className="rounded-lg bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-400">Lead Time</p>
                    <p className="font-semibold text-gray-900">
                      {product.leadTime}
                    </p>
                  </div>
                )}
              </div>

              {/* Full specifications */}
              {product.specifications && (
                <div className="mt-8">
                  <h2 className="font-semibold text-gray-900">
                    Specifications
                  </h2>
                  <div className="mt-3 divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
                    {product.specifications.material && (
                      <div className="flex justify-between px-5 py-3">
                        <span className="text-sm text-gray-500">Material</span>
                        <span className="text-sm font-medium text-gray-900">
                          {product.specifications.material}
                        </span>
                      </div>
                    )}
                    {product.specifications.threadCount && (
                      <div className="flex justify-between px-5 py-3">
                        <span className="text-sm text-gray-500">
                          Thread Count
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          {product.specifications.threadCount}
                        </span>
                      </div>
                    )}
                    {product.specifications.gsm && (
                      <div className="flex justify-between px-5 py-3">
                        <span className="text-sm text-gray-500">GSM</span>
                        <span className="text-sm font-medium text-gray-900">
                          {product.specifications.gsm} g/m²
                        </span>
                      </div>
                    )}
                    {product.specifications.sizes && (
                      <div className="flex justify-between px-5 py-3">
                        <span className="text-sm text-gray-500">Sizes</span>
                        <span className="text-sm font-medium text-gray-900 text-right">
                          {product.specifications.sizes}
                        </span>
                      </div>
                    )}
                    {product.specifications.colors && (
                      <div className="flex justify-between px-5 py-3">
                        <span className="text-sm text-gray-500">Colors</span>
                        <span className="text-sm font-medium text-gray-900">
                          {product.specifications.colors}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Customization options */}
              {product.customizations &&
                product.customizations.length > 0 && (
                  <div className="mt-8">
                    <h2 className="font-semibold text-gray-900">
                      Customization Options
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.customizations.map((opt: string) => (
                        <span
                          key={opt}
                          className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-800"
                        >
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {/* Hotel tiers */}
              {product.hotelTiers &&
                product.hotelTiers.length > 0 && (
                  <div className="mt-6">
                    <h2 className="font-semibold text-gray-900 text-sm">
                      Suitable For
                    </h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.hotelTiers.map((tier: string) => (
                        <span
                          key={tier}
                          className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                        >
                          {tier}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {/* CTA buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/rfq"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
                >
                  Request a Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/8615151361119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Full description (Portable Text) */}
          {product.description && (
            <div className="mt-16 border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Product Details
              </h2>
              <div className="mt-6 prose max-w-none">
                {/* Basic Portable Text renderer — extends for block/content */}
                <PortableTextContent content={product.description} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription || "",
            brand: {
              "@type": "Brand",
              name: product.category || "Hotel Linen",
            },
            offers: {
              "@type": "Offer",
              seller: {
                "@type": "Organization",
                name: "Nantong Linens",
              },
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `https://www.nantonglinens.com/products/${product.slug?.current || slug}`,
            },
            category: product.category,
            ...(product.images?.[0]?.asset?.url
              ? { image: product.images[0].asset.url }
              : {}),
          }),
        }}
      />
      {/* BreadcrumbList Schema for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.nantonglinens.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: "https://www.nantonglinens.com/products",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `https://www.nantonglinens.com/products/${product.slug?.current || slug}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}

/* ---- Minimal Portable Text renderer ---- */
function PortableTextContent({ content }: { content: any[] }) {
  if (!content) return null;
  return (
    <div className="space-y-4 text-base leading-relaxed text-gray-600">
      {content.map((block: any, i: number) => {
        if (block._type !== "block") return null;
        const text = block.children?.map((c: any) => c.text).join("") || "";
        switch (block.style) {
          case "h1":
            return (
              <h1 key={i} className="mt-8 text-2xl font-bold text-gray-900">
                {text}
              </h1>
            );
          case "h2":
            return (
              <h2 key={i} className="mt-6 text-xl font-bold text-gray-900">
                {text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-4 text-lg font-semibold text-gray-900">
                {text}
              </h3>
            );
          case "blockquote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-blue-200 pl-4 italic text-gray-500"
              >
                {text}
              </blockquote>
            );
          default:
            return (
              <p key={i} className={block.style === "h1" ? "font-bold" : ""}>
                {text}
              </p>
            );
        }
      })}
    </div>
  );
}
