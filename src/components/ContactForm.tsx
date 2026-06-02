"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const pageLoadTime = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      _ts: Date.now() - pageLoadTime.current, // milliseconds since page load
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        if (res.status === 429) {
          throw new Error("Too many submissions. Please try again later.");
        }
        throw new Error("Failed to send");
      }
      setDone(true);
    } catch (err: any) {
      setError(
        err.message === "Too many submissions. Please try again later."
          ? "You've submitted too many messages. Please wait 15 minutes and try again."
          : "Something went wrong. Please email us directly at info@nantonglinens.com."
      );
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <p className="mt-4 font-semibold text-gray-900">Message sent!</p>
        <p className="mt-1 text-sm text-gray-500">
          We'll get back to you within 24 hours.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm text-blue-800 hover:underline"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      {/* Honeypot — hidden from humans, filled by bots */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Name *
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Subject
        </label>
        <select
          name="subject"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none"
        >
          <option value="">General Inquiry</option>
          <option value="Product Question">Product Question</option>
          <option value="Sample Request">Sample Request</option>
          <option value="Order Status">Order Status</option>
          <option value="Become a Distributor">Become a Distributor</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Message *
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us what you need..."
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-800 outline-none resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 disabled:opacity-50 transition-colors"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
