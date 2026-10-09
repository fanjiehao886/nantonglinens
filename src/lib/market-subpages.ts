/**
 * Sub-pages that sit under each regional landing page.
 *
 * Why these exist: /markets/[region] answers "what is different about importing
 * into my region" — duty, transit, conformity. It deliberately does not answer
 * the two questions a buyer asks next: "when do I have to place the order" and
 * "what should the first order actually contain". Both were flagged as gaps in
 * content/content-plan.md (P2 lead time, P4 order composition), and both belong
 * on a landing page rather than in a blog post, because blog posts on this site
 * do not rank and landing pages do.
 *
 * Two topics, applied to all four regions:
 *   lead-time     — production + transit + certification, worked backwards from
 *                   the buyer's target date, including the Chinese New Year 2027
 *                   order cut-off.
 *   first-order   — real minimums, per-colour minimums, how to compose a mixed
 *                   container, and where the LCL/FCL break-even sits.
 *
 * Rules for editing this file:
 * - Numbers must be checkable and must match their single source of truth.
 *   Production lead times mirror src/app/products/[slug]/page.tsx (BULK_LEAD_TIME)
 *   and src/lib/company.ts. Transit bands mirror src/lib/markets.ts. Do not
 *   invent a figure here that contradicts those files; if one changes, change
 *   both.
 * - Where a figure could not be sourced, the copy states a principle instead of
 *   a number. Never fabricate a statistic, a rate or a citation.
 * - Identity is a FOB manufacturer alliance of independent export factories.
 *   Never write "group", "our own mill", "our own factory", "sourcing agent" or
 *   "partner factories". Never name a competitor.
 * - Regulations and freight markets move. `MARKETS_LAST_REVIEWED` is shown on
 *   every page so a buyer knows how current the guidance is.
 * - Deliberately NOT duplicated here: raw container capacity tables. The site
 *   already answers "how many towels fit in a container" on the blog, and these
 *   pages link to it instead of repeating it.
 */

import { type MarketFaq } from "./markets";

export type SubpageTopicSlug = "lead-time" | "first-order";

export type SubpageFact = { label: string; value: string };

export type SubpageTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type SubpageSection = {
  h2: string;
  paras?: string[];
  bullets?: string[];
  table?: SubpageTable;
  /** Small print under a table — always used to state what the numbers exclude. */
  note?: string;
};

export type MarketSubpage = {
  topic: SubpageTopicSlug;
  regionSlug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Opening paragraph — must name the buyer's decision problem in the first sentence. */
  opening: string;
  facts: SubpageFact[];
  sections: SubpageSection[];
  /** The one thing the buyer should do next, in words they can act on. */
  action: string;
  faqs: MarketFaq[];
};

export const SUBPAGE_TOPICS: Record<
  SubpageTopicSlug,
  { name: string; short: string; blurb: string }
> = {
  "lead-time": {
    name: "Lead Time & Order Calendar",
    short: "Lead time",
    blurb:
      "Production, transit and certification times worked backwards from the date your goods have to arrive — including the Chinese New Year 2027 cut-off.",
  },
  "first-order": {
    name: "Planning a First Order",
    short: "First order",
    blurb:
      "Real minimums, per-colour minimums, how to compose a mixed container instead of over-buying one SKU, and where LCL stops making sense.",
  },
};

/* ------------------------------------------------------------------ */
/* Shared blocks — defined once, referenced by every page              */
/* ------------------------------------------------------------------ */

/** Mirrors BULK_LEAD_TIME in src/app/products/[slug]/page.tsx. */
const PRODUCTION_TABLE: SubpageTable = {
  caption: "Bulk production lead time, normal season, from order confirmation",
  headers: ["Category", "Bulk production", "Sample"],
  rows: [
    ["Bath towels, bath mats", "20–30 days", "5–7 days"],
    ["Bed sheets, duvet covers, pillowcases, bathrobes, table linen", "25–35 days", "5–7 days"],
    ["Bedding sets, duvet inners, pillows, mattress programmes", "30–40 days", "7–10 days"],
    ["Bedding fabric, sold by the metre", "30–45 days", "7–10 days"],
  ],
};

const PRODUCTION_NOTE =
  "Sample times run longer — 7–10 days — where a shade has to be dyed, a fill is specified or a logo is embroidered. Peak season (August–November) adds 7–10 days to every production figure above.";

/** Per-colour and per-size minimums. Mirrors the orderFacts in src/lib/markets.ts. */
const MOQ_TABLE: SubpageTable = {
  caption: "Alliance minimums, by category",
  headers: ["Category", "Minimum"],
  rows: [
    ["Bed sheets, duvet covers, pillowcases, bathrobes", "From 100 pcs per size and per colour"],
    ["Towels, bath mats, table linen", "From 200 pcs per colour"],
    ["Bedding fabric, by the metre", "From 3,000 m per construction"],
    ["Trial order", "From 50 pcs"],
    ["Container-level minimum", "None — you are not obliged to fill a container before we quote"],
  ],
};

const MOQ_NOTE =
  "These are per-colour and per-size minimums, not totals. A five-colour order is five minimum runs, which is why it takes longer than a one-colour order of the same total volume.";

const BOOKING_QUESTIONS = [
  "What are the carton dimensions and the pieces per carton for each SKU in my order?",
  "How many cartons in total, and what is the total volume in CBM?",
  "What is the total gross weight of the shipment?",
  "Will the goods ship palletised? Palletising typically costs 10–15% of your usable container volume.",
  "Is the booking a high cube or a standard box, and is that written on the booking confirmation?",
];

const BOOKING_NOTE =
  "Ask for a 40ft high cube explicitly. Forwarders book standard 40ft boxes by default, and for lightweight linen that default quietly costs you about 10 CBM on every shipment.";

/**
 * Related reading. The site already answers raw container capacity on the blog,
 * so these pages link to it rather than repeating the tables. Exported so the
 * route can render the link; the label is spliced into body copy.
 */
export const CAPACITY_LINK_HREF = "/blog/how-many-hotel-towels-fit-20ft-40ft-container";
const CAPACITY_LINK_LABEL = "how many towels and sheet sets fit a 20ft, 40ft or 40ft high cube container";

/* ------------------------------------------------------------------ */
/* LEAD TIME — the four regional variants                              */
/* ------------------------------------------------------------------ */

