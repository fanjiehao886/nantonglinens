/**
 * Region data for /markets and the four regional landing pages.
 *
 * Why this file exists: buyers in Southeast Asia, South America, Central Asia
 * and Africa do not ask the same questions as buyers in the US or the EU. Their
 * questions are about duty treatment, certificate of origin, pre-shipment
 * conformity certificates, landlocked routing and first-order size. A generic
 * "we ship worldwide" sentence does not answer any of them, and it does not
 * rank for them either. Each region therefore gets its own page with its own
 * ports, its own transit bands and its own compliance reality.
 *
 * Rules for editing this file:
 * - Numbers must stay checkable. Transit figures are port-to-port bands, not
 *   promises, and the pages say so. Where a figure could not be sourced, the
 *   copy states a principle instead of a number.
 * - Never write "group", "our own mill", "our own factory", "sourcing agent",
 *   "partner factories". The identity is a manufacturer alliance of independent
 *   FOB export factories (see src/lib/company.ts).
 * - Never name a competitor company.
 * - Regulations change. `lastReviewed` is shown on every region page so a buyer
 *   knows how current the guidance is.
 */

export const MARKETS_LAST_REVIEWED = "October 2026";

export type MarketLane = {
  destination: string;
  gateways: string;
  transit: string;
};

export type MarketFact = {
  label: string;
  value: string;
};

export type MarketCompliance = {
  title: string;
  body: string;
};

export type MarketProduct = {
  name: string;
  href: string;
  why: string;
};

export type MarketFaq = {
  q: string;
  a: string;
};

export type MarketRegion = {
  slug: string;
  name: string;
  /** Short label used on cards and chips. */
  shortName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Opening paragraph — must name the buyer's decision problem, not the region's GDP. */
  opening: string;
  countries: string[];
  buyerProfile: string;
  /** The two or three numbers a buyer actually needs first. */
  headlineFacts: MarketFact[];
  /** Duty / trade-agreement reality. This is the section competitors leave out. */
  tradeTitle: string;
  tradeBody: string[];
  /** Shipping or rail lanes with honest bands. */
  laneMode: string;
  lanesTitle: string;
  lanes: MarketLane[];
  laneNote: string;
  /** Typical first order and MOQ guidance. */
  orderTitle: string;
  orderBody: string[];
  orderFacts: MarketFact[];
  /** Conformity / labelling requirements the buyer must arrange. */
  complianceTitle: string;
  complianceIntro: string;
  compliance: MarketCompliance[];
  /** What to buy first for this market, and why. */
  productTitle: string;
  productIntro: string;
  products: MarketProduct[];
  /** Payment and risk terms common in the region. */
  paymentTitle: string;
  paymentBody: string[];
  faqs: MarketFaq[];
};

