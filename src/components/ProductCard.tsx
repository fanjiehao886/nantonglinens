import Link from "next/link";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    slug: { current: string };
    shortDescription?: string;
    images?: Array<{ asset?: { url: string }; alt?: string }>;
    category: string;
    moq?: number;
    priceRange?: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  // images could be an array or a single projected object from GROQ
  const imageUrl = Array.isArray(product.images)
    ? product.images[0]?.asset?.url
    : (product.images as any)?.asset?.url;

  return (
    <Link href={`/products/${product.slug.current}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white transition-shadow hover:shadow-lg">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-gray-50">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-300">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18" />
                <path d="M15 3v18" />
                <path d="M3 9h18" />
                <path d="M3 15h18" />
              </svg>
            </div>
          )}
          {/* Category badge */}
          <span className="absolute left-3 top-3 rounded-full bg-blue-900/90 px-3 py-1 text-xs font-medium text-white">
            {product.category}
          </span>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-blue-800 line-clamp-1">
            {product.name}
          </h3>
          {product.shortDescription && (
            <p className="mt-1.5 text-sm text-gray-500 line-clamp-2">{product.shortDescription}</p>
          )}

          {/* Specs row */}
          <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
            {product.moq && (
              <span>MOQ: {product.moq} pcs</span>
            )}
            {product.priceRange && (
              <span>{product.priceRange}</span>
            )}
          </div>

          {/* CTA */}
          <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-800 opacity-0 transition-opacity group-hover:opacity-100">
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
