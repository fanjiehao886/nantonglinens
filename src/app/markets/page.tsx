import { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";
import { MARKET_REGIONS, MARKETS_LAST_REVIEWED, membershipTerms } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Markets We Supply — Hotel Linen Supplier for Asia, South America, Central Asia & Africa",
  description:
    "Hotel linen supplier by region: duty routes, transit bands and conformity requirements for Southeast Asia, South America, Central Asia and Africa. Factory-direct FOB from Nantong, China.",
  alternates: { canonical: "/markets" },
  openGraph: {
    title: "Hotel Linen Supply by Region — Duty, Transit and Conformity",
    description:
      "What changes when you import hotel linen into Southeast Asia, South America, Central Asia or Africa — certificates of origin, transit bands and conformity routes.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hotel linen supply by region" }],
  },
};

/**
 * One row per region, on the four questions that actually differ between them.
 * A buyer comparing two regions should be able to read this table and know
 * which page to open next.
 */
const comparison = [
  {
    slug: "southeast-asia",
    region: "Southeast Asia",
    duty: "ACFTA Form E — many textile lines at zero",
    transit: "About 5–12 days by sea",
    document: "China-raised Form E certificate of origin",
    watch: "Indonesia verifies certificates retroactively and rejects vague goods descriptions",
  },
  {
    slug: "south-america",
    region: "South America",
    duty: "Chile and Peru have agreements; Brazil and Colombia do not",
    transit: "About 25–45 days by sea",
    document: "Certificate of origin per country; NCM for Brazil",
    watch: "Peru excludes textiles from its agreement; Brazil's taxes compound",
  },
  {
    slug: "central-asia",
    region: "Central Asia",
    duty: "EAEU — EAC conformity under TR CU 017/2011",
    transit: "About 7–14 days by rail",
    document: "EAC declaration or certificate, applied for in the EAU by you",
    watch: "The applicant must be a legal entity established inside the EAEU",
  },
  {
    slug: "africa",
    region: "Africa",
    duty: "Conformity scheme per country",
    transit: "About 20–50 days by sea",
    document: "Kenya PVoC/COC; Nigeria SONCAP certificate; COO",
    watch: "Certificates must be raised in China before the container sails",
  },
];

export default function MarketsPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
            FOB Manufacturer Alliance — Nantong, China
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-tight">
            Hotel Linen Supply, by Region
          </h1>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
            The same hotel bed sheet lands at four different costs depending on where you import it.
            Duty treatment, the certificate that unlocks it, the transit band and the conformity scheme
            all differ — and a supplier who quotes one price for the world is telling you they have not
            looked at your market. Pick your region to see what actually applies to your order.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/wholesale"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Wholesale Terms
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            {company.service.quoteReplyLabel} · Samples in {company.service.sampleDaysLabel} · Every member
            factory open to audit
          </p>
        </div>
      </section>

      {/* ============ REGION CARDS ============ */}
      <section className="bg-gray-50 py-14 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Choose your region</h2>
          <p className="mt-3 text-gray-500 text-center max-w-2xl mx-auto">
            Each page covers the duty route, the ports and transit bands, the conformity certificates you
            have to arrange, and what to buy first in that market.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {MARKET_REGIONS.map((r) => (
              <Link
                key={r.slug}
                href={`/markets/${r.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {r.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                  {r.buyerProfile.split(".")[0]}.
                </p>
                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-gray-100 pt-4">
                  {r.headlineFacts.map((f) => (
                    <div key={f.label}>
                      <dt className="text-[11px] uppercase tracking-wider text-gray-400">{f.label}</dt>
                      <dd className="mt-1 text-xs font-semibold leading-snug text-gray-800">{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-800 group-hover:underline">
                  Read the {r.shortName} guide
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARISON TABLE ============ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Four regions, side by side</h2>
          <p className="mt-3 text-gray-500 max-w-3xl">
            The four questions that change your landed cost — and the one thing that most often goes wrong
            in each market.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left text-sm">
                <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">
                  <tr>
                    <th className="px-5 py-3.5 font-semibold">Region</th>
                    <th className="px-5 py-3.5 font-semibold">Duty route</th>
                    <th className="px-5 py-3.5 font-semibold whitespace-nowrap">Transit band</th>
                    <th className="px-5 py-3.5 font-semibold">Certificate to arrange</th>
                    <th className="px-5 py-3.5 font-semibold">Most common mistake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  {comparison.map((row) => (
                    <tr key={row.slug} className="align-top">
                      <td className="px-5 py-4 font-semibold text-gray-900">
                        <Link href={`/markets/${row.slug}`} className="hover:text-blue-800 hover:underline">
                          {row.region}
                        </Link>
                      </td>
                      <td className="px-5 py-4">{row.duty}</td>
                      <td className="px-5 py-4 whitespace-nowrap">{row.transit}</td>
                      <td className="px-5 py-4">{row.document}</td>
                      <td className="px-5 py-4">{row.watch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Guidance only — tariff and conformity treatment follows your HS code and changes over time.
            Confirm each line with your own customs broker before you commit to an order. Last reviewed{" "}
            {MARKETS_LAST_REVIEWED}.
          </p>
        </div>
      </section>

      {/* ============ WHAT DOES NOT CHANGE ============ */}
      <section className="bg-gray-50 py-14 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            What never changes, whichever region you buy from
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            The paperwork and the transit language change by market. The manufacturing arrangement does
            not. Every factory that quotes under this name has to meet four terms first:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {membershipTerms().map((t) => (
              <li
                key={t}
                className="flex gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-700"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-blue-800"
                >
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            The result is one contract, one specification sheet per programme, one inspection standard and
            one set of shipping documents — with the member factory that makes your order named on the
            contract and shipping under its own export licence. That matters most on the long lanes, where
            a document set that traces back to the plant is worth more than a promise.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/factory"
              className="inline-flex items-center rounded-full bg-blue-900 px-7 py-3 text-sm font-medium text-white hover:bg-blue-800 transition-colors"
            >
              Inside Our Factories
            </Link>
            <Link
              href="/guides/download"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Free Buying Guide PDF
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-blue-950 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">Tell Us the Destination, Not Just the Product</h2>
          <p className="mt-4 text-lg text-blue-200/80">
            The country, the port and the certificate your customs requires change how we cost and pack an
            order. Include them in your enquiry and the reply comes back usable on the first pass.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Get a Factory-Direct Quote
            </Link>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": `${company.url}/markets#webpage`,
                url: `${company.url}/markets`,
                name: "Hotel Linen Supply, by Region",
                description:
                  "Duty routes, transit bands and conformity requirements for importing hotel linen into Southeast Asia, South America, Central Asia and Africa.",
                inLanguage: "en",
                isPartOf: { "@id": `${company.url}/#website` },
                publisher: { "@id": `${company.url}/#organization` },
                hasPart: MARKET_REGIONS.map((r) => ({
                  "@type": "WebPage",
                  name: r.h1,
                  url: `${company.url}/markets/${r.slug}`,
                })),
              },
              {
                "@type": "ItemList",
                name: "Regions supplied",
                itemListElement: MARKET_REGIONS.map((r, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: r.name,
                  url: `${company.url}/markets/${r.slug}`,
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}
