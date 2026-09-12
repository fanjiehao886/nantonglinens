/**
 * GA4 event tracking helpers.
 * Safe no-op wrappers so tracking never breaks the UI.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export type GaEventParams = Record<string, string | number | boolean | undefined>;

/**
 * Fire a raw GA4 event. Safe to call anywhere (client only).
 */
export function trackEvent(name: string, params: GaEventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  try {
    window.gtag("event", name, params);
  } catch {
    // no-op — analytics must never break UX
  }
}

/**
 * Fire a cta_click event with a consistent cta_name param.
 * Use for every CTA link/button so GA4 reports can compare positions.
 */
export function trackClick(ctaName: string, extra: GaEventParams = {}) {
  trackEvent("cta_click", { cta_name: ctaName, ...extra });
}

/**
 * Fire a conversion-worthy lead event (RFQ submission, PDF download, etc.)
 */
export function trackLead(leadType: string, extra: GaEventParams = {}) {
  trackEvent("generate_lead", { lead_type: leadType, ...extra });
}

export default trackEvent;
