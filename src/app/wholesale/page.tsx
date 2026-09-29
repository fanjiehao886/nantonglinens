import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wholesale Hotel Linen Manufacturer & OEM Supplier — Factory-Direct Pricing",
  description:
    "Wholesale hotel linens factory-direct from member-owned factories in Nantong, China. Bed sheets, towels, bathrobes, table linen — OEM, low MOQ, FOB pricing.",
  keywords:
    "wholesale hotel linen manufacturer, hotel linen manufacturer China, hotel bedding wholesale, hotel linen wholesale supplier, OEM hotel linens, private label hotel linens, bulk hotel linen China, hotel linen distributor supply, Dieshiqiao hotel bedding, Nantong textile factory wholesale, hotel linen manufacturer alliance, hotel linen factory audit China",
  alternates: { canonical: "/wholesale" },
  openGraph: {
    title: "Wholesale Hotel Linen Manufacturer — Factory-Direct from Nantong",
    description:
      "Member factories of our alliance manufacture hotel linens in Nantong and ship them under their own export licences. Wholesale, OEM and private-label programs — bed sheets, towels, duvet covers, bathrobes, table linen.",
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
    title: "Factory-direct pricing (the factories are the members)",
    desc: "Your quote comes from the producing member's own cost base — no intermediary sits between you and the line. There is no agent commission and no importer margin built in, which is why wholesale buyers consistently land 15–25% below distributor quotes on comparable specs.",
  },
  {
    title: "Flexible MOQ from 50 pcs",
    desc: "Because the lines belong to the member factories, we can accept 50–200 pieces per spec without waiting for a container-level minimum. Ideal for distributors testing a new SKU, boutique hotels, and pilot orders.",
  },
  {
    title: "OEM & private label",
    desc: "Your brand on the product: woven labels, printed care labels, jacquard logos, embroidered marks, custom polybags and carton markings. We produce to your artwork and keep your design files confidential.",
  },
  {
    title: "Stable specifications on repeat orders",
    desc: "Thread count, GSM, weave, shrinkage limits, and colour references are locked in a written spec sheet and held across reorders — so your shelf product does not drift between shipments.",
  },
  {
    title: "In-house QC before every shipment",
    desc: "GSM, thread count, measurements, shrinkage, colourfastness and construction are checked on the running batch against your PO spec, to one written standard. You receive a photo/video report before the container is loaded.",
  },
  {
    title: "Export handled by us, not a third party",
    desc: "FOB Nantong/Shanghai, CIF, or DDP. We handle documentation for your preferred Incoterm and are experienced with US, EU, Middle East, and Southeast Asia customs and labelling requirements.",
  },
];

const wholesalePrograms = [
  {
    name: "Distributor / Stockist",
    desc: "Repeat supply of core white programs with stable specs, tiered volume pricing, and consolidated shipments so you can hold stock without tying up capital.",
    best: "Importers, wholesalers, linen rental & laundry groups",
  },
  {
    name: "OEM / Private Label",
    desc: "Production under your own brand — labels, care tags, packaging, cartons, and barcode-ready packing lists produced to your artwork.",
    best: "Hospitality suppliers, e-commerce brands, retail chains",
  },
  {
    name: "Project & Rollout",
    desc: "Single-property openings through multi-hundred-room rollouts: sampling, colour locking, staged deliveries, and QC reporting per batch.",
    best: "Hotel groups, resorts, contractors, procurement agencies",
  },
];

const moqTiers = [
  { product: "Bed sheets & pillowcases", moq: "100 pcs per size/colour", lead: "15–20 days" },
  { product: "Duvet covers", moq: "100 pcs per size/colour", lead: "18–25 days" },
  { product: "Bath towels & bath mats", moq: "200 pcs per colour", lead: "15–20 days" },
  { product: "Bathrobes", moq: "100 pcs per size/colour", lead: "20–25 days" },
  { product: "Table linen", moq: "200 pcs per colour", lead: "18–25 days" },
  { product: "Trial / sample order", moq: "From 50 pcs", lead: "Quote on request" },
];

