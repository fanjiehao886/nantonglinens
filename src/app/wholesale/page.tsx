import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel Bedding Wholesale — Bulk Supply from Dieshiqiao, Nantong China",
  description:
    "Wholesale hotel bedding direct from Dieshiqiao factories. As hotel linen suppliers based in Nantong, we offer hotel bed sheets, towels, duvet covers, pillowcases in bulk. Low MOQ, FOB pricing, global shipping. Request a quote today.",
  keywords:
    "hotel bedding wholesale, hotel bedding suppliers, hotel bedding wholesale manufacturer, hotel linen manufacturer, bulk hotel linen China, Dieshiqiao hotel bedding, Nantong textile wholesale",
  alternates: { canonical: "/wholesale" },
  openGraph: {
    title: "Hotel Bedding Wholesale — Bulk Supply from Dieshiqiao, Nantong",
    description:
      "Direct factory pricing on wholesale hotel bedding. Bed sheets, towels, duvet covers, pillowcases — custom specs, global shipping from China's textile hub.",
  },
};

const productCategories = [
  { name: "Bed Sheets", href: "/products/bed-sheets", desc: "Flat & fitted sheets, 200–1000 TC" },
  { name: "Duvet Covers", href: "/products/duvet-covers", desc: "All closure types, reinforced seams" },
  { name: "Pillowcases", href: "/products/pillowcases", desc: "Oxford, housewife & envelope styles" },
  { name: "Bath Towels", href: "/products/bath-towels", desc: "400–900 GSM, all cotton types" },
  { name: "Bathrobes", href: "/products/bathrobes", desc: "Waffle, terry velour, custom embroidery" },
  { name: "Table Linen", href: "/products/table-linen", desc: "Tablecloths, napkins, placemats" },
  { name: "Mattress Toppers", href: "/products/mattress-toppers", desc: "Pillow-top, featherbed, memory foam" },
  { name: "Pool & Beach Towels", href: "/products/pool-beach-towels", desc: "Striped, chlorine-resistant" },
  { name: "Bath Mats", href: "/products/bath-mats", desc: "Cotton terry, microfiber, non-slip" },
];

const advantages = [
  {
    title: "Factory-direct pricing",
    desc: "We source from dedicated manufacturers within the Dieshiqiao textile cluster — no middle layers. You pay FOB prices, not distributor markups.",
  },
  {
    title: "Flexible MOQ",
    desc: "Unlike large factories that demand container-level minimums, our partners accept orders from 50–200 pieces per spec. Ideal for boutique hotels and pilot orders.",
  },
  {
    title: "Custom specifications",
    desc: "Thread count, GSM, weave, size, color, embroidery, packaging — every spec is negotiable. We match your existing hotel linen standards or recommend the right specs for your tier.",
  },
  {
    title: "Strict QC process",
    desc: "Every batch goes through our independent inspection before shipping. We check GSM, thread count, colorfastness, shrinkage, and construction against your PO specifications.",
  },
  {
    title: "Global logistics experience",
    desc: "FOB Nantong/Shanghai, CIF, DDP — we handle documentation for your preferred incoterm. Experienced with US, EU, Middle East, and Southeast Asia customs requirements.",
  },
  {
    title: "Samples within 5 days",
    desc: "We ship pre-production samples by DHL/FedEx so you can feel the fabric before committing. Production samples from your actual order batch are also available.",
  },
];

const faqs = [
  {
    q: "What is the minimum order quantity for wholesale hotel bedding?",
    a: "MOQ varies by product: bed sheets and pillowcases from 100 pieces per spec, towels from 200 pieces, bathrobes from 100 pieces. We can negotiate lower MOQs for first-time trial orders. Contact us with your requirements.",
  },
  {
    q: "Where are your hotel bedding products manufactured?",
    a: "All products are sourced from factories in Nantong's Dieshiqiao textile cluster — the world's largest home textile manufacturing hub, home to over 6,000 factories. We physically inspect factories and products on-site.",
  },
  {
    q: "Do you offer custom sizing and specifications?",
    a: "Yes. Thread count, GSM, weave type, dimensions, color, embroidery, and packaging are all customizable. We can match your existing hotel linen specs or recommend based on your property tier and budget.",
  },
  {
    q: "What are your payment terms?",
    a: "Standard terms are 30% deposit with order, 70% before shipment. We accept T/T (wire transfer) and L/C at sight. For repeat customers, we can discuss net terms.",
  },
  {
    q: "How long does production and shipping take?",
    a: "Standard lead time is 10–20 days depending on product complexity and order volume. Sea freight to US West Coast is approximately 15–18 days, to Europe 25–30 days. Air freight available for urgent orders.",
  },
  {
    q: "Can you provide samples before bulk production?",
    a: "Yes. We ship pre-production samples by DHL/FedEx (typically 5 business days). For large orders, we also provide production samples from your actual batch before final payment and shipment.",
  },
];

