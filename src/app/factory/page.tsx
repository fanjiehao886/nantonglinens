import { Metadata } from "next";
import Link from "next/link";
import { company, napLines } from "@/lib/company";

export const metadata: Metadata = {
  title: "Hotel Linen Factories in Nantong, China — Visit or Audit Any Member",
  description:
    "Inside the factories behind Nantong Linens: a FOB manufacturer alliance in China. See which member makes which category, and visit or audit any of them.",
  keywords:
    "hotel linen manufacturer China, hotel linen factory Nantong, visit hotel linen factory China, hotel bedding factory audit, FOB hotel linen factory, hotel towel manufacturer China, OEKO-TEX hotel linen factory, manufacturer alliance",
  alternates: { canonical: "/factory" },
  openGraph: {
    title: "Inside Our Hotel Linen Factories in Nantong, China | Nantong Linens",
    description:
      "A factory alliance of independent hotel linen exporters in Nantong — each member owns its own plant, and every one is open to a buyer audit or on-site visit.",
  },
};

/** Facts stated on this page. Every one of them is checkable at a factory. */
const allianceFacts = [
  {
    label: "Business model",
    value: "FOB manufacturer alliance — independently owned export factories",
  },
  {
    label: "Condition of membership",
    value: "Owns its own plant · holds its own export licence · open to buyer audits",
  },
  {
    label: "Categories covered",
    value: "Bed linen · towels · bathrobes · table linen · mattress programmes",
  },
  {
    label: "Founding member",
    value: "Bedding mill — bed sheets, duvet covers, pillowcases, custom bedding development",
  },
  {
    label: "Founding member facility",
    value: "5,000 m² covered production area in Chuanjiang Town, Tongzhou",
  },
  { label: "Location", value: "Chuanjiang Town, Tongzhou, Nantong, Jiangsu, China" },
  { label: "Cluster", value: "Adjacent to Dieshiqiao — 6,000+ mills within 10 km" },
  { label: "Process stages, bedding mill", value: "7 — weaving through to export packing" },
  { label: "Quality control", value: "One written inspection standard across the alliance" },
  { label: "Core raw materials", value: "Xinjiang long-staple cotton, Lenzing Tencel" },
  { label: "Dyeing", value: "Reactive, eco-compliant, high colour fastness" },
  { label: "Trade terms", value: "FOB Nantong / Shanghai, CIF, DDP on request" },
  { label: "Manufacturing since", value: "2010 (founding member)" },
];

/**
 * Which member produces which category. This is the honest answer to "can one
 * factory really make all of this" — it cannot, and it does not need to.
 */
const capabilityMap = [
  {
    category: "Hotel bed sheets",
    producer: "Founding member — bedding mill, Chuanjiang",
    note: "Fabric woven to your construction sheet, reactively dyed, cut and sewn on the bedding line.",
  },
  {
    category: "Duvet covers",
    producer: "Founding member — bedding mill, Chuanjiang",
    note: "Closure type, corner detail and sizing developed with you before production.",
  },
  {
    category: "Pillowcases",
    producer: "Founding member — bedding mill, Chuanjiang",
    note: "Cut on the same construction sheet and dye lot as your sheets, so shades match.",
  },
  {
    category: "Bath, hand and face towels, bath mats",
    producer: "Towelling member",
    note: "Terry woven, dyed and hemmed at the member that runs its own towelling lines.",
  },
  {
    category: "Pool and beach towels",
    producer: "Towelling member",
    note: "Chlorine-resistant dyeing on terry or velour lines, jacquard branding available.",
  },
  {
    category: "Bathrobes",
    producer: "Bathrobe member",
    note: "Cut-and-sew plus in-house logo embroidery and custom labelling.",
  },
  {
    category: "Table linen",
    producer: "Table-linen member",
    note: "Tablecloth, napkin and runner programmes in plain and damask weaves.",
  },
  {
    category: "Mattress protectors and toppers",
    producer: "Quilting member",
    note: "Quilted panel programmes, filling specification and size matching.",
  },
];

