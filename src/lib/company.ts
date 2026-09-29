/**
 * Single source of truth for company identity / NAP.
 *
 * Google matches a business entity by name + address + phone (NAP) plus
 * corroborating `sameAs` profiles. If those values differ between pages, the
 * entity fragments and the "manufacturer" claim cannot be corroborated.
 * Every page must read from here — never hard-code an address again.
 *
 * Fields marked TODO are intentionally left undefined: schema output omits
 * them until you supply the real value, so nothing unverified goes live.
 */

export const company = {
  /** Trade name used across the site (what buyers and Google see). */
  brandName: "Nantong Linens",

  /**
   * Registered legal entity. This is what Google matches against the business
   * registry and a Google Business Profile. Trade name alone cannot be verified
   * because there is nothing to match it to.
   * Set to undefined to hide it (and lose entity verification).
   */
  legalName: "Nantong Jinkeer Textile Co., Ltd.",
  legalNameLocal: "南通金科尔纺织有限公司",

  alternateName: ["Nantong Linens", "Jinkeer Textile"],

  url: "https://www.nantonglinens.com",
  email: "info@nantonglinens.com",
  /** E.164, required for NAP consistency with a Google Business Profile. */
  telephone: "+86-151-5136-1119",
  whatsapp: "+86 15151361119",
  whatsappUrl: "https://wa.me/8615151361119",

  foundingYear: "2010",

  /** TODO: confirm actual headcount before publishing. */
  employeeCount: undefined as number | undefined,

  address: {
    /** TODO: add the street / building number (e.g. "No. 88 XX Road"). */
    streetAddress: "Chuanjiang Town",
    addressLocality: "Nantong",
    addressRegion: "Jiangsu",
    /** TODO: postal code of the Chuanjiang facility. */
    postalCode: undefined as string | undefined,
    addressCountry: "CN",
  },

  /**
   * TODO: confirm from Google Maps (right-click the pin > copy coordinates).
   * Approximate position of Chuanjiang Town, the Dieshiqiao cluster.
   */
  geo: { latitude: 31.9548, longitude: 121.0653 },

  /**
   * Corroboration profiles. Each verified profile that carries the same NAP
   * strengthens entity verification. Add the Google Business Profile URL first —
   * it is the single strongest signal available.
   * TODO: add Google Business Profile, LinkedIn company page, Alibaba storefront.
   */
  sameAs: ["https://www.ntjinkeer.com/"] as string[],
  /** ISIC Rev.4 1392 — manufacture of made-up textile articles (bed/bath linen). */
  isicV4: "1392",

  /** Facility facts used on /factory and in schema. */
  facility: {
    areaSqm: 5000,
    processes: [
      "weaving",
      "dyeing and finishing",
      "cutting",
      "sewing",
      "quilting",
      "inspection",
      "packing",
    ],
  },

  /**
   * TODO: add certificate numbers issued to the legal entity. A certificate
   * number that anyone can look up on the issuer's site is verifiable proof —
   * a certificate name alone is not.
   */
  certifications: [
    { name: "OEKO-TEX Standard 100", certificateNumber: undefined as string | undefined },
    { name: "ISO 9001:2015", certificateNumber: undefined as string | undefined },
    { name: "BSCI Social Compliance", certificateNumber: undefined as string | undefined },
  ],

  serviceRegions: [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Nordics",
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Singapore",
    "Vietnam",
    "Thailand",
    "Malaysia",
    "Australia",
  ],
};

/** PostalAddress node, with undefined fields dropped. */
function postalAddress() {
  return {
    "@type": "PostalAddress",
    ...(company.address.streetAddress ? { streetAddress: company.address.streetAddress } : {}),
    addressLocality: company.address.addressLocality,
    addressRegion: company.address.addressRegion,
    ...(company.address.postalCode ? { postalCode: company.address.postalCode } : {}),
    addressCountry: company.address.addressCountry,
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${company.url}/#organization`,
    name: company.brandName,
    ...(company.legalName ? { legalName: company.legalName } : {}),
    alternateName: company.alternateName,
    url: company.url,
    logo: {
      "@type": "ImageObject",
      url: `${company.url}/logo.png`,
    },
    image: `${company.url}/og-image.jpg`,
    description:
      "Hotel linen manufacturer and exporter (manufacturer + trading company) based in Nantong, Jiangsu, China. Own 5,000 sqm production facility plus audited capacity in the 6,000+ mill Dieshiqiao textile cluster. Factory-direct wholesale, OEM and private-label hotel linens.",
    foundingDate: company.foundingYear,
    slogan: "Factory-direct hotel linens from our own Nantong facility",
    email: company.email,
    telephone: company.telephone,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    isicV4: company.isicV4,
    ...(company.employeeCount
      ? { numberOfEmployees: { "@type": "QuantitativeValue", value: company.employeeCount } }
      : {}),
    knowsAbout: [
      "hotel bed linen manufacturing",
      "hotel towel manufacturing",
      "hotel bathrobe manufacturing",
      "thread count and GSM specification",
      "commercial laundry durability",
      "OEKO-TEX and ISO 9001 compliance",
      "FOB export documentation",
    ],
    areaServed: company.serviceRegions.map((name) => ({ "@type": "Country", name })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: company.email,
        telephone: company.telephone,
        availableLanguage: ["English", "Chinese"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hotel linen manufacturing programmes",
      itemListElement: [
        "Hotel bed linen (sheets, duvet covers, pillowcases, fitted sheets)",
        "Hotel towels (bath, hand, face, bath mats, pool and beach)",
        "Hotel bathrobes",
        "Hotel table linen",
        "Mattress protectors and toppers",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Product", name },
      })),
    },
    ...(company.sameAs.length > 0 ? { sameAs: company.sameAs } : {}),
  };
}

export function webSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${company.url}/#website`,
    url: company.url,
    name: company.brandName,
    inLanguage: "en",
    publisher: { "@id": `${company.url}/#organization` },
  };
}

/** Graph wrapper so Organization and WebSite share one @id space. */
export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), webSiteSchema()],
  };
}

/** Human-readable NAP block, rendered on /contact and /factory. */
export function napLines() {
  const a = company.address;
  return [
    company.legalName || company.brandName,
    ...(a.streetAddress ? [a.streetAddress] : []),
    [a.addressLocality, a.addressRegion].filter(Boolean).join(", "),
    [a.postalCode, "China"].filter(Boolean).join(" "),
  ];
}
