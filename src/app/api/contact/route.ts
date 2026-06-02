/**
 * Contact form API route
 *
 * Deployed as a serverless function (Node.js) on Vercel / Edge.
 * Sends email via Resend (https://resend.com) — free for 3,000 emails/mo.
 *
 * Env vars required:
 *   RESEND_API_KEY  — your Resend API key
 *   CONTACT_TO_EMALL — recipient email (e.g. info@nantonglinens.com)
 *
 * Rate limiting: 5 submissions per IP per 15 minutes.
 * Honeypot: rejects submissions where the hidden "website" field is filled.
 * Timestamp check: rejects submissions that arrive < 3 seconds after page load.
 */

import { type NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_TO_EMALL || "info@nantonglinens.com";

// In-memory rate limiter (resets on cold start, fine for serverless)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) return false;

  entry.count++;
  return true;
}

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // honeypot field
  _ts?: number; // client-side timestamp (milliseconds since pageload, NOT epoch)
}

export async function POST(request: NextRequest) {
  try {
    // --- Rate limiting ---
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body: ContactBody = await request.json();

    const { name, email, subject, message, website, _ts } = body;

    // --- Honeypot check ---
    if (website) {
      // Bot filled the hidden field — silently accept but don't send email
      return NextResponse.json({ success: true });
    }

    // --- Timestamp check (faster than 3 seconds = bot) ---
    if (_ts && _ts < 3000) {
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // If Resend is configured, send a real email
    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Nantong Linens <info@nantonglinens.com>",
          to: [TO_EMAIL],
          reply_to: email,
          subject: `[Contact] ${subject || "New message"} — ${name}`,
          html: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || "(none)"}</p>
            <hr/>
            <p>${message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>")}</p>
          `,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("Resend error:", err);
        // Don't fail — log and continue
      }
    } else {
      // Dev / no-Resend fallback: log to console
      console.log("[Contact Form]", { name, email, subject, message });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
