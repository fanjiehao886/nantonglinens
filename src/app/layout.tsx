import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nantong Linens - Premium Hotel Linen Manufacturer | Custom Hotel Textiles",
    template: "%s | Nantong Linens",
  },
  description:
    "Leading manufacturer of custom hotel linens in Nantong, China. Bed sheets, towels, bathrobes, table linens for hotels worldwide. OEM/ODM, low MOQ, 15-day lead time.",
  keywords: [
    "hotel linen manufacturer",
    "hotel bedding wholesale",
    "custom hotel towels",
    "Nantong textile factory",
    "hotel linen supplier China",
    "OEM hotel linens",
    "bulk hotel linens",
    "hospitality textiles",
  ],
  authors: [{ name: "Nantong Linens" }],
  creator: "Nantong Linens",
  metadataBase: new URL("https://www.nantonglinens.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nantonglinens.com",
    siteName: "Nantong Linens",
    title: "Nantong Linens - Premium Hotel Linen Manufacturer",
    description:
      "Custom hotel linens from Nantong's largest textile hub. OEM/ODM manufacturing for hospitality industry.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Nantong Linens" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nantong Linens - Hotel Linen Manufacturer",
    description:
      "Custom hotel linens manufactured in Nantong, China. OEM/ODM, competitive pricing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema for GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nantong Linens",
              url: "https://www.nantonglinens.com",
              logo: "https://www.nantonglinens.com/logo.png",
              description:
                "Professional hotel linen manufacturer based in Nantong, China. Specializing in custom bed sheets, towels, bathrobes, and table linens for the global hospitality industry.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nantong",
                addressRegion: "Jiangsu",
                addressCountry: "CN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "fanjieboy@gmail.com",
                availableLanguage: ["English", "Chinese"],
              },
              sameAs: [
                "https://linkedin.com/company/nantonglinens",
              ],
            }),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Nantong Linens",
              url: "https://www.nantonglinens.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.nantonglinens.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
