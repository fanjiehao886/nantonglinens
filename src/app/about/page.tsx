import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Why We Know Hotel Linens | Based in Dieshiqiao",
  description:
    "We live and work inside Dieshiqiao, the world's largest textile market. Our procurement guides, fabric knowledge, and sourcing service come from daily boots-on-the-ground experience — not a desk on another continent.",
  alternates: { canonical: "/about" },
};

const advantages = [
  {
    name: "Local Presence in Dieshiqiao",
    desc: "We operate daily inside the Dieshiqiao (叠石桥) textile market — China's #1 home textile hub with 6,000+ factories. We compare real-time prices, visit production lines, and negotiate on your behalf. No information lag, no inflated middleman costs.",
    icon: "📍",
  },
  {
    name: "Deep Product & Pricing Knowledge",
    desc: "We specialize exclusively in hotel linens — bed sheets, towels, bathrobes, and table linen. We understand thread counts, GSM weights, weave constructions, and fair market pricing. When you describe your spec, we can tell you immediately what it should cost and who makes it best.",
    icon: "📋",
  },
  {
    name: "Strict Quality Control",
    desc: "Every order goes through pre-shipment inspection at the factory. We check count, weight, dimensions, stitching, color consistency, and packaging before a single carton leaves. All partner factories hold OEKO-TEX Standard 100 and ISO 9001 certifications.",
    icon: "🔍",
  },
  {
    name: "Complete Export Handling",
    desc: "We are fully conversant in international trade procedures — commercial invoice, packing list, certificate of origin, customs declaration, and freight booking. We ship FOB Nantong or coordinate DDP delivery directly to your property, whichever fits your operation.",
    icon: "🚢",
  },
];

const serviceSteps = [
  {
    step: "01",
    title: "Requirement Intake",
    desc: "You share your product needs — type, material, size, quantity, customizations (logo, color, label). We ask the right clarifying questions upfront so there are no surprises later.",
  },
  {
    step: "02",
    title: "Factory Matching & Sampling",
    desc: "We identify 2–3 suitable factory options from our local network and arrange physical samples. You evaluate the samples yourself before approving any production.",
  },
  {
    step: "03",
    title: "Transparent Quotation",
    desc: "You receive a clear, itemized price breakdown — unit cost, packaging, inland transport, and freight. No hidden fees. We explain every line if you need us to.",
  },
  {
    step: "04",
    title: "Production Monitoring & QC",
    desc: "Once production begins, we provide progress updates and conduct an on-site inspection at the factory before shipment. You receive a photo and video QC report.",
  },
  {
    step: "05",
    title: "Export Documentation & Shipping",
    desc: "We prepare all required export documents, coordinate with the freight forwarder, and keep you updated on shipment status until delivery is confirmed.",
  },
];

