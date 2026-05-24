import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nantong Linens - Hotel Linen Sourcing Agent | Dieshiqiao, China",
    template: "%s | Nantong Linens",
  },
  description:
    "Hotel linen sourcing agent based in Dieshiqiao, Nantong — China's #1 home textile market. We source, QC, and export bed sheets, towels, bathrobes, and table linens for hotels worldwide.",
  keywords: [
    "hotel linen sourcing agent",
    "hotel linen supplier China",
    "Dieshiqiao textile market",
    "Nantong hotel linens",
    "hotel bedding wholesale China",
    "custom hotel towels sourcing",
    "hospitality textile procurement",
    "China sourcing agent hotel",
    "hotel linen export China",
    "bulk hotel linens Nantong",
    "hotel linen Middle East",
    "hotel textile Vietnam",
    "hotel linen Dubai Saudi",
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
