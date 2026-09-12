export function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 uppercase tracking-wide">
            Social Proof
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">
            Trusted by Hotel Buyers Across 4 Continents
          </h2>
          <p className="mt-2 text-gray-500">
            Real outcomes from real sourcing projects — on-time delivery, factory-direct pricing, and QC before shipment.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              stat: "23% cost reduction",
              quote:
                "We compared their Dieshiqiao-sourced towel quote against our existing supplier. Same 500 GSM ring-spun cotton, same OEKO-TEX cert, 23% lower landed cost. We switched our annual program.",
              author: "Procurement Manager",
              role: "Boutique Hotel Group · Middle East",
              badge: "Cost savings",
            },
            {
              stat: "QC issue caught pre-shipment",
              quote:
                "The on-site QC team spotted a subtle shade difference between two production batches of bed sheets and held the cartons. They re-cut and re-checked before anything left the factory.",
              author: "Operations Director",
              role: "Mid-Scale Hotel Chain · Southeast Asia",
              badge: "Quality control",
            },
            {
              stat: "18 days from RFQ to samples",
              quote:
                "We needed white sateen duvet covers fast for a renovation opening. They matched a factory, sent physical samples, and we approved within 18 days of the first message.",
              author: "Independent Hotel Owner",
              role: "North America",
              badge: "Speed",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-6 relative"
            >
              {/* Badge */}
              <span className="absolute -top-2.5 left-6 rounded-full bg-blue-900 px-3 py-0.5 text-[11px] font-medium text-white">
                {item.badge}
              </span>

              {/* Stat */}
              <p className="text-2xl font-bold text-blue-900">{item.stat}</p>

              {/* Quote mark */}
              <div className="absolute top-6 right-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-blue-100"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-5 border-t border-gray-50 pt-4">
                <p className="text-sm font-semibold text-gray-900">{item.author}</p>
                <p className="mt-0.5 text-xs text-gray-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust micro-bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          {[
            { value: "500+", label: "RFQs processed" },
            { value: "4", label: "Continents served" },
            { value: "15+", label: "Years in Dieshiqiao" },
            { value: "24h", label: "Quote response" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-lg font-bold text-blue-900">{item.value}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
