import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { TrustBar } from "@/components/TrustBar";
import { TestimonialSection } from "@/components/TestimonialSection";
import { StickyCTA } from "@/components/StickyCTA";
import { client } from "@/lib/sanity";
import { FEATURED_PRODUCTS_QUERY } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Hotel Linen Manufacturer & Exporter — Factory-Direct from Nantong, China",
  description:
    "We manufacture and export hotel linens through our own group of integrated mill-and-trade factories in Nantong, China — factory-direct FOB pricing, no middle layer. Free procurement guides, GSM and thread count data, QC checklists.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hotel Linen Manufacturer & Exporter — Factory-Direct Pricing",
    description:
      "Factory-direct hotel linens from our own group factories in Nantong, plus free buying guides: GSM, thread count, QC checklists. No middlemen, no markup.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hotel Linen Manufacturer & Exporter — Nantong Linens" }],
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
                <span className="sm:hidden">Hotel Linen Manufacturer &amp; Exporter</span>
                <span className="hidden sm:inline">Hotel Linen Manufacturer &amp; Exporter — Group Factories + Dieshiqiao Cluster, China</span>
              </span>
              <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Hotel Linens,
                <br />
                <span className="text-blue-300">Factory-Direct from China</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-blue-100/80 sm:text-lg">
                We are a group of integrated mill-and-trade enterprises — manufacturer and trader in
                one — based in Nantong, China. Our own mill in Chuanjiang runs weaving, dyeing, cutting,
                sewing, inspection and packing; member factories of our group across the Dieshiqiao
                cluster cover the rest of the range. You contract with one company, so you buy at{" "}
                <strong className="text-white">factory-direct FOB prices, with no middle layer</strong>.
                The guides and specs on this site are free: read them, then order direct.
                <span className="mt-2 block text-blue-200 font-medium">
                  RFQ replies within 24 hours — samples ship worldwide.
                </span>
              </p>
              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/wholesale"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-gray-100 transition-colors shadow-lg sm:px-7 sm:py-3.5 sm:text-base"
                >
                  Wholesale &amp; OEM
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
                <Link
                  href="/guides/hotel-bedding-thread-count"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors sm:px-7 sm:py-3.5 sm:text-base"
                >
                  Browse Free Guides
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-col gap-3 text-sm text-blue-200/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  Own group factories — factory-direct price
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  In-house QC Before Shipment
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

            {/* Desktop card — factory capability + knowledge */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-800/50 to-blue-950/50 p-8 backdrop-blur border border-white/10">
                <p className="text-xs font-medium text-blue-300/70 uppercase tracking-widest mb-4">Factory Capability + Free Resources</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Own Production", value: "In-house", desc: "Weaving → sewing → QC → packing" },
                    { label: "Factory-Direct", value: "FOB Price", desc: "No trading-company layer" },
                    { label: "Wholesale MOQ", value: "From 50 pcs", desc: "Per size & colour" },
                    { label: "Buying Guides", value: "Free", desc: "GSM, thread count, QC" },
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
              { label: "Own Factories", value: "Yes" },
              { label: "Factory-Direct", value: "FOB" },
              { label: "MOQ", value: "50 pcs" },
              { label: "Guides", value: "Free" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/10 backdrop-blur-sm p-3 text-center border border-white/10">
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="mt-0.5 text-[11px] leading-tight text-blue-200/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== QUICK ANSWERS — reduce bounce, answer-first navigation ========== */}
      <section className="border-b border-gray-100 bg-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-semibold text-gray-900">Looking for a quick answer?</span>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "What does GSM mean?", href: "/guides/hotel-towel-gsm" },
                { label: "Best thread count?", href: "/guides/hotel-bedding-thread-count" },
                { label: "Towel prices by GSM", href: "/guides/hotel-towel-gsm" },
                { label: "QC checklist", href: "/guides/hotel-towel-quality-guide" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
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

      {/* ========== FREE SAMPLES BANNER — low-friction entry ========== */}
      <section className="bg-amber-50 border-b border-amber-100 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg">🎁</span>
              <div>
                <p className="text-sm font-semibold text-gray-900">Not sure about quality? Order free swatch samples first.</p>
                <p className="text-xs text-gray-600">We ship fabric and towel swatches worldwide at no cost for serious buyers.</p>
              </div>
            </div>
            <div className="flex shrink-0 gap-2">
              <Link
                href="/rfq"
                className="rounded-full bg-blue-900 px-5 py-2 text-sm font-medium text-white hover:bg-blue-800 transition-colors"
              >
                Request Free Samples
              </Link>
              <Link
                href="/guides/download"
                className="rounded-full border border-amber-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 hover:bg-amber-100 transition-colors"
              >
                Get PDF Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MARKETS WE SERVE — SEA-first (top traffic source) ========== */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Shipping Worldwide from Nantong — FOB or DDP</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                We export hotel linens to <strong className="text-gray-700">Singapore, Vietnam, Thailand &amp; Malaysia</strong>,
                the UAE, Saudi Arabia &amp; Qatar, the UK, Germany &amp; the EU, the US &amp; Canada, and Australia.
                Ocean freight consolidation, full export documentation, and WhatsApp-updated order tracking included.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-2 text-xs font-medium text-gray-600">
              {["🇸🇬 Singapore", "🇻🇳 Vietnam", "🇹🇭 Thailand", "🇦🇪 UAE", "🇬🇧 UK", "🇺🇸 USA"].map((m) => (
                <span key={m} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== DIESHIQIAO ADVANTAGE BANNER ========== */}
      <section className="bg-blue-900 text-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Our Factories + the World&apos;s Largest Textile Hub</h2>
              <p className="mt-1 text-sm text-blue-200/80 max-w-xl">
                Our own mill sits in Chuanjiang, Tongzhou — minutes from Dieshiqiao (叠石桥) in
                Nantong, where 6,000+ mills operate within a few square kilometers. Core programmes run
                on our lines; the wider range runs in the member factories of our group across the same
                cluster. Every member is a mill-and-trader, which is why our prices are factory-direct
                rather than agent-quoted.
              </p>
            </div>
            <Link
              href="/about"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Inside Our Factories
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
              <p className="mt-1 text-gray-500">Produced on our own lines and in the member factories of our group — specs for reference</p>
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

      {/* ========== WHY FACTORY-DIRECT ========== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Why Buyers Order Factory-Direct — Not Through Agents</h2>
            <p className="mt-2 text-gray-500">
              We are a group of integrated mill-and-trade enterprises. Two things follow from that. Everything else is table stakes.
            </p>
          </div>

          {/* === TOP 2 hero cards === */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Card 1 — Factory-direct pricing */}
            <div className="rounded-2xl border-2 border-blue-900 bg-blue-950 p-8 text-white">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🏭</span>
                <span className="rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-blue-950">
                  #1 Reason
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">Factory-Direct Price — From Our Own Group Factories</h3>
              <p className="mt-3 text-blue-100 leading-relaxed">
                We quote from our own group&apos;s production cost, not from another mill&apos;s price plus a commission.
                Buying through a sourcing agent means factory price <strong className="text-white">plus agent margin</strong>;
                buying through an importer means factory price plus landed-cost margin.
                You buy from the factory, so neither layer is in your quotation.
                No agent commission. No importer markup. Just the mill rate, FOB Nantong or Shanghai.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-blue-400/40 px-3 py-1 text-blue-200">Our own group factories</span>
                <span className="rounded-full border border-blue-400/40 px-3 py-1 text-blue-200">Factory-direct FOB price</span>
                <span className="rounded-full border border-blue-400/40 px-3 py-1 text-blue-200">No agent commission</span>
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
              <h3 className="mt-5 text-xl font-bold text-gray-900">Rigorous QC — On the Running Batch</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Because the lines are ours, inspection happens in our own QC room — not on someone
                else&apos;s line, on somebody else&apos;s schedule. We verify GSM weight, thread count, stitching,
                shrinkage, and colour fastness on the running batch, and send you a full photo and video report.
                Our group holds OEKO-TEX Standard 100 and ISO 9001.{" "}
                <strong className="text-gray-900">If it doesn&apos;t pass our inspection, it doesn&apos;t leave the factory.</strong>
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-gray-600">In-house inspection</span>
                <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-gray-600">Photo + video QC report</span>
                <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-gray-600">OEKO-TEX &amp; ISO 9001</span>
              </div>
            </div>
          </div>

          {/* === Secondary cards === */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "A Group of Manufacturer-Traders",
                description:
                  "Every member of our group runs its own lines and holds its own export licence — owner-operators, not middlemen. Export runs through our team: one contract, one point of responsibility, yarn to bill of lading.",
                icon: "🤝",
              },
              {
                title: "Group Factories + Cluster Capacity",
                description:
                  "Core bedding programmes run on our own line in Chuanjiang, minutes from Dieshiqiao. The wider range runs in the member factories of our group across the cluster — so category coverage and volume have no ceiling.",
                icon: "🏭",
              },
              {
                title: "We Spec Production, Not Resell It",
                description:
                  "Yarn count, GSM, weave, shrinkage, colourfastness, compliance — we set these on the line, which is why we can hold a specification across repeat orders.",
                icon: "📋",
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

          {/* === Cost-layer comparison — wholesale conversion driver === */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-100">
            <div className="bg-gray-50 px-6 py-5">
              <h3 className="font-semibold text-gray-900">Who Adds What to Your Unit Price</h3>
              <p className="mt-1 text-sm text-gray-500">
                The same hotel bed sheet, three supply routes. Only one of them is factory-direct.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white text-xs uppercase tracking-wider text-gray-400">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Supply route</th>
                    <th className="px-6 py-3 font-semibold">What sits between you and the mill</th>
                    <th className="px-6 py-3 font-semibold">Spec control</th>
                    <th className="px-6 py-3 font-semibold">Typical cost effect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white text-gray-600">
                  <tr className="bg-blue-50/40">
                    <td className="px-6 py-4 font-semibold text-blue-900">Buying direct from us (manufacturer group)</td>
                    <td className="px-6 py-4">Nothing — our group&apos;s factories make the goods and we export them</td>
                    <td className="px-6 py-4">Set by us, on our own group lines</td>
                    <td className="px-6 py-4 font-medium text-blue-900">Factory FOB price</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Through a sourcing agent</td>
                    <td className="px-6 py-4">Agent commission, plus their factory choice</td>
                    <td className="px-6 py-4">Influenced, not controlled</td>
                    <td className="px-6 py-4">Factory price + commission</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Through an importer / distributor</td>
                    <td className="px-6 py-4">Importer margin, duties financing, local warehousing</td>
                    <td className="px-6 py-4">Indirect</td>
                    <td className="px-6 py-4">Landed cost + margin</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-3 border-t border-gray-100 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">
                Wholesale, OEM, and private-label programs — MOQ from 50 pcs per size and colour.
              </p>
              <Link
                href="/wholesale"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                See Wholesale Terms
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
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
              { step: "02", title: "Sample & Costing", desc: "We cost your spec against our own production line — and against the member factories of our group for other categories — then ship free physical samples for approval." },
              { step: "03", title: "Quote, Produce & QC", desc: "You receive a factory-direct itemized quote. Production runs in our group's factories, inspection runs through our own room, and you get a photo/video QC report before anything is loaded." },
              { step: "04", title: "Export & Deliver", desc: "As a trading company we handle all export documentation, customs clearance, and freight — FOB Nantong/Shanghai or DDP to your address." },
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
          <h2 className="text-3xl font-bold text-white">Read the Guides — Then Order Factory-Direct</h2>
          <p className="mt-4 text-lg text-blue-200/80">
            Use our free procurement resources to lock your specifications. When you&apos;re ready to buy,
            send them to us — we quote factory-direct from our own group&apos;s production and reply within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/wholesale"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Wholesale &amp; OEM
            </Link>
            <Link
              href="/rfq"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Get a Factory-Direct Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ========== STICKY BOTTOM CTA ========== */}
      <StickyCTA />
    </>
  );
}
