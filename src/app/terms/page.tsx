import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Nantong Linens — the rules and agreements governing your use of our website and our hotel linen manufacturing and export services.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: September 29, 2026</p>

      <div className="mt-8 space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">1. Agreement to Terms</h2>
          <p className="mt-3">
            By accessing and using the website www.nantonglinens.com (the &quot;Site&quot;) or engaging
            the manufacturing and export services of Nantong Linens (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree
            to be bound by these Terms of Service. If you do not agree with any part of these terms,
            please do not use our Site or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">2. Our Services</h2>
          <p className="mt-3">
            Nantong Linens is a <strong>hotel linen manufacturer and exporter (manufacturer + trading
            company)</strong> based in Nantong, Jiangsu, China. We produce hotel linens — bed sheets,
            pillowcases, duvet covers, towels, bathrobes, and table linens — in our own production
            facility, and we also produce with audited mills in the surrounding Dieshiqiao home textile
            cluster when a category or volume falls outside our own lines.
          </p>
          <p className="mt-3">Our services include:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Manufacturing to buyer specifications (thread count, GSM, weave, size, colour)</li>
            <li>OEM and private-label production, including labelling and packaging</li>
            <li>Quality control inspection in our own facility before shipment</li>
            <li>Export coordination and documentation, customs, and freight booking</li>
            <li>Sampling, written specification sheets, and production reporting</li>
          </ul>
          <p className="mt-3">
            <strong>Important:</strong> Nantong Linens is both the manufacturer and the exporter of the
            products it supplies. Where a product is produced by a partner mill within the cluster, we
            remain your single contractual counterpart and remain responsible for specification,
            inspection, and export. We do not act as an agent for third-party sellers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">3. Quotations and Orders</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>All quotations provided through our RFQ system are estimates and subject to confirmation based on production capacity, raw material costs, and order specifications.</li>
            <li>A quotation is valid for 15 days from the date of issue unless otherwise stated.</li>
            <li>An order is considered confirmed only after we have received your written approval and the required deposit payment.</li>
            <li>Minimum order quantities (MOQ) vary by product, typically starting from 50 pieces per size/colour.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">4. Pricing</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>All prices are quoted in USD unless otherwise specified.</li>
            <li>Prices are FOB Shanghai or Ningbo unless otherwise agreed.</li>
            <li>Prices do not include import duties, taxes, or customs fees in the destination country — these are the buyer&apos;s responsibility.</li>
            <li>We reserve the right to adjust prices due to significant changes in raw material costs, exchange rates, or production costs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">5. Payment Terms</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li><strong>Standard terms:</strong> 30% deposit by T/T upon order confirmation, 70% balance before shipment.</li>
            <li><strong>L/C at sight:</strong> Available for orders above USD 10,000.</li>
            <li><strong>PayPal:</strong> Available for sample orders and small trial orders under USD 2,000.</li>
            <li>Payment instructions will be provided upon order confirmation. Please verify payment details directly with us before transferring funds.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">6. Production and Delivery</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Standard production lead time is 15–20 business days from order confirmation and deposit receipt.</li>
            <li>Delivery times are estimates and may vary based on our production schedules, raw material availability, and shipping conditions.</li>
            <li>We are not liable for delays caused by force majeure events (natural disasters, pandemics, government actions, port strikes, etc.).</li>
            <li>Shipping methods and carriers will be coordinated with the buyer. Shipping costs are quoted separately.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">7. Quality Assurance</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>We conduct pre-shipment quality inspections on all orders, including thread count verification, GSM testing, shrinkage rate measurement, and colorfastness testing.</li>
            <li>Inspection reports with photos and/or videos will be provided to the buyer before shipment.</li>
            <li>Third-party inspections by SGS, Intertek, or other agencies can be arranged at the buyer&apos;s expense.</li>
            <li>Any quality issues must be reported within 7 days of receiving the goods, with photographic evidence.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">8. Returns and Refunds</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Custom-made or custom-labeled products cannot be returned unless they do not match the agreed specifications.</li>
            <li>If products fail to meet the agreed specifications, we will arrange replacement or compensation, either from our own production or from the partner mill concerned.</li>
            <li>Claims must be filed within 7 days of delivery with supporting evidence (photos, test reports).</li>
            <li>Refund amounts and methods will be determined on a case-by-case basis.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">9. Intellectual Property</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>All content on this website (text, images, logos, designs) is the property of Nantong Linens or its licensors.</li>
            <li>You may not reproduce, distribute, or create derivative works from our website content without written permission.</li>
            <li>Custom logo embroidery, private labeling, and OEM branding are the responsibility of the buyer to ensure they have proper rights to use.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">10. Limitation of Liability</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Nantong Linens is the manufacturer and exporter of the products it supplies. While we exercise due diligence in producing to the agreed specifications and in selecting cluster mills where we use them, our liability is limited as set out below.</li>
            <li>Our total liability for any claim arising from an order shall not exceed the invoiced value of the products in that order.</li>
            <li>We are not liable for indirect, incidental, consequential, or punitive damages.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">11. Confidentiality</h2>
          <p className="mt-3">
            We treat all business information shared by buyers — including pricing, product specifications,
            and business strategies — as confidential. We will not share buyer information with competing
            parties or use it for purposes other than fulfilling the buyer&apos;s order.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">12. Governing Law</h2>
          <p className="mt-3">
            These terms shall be governed by and construed in accordance with the laws of the
            People&apos;s Republic of China. Any disputes shall be resolved through good-faith
            negotiation first. If negotiation fails, disputes shall be submitted to the Nantong
            Arbitration Commission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">13. Changes to These Terms</h2>
          <p className="mt-3">
            We reserve the right to modify these terms at any time. Changes will be effective
            immediately upon posting on this page. Continued use of our Site or services after
            changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">14. Contact</h2>
          <p className="mt-3">For questions about these Terms of Service:</p>
          <ul className="mt-2 list-none space-y-1">
            <li><strong>Email:</strong> <a href="mailto:info@nantonglinens.com" className="text-blue-800 hover:underline">info@nantonglinens.com</a></li>
            <li><strong>WhatsApp:</strong> +86 15151361119</li>
            <li><strong>Address:</strong> Dieshiqiao Home Textile Market, Haimen District, Nantong, Jiangsu, China 226100</li>
          </ul>
        </section>
      </div>

      <div className="mt-12 border-t pt-6 text-center">
        <Link href="/privacy" className="text-sm text-blue-800 hover:underline">
          ← Privacy Policy
        </Link>
      </div>
    </div>
  );
}
