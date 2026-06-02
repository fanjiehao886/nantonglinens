export function TrustBar() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            {
              value: "15+",
              label: "Years Industry Experience",
              sub: "In Dieshiqiao textile market",
            },
            {
              value: "6,000+",
              label: "Factories Within Reach",
              sub: "Daily floor visits & price checks",
            },
            {
              value: "4 Continents",
              label: "Global Clientele",
              sub: "NA · EU · Middle East · SE Asia",
            },
            {
              value: "24h",
              label: "Quote Response Time",
              sub: "Weekdays, with QC photo reports",
            },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-800">{item.label}</p>
              <p className="mt-0.5 text-xs text-gray-400">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