const LEAD_TIME_PAGES: MarketSubpage[] = [
  {
    topic: "lead-time",
    regionSlug: "southeast-asia",
    h1: "Hotel Linen Lead Time to Southeast Asia — Production, Shipping and the Order Calendar",
    metaTitle: "Hotel Linen Lead Time to Southeast Asia — Transit & Order Calendar",
    metaDescription:
      "Production, sea transit and clearance times for hotel linen into Southeast Asia, plus the Chinese New Year 2027 order cut-off. FOB factory-direct from Nantong.",
    opening:
      "A Southeast Asian buyer places a linen order against a date — a soft opening, a renovation handover, a supply contract that starts on the first of the month. The number that matters is not the production lead time a supplier quotes you; it is the day a container can realistically be on your dock, which is production plus sea transit plus clearance plus whatever the calendar does to all three. Southeast Asia is the shortest lane on this site, and that is an advantage you can actually use: you can order later and remain accurate. It stops being an advantage the moment you place an order in the four weeks before Chinese New Year.",
    facts: [
      { label: "Bulk production", value: "20–40 days by category" },
      { label: "Sea transit", value: "About 5–12 days" },
      { label: "Order-to-dock", value: "About 4–10 weeks" },
    ],
    sections: [
      {
        h2: "Production lead time, by category",
        paras: [
          "Production is the part of the timeline you control least and can predict most accurately, because it is set by the construction rather than by the country you are shipping to. The wide range inside each row comes from how many colours and sizes the order carries, not from the quality tier.",
        ],
        table: PRODUCTION_TABLE,
        note: PRODUCTION_NOTE,
      },
      {
        h2: "Add the sea leg: about 5–12 days",
        paras: [
          "Port-to-port transit from Nantong, Shanghai or Ningbo is short on this lane. What turns a one-week sailing into a three-week wait is clearance and inland delivery, and those are the two items most first orders underestimate.",
        ],
        table: {
          caption: "Normal season, order confirmation to delivery at your dock",
          headers: ["Destination", "Sea transit", "Plan for order-to-dock"],
          rows: [
            ["Singapore", "5–10 days", "4–8 weeks"],
            ["Malaysia, Vietnam, Thailand", "6–12 days", "4–9 weeks"],
            ["Indonesia, Philippines", "9–15 days", "5–10 weeks"],
          ],
        },
        note:
          "Order-to-dock includes a 20–40 day production window, the sailing, import clearance and inland delivery. It excludes any hold caused by a certificate of origin query, and it does not include your own warehouse handling.",
      },
      {
        h2: "Working backwards from your opening date",
        paras: [
          "Take the date the goods must be on site and subtract backwards. This is the calculation that decides whether you are early or merely hopeful.",
        ],
        table: {
          headers: ["Stage", "Allow"],
          rows: [
            ["Bulk production", "3–6 weeks, by category"],
            ["Sea transit", "1–2 weeks"],
            ["Import clearance and inland delivery", "3–7 days"],
            ["Buffer, including a missed weekly sailing", "1 week"],
          ],
        },
        note:
          "Add a week for a programme with two or more dyed shades, and add 1–2 weeks for any order that falls in August–November. The buffer is not padding — carriers rotate and a single missed sailing costs you seven days on this lane.",
      },
      {
        h2: "The Chinese New Year cut-off: 6 February 2027",
        paras: [
          "Chinese New Year falls on Saturday 6 February 2027, and the disruption on either side of it is longer than the holiday. Textile mills in Jiangsu typically close for two to three weeks once early departures and late returns are counted, and the order book saturates three to four weeks before the closure. Lines then take one to two weeks to return to full output, because part of the workforce does not come back to the same factory.",
          "Because this is a short lane, a Southeast Asian buyer has more room than a buyer in South America or Africa — but the goods still have to be produced before the break, not just shipped.",
        ],
        table: {
          caption: "Chinese New Year 2027 — what to aim for and when to order",
          headers: ["Your aim", "Latest order date"],
          rows: [
            ["Landed in Southeast Asia before Chinese New Year", "Mid to late November 2026"],
            ["Produced before the break, sailing after it", "Late December 2026"],
            ["Placed after the holiday, accepting the ramp-up", "From late February 2027, once the mill confirms full capacity"],
          ],
        },
        note:
          "The third row is the one buyers get wrong. A factory's posted reopening date is not its full-capacity date, and orders placed immediately after the holiday commonly run 20–30% longer than normal.",
      },
      {
        h2: "What actually delays a Southeast Asian order",
        bullets: [
          "A dyed shade added after the order was placed. Colour carries its own minimum run and its own dye booking, and this is the single most common cause of an unexpectedly long lead time.",
          "A Form E description that does not match the invoice or the declared HS code. On this lane the certificate has to be raised against the description and HS code you declare, so a late change to either one moves the shipping date, not just the paperwork.",
          "A transshipment that needs a non-manipulation certificate. Ask for direct routing to your port, because the alternative document can only be arranged at origin.",
          "Placing the order in August–November. Peak adds 7–10 days to production and tightens sailing space at the same time.",
          "Pre-shipment inspection scheduled after the goods are packed. Book the slot with the production plan, not after it.",
        ],
      },
    ],
    action:
      "Send us the date the goods have to be on your dock, not the date you want to order. Give us that date, the destination port and the categories, and we will work the calendar backwards and tell you the last date we can start production — Form E included. Two dates in the enquiry replaces a three-week email exchange with one reply.",
    faqs: [
      {
        q: "How far in advance should I order hotel linen for Southeast Asia?",
        a: "Plan on 4–10 weeks from order confirmation to delivery at your dock, depending on the destination: about 4–8 weeks for Singapore, 4–9 weeks for Malaysia, Vietnam and Thailand, and 5–10 weeks for Indonesia and the Philippines. Add a week for a programme with several dyed shades and 1–2 weeks for an order that falls in the August–November peak. If you have a fixed opening date, the useful habit is to give us the target date rather than the order date.",
      },
      {
        q: "Does a short sailing really mean I can order later?",
        a: "Compared with South America or Africa, yes. Production is the same 20–40 days wherever the goods are going, so the shorter the lane, the closer to your delivery date you can order. The exception is the Chinese New Year window, which compresses the whole cluster's capacity regardless of destination.",
      },
      {
        q: "When do I have to order to land goods before Chinese New Year 2027?",
        a: "Chinese New Year 2027 falls on 6 February. To have goods landed in Southeast Asia before it, place the order by mid to late November 2026. To have production completed before the break with the sailing afterwards, order by late December 2026. Orders placed immediately after the holiday are workable but commonly run 20–30% longer while lines return to full headcount.",
      },
      {
        q: "Why did my last order take three weeks longer than quoted?",
        a: "In our experience the usual causes, in order: a dyed shade added after the order was placed, which forces a new colour minimum and a new dye booking; a change to the goods description or HS code after the certificate of origin was drafted; peak-season capacity in August–November; and a missed weekly sailing. All four are visible before production starts if they are discussed at the specification stage — which is why we ask for the HS code and the final colour list before cutting, not before shipping.",
      },
    ],
  },

  {
    topic: "lead-time",
    regionSlug: "south-america",
    h1: "Hotel Linen Lead Time to South America — Production, Sea Transit and the Order Calendar",
    metaTitle: "Hotel Linen Lead Time to South America — Transit & Order Calendar",
    metaDescription:
      "Production, 25–45 day sea transit and clearance times for hotel linen into South America, plus the Chinese New Year 2027 order cut-off. FOB factory-direct.",
    opening:
      "On a lane where goods spend a month or more at sea, a first order that is two weeks late is not two weeks late — it is a missed season or a delayed opening. South American buyers should plan in sailings, not in weeks. This page sets out the realistic order-to-dock timeline into Chile, Peru, Brazil, Colombia and Panama, and the two dates in 2027 that should shape when you order: 6 February and the week your certificate of origin has to be drafted.",
    facts: [
      { label: "Bulk production", value: "20–40 days by category" },
      { label: "Sea transit", value: "About 25–45 days" },
      { label: "Order-to-dock", value: "About 10–16 weeks" },
    ],
    sections: [
      {
        h2: "Production lead time, by category",
        paras: [
          "Production runs on the same clock whatever the destination, and it is the part of the timeline you can actually plan against. What changes on this lane is how long the goods then sit on the water, and how much buffer the sailing schedule forces you to carry.",
        ],
        table: PRODUCTION_TABLE,
        note: PRODUCTION_NOTE,
      },
      {
        h2: "Add the sea leg: about 25–45 days",
        paras: [
          "These are long lanes, and schedule reliability moves the numbers more than it does on Asian routes. Blank sailings — a scheduled sailing cancelled by the carrier — are the single largest source of variance, and they cannot be predicted from a planning band.",
        ],
        table: {
          caption: "Normal season, order confirmation to delivery at your dock",
          headers: ["Destination", "Sea transit", "Plan for order-to-dock"],
          rows: [
            ["Peru, Ecuador", "25–38 days", "10–14 weeks"],
            ["Colombia, Panama", "26–38 days", "10–15 weeks"],
            ["Chile", "30–40 days", "11–15 weeks"],
            ["Brazil, Argentina, Uruguay", "32–45 days", "12–16 weeks"],
          ],
        },
        note:
          "Order-to-dock includes a 20–40 day production window, the sailing, import clearance and inland delivery. It excludes the extra 2–5 days LCL adds for consolidation at origin and deconsolidation at destination.",
      },
      {
        h2: "Working backwards from your opening date",
        paras: [
          "Work backwards in this order, and carry the sailing buffer as a line item rather than as optimism. On this lane the honest planning unit is a month, not a week.",
        ],
        table: {
          headers: ["Stage", "Allow"],
          rows: [
            ["Bulk production", "3–6 weeks, by category"],
            ["Sea transit", "4–6 weeks"],
            ["Import clearance, port and inland delivery", "1–2 weeks"],
            ["Sailing-schedule buffer", "1–2 weeks"],
          ],
        },
        note:
          "That totals roughly 9–16 weeks, and it is why a South American first order should be placed three to four months before the date it is needed. Vessel space is also contested on both sides of Chinese New Year, so the buffer earns its keep in February in particular.",
      },
      {
        h2: "The Chinese New Year cut-off: 6 February 2027",
        paras: [
          "Chinese New Year falls on Saturday 6 February 2027. Because transit on this lane is 25–45 days, goods that finish production in late January cannot be on your dock before March — the holiday and the sailing compound rather than overlap. If you are working towards a Q1 2027 opening, the goods need to be in production by early January, which means the order and the colour approvals sit in November 2026.",
          "The other compounding factor is vessel space. Every exporter on the corridor is clearing its book before the closure, so space tightens and rates move in the weeks either side of the holiday.",
        ],
        table: {
          caption: "Chinese New Year 2027 — what to aim for and when to order",
          headers: ["Your aim", "Latest order date"],
          rows: [
            ["Landed in South America before Chinese New Year", "Not realistic — the sailing alone exceeds the window"],
            ["Produced and loaded before the break", "Late November to early December 2026"],
            ["Arriving Q2 2027 rather than Q1", "January 2027, accepting the post-holiday ramp-up"],
          ],
        },
        note:
          "Production has to be completed before the closure, not merely booked. A mill that accepts an order in the third week of January has taken the booking, not the slot.",
      },
      {
        h2: "What actually delays a South American order",
        bullets: [
          "A blank sailing. This is the largest single cause of a late arrival on this lane and it is outside both parties' control, which is exactly why the buffer belongs in the plan.",
          "The certificate of origin not being ready when the vessel sails, or being drafted against a description that does not match the invoice. On this lane it is a financial document, not a formality.",
          "Assuming duty treatment before checking the tariff line. Peru's agreement with China excludes textiles, so a shipment built on an assumption about duty is often built on a wrong assumption about the calendar too.",
          "LCL consolidation wait at origin. Combining with other shippers' cargo adds 2–5 days before the vessel departs, and a missed cut-off adds a week.",
          "A late change to the specification after cutting. On a four-week sailing, a two-week rework is a lost month.",
        ],
      },
    ],
    action:
      "Tell us the target date and the port, and let us price the buffer rather than the best case. Send the categories, the quantities and the destination port together, and we will come back with the latest production start date that still meets your date — and tell you plainly if it does not.",
    faqs: [
      {
        q: "How long does hotel linen take to reach Chile or Brazil?",
        a: "Plan on about 11–15 weeks order-to-dock for Chile and 12–16 weeks for Brazil, Argentina and Uruguay: 20–40 days of production, 30–45 days of sea transit, 1–2 weeks of clearance and inland delivery, and a 1–2 week sailing buffer. Peru, Ecuador, Colombia and Panama are slightly shorter at around 10–15 weeks. These are planning bands, not promises, because blank sailings move them.",
      },
      {
        q: "Why is the buffer bigger on this lane than on an Asian route?",
        a: "Because the sailing is long and the schedules are less reliable. A missed weekly sailing on an Asian lane costs about seven days; on a 30–45 day lane it can cost two weeks and push the arrival into a different clearance and inland-transport window. Carrying the buffer as a visible line item is more honest than quoting the best case and discovering the difference later.",
      },
      {
        q: "Should I order before or after Chinese New Year 2027?",
        a: "For South America, before — and earlier than buyers expect. Because transit is 25–45 days, goods completing production in late January cannot be with you before March. To have a Q1 2027 opening covered, order in November 2026 so production and loading finish before the cluster closes. Ordering in January is workable only if you have moved the delivery expectation to Q2.",
      },
      {
        q: "Does the certificate of origin affect the lead time?",
        a: "It can, because it is a shipping document, not a post-arrival one. We raise it in China against the HS code and goods description you supply, so those have to be fixed before packing. If the description changes after the certificate is drafted, the document has to be reissued and the vessel can sail without a usable original — which on a 30–45 day lane is expensive to correct.",
      },
    ],
  },

  {
    topic: "lead-time",
    regionSlug: "central-asia",
    h1: "Hotel Linen Lead Time to Central Asia — Production, Rail Transit and the Conformity Window",
    metaTitle: "Hotel Linen Lead Time to Central Asia — Rail Transit & Order Calendar",
    metaDescription:
      "Rail transit of 7–14 days and the EAC conformity file that runs in parallel with production, plus the Chinese New Year 2027 cut-off. FOB factory-direct.",
    opening:
      "On this corridor the longest item in the timeline is usually not the rail leg and not production — it is the conformity file. Hotel bed linen and towels are Layer I products under TR CU 017/2011, the declaration or certificate can only be applied for by a company established inside the Eurasian Economic Union, and the accredited testing it depends on runs alongside production, not after it. A Central Asian buyer who sequences certification last is planning a delay at the border. This page sets out the order of operations and the dates behind it.",
    facts: [
      { label: "Bulk production", value: "20–40 days by category" },
      { label: "Rail transit", value: "About 7–14 days station-to-station" },
      { label: "Order-to-site", value: "About 8–13 weeks" },
    ],
    sections: [
      {
        h2: "Production lead time, by category",
        paras: [
          "Because so much Central Asian demand is a new property furnishing the whole building at once, the order usually covers several categories, and the timeline is set by the slowest one. Bedding sets, duvet inners and pillows — the assembled and filled categories — are the ones that decide the date.",
        ],
        table: PRODUCTION_TABLE,
        note: PRODUCTION_NOTE,
      },
      {
        h2: "Add the rail leg: 7–14 days station-to-station",
        paras: [
          "Central Asia is landlocked, so rail via Alashankou or Khorgos is the practical route, and it is considerably faster than sea-plus-road for the same destination city. The published transit is station-to-station; door-to-door adds the collection, the gauge change at the border and final delivery.",
        ],
        table: {
          caption: "Rail from China, normal conditions",
          headers: ["Destination", "Station-to-station", "Plan for order-to-site"],
          rows: [
            ["Kazakhstan — Almaty, Astana, Shymkent", "7–14 days", "8–11 weeks"],
            ["Uzbekistan — Tashkent, Samarkand", "7–14 days", "8–11 weeks"],
            ["Kyrgyzstan — Bishkek, Osh", "8–15 days", "9–12 weeks"],
            ["Tajikistan, Turkmenistan", "10–18 days", "10–13 weeks"],
          ],
        },
        note:
          "Add roughly 3–5 days for door-to-door. The gauge change at the border adds 1–3 days and can be longer under congestion at Alashankou or Khorgos, the September–January peak adds about 2–5 days, and a confirmed slot is normally booked about a week ahead.",
      },
      {
        h2: "The step most buyers start too late: the conformity file",
        paras: [
          "An EAC declaration or certificate can only be applied for by a legal entity established inside the Eurasian Economic Union — normally your own importing entity or a local authorised representative. We cannot file it for you. What we supply is the technical file it is built on: fabric composition with percentages, finished GSM, construction, and the laboratory test data for chemical and physical safety, plus artwork for the EAC mark and the labels. Rules tightened further for Kazakhstan: a local authorised representative is mandatory for non-union companies, testing must be done at a laboratory accredited within the union, and the certificate must be registered in the union's FGIS database.",
          "That makes the sequence a two-party job rather than a supplier task, and it means the applicant has to be appointed at the sample stage. A conformity file assembled after the goods are finished is the most common reason a Central Asian order sits at the border.",
        ],
        table: {
          caption: "Conformity runs in parallel with production, not after it",
          headers: ["Stage", "When it happens"],
          rows: [
            ["Appoint the EAEU applicant — importer or local authorised representative", "At the sample stage"],
            ["Confirm whether your line takes the declaration route or the certification route", "Before the order is confirmed"],
            ["We supply the technical file and label artwork", "During production"],
            ["Accredited testing and FGIS registration", "During production, in parallel"],
            ["Goods ready, rail slot booked", "About a week ahead of the slot"],
          ],
        },
        note:
          "Which route applies depends on the product classification, and it should be confirmed line by line rather than assumed. Confirm it with your own representative — that determination is theirs to make, not ours.",
      },
      {
        h2: "Working backwards from your handover date",
        table: {
          headers: ["Stage", "Allow"],
          rows: [
            ["Sample, approval and specification lock", "1–2 weeks"],
            ["Bulk production, including the rail leg's own cut-off", "3–6 weeks by category"],
            ["Conformity: applicant appointed, testing, FGIS registration", "Overlaps production — but only if started at the sample stage"],
            ["Rail transit, door-to-door", "2–3 weeks"],
            ["Buffer for the gauge change and border congestion", "1 week"],
          ],
        },
        note:
          "Totals about 8–13 weeks from a locked specification, provided the conformity work started in parallel. If it starts after production ends, add the whole certification cycle on top — which is the delay this page exists to prevent.",
      },
      {
        h2: "The Chinese New Year cut-off: 6 February 2027",
        paras: [
          "Chinese New Year falls on Saturday 6 February 2027. Jiangsu textile mills typically close two to three weeks once early departures and late returns are counted, and the order book saturates three to four weeks before that. On this corridor there is an extra effect: Alashankou and Khorgos congest as every exporter tries to clear its book before the break, so the rail slot is the constraint as much as the production slot.",
          "A further consequence for project buyers: if the conformity file is not finished, a slip past the holiday moves both the testing laboratory and the border processing into a slower window.",
        ],
        table: {
          caption: "Chinese New Year 2027 — what to aim for and when to order",
          headers: ["Your aim", "Latest order date"],
          rows: [
            ["Loaded by rail before the break", "Late November 2026"],
            ["Produced before the break, railed after it", "Mid December 2026"],
            ["Post-holiday production", "From about 20 February 2027, once the mill confirms full capacity"],
          ],
        },
        note:
          "Book the rail slot about a week ahead in normal conditions, and allow more in December and January when the corridor is busiest.",
      },
      {
        h2: "What actually delays a Central Asian order",
        bullets: [
          "The conformity file starting after production instead of alongside it. This is the dominant cause of a stalled shipment on this corridor.",
          "No authorised representative appointed for a non-union buyer, which makes the declaration impossible to file at all.",
          "Testing carried out at a laboratory not accredited within the union, which invalidates the result and restarts the clock.",
          "The gauge change at the border, plus congestion at Alashankou or Khorgos in the September–January peak.",
          "Label artwork or the EAC mark decided after the goods are packed. The mark has a minimum size and a QR code requirement, and it is applied during production.",
          "A late change to the room list or bed sizes on a project order, which changes the packing plan and can change the conformity scope.",
        ],
      },
    ],
    action:
      "Tell us three things together: the project handover date, the destination city, and who will be the EAEU applicant. With those three we can sequence production, the conformity file and the rail slot against one date, and tell you before you commit whether the date is achievable.",
    faqs: [
      {
        q: "How long does rail from China to Almaty or Tashkent take?",
        a: "Station-to-station, roughly 7–14 days to Almaty and the same to Tashkent, 8–15 days to Kyrgyzstan and 10–18 days to Tajikistan and Turkmenistan. Add roughly 3–5 days for door-to-door. The gauge change at the border adds 1–3 days and can be longer under congestion at Alashankou or Khorgos, the September–January peak adds about 2–5 days, and a confirmed slot is normally booked about a week ahead.",
      },
      {
        q: "Does the EAC certificate add to my lead time?",
        a: "It only adds time if it starts late. The declaration or certificate can only be applied for by an EAEU-established entity, so you or your representative is the applicant, and the accredited testing can run while the goods are in production. We supply the technical file and label artwork during production. Started at the sample stage, it largely overlaps the manufacturing window; started after the goods are finished, the full certification cycle is added to your delivery date.",
      },
      {
        q: "Can I get the whole hotel inventory in one order?",
        a: "Yes, and on a project order it is usually the right way to buy. The alliance covers bedding, towelling, bathrobes, table linen and mattress programmes, so a full room inventory can be quoted as one specification set, inspected to one standard and loaded as one rail consignment. Fewer variants also means fewer lines to document in the conformity file, which is a real scheduling benefit on this corridor.",
      },
      {
        q: "How does Chinese New Year 2027 affect a rail shipment?",
        a: "Two ways. Production: mills in Jiangsu typically close two to three weeks around 6 February 2027, with the order book saturating three to four weeks earlier, so a project that must be loaded before the break should be ordered in late November 2026. Logistics: Alashankou and Khorgos congest as exporters rush to clear their books, so the rail slot becomes as tight as the production slot. Book the slot about a week ahead in normal conditions and more in December and January.",
      },
    ],
  },

  {
    topic: "lead-time",
    regionSlug: "africa",
    h1: "Hotel Linen Lead Time to Africa — Production, Shipping and the Certification Timetable",
    metaTitle: "Hotel Linen Lead Time to Africa — Certification & Transit Timeline",
    metaDescription:
      "A Kenya COC takes 10–15 working days and must be raised before shipment. Production, conformity and transit timings for hotel linen into Africa, FOB Nantong.",
    opening:
      "On most African destinations the item that decides your lead time is not the sailing and not the sewing — it is the conformity certificate, which has to be obtained in China before the container leaves. A Kenya Certificate of Conformity needs a test report that is typically under three months old and takes 10–15 working days, and a Nigerian shipment needs a Product Certificate in place before the Form M can even be opened. Buyers who plan certification first and production second import smoothly; buyers who plan it the other way round pay penalties measured in a percentage of CIF value.",
    facts: [
      { label: "Bulk production", value: "20–40 days by category" },
      { label: "Sea transit", value: "About 20–50 days" },
      { label: "Certification", value: "10–15 working days, before shipment" },
    ],
    sections: [
      {
        h2: "Production lead time, by category",
        paras: [
          "Production runs on the same clock as anywhere else, and it is the part you can plan against once the certification is sequenced correctly. Where an order mixes categories — towels plus bed linen plus table linen — the assembled and filled categories set the date.",
        ],
        table: PRODUCTION_TABLE,
        note: PRODUCTION_NOTE,
      },
      {
        h2: "The certification timetable, which runs before shipment",
        paras: [
          "This is the part that differs from every other region on this site. None of it can be completed at the destination port without cost and delay.",
        ],
        table: {
          caption: "Conformity items and how long they take",
          headers: ["Item", "Where it is raised", "Time to allow"],
          rows: [
            ["Kenya PVoC Certificate of Conformity", "China, before loading", "10–15 working days"],
            ["Kenya certificate of origin (required alongside the COC since July 2025)", "China, by the competent authority", "With the COC application"],
            ["Nigeria Product Certificate", "Export planning, before the Form M", "Weeks, not days — start it early"],
            ["Nigeria SONCAP Certificate", "Per shipment, activated for the PAAR", "Before arrival"],
            ["Textile test report", "Accredited laboratory", "Must typically be under 3 months old on the shipment date"],
          ],
        },
        note:
          "The ageing rule on the test report is the trap. If the order is placed before the report exists or before it is refreshed, the certificate becomes the critical path and the goods wait — so refresh the report first, then confirm the production start.",
      },
      {
        h2: "Add the sea leg: about 20–50 days",
        paras: [
          "The African coastline spans a very wide range, and West African ports run the longest and are the most exposed to congestion. On this lane, build a margin around an arrival window rather than a delivery date agreed to the day.",
        ],
        table: {
          caption: "Normal season, order confirmation to delivery at your dock",
          headers: ["Destination", "Sea transit", "Plan for order-to-dock"],
          rows: [
            ["East Africa — Mombasa, Dar es Salaam", "20–32 days", "9–14 weeks"],
            ["North Africa — Alexandria, Port Said, Casablanca", "22–38 days", "10–15 weeks"],
            ["Southern Africa — Durban, Cape Town", "26–40 days", "10–16 weeks"],
            ["West Africa — Lagos, Tema, Abidjan", "35–50 days", "12–18 weeks"],
          ],
        },
        note:
          "Order-to-dock includes production, the sailing, the conformity process before loading, import clearance and inland delivery. Lagos in particular can add substantial time at anchor, and on LCL the destination unpacking charges in this region are high.",
      },
      {
        h2: "Working backwards from your opening date",
        paras: [
          "On this lane the sequence is fixed: specification, then the test report, then the conformity application, then production, then shipment. Working backwards from the delivery date, the first item you place is the report, not the order.",
        ],
        table: {
          headers: ["Stage", "Allow"],
          rows: [
            ["Test report obtained or refreshed", "Before the order is confirmed"],
            ["Conformity application and inspection before loading", "10–15 working days"],
            ["Bulk production", "3–6 weeks, by category"],
            ["Sea transit", "3–7 weeks"],
            ["Clearance, port and inland delivery, plus a congestion margin", "1–3 weeks"],
          ],
        },
        note:
          "Totals roughly 10–18 weeks. The conformity items and the production window can overlap if the application is filed against the proforma invoice and the test report early — which is the single most useful scheduling decision on this lane.",
      },
      {
        h2: "The Chinese New Year cut-off: 6 February 2027",
        paras: [
          "Chinese New Year falls on Saturday 6 February 2027. Jiangsu textile mills typically close two to three weeks once early departures and late returns are counted, and the order book saturates three to four weeks before that. Because the conformity process depends on a test report with a limited validity, a long holiday in the middle of the timeline is not just a production delay — it can age the report you were relying on.",
          "The practical rule is to place the order early enough that the conformity inspection happens before the cluster slows down, not after it.",
        ],
        table: {
          caption: "Chinese New Year 2027 — what to aim for and when to order",
          headers: ["Your aim", "Latest order date"],
          rows: [
            ["Produced and inspected before the break", "Late November 2026"],
            ["Produced before the break, certified and shipped after it", "Mid December 2026, with the test report already in date"],
            ["Post-holiday production", "From about 20 February 2027, once the mill confirms full capacity"],
          ],
        },
        note:
          "If your test report is issued in early January, check its age at the new shipment date before assuming it still covers a post-holiday loading.",
      },
      {
        h2: "What actually delays an African order",
        bullets: [
          "A test report that has aged out, or one that does not cover the parameters the scheme expects for the category — azo dyes, formaldehyde, pH and colour fastness are the common set.",
          "The conformity application starting after the goods are packed, when the agencies inspect before loading.",
          "Assuming the requirement is continental. Kenya, Nigeria, South Africa, Egypt, Morocco and Algeria each run their own scheme, and some markets require the exporting factory to be pre-registered with the destination authority.",
          "Destination congestion, particularly at Lagos, which is why the arrival window matters more than a fixed date.",
          "LCL destination unpacking charges, which in this region are high enough that a dedicated container often costs less overall once a shipment passes roughly 13–15 CBM.",
        ],
      },
    ],
    action:
      "Send us the destination port and the conformity scheme your clearing agent names, together with your target date. We will build the document set and the carton markings to match that scheme, and we will tell you the date the test report and the application have to be in place for the loading to happen on schedule.",
    faqs: [
      {
        q: "How long does a Kenya COC take, and when does it start?",
        a: "Allow 10–15 working days, and start it before the goods are packed. Your importer obtains an Import Declaration Form and passes the IDF number to us; we then apply to a KEBS-contracted agency such as SGS, Intertek, Bureau Veritas or CCIC with the proforma invoice, the packing list and a recent test report. The agency reviews the documents and inspects the goods before loading, then issues the Certificate of Conformity, which is valid 90 days and covers that consignment only. Since July 2025 a certificate of origin is also required alongside it.",
      },
      {
        q: "What happens if the goods sail without a COC?",
        a: "They cannot be cleared on the original documents. The importer has to apply for a local certificate at the destination, which carries a penalty that can reach 5% of CIF value, additional inspection costs, and demurrage while the container sits. That is why on this lane the certification is scheduled 10–15 working days before shipment rather than treated as post-arrival paperwork.",
      },
      {
        q: "How long is the total lead time to Lagos or Mombasa?",
        a: "Plan on about 12–18 weeks order-to-dock for West Africa and 9–14 weeks for East Africa: 20–40 days of production, the conformity process before loading, 20–50 days of sea transit depending on the coast, and 1–3 weeks of clearance, port handling and inland delivery with a congestion margin. West African ports, Lagos in particular, are the most exposed to delays at anchor.",
      },
      {
        q: "How does Chinese New Year 2027 affect the timeline?",
        a: "It interacts with certification in a way it does not elsewhere. Chinese New Year falls on 6 February 2027 and Jiangsu mills typically close two to three weeks around it, but the conformity process depends on a test report with a limited validity — so a long break in the middle of the timeline can age the report you were relying on. Order early enough that production, inspection and the certificate are complete before the cluster slows: late November 2026 for a programme that must be finished before the break.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* FIRST ORDER — the four regional variants                            */
/* ------------------------------------------------------------------ */

/** Shared composition guidance: how a first container should be split. */
const MIX_TABLE: SubpageTable = {
  caption: "A workable first-container mix, by share of usable volume",
  headers: ["Category", "Share of container volume", "Why it earns its place"],
  rows: [
    ["Towels — bath, hand, face, bath mats", "40–50%", "The highest-volume category per room, and the fastest to wear out"],
    ["Bed linen — sheets, duvet covers, pillowcases", "30–40%", "The core repeat item and the reason you reorder"],
    ["Bathrobes", "5–10%", "Bulky and light, so it uses volume that would otherwise ship as air"],
    ["Table linen, mattress protectors, bed runners", "10–15%", "Denser than towelling, so it adds weight without consuming much volume"],
  ],
};

const MIX_NOTE =
  "Hotel linen is volume-bound, not weight-bound: a full container of towels comes to roughly half the container's payload allowance. The risk is running out of cubic metres long before you run out of kilograms — which is why the dense categories at the bottom of this table are useful ballast rather than an afterthought.";

const FIRST_ORDER_PAGES: MarketSubpage[] = [
  {
    topic: "first-order",
    regionSlug: "southeast-asia",
    h1: "Planning a First Hotel Linen Order into Southeast Asia — MOQ, Mixed Loading and LCL vs FCL",
    metaTitle: "First Hotel Linen Order into Southeast Asia — MOQ & Container Planning",
    metaDescription:
      "Alliance minimums from 100 pcs per size and colour, how to combine towels and bedding in one order, and where LCL stops making sense into Southeast Asia.",
    opening:
      "The mistake in a first Southeast Asian order is rarely the unit price. It is buying too much of one SKU to reach a container minimum that nobody actually imposed, or paying LCL rates for a shipment that was already worth a container. On this lane the freight is short and cheap, which gives you an option buyers on longer lanes do not have: start genuinely small, learn what sells, and reorder in weeks rather than in months. This page is about sizing that first order so it is neither a wasted container nor an expensive part-load.",
    facts: [
      { label: "Entry minimum", value: "From 100 pcs per size/colour" },
      { label: "Container minimum", value: "None" },
      { label: "LCL/FCL break-even", value: "About 13–15 CBM" },
    ],
    sections: [
      {
        h2: "The real minimums, by category",
        paras: [
          "There is no container-level minimum in this alliance, so the number that constrains your first order is the per-colour minimum, not the freight. That distinction matters more here than almost anywhere else, because a Southeast Asian programme often runs in two or three colours from the start.",
        ],
        table: MOQ_TABLE,
        note: MOQ_NOTE,
      },
      {
        h2: "Colour is where a first order actually grows",
        paras: [
          "A white programme is the easy part: white fabric is stocked and dyed in bulk, so 100 pieces is genuinely 100 pieces. Add a sand towel or a navy bathrobe and that colour gets its own minimum run and its own lead time, because the yarn or fabric is dyed for your order. Three colours in one SKU family is normal in this market and we will quote it — but it is the reason a three-colour order of the same total volume takes noticeably longer than a white one.",
          "The useful discipline is to decide the colour list before the order is placed, not after. Every shade added later restarts a dye booking and moves the shipping date.",
        ],
      },
      {
        h2: "Mix the container instead of filling it with one SKU",
        paras: [
          "The reason to buy across categories on a first order is not variety for its own sake — it is that a container reaches useful volume without any single SKU being over-bought. The categories run in different member factories within the same Nantong cluster, so quoting them together is how the loading plan gets built properly instead of the container arriving half empty.",
        ],
        table: MIX_TABLE,
        note: MIX_NOTE,
      },
      {
        h2: "LCL or a full container?",
        paras: [
          "The break-even on this decision is usually around 13–15 CBM once destination charges are counted, not just the ocean rate. Below that, LCL is normally cheaper even after destination unpacking. Above it, a 20ft container starts to win, and past roughly 35–45 CBM a 40ft is almost always the better answer.",
          "On a short lane like Southeast Asia there is a second argument for LCL: the goods arrive sooner relative to the order, so an LCL trial costs you very little in lost time. That is not true on longer lanes, where an undersized trial can waste a quarter. For the volume maths behind these numbers, see " +
            CAPACITY_LINK_LABEL +
            ".",
        ],
        note:
          "Ask for both an LCL and a 20ft quote on any first order once you pass about 12 CBM. The comparison is only meaningful when it includes origin CFS, destination CFS and unpacking — an ocean rate on its own will always make LCL look like the winner.",
      },
      {
        h2: "Sizing a first order into Southeast Asia",
        bullets: [
          "Open at 100–200 pieces per size and colour and combine categories into one shipment. There is no container-level minimum to reach, so there is no reason to over-commit on a first order.",
          "Expect two or three colours to be normal rather than an exception, and price them in from the start so the lead time is not a surprise.",
          "Buy towel-heavy for a resort or a hot-climate city property. Absorbency retention after repeat washing matters more here than hand feel, and loop construction matters more than weight.",
          "If the property has a pool, put pool and beach towels in the first order rather than the second — chlorine resistance and colour fastness to chlorinated water are the tests a striped pool towel fails first.",
          "Keep the first order within one construction per category where you can. Fewer variants means a simpler inspection standard and a shorter production window.",
        ],
      },
      {
        h2: "Five questions to send before you book",
        paras: [
          "Every one of these changes the number, and all five are answerable before the goods are packed rather than after.",
        ],
        bullets: BOOKING_QUESTIONS,
        note: BOOKING_NOTE,
      },
    ],
    action:
      "Send the whole requirement in one enquiry — categories, quantities, colours and the destination port. A mixed first order is quoted as one contract, one specification sheet per programme, one inspection standard and one set of shipping documents, with the member factory that makes each line named on the contract. Sending towels, bedding and bathrobes separately is how a first order ends up as three expensive part-loads.",
    faqs: [
      {
        q: "What is the minimum order for hotel linen into Malaysia or Vietnam?",
        a: "From 100 pieces per size and colour for bedding pieces and bathrobes, from 200 pieces per colour for towels, bath mats and table linen, and from 50 pieces for a trial. There is no container-level minimum, so you are not obliged to fill a container before we will quote. Note that these are per-colour minimums: a three-colour order is three minimum runs, not one.",
      },
      {
        q: "Should my first order be LCL or a full container?",
        a: "The break-even is around 13–15 CBM once destination charges are included. Below that LCL is usually cheaper; above it a 20ft container normally wins, and past roughly 35–45 CBM a 40ft is almost always better value. On this lane LCL costs you very little in time, so a genuinely small trial is a reasonable first move. Ask for both quotes once you pass about 12 CBM.",
      },
      {
        q: "Can you combine towels, bedding and bathrobes in one shipment?",
        a: "Yes, and it is the normal way to open a Southeast Asian programme. The categories run in different member factories inside the same Nantong cluster, so we build the loading plan across them. You get one contract, one specification sheet per programme, one inspection standard and one set of shipping documents — and the member factory that makes each line is named on the contract and ships under its own export licence.",
      },
      {
        q: "How many colours can I put in a first order?",
        a: "As many as you like, but each one carries its own minimum run and its own dye booking, which adds both cost per piece and lead time. Two or three colours in one SKU family is routine in this market. The discipline that pays is fixing the colour list before the order is placed: a shade added after cutting restarts the dye booking and pushes the shipping date.",
      },
    ],
  },

  {
    topic: "first-order",
    regionSlug: "south-america",
    h1: "Planning a First Hotel Linen Order into South America — MOQ, Mixed Loading and LCL vs FCL",
    metaTitle: "First Hotel Linen Order into South America — MOQ & Container Planning",
    metaDescription:
      "Sizing a first hotel linen order for a 25–45 day lane: alliance minimums from 100 pcs, mixed container composition, and the LCL/FCL break-even at 13–15 CBM.",
    opening:
      "On a 25–45 day lane an undersized first order is not conservative — it is expensive. The freight is disproportionate to the goods, you wait a quarter to learn anything, and you reorder into the same long transit. The buyers who do this well treat the first shipment as a deliberate container-sized decision: sample first, then buy enough to make the sailing worth it. This page is about setting that size without over-committing to a single SKU you have never sold.",
    facts: [
      { label: "Entry minimum", value: "From 100 pcs per size/colour" },
      { label: "Container minimum", value: "None — LCL to FCL without changing supplier" },
      { label: "LCL/FCL break-even", value: "About 13–15 CBM" },
    ],
    sections: [
      {
        h2: "The real minimums, by category",
        paras: [
          "The minimums themselves are the same as anywhere in the alliance — it is the freight that makes them matter differently. On this lane the per-colour minimum is rarely what stops you; the question is whether the total volume justifies the crossing.",
        ],
        table: MOQ_TABLE,
        note: MOQ_NOTE,
      },
      {
        h2: "Mix the container instead of filling it with one SKU",
        paras: [
          "Because a first order here should reach useful volume, the composition matters more than on a short lane. Buying across categories reaches that volume without over-buying any one item, and it spreads the risk of guessing wrong about what sells in your market.",
        ],
        table: MIX_TABLE,
        note: MIX_NOTE,
      },
      {
        h2: "LCL or a full container?",
        paras: [
          "The break-even sits around 13–15 CBM once destination charges are counted. On this lane, LCL also adds roughly 2–5 days for consolidation at origin and deconsolidation at destination, on top of a sailing that is already four to six weeks. So the case for a container arrives earlier than the pure cost maths suggests, because paying for unused space buys back time on a lane where time is the scarce good.",
          "If your first order lands below the break-even, an intentional LCL shipment is still sensible — it is a market test, not a commitment. What is not sensible is an LCL shipment of 25 CBM because nobody ran the container comparison. For the volume maths, see " +
            CAPACITY_LINK_LABEL +
            ".",
        ],
        note:
          "On this lane it is worth asking for both quotes from about 10 CBM upwards. The difference in total cost at 13 CBM is usually small enough that factors like the faster clearance on a sealed container decide it.",
      },
      {
        h2: "Sizing a first order into South America",
        bullets: [
          "Sample first, then size the order deliberately to the container or to the LCL break-even. A trial that is too small to be worth the freight costs you a quarter rather than saving you money.",
          "Lock the specification before production and hold it across reorders. Percale for warm coastal properties and a heavier sateen for cold Andean or southern locations is a common split for the same brand.",
          "If you resell across borders — particularly through the Panamanian free zone — treat the certificate of origin as part of the product. A shipment with a properly issued certificate can be re-exported and its origin defended, and one without it cannot.",
          "Expect L/C at sight to be the more common instrument for a first order here, and note that the certificate of origin becomes part of the document set the bank releases against.",
          "Keep the first order to one construction per category. On a four-week sailing, a rework caused by a late specification change is a lost month.",
        ],
      },
      {
        h2: "Five questions to send before you book",
        paras: [
          "All five are answerable before the goods are packed, and each one changes the number you are comparing.",
        ],
        bullets: BOOKING_QUESTIONS,
        note: BOOKING_NOTE,
      },
    ],
    action:
      "Send the target date, the destination port and the full category list in one enquiry. On a lane this long, the loading plan and the sailing choice are what decide whether the order works, and both are easier to get right when the whole requirement is quoted together rather than category by category.",
    faqs: [
      {
        q: "What is the MOQ for a first order into Chile or Colombia?",
        a: "From 100 pieces per size and colour for bedding and bathrobes, 200 pieces per colour for towels and table linen, and 50 pieces for a trial. There is no container-level minimum. On a lane this long, though, many buyers prefer to size the first order to the LCL break-even — usually around 13–15 CBM — so the freight is not disproportionate to the goods.",
      },
      {
        q: "Is a small trial order worth it on such a long lane?",
        a: "A small trial is still the right first step if it is deliberate — it tests the specification and the supplier before you commit to a container programme. What does not work is an accidental small order: a part-load that arrives three months later, teaches you less than one sample box would have, and still cost you a crossing. Sample first, then decide the first bulk size against the break-even.",
      },
      {
        q: "Can I open with LCL and move to a container later?",
        a: "Yes, and it is a normal progression. Because the alliance imposes no container-level minimum, you can open with an LCL shipment sized to the break-even and scale into a full container on the reorder without changing supplier, specification or inspection standard. Just run the container comparison again at the reorder rather than assuming LCL still wins.",
      },
      {
        q: "Does the certificate of origin change how I should size the order?",
        a: "It changes how you should document it, and it interacts with size in one way: a certificate is issued per shipment against a specific HS code and description, so a first order split across several small shipments means several certificates and several sets of origin paperwork. Consolidating into one reasonably sized shipment keeps the documentation cost proportionate to the goods.",
      },
    ],
  },

  {
    topic: "first-order",
    regionSlug: "central-asia",
    h1: "Planning a First Hotel Linen Order into Central Asia — Minimums, Mixed Loading and Rail",
    metaTitle: "First Hotel Linen Order into Central Asia — MOQ, Mixed Loading & Rail",
    metaDescription:
      "Project orders quoted as one specification set, alliance minimums from 100 pcs, and why rail consolidates better than it splits. FOB factory-direct from Nantong.",
    opening:
      "Central Asian demand is mostly project-driven: a property opens or is renovated, and the whole bedroom and bathroom inventory is ordered at once. That makes the useful unit of enquiry the building, not the SKU — and it makes the first order a specification question rather than a freight question. It also means the first order should be composed to keep the conformity file simple, because every additional construction is another line to document before the goods can move.",
    facts: [
      { label: "Entry minimum", value: "From 100 pcs per size/colour" },
      { label: "Bedding fabric", value: "From 3,000 m per construction" },
      { label: "Loading", value: "One rail consignment, not several" },
    ],
    sections: [
      {
        h2: "The real minimums, by category",
        paras: [
          "The minimums are modest relative to a project order, which is the point: on a whole-building order they are not what constrains you. What constrains a project order is the variety of constructions you introduce, because each one becomes a separate line in the technical file your EAEU representative has to declare.",
        ],
        table: MOQ_TABLE,
        note: MOQ_NOTE,
      },
      {
        h2: "Compose the order so the conformity file stays simple",
        paras: [
          "Under TR CU 017/2011 hotel bed linen, towels and bathrobes sit in Layer I, the most strictly regulated group, and the declaration or certificate can only be applied for by a company established inside the Eurasian Economic Union. Which route your shipment takes depends on the product classification, and it should be confirmed line by line with your own representative.",
          "That has a practical buying consequence: fewer constructions and fewer colourways means fewer lines to test, document and register. Buying bedding as a set — duvet cover, sheet and pillowcases drawn from one construction — is both simpler to specify and simpler to declare than buying each piece in a different cloth.",
        ],
      },
      {
        h2: "Mix the whole room into one consignment",
        paras: [
          "Rail consolidates better than it splits. The economics improve as the load grows towards a full container, so staging a project into three small shipments costs more per unit than sending two larger ones. Composing the order across categories is how a project reaches that volume without over-buying anything.",
        ],
        table: MIX_TABLE,
        note: MIX_NOTE,
      },
      {
        h2: "LCL is not the lever here — rail loading is",
        paras: [
          "Because the region is landlocked, sea freight is not a direct option, and the LCL-versus-container trade-off you would use on an ocean lane does not translate. The practical decision is how to fill a rail consignment, and the answer is usually the entire project inventory: bedroom and bathroom together, quoted as one specification set and loaded as one unit.",
          "One legitimate alternative is worth raising with a project buyer: bedding fabric sold by the metre, from 3,000 metres per construction, for properties that cut and sew locally. The same conformity route applies to the fabric and the technical file is simpler, because there is no finished-goods construction to document. For raw capacity figures on how much fits in a container, see " +
            CAPACITY_LINK_LABEL +
            ".",
        ],
        note:
          "If you are buying fabric rather than finished goods, the conformity question changes shape but does not disappear — confirm with your representative which route the fabric takes.",
      },
      {
        h2: "Sizing a first order into Central Asia",
        bullets: [
          "Quote the whole building in one enquiry: bedding sets or sheets and duvet covers, pillowcases, duvet inners, towels, bath mats, bathrobes and table linen if there is an F&B outlet.",
          "Confirm bed sizes carefully before the order is placed. Local sizing conventions differ from both US and EU standards, and a size error on a project order is expensive to correct.",
          "Decide towel GSM against your laundry, not against a warm-market specification. Cold-climate operations often specify a heavier towel than a tropical property.",
          "Do not overlook duvet inners in the first budget. They are essential to the region's winters and are frequently the line item added late, which moves the production window.",
          "Appoint the EAEU applicant at the sample stage, so the technical file we supply can be turned into a declaration while the goods are still in production.",
        ],
      },
      {
        h2: "Five questions to send before you book",
        paras: [
          "For a rail consignment the packing questions matter as much as the volume ones, because the loading plan is built before the goods leave the factory.",
        ],
        bullets: BOOKING_QUESTIONS,
        note: BOOKING_NOTE,
      },
    ],
    action:
      "Send the room list, the destination city and the handover date together, and tell us who the EAEU applicant will be. A full hotel inventory can be quoted as one contract, one specification sheet per programme, one inspection standard and one set of shipping documents, loaded as a single rail consignment — and sequencing it that way is what keeps the conformity file and the production window running in parallel.",
    faqs: [
      {
        q: "What does a new hotel project usually order first?",
        a: "The full room inventory, quoted as one specification set: bedding sets or bed sheets and duvet covers, pillowcases, duvet inners, towels, bath mats and often bathrobes, with table linen if there is an F&B outlet. Because the alliance covers all of these categories, it can be one contract, one specification sheet per programme, one inspection standard and one set of shipping documents, loaded as a single rail consignment instead of several separate imports.",
      },
      {
        q: "Should I split the project into several shipments?",
        a: "Usually not. Rail consolidates better than it splits — the economics improve as the load grows towards a full container, so three small consignments cost more per unit than two larger ones. Splitting also multiplies the documentation and can multiply the conformity lines. The exception is where a partial delivery is genuinely needed to start fitting out a floor, in which case we would plan the split rather than let it happen.",
      },
      {
        q: "Does buying fewer constructions really save time?",
        a: "It simplifies the conformity file, which on this corridor is often the longest item in the timeline. Each construction is a line to test, document and register with your EAEU representative. Buying bedding as a set — one construction across duvet cover, sheet and pillowcases — reduces the number of lines without reducing the quality of the product.",
      },
      {
        q: "Can we buy bedding fabric instead of finished goods?",
        a: "Yes. Bedding fabric is supplied by the metre from 3,000 metres per construction, which suits buyers who cut and sew locally. The conformity route still applies, and the technical file is simpler because there is no finished-goods construction to document. Confirm with your representative which route the fabric takes.",
      },
    ],
  },

  {
    topic: "first-order",
    regionSlug: "africa",
    h1: "Planning a First Hotel Linen Order into Africa — Minimums, Mixed Loading and the Container Decision",
    metaTitle: "First Hotel Linen Order into Africa — MOQ, Mixed Loading & Certification",
    metaDescription:
      "Alliance minimums from 100 pcs, how to reach container volume without over-buying, and why the certification timetable should shape a first African order.",
    opening:
      "The first African order is shaped by two things that have nothing to do with price: the conformity timetable, which starts before production, and the freight decision, which punishes part-loads more heavily here than on almost any other lane. Get the certification out of the way and compose the order so it fills a sensible share of a container, and the first shipment behaves. Skip either step and the goods sit at the port.",
    facts: [
      { label: "Entry minimum", value: "From 100 pcs per size/colour" },
      { label: "Certification", value: "Before shipment, not on arrival" },
      { label: "LCL/FCL break-even", value: "About 13–15 CBM" },
    ],
    sections: [
      {
        h2: "The real minimums, by category",
        paras: [
          "The minimums are the same wherever the goods are going, and they are low enough that a first order rarely bumps into them. What a first order here does bump into is the container: if the goods are going to fill most of a box, they should fill it deliberately.",
        ],
        table: MOQ_TABLE,
        note: MOQ_NOTE,
      },
      {
        h2: "Certification first, then production",
        paras: [
          "This is the sequencing rule that matters most on this continent, and it applies to the first order more than to any other, because the first order is where the paperwork is unfamiliar. A Kenya Certificate of Conformity takes 10–15 working days and depends on a textile test report that is typically under three months old; a Nigerian shipment needs a Product Certificate in place before the Form M can be opened.",
          "For a first order, the practical sequence is: confirm the specification, obtain or refresh the test report, start the conformity application, then produce. Placing the order before the report exists makes the certificate the critical path and the goods wait — which is a delay you pay for in penalties and demurrage rather than in price.",
        ],
      },
      {
        h2: "Mix the container instead of filling it with one SKU",
        paras: [
          "African buyers split into two groups. Distributors and laundry groups buy container-level programmes of core white stock, where volume justifies a full container and the mixing is across towel sizes and sheet sizes. Individual hotels and smaller suppliers buy mixed loads, where filling the container sensibly matters more than reaching a minimum. In both cases, buying across categories reaches volume without over-buying any single item.",
        ],
        table: MIX_TABLE,
        note: MIX_NOTE,
      },
      {
        h2: "LCL or a full container?",
        paras: [
          "The break-even is around 13–15 CBM, but on this continent the destination side shifts it earlier. LCL unpacking charges are high in African ports, and West African congestion can add time to a shared load as well as cost. Once a shipment reaches roughly 13–15 CBM, a dedicated 20ft container usually costs less overall than LCL and clears on its own documents rather than waiting for the rest of a consolidated box.",
          "If the first order is a genuine test, an LCL shipment is still the right call. What should not happen is a 15 CBM order going LCL because nobody compared. For the raw volume figures, see " +
            CAPACITY_LINK_LABEL +
            ".",
        ],
        note:
          "On a first order, ask for both an LCL and a 20ft quote from about 10 CBM upwards, with destination charges included on the LCL side. The ocean rate alone will always make LCL look cheaper.",
      },
      {
        h2: "Sizing a first order into Africa",
        bullets: [
          "Ask for both towel weights on the same construction so the trade-off is visible on paper. Where laundry is done manually or hot-water drying is limited, a 500–600 GSM towel frequently outlasts a heavier, more expensive specification.",
          "Specify the shrinkage limit explicitly on bed linen and hold it across reorders. Percale handles frequent washing and dries faster than sateen, which matters where drying capacity is limited.",
          "Decide the label content before the order is placed — fibre composition, country of origin and care instructions — because labels are printed during production.",
          "Give us the HS code and the description you will declare at the order stage, so the certificate of origin and the carton markings are built correctly the first time.",
          "Keep the first order to a manageable number of constructions. Each additional construction is more to inspect, more to document and more that can go wrong in a first shipment.",
        ],
      },
      {
        h2: "Five questions to send before you book",
        paras: [
          "Ask all five before the booking is confirmed. Each one changes either the freight or the documentation, and both are harder to correct after the goods are packed.",
        ],
        bullets: BOOKING_QUESTIONS,
        note: BOOKING_NOTE,
      },
    ],
    action:
      "Send the destination port, the conformity scheme your clearing agent names, and the full category list in one enquiry. We will build the document set and the carton markings to suit that scheme, quote the first order across categories so it reaches container volume without over-buying, and give you the LCL and container options side by side.",
    faqs: [
      {
        q: "What is the MOQ for a first order into Kenya or Nigeria?",
        a: "From 100 pieces per size and colour for bedding and bathrobes, 200 pieces per colour for towels, bath mats and table linen, and 50 pieces for a trial. There is no container-level minimum. The constraint on a first African order is more often the container decision than the piece minimum: below roughly 13–15 CBM LCL is usually cheaper, and above it a 20ft container normally costs less overall once destination unpacking charges are counted.",
      },
      {
        q: "How should I sequence a first order so it does not get stuck?",
        a: "Confirm the specification, obtain or refresh the textile test report, start the conformity application, then produce and inspect before loading. On a Kenya shipment the COC takes 10–15 working days and depends on a report that is typically under three months old; on a Nigeria shipment the Product Certificate has to be in place before the Form M can be opened. Treating certification as post-arrival paperwork is the mistake that costs the most.",
      },
      {
        q: "Can you combine towels, bedding and table linen in one first order?",
        a: "Yes, and on this continent it is often what makes the freight sensible. The categories run in different member factories within the same Nantong cluster, so we quote them together and build the loading plan across them. You get one contract, one specification sheet per programme, one inspection standard and one set of shipping documents, with the member factory that makes each line named on the contract.",
      },
      {
        q: "Should I buy heavy towels for a hot climate?",
        a: "Often not. Where laundry is done manually or drying capacity is limited, a very heavy high-GSM towel takes much longer to dry, wears faster and increases your own laundry cost per wash. A 500–600 GSM towel with good absorbency and drying behaviour frequently outlasts a heavier specification at a lower unit price. Ask us to quote both weights on the same construction so you can compare the trade-off directly.",
      },
    ],
  },
];

export const MARKET_SUBPAGES: MarketSubpage[] = [...LEAD_TIME_PAGES, ...FIRST_ORDER_PAGES];

export function getMarketSubpage(
  regionSlug: string,
  topic: string,
): MarketSubpage | undefined {
  return MARKET_SUBPAGES.find((s) => s.regionSlug === regionSlug && s.topic === topic);
}

/** The sub-pages that belong under one region page, in display order. */
export function subpagesForRegion(regionSlug: string): MarketSubpage[] {
  return MARKET_SUBPAGES.filter((s) => s.regionSlug === regionSlug);
}

export function isSubpageTopic(value: string): value is SubpageTopicSlug {
  return value === "lead-time" || value === "first-order";
}
