import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel Bathrobe Buying Guide — Waffle, Terry & Velour Robe Sourcing",
  description:
    "Complete bathrobe sourcing guide for hotel buyers. Waffle vs terry vs velour robes, GSM ranges, kimono vs shawl collar, logo embroidery options, and pricing from Dieshiqiao manufacturers.",
  alternates: { canonical: "/guides/hotel-bathrobe-buying-guide" },
  openGraph: {
    title: "Hotel Bathrobe Buying Guide — Waffle, Terry & Velour Robe Sourcing",
    description:
      "How to choose the right hotel bathrobe: fabric types, GSM, collar styles, and embroidery options. All based on real Dieshiqiao factory pricing and specifications.",
  },
};

const fabricComparison = [
  {
    fabric: "Waffle-Weave Cotton",
    gsm: "350–450",
    absorbency: "Good",
    dryTime: "Fast",
    durability: "Good (150+ washes)",
    feel: "Textured, crisp",
    bestFor: "Standard rooms, mid-scale hotels",
  },
  {
    fabric: "Terry Velour",
    gsm: "400–550",
    absorbency: "Very good",
    dryTime: "Medium",
    durability: "Very good (200+ washes)",
    feel: "Plush, soft, hotel-luxury",
    bestFor: "Upscale hotels, suites",
  },
  {
    fabric: "Combination (Terry inside, Velour outside)",
    gsm: "450–550",
    absorbency: "Excellent",
    dryTime: "Medium",
    durability: "Excellent (200+ washes)",
    feel: "Luxurious soft exterior, absorbent interior",
    bestFor: "Luxury hotels, spa resorts",
  },
  {
    fabric: "Microfiber",
    gsm: "300–400",
    absorbency: "Moderate",
    dryTime: "Very fast",
    durability: "Good (150+ washes)",
    feel: "Ultra-light, smooth",
    bestFor: "Gym/spa facilities, budget hotels",
  },
  {
    fabric: "Bamboo Fiber Blend",
    gsm: "350–450",
    absorbency: "Good",
    dryTime: "Fast",
    durability: "Moderate (120+ washes)",
    feel: "Silky, cool-touch",
    bestFor: "Eco-conscious properties, spa",
  },
];

const styleComparison = [
  {
    style: "Kimono",
    collar: "Flat, open front",
    closure: "Self-tie belt, belt loops",
    pockets: "No pockets (traditional)",
    look: "Clean, minimalist, spa-inspired",
    bestFor: "Spa resorts, boutique hotels",
  },
  {
    style: "Shawl Collar",
    collar: "Wraparound shawl lapel",
    closure: "Self-tie belt, double belt loops",
    pockets: "Two front patch pockets",
    look: "Classic hotel luxury",
    bestFor: "Luxury hotels, suites, VIP rooms",
  },
  {
    style: "Hooded Spa Wrap",
    collar: "Attached hood",
    closure: "Self-tie belt or zipper front",
    pockets: "Optional patch pockets",
    look: "Casual, functional, resort-style",
    bestFor: "Resort pools, spa wet areas",
  },
];

const pricingData = [
  {
    spec: "Waffle-Weave 400 GSM",
    material: "100% Cotton",
    size: "One-size (fits S–XL)",
    fob: "$12.00 – $18.00",
  },
  {
    spec: "Terry Velour 450 GSM",
    material: "100% Cotton",
    size: "L/XL",
    fob: "$16.00 – $24.00",
  },
  {
    spec: "Terry/Velour Combo 500 GSM",
    material: "Combed Cotton",
    size: "L/XL",
    fob: "$22.00 – $32.00",
  },
  {
    spec: "Bamboo Blend 400 GSM",
    material: "Bamboo-Cotton 70/30",
    size: "One-size",
    fob: "$18.00 – $26.00",
  },
  {
    spec: "Microfiber 350 GSM",
    material: "Polyester Microfiber",
    size: "One-size",
    fob: "$8.00 – $12.00",
  },
];

