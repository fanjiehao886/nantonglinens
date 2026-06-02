/**
 * Download Guide API — Lead Magnet
 *
 * Accepts an email address and sends the PDF procurement guide via Resend.
 * The PDF is served from /downloads/hotel-linen-buying-guide-2026.pdf
 *
 * Env vars required:
 *   RESEND_API_KEY — Resend API key
 */
import { type NextRequest, NextResponse } from "next/server";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const GUIDE_PATH = join(process.cwd(), "public", "downloads", "hotel-linen-buying-guide-2026.pdf");

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!existsSync(GUIDE_PATH)) {
      return NextResponse.json(
        { error: "Guide PDF not found. Please try again later." },
        { status: 500 }
      );
    }

    const pdfBuffer = readFileSync(GUIDE_PATH);
    const pdfBase64 = pdfBuffer.toString("base64");

    if (RESEND_API_KEY) {
      const html = `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
          <h2 style="color:#1e3a5f;">Your Hotel Linen Procurement Guide Is Here</h2>
          <p>Thank you for downloading our guide:</p>
          <p style="font-size:18px;font-weight:bold;color:#1e3a5f;">
            How to Buy Hotel Linens from China:<br/>The Complete 2026 Procurement Guide
          </p>
          <p>This guide covers everything you need to know:</p>
          <ul style="font-size:14px;">
            <li>Defining specifications that get accurate quotes</li>
            <li>Understanding MOQ and negotiating with factories</li>
            <li>Quality control — the 3-stage inspection process</li>
            <li>Shipping options, lead times, and budgeting</li>
          </ul>
          <p style="font-size:14px;color:#666;">
            The PDF is attached to this email. You can also find more free resources
            at <a href="https://www.nantonglinens.com/blog" style="color:#1e3a5f;">nantonglinens.com/blog</a>.
          </p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
          <p style="font-size:14px;color:#666;">
            Ready to source? Submit an RFQ at
            <a href="https://www.nantonglinens.com/rfq" style="color:#1e3a5f;">nantonglinens.com/rfq</a>
            or message us on
            <a href="https://wa.me/8615151361119" style="color:#1e3a5f;">WhatsApp</a>.
          </p>
          <p style="font-size:12px;color:#999;margin-top:24px;">
            Nantong Linens — Dieshiqiao, Nantong, China<br/>
            <a href="https://www.nantonglinens.com" style="color:#999;">www.nantonglinens.com</a>
          </p>
        </div>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Nantong Linens <info@nantonglinens.com>",
          to: [email],
          subject: "Your Hotel Linen Buying Guide (PDF Attached)",
          html,
          attachments: [
            {
              filename: "hotel-linen-buying-guide-2026.pdf",
              content: pdfBase64,
            },
          ],
        }),
      });

      // Also notify ourselves of a new lead
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Nantong Linens <info@nantonglinens.com>",
          to: [process.env.CONTACT_TO_EMAIL || process.env.CONTACT_TO_EMALL || "fanjieboy@gmail.com"],
          subject: `[Lead Magnet] New guide download from ${email}`,
          html: `<p>${email} downloaded the Hotel Linen Buying Guide PDF.</p>`,
        }),
      });
    } else {
      console.log("[Download Guide] No Resend key configured. Email:", email);
    }

    return NextResponse.json({
      success: true,
      message: "Guide sent! Check your inbox (and spam folder if you don't see it).",
    });
  } catch (err: any) {
    console.error("Download guide API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
