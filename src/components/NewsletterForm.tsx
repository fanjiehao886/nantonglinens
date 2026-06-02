"use client";

import { useState, useRef } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const pageLoadTime = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          _ts: Date.now() - pageLoadTime.current,
        }),
      });
      if (!res.ok) {
        if (res.status === 429) throw new Error("too_many");
        throw new Error("fail");
      }
      setStatus("success");
      setMessage("Subscribed! Check your inbox for our buying guide.");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(
        err.message === "too_many"
          ? "Too many attempts. Please try later."
          : "Something went wrong. Try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="text-sm text-green-600 font-medium py-1">
        {message}
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-600 leading-relaxed">
        Weekly sourcing tips, market trends, QC guides — free.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm focus:border-blue-800 outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-blue-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 disabled:opacity-50 transition-colors"
        >
          {status === "sending" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-500">{message}</p>
      )}
    </div>
  );
}
