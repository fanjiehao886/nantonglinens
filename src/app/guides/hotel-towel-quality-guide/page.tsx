import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel Towel Quality Guide — How to Source Premium Towels from China",
  description:
    "Complete hotel towel sourcing guide: cotton grades, pile construction, border styles, absorbency testing, and commercial laundry durability. Real factory specs from Dieshiqiao.",
  alternates: { canonical: "/guides/hotel-towel-quality-guide" },
  openGraph: {
    title: "Hotel Towel Quality Guide — How to Source Premium Towels from China",
    description:
      "Beyond GSM: what makes a high-quality hotel towel. Cotton grades, pile construction, absorbency tests, border styles, and what to specify in your purchase order. From Dieshiqiao sourcing experts.",
  },
};

const cottonGrades = [
  {
    grade: "Standard Carded Cotton",
    stapleLength: "22–25mm",
    feel: "Moderately soft",
    absorbency: "Good",
    durability: "Good (100–150 washes)",
    bestFor: "Budget and economy hotels",
  },
  {
    grade: "Ring-Spun Cotton",
    stapleLength: "25–28mm",
    feel: "Soft, smooth",
    absorbency: "Very good",
    durability: "Very good (150–200 washes)",
    bestFor: "Mid-scale hotels",
  },
  {
    grade: "Combed Cotton",
    stapleLength: "28–32mm",
    feel: "Silky smooth",
    absorbency: "Excellent",
    durability: "Excellent (200+ washes)",
    bestFor: "Upscale hotels",
  },
  {
    grade: "Long-Staple (Egyptian/Pima)",
    stapleLength: "35mm+",
    feel: "Luxurious, heavy",
    absorbency: "Superior",
    durability: "Superior (250+ washes)",
    bestFor: "Luxury hotels and resorts",
  },
  {
    grade: "Zero-Twist / Hydro-Cotton",
    stapleLength: "28–35mm",
    feel: "Extremely soft, lightweight",
    absorbency: "Exceptional, fast-drying",
    durability: "Good (150–180 washes)",
    bestFor: "Spa and premium bathrooms",
  },
];

const pileTypes = [
  {
    type: "Single Terry Loop",
    construction: "Single loop per pile",
    density: "Medium",
    feel: "Standard hotel towel feel",
    durability: "Good",
    bestFor: "Economy and mid-scale hotels",
  },
  {
    type: "Double Terry Loop",
    construction: "Two loops per pile for density",
    density: "High",
    feel: "Plush, heavier hand-feel",
    durability: "Very good",
    bestFor: "Upscale and luxury hotels",
  },
  {
    type: "Zero-Twist Pile",
    construction: "Untwisted yarn in loop",
    density: "Medium-high",
    feel: "Ultra-soft, cloud-like",
    durability: "Moderate (handle with care)",
    bestFor: "Spa, premium suites",
  },
  {
    type: "Velour Finish (One Side)",
    construction: "Sheared loops on one face",
    density: "High",
    feel: "Smooth velour face, absorbent terry back",
    durability: "Good (sheared side wears faster)",
    bestFor: "Display towels, executive suites",
  },
];

const borderStyles = [
  {
    style: "Dobby Border",
    description: "Woven pattern band, typically 3–5cm from edge. Most common hotel style.",
    advantage: "Classic, professional appearance. No extra material cost.",
  },
  {
    style: "Satin Band",
    description: "Smooth satin strip woven into one or both ends.",
    advantage: "Premium look, upgradable for luxury tiers. Costs 10–15% more.",
  },
  {
    style: "Borderless / Hemmed",
    description: "Clean hemmed edge with no decorative band.",
    advantage: "Modern minimalist look. Cheapest to produce. Good for budget lines.",
  },
  {
    style: "Jacquard Border",
    description: "Custom pattern woven directly into the border.",
    advantage: "Full brand customization. High visual impact. MOQ 1000+ pieces.",
  },
];

const qcCheckpoints = [
  {
    test: "GSM Verification",
    method: "Weigh dry towel, measure dimensions, calculate GSM. Compare to spec.",
    pass: "Within ±5% of specified GSM after 3 washes",
  },
  {
    test: "Absorbency (Drop Test)",
    method: "Place one drop of water on towel surface. Time how long it takes to absorb.",
    pass: "Under 5 seconds for terry; under 3 seconds for zero-twist",
  },
  {
    test: "Colorfastness",
    method: "AATCC 61-2A: wash at 60°C with detergent, compare to gray scale.",
    pass: "Grade 3–4 minimum after 20 washes",
  },
  {
    test: "Dimensional Stability",
    method: "Measure before and after 5 commercial wash-dry cycles.",
    pass: "Maximum 8% shrinkage in warp, 5% in weft",
  },
  {
    test: "Tensile Strength",
    method: "ASTM D5034: grab test on warp and weft directions.",
    pass: "Minimum 35 lbs warp, 30 lbs weft",
  },
  {
    test: "Linting Test",
    method: "Wash towel 3 times, collect lint in dryer filter. Weigh lint.",
    pass: "Under 2g lint per kg of fabric washed",
  },
];

