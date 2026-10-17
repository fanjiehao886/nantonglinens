import { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { GuideCTA } from "@/components/GuideCTA";

export const metadata: Metadata = {
  title: "Buying Hotel Linens Direct from a Chinese Factory: Cost & How to Verify",
  description:
    "What buying hotel linens factory-direct actually changes in your landed cost, the four things it asks of you, and how to confirm the party quoting you owns the production line.",
  keywords:
    "buy hotel linens direct from china, hotel linen factory direct, hotel linen direct manufacturer, chinese hotel linen factory, hotel linen trading company vs factory, hotel linen factory audit, factory direct hotel bedding",
  alternates: { canonical: "/guides/buying-hotel-linens-direct-from-chinese-factory" },
  openGraph: {
    title: "Buying Hotel Linens Direct from a Chinese Factory — Cost & Verification",
    description:
      "Factory-direct is the most overused phrase in the trade. Here is what it changes in your price, what it asks of you, and how to confirm the supplier actually owns the line.",
  },
};

const channels = [
  {
    channel: "Factory-direct (FOB)",
    contractWith: "The producing factory, or the export arm of a manufacturer alliance",
    onTop: "Nothing beyond the factory cost and its normal export margin",
    suits: "Buyers who can write a spec sheet and arrange their own inspection",
  },
  {
    channel: "China trading company (FOB)",
    contractWith: "An exporter that sub-contracts the production to third-party mills",
    onTop: "Roughly 5–15% trading margin, plus a higher risk of spec drift between quote and shipment",
    suits: "Buyers juggling many unrelated SKUs who want a single point of contact",
  },
  {
    channel: "Importer / wholesaler (DDP)",
    contractWith: "A local distributor that already holds stock in your market",
    onTop: "Trading margin + freight + duty + local handling — the full chain, priced in",
    suits: "Small buyers who need stock this month and cannot import directly",
  },
];

const gates = [
  {
    gate: "Owns and operates its own production facility",
    check:
      "Ask for the business licence and confirm the registered scope includes manufacturing — not just trading or import/export. Then ask for a live video walkthrough of the line running your reference sample.",
  },
  {
    gate: "Holds its own export licence and can invoice FOB in its own name",
    check:
      "The company named on the FOB invoice must be the same company that owns the line. If the invoice comes from a different entity than the one claiming to be the factory, you are buying through a trader.",
  },
  {
    gate: "Accepts buyer audits and on-site visits",
    check:
      "A factory that owns its line will welcome a visit or an unannounced third-party audit. A trader working out of an office will deflect, reschedule, or insist on meeting at a hotel.",
  },
  {
    gate: "Works to a written specification and inspection standard",
    check:
      "Ask to see the written spec sheet and the inspection standard used for your product. If quality is promised verbally and never written, it cannot be enforced.",
  },
];

const orderBrief = [
  "Product and construction — e.g. sateen duvet cover, 300 TC single-ply, 100% combed cotton",
  "Dimensions and tolerance — e.g. King 260×240 cm, ±2%",
  "Weight or density where relevant — e.g. 600 GSM measured after 5 washes, ±5%",
  "Colour and colourfastness — e.g. white, AATCC Grade 3–4 minimum after 20 washes",
  "Finish and decoration — e.g. hidden zip closure, corner ties, double-stitched hems",
  "Packaging and labelling — e.g. poly bag + carton of 200, private-label woven label",
  "Order quantity and the per-colour split — this is the figure that decides the MOQ you are actually quoted",
  "Target ship window and incoterm — e.g. FOB Nantong, ready to ship within 35 days of deposit",
];

const faqs = [
  {
    q: "Is it actually cheaper to buy hotel linens directly from a Chinese factory?",
    a: "On a comparable specification, yes — buying direct removes at least one trading layer from the price. What it does not remove is materials, labour, finishing, inspection, packaging, freight and duty, which are the same whoever you buy through. The saving comes from the layer you skip, not from the product being made more cheaply.",
  },
  {
    q: "How do I know a supplier is really the factory and not a trading company?",
    a: "Check three things: the registered business scope on the licence includes manufacturing; the company named on the FOB invoice is the same company that owns the line; and the supplier welcomes a factory visit or an unannounced third-party audit. A factory will pass all three, a trader will usually fail at least one.",
  },
  {
    q: "What is the minimum order to buy direct from a factory?",
    a: "It depends on the product and, crucially, on the per-colour or per-spec split. A factory can often start at 50–200 pieces per specification, but the minimum is set per colour and per size combination, not per order. Always ask for the per-colour minimum, because that is the number that actually governs whether your order can run.",
  },
  {
    q: "Do I have to visit the factory in China to buy direct safely?",
    a: "No, but you should build in a check you can rely on remotely. A third-party pre-shipment inspection against a written AQL standard, plus a live video walkthrough of the line, covers most of what a visit would tell you. If the order value justifies it, an on-site audit before production is the strongest safeguard.",
  },
  {
    q: "What payment terms should I expect on a first direct order?",
    a: "The common structure is a deposit with the order and the balance before shipment — typically 30% / 70% — or an L/C at sight for larger values. Treat a demand for full payment up front on a first order as a warning sign, and ask for the balance to be tied to a passed pre-shipment inspection.",
  },
];

export default function BuyingDirectFromFactoryGuide() {
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
            <span className="text-gray-600">Buying Direct from a Chinese Factory</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">Buying Guide</span>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Buying Hotel Linens Direct from a Chinese Factory
          </h1>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            &ldquo;Factory-direct&rdquo; is the most overused phrase in the trade — every second email claims it.
            The useful question is not whether you <em>can</em> buy direct, but what it changes in your landed cost,
            what it asks of you as a buyer, and how to confirm that the party quoting you actually owns the line.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
            <span>Updated October 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>9 min read</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Based in Dieshiqiao, China</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <h2>What factory-direct changes — and what it does not</h2>
          <p>
            Buying direct removes a <strong>layer</strong> from the price. It does not remove the product cost.
            Materials, labour, finishing, inspection, packaging, freight and duty are the same whoever signs the
            invoice. What you skip is the margin that sits between the line and you:
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Channel</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Who you contract with</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">What sits on top of the factory cost</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Suits</th>
                </tr>
              </thead>
              <tbody>
                {channels.map((row) => (
                  <tr key={row.channel} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.channel}</td>
                    <td className="px-4 py-3 text-gray-600">{row.contractWith}</td>
                    <td className="px-4 py-3 text-gray-600">{row.onTop}</td>
                    <td className="px-4 py-3 text-gray-600">{row.suits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 italic">
            Uplift figures are indicative ranges seen across quotes on comparable hotel specifications; they are not
            published price lists. The gap widens as the specification gets more specific and the buyer more capable.
          </p>

          <h2>The four things buying direct asks of you</h2>
          <p>
            Factory-direct is not only a pricing choice — it moves work from the intermediary onto you. Buyers who
            are disappointed after going direct almost always underestimated one of these four:
          </p>
          <ol>
            <li>
              <strong>A spec sheet precise enough to quote.</strong> A trading company absorbs vague briefs and
              asks questions later. A factory quotes what you write. If your brief says &ldquo;good quality white
              sheets&rdquo;, you will get three different products from three mills. Vague input is the single
              biggest cause of disputes on direct orders.
            </li>
            <li>
              <strong>Accepting a per-specification minimum.</strong> The minimum is set per colour and per size
              combination, not per order — commonly 50–200 pieces. Splitting one order across six colours can
              quietly multiply your commitment.
            </li>
            <li>
              <strong>Working on deposit terms.</strong> Expect a deposit with the order and the balance before
              shipment — typically 30% / 70%, or an L/C at sight for larger values. A factory that owns its line
              prices its risk into these terms; so should you.
            </li>
            <li>
              <strong>Owning your quality assurance.</strong> The intermediary you removed was also doing a
              screening job you no longer get for free. Budget for a third-party pre-shipment inspection — it is
              the cheapest insurance on the whole order.
            </li>
          </ol>

          <GuideCTA
            ctaLocation="guide_buy_direct_mid"
            category="Bed Sheets"
            heading="Have a spec ready?"
            secondaryHref="/wholesale"
            secondaryLabel="See Wholesale Programmes"
          />

          <h2>When factory-direct is the wrong call</h2>
          <p>
            Going direct is not automatically better. It is the wrong choice when your need is small, fast, or
            wide rather than deep:
          </p>
          <ul>
            <li>You need twenty pieces of one item delivered next week — a local wholesaler holding stock wins.</li>
            <li>
              You want one invoice across dozens of unrelated SKUs with no appetite for specification work — a
              trading company genuinely earns its margin there.
            </li>
            <li>
              You have no route to inspect before shipment and no capacity to absorb a container — the layers you
              would remove are also doing work you still need done.
            </li>
          </ul>
          <p>
            The honest rule: buy direct when you are prepared to act like a manufacturer&rsquo;s customer —
            specify precisely, commit to a real quantity, and check the goods. Otherwise the intermediary is not
            an inefficiency, it is a service.
          </p>

          <h2>How to confirm the supplier actually owns the line</h2>
          <p>
            This is the step buyers skip, and it is the one that separates a real factory from a trader wearing a
            factory&rsquo;s name. Four checks settle it, and all four are things a genuine manufacturer will pass
            without hesitation:
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">What to confirm</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">How you check it</th>
                </tr>
              </thead>
              <tbody>
                {gates.map((row) => (
                  <tr key={row.gate} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.gate}</td>
                    <td className="px-4 py-3 text-gray-600">{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            These four gates are exactly the membership terms of our own{" "}
            <Link href="/factory" className="text-blue-800 hover:underline font-medium">
              manufacturer alliance
            </Link>{" "}
            — an alliance of independent FOB export factories in Nantong, where every member owns and operates its
            own production facility, holds its own export licence and can invoice FOB in its own name, accepts
            buyer audits and on-site visits, and works to the alliance&rsquo;s written specification and inspection
            standard. We publish them because a buyer can check them, which is the point.
          </p>
          <p>
            Whatever supplier you are evaluating, hold them to the same standard. And remember the structural
            constant: however many member factories are involved in your order, you sign{" "}
            <strong>one contract · one spec sheet · one inspection standard · one set of shipping documents</strong>
            . That is what keeps a factory alliance from becoming a dozen separate suppliers you have to manage.
          </p>

          <h2>What you should still pay for</h2>
          <p>
            Direct buying tempts buyers to strip cost everywhere. Three line items are worth keeping:
          </p>
          <ul>
            <li>
              <strong>Third-party inspection.</strong> Cutting it to save a few hundred dollars is how a
              container of off-spec goods gets accepted. It is the highest-return spend on the order.
            </li>
            <li>
              <strong>Packaging and private label.</strong> These are part of your product in the guest&rsquo;s
              hands. Under-specifying them to shave cost is false economy in a hotel.
            </li>
            <li>
              <strong>Freight and duty, planned properly.</strong> Hotel linen is volume-limited, not
              weight-limited, so a badly loaded container costs more than a well-loaded one at the same unit price.
            </li>
          </ul>

          <h2>A one-page order brief that gets an accurate quote first time</h2>
          <p>
            Most &ldquo;slow&rdquo; suppliers are slow because the brief was incomplete. Send these eight lines and
            you will get comparable quotes from every factory you approach, on the first pass:
          </p>
          <ul>
            {orderBrief.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <h2>Summary — one action before you email any factory</h2>
          <p>
            Write the spec sheet first. Everything that makes buying direct worthwhile — a comparable quote, a
            clean inspection, a supplier you can trust — starts from a brief precise enough that two factories
            cannot read it two different ways. Do that, then verify the four gates, and factory-direct stops being
            a marketing phrase and starts being a cost advantage you can defend.
          </p>

          {/* Related guides — internal links */}
          <div className="not-prose mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900">Keep Reading — Related Buying Guides</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Hotel Bedding Thread Count Guide (200–1000 TC)", href: "/guides/hotel-bedding-thread-count" },
                { title: "Container Loading: 20GP, 40GP or 40HQ — How Many Sets Fit", href: "/guides/container-loading-hotel-bedding-volume-weight" },
                { title: "Hotel Towel Quality Guide: Cotton Grades & QC Checklist", href: "/guides/hotel-towel-quality-guide" },
                { title: "Hotel Towel GSM Guide: 300–600 GSM Explained", href: "/guides/hotel-towel-gsm" },
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
            Ready to Buy Factory-Direct?
          </h2>
          <p className="mt-3 text-blue-200/80">
            Send us your spec sheet or your target requirement. A member factory of our alliance quotes it from its
            own line within 24 hours, and you can audit the factory before you commit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <TrackedLink
              ctaName="guide_bottom_quote"
              eventParams={{ cta_location: "guide_buy_direct" }}
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              ctaName="guide_view_factory"
              eventParams={{ cta_location: "guide_buy_direct" }}
              href="/factory"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              See How Members Are Verified
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
            headline: "Buying Hotel Linens Direct from a Chinese Factory: Cost & How to Verify",
            description:
              "What buying factory-direct changes in your landed cost, the four things it asks of you, and how to confirm the supplier actually owns the production line.",
            author: { "@type": "Organization", name: "Nantong Linens" },
            publisher: {
              "@type": "Organization",
              name: "Nantong Linens",
              logo: { "@type": "ImageObject", url: "https://www.nantonglinens.com/logo.png" },
            },
            datePublished: "2026-10-13",
            dateModified: "2026-10-13",
            url: "https://www.nantonglinens.com/guides/buying-hotel-linens-direct-from-chinese-factory",
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
                name: "Buying Hotel Linens Direct from a Chinese Factory",
                item: "https://www.nantonglinens.com/guides/buying-hotel-linens-direct-from-chinese-factory",
              },
            ],
          }),
        }}
      />
    </>
  );
}
