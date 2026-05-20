"use client";

import { useState } from "react";
import Link from "next/link";

const PRODUCT_CATEGORIES = [
  "Bed Sheets",
  "Pillowcases",
  "Duvet Covers",
  "Mattress Toppers",
  "Bath Towels",
  "Bath Mats",
  "Bathrobes",
  "Table Linen (Napkins, Tablecloths)",
  "Pool & Beach Towels",
  "Other / Not Sure",
];

const MATERIAL_OPTIONS = [
  "100% Cotton (Egyptian)",
  "100% Cotton (Upland)",
  "Cotton/Polyester Blend",
  "100% Bamboo Fiber",
  "Microfiber",
  "Tencel/Lyocell",
  "Linen/Cotton Blend",
  "Not sure — need recommendation",
];

const HOTEL_TIERS = [
  "Budget / Economy (2-3 star)",
  "Mid-Range (3-4 star)",
  "Upper-Midscale (4 star)",
  "Luxury / Premium (5 star)",
  "Boutique / Design Hotel",
  "Resort / Vacation Property",
];

interface FormData {
  step: number;
  company: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  productCategory: string;
  materialPreference: string;
  quantity: string;
  hotelTier: string;
  customizations: string[];
  timeline: string;
  message: string;
}

export default function RFQPage() {
  const [form, setForm] = useState<FormData>({
    step: 1,
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    productCategory: "",
    materialPreference: "",
    quantity: "",
    hotelTier: "",
    customizations: [],
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCustomization = (opt: string) => {
    setForm((prev) => ({
      ...prev,
      customizations: prev.customizations.includes(opt)
        ? prev.customizations.filter((c) => c !== opt)
        : [...prev.customizations, opt],
    }));
  };

  const handleSubmit = async () => {
    // In production, this sends to your API route → Resend email
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="mt-6 text-2xl font-bold text-gray-900">RFQ Submitted Successfully!</h1>
          <p className="mt-3 text-gray-500">
            Thank you for your inquiry, {form.name || "there"}. Our team will review your requirements
            and get back to you within 24 hours via email.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/products" className="rounded-full border px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              Browse More Products
            </Link>
            <a href={`https://wa.me/86151361119?text=Hi, I just submitted an RFQ for ${form.productCategory}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-600 transition-colors">
              Follow up on WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Request a Custom Quote</h1>
          <p className="mt-2 text-blue-200">
            Tell us about your hotel linen needs. Free quote within 24 hours.
            No commitment required.
          </p>

          {/* Step indicator */}
          <div className="mt-8 flex items-center gap-2 sm:gap-4">
            {["Product Info", "Specifications", "Contact & Submit"].map(
              (label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                      form.step > i + 1
                        ? "bg-green-500 text-white"
                        : form.step === i + 1
                        ? "bg-white text-blue-900"
                        : "bg-blue-800/30 text-blue-300"
                    }`}
                  >
                    {form.step > i + 1 ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span className={`hidden sm:block text-sm ${form.step === i + 1 ? "font-semibold text-white" : "text-blue-300/60"}`}>
                    {label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Form body */}
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Step 1: Product info */}
          {form.step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">What are you looking for?</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Product Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.productCategory}
                  onChange={(e) => update("productCategory", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none"
                >
                  <option value="">Select product type...</option>
                  {PRODUCT_CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  placeholder='e.g., "200 sets", "500 pieces"'
                  value={form.quantity}
                  onChange={(e) => update("quantity", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Material Preference
                </label>
                <select
                  value={form.materialPreference}
                  onChange={(e) => update("materialPreference", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none"
                >
                  <option value="">Select material...</option>
                  {MATERIAL_OPTIONS.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Target Timeline
                </label>
                <select
                  value={form.timeline}
                  onChange={(e) => update("timeline", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none"
                >
                  <option value="">When do you need it?</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="3–6 months">3–6 months</option>
                  <option value="Just planning ahead">Just planning ahead</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => form.productCategory && update("step", 2)}
                  disabled={!form.productCategory}
                  className="rounded-full bg-blue-900 px-8 py-3 text-base font-medium text-white hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next: Specifications
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Specifications */}
          {form.step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Tell us more details</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Property Type
                </label>
                <select
                  value={form.hotelTier}
                  onChange={(e) => update("hotelTier", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none"
                >
                  <option value="">Select property type...</option>
                  {HOTEL_TIERS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Customization Options (select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Custom Logo Embroidery",
                    "Custom Woven Label",
                    "Private Label Packaging",
                    "Pantone Color Match",
                    "Custom Size / Dimension",
                    "Design Development Support",
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => toggleCustomization(opt)}
                      className={`rounded-lg border p-3 text-left text-sm transition-all ${
                        form.customizations.includes(opt)
                          ? "border-blue-800 bg-blue-50 text-blue-900"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <span className="inline-block mr-2">
                        {form.customizations.includes(opt) ? "\u2713" : "\u2610"}
                      </span>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Additional Requirements or Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Any specific requirements? e.g., 'Must pass Marriott brand standards', 'Need samples in white and ivory', etc."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none resize-none"
                />
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => update("step", 1)}
                  className="rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => update("step", 3)}
                  className="rounded-full bg-blue-900 px-8 py-3 text-base font-medium text-white hover:bg-blue-800 transition-colors"
                >
                  Next: Contact Info
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact & submit */}
          {form.step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Your Contact Information</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your hotel or company name"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (xxx) xxx-xxxx"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="United States"
                    value={form.country}
                    onChange={(e) => update("country", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="rounded-xl bg-gray-50 p-5 mt-4">
                <h3 className="font-semibold text-sm text-gray-900 mb-3">Your Request Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Product:</span><span>{form.productCategory}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Quantity:</span><span>{form.quantity || "—"}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Material:</span><span>{form.materialPreference || "—"}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Customization:</span><span>{form.customizations.length > 0 ? form.customizations.join(", ") : "None selected"}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Timeline:</span><span>{form.timeline || "—"}</span></div>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => update("step", 2)}
                  className="rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.email || !form.name}
                  className="rounded-full bg-green-600 px-10 py-3.5 text-base font-semibold text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Submit RFQ
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sample request section */}
      <section id="samples" className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Want to Feel the Quality First?</h2>
          <p className="mt-2 text-gray-500">
            Order free swatch samples before placing a bulk order. We ship swatches worldwide
            at no cost for serious buyers.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-900 bg-white px-7 py-3 text-sm font-medium text-blue-900 hover:bg-blue-50 transition-colors"
          >
            Request Free Swatches
          </a>
        </div>
      </section>
    </>
  );
}