const faqs = [
  {
    q: "Are you a manufacturer or a trading company?",
    a: "Neither label fits on its own, and that is deliberate. We are a FOB manufacturer alliance (工贸一体出口厂家联盟): the factories that make the goods are independent companies, and each one owns its own plant and holds its own export licence. Our founding member's 5,000 m² mill in Chuanjiang, Tongzhou runs weaving, dyeing and finishing, cutting, sewing, quilting, inspection and packing for the bedding; towelling, bathrobes, table linen and mattress programmes run at the members that specialise in them. There is no agent and no commission layer in between, the member that makes your order is named on the contract, and you can audit any of them before you buy.",
  },
  {
    q: "What is the minimum order quantity for wholesale hotel linens?",
    a: "MOQ varies by product: bed sheets, duvet covers, pillowcases and bathrobes from 100 pieces per size/colour; towels and table linen from 200 pieces per colour. Trial orders can start from 50 pieces. Because the lines belong to the member factories, we do not require container-level minimums.",
  },
  {
    q: "Where are your hotel linen products manufactured?",
    a: "Bedding — flat sheets, fitted sheets, duvet covers and pillowcases — is manufactured at our founding member's 5,000 m² mill in Chuanjiang, Tongzhou District, Nantong, minutes from the Dieshiqiao market. Towelling, bathrobes, table linen and mattress programmes are produced by the other member factories in the same cluster, under the same specification sheets and the same inspection standard. Each member owns its plant and its export licence, and every one accepts a buyer audit.",
  },
  {
    q: "Do you offer OEM and private-label production?",
    a: "Yes. We produce under your brand with woven labels, printed care labels, jacquard logos, embroidered marks, custom polybags and carton markings produced to your artwork. We keep your designs and specifications confidential and do not resell private-label programmes to other buyers.",
  },
  {
    q: "Do you offer wholesale or distributor pricing tiers?",
    a: "Yes. Pricing is volume-tiered and quoted per specification — yarn count, GSM, construction and finish all affect unit cost, so we quote from your actual spec rather than publishing a flat price list. Distributors and stockists holding repeat programmes are quoted on an annual volume basis.",
  },
  {
    q: "Do you offer custom sizing and specifications?",
    a: "Yes. Thread count, GSM, weave type, dimensions, colour, embroidery, labelling and packaging are all specifiable. We can match your existing hotel linen specifications, provide retailer-ready packaging, or recommend the right spec for your price tier.",
  },
  {
    q: "What are your payment terms?",
    a: "Standard terms are 30% deposit with order, 70% before shipment. We accept T/T (wire transfer) and L/C at sight. For repeat customers and distributors, we can discuss net terms.",
  },
  {
    q: "How long does production and shipping take?",
    a: "Production lead time is typically 10–25 days depending on product and volume; towels run faster than bathrobes. Sea freight is approximately 15–18 days to the US West Coast and 25–30 days to Europe. Air freight is available for urgent replenishment.",
  },
  {
    q: "Can you provide samples before bulk production?",
    a: "Yes. Pre-production samples ship by DHL/FedEx, usually within 5 business days, and are free for serious buyers. For larger orders we also provide production samples from your actual batch before final payment and shipment.",
  },
];

