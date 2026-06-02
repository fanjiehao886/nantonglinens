export function TrustBadges() {
  return (
    <div className="space-y-4">
      {/* Certifications */}
      <div>
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Partner Factory Certifications
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "OEKO-TEX 100", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
            { label: "ISO 9001:2015", color: "bg-blue-50 text-blue-700 border-blue-200" },
            { label: "BSCI Audited", color: "bg-purple-50 text-purple-700 border-purple-200" },
          ].map((badge) => (
            <span
              key={badge.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${badge.color}`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Payment methods */}
      <div>
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Accepted Payment Methods
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "T/T (Wire Transfer)", icon: "🏦" },
            { label: "L/C (Letter of Credit)", icon: "📄" },
            { label: "PayPal", icon: "💳" },
          ].map((method) => (
            <span
              key={method.label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600"
            >
              <span>{method.icon}</span>
              {method.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
