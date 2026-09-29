import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Hotel Linen Manufacturer & Exporter in Nantong",
  description:
    "We manufacture and export hotel linens from our own facility in Chuanjiang, Nantong — weaving, sewing, inspection and packing in-house, backed by the 6,000+ mill Dieshiqiao cluster. Factory-direct wholesale since 2010.",
  alternates: { canonical: "/about" },
};

const capability = [
  {
    name: "Weaving & Fabric Preparation",
    desc: "Core bedding fabrics are woven to our own construction sheets — yarn count, density, and width fixed before a single metre is cut.",
    icon: "🧵",
  },
  {
    name: "Dyeing & Finishing",
    desc: "Reactive dyeing with controlled shade matching, plus pre-shrinking and heat setting so shrinkage stays inside spec after commercial washing.",
    icon: "🎨",
  },
  {
    name: "Cutting & Sewing",
    desc: "Automated cutting and multi-needle sewing lines. Stitch density, seam type, and corner reinforcement are specified per product, not left to chance.",
    icon: "✂️",
  },
  {
    name: "Quilting & Automated Lines",
    desc: "Computer-controlled quilting and automated production equipment handle mattress protectors, toppers, and high-volume repeat programs.",
    icon: "⚙️",
  },
  {
    name: "Independent Inspection Room",
    desc: "A dedicated QC room measures GSM, thread count, dimensions, shrinkage, and colourfastness on the running batch — not just on a golden sample.",
    icon: "🔎",
  },
  {
    name: "Packing & Export Consolidation",
    desc: "Cartons are folded, labelled and packed to your floor-ready specification, then consolidated for FOB shipment with full export documentation.",
    icon: "📦",
  },
];

