import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company } from "@/lib/company";
import { MARKET_REGIONS, MARKETS_LAST_REVIEWED, getMarketRegion, membershipTerms } from "@/lib/markets";
import {
  CAPACITY_LINK_HREF,
  MARKET_SUBPAGES,
  SUBPAGE_TOPICS,
  getMarketSubpage,
  subpagesForRegion,
} from "@/lib/market-subpages";

type Props = {
  params: Promise<{ region: string; topic: string }>;
};

export function generateStaticParams() {
  return MARKET_SUBPAGES.map((s) => ({ region: s.regionSlug, topic: s.topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region, topic } = await params;
  const data = getMarketSubpage(region, topic);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/markets/${data.regionSlug}/${data.topic}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "article",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: data.h1 }],
    },
  };
}

function Em({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-gray-900">{children}</strong>;
}

export default async function MarketSubpage({ params }: Props) {
  const { region, topic } = await params;
  const data = getMarketSubpage(region, topic);
  const regionData = getMarketRegion(region);
  if (!data || !regionData) notFound();

  const topicMeta = SUBPAGE_TOPICS[data.topic];
  const siblings = subpagesForRegion(region).filter((s) => s.topic !== data.topic);
  const otherRegions = MARKET_REGIONS.filter((r) => r.slug !== region);
  const canonical = `${company.url}/markets/${data.regionSlug}/${data.topic}`;
  const showCapacityLink = data.topic === "first-order";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
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
          areaServed: regionData.countries.map((name) => ({ "@type": "Country", name })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Markets", item: `${company.url}/markets` },
          { "@type": "ListItem", position: 2, name: regionData.name, item: `${company.url}/markets/${regionData.slug}` },
          { "@type": "ListItem", position: 3, name: topicMeta.name, item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      {/* ============ BREADCRUMB + HERO ============ */}
      <section className="bg-white pt-8 pb-14 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400">
            <Link href="/markets" className="hover:text-blue-800">
              Markets
            </Link>
            <span aria-hidden>/</span>
            <Link href={`/markets/${regionData.slug}`} className="hover:text-blue-800">
              {regionData.name}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-gray-500">{topicMeta.short}</span>
          </nav>

          <div className="mt-8 text-center">
            <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
              FOB Manufacturer Alliance — Nantong, China
            </span>
            <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-tight">{data.h1}</h1>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">{data.opening}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/rfq"
                className="inline-flex items-center rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                Request a {regionData.shortName} Quote
              </Link>
              <Link
                href={`/markets/${regionData.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back to the {regionData.shortName} guide
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {data.facts.map((f) => (
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
        </div>
      </section>

      {/* ============ SECTIONS ============ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {data.sections.map((s) => (
            <div key={s.h2}>
              <h2 className="text-2xl font-bold text-gray-900">{s.h2}</h2>

              {s.paras?.map((p, j) => (
                <p key={j} className="mt-4 text-base leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}

              {s.bullets && (
                <ul className="mt-5 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base leading-relaxed text-gray-600">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mt-1 shrink-0 text-blue-800"
                      >
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {s.table && (
                <div className="mt-6">
                  {s.table.caption && (
                    <p className="mb-2 text-sm font-medium text-gray-500">{s.table.caption}</p>
                  )}
                  <div className="overflow-hidden rounded-2xl border border-gray-200">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[560px] text-left text-sm">
                        <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">
                          <tr>
                            {s.table.headers.map((h) => (
                              <th key={h} className="px-5 py-3.5 font-semibold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-600">
                          {s.table.rows.map((row) => (
                            <tr key={row.join("|")} className="align-top">
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className={
                                    ci === 0
                                      ? "px-5 py-3.5 font-medium text-gray-900"
                                      : "px-5 py-3.5"
                                  }
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {s.note && <p className="mt-3 text-sm leading-relaxed text-gray-500">{s.note}</p>}
                </div>
              )}

              {/* Related reading appended after the first-order break-even section */}
              {showCapacityLink && s.h2.startsWith("LCL or") && (
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  Capacity tables for towels and sheet sets per container:{" "}
                  <Link href={CAPACITY_LINK_HREF} className="font-medium text-blue-800 hover:underline">
                    How many hotel towels fit in a 20ft or 40ft container
                  </Link>
                  .
                </p>
              )}
            </div>
          ))}

          {/* ============ ACTION ============ */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 px-6 py-6">
            <h2 className="text-lg font-semibold text-gray-900">What to do next</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-700">{data.action}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/rfq"
                className="inline-flex items-center rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                Send your requirements
              </Link>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ALLIANCE CLOSING ============ */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Who You Are Actually Buying From</h2>
          <p className="mt-4 leading-relaxed text-blue-100/85">
            We are a <Em>FOB manufacturer alliance</Em> — independent export factories in Nantong, each with
            its own plant and its own export licence. The bedding member&apos;s 5,000 m&sup2; mill in
            Chuanjiang weaves, dyes, cuts, sews, inspects and packs the bed linen; the other members make the
            towelling, bathrobes, table linen and mattress programmes in the same cluster. Every member has
            to meet these four terms before it can quote under this name:
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
            What that gives a {regionData.shortName} buyer is one contract, one specification sheet per
            programme, one inspection standard and one set of shipping documents — and the member factory
            that makes your order is named on the contract and ships under its own export licence.
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
            {regionData.name} — Frequently Asked Questions
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

      {/* ============ RELATED ============ */}
      <section className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Keep reading — {regionData.name}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <Link
              href={`/markets/${regionData.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-blue-300 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                {regionData.name} overview
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                Duty route, ports, conformity certificates and what to buy first.
              </p>
            </Link>
            {siblings.map((s) => (
              <Link
                key={s.topic}
                href={`/markets/${s.regionSlug}/${s.topic}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-blue-300 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {SUBPAGE_TOPICS[s.topic].name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{SUBPAGE_TOPICS[s.topic].blurb}</p>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
            The same question, in another region
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {otherRegions.map((r) => (
              <Link
                key={r.slug}
                href={`/markets/${r.slug}/${data.topic}`}
                className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 hover:border-blue-300 hover:text-blue-800 transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-gray-500">
            Tariff treatment, transit times and conformity requirements change, and they follow your HS code
            rather than your product name. Confirm every figure on this page with your own customs broker
            before you commit to an order. Last reviewed {MARKETS_LAST_REVIEWED}.
          </p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Sourcing for {regionData.name}? Start With the Dates.
          </h2>
          <p className="mt-3 text-gray-500">
            Tell us the destination port, the categories, the specification and either your target delivery
            date or your intended first-order size. Those four items turn a planning band into a date we can
            commit to.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
