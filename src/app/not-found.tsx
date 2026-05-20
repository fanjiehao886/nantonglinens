import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <p className="text-6xl font-bold text-blue-900/20">404</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h1>
        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-blue-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Browse Products
          </Link>
          <Link
            href="/rfq"
            className="rounded-full border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
