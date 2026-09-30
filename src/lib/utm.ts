/**
 * UTM link builder — single source of truth for campaign attribution.
 *
 * Why this exists: GA4 showed Direct at 44% of sessions, which for a site with
 * no brand recognition almost always means "unattributed", not "typed in".
 * Every customer-facing link we send out must carry UTM parameters so the
 * traffic lands in the right channel instead of falling into Direct.
 *
 * Naming convention (keep it lowercase, hyphenated, no spaces):
 *   utm_source   where it was sent from        email | whatsapp | wechat | linkedin | pdf | alibaba
 *   utm_medium   the transport                 email | social | referral
 *   utm_campaign the initiative, year-stamped  lead-magnet-2026 | rfq-confirmation
 *   utm_content  which specific link            guide-email-blog | rfq-confirm-guides
 *
 * Do NOT tag links in admin/internal notification emails. Those are read by us,
 * and tagging them would inflate the email channel with our own sessions.
 */

const SITE_URL = "https://www.nantonglinens.com";

export type UtmSource =
  | "email"
  | "whatsapp"
  | "wechat"
  | "linkedin"
  | "pdf"
  | "alibaba";

export type UtmMedium = "email" | "social" | "referral" | "cpc";

export type UtmParams = {
  source: UtmSource;
  medium: UtmMedium;
  campaign: string;
  content?: string;
  term?: string;
};

/** Build an absolute, UTM-tagged URL for a path on nantonglinens.com. */
export function utm(path: string, params: UtmParams): string {
  const url = new URL(path, SITE_URL);
  url.searchParams.set("utm_source", params.source);
  url.searchParams.set("utm_medium", params.medium);
  url.searchParams.set("utm_campaign", params.campaign);
  if (params.content) url.searchParams.set("utm_content", params.content);
  if (params.term) url.searchParams.set("utm_term", params.term);
  return url.toString();
}

/** Preset campaigns so we don't drift into one-off names. */
export const CAMPAIGNS = {
  leadMagnet: "lead-magnet-2026",
  rfqConfirmation: "rfq-confirmation",
  newsletter: "newsletter",
} as const;

/**
 * For links you paste by hand into WhatsApp / WeChat / a DM.
 * Keep a saved reply in WhatsApp Business with this shape so replies are
 * attributable without hand-editing parameters each time.
 */
export function outboundWhatsapp(path: string, content: string): string {
  return utm(path, {
    source: "whatsapp",
    medium: "social",
    campaign: "outreach-2026",
    content,
  });
}
