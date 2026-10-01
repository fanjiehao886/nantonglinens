import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { company, napLines } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Us | Nantong Linens — Hotel Linen Manufacturer & Exporter",
  description:
    "Contact Nantong Linens for factory-direct hotel linen quotes — quote reply within 24 hours on weekdays. WhatsApp, email, or submit an RFQ with your spec sheet or a photo of the label you use today.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-2 text-gray-500 max-w-xl">
            Have questions about our hotel linens? Need a quick quote? Reach out — we reply with a
            factory-direct quote within 24 hours on weekdays, and samples follow in{" "}
            {company.service.sampleDaysLabel}.
          </p>
          <p className="mt-3 text-sm text-gray-500 max-w-xl">
            Attach a specification sheet or a photo of the label you use today and we can usually
            price the order the same day.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact cards */}
            <div className="space-y-6">
              {[
                {
                  icon: "\u2709\ufe0f",
                  title: "Email",
                  lines: [company.email],
                  desc: "Best for detailed inquiries",
                },
                {
                  icon: "\ud83d\udcf1",
                  title: "WhatsApp",
                  lines: [company.whatsapp],
                  desc: "Quick responses in English",
                  href: company.whatsappUrl,
                },
                {
                  icon: "\ud83d\udd27",
                  title: "Office Hours (CST)",
                  lines: ["Mon–Fri: 9:00 – 18:00", "Sat: 9:00 – 12:00", "Sunday: Closed"],
                  desc: "China Standard Time (UTC+8)",
                },
                {
                  icon: "\ud83d\udccd",
                  title: "Factory & Registered Office",
                  lines: napLines(),
                  desc: "Chuanjiang, Tongzhou — adjacent to the Dieshiqiao textile cluster",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-gray-100 bg-white p-6"
                >
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className="mt-3 font-semibold text-gray-900">{card.title}</h3>
                  {card.lines.map((line, i) => (
                    <p
                      key={i}
                      className={`mt-1.5 ${
                        card.href ? "text-blue-800 font-medium" : "text-gray-600"
                      }`}
                    >
                      {card.href && i === 0 ? (
                        <a
                          href={card.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                  {card.desc && (
                    <p className="mt-1 text-xs text-gray-400">{card.desc}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick RFQ form (simplified) */}
            <div className="lg:col-span-2 rounded-xl border border-gray-100 bg-white p-8">
              <h2 className="text-xl font-bold text-gray-900">Send a Quick Message</h2>
              <p className="mt-1 text-sm text-gray-500">
                Or use our detailed <Link href="/rfq" className="text-blue-800 hover:underline">RFQ form</Link> for full product specifications.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
