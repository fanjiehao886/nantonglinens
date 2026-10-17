import { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { GuideCTA } from "@/components/GuideCTA";

export const metadata: Metadata = {
  title: "Container Loading for Hotel Bedding: 20GP, 40GP or 40HQ",
  description:
    "How many bed sets fit in a 20GP, 40GP or 40HQ container, how to calculate CBM from your carton size, and when a small order should go LCL instead.",
  keywords:
    "container loading hotel bedding, how many bed sets in a 40HQ, 40HQ container capacity hotel linen, 20GP vs 40GP vs 40HQ, cbm calculation hotel bedding, lcl or fcl hotel linen, hotel bedding shipping volume",
  alternates: { canonical: "/guides/container-loading-hotel-bedding-volume-weight" },
  openGraph: {
    title: "Container Loading for Hotel Bedding — 20GP, 40GP or 40HQ",
    description:
      "Hotel bedding is volume-limited, not weight-limited. Here is the arithmetic that decides your box, your carton count and your landed cost per set.",
  },
};

const boxes = [
  {
    box: "20GP (20 ft standard)",
    internal: "5.90 × 2.35 × 2.39 m",
    nominal: "33 CBM",
    usable: "27–30 CBM",
    payload: "~28,000 kg",
    use: "Dense cargo, or a trial order that genuinely fills it",
  },
  {
    box: "40GP (40 ft standard)",
    internal: "12.03 × 2.35 × 2.39 m",
    nominal: "67 CBM",
    usable: "56–60 CBM",
    payload: "~26,500 kg",
    use: "Mid-volume orders when no high cube is available",
  },
  {
    box: "40HQ (40 ft high cube)",
    internal: "12.03 × 2.35 × 2.70 m",
    nominal: "76 CBM",
    usable: "64–70 CBM",
    payload: "~26,500 kg",
    use: "Hotel bedding — the default box, and usually the cheapest per set",
  },
];

const packing = [
  {
    format: "4-piece set, poly bag, tight fold",
    cbm: "0.012–0.015",
    hq: "4,400–5,500",
    gp20: "1,900–2,300",
  },
  {
    format: "4-piece set, individual retail carton",
    cbm: "0.018–0.025",
    hq: "2,600–3,700",
    gp20: "1,100–1,550",
  },
  {
    format: "Duvet set with filling, vacuum-packed",
    cbm: "0.025–0.035",
    hq: "1,900–2,600",
    gp20: "800–1,100",
  },
  {
    format: "Duvet set with filling, not compressed",
    cbm: "0.045–0.060",
    hq: "1,100–1,450",
    gp20: "470–620",
  },
  {
    format: "Towels, baled and strapped",
    cbm: "0.004–0.008",
    hq: "8,000–16,000",
    gp20: "3,500–7,000",
  },
];

const orderSizing = [
  { order: "100 sets", volume: "1.2–2.5 CBM", route: "LCL — nowhere near a container" },
  { order: "1,000 sets", volume: "12–25 CBM", route: "LCL at the low end, 20GP once past ~15 CBM" },
  { order: "2,500 sets", volume: "30–62 CBM", route: "20GP if packing is tight, otherwise 40GP" },
  { order: "4,000 sets", volume: "48–100 CBM", route: "40HQ, or two 40HQs at the light end of packing" },
];

const faqs = [
  {
    q: "How many bed sheet sets fit in a 40HQ container?",
    a: "For a standard 4-piece set in a poly bag with a tight fold, plan on 4,400–5,500 sets in a 40HQ, assuming roughly 66 CBM of usable volume. If each set is individually boxed for retail, that drops to 2,600–3,700. The number is governed almost entirely by your carton size, not by the weight of the goods, so the only reliable answer comes from measuring one packed carton.",
  },
  {
    q: "How many sets fit in a 20GP container?",
    a: "A 20GP holds roughly 27–30 CBM in practice, which is about 1,900–2,300 sets of tightly packed 4-piece bedding, or 470–620 sets if you are shipping duvet sets with filling that has not been compressed. A 20GP is rarely the right box for hotel bedding unless the order is small enough that a 40HQ would sail half empty.",
  },
  {
    q: "Should a 100-set order go LCL or in a container?",
    a: "LCL, without question. One hundred 4-piece sets occupy roughly 1.2–2.5 CBM, which is under 5% of a 20GP. Booking a container for that volume means paying for air. The one thing to settle before you book LCL is who pays the destination charges — the CFS handling, documentation and unstuffing fees are usually billed to the consignee and often exceed the ocean freight itself.",
  },
  {
    q: "Is hotel bedding limited by weight or by volume?",
    a: "Volume, almost always. Packed hotel bedding runs roughly 100–200 kg per CBM, so a 40HQ loaded to 68 CBM carries somewhere around 7–13 tonnes — well under the box's 26-tonne payload. You will run out of space long before you run out of weight allowance. The exception is very dense fabric sold by the metre, or heavy-weight terry, where a full box can approach the weight ceiling.",
  },
  {
    q: "What is the minimum billable volume for LCL?",
    a: "Most consolidators apply a minimum of 1 CBM per shipment, and some apply 2 CBM on certain lanes. A 0.6 CBM shipment is therefore billed as 1 CBM. Rates are quoted per CBM or per weight tonne, whichever is greater, using a 1:1,000 kg conversion, so volume normally decides the charge for bedding.",
  },
  {
    q: "How do I stop hotel bedding arriving damp or mouldy?",
    a: "Container rain is the main risk: warm moist air inside the box condenses on the steel roof as the ship moves through cold nights, then drips onto the cargo. Counter it with container desiccant bags rated for the voyage length, a moisture barrier on the floor, and cartons that are confirmed dry before loading. Never load cartons straight off a humid warehouse floor, and never load in the rain.",
  },
];

export default function ContainerLoadingGuide() {
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
            <span className="text-gray-600">Container Loading for Hotel Bedding</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">Logistics Guide</span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Container Loading for Hotel Bedding: 20GP, 40GP or 40HQ
          </h1>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Hotel bedding is a light, bulky cargo. That single fact decides almost everything about your freight
            cost — and it is the reason so many first orders are quoted against the wrong box. Here is the
            arithmetic to run before you accept a volume estimate from anyone, including us.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
            <span>Updated October 2026</span>
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

          <h2>The three boxes, and what each one actually holds</h2>
          <p>
            Nominal container volume is a theoretical figure measured wall to wall with nothing inside. Real
            loading loses 10–15% to carton shape, roof curvature, door frames and the gap you leave for
            ventilation and bracing. Plan against the usable column, not the nominal one.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Box</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Internal L×W×H</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Nominal</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Usable</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Max payload</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {boxes.map((row) => (
                  <tr key={row.box} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.box}</td>
                    <td className="px-4 py-3 text-gray-600">{row.internal}</td>
                    <td className="px-4 py-3 text-gray-600">{row.nominal}</td>
                    <td className="px-4 py-3 text-gray-600">{row.usable}</td>
                    <td className="px-4 py-3 text-gray-600">{row.payload}</td>
                    <td className="px-4 py-3 text-gray-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 italic">
            Internal dimensions follow the ISO 668 series and vary by a few centimetres between makers. Payload is
            the box&rsquo;s own rating; the figure that binds in practice is usually the carrier&rsquo;s route limit
            or the road limit at destination, which can be as low as 22 tonnes on some US inland lanes.
          </p>
          <p>
            For bedding the choice is simpler than the table suggests. A 20GP carries almost the same weight as a
            40HQ but less than half the volume, so it is the wrong tool for a light cargo. A 40HQ costs roughly
            10–15% more in ocean freight than a 40GP and gives you about 13% more cubic metres — which is why it
            wins on cost per set almost every time.
          </p>

          <h2>Why bedding never hits the weight ceiling</h2>
          <p>
            Packed hotel bedding runs at roughly <strong>100–200 kg per cubic metre</strong>. A 40HQ filled to
            68 CBM therefore weighs somewhere around 7–13 tonnes against a 26-tonne payload allowance. You would
            need to more than double the density before weight became the constraint.
          </p>
          <p>
            This matters because it changes which number you optimise. Buyers who come from hardware or ceramics
            instinctively ask &ldquo;how many tonnes can it take&rdquo;. The question that actually governs your
            cost is &ldquo;how many cubic metres does my packaging occupy, and can I reduce it&rdquo;. A 20%
            reduction in carton volume is a 20% reduction in ocean freight per set — no negotiation with the
            carrier required.
          </p>

          <GuideCTA
            ctaLocation="guide_container_mid"
            category="Bed Sheets"
            heading="Send us one carton measurement"
            secondaryHref="/wholesale"
            secondaryLabel="See Wholesale Programmes"
          />

          <h2>How to calculate what your order loads</h2>
          <p>
            The arithmetic is three lines and you should do it yourself rather than accept a rounded figure:
          </p>
          <ol>
            <li>
              <strong>Measure one packed carton</strong> in metres — not the flat-packed size, the size it will
              actually be when it leaves the factory.
            </li>
            <li>
              <strong>Multiply L × W × H</strong> to get CBM per carton. A 50 × 40 × 30 cm carton is
              0.5 × 0.4 × 0.3 = <strong>0.06 CBM</strong>.
            </li>
            <li>
              <strong>Divide usable volume by carton volume.</strong> For a 40HQ, 66 CBM ÷ 0.06 = 1,100 cartons.
              Multiply by sets per carton to get the set count.
            </li>
          </ol>
          <p>
            The variable that trips people up is sets per carton, because it swings by a factor of five depending
            on how the goods are packed. These are the ranges we see on hotel orders:
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Packing format</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">CBM per set</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Sets in 40HQ (66 CBM)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Sets in 20GP (28 CBM)</th>
                </tr>
              </thead>
              <tbody>
                {packing.map((row) => (
                  <tr key={row.format} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.format}</td>
                    <td className="px-4 py-3 text-gray-600">{row.cbm}</td>
                    <td className="px-4 py-3 text-gray-600">{row.hq}</td>
                    <td className="px-4 py-3 text-gray-600">{row.gp20}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 italic">
            Ranges reflect the spread across cotton and poly-cotton constructions, size mixes and fold styles. Treat
            them as a planning band, then replace them with your own measured carton.
          </p>

          <h2>Sizing a real order</h2>
          <p>
            Once you have CBM per set, order size stops being a guess. This is how the common order sizes land:
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Order</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Volume</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">What it should ship in</th>
                </tr>
              </thead>
              <tbody>
                {orderSizing.map((row) => (
                  <tr key={row.order} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.order}</td>
                    <td className="px-4 py-3 text-gray-600">{row.volume}</td>
                    <td className="px-4 py-3 text-gray-600">{row.route}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Small orders: where LCL wins and where it quietly loses</h2>
          <p>
            A hundred 4-piece sets is roughly 1.2–2.5 CBM. That is a few percent of a 20GP, so booking a container
            is straightforwardly wasteful. LCL is the right answer — with two caveats that catch first-time
            importers:
          </p>
          <ul>
            <li>
              <strong>The minimum charge.</strong> Most consolidators bill a minimum of 1 CBM, some 2 CBM on
              certain lanes. A 0.6 CBM shipment is charged as 1 CBM, so the effective rate per CBM rises sharply
              below that threshold.
            </li>
            <li>
              <strong>Destination charges.</strong> The ocean freight for LCL often looks cheap because the
              expensive part is billed at the other end — CFS handling, documentation, unstuffing. These are
              normally payable by the consignee. Agree in writing who pays before you quote your customer a
              delivered price, or you will be the one absorbing the argument.
            </li>
          </ul>
          <p>
            The break-even between LCL and a 20GP generally sits somewhere between <strong>12 and 18 CBM</strong>,
            depending on the lane and how heavy the destination charges are. Below 12 CBM, LCL. Above 18 CBM, the
            container usually wins on total landed cost even if the ocean freight line looks higher.
          </p>

          <h2>Three things that damage a bedding container</h2>
          <p>
            Bedding is not fragile, but it is vulnerable in three specific ways. All three are cheap to prevent and
            expensive to discover on arrival.
          </p>
          <ol>
            <li>
              <strong>Container rain.</strong> Warm, moist air inside the box condenses on the steel roof as the
              ship passes through cold nights, then drips onto the top layer of cartons. Over a three-week voyage
              that is enough to produce mould on the outer wrap and, in bad cases, into the goods. Counter it with
              container desiccant bags rated for the voyage length, a moisture barrier on the floor, and cartons
              that are confirmed dry at loading. Do not load cartons straight off a humid warehouse floor, and do
              not load in the rain.
            </li>
            <li>
              <strong>Carton compression.</strong> Bedding cartons are strong vertically and weak when the stack
              gets tall. If the bottom layer crushes, the stack leans, and the goods arrive creased. Check the
              carton&rsquo;s compression rating against the stack height you plan, and specify interlocking stacks
              rather than straight columns for tall loads.
            </li>
            <li>
              <strong>Weight, in the one case where it does bind.</strong> Fabric sold by the metre or heavy terry
              can push a 40HQ toward its limit. If your order is dense rather than bulky, get the gross weight from
              the factory and confirm the carrier&rsquo;s route limit before booking — overweight boxes are refused
              at the gate and the rework is entirely yours.
            </li>
          </ol>

          <h2>What to send the factory before they load</h2>
          <p>
            A loading instruction prevents most of the above. It is five lines, and it costs nothing:
          </p>
          <ul>
            <li>Total cartons, total CBM and total gross weight — calculated by you, not estimated by them.</li>
            <li>Stack height limit in cartons, and whether stacks must interlock.</li>
            <li>Desiccant quantity and placement — bags on the floor line and hung along the side walls.</li>
            <li>Floor-loaded or palletised, and if palletised, the pallet footprint and height.</li>
            <li>Loading photos of the finished container, inside, before the doors close.</li>
          </ul>
          <p>
            That last line is the one buyers forget. A photo of a loaded container tells you more about how your
            goods will arrive than any promise in an email.
          </p>

          <h2>Mixed loads: the way to fill a box without over-ordering</h2>
          <p>
            The awkward middle — an order too big for LCL, too small to fill a 40HQ — is where a multi-category
            load earns its keep. Towels bale tightly and fill the floor gap under bedding cartons; bathrobes and
            table linen top off a part-loaded box. On a hotel opening order, combining bedding, towelling and
            dining linen into one container usually converts a half-empty 40HQ into a full one at the same ocean
            freight.
          </p>
          <p>
            This is the practical reason a manufacturer alliance is useful rather than a marketing construct: each
            member factory makes its own category on its own line, and the consolidated order still ships under{" "}
            <strong>one contract · one spec sheet · one inspection standard · one set of shipping documents</strong>.
            You are not coordinating four suppliers and four loading dates — you are filling one box.
          </p>

          <h2>Summary — measure one carton before you accept a volume estimate</h2>
          <p>
            Ask for a packed carton, measure it, and do the three lines of arithmetic yourself. Everything else —
            which box, how many sets, what you pay per set in freight, whether a 100-set trial should even be a
            container — falls out of that one number. Anyone quoting you a container plan without asking for your
            carton size is guessing, and the guess is almost always optimistic.
          </p>

          {/* Related guides — internal links */}
          <div className="not-prose mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900">Keep Reading — Related Buying Guides</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Buying Hotel Linens Direct from a Chinese Factory", href: "/guides/buying-hotel-linens-direct-from-chinese-factory" },
                { title: "Hotel Bedding Thread Count Guide (200–1000 TC)", href: "/guides/hotel-bedding-thread-count" },
                { title: "Hotel Towel Quality Guide: Cotton Grades & QC Checklist", href: "/guides/hotel-towel-quality-guide" },
                { title: "Wholesale Hotel Linen Programmes & Factory-Direct Pricing", href: "/wholesale" },
              ].map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-800"
                >
                  {g.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Tell Us Your Order Size, Get a Loading Plan
          </h2>
          <p className="mt-3 text-blue-200/80">
            Send one packed carton measurement and your set count. A member factory of our alliance will come back
            with the CBM, the carton count, the right box and a freight indication within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <TrackedLink
              ctaName="guide_bottom_quote"
              eventParams={{ cta_location: "guide_container_loading" }}
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              ctaName="guide_view_wholesale"
              eventParams={{ cta_location: "guide_container_loading" }}
              href="/wholesale"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              See Wholesale Programmes
            </TrackedLink>
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
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
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
            headline: "Container Loading for Hotel Bedding: 20GP, 40GP or 40HQ",
            description:
              "How many bed sets fit in a 20GP, 40GP or 40HQ container, how to calculate CBM from your carton size, and when a small order should go LCL instead.",
            author: { "@type": "Organization", name: "Nantong Linens" },
            publisher: {
              "@type": "Organization",
              name: "Nantong Linens",
              logo: { "@type": "ImageObject", url: "https://www.nantonglinens.com/logo.png" },
            },
            datePublished: "2026-10-17",
            dateModified: "2026-10-17",
            url: "https://www.nantonglinens.com/guides/container-loading-hotel-bedding-volume-weight",
          }),
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nantonglinens.com" },
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.nantonglinens.com/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Container Loading for Hotel Bedding",
                item: "https://www.nantonglinens.com/guides/container-loading-hotel-bedding-volume-weight",
              },
            ],
          }),
        }}
      />
    </>
  );
}
