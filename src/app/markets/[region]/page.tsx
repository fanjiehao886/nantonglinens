import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company } from "@/lib/company";
import {
  MARKET_REGIONS,
  MARKETS_LAST_REVIEWED,
  getMarketRegion,
  membershipTerms,
} from "@/lib/markets";
import { SUBPAGE_TOPICS, subpagesForRegion } from "@/lib/market-subpages";

type Props = {
  params: Promise<{ region: string }>;
};

export function generateStaticParams() {
  return MARKET_REGIONS.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  const data = getMarketRegion(region);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/markets/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: data.h1 }],
    },
  };
}

const CTA_HREF = "/rfq";

function Em({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-gray-900">{children}</strong>;
}

export default async function MarketRegionPage({ params }: Props) {
  const { region } = await params;
  const data = getMarketRegion(region);
  if (!data) notFound();

  const others = MARKET_REGIONS.filter((r) => r.slug !== data.slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${company.url}/markets/${data.slug}#webpage`,
        url: `${company.url}/markets/${data.slug}`,
        name: data.metaTitle,
        description: data.metaDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${company.url}/#website` },
        publisher: { "@id": `${company.url}/#organization` },
        about: {
          "@type": "Service",
          name: data.h1,
          serviceType: "Hotel linen manufacturing and export",
          provider: { "@id": `${company.url}/#organization` },
          areaServed: data.countries.map((name) => ({ "@type": "Country", name })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${company.url}/markets/${data.slug}#faq`,
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
            FOB Manufacturer Alliance — Nantong, China
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-tight">
            {data.h1}
          </h1>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
            {data.opening}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={CTA_HREF}
              className="inline-flex items-center rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Request a {data.name} Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Browse All Products
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {data.headlineFacts.map((f) => (
              <div key={f.label} className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{f.label}</p>
                <p className="mt-1.5 text-base font-semibold text-gray-900">{f.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <span>{company.service.quoteReplyLabel}</span>
            <span>Samples in {company.service.sampleDaysLabel}</span>
            <span>Every member factory open to audit</span>
          </div>
        </div>
      </section>

      {/* ============ TRADE / TARIFF ============ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">{data.tradeTitle}</h2>
          <div className="mt-5 space-y-4">
            {data.tradeBody.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-600">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 rounded-xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900">
            <strong className="font-semibold">Guidance, not advice.</strong> Tariff treatment,
            conformity requirements and labelling rules change, and they follow your HS code, not your
            product name. Confirm every figure on this page with your own customs broker for your exact
            tariff line before you commit to an order. Last reviewed {MARKETS_LAST_REVIEWED}.
          </p>
        </div>
      </section>

      {/* ============ LANES ============ */}
      <section className="bg-gray-50 py-14 border-y border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-2xl font-bold text-gray-900">{data.lanesTitle}</h2>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500">
              {data.laneMode}
            </span>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Destination</th>
                    <th className="px-6 py-3 font-semibold">Gateways</th>
                    <th className="px-6 py-3 font-semibold whitespace-nowrap">Transit band</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  {data.lanes.map((l) => (
                    <tr key={l.destination}>
                      <td className="px-6 py-3.5 font-medium text-gray-900">{l.destination}</td>
                      <td className="px-6 py-3.5">{l.gateways}</td>
                      <td className="px-6 py-3.5 whitespace-nowrap">{l.transit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-500">{data.laneNote}</p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
            {["FOB Nantong / Shanghai", "CIF", "DDP on request", "Mixed-category loading", "No container minimum"].map(
              (t) => (
                <span key={t} className="rounded-full border border-gray-200 bg-white px-3 py-1.5">
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ============ ORDER PROFILE ============ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">{data.orderTitle}</h2>
          <div className="mt-5 space-y-4">
            {data.orderBody.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-600">
                {p}
              </p>
            ))}
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.orderFacts.map((f) => (
              <div key={f.label} className="rounded-xl border border-gray-100 bg-gray-50/60 px-5 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-gray-400">{f.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900">{f.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-sm text-gray-500">
            Full MOQ and lead-time table on the{" "}
            <Link href="/wholesale" className="font-medium text-blue-800 hover:underline">
              wholesale page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ============ COMPLIANCE ============ */}
      <section className="bg-gray-50 py-14 border-y border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">{data.complianceTitle}</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-500">{data.complianceIntro}</p>

          <div className="mt-8 space-y-4">
            {data.compliance.map((c) => (
              <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-gray-500">
            We supply the technical file, the certificate numbers and the label artwork that these
            requirements depend on. What we cannot do is file on your behalf — the applicant has to be
            on your side of the border. Read more about how specifications and inspection are handled
            on the{" "}
            <Link href="/factory" className="font-medium text-blue-800 hover:underline">
              factory page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ============ PRODUCT MIX ============ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">{data.productTitle}</h2>
          <p className="mt-3 text-base text-gray-500">{data.productIntro}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{p.why}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PAYMENT ============ */}
      <section className="bg-gray-50 py-14 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">{data.paymentTitle}</h2>
          <div className="mt-5 space-y-4">
            {data.paymentBody.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-600">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
            {["T/T 30/70", "L/C at sight", "Repeat-buyer terms on request", "RMB settlement where workable"].map(
              (t) => (
                <span key={t} className="rounded-full border border-gray-200 bg-white px-3 py-1.5">
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ============ ALLIANCE CLOSING ============ */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Who You Are Actually Buying From
          </h2>
          <p className="mt-4 leading-relaxed text-blue-100/85">
            We are a <Em>FOB manufacturer alliance</Em> — independent export factories in Nantong, each
            with its own plant and its own export licence. The bedding member&apos;s 5,000 m&sup2; mill in
            Chuanjiang weaves, dyes, cuts, sews, inspects and packs the bed linen; the other members make
            the towelling, bathrobes, table linen and mattress programmes in the same cluster. Whether you
            buy from {data.name} or anywhere else, these are the terms every member has to meet before it
            can quote under this name:
          </p>
          <ul className="mt-6 space-y-3">
            {membershipTerms().map((t) => (
              <li key={t} className="flex gap-3 text-blue-100/85">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-blue-300"
                >
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-blue-100/85">
            What that gives a buyer is consistency across categories: one contract, one specification
            sheet per programme, one inspection standard and one set of shipping documents — and the
            member factory that makes your order is named on the contract and ships under its own export
            licence. Every member accepts buyer audits and on-site visits, so you can verify the plant
            before you place a {data.shortName} order rather than after.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/factory"
              className="inline-flex items-center rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Inside Our Factories
            </Link>
            <Link
              href="/wholesale"
              className="inline-flex items-center rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Wholesale &amp; OEM Terms
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            {data.name} Hotel Linen — Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {data.faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-gray-200 bg-white">
                <summary className="cursor-pointer px-6 py-4 text-base font-medium text-gray-900 list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-gray-300 group-open:rotate-180 transition-transform text-lg ml-4 shrink-0">
                    ▾
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ORDER PLANNING SUB-PAGES ============ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Once you are ready to order: the calendar and the first container
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500">
            The two questions every {data.shortName} buyer asks next — how far ahead to order, and what the
            first shipment should actually contain. Each has its own page, with the {data.shortName} numbers
            already applied.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {subpagesForRegion(data.slug).map((s) => (
              <Link
                key={s.topic}
                href={`/markets/${s.regionSlug}/${s.topic}`}
                className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {SUBPAGE_TOPICS[s.topic].name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{SUBPAGE_TOPICS[s.topic].blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-800 group-hover:underline">
                  Open the {SUBPAGE_TOPICS[s.topic].short} page
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OTHER REGIONS ============ */}
      <section className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Other regions we supply
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {others.map((r) => (
              <Link
                key={r.slug}
                href={`/markets/${r.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-blue-300 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {r.name}
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  {r.headlineFacts[0].value} · {r.headlineFacts[1].value}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/markets"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-blue-800 hover:underline"
          >
            All markets we supply
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Sourcing for {data.name}? Start With Your Requirements.
          </h2>
          <p className="mt-3 text-gray-500">
            Tell us the destination country, the categories, the specification and the quantity. If you
            already know your HS code and the certificate your customs requires, include it — that is the
            detail that decides how fast this order moves.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={CTA_HREF}
              className="inline-flex items-center rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Get a Factory-Direct Quote
            </Link>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            {company.service.quoteReplyLabel} · Samples ship worldwide in {company.service.sampleDaysLabel}
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
