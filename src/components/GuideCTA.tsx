import { TrackedLink } from "@/components/TrackedLink";

interface GuideCTAProps {
  /** RFQ category prefill, must match PRODUCT_CATEGORIES in RFQForm (e.g. "Bed Sheets") */
  category: string;
  /** Unique GA4 cta_location value, e.g. "guide_thread_count_mid" */
  ctaLocation: string;
  heading?: string;
  body?: string;
  /** Optional secondary link (usually a product category page) */
  secondaryHref?: string;
  secondaryLabel?: string;
}

/**
 * Mid-article RFQ conversion block for long-form guide pages.
 * Converts guide readers into RFQ submissions by offering a low-friction
 * "quote these exact specs" action with category prefill.
 */
export function GuideCTA({
  category,
  ctaLocation,
  heading = "Sourcing to these specs?",
  body = "Send us your target specs and quantity — we compare 3–5 Dieshiqiao factories and quote factory-direct FOB prices within 24 hours. Free samples available.",
  secondaryHref,
  secondaryLabel = "Browse Products",
}: GuideCTAProps) {
  return (
    <div className="not-prose my-10 rounded-xl border-2 border-blue-900 bg-blue-50 p-6 sm:p-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{heading}</h3>
          <p className="mt-1 text-sm text-gray-600">{body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <TrackedLink
            ctaName="guide_inline_quote"
            eventParams={{ cta_location: ctaLocation, category }}
            href={`/rfq?category=${encodeURIComponent(category)}`}
            className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
          >
            Get a 24h Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </TrackedLink>
          {secondaryHref && (
            <TrackedLink
              ctaName="guide_inline_products"
              eventParams={{ cta_location: ctaLocation }}
              href={secondaryHref}
              className="inline-flex items-center rounded-full border border-blue-900/30 bg-white px-6 py-3 text-sm font-medium text-blue-900 hover:bg-blue-100/60 transition-colors"
            >
              {secondaryLabel}
            </TrackedLink>
          )}
        </div>
      </div>
    </div>
  );
}
