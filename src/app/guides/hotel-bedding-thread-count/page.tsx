import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel Bedding Thread Count Guide — What TC Means for Your Property",
  description:
    "Complete guide to hotel bedding thread count. Learn what TC numbers really mean, how thread count affects durability and feel, recommended TC by hotel tier, and why higher TC is not always better. Based on real Dieshiqiao sourcing experience.",
  alternates: { canonical: "/guides/hotel-bedding-thread-count" },
  openGraph: {
    title: "Hotel Bedding Thread Count Guide — What TC Means for Your Property",
    description:
      "What thread count should you choose for hotel bedding? This guide covers TC ranges by hotel tier, percale vs sateen, and common supplier tricks. From Dieshiqiao sourcing experts.",
  },
};

const tcByTier = [
  {
    tier: "Budget / Economy",
    range: "200–300 TC",
    weave: "Percale",
    material: "Poly-cotton blend (50/50 or 65/35)",
    durability: "150+ wash cycles",
    use: "Motels, hostels, budget hotels",
  },
  {
    tier: "Mid-Scale / 3–4 Star",
    range: "300–400 TC",
    weave: "Percale or Sateen",
    material: "100% cotton or 80/20 poly-cotton",
    durability: "200+ wash cycles",
    use: "Business hotels, resort properties",
  },
  {
    tier: "Upper Upscale / 5 Star",
    range: "400–600 TC",
    weave: "Sateen (combed cotton)",
    material: "Long-staple cotton (Pima or Egyptian)",
    durability: "250+ wash cycles",
    use: "Luxury hotels, premium resorts",
  },
  {
    tier: "Ultra-Luxury",
    range: "600–1000 TC",
    weave: "Sateen (extra-long staple)",
    material: "Egyptian cotton, Supima",
    durability: "300+ wash cycles",
    use: "Flagship luxury, presidential suites",
  },
];

const commonTricks = [
  {
    trick: "Double-counting plies",
    explanation:
      "A 2-ply yarn woven at 250 threads per inch is honestly 250 TC. Some suppliers count each ply separately and label it 500 TC. Always ask if the TC is single-ply or double-ply counted.",
  },
  {
    trick: "Inflating with multi-strand yarns",
    explanation:
      "Using thinner, weaker yarns twisted together inflates the count but reduces durability. The sheet feels heavy but pills quickly in commercial laundry.",
  },
  {
    trick: "Confusing metric vs imperial counts",
    explanation:
      "Some Chinese mills report thread count per 10cm² instead of per inch². A metric 1000 TC may be closer to 400 TC in imperial measurement.",
  },
  {
    trick: "Ignoring yarn quality",
    explanation:
      "A 300 TC sheet made from long-staple combed cotton will outperform a 600 TC sheet made from short-staple carded cotton. Thread count without yarn quality is meaningless.",
  },
];

