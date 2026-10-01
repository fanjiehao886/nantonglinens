import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote — Hotel Linen RFQ | Nantong Linens",
  description:
    "Submit your hotel linen RFQ and get a factory-direct quote within 24 hours. Bed sheets, towels, bathrobes and table linen from the member factories of our alliance — attach a spec sheet or a photo of the label you use today.",
  alternates: { canonical: "/rfq" },
};

export default function RFQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