export default function HotelBathrobeGuide() {
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
            <span className="text-gray-600">Hotel Bathrobe Buying Guide</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">Buying Guide</span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Hotel Bathrobe Buying Guide — How to Choose the Right Robe for Your Property
          </h1>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            A bathrobe is the most personal hotel textile a guest wears. This guide covers fabric types,
            GSM ranges, collar styles, sizing, logo embroidery, and real pricing from Dieshiqiao robe
            manufacturers — everything you need to specify before ordering.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
            <span>Updated June 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>8 min read</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Based in Dieshiqiao, China</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <h2>Why the Bathrobe Matters</h2>
          <p>
            A hotel bathrobe is not just an amenity — it is a brand statement. Studies show that guests who use
            in-room robes rate their overall stay <strong>12–18% higher</strong> than those who do not. Robes also drive
            ancillary revenue: many properties sell branded robes as retail items, turning a cost center into a profit center.
          </p>
          <p>
            For procurement managers, the key distinction is between <strong>wash durability</strong> and
            <strong> guest-facing appearance</strong>. A robe that looks premium on day one but pills after 30 commercial
            wash cycles is a liability. The right specification balances both.
          </p>

          <h2>Fabric Types — What Each One Means for Your Property</h2>
          <p>
            The fabric determines almost everything about the robe: absorbency, drying time, weight,
            durability, and guest perception. Here is how the main types compare.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Fabric</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">GSM Range</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Absorbency</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Durability</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {fabricComparison.map((row) => (
                  <tr key={row.fabric} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.fabric}</td>
                    <td className="px-4 py-3 text-blue-800 font-semibold">{row.gsm}</td>
                    <td className="px-4 py-3 text-gray-600">{row.absorbency}</td>
                    <td className="px-4 py-3 text-gray-600">{row.durability}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="not-prose my-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm text-blue-900">
              <strong>Pro Tip:</strong> Combination robes — terry inside for absorbency, velour outside
              for luxury appearance — are the most popular choice for 4- and 5-star hotels. They cost about
              20% more than single-fabric robes but deliver the best guest experience.
            </p>
          </div>

          <h2>Kimono vs Shawl Collar — Style Decisions</h2>
          <p>
            The collar style defines the robe&apos;s visual identity. Two main styles dominate hotel procurement,
            with a third gaining popularity in resort settings.
          </p>

          <div className="not-prose my-8 space-y-4">
            {styleComparison.map((item) => (
              <div key={item.style} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 text-base">{item.style}</h3>
                <div className="mt-2 grid gap-1 sm:grid-cols-2 text-sm text-gray-600">
                  <p><strong>Collar:</strong> {item.collar}</p>
                  <p><strong>Closure:</strong> {item.closure}</p>
                  <p><strong>Pockets:</strong> {item.pockets}</p>
                  <p><strong>Best For:</strong> {item.bestFor}</p>
                </div>
                <p className="mt-2 text-sm text-gray-500">Look: {item.look}</p>
              </div>
            ))}
          </div>

          <h2>Sizing — One Size Does Not Fit All</h2>
          <p>
            Most hotel bathrobes are offered in &quot;one-size&quot; or S/M and L/XL sizing. For a better
            guest experience, consider:
          </p>
          <ul>
            <li><strong>One-size (fits S–XL):</strong> Most common for budget to mid-scale properties. Simple inventory management.</li>
            <li><strong>Two sizes (S/M + L/XL):</strong> Recommended for upscale and luxury properties. Guests notice proper fit.</li>
            <li><strong>Custom grading:</strong> Available for orders of 500+ pieces per size. Factory-specific size charts apply.</li>
          </ul>
          <p>
            When specifying sizes, use garment measurements — not body measurements. A standard L/XL robe
            typically has a chest width of 70–75cm, shoulder width of 60–65cm, and a length of 120–125cm.
            Request sizing samples before bulk production.
          </p>

          <h2>Logo Embroidery — Branding Your Robes</h2>
          <p>
            Custom embroidery is the most popular add-on for hotel robes. Key considerations:
          </p>
          <ul>
            <li><strong>Placement:</strong> Left chest (most common), right chest, sleeve, or back collar. Left chest is the standard for hotels.</li>
            <li><strong>Size:</strong> Typically 4–8cm wide. Smaller = more elegant. Large logos work for resort/casual settings.</li>
            <li><strong>Thread:</strong> Match your brand color. Dieshiqiao embroiderers carry 200+ thread colors.</li>
            <li><strong>MOQ:</strong> 300+ pieces for embroidery setup. Below 300, woven labels are a more cost-effective option.</li>
            <li><strong>Cost:</strong> $1.50–$3.00 per robe depending on stitch count and complexity.</li>
          </ul>

          <h2>Commercial Laundry Durability</h2>
          <p>
            Hotel bathrobes must withstand industrial washing at 60–71°C with alkaline detergents
            and chlorine-based stain removers. When specifying robes, include these durability requirements:
          </p>
          <ol>
            <li><strong>Colorfastness:</strong> Minimum Grade 3–4 after 30 washes (AATCC 61-2A). White robes should maintain whiteness without yellowing.</li>
            <li><strong>Shrinkage:</strong> Maximum 5% after 5 commercial washes. Dieshiqiao factories can pre-shrink fabric before cutting.</li>
            <li><strong>Belt attachment:</strong> Specify &quot;secured belt loops with bar-tack reinforcement.&quot; Loose or lost belts are the #1 robe complaint.</li>
            <li><strong>Seam strength:</strong> Double-stitched seams with a minimum of 10 stitches per inch. Test shoulder and armhole seams — these fail first.</li>
            <li><strong>Lint/pilling:</strong> Specify anti-pilling finish for terry and velour robes. Fabric should pass Martindale abrasion test (10,000+ cycles).</li>
          </ol>

          <h2>Bathrobe Pricing — Dieshiqiao Market Data (June 2026)</h2>
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
                {pricingData.map((row) => (
                  <tr key={row.spec} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.spec}</td>
                    <td className="px-4 py-3 text-gray-600">{row.material}</td>
                    <td className="px-4 py-3 text-gray-600">{row.size}</td>
                    <td className="px-4 py-3 text-blue-800 font-semibold">{row.fob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 italic">
            Prices are indicative FOB Nantong as of June 2026. Embroidery adds $1.50–$3.00 per robe.
            Custom colors and sizes affect pricing.
          </p>

          <h2>What to Specify in Your Purchase Order</h2>
          <p>When ordering hotel bathrobes, include these specifications to avoid quality disputes:</p>
          <ul>
            <li>Fabric type and composition (e.g., 100% cotton terry velour, 450 GSM)</li>
            <li>Collar style (shawl or kimono)</li>
            <li>Size(s) with garment measurements</li>
            <li>Embroidery requirements: logo size, placement, thread color (with Pantone reference)</li>
            <li>Belt and pocket configuration (double belt loops recommended)</li>
            <li>Hanging loop requirement</li>
            <li>Maximum shrinkage after 5 washes (typically 5%)</li>
            <li>Anti-pilling finish requirement</li>
            <li>Packaging: individual polybag with hotel branding insert (optional)</li>
          </ul>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Ready to Source Custom Hotel Bathrobes?
          </h2>
          <p className="mt-3 text-blue-200/80">
            Tell us your hotel tier, preferred fabric, and style. We will source samples
            from Dieshiqiao robe factories — with logo embroidery samples available within 7 business days.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Request Bathrobe Quote
            </Link>
            <Link
              href="/products/bathrobes"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Browse Bathrobes
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
                name: "What fabric is best for hotel bathrobes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For upscale hotels, combination robes (terry inside, velour outside) at 450–550 GSM offer the best balance of absorbency and luxury appearance. Waffle-weave at 350–450 GSM is ideal for mid-scale hotels and warmer climates. Microfiber works best for gym and spa facilities where fast drying is prioritized.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between kimono and shawl collar bathrobes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kimono robes have a flat, open-front collar and a clean, minimalist look ideal for spa resorts and boutique hotels. Shawl collar robes feature a wraparound lapel and two front pockets, giving a classic luxury hotel appearance. Shawl collar is the more popular choice for 4- and 5-star hotels.",
                },
              },
              {
                "@type": "Question",
                name: "How many washes should a hotel bathrobe last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A well-made hotel bathrobe should last 150–200+ commercial wash cycles. Terry velour robes have the best durability. To maximize lifespan, specify anti-pilling finish, double-stitched seams, and secured belt loops with bar-tack reinforcement in your purchase order.",
                },
              },
              {
                "@type": "Question",
                name: "What is the minimum order quantity for custom hotel bathrobes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard minimum order is 100 pieces per style/size combination from most Dieshiqiao factories. For custom embroidery, the minimum is 300 pieces. Smaller boutique orders (50–100 pieces) are possible at slightly higher unit prices.",
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
            headline: "Hotel Bathrobe Buying Guide — How to Choose the Right Robe for Your Property",
            description: "Complete bathrobe sourcing guide for hotel buyers covering fabric types, GSM ranges, collar styles, logo embroidery, and pricing from Dieshiqiao manufacturers.",
            author: { "@type": "Organization", name: "Nantong Linens" },
            publisher: {
              "@type": "Organization",
              name: "Nantong Linens",
              logo: { "@type": "ImageObject", url: "https://www.nantonglinens.com/logo.png" },
            },
            datePublished: "2026-06-10",
            dateModified: "2026-06-10",
            url: "https://www.nantonglinens.com/guides/hotel-bathrobe-buying-guide",
          }),
        }}
      />
    </>
  );
}