const advantages = [
  {
    name: "Our Own Factory in the Textile Cluster",
    desc: "Our production facility sits in Chuanjiang, Tongzhou — minutes from the Dieshiqiao (叠石桥) market, China's #1 home textile hub with 6,000+ mills. We manufacture in-house and pull on the cluster for extra capacity, so price and lead time are set by us rather than quoted to us.",
    icon: "🏭",
  },
  {
    name: "Manufacturer + Trading Company",
    desc: "One company owns the production and the export paperwork. You sign one contract, deal with one team, and get one point of responsibility from yarn to bill of lading — no hand-offs between a factory and a separate trading agent.",
    icon: "🤝",
  },
  {
    name: "Strict Quality Control In-House",
    desc: "Every order runs through our own inspection room before it is packed: count, weight, dimensions, stitching, shrinkage, and colour consistency. The facility holds OEKO-TEX Standard 100 and ISO 9001, and you receive a photo/video QC report before loading.",
    icon: "🔍",
  },
  {
    name: "Complete Export Handling",
    desc: "We are fully conversant in international trade procedures — commercial invoice, packing list, certificate of origin, customs declaration, and freight booking. We ship FOB Nantong or Shanghai, or coordinate DDP delivery to your property.",
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
    title: "Production Planning & Sampling",
    desc: "We cost your specification against our own production line — and against audited cluster mills for categories we do not run ourselves — then ship physical samples. You approve the sample before any production starts.",
  },
  {
    step: "03",
    title: "Transparent Quotation",
    desc: "You receive a clear, itemized factory-direct price breakdown — unit cost, packaging, inland transport, and freight. No agent commission line. We explain every item if you need us to.",
  },
  {
    step: "04",
    title: "Production & In-House QC",
    desc: "Your order runs on our line. We provide progress updates and inspect the running batch in our own inspection room before packing. You receive a photo and video QC report.",
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
    desc: "Our own production and the cluster mills we work with are OEKO-TEX tested. No harmful substances in anything we ship.",
    icon: "🌿",
  },
  {
    name: "ISO 9001:2015",
    desc: "Our facility and partner mills operate ISO-certified quality management systems for consistent output across repeat orders.",
    icon: "✅",
  },
  {
    name: "BSCI Audited Supply Chain",
    desc: "Where we draw on cluster capacity, we prioritise factories that have passed BSCI social compliance audits — ethical working conditions.",
    icon: "🏭",
  },
  {
    name: "In-House Inspection Room",
    desc: "Final inspection happens in our own QC room before every shipment departs — measurement, weight, and colour checks on the actual batch.",
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
            Who We Are — Hotel Linen Manufacturer &amp; Exporter Since 2010
          </span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900">
            We Manufacture Hotel Linens — And Export Them Ourselves
          </h1>
          <p className="mt-3 max-w-2xl text-gray-500">
            We are a manufacturer and trading company (工贸一体) based in Nantong, Jiangsu. Our own
            production facility in Chuanjiang — minutes from the Dieshiqiao market — runs weaving,
            sewing, inspection, and packing under one roof, with the wider cluster on tap for
            capacity. That is why our quotations are factory-direct: the price you see is our
            production cost, not a mill price with an agent commission added on top. The guides,
            specs, and procurement resources on this site come free, from 15+ years of making these
            products.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/factory"
              className="inline-flex items-center rounded-full bg-blue-900 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              See Inside Our Factory
            </Link>
            <Link
              href="/wholesale"
              className="inline-flex items-center rounded-full border border-gray-300 px-7 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Wholesale &amp; OEM Programs
            </Link>
          </div>
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
                Our Factory &amp; the World&apos;s Largest Textile Market
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  Our production facility is located in Chuanjiang, Tongzhou District, Nantong —
                  a few minutes&apos; drive from Dieshiqiao (叠石桥), where over 6,000 mills and
                  10,000+ wholesale storefronts produce a substantial share of the world&apos;s
                  hotel linens within a handful of square kilometres. Being inside this ecosystem
                  means raw materials, dyeing, and finishing capacity are all within reach.
                </p>
                <p>
                  Inside our own walls we run the full chain: fabric preparation and weaving,
                  reactive dyeing and finishing with controlled shrinkage, automated cutting,
                  multi-needle sewing, computer-controlled quilting, an independent inspection
                  room, and export packing. Core bedding programs use long-staple cotton —
                  including Xinjiang long-staple and certified Lyocell/Tencel — chosen for
                  hand feel without sacrificing commercial laundry life.
                </p>
                <p>
                  As a manufacturer and trading company, our role is simple: we make the goods,
                  set the specification, inspect the batch, and then handle your export paperwork
                  ourselves. You get factory economics and a single accountable counterpart —
                  rather than a factory on one side and a trading agent on the other.
                </p>
              </div>
            </div>

            {/* Key facts panel */}
            <div className="rounded-2xl bg-blue-950 p-8 text-white">
              <h3 className="text-lg font-semibold mb-6">Factory &amp; Export Facts</h3>
              <div className="space-y-4">
                {[
                  { label: "Experience", value: "15+ years manufacturing hotel linens" },
                  { label: "Our role", value: "Manufacturer + trading company (工贸一体)" },
                  { label: "Facility", value: "Own production in Chuanjiang, Nantong" },
                  { label: "Production chain", value: "Weaving → dyeing → sewing → QC → packing" },
                  { label: "Raw materials", value: "Long-staple cotton, Lyocell/Tencel, blends" },
                  { label: "Cluster access", value: "6,000+ mills within 10 km for surge capacity" },
                  { label: "Compliance", value: "OEKO-TEX Standard 100 · ISO 9001:2015" },
                  { label: "Minimum order", value: "From 50 pcs per size/colour" },
                  { label: "Shipping terms", value: "FOB Nantong/Shanghai or DDP destination" },
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

      {/* Production capability — manufacturer proof */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">What We Run In-House</h2>
            <p className="mt-2 text-gray-500">
              Six production steps that stay inside our own facility — which is what makes
              &quot;factory-direct&quot; more than a slogan
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capability.map((item) => (
              <div key={item.name} className="rounded-xl border border-gray-100 p-6">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">What Makes Us Different</h2>
            <p className="mt-2 text-gray-500">
              Four reasons wholesale buyers order factory-direct instead of through an agent
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
            <h2 className="text-2xl font-bold text-gray-900">Quality Standards We Hold</h2>
            <p className="mt-2 text-gray-500">
              Our own facility and every cluster mill we use are measured against these — and we verify it ourselves
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
                Hotels, Wholesalers &amp; Hospitality Suppliers
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  Our buyers fall into three groups. First, hotel operators and purchasing managers
                  outfitting rooms, suites, spas, and F&amp;B outlets. Second, <strong>wholesalers,
                  distributors, and importers</strong> who stock or resell hotel linens and need a
                  factory-direct source with consistent specifications and reliable repeat supply.
                  Third, hospitality suppliers, project contractors, and online retailers who need
                  OEM or private-label production under their own brand.
                </p>
                <p>
                  Because we manufacture rather than broker, we can support reseller economics
                  properly: tiered wholesale pricing by volume, stable specifications across
                  repeat orders, private-label labels and packaging, and container-level
                  consolidation so your landed cost stays predictable.
                </p>
                <p>
                  We handle a first-time trial order of a few hundred pieces and a repeat annual
                  supply contract with the same rigour. Every client gets the same level of
                  communication, documentation, and QC reporting.
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
            Ready to Order Factory-Direct?
          </h2>
          <p className="mt-3 text-blue-200/80">
            Tell us your spec, quantity, and target market. We&apos;ll come back with factory-direct
            pricing, samples, and a production timeline within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Get a Factory-Direct Quote
            </Link>
            <Link
              href="/wholesale"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Wholesale &amp; OEM
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
