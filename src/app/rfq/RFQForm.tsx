"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trackEvent, trackLead } from "@/lib/gtag";

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

/**
 * Optional attachments. A buyer who uploads a photo of the label they use today
 * can usually be priced the same day instead of after two rounds of emails —
 * that is the whole point of this field.
 *
 * Constraints are set by what the hosting function will accept, not by what we
 * would like to accept: a serverless request body caps out around 4.5 MB, and
 * base64 inflates a file by a third. Images are therefore downscaled in the
 * browser before they are encoded, and the total is capped at 3 MB.
 */
const MAX_FILES = 3;
const MAX_FILE_BYTES = 5 * 1024 * 1024; // before compression
const MAX_TOTAL_BYTES = 3 * 1024 * 1024; // after compression, base64-decoded
const ACCEPTED = "image/*,.pdf,.xlsx,.xls,.csv,.doc,.docx";

type Attachment = { name: string; size: number; content: string };

function readAsAttachment(file: File): Promise<Attachment> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error(`Could not read ${file.name}`));
    reader.onload = () => {
      const result = String(reader.result || "");
      const base64 = result.includes(",") ? result.slice(result.indexOf(",") + 1) : result;
      resolve({ name: file.name, size: file.size, content: base64 });
    };
    reader.readAsDataURL(file);
  });
}

/** Downscale a large photo in the browser so a phone snapshot still fits. */
async function shrinkImage(file: File): Promise<File> {
  if (!file.type.startsWith("image/") || file.size < 1.5 * 1024 * 1024) return file;
  try {
    const bitmap = await createImageBitmap(file);
    const maxSide = 1600;
    const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
    if (scale === 1) return file;
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const blob: Blob | null = await new Promise((res) => canvas.toBlob(res, "image/jpeg", 0.82));
    if (!blob) return file;
    return new File([blob], file.name.replace(/\.\w+$/, "") + ".jpg", { type: "image/jpeg" });
  } catch {
    return file;
  }
}

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

