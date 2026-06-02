import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default:
      "Nantong Linens — Hotel Linen Buying Guide, Specs & Sourcing from China",
    template: "%s | Nantong Linens",
  },
  description:
    "Everything you need to know about buying hotel linens from China. Free guides on GSM, thread count, weave types, procurement checklists, and pricing — built from daily experience in Dieshiqiao, the world's largest textile market. Sourcing service available.",
  keywords: [
    "hotel linen buying guide",
    "hotel towel GSM guide",
    "hotel bedding thread count",
    "hotel linen procurement China",
    "hotel linen sourcing agent",
    "Dieshiqiao textile market",
    "Nantong hotel linens",
    "hotel bedding wholesale China",
    "custom hotel towels sourcing",
    "hotel linen quality checklist",
    "China textile factory sourcing",
    "hotel linen export China",
    "bulk hotel linens Nantong",
    "hotel linen price guide",
    "hospitality textile procurement",
  ],
  authors: [{ name: "Nantong Linens" }],
  creator: "Nantong Linens",
  metadataBase: new URL("https://www.nantonglinens.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nantonglinens.com",
    siteName: "Nantong Linens",
    title:
      "Nantong Linens — Hotel Linen Buying Guide, Specs & Sourcing from China",
    description:
      "Free guides on hotel linen GSM, thread count, procurement checklists, and factory-direct sourcing from Dieshiqiao — the world's largest textile market.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Nantong Linens — Hotel Linen Buying Guide & Sourcing from China" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nantong Linens — Hotel Linen Buying Guide & Sourcing",
    description:
      "Free hotel linen procurement guides: GSM, thread count, QC checklists, and factory-direct sourcing from China's largest textile hub.",
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
        <GoogleAnalytics />
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
                "Hotel linen buying guide and sourcing service based in Dieshiqiao, Nantong — China's #1 home textile market. Free procurement guides, fabric specs, and factory-direct sourcing for hotels worldwide.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dieshiqiao, Haimen",
                addressRegion: "Jiangsu",
                addressCountry: "CN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "fanjieboy@gmail.com",
                availableLanguage: ["English", "Chinese"],
              },
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
                "@type": "ReadAction",
                target: "https://www.nantonglinens.com/products",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
