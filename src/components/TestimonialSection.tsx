export function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            What Buyers Say About This Model
          </h2>
          <p className="mt-2 text-gray-500">
            Sourcing through a local agent changes the game — here&apos;s what it means for you
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              quote:
                "Having someone physically in Dieshiqiao who can visit factories, pull samples, and send real-time QC photos has completely changed how we source linens. We no longer guess about quality — we see it before it ships.",
              author: "Typical Feedback from Hotel Procurement Managers",
              role: "North America & Europe",
            },
            {
              quote:
                "The biggest difference is transparency. Instead of negotiating with a factory sales rep who may overpromise, we get an honest, itemized quote with market-context pricing. No surprises on arrival.",
              author: "Common Experience of Independent Hotel Owners",
              role: "Middle East & Southeast Asia",
            },
            {
              quote:
                "What sold us was the free guidance first — the fabric guides, GSM tables, and QC checklists showed deep product knowledge before we ever spent a dollar. When we were ready to order, trust was already built.",
              author: "Shared by First-Time Buyers from China",
              role: "Boutique & Mid-Scale Hotels",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-6 relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-3 left-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-blue-200"
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
      </div>
    </section>
  );
}