export default function HotelTowelQualityGuide() {
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
            <span className="text-gray-600">Hotel Towel Quality Guide</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">Buying Guide</span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Hotel Towel Quality Guide — How to Source Premium Towels from Dieshiqiao
          </h1>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            GSM is just the starting point. This guide covers cotton grades, pile construction, border styles,
            absorbency testing, and commercial laundry durability — everything that determines whether a
            hotel towel stays soft and white through 200+ wash cycles.
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

          <h2>Cotton Grades — The Foundation of Towel Quality</h2>
          <p>
            The same 600 GSM towel can feel completely different depending on the cotton grade used.
            Long-staple cotton produces smoother, stronger yarns with fewer fiber ends protruding
            — that means softer feel, less linting, and longer lifespan.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Cotton Grade</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Staple Length</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Durability</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {cottonGrades.map((row) => (
                  <tr key={row.grade} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.grade}</td>
                    <td className="px-4 py-3 text-blue-800 font-semibold">{row.stapleLength}</td>
                    <td className="px-4 py-3 text-gray-600">{row.durability}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Pile Construction — Single vs Double vs Zero-Twist</h2>
          <p>
            The surface of a towel — the loops you feel — is called the pile. Pile construction
            directly affects absorbency, softness, and how the towel performs in commercial laundry.
          </p>

          <div className="not-prose my-8 space-y-4">
            {pileTypes.map((item) => (
              <div key={item.type} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{item.type}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.construction}</p>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                  <span><strong>Density:</strong> {item.density}</span>
                  <span><strong>Feel:</strong> {item.feel}</span>
                  <span><strong>Durability:</strong> {item.durability}</span>
                </div>
                <p className="mt-1 text-xs text-gray-400"><strong>Best for:</strong> {item.bestFor}</p>
              </div>
            ))}
          </div>

          <h2>Border Styles — Small Detail, Big Visual Impact</h2>
          <p>
            The border is the most visible decorative element on a folded towel. It serves
            no functional purpose, but it defines the towel&apos;s visual tier and brand identity.
          </p>

          <div className="not-prose my-8 space-y-4">
            {borderStyles.map((item) => (
              <div key={item.style} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{item.style}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                <p className="mt-1 text-sm text-green-700">{item.advantage}</p>
              </div>
            ))}
          </div>

          <h2>Absorbency — What Separates Good Towels from Great Ones</h2>
          <p>
            A towel that doesn&apos;t absorb well is just decoration. Absorbency depends on three factors:
            cotton quality (longer fibers = more absorbent), pile density (more loops = more surface area),
            and finishing (over-softening agents can coat fibers and block absorption).
          </p>
          <p>
            The quickest QC test: drop a single water droplet on the towel surface and count how long it
            takes to disappear. Under 3 seconds is excellent. Under 5 seconds is acceptable for hotel use.
            Over 8 seconds indicates over-softening or poor-quality fiber.
          </p>

          <div className="not-prose my-6 rounded-xl border border-amber-100 bg-amber-50 p-5">
            <p className="text-sm text-amber-900">
              <strong>Warning:</strong> Some manufacturers apply excessive silicone softeners to make
              towels feel plush out of the package. These softeners wash out after 3–5 commercial
              cycles, reducing absorbency. Always test absorbency <em>after</em> 3 washes, not on
              the fresh sample.
            </p>
          </div>

          <h2>Commercial Laundry Longevity</h2>
          <p>
            Hotel towels undergo industrial washing at 60–75°C, with alkaline detergents (pH 10–11),
            oxidizing bleaches, and mechanical agitation. A towel that survives 50 cycles in a home
            washer may fail after 30 in a commercial laundry. Key failure points:
          </p>
          <ul>
            <li><strong>Edge fraying:</strong> The hem and dobby border take the most mechanical stress. Reinforced hems with double needle stitching prevent early failure.</li>
            <li><strong>Chemical degradation:</strong> Chlorine bleach attacks cellulose fibers. Towels specified for &quot;chlorine-retention&quot; laundries need higher cotton quality and tighter twist yarns.</li>
            <li><strong>Weight loss:</strong> Cotton fibers shed during each wash. A 600 GSM towel typically loses 3–5% mass per 50 commercial cycles. Factor this into replacement planning.</li>
            <li><strong>Color shift:</strong> White towels can yellow from iron in water supply or residual chlorine. Optical brighteners help but wash out over time. Best defense: specify high-grade cotton that whitens rather than yellows under bleach.</li>
          </ul>

          <h2>Towel QC Checklist — What to Verify Before Shipment</h2>
          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Test</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Method</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Pass Standard</th>
                </tr>
              </thead>
              <tbody>
                {qcCheckpoints.map((row) => (
                  <tr key={row.test} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.test}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.method}</td>
                    <td className="px-4 py-3 text-green-700 font-medium text-xs">{row.pass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What to Specify in Your Purchase Order</h2>
          <p>When ordering hotel towels, write a spec sheet that covers these points. Ambiguity is expensive.</p>
          <ul>
            <li>Cotton grade (e.g., 100% ring-spun combed cotton, long-staple)</li>
            <li>GSM (e.g., 600 GSM minimum, measured after 5 washes)</li>
            <li>Pile construction (e.g., double terry loop on both sides)</li>
            <li>Border style (e.g., 3cm dobby border in matching color)</li>
            <li>Dimensions with tolerance (e.g., 70x140cm, +/-2%)</li>
            <li>Maximum shrinkage after 5 washes (e.g., 6% warp, 4% weft)</li>
            <li>Colorfastness requirement (e.g., AATCC Grade 4 after 20 washes)</li>
            <li>Absorbency requirement (e.g., drop test under 5 seconds after 3 washes)</li>
            <li>Edge finishing (e.g., double needle hem, reinforced ends)</li>
            <li>Packaging (e.g., individually polybagged, 10 per inner carton)</li>
          </ul>

          <p className="mt-6">
            For GSM-specific guidance by hotel tier, see our{" "}
            <Link href="/guides/hotel-towel-gsm" className="text-blue-800 hover:underline font-medium">
              Hotel Towel GSM Guide
            </Link>.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Need Help Sourcing High-Quality Hotel Towels?
          </h2>
          <p className="mt-3 text-blue-200/80">
            We physically inspect towels at the factory before shipment. Tell us your specs
            and we will match you with the right Dieshiqiao manufacturer — with samples and third-party test reports.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Request Towel Quote
            </Link>
            <Link
              href="/products/bath-towels"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Browse Towel Products
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
                name: "What cotton grade should I choose for hotel towels?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For most hotels, ring-spun combed cotton offers the best balance of softness, durability, and price. Budget hotels can use carded cotton (100–150 wash lifespan), while luxury properties should specify long-staple Egyptian or Pima cotton (250+ washes). Zero-twist cotton provides exceptional softness but slightly lower durability at 150–180 washes.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best pile construction for hotel towels?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Double terry loop construction provides the highest density and best durability for upscale and luxury hotels. Single terry loop is standard for economy and mid-scale properties. Zero-twist pile offers the softest feel but requires gentler handling — best suited for spa and premium suite use.",
                },
              },
              {
                "@type": "Question",
                name: "How do I test towel absorbency during QC inspection?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The drop test is the fastest method: place one water droplet on the towel surface and time absorption. Under 3 seconds is excellent, under 5 seconds is acceptable. Always test after 3 washes, not on fresh samples — silicone softeners applied during manufacturing can temporarily block absorption.",
                },
              },
              {
                "@type": "Question",
                name: "How many commercial wash cycles should hotel towels last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard hotel towels should withstand 150–200 commercial wash cycles. Long-staple cotton towels can exceed 250 cycles. Key factors affecting longevity: cotton grade, pile density, seam reinforcement, and whether the property uses chlorine bleach (which accelerates fiber degradation).",
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
            headline: "Hotel Towel Quality Guide — How to Source Premium Towels from Dieshiqiao",
            description: "Complete hotel towel sourcing guide covering cotton grades, pile construction, border styles, absorbency testing, and commercial laundry durability.",
            author: { "@type": "Organization", name: "Nantong Linens" },
            publisher: {
              "@type": "Organization",
              name: "Nantong Linens",
              logo: { "@type": "ImageObject", url: "https://www.nantonglinens.com/logo.png" },
            },
            datePublished: "2026-06-10",
            dateModified: "2026-06-10",
            url: "https://www.nantonglinens.com/guides/hotel-towel-quality-guide",
          }),
        }}
      />
    </>
  );
}
