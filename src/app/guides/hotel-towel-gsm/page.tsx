import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel Towel GSM Guide — What Weight to Buy for Every Hotel Tier",
  description:
    "Complete GSM guide for hotel towels. Learn what GSM means, recommended weights for bath towels, hand towels, and washcloths by hotel tier, and how GSM affects absorbency, durability, and cost. Based on real Dieshiqiao sourcing experience.",
  alternates: { canonical: "/guides/hotel-towel-gsm" },
  openGraph: {
    title: "Hotel Towel GSM Guide — What Weight to Buy for Every Hotel Tier",
    description:
      "What GSM should hotel towels be? This guide covers ideal GSM ranges by hotel tier, cotton types, and how to avoid overpaying. From Dieshiqiao sourcing experts.",
  },
};

const gsmByTier = [
  {
    tier: "Economy / Budget",
    bath: "400–500 GSM",
    hand: "350–400 GSM",
    wash: "300–350 GSM",
    material: "Poly-cotton blend or basic cotton",
    use: "Hostels, motels, budget hotels",
  },
  {
    tier: "Mid-Scale / 3–4 Star",
    bath: "550–650 GSM",
    hand: "400–500 GSM",
    wash: "350–400 GSM",
    material: "100% cotton (ring-spun)",
    use: "Business hotels, resorts",
  },
  {
    tier: "Upper Upscale / 5 Star",
    bath: "650–750 GSM",
    hand: "500–550 GSM",
    wash: "400–450 GSM",
    material: "Long-staple cotton, Egyptian or Pima",
    use: "Luxury hotels, premium resorts",
  },
  {
    tier: "Ultra-Luxury / Spa",
    bath: "750–900 GSM",
    hand: "550–650 GSM",
    wash: "450–500 GSM",
    material: "Egyptian cotton, zero-twist or hydro-cotton",
    use: "Flagship luxury, spa resorts",
  },
];

const cottonTypes = [
  {
    type: "Regular cotton",
    gsm: "400–550",
    absorbency: "Good",
    durability: "Good (100–150 washes)",
    feel: "Standard terry loop",
    bestFor: "Budget and mid-scale hotels",
  },
  {
    type: "Ring-spun cotton",
    gsm: "500–650",
    absorbency: "Very good",
    durability: "Very good (150–200 washes)",
    feel: "Softer, more uniform loops",
    bestFor: "Mid-scale to upscale hotels",
  },
  {
    type: "Combed cotton",
    gsm: "550–700",
    absorbency: "Excellent",
    durability: "Excellent (200+ washes)",
    feel: "Silky smooth, dense pile",
    bestFor: "Upscale and luxury hotels",
  },
  {
    type: "Egyptian cotton",
    gsm: "650–900",
    absorbency: "Superior",
    durability: "Superior (250+ washes)",
    feel: "Plush, heavy, luxurious",
    bestFor: "Luxury and ultra-luxury properties",
  },
  {
    type: "Zero-twist / Hydro-cotton",
    gsm: "600–800",
    absorbency: "Exceptional (dries fast)",
    durability: "Good (150–180 washes)",
    feel: "Extremely soft, lightweight feel",
    bestFor: "Spa resorts, premium bathrooms",
  },
];

