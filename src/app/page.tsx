import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { TrustBar } from "@/components/TrustBar";
import { TestimonialSection } from "@/components/TestimonialSection";
import { client } from "@/lib/sanity";
import { FEATURED_PRODUCTS_QUERY } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Hotel Linen Buying Guide, GSM & Thread Count — Nantong Linens",
  description:
    "Free hotel linen procurement guides: GSM explained, thread count comparisons, QC checklists, and sourcing tips from Dieshiqiao — the world's largest textile market. Real specs, real prices, no fluff.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hotel Linen Buying Guide, GSM & Thread Count — Nantong Linens",
    description:
      "Free hotel linen procurement guides: GSM, thread count, QC checklists, and sourcing tips from Dieshiqiao. Real specs, real prices, no fluff.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hotel Linen Buying Guide — Nantong Linens" }],
  },
};

export const revalidate = 3600;

export default async function HomePage() {
  const featuredProducts = await client.fetch(FEATURED_PRODUCTS_QUERY, {}, { next: { revalidate: 3600 } });

  return (
    <>
      {/* ========== HERO — Knowledge Hub Positioning ========== */}
      <section className="relative overflow-hidden text-white">
        <Image
          src="/hero-dieshiqiao.webp"
          alt="Dieshiqiao home textile market — world's largest home textile hub"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-950/80 to-blue-950/70 sm:bg-gradient-to-r sm:from-blue-950/85 sm:via-blue-900/75 sm:to-blue-950/60" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-blue-400/30 px-4 py-1.5 text-xs font-medium text-blue-200 sm:text-sm">
                <span className="sm:hidden">Hotel Linen Knowledge Hub</span>
                <span className="hidden sm:inline">Hotel Linen Knowledge Hub — Based in Dieshiqiao, China</span>
              </span>
              <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Everything About
                <br />
                <span className="text-blue-300">Buying Hotel Linens from China</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-blue-100/80 sm:text-lg">
                Free guides, fabric specs, procurement checklists, and pricing insights — built
                from daily boots-on-the-ground experience inside Dieshiqiao, the world&apos;s
                largest home textile market. When you&apos;re ready to buy, we source for you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/guides/hotel-bedding-thread-count"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-gray-100 transition-colors shadow-lg sm:px-7 sm:py-3.5 sm:text-base"
                >
                  Browse Free Guides
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="sm:w-[18px] sm:h-[18px]">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/rfq"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors sm:px-7 sm:py-3.5 sm:text-base"
                >
                  Request a Quote
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-col gap-3 text-sm text-blue-200/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  Free Guides & Resources
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  On-site QC Before Shipment
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Secure Payment (T/T, L/C)
                </div>
              </div>
            </div>

            {/* Desktop card — knowledge focus */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-800/50 to-blue-950/50 p-8 backdrop-blur border border-white/10">
                <p className="text-xs font-medium text-blue-300/70 uppercase tracking-widest mb-4">Free Resources</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Fabric Guides", value: "GSM/TC", desc: "Weight, density & weave types" },
                    { label: "QC Checklists", value: "Ready-to-Use", desc: "Pre-shipment inspection" },
                    { label: "Pricing Data", value: "Real Market", desc: "Price bands by spec" },
                    { label: "Market Reports", value: "Monthly", desc: "Trends & analysis" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/5 p-5 border border-white/10">
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="mt-1 text-sm font-medium text-blue-200">{stat.label}</p>
                      <p className="text-xs text-blue-300/60">{stat.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Popular guide previews */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "GSM Guide", href: "/guides/hotel-towel-gsm" },
                    { label: "Thread Count", href: "/guides/hotel-bedding-thread-count" },
                    { label: "MOQ & Shipping", href: "/guides/hotel-towel-quality-guide" },
                  ].map((item) => (
                    <Link key={item.label} href={item.href} className="rounded-lg bg-white/5 p-3 text-center border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="mx-auto h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-200">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-blue-200">{item.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only compact stats */}
          <div className="mt-10 grid grid-cols-4 gap-3 lg:hidden">
            {[
              { label: "Fabric Guides", value: "GSM/TC" },
              { label: "QC Lists", value: "Free" },
              { label: "Pricing", value: "Real" },
              { label: "Reports", value: "Monthly" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/10 backdrop-blur-sm p-3 text-center border border-white/10">
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="mt-0.5 text-[11px] leading-tight text-blue-200/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== KNOWLEDGE HUB — Main content entry points ========== */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Start Here — Free Hotel Linen Procurement Resources</h2>
            <p className="mt-2 text-gray-500">
              Everything you need to make informed buying decisions, built from real-world Dieshiqiao experience
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Thread Count Guide",
                subtitle: "Percale vs sateen, what TC ratings really mean for hotels",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-800">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                ),
                href: "/guides/hotel-bedding-thread-count",
                highlight: "Most Popular",
              },
              {
                title: "Towel GSM Guide",
                subtitle: "GSM weight, absorbency, and durability explained for buyers",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-800">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                href: "/guides/hotel-towel-gsm",
              },
              {
                title: "Quality & QC Guide",
                subtitle: "Cotton grades, loop density, absorbency tests, inspection points",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-800">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
                href: "/guides/hotel-towel-quality-guide",
              },
              {
                title: "Free PDF Download",
                subtitle: "Get our 2026 hotel linen buying guide PDF — sent to your inbox",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-800">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                ),
                href: "/guides/download",
                highlight: "Lead Magnet",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative rounded-xl border border-gray-100 bg-gray-50/50 p-6 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
              >
                {card.highlight && (
                  <span className="absolute -top-2.5 right-4 rounded-full bg-blue-900 px-3 py-0.5 text-[11px] font-medium text-white">
                    {card.highlight}
                  </span>
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white group-hover:bg-blue-100 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{card.subtitle}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-800 group-hover:underline">
                  Explore
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <TrustBar />

      {/* ========== DIESHIQIAO ADVANTAGE BANNER ========== */}
      <section className="bg-blue-900 text-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Based in Dieshiqiao — The World&apos;s Largest Textile Hub</h2>
              <p className="mt-1 text-sm text-blue-200/80 max-w-xl">
                Dieshiqiao (叠石桥) in Nantong is the global epicenter of home textile production — 6,000+
                factories within a few square kilometers. Being here means we compare live prices, visit
                production lines daily, and bring you factory-direct value without the information gap.
              </p>
            </div>
            <Link
              href="/about"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              About Our Location
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CATEGORY QUICK LINKS ========== */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Hotel Linens by Category</h2>
            <p className="mt-2 text-gray-500">Complete textile solutions for every hotel department</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {[
              {
                name: "Bed Sheets & Pillowcases",
                icon: "🛏️",
                slug: "bed-sheets",
                desc: "Percale, Sateen, Tencel",
              },
              {
                name: "Towels & Bath Mats",
                icon: "🧺",
                slug: "bath-towels",
                desc: "Egyptian cotton, bamboo",
              },
              {
                name: "Bathrobes",
                icon: "👘",
                slug: "bathrobes",
                desc: "Waffle, Terry, Velour",
              },
              {
                name: "Table Linen",
                icon: "🍽️",
                slug: "table-linen",
                desc: "Napkins, Tablecloths",
              },
              {
                name: "Duvet & Mattress",
                icon: "🛋️",
                slug: "duvet-covers",
                desc: "Covers, Toppers, Pads",
              },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group rounded-xl border border-gray-100 p-5 text-center hover:border-blue-200 hover:bg-blue-50/50 transition-all"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 group-hover:bg-blue-100 transition-colors">
                  <span className="text-2xl">{cat.icon}</span>
                </div>
                <h3 className="mt-3 font-semibold text-gray-900 text-sm">{cat.name}</h3>
                <p className="mt-1 text-xs text-gray-400">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED PRODUCTS ========== */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Featured Hotel Linens</h2>
              <p className="mt-1 text-gray-500">Products sourced from our partner factories — reference only</p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-800 hover:underline"
            >
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {featuredProducts && featuredProducts.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product: any) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl border border-gray-100 bg-white p-4 animate-pulse">
                  <div className="aspect-[4/3] rounded-lg bg-gray-100" />
                  <div className="mt-4 h-5 w-3/4 rounded bg-gray-100" />
                  <div className="mt-2 h-4 w-1/2 rounded bg-gray-50" />
                  <div className="mt-4 h-3 w-1/4 rounded bg-gray-50" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========== WHY A SOURCING AGENT ========== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Why Buyers Come to Us — Not Just Any Agent</h2>
            <p className="mt-2 text-gray-500">
              Two reasons stand above the rest. Everything else is table stakes.
            </p>
          </div>

          {/* === TOP 2 hero cards === */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Card 1 — Group-buy pricing */}
            <div className="rounded-2xl border-2 border-blue-900 bg-blue-950 p-8 text-white">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🏷️</span>
                <span className="rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-blue-950">
                  #1 Reason
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">Prices You Can&apos;t Get Elsewhere</h3>
              <p className="mt-3 text-blue-100 leading-relaxed">
                We consolidate orders across multiple hotel buyers — giving you the buying power of a large chain, even if you&apos;re ordering for a single property.
                The factory prices we negotiate <strong className="text-white">are simply not available</strong> to buyers who approach factories directly or through importers.
                No middleman markup. No mystery pricing. Just the real Dieshiqiao wholesale rate.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-blue-400/40 px-3 py-1 text-blue-200">Group purchasing power</span>
                <span className="rounded-full border border-blue-400/40 px-3 py-1 text-blue-200">Direct factory FOB price</span>
                <span className="rounded-full border border-blue-400/40 px-3 py-1 text-blue-200">No importer margin</span>
              </div>
            </div>

            {/* Card 2 — Strict QC */}
            <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🔍</span>
                <span className="rounded-full bg-green-600 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                  #2 Reason
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">Rigorous QC — Every Single Order</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Most buyers only discover quality problems after the container arrives. We inspect at the factory — before it ships.
                We check GSM weight, stitching, color fastness, and dimensional accuracy on-site, and send you a full photo/video report.
                Our partner factories hold OEKO-TEX and ISO 9001 certification. <strong className="text-gray-900">If it doesn&apos;t pass our inspection, it doesn&apos;t leave the factory.</strong>
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-gray-600">Pre-shipment inspection</span>
                <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-gray-600">Photo + video QC report</span>
                <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-gray-600">OEKO-TEX &amp; ISO 9001</span>
              </div>
            </div>
          </div>

          {/* === Secondary cards === */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Local Market Presence",
                description:
                  "We are physically based in Dieshiqiao — the world's largest home textile hub. We walk the factories. You don't have to.",
                icon: "📍",
              },
              {
                title: "Deep Product Knowledge",
                description:
                  "Thread counts, GSM, weave types, certifications — we match your specs to the right factory, not just the cheapest one.",
                icon: "📋",
              },
              {
                title: "Full Export Service",
                description:
                  "Factory coordination, customs docs, freight booking (FOB or DDP), and real-time shipping updates from day one.",
                icon: "🚢",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-100 p-6">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="mt-4 font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-2 text-gray-500">From your inquiry to delivery at your door — we manage every step</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Share Your Requirements", desc: "Tell us your product specs, quantity, timeline, and customization needs via the RFQ form or WhatsApp." },
              { step: "02", title: "We Source & Sample", desc: "We identify the best-matched factory partners and arrange free physical samples for your approval before any commitment." },
              { step: "03", title: "Quote, QC & Confirm", desc: "You receive a transparent itemized quote. We inspect the production run on-site and send you a photo/video QC report." },
              { step: "04", title: "Export & Deliver", desc: "We handle all export documentation, customs clearance, and freight — FOB Nantong or DDP to your address." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS / SOCIAL PROOF ========== */}
      <TestimonialSection />

      {/* ========== EMAIL CAPTURE / LEAD MAGNET ========== */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="rounded-2xl border border-blue-100 bg-white p-8 sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-800">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h2 className="mt-5 text-2xl font-bold text-gray-900">Get the Free Hotel Linen Buying Guide</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              A 4-page PDF packed with GSM charts, thread count comparisons, QC checklists, and
              real Dieshiqiao factory price ranges. Delivered to your inbox instantly.
            </p>
            <Link
              href="/guides/download"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Download Free PDF Guide
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </Link>
            <p className="mt-3 text-xs text-gray-400">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="bg-blue-950 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">Read the Guides, Then Let&apos;s Source Together</h2>
          <p className="mt-4 text-lg text-blue-200/80">
            Browse our free procurement resources first. When you&apos;re ready to place an order,
            send us your requirements — we reply with a sourcing plan within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/hotel-bedding-thread-count"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Browse Free Guides
            </Link>
            <Link
              href="/rfq"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Start Your RFQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
