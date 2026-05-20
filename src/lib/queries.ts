// GROQ Queries for Sanity CMS

export const PRODUCTS_QUERY = `
  *[_type == "product" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
    _id,
    _type,
    name,
    slug,
    category,
    description,
    shortDescription,
    images[] {
      asset-> { url, metadata { dimensions, lqip } },
      alt
    },
    specifications,
    moq,
    leadTime,
    priceRange,
    hotelTiers[],
    customizations[],
    featured,
  }
`;

export const PRODUCT_BY_SLUG_QUERY = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    category,
    description,
    shortDescription,
    images[] {
      asset-> { url, metadata { dimensions, lqip } },
      alt
    },
    specifications,
    moq,
    leadTime,
    priceRange,
    hotelTiers[],
    customizations[],
  }
`;

export const FEATURED_PRODUCTS_QUERY = `
  *[_type == "product" && featured == true && !(_id in path("drafts.**"))] | order(_createdAt desc)[0..5] {
    _id,
    name,
    slug,
    shortDescription,
    images[0] { asset -> { url }, alt },
    category,
    moq,
    priceRange,
  }
`;

export const CATEGORIES_QUERY = `
  *[_type == "product"] | category => !(_id in path("drafts.**"))
  .category | unique() {
    value: current,
    count: count(*[_type == "product" && category == current])
  } | order(value asc)
`;

export const POSTS_QUERY = `
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset -> { url, metadata { dimensions, lqip } },
      alt
    },
    categories[]->{ title, slug },
    author -> { name, image { asset -> { url } } },
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    mainImage {
      asset -> { url, metadata { dimensions, lqip } },
      alt
    },
    categories[]->{ title, slug },
    author -> { name, image { asset -> { url } } },
  }
`;

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    description,
    email,
    phone,
    whatsapp,
    address,
    socialLinks,
  }
`;
