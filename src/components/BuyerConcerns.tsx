import Link from "next/link";

/**
 * "What hotel linen buyers usually worry about" — the four objections that
 * decide whether a buyer sends the first enquiry.
 *
 * Why this block exists: buyers arrive at a factory site already sceptical. The
 * four questions below are the ones that stop them writing, so they are written
 * as headings in the buyer's own words and answered twice — once from the
 * factory's side of the line, once from the buyer's. Derived from a survey of
 * directly comparable export sites (2026-09-30), where this block was the single
 * most effective trust device any of them used.
 *
 * Keep every answer to something checkable at a factory visit or in a QC
 * report. No adjectives that a buyer cannot test.
 */

type Concern = {
  question: string;
  /** How the factory side actually controls this. */
  factory: string;
  /** What the buyer can hold us to. */
  buyer: string;
};

const CONCERNS: Concern[] = [
  {
    question: "Will my bulk order match the sample I approved?",
    factory:
      "Every programme gets its own written specification sheet — construction, yarn count, thread count, finished dimensions with tolerances, seam type, label and packing. Dye lots are booked against that sheet, the shade band from each running lot is retained, and cut panels are bundled by shade so one dye lot stays together down the line. Final inspection runs on the batch that is actually shipping, not against a golden sample kept in an office.",
    buyer:
      "You approve the specification sheet before sampling, so \"matching the sample\" becomes a written target instead of an opinion. You receive photo and video inspection records before loading, and you can appoint SGS, Intertek or Bureau Veritas to verify the batch yourself.",
  },
  {
    question: "Will it survive 100+ commercial washes?",
    factory:
      "Shrinkage is controlled at finishing — pre-shrinking and heat setting are treated as production steps, not a final touch-up, which is what stops a fitted sheet drifting off the mattress after a few months of laundry. Reactive dyes bond to the fibre rather than sitting on it, so white stays white under chlorine and high-temperature washing. Stitch density, seam type and corner reinforcement are specified per product rather than left to operator habit.",
    buyer:
      "You can hold us to measurable numbers: GSM measured on finished goods, dimensions measured flat and again after wash relaxation, colour checked across the batch for shade drift. Ask for the wash-test data with your quotation — a supplier who cannot produce it has just answered the question for you.",
  },
  {
    question: "Can you make my size, label and logo exactly?",
    factory:
      "Sizes, closure type, hem depth, care labels, woven labels, embroidery placement, barcodes and shipping marks are all fixed on the specification sheet and confirmed before a sample is cut. Non-standard sizes, constructions and closure types are exactly what the bedding member's own weaving and making-up lines are for — a cut-and-sew trader would have to source the fabric first.",
    buyer:
      "Send a photo of the label you use today plus the artwork you want. We confirm in writing what can be matched and what has to change before you commit to anything — and if your brand standard cannot be met, you hear it at that stage rather than at the container.",
  },
  {
    question: "What could push my delivery date?",
    factory:
      "Four things move a date, and all four are visible in advance: fabric lead time (your construction has to be woven and dyed before cutting starts), dyeing and finishing scheduling (dark or Pantone-matched shades book later than whites), peak-season competition for line time from August to November, and ocean freight space in the same window. Nothing else on the list is a real risk.",
    buyer:
      "Ask for the date stage by stage and hold us to it. Bulk lead times are published per category on every product page, and confirmed ship dates go into the quotation in writing — not into a phone call or a chat message you cannot produce later.",
  },
];

export function BuyerConcerns({
  category,
  /**
   * "section" renders its own full-width band (use on /factory, /wholesale).
   * "flush" drops the outer band and the inner container so the block can be
   * dropped straight into a page that already provides padding (product pages).
   */
  variant = "section",
}: {
  /** Optional category name, so the heading names what the buyer is looking at. */
  category?: string;
  variant?: "section" | "flush";
}) {
  const body = (
    <>
      <div className="max-w-3xl">
        <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
          Buyer concerns
        </span>
        <h2 className="mt-3 text-2xl font-bold text-gray-900">
          What hotel linen buyers usually worry about
        </h2>
        <p className="mt-3 text-gray-500 leading-relaxed">
          These are the four objections that stop a purchase enquiry from being sent
          {category ? ` about ${category.toLowerCase()}` : ""} — so they are answered here,
          twice: once from the factory&apos;s side of the line, and once from yours.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {CONCERNS.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider">
                  From the factory view
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.factory}</p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5">
                <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider">
                  From your view
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.buyer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-blue-950 p-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white">Still holding back on something?</h3>
          <p className="mt-2 text-sm leading-relaxed text-blue-200/80">
            Send the specification, the artwork, or simply a photo of the label you use now. A photo
            is enough to price most orders — and it saves the two rounds of emails it usually takes
            to get there. Quote reply within 24 hours.
          </p>
        </div>
        <Link
          href="/rfq"
          className="mt-6 inline-flex shrink-0 items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-blue-900 hover:bg-gray-100 transition-colors sm:mt-0"
        >
          Send your spec or label photo
        </Link>
      </div>
    </>
  );

  if (variant === "flush") {
    return <div className="mt-10">{body}</div>;
  }

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{body}</div>
    </section>
  );
}