function RFQFormContent() {
  const searchParams = useSearchParams();

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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  /** Optional attachments — spec sheet, logo artwork, or a photo of the current label. */
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [fileError, setFileError] = useState("");
  const [readingFiles, setReadingFiles] = useState(false);

  // Sync category from URL once hydrated
  useEffect(() => {
    const category = searchParams.get("category");
    if (category && PRODUCT_CATEGORIES.includes(category)) {
      setForm((prev) => ({ ...prev, productCategory: category }));
    }
  }, [searchParams]);

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

  const handleFiles = async (list: FileList | null) => {
    if (!list || list.length === 0) return;
    setFileError("");
    setReadingFiles(true);
    try {
      const incoming = Array.from(list);
      const next = [...attachments];

      for (const raw of incoming) {
        if (next.length >= MAX_FILES) {
          setFileError(`Up to ${MAX_FILES} files. Remove one to add another.`);
          break;
        }
        if (raw.size > MAX_FILE_BYTES) {
          setFileError(`${raw.name} is larger than 5 MB — please send a smaller file.`);
          continue;
        }
        const file = await shrinkImage(raw);
        const attachment = await readAsAttachment(file);
        const total = next.reduce((sum, a) => sum + a.size, 0) + attachment.size;
        if (total > MAX_TOTAL_BYTES) {
          setFileError("Attachments total more than 3 MB. Send fewer files, or email the rest to info@nantonglinens.com.");
          continue;
        }
        next.push(attachment);
      }

      setAttachments(next);
      trackEvent("rfq_attach", { files: next.length });
    } catch {
      setFileError("That file could not be read. Try a JPG, PNG or PDF.");
    } finally {
      setReadingFiles(false);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
    setFileError("");
  };

  const handleSubmit = async () => {
    setSubmitError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, attachments }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      trackEvent("rfq_submit", {
        product_category: form.productCategory,
        country: form.country || "unknown",
        quantity: form.quantity || "unknown",
        hotel_tier: form.hotelTier || "unknown",
        timeline: form.timeline || "unknown",
        attachments: attachments.length,
      });
      trackLead("rfq_submit", {
        product_category: form.productCategory,
        country: form.country || "unknown",
      });
    } catch {
      setSubmitError("Something went wrong. Please email us directly at info@nantonglinens.com.");
    } finally {
      setSubmitting(false);
    }
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
          {attachments.length > 0 && (
            <p className="mt-3 text-sm text-gray-500">
              {attachments.length} file{attachments.length !== 1 ? "s" : ""} received — a photo of
              your current label is usually enough for us to price the order on the first reply.
            </p>
          )}
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/products" className="rounded-full border px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              Browse More Products
            </Link>
            <a href={`https://wa.me/8615151361119?text=Hi, I just submitted an RFQ for ${form.productCategory}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-600 transition-colors">
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
            Tell us about your hotel linen needs. Free quote within 24 hours. No commitment
            required.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {[
              "Quote reply within 24 hours, weekdays",
              "Samples in 5–7 days",
              "Attach a photo of the label you use today — usually priced the same day",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-blue-100"
              >
                {chip}
              </span>
            ))}
          </div>

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
          {submitError && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {submitError}
            </div>
          )}

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

              {/* Optional attachments — the fastest route to a same-day price */}
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <label htmlFor="rfq-files" className="block text-sm font-semibold text-gray-900">
                    Optional: attach a spec sheet, logo, or a photo of the label you use today
                  </label>
                  <span className="rounded-full border border-blue-100 bg-white px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Fastest route to a same-day price
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  A photo of your current label or care tag is usually enough for us to price the
                  order straight away — it saves the two rounds of emails it normally takes to pin a
                  specification down. Up to {MAX_FILES} files (JPG, PNG, PDF, Excel or Word), 3 MB
                  total. This is optional: skip it and we will still quote from your description.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <label
                    htmlFor="rfq-files"
                    className="cursor-pointer rounded-full bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                  >
                    {readingFiles ? "Reading files..." : "Choose files"}
                  </label>
                  <input
                    id="rfq-files"
                    type="file"
                    multiple
                    accept={ACCEPTED}
                    className="sr-only"
                    onChange={(e) => {
                      void handleFiles(e.target.files);
                      e.target.value = "";
                    }}
                  />
                  <span className="text-xs text-gray-500">
                    {attachments.length} of {MAX_FILES} attached
                  </span>
                </div>
                {attachments.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {attachments.map((file, i) => (
                      <li
                        key={`${file.name}-${i}`}
                        className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                      >
                        <span className="truncate text-gray-700">{file.name}</span>
                        <span className="flex shrink-0 items-center gap-3">
                          <span className="text-xs text-gray-400">
                            {Math.max(1, Math.round(file.size / 1024))} KB
                          </span>
                          <button
                            type="button"
                            onClick={() => removeAttachment(i)}
                            className="text-xs font-medium text-blue-800 hover:underline"
                          >
                            Remove
                          </button>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {fileError && <p className="mt-3 text-sm text-red-600">{fileError}</p>}
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
                  <div className="flex justify-between"><span className="text-gray-500">Attachments:</span><span>{attachments.length > 0 ? `${attachments.length} file${attachments.length !== 1 ? "s" : ""}` : "None"}</span></div>
                </div>
                {attachments.length === 0 && (
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    Have a spec sheet or a photo of the label you use today? Going back one step and
                    attaching it usually means we can quote on the first reply instead of the second.
                  </p>
                )}
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
                  disabled={!form.email || !form.name || submitting}
                  className="rounded-full bg-green-600 px-10 py-3.5 text-base font-semibold text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {submitting ? "Submitting..." : "Submit RFQ"}
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
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-900 bg-white px-7 py-3 text-sm font-medium text-blue-900 hover:bg-blue-50 transition-colors"
          >
            Request Free Swatches
          </Link>
        </div>
      </section>
    </>
  );
}

export default function RFQForm() {
  return (
    <Suspense
      fallback={
        <div>
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
        </div>
      }
    >
      <RFQFormContent />
    </Suspense>
  );
}