export default function WholesalePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
            Dieshiqiao, Nantong — China's Textile Hub
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-tight">
            Hotel Bedding Wholesale — Direct from Factory to Your Property
          </h1>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
            As hotel bedding suppliers based in Nantong's Dieshiqiao textile cluster, we connect hotels and
            procurement teams worldwide with vetted factories producing bed sheets, towels, duvet covers,
            pillowcases, and more — at wholesale FOB prices with flexible MOQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Request a Wholesale Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
            <span>FOB Nantong / Shanghai</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 self-center hidden sm:inline" />
            <span>MOQ from 50 pcs</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 self-center hidden sm:inline" />
            <span>Samples in 5 days</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 self-center hidden sm:inline" />
            <span>Global shipping</span>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Wholesale Hotel Bedding Products We Supply
          </h2>
          <p className="mt-3 text-gray-500 text-center max-w-2xl mx-auto">
            Every hotel textile category — custom specs, competitive FOB pricing, factory-direct from Nantong
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Why Hotels Choose Us as Their Bedding Supplier
          </h2>
          <p className="mt-3 text-gray-500 text-center max-w-2xl mx-auto">
            Based in Nantong, physically present at Dieshiqiao — we do the legwork so you don't have to
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((adv) => (
              <div key={adv.title} className="rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900">{adv.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-bold">How to Order Wholesale Hotel Bedding</h2>
          <p className="mt-3 text-blue-200/80">A simple 4-step process from inquiry to delivery</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            {[
              { step: "01", title: "Send Requirements", desc: "Tell us your hotel tier, product types, specs (TC/GSM/size), and target budget." },
              { step: "02", title: "Get Quote & Samples", desc: "We source from 3–5 factories, compare pricing and quality, and ship samples." },
              { step: "03", title: "Confirm & Produce", desc: "After sample approval, production starts. We inspect in-line and pre-shipment." },
              { step: "04", title: "Ship & Deliver", desc: "FOB, CIF or DDP — we handle export docs, customs clearance, and logistics." },
            ].map((s) => (
              <div key={s.step} className="text-left">
                <span className="text-3xl font-bold text-blue-400/50">{s.step}</span>
                <h3 className="mt-2 font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-blue-200/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Wholesale Hotel Bedding — Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-gray-200 bg-white">
                <summary className="cursor-pointer px-6 py-4 text-base font-medium text-gray-900 list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-gray-300 group-open:rotate-180 transition-transform text-lg ml-4 shrink-0">▾</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to Source Wholesale Hotel Bedding?
          </h2>
          <p className="mt-3 text-gray-500">
            Tell us what you need — hotel tier, product types, quantities, and target budget. We'll source from
            Dieshiqiao's top factories and respond with pricing and samples within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Get a Wholesale Quote
            </Link>
            <a
              href="https://wa.me/86151361119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hotel Bedding Wholesale — Bulk Supply from Dieshiqiao",
            description:
              "Wholesale hotel bedding direct from Dieshiqiao factories. Hotel bed sheets, towels, duvet covers, and pillowcases in bulk. Low MOQ, FOB pricing, global shipping.",
            url: "https://www.nantonglinens.com/wholesale",
            publisher: {
              "@type": "Organization",
              name: "Nantong Linens",
            },
            mainEntity: {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            about: {
              "@type": "Place",
              name: "Dieshiqiao Textile Market",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nantong",
                addressRegion: "Jiangsu",
                addressCountry: "CN",
              },
            },
          }),
        }}
      />
    </>
  );
}
