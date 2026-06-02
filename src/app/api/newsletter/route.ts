/**
 * Newsletter subscription API route
 *
 * Accepts email subscription and sends welcome email via Resend.
 * Includes rate limiting and anti-spam timestamp check.
 */
import { type NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ADMIN_EMAIL = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_TO_EMALL || "fanjieboy@gmail.com";

// Rate limiter
const rateMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX = 3;

function checkRate(ip: string): boolean {
  const now = Date.now();
  const e = rateMap.get(ip);
  if (!e || now > e.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (e.count >= MAX) return false;
  e.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRate(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const { email, _ts } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Timestamp check — reject if submitted under 2 seconds
    if (_ts && _ts < 2000) {
      return NextResponse.json({ success: true }); // silently accept bot
    }

    if (RESEND_API_KEY) {
      // Welcome email to subscriber
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Nantong Linens <info@nantonglinens.com>",
          to: [email],
          subject: "Welcome to Nantong Linens — Your Free Buying Guide",
          html: `
            <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
              <h2 style="color:#1e3a5f;">Welcome to Nantong Linens!</h2>
              <p>Thanks for subscribing. You'll receive weekly sourcing tips, market trends, and expert guides for hotel linen procurement from China.</p>
              <p><strong>Your free resources:</strong></p>
              <ul>
                <li><a href="https://www.nantonglinens.com/guides/download" style="color:#1e3a5f;">Free PDF: Complete Hotel Linen Buying Guide</a></li>
                <li><a href="https://www.nantonglinens.com/blog" style="color:#1e3a5f;">Procurement Knowledge Hub</a></li>
              </ul>
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
              <p style="font-size:12px;color:#999;">
                Nantong Linens — Dieshiqiao, Nantong, China<br/>
                <a href="https://www.nantonglinens.com" style="color:#999;">www.nantonglinens.com</a>
              </p>
            </div>
          `,
        }),
      }).catch(() => {});

      // Notification to admin
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Nantong Linens <info@nantonglinens.com>",
          to: [ADMIN_EMAIL],
          subject: `[Newsletter] New subscriber: ${email}`,
          html: `<p>New newsletter signup: <strong>${email}</strong></p>`,
        }),
      }).catch(() => {});
    } else {
      console.log("[Newsletter]", email);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Newsletter API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
