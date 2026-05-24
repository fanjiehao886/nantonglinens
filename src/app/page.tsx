import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { client } from "@/lib/sanity";
import { FEATURED_PRODUCTS_QUERY } from "@/lib/queries";

export default async function HomePage() {
  const featuredProducts = await client.fetch(FEATURED_PRODUCTS_QUERY);

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMEwzMCAzMFY2MEwwIDBaIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+')] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-blue-400/30 px-4 py-1.5 text-sm font-medium text-blue-200">
                Your Sourcing Agent in Dieshiqiao — China&apos;s #1 Home Textile Hub
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Hotel Linens Sourced
                <br />
                <span className="text-blue-300">Right From the Source</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-blue-100/80">
                Based in Dieshiqiao — the world&apos;s largest home textile trading hub —
                we connect hotel buyers worldwide with vetted factories. From spec to
                shipment, we handle sourcing, sampling, QC, and export on your behalf.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/rfq"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Request a Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Browse Products
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-blue-200/70">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  Partner Factories: OEKO-TEX &amp; ISO 9001
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

            {/* Hero visual */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-800/50 to-blue-950/50 p-8 backdrop-blur border border-white/10">
                <p className="text-xs font-medium text-blue-300/70 uppercase tracking-widest mb-4">Why Source Through Us</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Local Presence", value: "On-site", desc: "In Dieshiqiao market daily" },
                    { label: "Response Time", value: "24 hr", desc: "Quote turnaround" },
                    { label: "Factory Network", value: "50+", desc: "Vetted partner mills" },
                    { label: "Export Experience", value: "FOB/DDP", desc: "Full logistics handled" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/5 p-5 border border-white/10">
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="mt-1 text-sm font-medium text-blue-200">{stat.label}</p>
                      <p className="text-xs text-blue-300/60">{stat.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Product preview cards */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Bed Sheets", "Towels", "Bathrobes"].map((item) => (
                    <div key={item} className="rounded-lg bg-white/5 p-3 text-center border border-white/10">
                      <div className="mx-auto h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-200">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-blue-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DIESHIQIAO ADVANTAGE BANNER ========== */}
      <section className="bg-blue-900 text-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Why Dieshiqiao Matters</h2>
              <p className="mt-1 text-sm text-blue-200/80 max-w-xl">
                Dieshiqiao (叠石桥) in Nantong is the world&apos;s single largest home textile
                wholesale market — over 6,000 factories and 10,000+ storefronts within a few square
                kilometers. Being based here means real-time pricing, direct factory access, and no
                information gap between you and the source.
              </p>
            </div>
            <Link
              href="/about"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CATEGORY QUICK LINKS ========== */}
      <section className="border-b border-gray-100 bg-white py-16">
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
              <p className="mt-1 text-gray-500">Top products sourced from our partner factories</p>
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

      {/* ========== WHY CHOOSE US ========== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Why Work With a Dieshiqiao Sourcing Agent?</h2>
            <p className="mt-2 text-gray-500">
              Local expertise + transparent process = better results than sourcing blindly
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Inside Market Access",
                description:
                  "We are physically based in Dieshiqiao market. We compare live prices across dozens of factories and negotiate directly — no inflated importer margins.",
                icon: "📍",
              },
              {
                title: "Deep Product Knowledge",
                description:
                  "We know hotel linen specs: thread counts, GSM, weave types, and certifications. We match your requirements to the right factory — no guesswork.",
                icon: "📋",
              },
              {
                title: "Strict QC Before Shipment",
                description:
                  "We personally inspect every order at the factory before it ships. Partner factories are OEKO-TEX and ISO 9001 certified. No surprises at your door.",
                icon: "🔍",
              },
              {
                title: "End-to-End Export Service",
                description:
                  "We handle the full export chain: factory coordination, customs documentation, freight booking (FOB or DDP), and shipping updates from day one.",
                icon: "🚢",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-100 p-6">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="mt-4 font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
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

      {/* ========== CTA BANNER ========== */}
      <section className="bg-blue-950 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">Ready to Source Your Hotel Linens?</h2>
          <p className="mt-4 text-lg text-blue-200/80">
            Send us your requirements — we reply with a sourcing plan within 24 hours.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Start Your RFQ
            </Link>
            <a
              href="https://wa.me/8615151361119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
