import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Hotel Linen Sourcing, MOQ, Lead Time & More | Nantong Linens",
  description:
    "Frequently asked questions about sourcing hotel linens from Nantong, China. Learn about MOQ, lead times, customization options, quality certifications, and shipping.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ) for hotel linens?",
    a:
      'Our standard MOQ starts at 50 pieces per size/color combination for most product categories. For custom-embroidered or logo-branded items, the MOQ may be 100 pieces. We understand that boutique hotels and smaller properties need flexibility — if your order is below our standard MOQ, contact us to discuss. We often accommodate trial orders of 20–30 sets for new customers who are evaluating quality.',
  },
  {
    q: "What is the typical production lead time?",
    a:
      'Standard orders ship within 15–20 working days after payment confirmation. Rush orders can be expedited to 7–10 days (subject to a 15% surcharge). The lead time includes material procurement, production, quality inspection, and packaging. Shipping time depends on your location — FOB Nantong typically adds 18–28 days to US West Coast ports via ocean freight.',
  },
  {
    q: "Can I get samples before placing a bulk order?",
    a:
      'Yes! We strongly recommend ordering swatch samples before committing to a bulk purchase. We provide free fabric swatches (up to 5 color/material combinations) to qualified buyers. You only cover the shipping cost (approximately $25–$40 via express courier). Full-size sample products are available at cost price and can be credited toward your first bulk order of 500+ units.',
  },
  {
    q: "What customization options do you offer?",
    a:
      'We support full OEM/ODM customization:\n\n• Logo embroidery (single-color, multi-color, and metallic thread)\n• Custom woven labels with your brand name\n• Pantone color matching (minimum ΔE < 1.0)\n• Private-label packaging with custom hangtags\n• Custom dimensions (bed sheets up to California King, towels in any size)\n• Design development assistance for new textile patterns',
  },
  {
    q: "What quality certifications does your factory hold?",
    a:
      'Our partner factories hold multiple international certifications:\n\n• OEKO-TEX Standard 100 (all product lines)\n• ISO 9001:2015 Quality Management System\n• BSCI (Business Social Compliance Initiative)\n• WRAP (Worldwide Responsible Accredited Production)\n\nWe also arrange third-party inspections by SGS or Intertek upon request. As your sourcing agent, we personally verify every batch with on-site QC including thread count verification, GSM testing, shrinkage rate measurement (<3%), and colorfastness testing (Grade 4+).',
  },
  {
    q: "What payment methods do you accept?",
    a:
      'We accept the following secure payment terms:\n\n• T/T (Telegraphic Transfer): 30% deposit + 70% before shipment (most common)\n• L/C at sight (for orders above $10,000 USD)\n• PayPal (for sample orders and small trial orders under $2,000)\n• Western Union (not recommended due to fees; available if needed)\n\nAs your sourcing agent, we handle all payment coordination with factories and provide full transparency on cost breakdowns.',
  },
  {
    q: "How do you handle shipping and logistics?",
    a:
      'We offer flexible shipping arrangements:\n\n• FOB Nantong / Shanghai Port — you arrange your own freight forwarder\n• CIF/CNF — we arrange shipping to your destination port\n• DDP (Delivered Duty Paid) — door-to-door service for US/Canada customers\n• Express courier (DHL/FedEx) — for samples and rush small orders\n\nOur logistics team handles all export documentation including Certificate of Origin, packing lists, commercial invoices, and fumigation certificates where required.',
  },
  {
    q: "Do you work with individual hotels or only large chains?",
    a:
      'We work with hospitality buyers of all sizes:\n\n• Independent boutique hotels (10–50 rooms)\n• Mid-size hotel groups (50–200 rooms per property)\n• Large chain hotels and management companies\n• Hospitality distributors and wholesalers\n• Interior design firms specifying FF&E textiles\n• Airbnb hosts and vacation rental operators buying in bulk\n\nOur low-MOQ policy specifically accommodates smaller buyers who cannot meet factory-direct minimums elsewhere.',
  },
  {
    q: "What materials do you use for hotel linens?",
    a:
      'We source premium raw materials globally:\n\n• Egyptian cotton (long-staple Giza 86/88): Our premium line for luxury hotels (300–600 TC)\n• Pima/Supima cotton: High-end standard (200–400 TC)\n• Upland cotton: Value range (144–180 TC), ideal for economy properties\n• Bamboo fiber: Eco-friendly option, naturally antimicrobial\n• Tencel/Lyocell: Sustainable alternative with exceptional softness\n• Microfiber: Budget-friendly, quick-drying for pool/spa areas\n• Cotton-polyester blends: Enhanced durability for high-wash environments',
  },
  {
    q: "What is the difference between percale and sateen weave?",
    a:
      "Percale and sateen refer to the weaving pattern, not the thread count or material quality:\n\n• **Percale**: One-under-one-over weave. Crisp, cool feel, matte finish. Ideal for warm climates and guests who prefer crisp sheets. Most common choice for 4–5 star hotels.\n\n• **Sateen**: Four-under-one-over weave. Silky smooth, subtle sheen, slightly warmer. Feels more luxurious but shows wear faster than percale. Popular in upscale resort settings.\n\nBoth weaves can achieve any thread count. We recommend percale for durability (150+ wash cycles) and sateen for guest-facing luxury impressions. Many of our clients use percale for standard rooms and sateen for suites/premium tiers.",
  },
  {
    q: "How durable are your hotel linens? How many washes do they last?",
    a:
      "Our hotel-grade linens are engineered for commercial laundering:\n\n• Percale bed sheets: 120–150 wash cycles while maintaining acceptable appearance\n• Sateen sheets: 80–120 wash cycles (slightly less due to surface exposure)\n• Towels (bath/hand): 100–130 wash cycles\n• Bathrobes: 70–100 wash cycles\n• Table napkins: 150+ wash cycles (highest durability)\n\nDurability depends on wash temperature (we recommend 60°C max), detergent type, and dryer heat settings. We provide detailed care instruction cards with every order. Defective items (within first 10 washes showing abnormal pilling, fraying, or fading) are replaced free of charge.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-2 text-gray-500">
            Everything you need to know about sourcing hotel linens from Nantong Linens.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* FAQ accordion */}
          <div className="space-y-4" id="faq-list">
            {faqs.map((faq, i) => (
              <details
                key={i}
                name="faq"
                open={i === 0}
                className="group rounded-xl border border-gray-100 bg-white overflow-hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-base leading-snug">
                    {faq.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="border-t border-gray-50 px-6 pb-6 pt-4">
                  <p className="text-sm leading-relaxed text-gray-600 whitespace-pre-line">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-blue-950 p-8 text-center">
            <h2 className="text-xl font-bold text-white">Still have questions?</h2>
            <p className="mt-2 text-blue-200/80">
              Our team is happy to help. Get a personalized response within 24 hours.
            </p>
            <div className="mt-5 flex justify-center gap-4">
              <Link
                href="/rfq"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
              >
                Submit an RFQ
              </Link>
              <a
                href="https://wa.me/8615151361119"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQPage Schema for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
