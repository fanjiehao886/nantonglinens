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
    title: "Nantong Linens - Hotel Linen Sourcing Agent | Dieshiqiao, China",
    description:
      "Hotel linen sourcing agent based in Dieshiqiao, China's #1 home textile market. We source, QC, and ship bed sheets, towels, bathrobes, and table linens for hotels worldwide.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Nantong Linens" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nantong Linens - Hotel Linen Sourcing Agent",
    description:
      "Sourcing agent in Dieshiqiao, China's largest home textile market. We find, inspect, and export hotel linens worldwide.",
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
                "Hotel linen sourcing agent based in Dieshiqiao, Nantong — China's #1 home textile market. We source, QC, and export quality hotel linens worldwide.",
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
