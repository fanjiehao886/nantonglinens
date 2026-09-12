import { Metadata } from "next";
import { Suspense } from "react";
import RFQForm from "./RFQForm";

export const metadata: Metadata = {
  title: "Request a Custom Hotel Linen Quote — Nantong Linens",
  description:
    "Tell us your hotel linen requirements and receive a transparent, itemized quote within 24 hours. Bed sheets, towels, bathrobes, table linen — sourced from Dieshiqiao factories.",
  alternates: { canonical: "/rfq" },
};

function RFQPageSkeleton() {
  return (
    <>
      <section className="bg-blue-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Request a Custom Quote</h1>
          <p className="mt-2 text-blue-200">Loading form...</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="h-96 rounded-xl bg-gray-100 animate-pulse" />
        </div>
      </section>
    </>
  );
}

export default function RFQPage() {
  return (
    <Suspense fallback={<RFQPageSkeleton />}>
      <RFQForm />
    </Suspense>
  );
}
