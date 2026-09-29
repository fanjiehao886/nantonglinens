import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { organizationGraph } from "@/lib/company";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default:
      "Hotel Linen Manufacturer & Exporter — Factory-Direct Wholesale | Nantong Linens",
    template: "%s | Nantong Linens",
  },
  description:
    "Hotel linen manufacturer and exporter in Nantong, China — factory-direct wholesale pricing, no trading-company markup. Plus free procurement guides: GSM, thread count, QC checklists.",
  keywords: [
    "hotel linen manufacturer",
    "hotel linen manufacturer China",
    "factory direct hotel linens",
    "hotel linen wholesale supplier",
    "hotel linen buying guide",
    "hotel towel GSM guide",
    "hotel bedding thread count",
    "hotel linen procurement China",
    "bulk hotel linens manufacturer",
    "OEM hotel linen China",
    "private label hotel linens",
    "Dieshiqiao textile market",
    "Nantong hotel linens factory",
    "hotel bedding wholesale China",
    "custom hotel towels manufacturer",
    "hotel linen quality checklist",
    "hotel linen export China",
    "hospitality textile procurement",
  ],
  authors: [{ name: "Nantong Linens" }],
  creator: "Nantong Linens",
  metadataBase: new URL("https://www.nantonglinens.com"),
  alternates: {
    canonical: "https://www.nantonglinens.com",
    languages: {
      en: "https://www.nantonglinens.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nantonglinens.com",
    siteName: "Nantong Linens",
    title:
      "Hotel Linen Manufacturer & Exporter — Factory-Direct Wholesale",
    description:
      "Factory-direct hotel linens from our own Nantong production facility: bed sheets, towels, bathrobes, table linen. Free procurement guides included.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Nantong Linens — Hotel Linen Manufacturer & Exporter, Factory-Direct Wholesale" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Linen Manufacturer & Exporter — Factory-Direct | Nantong Linens",
    description:
      "Factory-direct hotel linens from our own facility in Nantong, China. Wholesale, OEM and private label — plus free GSM, thread count and QC guides.",
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
        {/* Organization + WebSite schema, generated from the single NAP source of truth.
            Note: schema.org has no "Manufacturer" type — manufacturing identity is
            expressed through isicV4, knowsAbout and hasOfferCatalog instead. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationGraph()) }}
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
