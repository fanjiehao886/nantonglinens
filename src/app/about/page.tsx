import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Nantong Linen Factory | Hotel Textile Manufacturer",
  description:
    "Learn about Nantong Linens: 15+ years of hotel textile manufacturing in Nantong, China. OEKO-TEX certified factory serving hospitality brands worldwide.",
};

const certifications = [
  {
    name: "OEKO-TEX Standard 100",
    desc: "All products tested for harmful substances. Class I (baby-safe) certification for select lines.",
    icon: "\ud83c\udf1f",
  },
  {
    name: "ISO 9001:2015",
    desc: "Quality management system certified. Consistent production quality across all orders.",
    icon: "\u2705",
  },
  {
    name: "BSCI Certified",
    desc: "Business Social Compliance Initiative — ethical labor practices and safe working conditions.",
    icon: "\ud83c\udded",
  },
  {
    name: "WRAP Accredited",
    desc: "Worldwide Responsible Accredited Production — global standard for ethical manufacturing.",
    icon: "\ud83d\udcce",
  },
];

const caseStudies = [
  {
    client: "Marriott-franchised property (200 rooms)",
    location: "Florida, USA",
    result: "18% cost reduction vs previous US-based supplier",
    product: "Full room set (sheets, towels, robes)",
  },
  {
    client: "Boutique resort (80 rooms)",
    location: "Cancun, Mexico",
    result: "Custom Pantone-matched linens delivered in 12 days",
    product: "Bathrobes & pool towels with logo embroidery",
  },
  {
    client: "Hotel group (6 properties)",
    location: "Ontario, Canada",
    result: "Centralized procurement, consistent quality across all locations",
    product: "Bed sheets & pillowcases, 3-year supply contract",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-50 border-b border-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">About Nantong Linens</h1>
          <p className="mt-2 max-w-2xl text-gray-500">
            Your direct connection to China&apos;s largest home textile manufacturing hub.
            Premium hotel linens for the global hospitality industry since 2009.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                From Nantong&apos;s Textile Heartland to Hotels Worldwide
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  Nantong is known as China&apos;s &quot;Home Textile Capital&quot; — a city where over
                  30% of the world&apos;s home textiles are produced. Founded in 2009, Nantong Linens
                  was built on this legacy, combining generations of weaving expertise with modern
                  international quality standards.
                </p>
                <p>
                  What started as a small workshop serving domestic hotels has grown into a
                  full-scale export facility spanning 20,000 m² with over 200 skilled workers and
                  a monthly output exceeding 500,000 pieces. Today we ship to hotels, resorts,
                  and distributors across North America, Europe, Southeast Asia, and the Middle East.
                </p>
                <p>
                  We&apos;re not just a manufacturer — we&apos;re a partner. Our team includes
                  English-speaking sales engineers who understand hospitality procurement,
                  an R&D department that develops new fabric constructions each season,
                  and a QC team that inspects every single piece before it leaves our dock.
                </p>
              </div>
            </div>

            {/* Factory stats */}
            <div className="rounded-2xl bg-blue-950 p-8 text-white">
              <h3 className="text-lg font-semibold mb-6">By The Numbers</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "20,000+", label: "m² Factory Area" },
                  { value: "200+", label: "Skilled Workers" },
                  { value: "500K+", label: "Pieces/Month Capacity" },
                  { value: "15+", label: "Years of Experience" },
                  { value: "30+", label: "Export Countries" },
                  { value: "98.5%", label: "On-Time Delivery Rate" },
                  { value: "<0.5%", label: "Defect Rate" },
                  { value: "150+", label: "Repeat Clients" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/5 p-4 border border-white/10">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-blue-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Certifications &amp; Quality Standards</h2>
            <p className="mt-2 text-gray-500">
              Internationally recognized certifications that give your procurement team confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border border-gray-100 p-6 text-center hover:border-blue-200 hover:bg-blue-50/30 transition-all"
              >
                <span className="text-3xl">{cert.icon}</span>
                <h3 className="mt-3 font-semibold text-gray-900 text-sm">{cert.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory tour placeholder */}
      <section id="factory" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Factory Tour</h2>
            <p className="mt-2 text-gray-500">
              See where your hotel linens are made. Video tour available on request.
            </p>
          </div>

          <div className="mt-8 aspect-[21/9] rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" className="mx-auto">
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <path d="M10 9l5 3-5 3V9z" fill="#9ca3af" stroke="none" />
              </svg>
              <p className="mt-3 text-sm text-gray-400">Factory video will be embedded here</p>
              <a href="/contact" className="mt-2 inline-block text-sm text-blue-800 hover:underline">
                Contact us to receive the full factory tour video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Client Success Stories</h2>
            <p className="mt-2 text-gray-500">
              Real results from real hospitality buyers around the world.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <div
                key={cs.client}
                className="rounded-xl border border-gray-100 p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{cs.client}</h3>
                    <p className="mt-0.5 text-xs text-gray-400">{cs.location}</p>
                  </div>
                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                    Success
                  </span>
                </div>
                <p className="mt-4 text-base font-medium text-blue-900">{cs.result}</p>
                <p className="mt-2 text-sm text-gray-500">{cs.product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mt-3 text-blue-200/80">
            Whether you need 50 pieces or 50,000, we treat every order with the same attention to detail.
          </p>
          <Link
            href="/rfq"
            className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
