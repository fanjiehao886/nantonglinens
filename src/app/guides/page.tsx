import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Linen Procurement Guides — GSM, Thread Count, Freight & Factory-Direct",
  description:
    "Six free procurement guides for hotel linen buyers: thread count and GSM by hotel tier, towel and bathrobe specification, buying direct from a Chinese factory, and container loading maths. No email gate.",
  keywords:
    "hotel linen buying guide, hotel linen procurement guide, hotel towel gsm guide, hotel bedding thread count guide, buy hotel linens factory direct, container loading hotel bedding",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Hotel Linen Procurement Guides — Free Buyer Guides",
    description:
      "Specify, source and ship hotel linens: six guides written from real Dieshiqiao sourcing experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Linen Procurement Guides",
      },
    ],
  },
};

const TOPIC_STYLES: Record<string, string> = {
  Specification: "border-blue-100 bg-blue-50 text-blue-800",
  Sourcing: "border-emerald-100 bg-emerald-50 text-emerald-800",
  Logistics: "border-amber-100 bg-amber-50 text-amber-800",
};

const guides = [
  {
    topic: "Specification",
    title: "Hotel Bedding Thread Count Guide (200–1000 TC)",
    desc: "What thread count actually changes in a hotel sheet, percale versus sateen, which TC suits which tier, and the inflated-TC maths worth checking in any quote you receive.",
    href: "/guides/hotel-bedding-thread-count",
    read: "12 min",
  },
  {
    topic: "Specification",
    title: "Hotel Towel GSM Guide (300–600 GSM)",
    desc: "300 vs 400 vs 500 vs 600 GSM compared: weights by hotel tier, cotton types, absorbency, laundry cost per wash, and real FOB price ranges.",
    href: "/guides/hotel-towel-gsm",
    read: "10 min",
  },
  {
    topic: "Specification",
    title: "Hotel Towel Quality Guide",
    desc: "Cotton grades, pile construction, border styles, absorbency testing and commercial-laundry durability — the points that decide whether a towel survives 100 wash cycles.",
    href: "/guides/hotel-towel-quality-guide",
    read: "10 min",
  },
  {
    topic: "Specification",
    title: "Hotel Bathrobe Buying Guide",
    desc: "Waffle versus terry versus velour, GSM ranges by property type, kimono versus shawl collar, logo embroidery options and factory-direct pricing.",
    href: "/guides/hotel-bathrobe-buying-guide",
    read: "8 min",
  },
  {
    topic: "Sourcing",
    title: "Buying Hotel Linens Direct from a Chinese Factory",
    desc: "What factory-direct buying actually changes in your landed cost, the four things it asks of you, when a trading company is genuinely the better choice, and how to confirm the party quoting you owns the line.",
    href: "/guides/buying-hotel-linens-direct-from-chinese-factory",
    read: "9 min",
  },
  {
    topic: "Logistics",
    title: "Container Loading: 20GP, 40GP or 40HQ",
    desc: "How many bed sets fit in each box, how to calculate CBM from one packed carton, usable versus nominal volume, and the order size at which LCL stops making sense.",
    href: "/guides/container-loading-hotel-bedding-volume-weight",
    read: "8 min",
  },
];

export default function GuidesIndexPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Hotel Linen Procurement Guides",
    description:
      "Six free procurement guides for hotel linen buyers covering specification, factory-direct sourcing and container logistics.",
    url: "https://www.nantonglinens.com/guides",
    isPartOf: {
      "@type": "WebSite",
      name: "Nantong Linens",
      url: "https://www.nantonglinens.com",
    },
    hasPart: guides.map((g) => ({
      "@type": "Article",
      headline: g.title,
      description: g.desc,
      url: `https://www.nantonglinens.com${g.href}`,
    })),
  };

  const breadcrumbSchema = {
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
        name: "Guides",
        item: "https://www.nantonglinens.com/guides",
      },
    ],
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
            <span className="text-gray-600">Guides</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
            Knowledge Hub
          </span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Hotel Linen Procurement Guides
          </h1>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Six guides written for the person who actually places the order — what belongs on the
            specification sheet, what the numbers mean at each hotel tier, how factory-direct buying
            works in practice, and how the cartons travel. No registration and no email gate.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
            <span>Updated October 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Based on Dieshiqiao sourcing experience</span>
          </div>
        </div>
      </section>

      {/* Guide cards */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${TOPIC_STYLES[g.topic]}`}
                  >
                    {g.topic}
                  </span>
                  <span className="text-xs text-gray-400">{g.read} read</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-800 transition-colors">
                  {g.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-gray-500 leading-relaxed">{g.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-800">
                  Read the guide
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-400 leading-relaxed">
            Ordering for the first time? Start with the{" "}
            <Link href="/guides/buying-hotel-linens-direct-from-chinese-factory" className="text-blue-800 hover:underline">
              factory-direct guide
            </Link>
            , then check the{" "}
            <Link href="/guides/container-loading-hotel-bedding-volume-weight" className="text-blue-800 hover:underline">
              container maths
            </Link>{" "}
            before you accept a volume estimate. If you would rather read offline, the whole set is
            in the{" "}
            <Link href="/guides/download" className="text-blue-800 hover:underline">
              free PDF
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Not sure which specification applies to your property?
          </h2>
          <p className="mt-3 text-gray-500">
            Tell us the tier you are buying for and the quantity — we will come back within 24 hours
            with the specification that fits, the factory-direct FOB price and the sample lead time.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/rfq"
              className="rounded-full bg-blue-900 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-gray-200 px-7 py-3 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-800 transition-colors"
            >
              Browse the Catalog
            </Link>
            <Link
              href="/wholesale"
              className="rounded-full border border-gray-200 px-7 py-3 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-800 transition-colors"
            >
              Wholesale Terms
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Samples ship in 5–7 days.
          </p>
        </div>
      </section>

      {/* Collection Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