const partnerCertifications = [
  {
    name: "OEKO-TEX Standard 100",
    desc: "All partner factories are OEKO-TEX tested. No harmful substances in any product we source.",
    icon: "🌿",
  },
  {
    name: "ISO 9001:2015",
    desc: "Partner factories operate under ISO-certified quality management systems for consistent output.",
    icon: "✅",
  },
  {
    name: "BSCI Audited Factories",
    desc: "We prioritize factories that have passed BSCI social compliance audits — ethical working conditions.",
    icon: "🏭",
  },
  {
    name: "Pre-Shipment Inspection",
    desc: "We conduct our own independent QC inspection before every shipment departs — above and beyond factory self-inspection.",
    icon: "🔎",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
            Who We Are — 15+ Years in Dieshiqiao
          </span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900">
            We Know Hotel Linens Because We Live It Every Day
          </h1>
          <p className="mt-3 max-w-2xl text-gray-500">
            Since 2010, we have been based inside Dieshiqiao, Nantong — the world&apos;s
            largest home textile market. Every day, we walk factory floors, compare fabric
            samples, and negotiate with mill owners. The guides, specs, and procurement
            resources on this site come from 15+ years of first-hand experience. And when
            you need someone on the ground to source, QC, and ship — we do that too.
          </p>
        </div>
      </section>

      {/* Story / Position */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
                Our Advantage
              </span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                Inside the World&apos;s Largest Textile Market
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  Dieshiqiao (叠石桥), in Nantong city, Jiangsu Province, is not just a market —
                  it is the global epicenter of home textile production. Over 6,000 factories,
                  10,000+ wholesale storefronts, and hundreds of thousands of workers produce
                  a substantial share of the world&apos;s hotel linens, bedding, and bath products
                  within just a few square kilometers.
                </p>
                <p>
                  We are physically embedded in this ecosystem. Every working day, we are on
                  the market floor — comparing materials, checking production runs, building
                  relationships with mill owners. That proximity fuels the content on this site:
                  real guides written from real experience, not desk research.
                </p>
                <p>
                  As a sourcing agent, our role is clear: we work for you, not for the factory.
                  We find you the best-fit supplier for your spec and budget, negotiate the price,
                  monitor the quality, and manage the logistics — so you get factory-direct value
                  without the complexity of managing an overseas supply chain yourself.
                </p>
              </div>
            </div>

            {/* Key facts panel */}
            <div className="rounded-2xl bg-blue-950 p-8 text-white">
              <h3 className="text-lg font-semibold mb-6">Our Sourcing Stats</h3>
              <div className="space-y-4">
                {[
                  { label: "Experience", value: "15+ years in Dieshiqiao" },
                  { label: "Market scale", value: "6,000+ factories within 10 km" },
                  { label: "Product range", value: "Every hotel linen category, all specs" },
                  { label: "Our role", value: "Independent agent — we work for you" },
                  { label: "Language", value: "Fluent English, Chinese-native sourcing" },
                  { label: "Response time", value: "Quote within 24 hours of inquiry" },
                  { label: "Minimum order", value: "Low MOQ — suitable for small hotels" },
                  { label: "Shipping terms", value: "FOB Nantong or DDP destination" },
                  { label: "Payment", value: "T/T, L/C accepted" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <p className="text-sm text-blue-300">{item.label}</p>
                    <p className="text-sm font-medium text-white text-right">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">What Makes Us Different</h2>
            <p className="mt-2 text-gray-500">
              Four reasons hospitality buyers trust us to source on their behalf
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {advantages.map((adv) => (
              <div
                key={adv.name}
                className="rounded-xl border border-gray-100 bg-white p-6"
              >
                <span className="text-3xl">{adv.icon}</span>
                <h3 className="mt-4 font-semibold text-gray-900">{adv.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Our Service Process</h2>
            <p className="mt-2 text-gray-500">
              A structured, transparent process from first inquiry to final delivery
            </p>
          </div>

          <div className="mt-10 space-y-4 max-w-3xl mx-auto">
            {serviceSteps.map((item) => (
              <div key={item.step} className="flex gap-5 rounded-xl border border-gray-100 p-5">
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Certifications */}
      <section id="certifications" className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Quality Standards We Enforce</h2>
            <p className="mt-2 text-gray-500">
              We only work with factories that meet these standards — and we verify it ourselves
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerCertifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center hover:border-blue-200 hover:bg-blue-50/30 transition-all"
              >
                <span className="text-3xl">{cert.icon}</span>
                <h3 className="mt-3 font-semibold text-gray-900 text-sm">{cert.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market coverage — replacing fake case studies */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
                Who We Serve
              </span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                Hotels, Resorts &amp; Hospitality Procurement Teams
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  Our clients are hotel operators, purchasing managers, and hospitality procurement
                  teams across North America, Europe, the Middle East, and Southeast Asia — looking
                  for factory-direct pricing on quality linens without the complexity of managing
                  an overseas supplier themselves.
                </p>
                <p>
                  Whether you are outfitting a single boutique property, a mid-scale hotel group,
                  or managing multi-property procurement, we scale our service to fit your volume
                  and timeline.
                </p>
                <p>
                  We are equally comfortable handling a first-time trial order of a few hundred
                  pieces and a repeat annual supply contract. Every client gets the same level of
                  communication and on-the-ground support.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { region: "North America", desc: "USA, Canada" },
                { region: "Europe", desc: "UK, Germany, France, Nordics" },
                { region: "Middle East", desc: "UAE, Saudi Arabia, Qatar, Kuwait" },
                { region: "Southeast Asia", desc: "Vietnam, Singapore, Thailand, Malaysia" },
              ].map((item) => (
                <div key={item.region} className="rounded-xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-gray-900 text-sm">{item.region}</h3>
                  <p className="mt-1 text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Ready to Source Smarter?
          </h2>
          <p className="mt-3 text-blue-200/80">
            Tell us what you need. We&apos;ll send a sourcing plan and initial pricing within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Submit an RFQ
            </Link>
            <a
              href="https://wa.me/8615151361119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