export default function WholesalePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
            FOB Manufacturer Alliance — Nantong, China
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-tight">
            Wholesale Hotel Linens — Factory-Direct, No Middleman
          </h1>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
            We are a FOB manufacturer alliance of independent export factories in Nantong. The
            bedding member&apos;s mill makes bed sheets, duvet covers and pillowcases; the other members
            make the towels, bathrobes and table linen, each shipping under its own export licence.
            Wholesalers, distributors, hospitality suppliers and hotel groups buy from us at
            factory-direct FOB prices, with OEM and private-label programmes available on flexible
            MOQ.
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
            <Link
              href="/factory"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Inside Our Factories
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
            <span>Member-owned factories in Nantong</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 self-center hidden sm:inline" />
            <span>MOQ from 50 pcs</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 self-center hidden sm:inline" />
            <span>Samples in 5 days</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 self-center hidden sm:inline" />
            <span>OEM &amp; private label</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 self-center hidden sm:inline" />
            <span>FOB Nantong / Shanghai</span>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Wholesale Hotel Linen Product Range
          </h2>
          <p className="mt-3 text-gray-500 text-center max-w-2xl mx-auto">
            Every hotel textile category — produced in the member factory that specialises in it,
            priced factory-direct, FOB from Nantong
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
            Why Wholesalers Buy From Us — Not Through An Agent
          </h2>
          <p className="mt-3 text-gray-500 text-center max-w-2xl mx-auto">
            We manufacture the goods and export them ourselves. That removes a cost layer and a
            responsibility gap from your supply chain
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

      {/* Wholesale programmes */}
      <section className="bg-gray-50 py-14 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Three Ways To Buy Wholesale From Us
          </h2>
          <p className="mt-3 text-gray-500 text-center max-w-2xl mx-auto">
            Whether you hold stock, sell under your own brand, or supply a rollout — the production
            side is the same factory
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {wholesalePrograms.map((p) => (
              <div key={p.name} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{p.desc}</p>
                <p className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-400">
                  <span className="font-medium text-gray-500">Best for:</span> {p.best}
                </p>
              </div>
            ))}
          </div>

          {/* MOQ table */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="px-6 py-5">
              <h3 className="font-semibold text-gray-900">MOQ &amp; Lead Time By Product</h3>
              <p className="mt-1 text-sm text-gray-500">
                Indicative figures for standard white programs in 100% cotton. Custom constructions,
                colours, and branding may adjust MOQ and lead time.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Product</th>
                    <th className="px-6 py-3 font-semibold">MOQ</th>
                    <th className="px-6 py-3 font-semibold">Production lead time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  {moqTiers.map((t) => (
                    <tr key={t.product}>
                      <td className="px-6 py-3.5 font-medium text-gray-900">{t.product}</td>
                      <td className="px-6 py-3.5">{t.moq}</td>
                      <td className="px-6 py-3.5">{t.lead}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-bold">How To Order Wholesale Hotel Linens</h2>
          <p className="mt-3 text-blue-200/80">A simple 4-step process from inquiry to delivery</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            {[
              { step: "01", title: "Send Requirements", desc: "Tell us whether you buy as a hotel, wholesaler, or private-label supplier — plus specs (TC/GSM/size), volumes, and target price." },
              { step: "02", title: "Quote & Samples", desc: "We cost your spec on the producing member's lines and ship free physical samples for approval." },
              { step: "03", title: "Produce & QC", desc: "Production runs on the member's line to one written standard, and you get a photo/video QC report before loading." },
              { step: "04", title: "Ship & Deliver", desc: "FOB, CIF or DDP — we handle export docs, customs clearance, and logistics ourselves." },
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
            Ready to Order Wholesale, Factory-Direct?
          </h2>
          <p className="mt-3 text-gray-500">
            Tell us what you need — buyer type, product categories, quantities, specs, and any
            branding requirements. We&apos;ll come back with factory-direct pricing, MOQ, and
            samples within 24 hours.
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
            name: "Wholesale Hotel Linens — Factory-Direct from a Nantong Manufacturer",
            description:
              "Wholesale hotel linens factory-direct from member-owned factories in Nantong: bed sheets, towels, duvet covers, pillowcases, bathrobes and table linen. OEM, private label, low MOQ, FOB pricing, global shipping.",
            url: "https://www.nantonglinens.com/wholesale",
            publisher: { "@id": "https://www.nantonglinens.com/#organization" },
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