const processStages = [
  {
    step: "01",
    title: "Weaving & fabric preparation",
    desc: "Bedding fabrics are woven to our own construction sheets. Yarn count, thread density and usable width are fixed before a single metre is cut, which is what keeps a repeat order from drifting away from the approved sample.",
  },
  {
    step: "02",
    title: "Reactive dyeing & finishing",
    desc: "Reactive dyeing under controlled shade matching, followed by pre-shrinking and heat setting. Finishing is what decides whether a sheet still measures the same after 100 commercial washes, so it is treated as a production step rather than a final touch-up.",
  },
  {
    step: "03",
    title: "Automated cutting",
    desc: "Fabric is relaxed, measured and cut on automated cutting equipment against the approved size chart. Panels are bundled by size and shade so that cut pieces from one dye lot stay together through the line.",
  },
  {
    step: "04",
    title: "Sewing & multi-needle lines",
    desc: "Multi-needle sewing lines build flat sheets, fitted sheets, duvet covers and pillowcases. Stitch density, seam type, hem depth and corner reinforcement are specified per product rather than left to operator habit.",
  },
  {
    step: "05",
    title: "Quilting & computerised lines",
    desc: "Computer-controlled quilting machinery runs mattress protectors, toppers and high-volume repeat programmes. Automated lines hold the quilt pattern and panel dimensions constant across large runs, where hand-guided quilting would drift.",
  },
  {
    step: "06",
    title: "Inspection room",
    desc: "Final inspection happens in a dedicated room, on the actual running batch. GSM, thread count, finished dimensions, shrinkage and colour consistency are measured against your purchase order — not against a golden sample that never went near the line.",
  },
  {
    step: "07",
    title: "Packing & export consolidation",
    desc: "Cartons are folded, poly-bagged, labelled and packed to your floor-ready specification, then consolidated for FOB loading with commercial invoice, packing list, certificate of origin and customs declaration prepared by the member's own export team.",
  },
];

const equipment = [
  {
    name: "Computerised quilting machinery",
    desc: "Automated quilting for mattress protectors, toppers and quilted pads — pattern and panel size held constant across long runs.",
  },
  {
    name: "Multi-needle sewing lines",
    desc: "Set up per product family, so bedding programmes do not compete for the same machines during peak season.",
  },
  {
    name: "Automated cutting equipment",
    desc: "Panels cut to the approved size chart after fabric relaxation, reducing the shrinkage surprises that show up as mismatch after the first wash.",
  },
  {
    name: "Independent inspection room",
    desc: "Physically separate from the lines, with its own measuring table and testing instruments, so inspection cannot be skipped when the schedule runs tight.",
  },
  {
    name: "Reactive dyeing & finishing line",
    desc: "Shade matching, pre-shrinking and heat setting controlled as part of the production flow.",
  },
  {
    name: "Packing & labelling line",
    desc: "Cartons, poly-bags, barcode labels and shipping marks built to your receiving specification.",
  },
];

const inspectionItems = [
  { name: "Fabric weight", detail: "GSM measured on the finished goods, not on the greige roll" },
  { name: "Thread count / yarn count", detail: "Verified against the construction sheet you approved" },
  { name: "Finished dimensions", detail: "Measured flat and after wash relaxation, with your stated tolerance" },
  { name: "Shrinkage", detail: "Wash-tested so a fitted sheet still fits the mattress after laundering" },
  { name: "Colour consistency", detail: "Checked across the batch for shade drift between dye lots" },
  { name: "Stitch & seam integrity", detail: "Stitch density, seam type and corner reinforcement against spec" },
  { name: "Labelling & packing", detail: "Care labels, barcode and shipping marks checked before the carton is sealed" },
];

const certifications = [
  {
    name: "OEKO-TEX Standard 100",
    desc: "Tested for harmful substances — the certification hospitality buyers ask for first.",
  },
  {
    name: "ISO 9001:2015",
    desc: "Quality management system covering the production and inspection process.",
  },
  {
    name: "BSCI social compliance",
    desc: "Social compliance auditing across the member factories supplying your order.",
  },
];

