"use client";

import Link from "next/link";
import { trackClick, type GaEventParams } from "@/lib/gtag";

interface TrackedLinkProps extends React.ComponentProps<typeof Link> {
  /** cta_name value sent in the cta_click event */
  ctaName: string;
  /** extra params merged into the event (e.g. { cta_location: "blog_inline" }) */
  eventParams?: GaEventParams;
}

/**
 * <Link> wrapper that fires a cta_click GA4 event on click.
 * Safe to use inside server components (this is a client component).
 */
export function TrackedLink({
  ctaName,
  eventParams,
  onClick,
  ...rest
}: TrackedLinkProps) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        trackClick(ctaName, eventParams);
        onClick?.(e);
      }}
    />
  );
}

export default TrackedLink;