export default function HotelTowelGSMGuide() {
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
            <span className="text-gray-600">Hotel Towel GSM Guide</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">Fabric Encyclopedia</span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Hotel Towel GSM Guide — What Weight to Specify for Your Property
          </h1>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            GSM (grams per square meter) is the single most important spec when buying hotel towels.
            This guide covers ideal GSM ranges by hotel tier, cotton types, and how GSM affects absorbency,
            durability, and your bottom line — from daily sourcing in Dieshiqiao.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
            <span>Updated June 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>10 min read</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Based in Dieshiqiao, China</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <h2>What Does GSM Mean for Towels?</h2>
          <p>
            GSM stands for <strong>grams per square meter</strong> — it measures the weight of the fabric used to make the towel.
            A higher GSM means more cotton per square meter, which generally translates to greater absorbency, a plusher feel,
            and longer durability. But it also means a heavier towel that takes longer to dry and costs more.
          </p>
          <p>
            For hotel procurement, getting the GSM right is critical because it affects three things simultaneously:
            guest satisfaction (feel and absorbency), operational cost (laundering energy and replacement frequency),
            and purchase price. The &quot;best&quot; GSM is the one that balances all three for your specific property.
          </p>

          <h2>Recommended GSM by Hotel Tier</h2>
          <p>
            Below are the GSM ranges that Dieshiqiao factory partners recommend based on decades of supplying
            hotels globally. These ranges balance guest experience with commercial laundry durability.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Hotel Tier</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Bath Towel</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Hand Towel</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Washcloth</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Material</th>
                </tr>
              </thead>
              <tbody>
                {gsmByTier.map((row) => (
                  <tr key={row.tier} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.tier}</td>
                    <td className="px-4 py-3 text-blue-800 font-semibold">{row.bath}</td>
                    <td className="px-4 py-3 text-gray-600">{row.hand}</td>
                    <td className="px-4 py-3 text-gray-600">{row.wash}</td>
                    <td className="px-4 py-3 text-gray-600">{row.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Cotton Types and How They Affect GSM Performance</h2>
          <p>
            The same GSM performs differently depending on the cotton quality. A 600 GSM towel made from
            ring-spun cotton will feel softer and last longer than a 600 GSM towel made from carded cotton.
            Here is how common cotton types compare.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Cotton Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Typical GSM</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Absorbency</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Durability</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {cottonTypes.map((row) => (
                  <tr key={row.type} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                    <td className="px-4 py-3 text-blue-800 font-semibold">{row.gsm}</td>
                    <td className="px-4 py-3 text-gray-600">{row.absorbency}</td>
                    <td className="px-4 py-3 text-gray-600">{row.durability}</td>
                    <td className="px-4 py-3 text-gray-600">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>High GSM vs Low GSM — Trade-offs That Matter</h2>
          <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">High GSM (650+)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">+</span> More absorbent
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">+</span> Plusher, more luxurious feel
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">+</span> Longer lifespan in commercial laundry
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">-</span> Higher purchase price
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">-</span> Longer drying time (more energy cost)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">-</span> Heavier for housekeeping staff
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">Low GSM (400–550)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">+</span> Lower purchase price
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">+</span> Faster drying (lower energy cost)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">+</span> Lighter and easier to handle
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">-</span> Less absorbent per square inch
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">-</span> Thinner feel, perceived as lower quality
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">-</span> Shorter lifespan, more frequent replacement
                </li>
              </ul>
            </div>
          </div>

          <h2>How to Verify GSM — QC Tips for Hotel Buyers</h2>
          <ol>
            <li>
              <strong>Weigh and calculate.</strong> Weigh the towel on a precision scale, measure its dimensions,
              and calculate: GSM = (weight in grams) / (length in meters x width in meters). A 700x1400mm bath towel
              weighing 650g should be approximately 650 / (0.7 x 1.4) = 663 GSM.
            </li>
            <li>
              <strong>Check the test report.</strong> Reputable factories provide third-party test reports (SGS, Intertek)
              with GSM measured under ISO 3801.
            </li>
            <li>
              <strong>Watch for shrinkage padding.</strong> Some suppliers add extra weight to compensate for expected
              shrinkage after washing. This means your &quot;650 GSM&quot; towel may become &quot;580 GSM&quot; after the first
              commercial wash. Specify &quot;GSM after 5 washes&quot; in your purchase order.
            </li>
            <li>
              <strong>Compare同类产品 across factories.</strong> In Dieshiqiao, we weigh the same-spec towel from 3–5
              factories before recommending one. GSM variance of 5–8% is common even within the same claimed spec.
            </li>
          </ol>

          <h2>Towel GSM Pricing — Dieshiqiao Market Data (June 2026)</h2>
          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Spec</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Material</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Size</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">FOB Price/pc (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">450 GSM</td>
                  <td className="px-4 py-3 text-gray-600">Poly-cotton blend</td>
                  <td className="px-4 py-3 text-gray-600">70x140cm</td>
                  <td className="px-4 py-3 text-blue-800 font-semibold">$2.00 – $3.00</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">550 GSM</td>
                  <td className="px-4 py-3 text-gray-600">100% Ring-spun cotton</td>
                  <td className="px-4 py-3 text-gray-600">70x140cm</td>
                  <td className="px-4 py-3 text-blue-800 font-semibold">$3.50 – $5.00</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">650 GSM</td>
                  <td className="px-4 py-3 text-gray-600">Combed cotton</td>
                  <td className="px-4 py-3 text-gray-600">70x140cm</td>
                  <td className="px-4 py-3 text-blue-800 font-semibold">$5.00 – $7.50</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">750 GSM</td>
                  <td className="px-4 py-3 text-gray-600">Egyptian cotton</td>
                  <td className="px-4 py-3 text-gray-600">75x150cm</td>
                  <td className="px-4 py-3 text-blue-800 font-semibold">$8.00 – $12.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 italic">
            Prices are indicative FOB Nantong as of June 2026. Actual pricing depends on order volume, customization,
            and cotton market conditions.
          </p>

          <h2>Summary — What to Specify When Ordering Hotel Towels</h2>
          <p>When placing a towel order, include these specs to avoid quality disputes:</p>
          <ul>
            <li>GSM range (e.g., 600 GSM minimum, measured after 5 washes)</li>
            <li>Cotton type (e.g., 100% ring-spun cotton, long-staple)</li>
            <li>Pile construction (e.g., terry loop, or terry on one side / velour on the other)</li>
            <li>Dimensions with tolerance (e.g., 70x140cm, +/-2%)</li>
            <li>Maximum shrinkage after washing (typically 5–8% for hotel-grade)</li>
            <li>Colorfastness requirement (e.g., AATCC Grade 3–4 minimum after 20 washes)</li>
            <li>Bordered or borderless, dobby band style</li>
          </ul>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Not Sure What GSM to Order?
          </h2>
          <p className="mt-3 text-blue-200/80">
            Tell us your hotel tier and guest profile. We will recommend the right GSM, cotton type, and size —
            with samples shipped from Dieshiqiao within 5 business days.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/blog/fabric-encyclopedia"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              More Fabric Guides
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
                name: "What GSM is best for hotel bath towels?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For most hotels, 550–650 GSM in 100% cotton is the ideal range. Budget hotels can use 400–500 GSM poly-cotton blends, while luxury properties typically specify 650–750 GSM Egyptian cotton.",
                },
              },
              {
                "@type": "Question",
                name: "Is higher GSM always better for hotel towels?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not necessarily. Higher GSM means more absorbency and a plusher feel, but also higher purchase price, longer drying time, and more energy cost per laundry cycle. The best GSM depends on your hotel tier, laundry infrastructure, and guest expectations.",
                },
              },
              {
                "@type": "Question",
                name: "How do I verify towel GSM from a Chinese supplier?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weigh the towel on a precision scale and calculate: GSM = weight (grams) / (length x width in meters). Request a third-party test report (SGS or Intertek) using ISO 3801 standard. Specify GSM measured after 5 washes in your purchase order to account for shrinkage.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between zero-twist and regular cotton towels?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zero-twist (hydro-cotton) towels use specially engineered yarn that is not twisted, making them extremely soft and fast-drying. They feel lighter than traditional terry at the same GSM. However, they have slightly lower durability (150–180 washes vs 200+ for combed cotton) and are best suited for spa and luxury properties.",
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
            headline: "Hotel Towel GSM Guide — What Weight to Specify for Your Property",
            description: "Complete GSM guide for hotel towels. Learn recommended weights by hotel tier, cotton types, and how GSM affects absorbency, durability, and cost.",
            author: { "@type": "Organization", name: "Nantong Linens" },
            publisher: {
              "@type": "Organization",
              name: "Nantong Linens",
              logo: { "@type": "ImageObject", url: "https://www.nantonglinens.com/logo.png" },
            },
            datePublished: "2026-06-05",
            dateModified: "2026-06-05",
            url: "https://www.nantonglinens.com/guides/hotel-towel-gsm",
          }),
        }}
      />
    </>
  );
}
