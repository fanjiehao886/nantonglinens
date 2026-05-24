/**
 * Contact form API route
 *
 * Deployed as a serverless function (Node.js) on Vercel / Edge.
 * Sends email via Resend (https://resend.com) — free for 3,000 emails/mo.
 *
 * Env vars required:
 *   RESEND_API_KEY  — your Resend API key
 *   CONTACT_TO_EMALL — recipient email (e.g. fanjieboy@gmail.com)
 *
 * If Resend is not configured, the route logs the submission and returns 200
 * so the form still feels "submitted" in development.
 */
import { type NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMALL = process.env.CONTACT_TO_EMALL || "fanjieboy@gmail.com";

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();

    const { name, email, subject, message } = body;

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
          to: [TO_EMALL],
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
