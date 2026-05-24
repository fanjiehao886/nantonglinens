import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Nantong Linens — how we collect, use, and protect your personal information when you use our website or services.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: May 24, 2026</p>

      <div className="mt-8 space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
          <p className="mt-3">
            Nantong Linens (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed
            to protecting your personal data. This privacy policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            www.nantonglinens.com or engage with our hotel linen sourcing services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
          <h3 className="mt-4 font-medium text-gray-800">2.1 Information You Provide</h3>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Contact details (name, email address, phone number, company name)</li>
            <li>RFQ (Request for Quote) submissions including product specifications and quantities</li>
            <li>Messages sent via our contact form, WhatsApp, or email</li>
            <li>Shipping addresses for sample or order delivery</li>
          </ul>

          <h3 className="mt-4 font-medium text-gray-800">2.2 Information Collected Automatically</h3>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website or search engine</li>
            <li>Device information (screen size, operating system)</li>
          </ul>

          <h3 className="mt-4 font-medium text-gray-800">2.3 Information from Third Parties</h3>
          <p className="mt-2">
            We may receive information from analytics providers (Google Analytics), advertising
            networks, and business partners to improve our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Process and respond to your RFQ and sample requests</li>
            <li>Provide sourcing quotes and coordinate with partner factories</li>
            <li>Send order updates, shipping notifications, and QC reports</li>
            <li>Improve our website, products, and services</li>
            <li>Communicate about new products, market insights, or special offers (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">4. Data Sharing</h2>
          <p className="mt-3">
            We do <strong>not</strong> sell your personal information. We may share your data with:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li><strong>Partner factories</strong> — only the information necessary to produce and ship your order (e.g., product specs, shipping address)</li>
            <li><strong>Shipping carriers</strong> — to deliver samples and orders</li>
            <li><strong>Service providers</strong> — email (Resend), hosting (Vercel), analytics (Google Analytics)</li>
            <li><strong>Legal requirements</strong> — if required by law, regulation, or legal process</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">5. International Data Transfers</h2>
          <p className="mt-3">
            Our website is hosted in the United States (Vercel). If you are accessing our site from
            the European Union, the United Kingdom, or other regions with data protection laws,
            please note that your information may be transferred to and processed in the United States
            or China. By using our website, you consent to such transfers. We take appropriate safeguards
            to ensure your data is protected in accordance with applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">6. Data Retention</h2>
          <p className="mt-3">
            We retain your personal information only for as long as necessary to fulfill the purposes
            described in this policy, typically:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>RFQ and order data: 3 years after the last transaction</li>
            <li>Website analytics: 26 months (Google Analytics default)</li>
            <li>Marketing communications: until you unsubscribe</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">7. Your Rights</h2>
          <p className="mt-3">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li><strong>Access</strong> — request a copy of your personal data</li>
            <li><strong>Rectification</strong> — request correction of inaccurate data</li>
            <li><strong>Erasure</strong> — request deletion of your personal data</li>
            <li><strong>Restriction</strong> — request that we limit processing of your data</li>
            <li><strong>Portability</strong> — receive your data in a structured, machine-readable format</li>
            <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
            <li><strong>Withdraw consent</strong> — withdraw consent at any time where processing is based on consent</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:fanjieboy@gmail.com" className="text-blue-800 hover:underline">
              fanjieboy@gmail.com
            </a>.
            We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">8. Cookies</h2>
          <p className="mt-3">Our website uses cookies for:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li><strong>Essential cookies</strong> — necessary for the website to function</li>
            <li><strong>Analytics cookies</strong> — Google Analytics to understand site usage (anonymized)</li>
          </ul>
          <p className="mt-3">
            You can control cookies through your browser settings. Disabling cookies may affect
            some website features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">9. Security</h2>
          <p className="mt-3">
            We implement appropriate technical and organizational measures to protect your personal
            data, including SSL/TLS encryption, secure hosting, and access controls. However, no
            method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">10. Children&apos;s Privacy</h2>
          <p className="mt-3">
            Our services are not directed to individuals under the age of 18. We do not knowingly
            collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">11. Changes to This Policy</h2>
          <p className="mt-3">
            We may update this privacy policy from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">12. Contact Us</h2>
          <p className="mt-3">
            If you have any questions about this privacy policy, please contact us:
          </p>
          <ul className="mt-2 list-none space-y-1">
            <li><strong>Email:</strong> <a href="mailto:fanjieboy@gmail.com" className="text-blue-800 hover:underline">fanjieboy@gmail.com</a></li>
            <li><strong>WhatsApp:</strong> +86 15151361119</li>
            <li><strong>Address:</strong> Dieshiqiao Home Textile Market, Haimen District, Nantong, Jiangsu, China 226100</li>
          </ul>
        </section>
      </div>

      <div className="mt-12 border-t pt-6 text-center">
        <Link href="/terms" className="text-sm text-blue-800 hover:underline">
          Terms of Service →
        </Link>
      </div>
    </div>
  );
}
