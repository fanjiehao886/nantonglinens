import { Metadata } from "next";
import Link from "next/link";
import { company, napLines } from "@/lib/company";

export const metadata: Metadata = {
  title: "Inside Our Hotel Linen Factory in Nantong, China",
  description:
    "Inside our 5,000 m² hotel linen production facility in Chuanjiang, Nantong: weaving, reactive dyeing, cutting, sewing, computerised quilting, in-house inspection and export packing. Manufacturer and trading company — factory-direct wholesale, OEM and private label.",
  keywords:
    "hotel linen factory China, hotel linen manufacturer Nantong, hotel bedding factory tour, textile factory audit China, hotel towel manufacturer China, OEKO-TEX hotel linen factory",
  alternates: { canonical: "/factory" },
  openGraph: {
    title: "Inside Our Hotel Linen Factory in Nantong, China | Nantong Linens",
    description:
      "A walk-through of our own 5,000 m² hotel linen production facility in Chuanjiang, Nantong — seven process stages in-house, an independent inspection room, and an open invitation to audit.",
  },
};

/** Facts stated on this page. Every one of them is checkable at the facility. */
const facilityFacts = [
  { label: "Facility area", value: "5,000 m² covered production area" },
  { label: "Location", value: "Chuanjiang Town, Tongzhou, Nantong, Jiangsu" },
  { label: "Cluster", value: "Adjacent to Dieshiqiao — 6,000+ mills within 10 km" },
  { label: "Process stages in-house", value: "7 — weaving to export packing" },
  { label: "Quality control", value: "Independent inspection room, per running batch" },
  { label: "Core raw materials", value: "Xinjiang long-staple cotton, Lenzing Tencel" },
  { label: "Dyeing", value: "Reactive, eco-compliant, high colour fastness" },
  { label: "Trade terms", value: "FOB Nantong / Shanghai, DDP on request" },
  { label: "Operating since", value: "2010" },
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
    desc: "Multi-needle sewing lines build flat sheets, fitted sheets, duvet covers, pillowcases, bathrobes and table linen. Stitch density, seam type, hem depth and corner reinforcement are specified per product rather than left to operator habit.",
  },
  {
    step: "05",
    title: "Quilting & computerised lines",
    desc: "Computer-controlled quilting machinery runs mattress protectors, toppers and high-volume repeat programmes. Automated lines hold the quilt pattern and panel dimensions constant across large runs, where hand-guided quilting would drift.",
  },
  {
    step: "06",
    title: "In-house inspection room",
    desc: "Final inspection happens in our own dedicated room, on the actual running batch. GSM, thread count, finished dimensions, shrinkage and colour consistency are measured against your purchase order — not against a golden sample that never went near the line.",
  },
  {
    step: "07",
    title: "Packing & export consolidation",
    desc: "Cartons are folded, poly-bagged, labelled and packed to your floor-ready specification, then consolidated for FOB loading with commercial invoice, packing list, certificate of origin and customs declaration prepared by our own team.",
  },
];

const equipment = [
  {
    name: "Computerised quilting machinery",
    desc: "Automated quilting for mattress protectors, toppers and quilted pads — pattern and panel size held constant across long runs.",
  },
  {
    name: "Multi-needle sewing lines",
    desc: "Set up per product family, so bedding and towel programs do not compete for the same machines during peak season.",
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
    desc: "Social compliance auditing across our own facility and the cluster mills we draw on.",
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
                name: `${company.brandName} Production Facility`,
                description:
                  "5,000 m² hotel linen production facility with in-house weaving, reactive dyeing and finishing, cutting, sewing, computerised quilting, independent inspection and export packing.",
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
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: company.url },
                  { "@type": "ListItem", position: 2, name: "Factory", item: `${company.url}/factory` },
                ],
              },
            ],
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-gray-50 border-b border-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-blue-800/20 bg-blue-50 px-3.5 py-1 text-xs font-medium text-blue-800 uppercase tracking-wider">
            Manufacturer &amp; Trading Company
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-tight">
            Inside Our Hotel Linen Factory in Nantong
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
            Our production facility sits in Chuanjiang Town, Tongzhou — a few minutes from the
            Dieshiqiao home textile market, where more than 6,000 mills operate inside a handful
            of square kilometres. We own the line your order runs on, and we own the export
            paperwork that follows it.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-500">
            This page documents what is actually inside the building — the process stages, the
            machinery, the inspection routine, the materials. Not because a factory page is
            expected, but so you can check the claims before you send a purchase order. If
            anything here does not match what you need verified, tell us and we will arrange the
            evidence: dated photographs, a live video walkthrough, or a third-party audit.
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
          <h2 className="text-2xl font-bold text-gray-900">Facility at a glance</h2>
          <p className="mt-2 max-w-2xl text-gray-500">
            Every line below is a statement you can hold us to on a factory visit or in a
            third-party audit.
          </p>
          <div className="mt-8 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {facilityFacts.map((fact) => (
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

      {/* ========== PROCESS ========== */}
      <section className="bg-gray-50 border-y border-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Seven process stages, one roof</h2>
          <p className="mt-2 max-w-3xl text-gray-500">
            The reason an order stays on spec is not quality control at the end — it is that each
            stage is controlled where it happens. Here is the flow your order actually follows.
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
                shipment, and a room block you cannot sell. Keeping all seven stages under one
                roof is what makes early detection possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EQUIPMENT ========== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Equipment on the floor</h2>
          <p className="mt-2 max-w-2xl text-gray-500">
            Six areas do the work. Machine lists and asset photographs are available to buyers
            under NDA.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <div key={item.name} className="rounded-xl border border-gray-100 p-6">
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
          <h2 className="text-2xl font-bold">The independent inspection room</h2>
          <p className="mt-3 max-w-3xl text-blue-200/80">
            This is the part buyers care about most, so here is exactly what gets measured. The
            room is separate from the production floor and has its own measuring table, which
            means an order under time pressure cannot quietly skip inspection. Checks run on the
            batch that is actually shipping, and you receive a photo and video report before
            loading.
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

      {/* ========== MATERIALS ========== */}
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

      {/* ========== WHAT WE MAKE / CLUSTER ========== */}
      <section className="bg-white py-14 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Our own lines — and the cluster behind them
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  We are a manufacturer and trading company, and we say so plainly. Core bedding
                  programs run on our own lines. For categories or volumes we do not run
                  in-house, we draw on long-standing mills inside the Dieshiqiao cluster that we
                  have worked with for years.
                </p>
                <p>
                  Wherever an order is produced, the inspection routine does not change. It still
                  runs through our own inspection room against your purchase order, and you still
                  receive the same photo and video report before loading. One supplier, one point
                  of responsibility from yarn to bill of lading.
                </p>
                <p>
                  That is the honest version of the arrangement, and it is also why we can quote
                  across a wider range than a single-product mill — without adding an invisible
                  commission layer between you and the line.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-lg font-semibold text-gray-900">Visit or audit the facility</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Buyers are welcome to audit. We can host a live video walkthrough across the
                production floor and inspection room on a scheduled call — no travel required —
                or arrange an in-person visit if you or your sourcing team are travelling through
                Jiangsu. Third-party inspections (SGS, Intertek, Bureau Veritas) are arranged on
                request and usually take two to three days to schedule.
              </p>

              <h3 className="mt-8 text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Facility address
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

      {/* ========== CTA ========== */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Send us your specification</h2>
          <p className="mt-3 text-blue-200/80">
            Tell us the product, the specification and the volume. We will come back with a
            factory-direct price, a lead time, and the sample arrangement — then you can decide
            whether to audit before you commit.
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
