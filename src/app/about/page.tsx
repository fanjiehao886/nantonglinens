import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Hotel Linen Manufacturer & Exporter in Nantong",
  description:
    "We are a group of integrated mill-and-trade enterprises in Chuanjiang, Nantong — our own 5,000 m² mill runs weaving, dyeing, cutting, sewing, inspection and packing, and the member factories of the group cover the wider range. Factory-direct wholesale since 2010.",
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
    name: "Our Own Factories in the Textile Cluster",
    desc: "Our group's mill sits in Chuanjiang, Tongzhou — minutes from the Dieshiqiao (叠石桥) market, China's #1 home textile hub with 6,000+ mills. Core programmes run on our own lines and other categories in the member factories of the group, so price and lead time are set by us rather than quoted to us.",
    icon: "🏭",
  },
  {
    name: "Manufacturer + Trader, Group-Wide",
    desc: "Every member of our group is a mill-and-trader: it owns production and holds its own export licence. Export nonetheless runs through one team and one contract, so you get a single point of responsibility from yarn to bill of lading — no hand-offs, and no agent layer between you and the line.",
    icon: "🤝",
  },
  {
    name: "Strict Quality Control In-House",
    desc: "Every order runs through our own inspection room before it is packed: count, weight, dimensions, stitching, shrinkage, and colour consistency. Our group's factories hold OEKO-TEX Standard 100 and ISO 9001, and you receive a photo/video QC report before loading.",
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
    desc: "We cost your specification against our own production line — and against the member factories of our group for other categories — then ship physical samples. You approve the sample before any production starts.",
  },
  {
    step: "03",
    title: "Transparent Quotation",
    desc: "You receive a clear, itemized factory-direct price breakdown — unit cost, packaging, inland transport, and freight. No agent commission line. We explain every item if you need us to.",
  },
  {
    step: "04",
    title: "Production & In-House QC",
    desc: "Your order runs in our group's factories. We provide progress updates and inspect the running batch in our own inspection room before packing. You receive a photo and video QC report.",
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
    desc: "Our own production and the member factories of our group are OEKO-TEX tested. No harmful substances in anything we ship.",
    icon: "🌿",
  },
  {
    name: "ISO 9001:2015",
    desc: "Our group's factories operate ISO-certified quality management systems for consistent output across repeat orders.",
    icon: "✅",
  },
  {
    name: "BSCI Audited Supply Chain",
    desc: "Member factories of our group are BSCI social-compliance audited — ethical working conditions across the whole group.",
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
            We are a group of integrated mill-and-trade enterprises (工贸一体企业联盟) based in
            Nantong, Jiangsu — not one building pretending to cover ten product categories. Our own
            5,000 m² mill in Chuanjiang, minutes from the Dieshiqiao market, runs weaving, dyeing,
            cutting, sewing, inspection and packing; the member factories of the group, each with its
            own lines in the same cluster, cover the rest. The commercial side stays centralised, so
            the price you see is production cost rather than a mill price with a commission added on
            top. The guides, specs, and procurement resources on this site come free, from 15+ years
            of making these products.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/factory"
              className="inline-flex items-center rounded-full bg-blue-900 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              See Inside Our Factories
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
                Our Factories &amp; the World&apos;s Largest Textile Market
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  Our production base is in Chuanjiang, Tongzhou District, Nantong — a few
                  minutes&apos; drive from Dieshiqiao (叠石桥), where over 6,000 mills and
                  10,000+ wholesale storefronts produce a substantial share of the world&apos;s
                  hotel linens within a handful of square kilometres. Being inside this ecosystem
                  means raw materials, dyeing, and finishing capacity are all within reach.
                </p>
                <p>
                  We are a group of integrated mill-and-trade enterprises (工贸一体企业联盟) rather
                  than a single mill. Our own 5,000 m² mill in Chuanjiang runs the full chain:
                  fabric preparation and weaving, reactive dyeing and finishing with controlled
                  shrinkage, automated cutting, multi-needle sewing, computer-controlled quilting,
                  an independent inspection room, and export packing. Member factories of the group,
                  each running its own lines in the same cluster, cover the wider category range.
                  Core bedding programmes use long-staple cotton — including Xinjiang long-staple and
                  certified Lyocell/Tencel — chosen for hand feel without sacrificing commercial
                  laundry life.
                </p>
                <p>
                  What every member has in common matters more than the headcount: each one
                  manufactures and each one trades — owner-operators of production, not
                  intermediaries. Set against that, the commercial side is deliberately centralised.
                  You sign one contract, work to one specification sheet, are held to one inspection
                  standard, and receive one set of export documents. That is why our quotations are
                  factory-direct, and why you deal with a single accountable counterpart rather than
                  a factory on one side and an agent on the other.
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
              Six production steps that stay on our own lines — and the standard every member
              factory of the group is held to, which is what makes &quot;factory-direct&quot; more than a slogan
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
              Our own mill and every member factory of our group are measured against these — and we verify it ourselves
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
