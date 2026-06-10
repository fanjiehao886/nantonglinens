import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { PRODUCT_BY_SLUG_QUERY, PRODUCTS_QUERY } from "@/lib/queries";
import { ProductCard } from "@/components/ProductCard";

// ----- Category data (merged from the dynamic category route) -----

const CATEGORY_DATA: Record<string, {
  name: string;
  title: string;
  description: string;
  keywords: string;
  intro: string;
  specs: string[];
  relatedGuides: { label: string; href: string }[];
  internalLinks: { label: string; href: string }[];
}> = {
  "bath-towels": {
    name: "Bath Towels",
    title: "Hotel Bath Towels — Wholesale GSM Sourcing from Dieshiqiao",
    description: "Source wholesale hotel bath towels, hand towels, and washcloths from Dieshiqiao's top factories. Custom GSM, cotton types, and sizes. Competitive pricing, strict QC, global shipping.",
    keywords: "hotel bath towels wholesale, bulk towels China, hotel towel supplier, terry towel manufacturer, GSM towel sourcing",
    intro: "Hotel towels are one of the highest-touch items in any property. Guests judge quality by the towel's weight, absorbency, and softness within seconds. We source bath towels, hand towels, face cloths, and bath mats from dedicated terry-weaving factories in Nantong's towel manufacturing cluster — each vetted for GSM consistency, colorfastness, and commercial laundry durability.",
    specs: [
      "GSM: 400–900 (see our towel GSM guide for hotel tier recommendations)",
      "Material: 100% Cotton (ring-spun, combed, Egyptian), poly-cotton blends available",
      "Weave: Terry loop, zero-twist hydro-cotton, waffle-weave options",
      "Sizes: Bath towel 70x140cm, Hand towel 40x70cm, Face cloth 30x30cm, Bath mat 50x80cm (all customizable)",
      "Border: Dobby band, satin band, or borderless",
      "Color: White (standard), dyed-to-match (pantone-matched) available for 1000+ pcs",
      "MOQ: 200 pieces per size/spec combination",
    ],
    relatedGuides: [
      { label: "Towel GSM Guide", href: "/guides/hotel-towel-gsm" },
      { label: "Towel Quality Guide", href: "/guides/hotel-towel-quality-guide" },
      { label: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
    ],
    internalLinks: [
      { label: "hotel towel wholesale China", href: "/products/bath-towels" },
      { label: "bulk bath towels GSM 600", href: "/guides/hotel-towel-gsm" },
      { label: "hotel terry towels manufacturer", href: "/products/bath-towels" },
      { label: "white hotel hand towels", href: "/products/bath-towels" },
      { label: "Nantong towel factory", href: "/about" },
      { label: "hotel linen sourcing agent", href: "/about" },
      { label: "custom hotel towels logo", href: "/rfq" },
      { label: "pool and beach towels bulk", href: "/products/pool-beach-towels" },
    ],
  },
  "bathrobes": {
    name: "Bathrobes",
    title: "Hotel Bathrobes — Wholesale Waffle & Terry Robe Sourcing",
    description: "Source custom hotel bathrobes from Dieshiqiao manufacturers. Waffle-weave, terry velour, kimono and shawl collar styles. Logo embroidery available. Low MOQ, global shipping.",
    keywords: "hotel bathrobes wholesale, waffle robe supplier China, terry bathrobe manufacturer, custom logo bathrobes, spa robes bulk",
    intro: "A quality bathrobe transforms the guest bathroom experience. Whether for luxury suites, spa facilities, or standard rooms, we source from specialized robe manufacturers offering waffle-weave, terry velour, and microfiber robes — with custom embroidery, piping, and color matching available.",
    specs: [
      "Fabric: Waffle-weave (350–450 GSM), Terry velour (400–550 GSM), Microfiber (300–400 GSM)",
      "Material: 100% Cotton, cotton-polyester blend, bamboo fiber, microfiber",
      "Styles: Kimono, shawl collar, hooded, spa wrap",
      "Sizes: S/M, L/XL, one-size-unisex (custom grading available)",
      "Features: Belt loop, double belt loops, patch pockets, hanging loop",
      "Color: White (standard), beige, gray, navy (custom dyed-to-match)",
      "Embroidery: Logo embroidery on chest or sleeve available, minimum 300 pcs",
      "MOQ: 100 pieces per style/size combination",
    ],
    relatedGuides: [
      { label: "Bathrobe Buying Guide", href: "/guides/hotel-bathrobe-buying-guide" },
      { label: "Hotel Linen Buying Guide", href: "/guides/download" },
      { label: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
    ],
    internalLinks: [
      { label: "hotel bathrobes wholesale", href: "/products/bathrobes" },
      { label: "waffle robe supplier China", href: "/products/bathrobes" },
      { label: "custom logo hotel robes", href: "/products/bathrobes" },
      { label: "spa robes bulk manufacturer", href: "/products/bathrobes" },
      { label: "terry velour bathrobe", href: "/products/bathrobes" },
      { label: "hotel linen sourcing agent", href: "/about" },
      { label: "Dieshiqiao textile market", href: "/about" },
      { label: "request bathrobe samples", href: "/rfq" },
    ],
  },
  "pool-beach-towels": {
    name: "Pool & Beach Towels",
    title: "Pool & Beach Towels — Wholesale Bulk Supply from Dieshiqiao",
    description: "Source wholesale pool towels and beach towels from Dieshiqiao factories. Custom sizes, colors, and stripes. High GSM for absorbency and durability. Resort, gym, and waterpark supply.",
    keywords: "pool towels wholesale, beach towels bulk China, resort towel supplier, gym towels manufacturer, striped beach towels",
    intro: "Pool and beach towels face different demands than bathroom towels: they are larger, need to handle chlorine and sun exposure, and often serve as visual branding for resorts and waterparks. Our towel factory partners specialize in bold-striped beach towels and durable pool towels with high colorfastness and fast drying times.",
    specs: [
      "GSM: 350–500 (medium weight, optimized for poolside use)",
      "Material: 100% Cotton, cotton-polyester blend (for quick-dry pool use)",
      "Sizes: Standard 75x150cm, oversized 90x180cm, round 150cm diameter",
      "Design: Solid color, stripe patterns, dobby border, fringed edges",
      "Colorfastness: Chlorine-resistant dyes available, tested to ISO 105-E03",
      "MOQ: 200 pieces per design/color combination",
    ],
    relatedGuides: [
      { label: "Towel GSM Guide", href: "/guides/hotel-towel-gsm" },
      { label: "Towel Quality Guide", href: "/guides/hotel-towel-quality-guide" },
    ],
    internalLinks: [
      { label: "pool towels bulk wholesale", href: "/products/pool-beach-towels" },
      { label: "beach towel manufacturer China", href: "/products/pool-beach-towels" },
      { label: "resort towel supplier", href: "/products/pool-beach-towels" },
      { label: "striped beach towels wholesale", href: "/products/pool-beach-towels" },
      { label: "Nantong towel factory", href: "/about" },
      { label: "hotel bath towels", href: "/products/bath-towels" },
      { label: "request towel samples", href: "/rfq" },
    ],
  },
  "bath-mats": {
    name: "Bath Mats",
    title: "Hotel Bath Mats — Wholesale Cotton & Microfiber Sourcing",
    description: "Source wholesale hotel bath mats from Dieshiqiao: cotton terry, microfiber, and memory foam options. Non-slip backing, fast-drying, commercial laundry compatible. Low MOQ.",
    keywords: "hotel bath mats wholesale, bathroom mat supplier China, cotton bath mat, non-slip bath mat, hotel floor mat",
    intro: "Bathroom safety and cleanliness start at floor level. Our bath mat sourcing covers traditional cotton terry mats, quick-dry microfiber mats, and memory foam mats — all with non-slip backing certified for commercial use and compatible with industrial washing machines.",
    specs: [
      "Material: 100% Cotton terry, microfiber, memory foam with PVC/non-slip backing",
      "GSM: 600–900 for cotton terry mats",
      "Sizes: 50x80cm (standard), 60x100cm (large), custom sizes available",
      "Backing: Spray latex, TPR dots, or full PVC non-slip base",
      "Color: White, beige, gray (standard); custom dyed-to-match",
      "MOQ: 200 pieces per size/color combination",
    ],
    relatedGuides: [
      { label: "Towel GSM Guide", href: "/guides/hotel-towel-gsm" },
      { label: "QC Checklist", href: "/blog/qc-checklist" },
    ],
    internalLinks: [
      { label: "hotel bath mats wholesale", href: "/products/bath-mats" },
      { label: "non-slip bathroom mat China", href: "/products/bath-mats" },
      { label: "cotton terry bath mat supplier", href: "/products/bath-mats" },
      { label: "hotel bathroom accessories", href: "/products/bath-towels" },
      { label: "hotel linen sourcing agent", href: "/about" },
      { label: "request bath mat samples", href: "/rfq" },
    ],
  },
  "bed-sheets": {
    name: "Bed Sheets",
    title: "Hotel Bed Sheets — Wholesale Flat & Fitted Sheet Sourcing",
    description: "Source wholesale hotel bed sheets from Dieshiqiao: flat sheets and fitted sheets in all TC ranges and cotton types. 200–1000 TC, percale and sateen. Competitive pricing, strict QC, global shipping.",
    keywords: "hotel bed sheets wholesale, flat sheet supplier China, fitted sheet manufacturer, hotel bedding wholesale, TC bed sheets",
    intro: "Bed sheets are the foundation of the guest sleep experience. We source flat and fitted sheets across all standard hotel sizes — from single to emperor — in thread counts ranging from budget 200 TC poly-cotton to ultra-luxury 1000 TC Egyptian cotton sateen.",
    specs: [
      "Thread Count: 200–1000 TC (single-ply count)",
      "Weave: Percale (crisp, breathable), Sateen (silky, lustrous)",
      "Material: Poly-cotton blend (budget), 100% Cotton, Combed cotton, Long-staple cotton, Egyptian cotton",
      "Sizes: Single, Double, Queen, King, Super King, Emperor (custom sizing available)",
      "Style: Flat sheet, Fitted sheet (with elastic depth options 25cm–40cm)",
      "Color: White (standard), custom dyed-to-match",
      "MOQ: 100 pieces per size/spec combination",
    ],
    relatedGuides: [
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
      { label: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
    ],
    internalLinks: [
      { label: "hotel bed sheets wholesale", href: "/products/bed-sheets" },
      { label: "TC buying guide", href: "/guides/hotel-bedding-thread-count" },
      { label: "Dieshiqiao hotel sheets", href: "/products/bed-sheets" },
      { label: "Nantong textile factory", href: "/about" },
      { label: "hotel linen sourcing agent", href: "/about" },
    ],
  },
  "pillowcases": {
    name: "Pillowcases",
    title: "Hotel Pillowcases — Wholesale Cotton & Sateen Sourcing",
    description: "Source wholesale hotel pillowcases from Dieshiqiao: oxford, housewife, and envelope closure styles. All TC ranges, cotton types, and sizes. Custom embroidery available.",
    keywords: "hotel pillowcases wholesale, oxford pillowcase supplier China, sateen pillowcase manufacturer, hotel bedding pillowcases",
    intro: "Pillowcases are the closest textile to the guest's face — quality here is disproportionately noticed. We source standard housewife, Oxford, and envelope-closure pillowcases in all common hotel sizes and cotton qualities.",
    specs: [
      "Thread Count: 200–1000 TC",
      "Style: Housewife (side opening), Oxford (bordered flange), Envelope closure",
      "Material: Poly-cotton blend, 100% Cotton, Combed cotton, Egyptian cotton",
      "Sizes: Standard 50x75cm, King 50x90cm, Super King 50x100cm",
      "MOQ: 100 pieces per size/spec combination",
    ],
    relatedGuides: [
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
    ],
    internalLinks: [
      { label: "hotel pillowcases wholesale", href: "/products/pillowcases" },
      { label: "oxford pillowcase China", href: "/products/pillowcases" },
      { label: "hotel linen sourcing agent", href: "/about" },
    ],
  },
  "duvet-covers": {
    name: "Duvet Covers",
    title: "Hotel Duvet Covers — Wholesale Cotton & Sateen Sourcing",
    description: "Source wholesale hotel duvet covers from Dieshiqiao factories. All TC ranges, cotton types, and closure styles. Custom sizes and embroidery available. Competitive pricing, global shipping.",
    keywords: "hotel duvet covers wholesale, duvet cover supplier China, sateen duvet cover manufacturer, hotel bedding",
    intro: "Duvet covers define the visual standard of a made bed. We source from factories specializing in large-format duvet covers with reinforced seams, hidden zipper or button closures, and corner ties to keep inserts in place.",
    specs: [
      "Thread Count: 200–600 TC",
      "Weave: Percale, Sateen, Jacquard (stripe/diamond patterns)",
      "Material: Poly-cotton blend, 100% Cotton, Combed cotton, Long-staple cotton",
      "Sizes: Single, Double, Queen, King, Super King",
      "Closure: Hidden zipper, button closure, envelope (no closure)",
      "Features: Corner ties, reinforced seams, double-stitched hems",
      "MOQ: 100 pieces per size/spec combination",
    ],
    relatedGuides: [
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
    ],
    internalLinks: [
      { label: "hotel duvet covers wholesale", href: "/products/duvet-covers" },
      { label: "hotel bedding manufacturer", href: "/products/bed-sheets" },
      { label: "TC buying guide", href: "/guides/hotel-bedding-thread-count" },
    ],
  },
  "table-linen": {
    name: "Table Linen",
    title: "Hotel Table Linen — Wholesale Tablecloths & Napkins Sourcing",
    description: "Source wholesale hotel table linens from Dieshiqiao: tablecloths, napkins, placemats, and runners. Cotton, polyester, and blended fabrics. Custom sizes and colors for banquet and restaurant use.",
    keywords: "hotel table linen wholesale, tablecloth supplier China, restaurant napkins manufacturer, banquet tablecloth",
    intro: "Restaurant and banquet table linens face heavy use and frequent laundering. Our sourcing focuses on durable, stain-resistant fabrics with consistent color matching across reorders.",
    specs: [
      "Material: Polyester (wrinkle-resistant), Cotton-polyester blend, 100% Cotton",
      "Weave: Plain, damask, satin band, jacquard patterns",
      "Sizes: Square, rectangular, round — all standard banquet sizes; custom cut",
      "Color: White, ivory, black, navy (standard); custom dyed-to-match",
      "MOQ: 200 pieces per size/color combination",
    ],
    relatedGuides: [
      { label: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
    ],
    internalLinks: [
      { label: "hotel table linen wholesale", href: "/products/table-linen" },
      { label: "restaurant tablecloths China", href: "/products/table-linen" },
      { label: "banquet linen supplier", href: "/products/table-linen" },
    ],
  },
  "mattress-toppers": {
    name: "Mattress Toppers",
    title: "Hotel Mattress Toppers — Wholesale Pillow-Top & Featherbed Sourcing",
    description: "Source wholesale hotel mattress toppers from Dieshiqiao: pillow-top, featherbed, and memory foam options. Custom sizes, fill weights, and cover fabrics.",
    keywords: "hotel mattress topper wholesale, pillow top supplier China, featherbed manufacturer, hotel mattress protector",
    intro: "Mattress toppers extend mattress life and elevate guest comfort. We source pillow-top mattress pads, down-alternative featherbeds, and memory foam toppers with fitted skirt options in all hotel bed sizes.",
    specs: [
      "Type: Pillow-top (quilted), Featherbed (down/down-alternative), Memory foam",
      "Fill: Polyester fiberfill, down-alternative microfiber, goose down blend",
      "Cover: 100% Cotton (200–300 TC), poly-cotton blend",
      "Sizes: All hotel bed sizes (Single to Emperor)",
      "MOQ: 100 pieces per size/type combination",
    ],
    relatedGuides: [
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
    ],
    internalLinks: [
      { label: "hotel mattress topper wholesale", href: "/products/mattress-toppers" },
      { label: "hotel bed sheets", href: "/products/bed-sheets" },
    ],
  },
};

const CATEGORY_SLUGS = new Set(Object.keys(CATEGORY_DATA));

// Map slug to Sanity category display name
const SLUG_TO_CATEGORY_NAME: Record<string, string> = {
  "bath-towels": "Bath Towels",
  "bathrobes": "Bathrobes",
  "pool-beach-towels": "Pool & Beach Towels",
  "bath-mats": "Bath Mats",
  "bed-sheets": "Bed Sheets",
  "pillowcases": "Pillowcases",
  "duvet-covers": "Duvet Covers",
  "table-linen": "Table Linen",
  "mattress-toppers": "Mattress Toppers",
};

// ----- Page component -----

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Category route
  if (CATEGORY_SLUGS.has(slug)) {
    const data = CATEGORY_DATA[slug];
    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      alternates: { canonical: `/products/${slug}` },
      openGraph: {
        title: data.title,
        description: data.description,
        url: `https://www.nantonglinens.com/products/${slug}`,
      },
    };
  }

  // Product route
  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });
  if (!product) return {};

  return {
    title: `${product.name} — Hotel Linen Specs & Pricing | Nantong Linens`,
    description: product.shortDescription || `Source ${product.name} in bulk — competitive pricing from Dieshiqiao factories.`,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.name} — Hotel Linen Specs & Pricing | Nantong Linens`,
      description: product.shortDescription || "",
      images: product.images?.[0]?.asset?.url ? [product.images[0].asset.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const products = await client.fetch(PRODUCTS_QUERY).catch(() => []);
  const productSlugs = (products || []).map((p: any) => ({ slug: p.slug?.current }));
  const categorySlugs = Array.from(CATEGORY_SLUGS).map((s) => ({ slug: s }));
  return [...productSlugs, ...categorySlugs];
}

export default async function ProductOrCategoryPage({ params }: PageProps) {
  const { slug } = await params;

  // --- Category Route ---
  if (CATEGORY_SLUGS.has(slug)) {
    const data = CATEGORY_DATA[slug];
    const categoryName = SLUG_TO_CATEGORY_NAME[slug] || data.name;

    const allProducts = await client.fetch(PRODUCTS_QUERY);
    const filtered = allProducts.filter((p: any) => p.category === categoryName);

    return (
      <>
        <section className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-blue-800">Products</Link>
              <span>/</span>
              <span className="text-gray-600">{data.name}</span>
            </nav>
          </div>
        </section>

        <section className="bg-white py-14 border-b border-gray-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">Product Category</span>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">{data.name}</h1>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">{data.intro}</p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm text-gray-400">
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""} in {data.name}
          </p>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product: any) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="mx-auto max-w-md">
                <p className="text-lg text-gray-500">No products listed in {data.name} yet, but we source these daily.</p>
                <p className="mt-2 text-sm text-gray-400">Our factory network covers {data.name.toLowerCase()} with every spec combination.</p>
                <Link href="/rfq" className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors">
                  Tell us what you need →
                </Link>
              </div>
            </div>
          )}

          {/* Technical specifications */}
          <div className="mt-16 rounded-xl bg-gray-50 p-8">
            <h2 className="text-lg font-semibold text-gray-900">{data.name} — Technical Specifications</h2>
            <ul className="mt-4 space-y-2">
              {data.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 text-blue-800 font-bold">•</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Related guides */}
          {data.relatedGuides.length > 0 && (
            <div className="mt-8 rounded-xl border border-gray-100 bg-white p-8">
              <h2 className="text-lg font-semibold text-gray-900">Related Resources</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {data.relatedGuides.map((guide) => (
                  <Link key={guide.href} href={guide.href} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 hover:bg-blue-100 transition-colors">
                    {guide.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* SEO internal links */}
          <aside className="mt-8 rounded-xl bg-gray-50 p-8">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Explore {data.name} Sourcing</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.internalLinks.map((kw) => (
                <Link key={kw.label} href={kw.href} className="rounded-full bg-white px-3 py-1.5 text-xs text-gray-500 border border-gray-200 hover:text-blue-800 hover:border-blue-200 transition-colors">
                  {kw.label}
                </Link>
              ))}
            </div>
          </aside>

          {/* Cross-sell other categories */}
          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50/50 p-8">
            <h2 className="text-lg font-semibold text-gray-900">Looking for other hotel linen categories?</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Bed Sheets", key: "bed-sheets" },
                { name: "Duvet Covers", key: "duvet-covers" },
                { name: "Bath Towels", key: "bath-towels" },
                { name: "Bathrobes", key: "bathrobes" },
              ].filter((c) => c.key !== slug).map((c) => (
                <Link key={c.key} href={`/products/${c.key}`} className="rounded-lg bg-white border border-gray-100 p-4 text-sm font-medium text-gray-700 hover:border-blue-200 hover:text-blue-800 transition-colors">
                  {c.name} →
                </Link>
              ))}
            </div>
          </div>

          {/* RFQ CTA */}
          <div className="mt-12 rounded-2xl bg-blue-950 p-10 text-center">
            <h2 className="text-2xl font-bold text-white">Need custom {data.name.toLowerCase()} specifications?</h2>
            <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">
              Tell us your required specs and quantity. We will match you with the right Dieshiqiao factory — with samples shipped within 5 business days.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/rfq" className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors">
                Request a Quote
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors">
                View All Products
              </Link>
            </div>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: data.title,
            description: data.description,
            url: `https://www.nantonglinens.com/products/${slug}`,
            isPartOf: { "@type": "WebSite", name: "Nantong Linens", url: "https://www.nantonglinens.com" },
          }),
        }} />
      </>
    );
  }

  // --- Product Detail Route ---
  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });
  if (!product) notFound();

  return (
    <>
      <section className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-800">Products</Link>
            <span>/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-50">
                {product.images?.[0]?.asset?.url ? (
                  <Image src={product.images[0].asset.url} alt={product.images[0].alt || product.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-gray-300">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                  </div>
                )}
              </div>
              {product.images && product.images.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {product.images.map((img: any, i: number) => (
                    <div key={i} className="relative h-20 w-20 overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
                      {img.asset?.url ? <Image src={img.asset.url} alt={img.alt || `${product.name} ${i + 1}`} fill sizes="80px" className="object-cover" /> : null}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              {/* Category badge — now links to category page */}
              {product.category && (() => {
                const catSlug = Object.entries(SLUG_TO_CATEGORY_NAME).find(([, name]) => name === product.category)?.[0];
                const badge = (
                  <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                    {product.category}
                  </span>
                );
                return catSlug ? <Link href={`/products/${catSlug}`}>{badge}</Link> : badge;
              })()}

              <h1 className="mt-3 text-3xl font-bold text-gray-900">{product.name}</h1>
              {product.shortDescription && (
                <p className="mt-4 text-base leading-relaxed text-gray-500">{product.shortDescription}</p>
              )}

              <div className="mt-6 flex flex-wrap gap-4">
                {product.moq && (
                  <div className="rounded-lg bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-400">MOQ</p>
                    <p className="font-semibold text-gray-900">{product.moq} pcs</p>
                  </div>
                )}
                {product.priceRange && (
                  <div className="rounded-lg bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-400">Price Range</p>
                    <p className="font-semibold text-gray-900">{product.priceRange}</p>
                  </div>
                )}
                {product.leadTime && (
                  <div className="rounded-lg bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-400">Lead Time</p>
                    <p className="font-semibold text-gray-900">{product.leadTime}</p>
                  </div>
                )}
              </div>

              {product.specifications && (
                <div className="mt-8">
                  <h2 className="font-semibold text-gray-900">Specifications</h2>
                  <div className="mt-3 divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
                    {product.specifications.material && (
                      <div className="flex justify-between px-5 py-3"><span className="text-sm text-gray-500">Material</span><span className="text-sm font-medium text-gray-900">{product.specifications.material}</span></div>
                    )}
                    {product.specifications.threadCount && (
                      <div className="flex justify-between px-5 py-3"><span className="text-sm text-gray-500">Thread Count</span><span className="text-sm font-medium text-gray-900">{product.specifications.threadCount}</span></div>
                    )}
                    {product.specifications.gsm && (
                      <div className="flex justify-between px-5 py-3"><span className="text-sm text-gray-500">GSM</span><span className="text-sm font-medium text-gray-900">{product.specifications.gsm} g/m²</span></div>
                    )}
                    {product.specifications.sizes && (
                      <div className="flex justify-between px-5 py-3"><span className="text-sm text-gray-500">Sizes</span><span className="text-sm font-medium text-gray-900 text-right">{product.specifications.sizes}</span></div>
                    )}
                    {product.specifications.colors && (
                      <div className="flex justify-between px-5 py-3"><span className="text-sm text-gray-500">Colors</span><span className="text-sm font-medium text-gray-900">{product.specifications.colors}</span></div>
                    )}
                  </div>
                </div>
              )}

              {product.customizations && product.customizations.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-semibold text-gray-900">Customization Options</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.customizations.map((opt: string) => (
                      <span key={opt} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-800">{opt}</span>
                    ))}
                  </div>
                </div>
              )}

              {product.hotelTiers && product.hotelTiers.length > 0 && (
                <div className="mt-6">
                  <h2 className="font-semibold text-gray-900 text-sm">Suitable For</h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.hotelTiers.map((tier: string) => (
                      <span key={tier} className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">{tier}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/rfq" className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors">
                  Request a Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <a href="https://wa.me/8615151361119" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {product.description && (
            <div className="mt-16 border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
              <div className="mt-6 prose max-w-none">
                <PortableTextContent content={product.description} />
              </div>
            </div>
          )}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: (() => {
          let minPrice: number | undefined;
          let maxPrice: number | undefined;
          if (product.priceRange) {
            const numbers = product.priceRange.match(/\d+(?:\.\d+)?/g)?.map(Number);
            if (numbers && numbers.length > 0) { minPrice = Math.min(...numbers); maxPrice = Math.max(...numbers); }
          }
          return JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription || "",
            brand: { "@type": "Brand", name: product.category || "Hotel Linen" },
            ...(product.images?.[0]?.asset?.url ? { image: product.images[0].asset.url } : {}),
            offers: {
              "@type": "AggregateOffer",
              offerCount: 1,
              lowPrice: minPrice,
              highPrice: maxPrice,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `https://www.nantonglinens.com/products/${product.slug?.current || slug}`,
              seller: { "@type": "Organization", name: "Nantong Linens" },
              ...(product.moq ? { eligibleQuantity: { "@type": "QuantitativeValue", value: product.moq, unitText: "pcs" } } : {}),
            },
            category: product.category,
            ...(product.specifications?.material ? { material: product.specifications.material } : {}),
          });
        })(),
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nantonglinens.com" },
            { "@type": "ListItem", position: 2, name: "Products", item: "https://www.nantonglinens.com/products" },
            { "@type": "ListItem", position: 3, name: product.name, item: `https://www.nantonglinens.com/products/${product.slug?.current || slug}` },
          ],
        }),
      }} />
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
          case "h1": return <h1 key={i} className="mt-8 text-2xl font-bold text-gray-900">{text}</h1>;
          case "h2": return <h2 key={i} className="mt-6 text-xl font-bold text-gray-900">{text}</h2>;
          case "h3": return <h3 key={i} className="mt-4 text-lg font-semibold text-gray-900">{text}</h3>;
          case "blockquote": return <blockquote key={i} className="border-l-4 border-blue-200 pl-4 italic text-gray-500">{text}</blockquote>;
          default: return <p key={i}>{text}</p>;
        }
      })}
    </div>
  );
}