const factoryFaqs = [
  {
    q: "Are you a factory or a trading company?",
    a: "Both, but read the wording carefully. Nantong Linens is a FOB manufacturer alliance: the factories that make the goods are independent companies that own their own plants and hold their own export licences. We do not buy from them at arm's length and we do not add a commission — the export invoice comes from the factory that produced your order. That is the difference between a factory alliance and a sourcing agent.",
  },
  {
    q: "Can I visit the factory before placing an order?",
    a: "Yes, and we would rather you did. Every member factory accepts buyer audits and on-site visits. If you are travelling through Jiangsu we will schedule the visit around the members that produce your categories, so one trip can cover several factories. If travel is not practical, we host a live video walkthrough of the production floor and the inspection room on a scheduled call, and you can also appoint SGS, Intertek or Bureau Veritas to inspect on your behalf.",
  },
  {
    q: "Do all members have their own factory?",
    a: "Yes — owning and operating a production facility is the condition of membership, along with holding an export licence and accepting buyer audits. There is no reseller or intermediary inside the alliance, which is why we publish those three requirements rather than asking you to take the claim on trust.",
  },
  {
    q: "How can one company make bed sheets, towels, bathrobes and table linen?",
    a: "It cannot, and we do not claim it does. Each category is produced by the member that specialises in it: our founding member runs the bedding lines in Chuanjiang and makes the bed sheets, duvet covers and pillowcases, while towelling, bathrobes, table linen and mattress programmes come from the members that run those lines. The capability table above shows the split, so you can see before you enquire which factory your order would run in.",
  },
  {
    q: "Who do I contract with, and who invoices me?",
    a: "One contract, one specification sheet, one inspection standard, one set of shipping documents. The factory that produces your order is named on the contract and ships under its own export licence, so the invoice and the bill of lading trace back to the plant that actually made the goods. You are never paying an intermediary who cannot show you the line.",
  },
  {
    q: "Is the price really factory-direct?",
    a: "Yes, in the only sense that can be checked: there is no commission layer between you and the factory. We quote from the producing member's own production cost — yarn, weaving, dyeing, making-up, inspection, packing and inland transport — plus the member's margin and our export coordination. You can ask for the cost breakdown item by item, and you can compare it against a distributor quote on the same specification.",
  },
];

/**
 * Facility photography. The gallery section renders only when this array has
 * entries — drop real photos into /public/factory/ and list them here.
 * Do not substitute stock images: dated, geotagged originals are the whole point.
 */
const facilityPhotos: { src: string; alt: string }[] = [];

