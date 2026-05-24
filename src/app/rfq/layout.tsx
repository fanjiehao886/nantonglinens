import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote - Hotel Linen Sourcing | Nantong Linens",
  description:
    "Submit your hotel linen RFQ — we respond with sourcing options and pricing within 24 hours. Bed sheets, towels, bathrobes, and table linens from Dieshiqiao factories.",
  alternates: { canonical: "/rfq" },
};

export default function RFQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
