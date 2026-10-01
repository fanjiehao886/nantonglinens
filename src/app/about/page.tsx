import { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Us — Hotel Linen Manufacturer & Exporter in Nantong",
  description:
    "A FOB manufacturer alliance of independent hotel linen factories in Nantong, China. Member-owned plants, one spec sheet, one QC standard, open to audits.",
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
    desc: "Our alliance's bedding mill sits in Chuanjiang, Tongzhou — minutes from the Dieshiqiao (叠石桥) market, China's #1 home textile hub with 6,000+ mills. Every category runs in the member factory that owns those lines, so price and lead time are set by the plant making the goods rather than quoted to us by a third party.",
    icon: "🏭",
  },
  {
    name: "Manufacturer-Owned, Alliance-Wide",
    desc: "Every member of the alliance owns its production and holds its own export licence, and the factory that makes your order ships it in its own name. The commercial side is centralised, so you still get one contract, one specification sheet and one accountable counterpart — with no agent layer between you and the line.",
    icon: "🤝",
  },
  {
    name: "Strict Quality Control In-House",
    desc: "Every order is inspected before it is packed — count, weight, dimensions, stitching, shrinkage and colour consistency, measured on the running batch against one written standard. Alliance factories hold OEKO-TEX Standard 100 and ISO 9001, and you receive a photo/video QC report before loading.",
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
    desc: "We cost your specification against the member factory that would run it, then ship physical samples. You approve the sample before any production starts.",
  },
  {
    step: "03",
    title: "Transparent Quotation",
    desc: "You receive a clear, itemized factory-direct price breakdown — unit cost, packaging, inland transport, and freight. No agent commission line. We explain every item if you need us to.",
  },
  {
    step: "04",
    title: "Production & In-House QC",
    desc: "Your order runs in the member factory that makes that category. We provide progress updates, inspect the running batch against the alliance standard before packing, and send you a photo and video QC report.",
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
    desc: "The member factories producing your order are OEKO-TEX tested. No harmful substances in anything we ship.",
    icon: "🌿",
  },
  {
    name: "ISO 9001:2015",
    desc: "Alliance factories operate ISO-certified quality management systems, which is what keeps repeat orders consistent.",
    icon: "✅",
  },
  {
    name: "BSCI Audited Supply Chain",
    desc: "Member factories are BSCI social-compliance audited — ethical working conditions across the alliance.",
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
            Who We Are — A Manufacturer Alliance, Not an Agent
          </span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900">
            We Manufacture Hotel Linens — And Export Them Ourselves
          </h1>
          <p className="mt-3 max-w-2xl text-gray-500">
            We are a FOB manufacturer alliance (工贸一体出口厂家联盟) of independent export factories
            in Nantong, Jiangsu — not one building pretending to cover ten product categories. Our
            founding member&apos;s 5,000 m² bedding mill in Chuanjiang, minutes from the Dieshiqiao
            market, runs weaving, dyeing, cutting, sewing, inspection and packing; the other members
            run their own lines in the same cluster for towelling, bathrobes, table linen and mattress
            programmes. Every member owns its plant and its export licence, and every member accepts a
            buyer audit. The commercial side stays centralised, so the price you see is the producing
            factory&apos;s cost rather than a mill price with a commission added on top. The guides,
            specs and procurement resources on this site come free, from 15+ years of making these
            products.
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
                  We are a FOB manufacturer alliance (工贸一体出口厂家联盟) of independent factories
                  rather than a single mill. Our founding member&apos;s 5,000 m² bedding mill in
                  Chuanjiang runs the full chain for bed sheets, duvet covers and pillowcases — fabric
                  preparation and weaving, reactive dyeing and finishing with controlled shrinkage,
                  automated cutting, multi-needle sewing, computer-controlled quilting, inspection and
                  export packing. The other members, each running their own lines in the same cluster,
                  cover towelling, bathrobes, table linen and mattress programmes. Bedding programmes
                  use long-staple cotton — including Xinjiang long-staple and certified
                  Lyocell/Tencel — chosen for hand feel without sacrificing commercial laundry life.
                </p>
                <p>
                  What every member has in common matters more than the headcount: each one owns a
                  plant, holds an export licence, and accepts a buyer audit. Nobody earns from
                  steering your order towards one factory over another, because nobody is choosing —
                  the member that makes that category takes the order, and is named on your contract.
                  Set against that, the commercial side is deliberately centralised: you sign one
                  contract, work to one specification sheet, are held to one inspection standard, and
                  receive one set of shipping documents. That is why our quotations are factory-direct,
                  and why you deal with a single accountable counterpart rather than a factory on one
                  side and an agent on the other.
                </p>
              </div>
            </div>

            {/* Key facts panel */}
            <div className="rounded-2xl bg-blue-950 p-8 text-white">
              <h3 className="text-lg font-semibold mb-6">Factory &amp; Export Facts</h3>
              <div className="space-y-4">
                {[
                  { label: "Experience", value: "15+ years manufacturing hotel linens" },
                  { label: "Our role", value: "FOB manufacturer alliance (工贸一体出口厂家联盟)" },
                  { label: "Members", value: "Independent factories, each with its own plant" },
                  { label: "Founding member", value: "Bedding mill in Chuanjiang, Nantong" },
                  { label: "Bedding capacity", value: `${company.capacity.beddingLabel} across member lines` },
                  { label: "Quote reply", value: `Within ${company.service.quoteReplyHours} hours, weekdays` },
                  { label: "Sampling", value: company.service.sampleDaysLabel },
                  { label: "Raw materials", value: "Long-staple cotton, Lyocell/Tencel, blends" },
                  { label: "Cluster access", value: "6,000+ mills within 10 km for surge capacity" },
                  { label: "Compliance", value: "OEKO-TEX Standard 100 · ISO 9001:2015" },
                  { label: "Factory visits", value: "Open to buyer audits at every member" },
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
              Six production steps that run on member-owned lines — and the standard every factory
              in the alliance is held to, which is what makes &quot;factory-direct&quot; more than a slogan
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
              Every member factory of the alliance is measured against these — and we verify it ourselves
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
            Tell us your spec, quantity, and target market — or just attach a photo of the label you
            use today. We come back with factory-direct pricing, the production timeline and the
            sample arrangement within 24 hours.
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