export default function HotelBeddingThreadCountGuide() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-800">Guides</Link>
            <span>/</span>
            <span className="text-gray-600">Hotel Bedding Thread Count</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">Fabric Encyclopedia</span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Hotel Bedding Thread Count — The Complete Procurement Guide
          </h1>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Thread count is the most misunderstood number in hotel linen procurement. This guide explains what TC really means,
            what ranges to specify by hotel tier, and how to spot inflated counts — based on daily sourcing experience in Dieshiqiao.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
            <span>Updated June 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Based in Dieshiqiao, China</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <h2>What Is Thread Count?</h2>
          <p>
            Thread count (TC) measures the number of horizontal (weft) and vertical (warp) threads woven into one square inch of fabric.
            A 300 TC sheet has roughly 150 warp threads and 150 weft threads per square inch. It is a useful indicator of fabric density,
            but it does not by itself determine quality, softness, or durability.
          </p>
          <p>
            In hotel linen procurement, thread count matters because it directly affects how the sheet performs under
            commercial laundering conditions (industrial washers, high-temperature drying, bleach). The wrong TC for your
            hotel tier means either overspending on linens or replacing them too frequently.
          </p>

          <h2>Recommended Thread Count by Hotel Tier</h2>
          <p>
            There is no universal standard, but the following ranges reflect what Dieshiqiao factory partners recommend
            based on years of supplying hotels across North America, Europe, and the Middle East.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Hotel Tier</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">TC Range</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Weave</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Material</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Durability</th>
                </tr>
              </thead>
              <tbody>
                {tcByTier.map((row) => (
                  <tr key={row.tier} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.tier}</td>
                    <td className="px-4 py-3 text-blue-800 font-semibold">{row.range}</td>
                    <td className="px-4 py-3 text-gray-600">{row.weave}</td>
                    <td className="px-4 py-3 text-gray-600">{row.material}</td>
                    <td className="px-4 py-3 text-gray-600">{row.durability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Percale vs Sateen — Why Weave Matters More Than TC</h2>
          <p>
            At the same thread count, percale and sateen feel completely different. <strong>Percale</strong> uses a plain weave
            (one-over-one-under) that produces a crisp, matte finish ideal for warm-climate hotels. <strong>Sateen</strong> uses a
            satin weave (three-over-one-under) that creates a silky, lustrous surface preferred by luxury properties.
          </p>
          <p>
            For commercial hospitality use, percale generally outlasts sateen because the plain weave is more resistant to
            abrasion. If your hotel prioritizes durability over hand-feel, choose percale even at a lower TC. If guest
            perception of luxury matters more, sateen at 400+ TC delivers the premium feel without sacrificing too much longevity.
          </p>

          <h2>Common Supplier Tricks With Thread Count</h2>
          <p>
            When sourcing from Chinese textile markets, you will encounter inflated TC claims. Here are the four most common tricks
            and how to protect yourself.
          </p>

          <div className="not-prose my-8 space-y-4">
            {commonTricks.map((item) => (
              <div key={item.trick} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 text-sm">{item.trick}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>

          <h2>How to Verify Thread Count Before Ordering</h2>
          <ol>
            <li>
              <strong>Request a fabric sample first.</strong> Physical samples let you feel the weight and drape. A genuine 400 TC
              sateen has a noticeable heft and smoothness that a padded 300 TC cannot replicate.
            </li>
            <li>
              <strong>Ask for the test report.</strong> Reputable Dieshiqiao factories provide third-party test reports (SGS, Intertek)
              that include actual thread count measured under ISO 7211-2.
            </li>
            <li>
              <strong>Specify single-ply yarn in your purchase order.</strong> This prevents the supplier from using multi-ply yarns
              to inflate the count. Write it explicitly: &quot;Single-ply yarn only. TC measured as single-end count per inch.&quot;
            </li>
            <li>
              <strong>Use a thread count magnifier.</strong> A pick glass (40x magnification) costs about $10 and lets you count
              threads yourself. This is standard QC practice in Dieshiqiao.
            </li>
          </ol>

          <h2>Thread Count and Pricing — Real Market Data from Dieshiqiao</h2>
          <p>
            Based on current Dieshiqiao wholesale prices (June 2026), here are indicative price ranges for hotel bed sheets
            (queen size, white, flat sheet) by thread count:
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Spec</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Material</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">FOB Price/pc (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">200 TC Percale</td>
                  <td className="px-4 py-3 text-gray-600">65/35 Poly-cotton</td>
                  <td className="px-4 py-3 text-blue-800 font-semibold">$3.50 – $5.00</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">300 TC Percale</td>
                  <td className="px-4 py-3 text-gray-600">100% Cotton</td>
                  <td className="px-4 py-3 text-blue-800 font-semibold">$5.50 – $8.00</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">400 TC Sateen</td>
                  <td className="px-4 py-3 text-gray-600">Combed Cotton</td>
                  <td className="px-4 py-3 text-blue-800 font-semibold">$8.00 – $12.00</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">600 TC Sateen</td>
                  <td className="px-4 py-3 text-gray-600">Long-staple Cotton</td>
                  <td className="px-4 py-3 text-blue-800 font-semibold">$12.00 – $18.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-400 italic">
            Prices are indicative FOB Nantong prices as of June 2025. Actual pricing depends on order volume, customization,
            and cotton market conditions at time of order.
          </p>

          <h2>Summary — What to Specify in Your Purchase Order</h2>
          <p>When placing a hotel bedding order, do not just write &quot;300 TC sheets.&quot; Instead, specify:</p>
          <ul>
            <li>Thread count range (e.g., 300 TC minimum, single-ply count)</li>
            <li>Yarn quality (e.g., combed cotton, long-staple)</li>
            <li>Weave type (percale or sateen)</li>
            <li>Fiber composition (e.g., 100% cotton, 80/20 poly-cotton)</li>
            <li>Required test standard (e.g., ISO 7211-2, AATCC)</li>
            <li>Maximum shrinkage after washing (typically 3–5% for hotel-grade)</li>
          </ul>
          <p>
            Being specific protects you from &quot;creative interpretation&quot; by suppliers and ensures you get exactly the
            product your property needs.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Need Help Choosing the Right Thread Count?
          </h2>
          <p className="mt-3 text-blue-200/80">
            We source hotel bedding daily from Dieshiqiao factories. Tell us your hotel tier and we will recommend
            the right TC, weave, and material — with sample availability and transparent pricing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/products/bed-sheets"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Browse Bed Sheets
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What thread count is best for hotel bedding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For most hotels, 300–400 TC in 100% cotton is the sweet spot. Budget properties can use 200 TC poly-cotton blends, while luxury hotels typically specify 400–600 TC long-staple cotton sateen.",
                },
              },
              {
                "@type": "Question",
                name: "Is higher thread count always better for hotel sheets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Thread count without yarn quality is meaningless. A 300 TC sheet made from long-staple combed cotton will outperform and outlast a 600 TC sheet made from short-staple carded cotton. Also, very high TC (800+) sheets are often denser but less breathable, which can be uncomfortable in warm climates.",
                },
              },
              {
                "@type": "Question",
                name: "How do I verify thread count from a Chinese supplier?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Request a third-party test report (SGS or Intertek) using ISO 7211-2 standard. Specify single-ply yarn in your purchase order. Use a pick glass (40x magnifier) to count threads yourself on the sample.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between percale and sateen hotel sheets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Percale uses a plain weave (one-over-one-under) for a crisp, matte finish and better durability. Sateen uses a satin weave (three-over-one-under) for a silky, lustrous feel preferred by luxury hotels. Percale generally outlasts sateen in commercial laundry.",
                },
              },
            ],
          }),
        }}
      />
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hotel Bedding Thread Count — The Complete Procurement Guide",
            description: "Complete guide to hotel bedding thread count. Learn what TC numbers really mean, recommended TC by hotel tier, percale vs sateen, and how to spot inflated counts.",
            author: { "@type": "Organization", name: "Nantong Linens" },
            publisher: {
              "@type": "Organization",
              name: "Nantong Linens",
              logo: { "@type": "ImageObject", url: "https://www.nantonglinens.com/logo.png" },
            },
            datePublished: "2026-06-05",
            dateModified: "2026-06-05",
            url: "https://www.nantonglinens.com/guides/hotel-bedding-thread-count",
          }),
        }}
      />
    </>
  );
}
