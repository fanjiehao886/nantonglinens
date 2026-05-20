import Link from "next/link";

const footerLinks = {
  products: [
    { name: "Bed Sheets", href: "/products?category=bed-sheets" },
    { name: "Pillowcases", href: "/products?category=pillowcases" },
    { name: "Bath Towels", href: "/products?category=bath-towels" },
    { name: "Bathrobes", href: "/products?category=bathrobes" },
    { name: "Table Linen", href: "/products?category=table-linen" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Factory Tour", href: "/about#factory" },
    { name: "Certifications", href: "/about#certifications" },
    { name: "Blog & Guides", href: "/blog" },
  ],
  support: [
    { name: "Request a Quote", href: "/rfq" },
    { name: "Order Samples", href: "/rfq#samples" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-900 flex items-center justify-center text-white font-bold text-sm">
                NL
              </div>
              <span className="text-lg font-semibold text-gray-900">Nantong Linens</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Premium hotel linen manufacturer from Nantong, China&apos;s largest textile hub.
              Custom solutions for hospitality brands worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-blue-800 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-blue-800 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-blue-800 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact bar */}
        <div className="mt-10 flex flex-col gap-4 rounded-xl bg-blue-900 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-white">Ready to start your order?</p>
            <p className="mt-1 text-sm text-blue-200">
              Free swatch samples available. Response within 24 hours.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/8612345678900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
            <Link
              href="/rfq"
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Nantong Linens. All rights reserved.
            Based in Nantong, Jiangsu, China — Serving hotels worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
