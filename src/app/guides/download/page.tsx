import { Metadata } from "next";
import DownloadForm from "./DownloadForm";

export const metadata: Metadata = {
  title: "Free Hotel Linen Buying Guide (PDF) — Download Now",
  description:
    "Download our complete procurement guide: How to Buy Hotel Linens from China. Covers specifications, MOQ, pricing, QC, and shipping. Free PDF — no spam.",
  alternates: { canonical: "/guides/download" },
};

export default function DownloadGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
            Free Download
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            How to Buy Hotel Linens from China
          </h1>
          <p className="mt-2 text-lg text-blue-200">
            The Complete 2026 Procurement Guide
          </p>
          <p className="mt-6 text-base text-blue-100/80 max-w-xl mx-auto">
            A step-by-step guide for hotel buyers: define specs, negotiate MOQ,
            compare quotes, inspect quality, and ship with confidence.
          </p>
        </div>
      </section>

      {/* Content + Form */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left: What's Inside */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900">
                What's Inside This Guide
              </h2>
              <ul className="mt-6 space-y-4 text-gray-600">
                {[
                  {
                    title: "Step 1: Define Your Specifications",
                    desc: "The #1 mistake buyers make — and how to avoid it. Get a ready-to-use spec template.",
                  },
                  {
                    title: "Step 2: Understand MOQ & Pricing",
                    desc: "Real MOQ ranges for sheets, towels, and duvets. What to expect and how to negotiate.",
                  },
                  {
                    title: "Step 3: Request & Compare Quotes",
                    desc: "The 5 factors to compare across suppliers. How to spot a quote that's too good to be true.",
                  },
                  {
                    title: "Step 4: Sample Before You Commit",
                    desc: "Pre-production samples, lab dips, and shipping samples — the workflow explained.",
                  },
                  {
                    title: "Step 5: Quality Control",
                    desc: "The 3-stage inspection process that saves you from costly surprises. AQL standards included.",
                  },
                  {
                    title: "Step 6: Shipping & Logistics",
                    desc: "FOB vs DDP explained. Ocean freight timelines by destination. Air freight when you need it.",
                  },
                  {
                    title: "What to Budget",
                    desc: "Current FOB price ranges for bed sheets, duvet covers, towels, and bathrobes — as of mid-2026.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Download Form */}
            <div className="lg:col-span-2">
              <DownloadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Based in Dieshiqiao, Nantong — the world's largest home textile market
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            We live and work in the sourcing hub every day. This guide distills years of
            on-the-ground experience into actionable steps you can use immediately.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <span>6000+ Factories in Market</span>
            <span>·</span>
            <span>15+ Years Industry Experience</span>
            <span>·</span>
            <span>No Spam, No Commitment</span>
          </div>
        </div>
      </section>
    </>
  );
}