export default function FactoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Place",
                "@id": `${company.url}/factory#facility`,
                name: `${company.brandName} — founding member bedding mill`,
                description:
                  "5,000 m² hotel bedding production facility with in-house weaving, reactive dyeing and finishing, cutting, sewing, computerised quilting, an independent inspection room and export packing. Home of the bed sheet, duvet cover and pillowcase programmes of a Nantong hotel linen manufacturer alliance, open to buyer audits.",
                address: {
                  "@type": "PostalAddress",
                  ...(company.address.streetAddress
                    ? { streetAddress: company.address.streetAddress }
                    : {}),
                  addressLocality: company.address.addressLocality,
                  addressRegion: company.address.addressRegion,
                  addressCountry: company.address.addressCountry,
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: company.geo.latitude,
                  longitude: company.geo.longitude,
                },
                containedInPlace: { "@type": "Place", name: "Dieshiqiao home textile cluster, Nantong" },
                additionalProperty: [
                  {
                    "@type": "PropertyValue",
                    name: "Covered production area",
                    value: `${company.facility.areaSqm} m²`,
                    unitCode: "MTK",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "Open to buyer audits",
                    value: "Yes — on-site visits and third-party inspection arranged on request",
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: company.url },
                  { "@type": "ListItem", position: 2, name: "Our Factories", item: `${company.url}/factory` },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": `${company.url}/factory#faq`,
                mainEntity: factoryFaqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-gray-50 border-b border-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-blue-800/20 bg-blue-50 px-3.5 py-1 text-xs font-medium text-blue-800 uppercase tracking-wider">
            FOB Manufacturer Alliance · 工贸一体出口厂家联盟
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-tight">
            Inside the Hotel Linen Factories Behind Nantong Linens
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
            Nantong Linens is the export front of a manufacturer alliance — a group of{" "}
            <strong className="font-medium text-gray-700">
              independent FOB export factories in Nantong, China
            </strong>
            . Every member owns its own plant, runs its own production lines and holds its own
            export licence. Between them they cover the full hotel textile range; the alliance is
            what lets you order bed sheets, towels, bathrobes and table linen without going through
            a trader.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-500">
            This page documents what is actually inside those buildings — which member makes which
            category, the process stages, the machinery, the inspection routine, the materials. Not
            because a factory page is expected, but so you can check the claims before you send a
            purchase order.{" "}
            <strong className="font-medium text-gray-700">
              Every member is open to a site visit or a buyer audit
            </strong>{" "}
            — bring your own inspector if you have one.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-blue-900 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors sm:text-base"
            >
              Request a Quote or Sample
            </Link>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors sm:text-base"
            >
              Book a Live Video Walkthrough
            </a>
          </div>
        </div>
      </section>

      {/* ========== FACT SHEET ========== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Alliance at a glance</h2>
          <p className="mt-2 max-w-2xl text-gray-500">
            Every line below is a statement you can hold us to on a factory visit or in a
            third-party audit.
          </p>
          <div className="mt-8 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {allianceFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 border-b border-gray-100 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-sm text-gray-500">{fact.label}</span>
                <span className="text-sm font-medium text-gray-900 sm:text-right">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CAPABILITY MAP — which member makes what ========== */}
      <section className="bg-gray-50 border-y border-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Which member factory makes what</h2>
          <p className="mt-2 max-w-3xl text-gray-500">
            No single building makes the whole hotel range, and any supplier who tells you otherwise
            is either much larger than they describe or not being straight with you. This is the
            split as it stands today — so you know before you enquire which plant your order runs in.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Product category</th>
                    <th className="px-6 py-3 font-semibold">Produced by</th>
                    <th className="px-6 py-3 font-semibold">What that means for your order</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  {capabilityMap.map((row) => (
                    <tr key={row.category}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.category}</td>
                      <td className="px-6 py-4 text-blue-900">{row.producer}</td>
                      <td className="px-6 py-4">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-gray-100 bg-white px-6 py-4 text-sm text-gray-500">
              Member factories are introduced to you by name once your specification is fixed —
              including ahead of a pre-order audit. New members are added as categories and capacity
              grow, and each one passes the same admission checks.
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Seven process stages under one roof
          </h2>
          <p className="mt-2 max-w-3xl text-gray-500">
            The bedding member&apos;s mill in Chuanjiang runs the whole chain from weaving to export
            packing — which is why the bed sheet and duvet cover programmes are the ones we can
            control most tightly. Other members run their own comparable flows for their own
            categories. Here is the sequence your bedding order actually follows.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processStages.map((stage) => (
              <div key={stage.step} className="rounded-xl border border-gray-200 bg-white p-6">
                <span className="text-xs font-medium text-blue-800/70 uppercase tracking-wider">
                  Stage {stage.step}
                </span>
                <h3 className="mt-2 font-semibold text-gray-900">{stage.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{stage.desc}</p>
              </div>
            ))}
            <div className="rounded-xl border-2 border-blue-900 bg-blue-950 p-6 text-white">
              <h3 className="font-semibold">Why the sequence matters</h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100">
                A defect caught at cutting costs a few metres of fabric. The same defect caught
                after the container lands costs you a refurbishment schedule, a replacement
                shipment, and a room block you cannot sell. Keeping the whole flow on one site is
                what makes early detection possible — and it is the first thing to look at on a
                factory visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EQUIPMENT ========== */}
      <section className="bg-gray-50 border-y border-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Equipment in the bedding member&apos;s mill
          </h2>
          <p className="mt-2 max-w-2xl text-gray-500">
            Six areas do the work on a bedding order. Machine lists and asset photographs are
            available to buyers under NDA.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <div key={item.name} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INSPECTION ========== */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">One inspection standard, checked on the running batch</h2>
          <p className="mt-3 max-w-3xl text-blue-200/80">
            Inspection is a condition of membership, not a service one member happens to offer.
            Every factory in the alliance inspects against one written standard you approve, and the
            reference setup is the independent inspection room at the bedding member&apos;s mill —
            separate from the production floor, with its own measuring table, so an order under time
            pressure cannot quietly skip inspection. Checks run on the batch that is actually
            shipping, and you receive a photo and video report before loading.
          </p>
          <div className="mt-8 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {inspectionItems.map((item) => (
              <div
                key={item.name}
                className="border-b border-white/10 py-4 sm:flex sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="font-medium">{item.name}</span>
                <span className="mt-1 text-sm text-blue-200/70 sm:mt-0 sm:text-right">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MATERIALS + CERTIFICATIONS ========== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">What goes in</h2>
              <p className="mt-2 text-gray-500">
                Fibre choice decides how a linen performs in a commercial laundry long before
                construction does. These are the inputs we build around.
              </p>
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900">Xinjiang long-staple cotton</h3>
                  <p className="mt-1">
                    Longer staple length means fewer fibre ends at the yarn surface, which is
                    what produces the softer hand-feel and slower pilling that hospitality
                    bedding is judged on after a hundred washes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Lenzing Tencel (Austria)</h3>
                  <p className="mt-1">
                    A lyocell fibre used where moisture management and a smooth, cool hand matter
                    more than pure cotton — and increasingly where a hotel needs a documented
                    sustainability story behind the specification.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Reactive, eco-compliant dyeing</h3>
                  <p className="mt-1">
                    Reactive dyes bond to the fibre rather than sitting on it, which is what
                    delivers the colour fastness a hotel needs to survive chlorine and repeated
                    high-temperature washing without greying out.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
              <p className="mt-2 text-gray-500">
                Certificate numbers are the checkable part — ask for them and verify them
                directly with the issuing body.
              </p>
              <div className="mt-6 space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                    <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{cert.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                Copies of certificates, and the names of the issuing bodies, are provided with
                any quotation on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PHOTO GALLERY (renders only when facilityPhotos is populated) ========== */}
      {facilityPhotos.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">On the floor</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {facilityPhotos.map((photo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full rounded-xl border border-gray-200 object-cover"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== ALLIANCE STRUCTURE ========== */}
      <section className="bg-white py-14 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                A factory alliance — not a broker network
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  An alliance is only meaningful if it is hard to join. Ours is a{" "}
                  <strong className="text-gray-800">
                    FOB manufacturer alliance (工贸一体出口厂家联盟)
                  </strong>{" "}
                  — a set of independent export factories that pooled their commercial front so
                  buyers can order the full hotel range in one place. Membership is not a
                  membership fee; it is a set of conditions each factory has to meet and keep
                  meeting.
                </p>
                <p>
                  The founding member runs the bedding lines in Chuanjiang — flat sheets, fitted
                  sheets, duvet covers and pillowcases, including custom development of sizes,
                  constructions and closure types. It is one factory among several, not the whole
                  business, and we would rather say that plainly than pretend a single 5,000 m²
                  building produces ten categories.
                </p>
                <p>
                  What we are not: a sourcing agent, a broker, or a trading company that shops your
                  order around and adds a commission. Nobody in the alliance earns from choosing
                  between competing factories, because nobody in the alliance is choosing — each
                  order runs in the member that makes that category, and that member is named on
                  your contract.
                </p>
                <p>
                  The commercial side is deliberately centralised even though ownership is not.
                  You get one contract, one specification sheet per programme, one inspection
                  standard and one set of shipping documents. The factory that makes your goods
                  ships them under its own export licence, so the invoice and the bill of lading
                  trace back to the plant that actually produced them.
                </p>
                <p>
                  More factories join as the categories and the volumes grow. Each new member passes
                  the same admission checks before it takes an order, and is introduced to buyers by
                  name once a specification is fixed.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-lg font-semibold text-gray-900">Visit or audit the facility</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Buyers are welcome to audit — this is the part of the site we most want you to
                test. We can host a live video walkthrough across a production floor and inspection
                room on a scheduled call, with no travel required, or arrange an in-person visit
                if you or your sourcing team are travelling through Jiangsu. A single visit can
                cover the members producing your particular categories, so one trip can take in
                bedding, towelling and making-up in the same week. Third-party inspections (SGS,
                Intertek, Bureau Veritas) are arranged on request and usually take two to three
                days to schedule.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-blue-800">•</span>
                  <span>Visit in person — we schedule the members that make your categories</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-800">•</span>
                  <span>Live video walkthrough — production floor and inspection room</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-800">•</span>
                  <span>Third-party inspection — SGS, Intertek or Bureau Veritas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-800">•</span>
                  <span>Bring your own inspector, or send us your audit checklist in advance</span>
                </li>
              </ul>

              <h3 className="mt-8 text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Production base
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{company.productionBase}</p>

              <h3 className="mt-6 text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Contact
              </h3>
              <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-gray-600">
                {napLines().map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
              <div className="mt-4 space-y-0.5 text-sm text-gray-600">
                <div>
                  <span className="text-gray-500">WhatsApp: </span>
                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-800 hover:underline"
                  >
                    {company.whatsapp}
                  </a>
                </div>
                <div>
                  <span className="text-gray-500">Email: </span>
                  <a href={`mailto:${company.email}`} className="font-medium text-blue-800 hover:underline">
                    {company.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Factory, trading company, or agent?
          </h2>
          <p className="mt-2 text-center text-gray-500">
            The questions buyers ask before they book a flight or place a first order
          </p>
          <div className="mt-10 space-y-3">
            {factoryFaqs.map((faq) => (
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

      {/* ========== CTA ========== */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Send us your specification</h2>
          <p className="mt-3 text-blue-200/80">
            Tell us the product, the specification and the volume. We will come back with a
            factory-direct price, a lead time, the name of the member factory that would run it,
            and the sample arrangement — then you can decide whether to audit before you commit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Submit an RFQ
            </Link>
            <Link
              href="/wholesale"
              className="inline-flex items-center rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Wholesale &amp; OEM Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