export const MARKET_REGIONS: MarketRegion[] = [
  /* ------------------------------------------------------------------ */
  /* SOUTHEAST ASIA                                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "southeast-asia",
    name: "Southeast Asia",
    shortName: "SE Asia",
    h1: "Hotel Linen Supplier for Southeast Asia — Factory-Direct from Nantong",
    metaTitle: "Hotel Linen Supplier for Southeast Asia — FOB Factory-Direct",
    metaDescription:
      "Hotel linen supplier for Southeast Asia: ACFTA Form E origin certificates, 5–12 day transit, MOQ from 100 pcs, factory-direct FOB from Nantong, China.",
    opening:
      "If you import hotel linen into Southeast Asia, the price on the invoice is rarely your real cost. The tariff line, whether your supplier can raise a Form E, and whether the description on that certificate matches what is actually in the container decide your landed cost more than the unit price does. Indonesia rejects a disproportionate share of certificates for exactly this reason. This page sets out what a Southeast Asian importer should nail down before placing a hotel linen order, and what our member factories can and cannot do about it.",
    countries: [
      "Singapore",
      "Malaysia",
      "Vietnam",
      "Thailand",
      "Indonesia",
      "Philippines",
      "Cambodia",
      "Myanmar",
      "Brunei",
      "Laos",
    ],
    buyerProfile:
      "Hospitality distributors, linen rental and laundry groups, hotel and resort operators, and F&B suppliers. Order sizes range from a boutique property testing 200 bath towels to a distributor restocking a warehouse programme across several SKUs. Tropical operations wash hot and often, so absorbency retention and colour fastness matter more here than hand feel.",
    headlineFacts: [
      { label: "Duty route", value: "ACFTA / Form E" },
      { label: "Sea transit", value: "About 5–12 days" },
      { label: "Entry MOQ", value: "From 100 pcs" },
    ],
    tradeTitle: "The tariff question: ACFTA and the Form E certificate",
    tradeBody: [
      "Southeast Asia is the one region on this site where a Chinese supplier's paperwork can genuinely cut your duty to zero. Under the ASEAN–China Free Trade Area, an importer presenting a valid Form E preferential certificate of origin pays the ACFTA rate instead of the MFN rate — and for many textile lines the ACFTA rate is zero, or a fraction of MFN. Without the certificate, the shipment is assessed at the standard MFN rate. The gap is large enough that the certificate is worth as much as a price negotiation.",
      "Form E is issued in China by the General Administration of Customs or by the China Council for the Promotion of International Trade (CCPIT). It covers all ten ASEAN members: Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand and Vietnam. The certificate has to be completed to the origin rules — the 6-digit HS code must appear in the goods-description box, and the goods description must be specific. Words like \"garment\", \"textiles\" or \"hotel goods\" are treated as vague and are a standard cause of rejection.",
      "Indonesia applies the rules strictly and runs retroactive verification against certificates it has already accepted. Where the description is vague, the HS code does not match the invoice, or the goods moved through a third country without a non-manipulation document, the preferential rate can be withdrawn after the fact and a deposit forfeited. Two habits prevent this: give the mill the exact HS code and product description you declare to your own customs, and ask for direct routing to your port rather than a transshipment that needs extra paperwork. When you order through us, we raise the Form E against the description and HS code you supply, and we will tell you if the two cannot be reconciled before the goods are packed.",
      "Singapore has its own arrangement under the China–Singapore FTA (Form X) as well as ACFTA, so confirm which instrument your broker prefers. If you reclaim under ACFTA, the goods must satisfy the direct-consignment rule, or hold a non-manipulation certificate if they transited a non-ACFTA country.",
    ],
    laneMode: "Sea freight",
    lanesTitle: "Sea freight from Nantong / Shanghai / Ningbo",
    lanes: [
      {
        destination: "Singapore",
        gateways: "Singapore (PSA)",
        transit: "About 5–10 days",
      },
      {
        destination: "Malaysia, Vietnam, Thailand",
        gateways: "Port Klang, Penang; Cat Lai and Cai Mep (Ho Chi Minh City); Laem Chabang",
        transit: "About 6–12 days",
      },
      {
        destination: "Indonesia, Philippines",
        gateways: "Tanjung Priok (Jakarta), Belawan; Manila (MICT)",
        transit: "About 9–15 days",
      },
    ],
    laneNote:
      "Bands are port-to-port and exclude inland haulage and your import clearance. Carriers rotate and peak season (August–November) adds time. Ask for the current sailing schedule against your delivery window rather than relying on a planning band.",
    orderTitle: "What a first order looks like in this region",
    orderBody: [
      "Most Southeast Asian importers we quote start at less than a full container and grow from there. That suits the alliance model: because the lines belong to the member factories, we do not impose a container-level minimum, so a distributor can open with 100–200 pieces per size and colour and combine categories into one shipment.",
      "Watch the colour minimum rather than the piece count. A white programme is the easy part; the moment you add a dyed shade — a sand or taupe towel, a navy bathrobe — that colour has its own minimum run and its own lead time, because the yarn or fabric is dyed for that order. Two or three colours in one SKU family is normal in this market and we will quote it, but it is the reason a five-colour order can take noticeably longer than a one-colour order of the same total volume.",
      "For mixed-category first orders — bedding plus towelling plus bathrobes — send the whole requirement in one enquiry. The categories run in different member factories, and quoting them together is how the loading plan gets built properly instead of the container arriving half empty.",
    ],
    orderFacts: [
      { label: "Bed sheets, duvet covers, pillowcases, bathrobes", value: "From 100 pcs per size/colour" },
      { label: "Towels, bath mats, table linen", value: "From 200 pcs per colour" },
      { label: "Trial order", value: "From 50 pcs" },
      { label: "Bulk lead time", value: "20–40 days (peak Aug–Nov adds 7–10)" },
    ],
    complianceTitle: "Conformity, labelling and certificates you arrange",
    complianceIntro:
      "These are the importer's obligations, not the mill's — but a supplier who knows them will quote you the right test report and label the cartons correctly instead of costing you a delay at the port.",
    compliance: [
      {
        title: "Form E certificate of origin (all ten ASEAN members)",
        body:
          "Applied for in China by us once you give the exact HS code and the description you will declare. Must satisfy the ACFTA rules of origin and the direct-consignment rule. Cost of getting this wrong: the full MFN duty, plus in Indonesia's case a possible post-clearance challenge.",
      },
      {
        title: "Indonesia — the strict one",
        body:
          "Indonesia both verifies certificates retroactively and requires specific goods descriptions. Declare the product by name and construction, keep the HS code consistent between invoice, packing list and certificate, and confirm the routing before booking. If your broker wants a non-manipulation certificate because of a transshipment, that must be arranged at origin, not at the destination.",
      },
      {
        title: "Test reports and OEKO-TEX",
        body:
          "Nothing mandatory blocks plain cotton hotel linen into most ASEAN markets, but almost every buyer here is asked for a test report by their own customer. Alliance factories hold OEKO-TEX Standard 100 and ISO 9001; we supply the certificate numbers with the quotation so your buyer can check them, and can arrange a fresh third-party test report (SGS, Intertek, Bureau Veritas) on request.",
      },
      {
        title: "Labelling in the destination language",
        body:
          "Care and composition labels are frequently required in Bahasa, Vietnamese or Thai for retail sale, though not for contract hotel supply. Tell us which case applies to you and we produce the care label in the language your market requires — this is a labelling decision made at the artwork stage, not something to fix after the goods are packed.",
      },
    ],
    productTitle: "What to buy first for this market",
    productIntro:
      "Humidity and pool use drive the specification here, and chlorine is what actually kills towels in tropical resorts.",
    products: [
      {
        name: "Bath towels & bath mats",
        href: "/products/bath-towels",
        why:
          "The highest-volume category in the region. Specify absorbency after repeat washing, not just GSM — a higher count is not automatically the more durable towel, and loop construction matters more than weight in a market that washes daily.",
      },
      {
        name: "Pool & beach towels",
        href: "/products/pool-beach-towels",
        why:
          "Resort and beach properties. Ask specifically about chlorine resistance and colour fastness to chlorinated water, because that is the test a striped pool towel fails first.",
      },
      {
        name: "Bed sheets & pillowcases",
        href: "/products/bed-sheets",
        why:
          "Percale suits the climate better than sateen for many properties here — it dries faster and handles high-frequency laundering with less pilling. Spec 60s percale with a stated shrinkage limit and hold it across reorders.",
      },
      {
        name: "Bathrobes",
        href: "/products/bathrobes",
        why:
          "Waffle robes dry far faster than terry and are the better choice in a tropical or high-occupancy property where robes are laundered daily after single use.",
      },
    ],
    paymentTitle: "Payment and risk",
    paymentBody: [
      "Standard terms across the alliance are 30% deposit with the order and 70% before shipment, by T/T or L/C at sight. For Southeast Asian buyers, the practical risk item is not the deposit — it is the conformity of the shipping documents with the destination's requirements. A deposit protects us; the certificate of origin protects you. Agree the HS code and goods description in writing before production, so the certificate you need three weeks later is not built on an assumption made today.",
      "Because the member factory that produces your order holds its own export licence and is named on the contract, the invoice and the bill of lading trace back to the plant that made the goods. That matters if your own customs authority ever asks who manufactured them.",
    ],
    faqs: [
      {
        q: "Do you supply the Form E certificate of origin?",
        a: "Yes. We raise it in China with the General Administration of Customs or the CCPIT once you supply the 6-digit HS code and the goods description you will declare. Two conditions apply: the certificate follows the ACFTA rules of origin and the direct-consignment rule, so if a transshipment is unavoidable the non-manipulation document has to be arranged at origin. We will tell you before packing if the description you want and the origin criterion do not reconcile.",
      },
      {
        q: "Why does a multi-colour order take longer than a white one?",
        a: "Because colour carries its own minimum run. White fabric is stocked and dyed in bulk; a specific shade — including dark shades and Pantone matches — has to be dyed for your order, which adds both a colour minimum and time before cutting starts. This is a manufacturing reality, not a scheduling choice, and it is the single most common cause of an unexpectedly long lead time.",
      },
      {
        q: "Can you ship a mixed order of towels, bedding and bathrobes together?",
        a: "Yes, and it is the normal way to open a Southeast Asian programme. The categories run in different member factories within the same Nantong cluster, so we build the loading plan across them and you get one contract, one specification sheet per programme, one inspection standard and one set of shipping documents. Mixed loading is also how a first order reaches container volume without you over-buying any single SKU.",
      },
      {
        q: "What is the MOQ for a first order into Malaysia or Vietnam?",
        a: "From 100 pieces per size and colour for bedding pieces and bathrobes, from 200 pieces per colour for towels, table linen and bath mats, and from 50 pieces for a trial. There is no container-level minimum, so you are not obliged to fill a container before we will quote.",
      },
      {
        q: "Do you handle the labelling required in my market?",
        a: "Yes. Tell us the language and the content your market requires — fibre composition, country of origin, care instructions — and we produce the care label and carton marking to that specification. It has to be decided at the artwork stage, because it is printed before the goods are packed.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SOUTH AMERICA                                                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "south-america",
    name: "South America & Latin America",
    shortName: "South America",
    h1: "Hotel Linen Supplier for South America — Factory-Direct from Nantong",
    metaTitle: "Hotel Linen Supplier for South America — FOB Factory-Direct",
    metaDescription:
      "Hotel linen supplier for South America and Latin America: China–Chile zero-duty certificates of origin, Panama free-zone consolidation, factory-direct FOB from Nantong.",
    opening:
      "Latin America does not have one import rule for Chinese goods, and that is the mistake most buyers make when they compare quotes. Chile and Peru have free trade agreements with China; Brazil, Colombia, Mexico and Panama do not, and Brazil stacks three taxes on top of each other. Two mills can quote the same FOB price and land at your warehouse at genuinely different numbers, because the duty treatment depends on your country and on whether your supplier can produce the right certificate. This page is about getting to a comparable landed cost before you commit.",
    countries: [
      "Chile",
      "Peru",
      "Colombia",
      "Brazil",
      "Argentina",
      "Ecuador",
      "Uruguay",
      "Paraguay",
      "Bolivia",
      "Panama",
    ],
    buyerProfile:
      "Hospitality distributors and importers, hotel groups and management companies, resorts, and free-zone re-exporters who supply several countries from one warehouse. Order sizes tend toward container-level programmes for distributors and smaller mixed loads for individual properties. Cross-border resale from a free zone is common, which is why getting the origin documentation right at the first shipment pays for itself repeatedly.",
    headlineFacts: [
      { label: "Duty route", value: "Country by country" },
      { label: "Sea transit", value: "About 25–45 days" },
      { label: "Entry MOQ", value: "From 100 pcs" },
    ],
    tradeTitle: "The tariff question: two countries with an agreement, the rest without",
    tradeBody: [
      "Chile is the most favourable destination in the region for Chinese hotel linen. The China–Chile FTA has been in force since 2006 and covers roughly 98% of products at zero duty. Chile's baseline MFN tariff is a flat 6%, so with a valid China–Chile certificate of origin your duty falls from 6% to zero. Without the certificate, customs applies the full 6%. Chilean VAT of 19% is charged on the CIF value plus duty, and it applies regardless of shipment value. Textiles are among the lines that reach zero under the agreement.",
      "Peru has had a free trade agreement with China since 2010, but it is not complete: around 10% of Peru's tariff lines are excluded, and textiles are specifically among the exclusions. So do not assume that a Peru shipment is duty-free just because an agreement exists. Check the exact tariff line before you sign a proforma invoice — the certificate of origin still has to be produced for the lines that are covered. Peru's VAT is 18%, and the new port of Chancay, opened in late 2024, now gives Chinese freight a second gateway alongside Callao.",
      "Brazil, Colombia, Mexico and Panama have no free trade agreement with China. Brazil is the one to model carefully: import duty (II) is charged on CIF, then IPI of roughly 0–15% on CIF plus II, then state ICMS at around 17–19%. Because the taxes compound rather than stack flat, the effective landed cost can be far above the FOB price — published trade analyses put a US$100,000 FOB consignment at roughly US$169,000 cleared. That is a tax-structure outcome, not a supplier's margin, and it is why a Brazilian buyer should compare suppliers on FOB price and specification only, with duty modelled separately.",
      "Practical consequence for the whole region: never compare two quotes on FOB price alone, and never let a supplier tell you a destination is duty-free without naming the certificate that makes it so. Get your broker's landed-cost calculation for your own tariff line, then compare supplier FOB prices against it.",
    ],
    laneMode: "Sea freight",
    lanesTitle: "Sea freight from Nantong / Shanghai / Ningbo",
    lanes: [
      {
        destination: "Peru, Ecuador",
        gateways: "Callao, Chancay (Peru); Guayaquil (Ecuador)",
        transit: "About 25–38 days",
      },
      {
        destination: "Chile",
        gateways: "San Antonio, Valparaíso",
        transit: "About 30–40 days",
      },
      {
        destination: "Brazil, Argentina, Uruguay",
        gateways: "Santos, Itajaí; Buenos Aires; Montevideo",
        transit: "About 32–45 days",
      },
      {
        destination: "Colombia, Panama",
        gateways: "Cartagena, Buenaventura; Balboa, Colón",
        transit: "About 26–38 days",
      },
    ],
    laneNote:
      "Port-to-port bands, excluding inland haulage and import clearance. These are long lanes: schedule reliability and blank sailings move these numbers more than they move Asian routes. LCL options add roughly 2–5 days for consolidation and deconsolidation.",
    orderTitle: "What a first order looks like in this region",
    orderBody: [
      "The long ocean transit changes how you should size a first order. With 25–45 days at sea plus clearance and inland delivery, a trial that is too small to be worth the freight is a wasted quarter, while an over-large trial ties up capital for two months. The workable pattern we see is: sample first, then a deliberate first order sized to the container or the LCL break-even, with the specification locked before production rather than adjusted afterwards.",
      "On LCL economics, the break-even against a dedicated container typically sits somewhere around 13–15 CBM. Below that, LCL is usually cheaper even after destination unpacking charges; above it, a 20ft container is normally the better value and moves faster through the terminal. Because the alliance has no container-level minimum, you can open with an LCL shipment and scale into a full container on the reorder without changing supplier.",
      "For buyers who resell across borders — especially through the Panamanian free zone — treat the origin documentation as part of the product. A shipment that arrives with a properly issued certificate of origin can be re-exported and its origin defended; one without it cannot.",
    ],
    orderFacts: [
      { label: "Bed sheets, duvet covers, pillowcases, bathrobes", value: "From 100 pcs per size/colour" },
      { label: "Towels, bath mats, table linen", value: "From 200 pcs per colour" },
      { label: "Trial order", value: "From 50 pcs" },
      { label: "Bulk lead time", value: "20–40 days + 25–45 days transit" },
    ],
    complianceTitle: "Certificates and labelling you arrange",
    complianceIntro:
      "In this region the certificate of origin is a financial document. Missing one costs you the duty difference on the whole shipment, every time.",
    compliance: [
      {
        title: "Chile — China–Chile certificate of origin",
        body:
          "Required to claim the zero rate instead of the 6% MFN tariff. Tell us you are shipping to Chile and we raise the certificate with the correct HS code. Without it, Chilean customs assesses the flat 6% on the CIF value, and 19% VAT follows on CIF plus duty.",
      },
      {
        title: "Peru — check the tariff line first",
        body:
          "The China–Peru agreement excludes a set of lines, and textiles are among them. Do not assume zero duty. Confirm the treatment for your specific HS code with your broker before the order is placed, so a shipment is not built on a tariff assumption that turns out to be wrong.",
      },
      {
        title: "Brazil — model the compounding taxes",
        body:
          "No free trade agreement with China. Import duty on CIF, then IPI on CIF plus duty, then state ICMS on the running total. Because each layer applies to the previous one, the effective rate is higher than any single headline number. Brazil also requires the NCM classification and applies strict labelling rules for textiles.",
      },
      {
        title: "Spanish and Portuguese labelling",
        body:
          "Fibre composition, country of origin and care instructions in Spanish (or Portuguese for Brazil) are required for goods placed on the market. For contract hotel supply this is often waived; for distributor resale it is not. Decide which applies before the labels are printed.",
      },
      {
        title: "Test reports",
        body:
          "Alliance factories hold OEKO-TEX Standard 100 and ISO 9001, with certificate numbers supplied so your own customer can verify them. Fresh third-party reports from SGS, Intertek or Bureau Veritas can be arranged on request and are commonly asked for by Latin American retail buyers.",
      },
    ],
    productTitle: "What to buy first for this market",
    productIntro:
      "Many properties here span climates from Andean cold to tropical coast, so the same brand often needs two different bedding specifications.",
    products: [
      {
        name: "Bed sheets & pillowcases",
        href: "/products/bed-sheets",
        why:
          "The core repeat item for hotel groups and distributors. Specify percale for warm coastal properties and a heavier sateen for cold Andean or southern locations, and lock the shrinkage limit so reorders do not drift.",
      },
      {
        name: "Bedding sets",
        href: "/products/bedding-sets",
        why:
          "Matches local bed sizes without a separate buyer decision on each piece. Useful for new-build properties and for distributors who resell matched sets rather than open stock.",
      },
      {
        name: "Bath towels",
        href: "/products/bath-towels",
        why:
          "Steady volume across both hotel and retail channels. Confirm colour fastness for any dyed towel, since long transit and hot storage before sale can expose a weak dye lot.",
      },
      {
        name: "Table linen",
        href: "/products/table-linen",
        why:
          "Banquet and restaurant programmes. Ask whether spun polyester or cotton damask fits your laundry setup — the two behave differently under repeated high-temperature washing.",
      },
    ],
    paymentTitle: "Payment and risk",
    paymentBody: [
      "Standard alliance terms are 30% deposit with the order and 70% before shipment, by T/T or L/C at sight. L/C at sight is the more common instrument for first orders into this region, and it suits a long transit: the document set, including the certificate of origin, becomes part of what the bank releases against.",
      "The risk to manage on a 25–45 day lane is schedule slippage, not manufacturing. Build a buffer into your delivery date rather than compressing the production window, and agree in writing which party carries a blank sailing or a port delay. Because the producing member factory holds its own export licence and is named on the contract, the bill of lading traces back to the plant — useful evidence if the shipment is ever questioned.",
    ],
    faqs: [
      {
        q: "Is hotel linen duty-free into Chile?",
        a: "Effectively yes, for most textile lines, provided you present a valid China–Chile certificate of origin — duty falls from Chile's 6% MFN rate to zero. Without the certificate, customs applies the full 6%. Chilean VAT of 19% is charged separately on the CIF value plus duty and is not removed by the agreement. Confirm the tariff line with your broker, because the agreed rate follows the HS code.",
      },
      {
        q: "Is Peru covered by a free trade agreement with China?",
        a: "There is an agreement in force since 2010, but it does not cover everything — roughly 10% of Peru's tariff lines are excluded, and textiles are specifically among them. So a Peru shipment is not automatically duty-free. Check the treatment for your own HS code before signing the proforma, and still request the certificate of origin for the lines that are covered.",
      },
      {
        q: "Why does Brazil cost so much more than the FOB price suggests?",
        a: "Because Brazil has no free trade agreement with China and its taxes compound. Import duty is charged on CIF, IPI of around 0–15% is then charged on CIF plus duty, and state ICMS of roughly 17–19% applies on the running total. Published analyses put a US$100,000 FOB consignment at around US$169,000 cleared. That is the tax structure, not a supplier's margin — which is why Brazilian buyers should compare suppliers on FOB price and specification, and model duty separately.",
      },
      {
        q: "Can you ship to a free zone in Panama?",
        a: "Yes. Free-zone buyers typically re-export across several countries, so the important part is that the origin documentation is issued correctly at the first shipment and the cartons and packing list are marked consistently. Tell us at enquiry stage that the goods are re-exported, because it affects how we prepare the documents.",
      },
      {
        q: "What is the MOQ for a first order into Chile or Colombia?",
        a: "From 100 pieces per size and colour for bedding and bathrobes, 200 pieces per colour for towels and table linen, and 50 pieces for a trial. There is no container-level minimum. On a lane this long, though, many buyers prefer to size the first order to the LCL break-even — usually around 13–15 CBM — so the freight is not disproportionate to the goods.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* CENTRAL ASIA                                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "central-asia",
    name: "Central Asia",
    shortName: "Central Asia",
    h1: "Hotel Linen Supplier for Central Asia — Factory-Direct from Nantong",
    metaTitle: "Hotel Linen Supplier for Central Asia — Rail & FOB Factory-Direct",
    metaDescription:
      "Hotel linen supplier for Central Asia: rail from Alashankou and Khorgos, EAEU TR CU 017 conformity guidance, factory-direct FOB from Nantong, China.",
    opening:
      "Central Asia is the one market on this site where the compliance question, not the price question, decides whether your container clears. Kazakhstan, Kyrgyzstan and Armenia sit inside the Eurasian Economic Union, so hotel bed linen and towels fall under EAC technical regulation — and the declaration or certificate can only be applied for by a company established inside the union. A Chinese mill cannot issue it for you. Any supplier who says otherwise has not shipped here. This page sets out how the conformity route actually works, and how rail changes your lead time.",
    countries: [
      "Kazakhstan",
      "Uzbekistan",
      "Kyrgyzstan",
      "Tajikistan",
      "Turkmenistan",
      "Azerbaijan",
      "Georgia",
      "Mongolia",
    ],
    buyerProfile:
      "Hotel developers and operators behind new-build and renovation projects in Almaty, Astana, Tashkent and Samarkand, hospitality suppliers, and importers who hold stock for the wider region. Much of the demand is project-driven rather than replacement-driven: a property opens, and the entire bedroom and bathroom inventory is ordered at once. That makes sampling and specification locking more important than reorder speed.",
    headlineFacts: [
      { label: "Duty route", value: "EAEU / EAC conformity" },
      { label: "Rail transit", value: "About 7–14 days station-to-station" },
      { label: "Entry MOQ", value: "From 100 pcs" },
    ],
    tradeTitle: "The compliance question: TR CU 017 and who is allowed to apply",
    tradeBody: [
      "Products of the light industry entering the Eurasian Economic Union are governed by technical regulation TR CU 017/2011 on the safety of light industry products, with the stricter TR CU 007/2011 applying to children's and teenagers' goods. The regulation sorts textiles into layers by how much they touch the skin. Bed linen, towels, underwear and swimwear sit in Layer I — direct skin contact — which is the most tightly controlled group. That is relevant because a hotel linen order is almost entirely Layer I product.",
      "The conformity assessment takes one of two forms. For lower-risk goods it is an EAC declaration of conformity; for the higher-risk lines, including bed linen under the certification route, it is an EAC certificate, which involves accredited testing and in some schemes a manufacturing audit with annual inspection. Which one your shipment needs depends on the product and its classification, and it should be confirmed line by line rather than assumed.",
      "The operative constraint is who may apply. An EAC declaration or certificate can only be applied for by a company established in the territory of the union. A Chinese exporter cannot file it directly. In practice the importer, or an authorised representative appointed in the union, is the applicant and carries the legal responsibility. Rules tightened further for Kazakhstan: a local authorised representative is mandatory for non-union companies, testing must be carried out in a laboratory accredited within the union, the certificate must be registered in the union's FGIS database, and the EAC mark on the product or packaging must meet the minimum size with a QR code for verification.",
      "What that means for how you buy: the conformity work is a two-party job. You or your representative holds the declaration and answers for it. We supply the technical file it is built on — fabric composition with percentages, finished GSM, construction, and the laboratory test data for chemical and physical safety — together with artwork for the EAC mark and label. Start this conversation at the sample stage, not at the shipping stage. A conformity file assembled after the goods are finished is the single most common reason a Central Asian order sits at the border.",
    ],
    laneMode: "Rail",
    lanesTitle: "Rail from China via Alashankou and Khorgos",
    lanes: [
      {
        destination: "Kazakhstan",
        gateways: "Alashankou or Khorgos to Almaty, Astana, Shymkent",
        transit: "About 7–14 days station-to-station",
      },
      {
        destination: "Uzbekistan",
        gateways: "Khorgos or Alashankou via Kazakhstan to Tashkent, Samarkand",
        transit: "About 7–14 days station-to-station",
      },
      {
        destination: "Kyrgyzstan",
        gateways: "Kashgar or Irkeshtam to Bishkek, Osh",
        transit: "About 8–15 days station-to-station",
      },
      {
        destination: "Tajikistan, Turkmenistan",
        gateways: "Via Khorgos and onward transit to Dushanbe, Ashgabat",
        transit: "About 10–18 days station-to-station",
      },
    ],
    laneNote:
      "Central Asia is landlocked, so sea freight is not a direct option — it would route through a third country and finish on a truck, which is why rail is the practical route. Rail figures are station-to-station: add roughly 3–5 days for door-to-door. Gauge change at the border adds 1–3 days, congestion at Alashankou and Khorgos is common, and the September–January peak adds around 2–5 days. Book roughly a week ahead for a confirmed slot. A road-TIR option exists for urgent or part loads and is faster but costs more per unit.",
    orderTitle: "What a first order looks like in this region",
    orderBody: [
      "Because a great deal of Central Asian demand is a new property buying its full inventory, the useful unit of enquiry is the whole building — bedrooms and bathrooms together — rather than a single SKU. The alliance covers bed linen, towelling, bathrobes, table linen and mattress programmes, so a full inventory can be quoted as one specification set and loaded as one rail consignment.",
      "Two planning points differ from a seaport market. First, rail consolidates better than it splits: the economics improve as the load grows toward a full container, so staging a project into three small shipments costs more per unit than sending two larger ones. Second, the conformity file has to be ready before the goods move, which means the buyer's representative must be engaged early. In practice the sequence is sample first, lock the specification, open the conformity file, then produce — not the other way round.",
      "For projects already sourcing locally, bedding fabric by the metre is worth considering: some buyers in the region cut and sew locally and import only the woven and dyed cloth. We quote fabric to a construction, and the same conformity route applies to it.",
    ],
    orderFacts: [
      { label: "Bed sheets, duvet covers, pillowcases, bathrobes", value: "From 100 pcs per size/colour" },
      { label: "Towels, bath mats, table linen", value: "From 200 pcs per colour" },
      { label: "Bedding fabric", value: "From 3,000 m per construction" },
      { label: "Bulk lead time", value: "20–40 days + 7–18 days rail" },
    ],
    complianceTitle: "Certificates and labelling you arrange",
    complianceIntro:
      "Read this section before you place an order, not before you ship. Every item below is arranged on the importing side, and none of it can be retrofitted at the border.",
    compliance: [
      {
        title: "TR CU 017/2011 conformity — applicant must be in the EAEU",
        body:
          "An EAC declaration or certificate can only be applied for by a legal entity established within the Eurasian Economic Union. Appoint the importer or a local authorised representative as the applicant early. We supply the technical file and test data the applicant needs, but we cannot hold the declaration.",
      },
      {
        title: "Layer I classification for bed linen and towels",
        body:
          "Hotel bed linen, towels and bathrobes fall into Layer I — direct skin contact — the most strictly regulated group under the technical regulation. Confirm with your representative whether your specific line takes the declaration route or the certification route, because the testing and audit requirements differ.",
      },
      {
        title: "Kazakhstan — authorised representative, FGIS and the EAC mark",
        body:
          "For non-union companies a local authorised representative is mandatory. Testing must be done at a laboratory accredited in the union, the declaration or certificate must be registered in the FGIS database, and the EAC mark applied to the product or packaging has a minimum size with a QR code for verification. Plan for this before production, not after.",
      },
      {
        title: "Russian or Kazakh language labelling",
        body:
          "Product labels and consumer information must be in the destination language. Send us the label artwork and wording requirements and we will print to them — but this is decided at the artwork stage, since the labels are printed and attached during production.",
      },
    ],
    productTitle: "What to buy first for this market",
    productIntro:
      "Project openings buy the full room, so the practical starting list is the bedroom, then the bathroom.",
    products: [
      {
        name: "Bedding sets",
        href: "/products/bedding-sets",
        why:
          "The natural first order for a new property: duvet cover, sheet and pillowcases drawn from one construction, so the whole room is consistent and the conformity file covers fewer variants.",
      },
      {
        name: "Bed sheets & pillowcases",
        href: "/products/bed-sheets",
        why:
          "For renovations where the duvet covers are being reused. Confirm the bed sizes carefully — local sizing conventions differ from both the US and EU standards, and a size error on a project order is expensive to correct.",
      },
      {
        name: "Bath towels & bath mats",
        href: "/products/bath-towels",
        why:
          "The second half of the room inventory. Cold-climate operations often specify a heavier towel than a tropical property, so GSM should be decided against your laundry rather than copied from a warm-market spec.",
      },
      {
        name: "Duvet inners",
        href: "/products/duvet-inners",
        why:
          "Essential for the region's winters and frequently overlooked in the first budget. Confirm the fill and tog/GSM rating against your heating season before specifying.",
      },
    ],
    paymentTitle: "Payment and risk",
    paymentBody: [
      "Standard terms are 30% deposit with the order and 70% before shipment, by T/T or L/C at sight. Settlement in renminbi is increasingly workable on this corridor and can be worth raising with your bank, particularly where a correspondent route through a third currency adds cost or delay.",
      "The risk that needs managing here is documentary, not financial. Rail moves fast enough that a conformity file still in progress becomes the constraint. Sequence the work so the representative is appointed and the technical file is delivered before production ends. On the logistics side, confirm the incoterm explicitly: we quote FOB Nantong or Shanghai for sea, and for Central Asia we arrange rail from a Chinese inland hub, with the inland haulage and rail booking shown as separate lines so you can see what you are paying for.",
    ],
    faqs: [
      {
        q: "Can you issue the EAC certificate or declaration for us?",
        a: "No, and no Chinese exporter can. Under TR CU 017/2011 the EAC declaration or certificate can only be applied for by a company established within the Eurasian Economic Union — normally your own importing entity or a local authorised representative. What we do is supply the technical file it is built on: fabric composition with percentages, finished GSM, construction, and the laboratory test data for chemical and physical safety, plus artwork for the EAC mark and labels. Treat it as a two-party task and start it at the sample stage.",
      },
      {
        q: "How long does rail take to Almaty or Tashkent?",
        a: "Station-to-station, roughly 7–14 days to Almaty and the same to Tashkent, with Kyrgyzstan around 8–15 days. Add roughly 3–5 days for door-to-door. Two things move these figures: the gauge change at the border, which adds 1–3 days and can be longer under congestion at Alashankou or Khorgos, and the September–January peak, which adds around 2–5 days. Book about a week ahead to secure a slot.",
      },
      {
        q: "Why can't you ship to Central Asia by sea?",
        a: "Because the region is landlocked. Sea freight would have to route through a third country and finish on a truck, which is slower and usually dearer than rail. Rail from Alashankou or Khorgos is the practical route, and it is considerably faster than the sea-plus-road alternative for the same destination city.",
      },
      {
        q: "What does a new hotel project usually order?",
        a: "The full room inventory, quoted as one specification set: bedding sets or bed sheets and duvet covers, pillowcases, duvet inners, towels, bath mats and often bathrobes, with table linen if there is an F&B outlet. Because the alliance covers all of these categories, it can be one contract, one specification sheet per programme, one inspection standard and one set of shipping documents, loaded as a single rail consignment instead of several separate imports.",
      },
      {
        q: "Can we buy fabric instead of finished goods?",
        a: "Yes. Bedding fabric is supplied by the metre from 3,000 metres per construction, which suits buyers who cut and sew locally. The same conformity route applies to the fabric, and the technical file is simpler because there is no finished-goods construction to document.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AFRICA                                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "africa",
    name: "Africa",
    shortName: "Africa",
    h1: "Hotel Linen Supplier for Africa — Factory-Direct from Nantong",
    metaTitle: "Hotel Linen Supplier for Africa — FOB Factory-Direct, COC Ready",
    metaDescription:
      "Hotel linen supplier for Africa: Kenya PVoC/COC and Nigeria SONCAP guidance, 20–50 day transit, factory-direct FOB from Nantong, China.",
    opening:
      "In most of Africa the document that decides whether your container clears is the conformity certificate, and it has to be obtained before the goods leave China. It cannot be fixed at the port. A shipment that arrives at Mombasa or Apapa without one is looking at penalties of a percentage of CIF value, extra testing, and demurrage while it sits. The buyers who import hotel linen smoothly from China are the ones who start the certification paperwork at the order stage. This page explains what each major African market requires, and how the order should be sequenced so nothing is left behind.",
    countries: [
      "Kenya",
      "Tanzania",
      "Nigeria",
      "Ghana",
      "South Africa",
      "Egypt",
      "Morocco",
      "Ethiopia",
      "Rwanda",
    ],
    buyerProfile:
      "Hotel groups and independent operators, hospitality suppliers, importers and distributors, and laundry and linen-rental businesses. The region combines a large hotel construction pipeline — particularly along the Red Sea, in Kenya, Nigeria, Morocco and South Africa — with a mature replacement market in established city hotels. Price sensitivity is high and container utilisation matters, so mixed loading across categories is common.",
    headlineFacts: [
      { label: "Duty route", value: "COC / SONCAP before shipment" },
      { label: "Sea transit", value: "About 20–50 days" },
      { label: "Entry MOQ", value: "From 100 pcs" },
    ],
    tradeTitle: "The compliance question: conformity certificates must be raised in China",
    tradeBody: [
      "Kenya requires a Certificate of Conformity for imported textiles and household goods under the Kenya Bureau of Standards' Pre-Export Verification of Conformity programme. Textiles, apparel, bedding, towels and other home textiles are within scope. The process runs on the exporter's side before shipment: the Kenyan importer obtains an Import Declaration Form and passes the IDF number to the supplier, who submits the proforma invoice, packing list, product test reports and application to a KEBS-contracted agency. The agency reviews the documents and inspects the goods before loading, then issues the COC. It is valid for 90 days and covers that consignment only.",
      "Two details catch buyers out. Test reports for textiles need to be recent — typically within three months — and they must cover the safety parameters that matter for the category, including azo dyes, formaldehyde, pH and colour fastness. And since July 2025 Kenya has also required a Certificate of Origin issued by the exporting country's competent authority alongside the COC. Arriving without a COC means the importer must apply for a local certificate at the destination, with a penalty that can reach 5% of CIF value plus additional inspection costs. Allow 10–15 working days for the certification process and start it before the goods are packed, not after.",
      "Nigeria runs its own scheme, SONCAP, administered by the Standards Organisation of Nigeria. It works in two stages. First a Product Certificate, obtained during export planning and available through three routes depending on how often the exporter ships and whether there is a certified quality management system in place. Then, per shipment, a SONCAP Certificate, which the importer activates to obtain the Pre-Arrival Assessment Report that customs clears against. Textiles are regulated goods, and since 2025 the declaration must use the mandatory 10-digit HS code from the Nigeria Customs Tariff. Full container loads are subject to witnessed loading and sealing.",
      "Other markets differ. South Africa enforces textile labelling — fibre composition, country of origin and care instructions — and regulates certain product lines through the National Regulator for Compulsory Specifications. Egypt, Morocco and Algeria each maintain their own import-control lists and, for some goods, a requirement that the exporting factory be pre-registered with the destination authority; those requirements change and vary by tariff line. Do not generalise across the continent: confirm the specific requirement for your country and your HS code with your own clearing agent, then tell us what the shipment must carry and we will build the document set and the carton markings to match.",
    ],
    laneMode: "Sea freight",
    lanesTitle: "Sea freight from Nantong / Shanghai / Ningbo",
    lanes: [
      {
        destination: "East Africa",
        gateways: "Mombasa (Kenya), Dar es Salaam (Tanzania)",
        transit: "About 20–32 days",
      },
      {
        destination: "Southern Africa",
        gateways: "Durban, Cape Town (South Africa)",
        transit: "About 26–40 days",
      },
      {
        destination: "West Africa",
        gateways: "Apapa and Lekki (Lagos), Tema (Ghana), Abidjan",
        transit: "About 35–50 days",
      },
      {
        destination: "North Africa",
        gateways: "Alexandria, Port Said (Egypt); Casablanca (Morocco)",
        transit: "About 22–38 days",
      },
    ],
    laneNote:
      "Port-to-port bands. West African ports run the longest and are the most exposed to congestion — Lagos in particular can add significant time at anchor, so build a margin around the arrival date rather than a delivery date agreed to the day. On LCL, destination unpacking charges are high in this region: once a shipment reaches roughly 13–15 CBM, a dedicated 20ft container usually costs less overall than LCL.",
    orderTitle: "What a first order looks like in this region",
    orderBody: [
      "The certification timetable is what should shape the order here, not the price. A Kenya COC takes 10–15 working days and depends on a test report issued within the last three months. If the order is placed before that report exists, the certificate becomes the critical path and the goods wait. So the sequence is: confirm specification, obtain or refresh the test report, start the conformity application, produce, then ship. On a Nigeria shipment the Product Certificate has to be in place before the Form M can even be opened.",
      "On order size, African importers split into two groups. Distributors and laundry groups buy container-level programmes of core white stock, where the volume justifies a full container and the mixing is across towel sizes and sheet sizes. Individual hotels and small suppliers buy mixed LCL loads, where filling the container sensibly matters more than reaching a minimum. Because the alliance covers bedding, towelling, bathrobes, table linen and mattress programmes, a first order can combine categories and reach container volume without over-buying one SKU — which is usually the difference between a container and an expensive LCL load.",
      "One labour-market point that affects specification: where laundry is done manually or with limited hot water, heavy high-GSM towels and thick sateen bedding take much longer to dry and wear faster. A moderate-weight percale and a 500–600 GSM towel frequently outlast a heavier, more expensive specification. It is worth asking us to quote both weights on the same construction so the trade-off is visible on paper.",
    ],
    orderFacts: [
      { label: "Bed sheets, duvet covers, pillowcases, bathrobes", value: "From 100 pcs per size/colour" },
      { label: "Towels, bath mats, table linen", value: "From 200 pcs per colour" },
      { label: "Trial order", value: "From 50 pcs" },
      { label: "Bulk lead time", value: "20–40 days + 20–50 days transit" },
    ],
    complianceTitle: "Certificates and labelling you arrange",
    complianceIntro:
      "Every item here is raised at origin, before the container leaves China. None of it can be completed at the destination port without cost and delay.",
    compliance: [
      {
        title: "Kenya — PVoC Certificate of Conformity",
        body:
          "Textiles and home textiles are in scope. Your IDF number drives it, and the application goes to a KEBS-contracted agency — the accepted list includes SGS, Intertek, Bureau Veritas, CCIC and others. Textile test reports must typically be within three months and cover azo dyes, formaldehyde, pH and colour fastness. The COC is valid 90 days and per consignment.",
      },
      {
        title: "Kenya — Certificate of Origin since July 2025",
        body:
          "In addition to the COC, Kenya now requires a certificate of origin issued by the exporting country's competent authority. We raise it in China against the HS code and description you supply, so give us those at the order stage.",
      },
      {
        title: "Nigeria — SONCAP, two certificates not one",
        body:
          "A Product Certificate is issued first, during export planning, and is the prerequisite for opening the Form M. A SONCAP Certificate then follows per shipment and is activated to produce the Pre-Arrival Assessment Report. Since 2025 the 10-digit HS code from the Nigeria Customs Tariff is mandatory, and full container loads are subject to witnessed loading and sealing.",
      },
      {
        title: "South Africa — textile labelling and regulated lines",
        body:
          "Fibre composition, country of origin and care instructions are mandatory on textile labels, and certain product categories are regulated through the National Regulator for Compulsory Specifications. Tell us the label content your market requires and we print to it during production.",
      },
      {
        title: "Egypt, Morocco, Algeria — confirm by tariff line",
        body:
          "These markets maintain their own import-control lists, and for some goods the exporting factory must be pre-registered with the destination authority. Requirements differ by country and change. Confirm with your clearing agent for your exact HS code, then give us the list of what the shipment must carry.",
      },
      {
        title: "Test reports and quality certification",
        body:
          "Alliance factories hold OEKO-TEX Standard 100 and ISO 9001, with certificate numbers supplied so your customer or your conformity agency can verify them. Where a PVoC or SONCAP application needs a fresh accredited test report, we can arrange it — but it must be scheduled early enough to be valid on the shipment date.",
      },
    ],
    productTitle: "What to buy first for this market",
    productIntro:
      "Specify against your laundry, not against a brochure. In many African operations a lighter, faster-drying specification outlasts a heavier one.",
    products: [
      {
        name: "Bath towels & bath mats",
        href: "/products/bath-towels",
        why:
          "The highest-turnover item in most properties. A 500–600 GSM towel with good drying behaviour usually beats a heavier towel where hot-water drying is limited, and it costs less per unit.",
      },
      {
        name: "Bed sheets & pillowcases",
        href: "/products/bed-sheets",
        why:
          "Core replacement stock. Percale handles frequent washing and dries faster than sateen; specify the shrinkage limit explicitly and hold it across reorders so sizes do not creep.",
      },
      {
        name: "Bedding sets",
        href: "/products/bedding-sets",
        why:
          "For new-build and refurbishment projects where the whole room is being furnished at once and matching construction across the set is worth more than optimising each piece.",
      },
      {
        name: "Table linen",
        href: "/products/table-linen",
        why:
          "F&B outlets with heavy banquet use. Ask about stain release and colour fastness under repeated high-temperature washing, and consider spun polyester where laundry conditions are demanding.",
      },
    ],
    paymentTitle: "Payment and risk",
    paymentBody: [
      "Standard terms are 30% deposit with the order and 70% before shipment, by T/T or L/C at sight. In this region the deposit is not the main risk to either party — the conformity certificate is. The certificate is a condition of clearance, it costs money whether or not the shipment proceeds, and it is time-limited. Agree who starts the conformity application and when, in writing, at the point of order.",
      "Because the member factory producing your order holds its own export licence and is named on the contract, the invoice and bill of lading lead back to the plant that manufactured the goods. That traceability is increasingly useful: conformity schemes and retail customers both want to know who made the product, and a document set that answers the question cleanly saves an argument later.",
    ],
    faqs: [
      {
        q: "Does my Kenya shipment need a COC, and who arranges it?",
        a: "Yes — textiles and home textiles are within Kenya's PVoC scope, so a Certificate of Conformity is required for clearance. It is initiated at origin: your importer obtains an Import Declaration Form and passes the IDF number to us, and we apply to a KEBS-contracted agency such as SGS, Intertek, Bureau Veritas or CCIC, supplying the proforma invoice, packing list and a recent test report. The agency inspects before loading and issues the COC, which is valid 90 days and covers that consignment only. Since July 2025 a certificate of origin is also required alongside it.",
      },
      {
        q: "What happens if the goods arrive without a COC?",
        a: "They cannot be cleared on the strength of the original documents. The importer has to apply for a local certificate at the destination, which carries a penalty that can reach 5% of CIF value, additional inspection costs, and demurrage while the container sits. This is why the certification should start 10–15 working days before shipment, not after the vessel sails.",
      },
      {
        q: "How does Nigeria's SONCAP work for a hotel linen order?",
        a: "In two stages. A Product Certificate is issued first, during export planning, and is what the importer needs in order to open the Form M. Then a SONCAP Certificate is issued per shipment and is activated to generate the Pre-Arrival Assessment Report that customs clears against. Textiles are regulated goods, the 10-digit HS code from the Nigeria Customs Tariff has been mandatory since 2025, and full container loads are subject to witnessed loading and sealing.",
      },
      {
        q: "How long does shipping to Africa take?",
        a: "It depends heavily on the coast. East Africa is roughly 20–32 days port-to-port, North Africa about 22–38 days, Southern Africa about 26–40 days, and West Africa about 35–50 days. West African ports are the most exposed to congestion — Lagos in particular can add substantial waiting at anchor — so build a margin around the arrival window rather than a fixed delivery date.",
      },
      {
        q: "Should I order heavy towels for a hot climate?",
        a: "Often not. Where laundry is done manually or drying capacity is limited, a very heavy high-GSM towel takes much longer to dry, wears faster, and increases your own laundry cost per wash. A 500–600 GSM towel with good absorbency and drying behaviour frequently outlasts a heavier specification at a lower unit price. Ask us to quote both weights on the same construction so you can compare the trade-off directly.",
      },
    ],
  },
];

export function getMarketRegion(slug: string): MarketRegion | undefined {
  return MARKET_REGIONS.find((r) => r.slug === slug);
}

/** Four membership terms, rendered on every region page in the closing block. */
export function membershipTerms(): string[] {
  return [
    "owns and operates its own production facility",
    "holds its own export licence and can invoice FOB in its own name",
    "accepts buyer audits and on-site visits",
    "works to the alliance's written specification and inspection standard",
  ];
}
