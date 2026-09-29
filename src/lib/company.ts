/**
 * Single source of truth for company identity / NAP.
 *
 * Every page must read from here — never hard-code an address again.
 *
 * Positioning (decided 2026-09-29): Nantong Linens is the buyer-facing brand of
 * a FOB manufacturer alliance — an alliance of independently owned export
 * factories in Nantong, each with its own physical plant and its own export
 * licence. It is NOT a group with common ownership, and it is NOT a sourcing
 * agent. The distinction matters because "group" implies one owner (which is
 * false) and "agent" implies a commission layer (which does not exist).
 *
 * Entity-verification policy: we deliberately do NOT claim a registered legal
 * entity and do NOT run a Google Business Profile. See `sameAs` below.
 *
 * Fields marked TODO are intentionally left undefined: schema output omits
 * them until you supply the real value, so nothing unverified goes live.
 */

export const company = {
  /** Trade name used across the site (what buyers and Google see). */
  brandName: "Nantong Linens",

  /**
   * Registered legal entity — intentionally NOT published.
   *
   * No member's company name is published, including the founding bedding mill
   * (Nantong Jinkeer Textile Co., Ltd.), because the alliance is the trading
   * identity and individual members contract under their own names. Publishing
   * one member's legal name as if it were the whole business would be a false
   * statement, and it would push Google into an entity-verification path
   * (knowledge panel / Google Business Profile) that this business has no
   * storefront to satisfy.
   *
   * TODO: if a single entity is ever designated to sign sales contracts under
   * the Nantong Linens brand, put its registered name here. Until then it stays
   * undefined and nothing is published.
   */
  legalName: undefined as string | undefined,
  legalNameLocal: undefined as string | undefined,

  alternateName: ["Nantong Linens"],

  url: "https://www.nantonglinens.com",
  email: "info@nantonglinens.com",
  /** E.164. Kept consistent everywhere so phone matches on every page. */
  telephone: "+86-151-5136-1119",
  whatsapp: "+86 15151361119",
  whatsappUrl: "https://wa.me/8615151361119",

  /** Year the founding member began manufacturing hotel linens. */
  foundingYear: "2010",

  /** TODO: confirm actual headcount before publishing. */
  employeeCount: undefined as number | undefined,

  address: {
    /**
     * No street address is published on purpose: the alliance has no public
     * storefront, and a made-up or approximate street number would be both
     * inaccurate and an invitation for Google to demand address verification.
     * Locality-level NAP is consistent, checkable and honest for a B2B exporter.
     * The production base is described in page copy instead.
     *
     * TODO: supply the real street/building number only if you want it public.
     */
    streetAddress: undefined as string | undefined,
    addressLocality: "Nantong",
    addressRegion: "Jiangsu",
    /** TODO: postal code, only if you want it public. */
    postalCode: undefined as string | undefined,
    addressCountry: "CN",
  },

  /** Human-readable production base, used in page copy (not in NAP). */
  productionBase: "Chuanjiang Town, Tongzhou District, Nantong, Jiangsu, China",

  /**
   * Approximate centre of Chuanjiang Town, the bedding cluster we sit in.
   * TODO: if a single facility address is ever published, replace with its
   * exact coordinates (Google Maps -> right-click the pin -> copy).
   */
  geo: { latitude: 31.9548, longitude: 121.0653 },

  /**
   * Corroboration profiles — third-party pages that already exist and describe
   * the same business.
   *
   * Deliberately NOT included: a Google Business Profile. A GBP is the one
   * channel where Google *requires* identity verification (postcard, phone or
   * video), and this business has no public storefront to verify — the alliance
   * quotes and exports from factory addresses. Creating a GBP here would
   * produce an unverifiable listing and pull the site into the verification
   * flow we are avoiding. Google still understands an Organization without one;
   * it simply does not build a map/knowledge-panel presence, which this B2B
   * export business does not need.
   *
   * TODO: add profiles that genuinely exist and carry the same name + phone,
   * e.g. a LinkedIn company page or an Alibaba / Made-in-China storefront.
   */
  sameAs: ["https://www.ntjinkeer.com/"] as string[],
  /** ISIC Rev.4 1392 — manufacture of made-up textile articles (bed/bath linen). */
  isicV4: "1392",

  /**
   * The alliance. This is the core identity block — read `definition` first.
   */
  alliance: {
    /** Buyer-facing descriptor. Always "manufacturer alliance", never bare "alliance". */
    descriptor: "FOB manufacturer alliance",
    /** Shorter form for badges and chips. */
    descriptorShort: "manufacturer alliance",
    /** Chinese gloss, used in explanatory paragraphs only. */
    descriptorLocal: "工贸一体出口厂家联盟",
    /** One-line definition reused in copy. */
    definition:
      "an alliance of independent FOB export factories in Nantong, China — every member owns its own plant, runs its own production lines and holds its own export licence",
    /** Terms used for member production sites in copy. */
    memberTerm: "member factory",
    memberTermPlural: "member factories",
    /**
     * The membership gate. Published because it is what separates a factory
     * alliance from a broker network — and because a buyer can check it.
     */
    membershipTerms: [
      "owns and operates its own production facility",
      "holds its own export licence and can invoice FOB in its own name",
      "accepts buyer audits and on-site visits",
      "works to the alliance's written specification and inspection standard",
    ],
    /** What the founding member does. Add later members as they are announced. */
    foundingMember: {
      role: "Founding member — bedding",
      specialism: "hotel bed sheets, duvet covers, pillowcases and custom bedding development",
      facility: "5,000 m² mill in Chuanjiang Town, Tongzhou, Nantong",
    },
    /** Categories the alliance covers today; members are added over time. */
    categoryCoverage: [
      "Hotel bed linen — flat sheets, fitted sheets, duvet covers, pillowcases",
      "Hotel towels — bath, hand, face, bath mats, pool and beach",
      "Hotel bathrobes",
      "Hotel table linen",
      "Mattress protectors and toppers",
    ],
    /** Constant across every member, whoever runs the line. */
    constants: [
      "one sales contract",
      "one specification sheet per programme",
      "one inspection standard",
      "one set of shipping documents",
    ],
    /** TODO: alliance trading name, if one is ever created. */
    name: undefined as string | undefined,
    /** TODO: number of member factories, once it is stable enough to publish. */
    memberCount: undefined as number | undefined,
  },

  /** Facility facts for the founding member's bedding mill, used on /factory. */
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
   * TODO: add certificate numbers issued to the member factories. A certificate
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
      "Hotel linen manufacturer and exporter — a FOB manufacturer alliance of independently owned textile factories in Nantong, Jiangsu, China. Each member owns its own plant and holds its own export licence, and every member accepts buyer audits. Factory-direct FOB wholesale, OEM and private-label hotel bed linen, towels, bathrobes and table linen.",
    foundingDate: company.foundingYear,
    slogan: "Factory-direct hotel linens from the factory that makes them",
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
      "textile factory audit",
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
    /**
     * Structured statement of the business model. These are the claims a buyer
     * (or a crawler) can hold us to, expressed as machine-readable properties
     * rather than buried in prose.
     */
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Business model",
        value:
          "FOB manufacturer alliance of independently owned export factories (not a sourcing agent, broker or commission intermediary)",
      },
      {
        "@type": "PropertyValue",
        name: "Membership requirement",
        value:
          "Each member owns and operates its own production facility and holds its own export licence",
      },
      {
        "@type": "PropertyValue",
        name: "Factory visits",
        value: "Buyer audits and on-site visits are welcome at every member factory",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hotel linen manufacturing programmes",
      itemListElement: company.alliance.categoryCoverage.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Product", name },
      })),
    },
    /** Publishing this is a trust signal, not a badge: it is what a buyer gets. */
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
