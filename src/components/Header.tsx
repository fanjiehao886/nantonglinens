"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const knowledgeHubLinks = [
  { name: "All Guides", href: "/blog" },
  { name: "Buying Guide", href: "/blog/buying-guide" },
  { name: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
  { name: "QC Checklist", href: "/blog/qc-checklist" },
  { name: "Market Reports", href: "/blog/market-reports" },
  { name: "---", href: "#", divider: true },
  { name: "Free PDF Guide", href: "/guides/download", highlight: true },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-900 flex items-center justify-center text-white font-bold text-sm">
            NL
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            Nantong Linens
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {/* Knowledge Hub dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors"
            >
              Knowledge Hub
              <svg
                className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-xl border border-gray-100 bg-white shadow-lg py-2 z-50">
                {knowledgeHubLinks.map((link) =>
                  link.divider ? (
                    <div key="divider" className="my-1 border-t border-gray-100" />
                  ) : link.highlight ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-800 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          <Link
            href="/rfq"
            className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors"
          >
            Custom / RFQ
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors"
          >
            About &amp; Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/rfq"
            className="rounded-full bg-blue-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-gray-700 hover:text-blue-800"
            >
              {item.name}
            </Link>
          ))}
          {/* Knowledge Hub section in mobile */}
          <div className="py-2 border-t border-gray-50 mt-1">
            <span className="block py-2 text-xs font-semibold uppercase text-gray-400 tracking-wider">
              Knowledge Hub
            </span>
            {knowledgeHubLinks.map((link) =>
              link.divider ? (
                <div key="divider-m" className="my-1 border-t border-gray-100" />
              ) : link.highlight ? (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 py-2.5 pl-3 text-sm font-semibold text-blue-700"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 pl-3 text-sm font-medium text-gray-700 hover:text-blue-800"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
          <Link
            href="/rfq"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-gray-700 hover:text-blue-800"
          >
            Custom / RFQ
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-gray-700 hover:text-blue-800"
          >
            About &amp; Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-gray-700 hover:text-blue-800"
          >
            Contact
          </Link>
          <Link
            href="/rfq"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-full bg-blue-900 px-5 py-2.5 text-center text-sm font-medium text-white"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
