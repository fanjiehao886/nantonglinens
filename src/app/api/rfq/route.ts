/**
 * RFQ submission API route
 *
 * Accepts a full RFQ payload and sends an email via Resend.
 * Also logs the submission for follow-up.
 *
 * Env vars required:
 *   RESEND_API_KEY  — Resend API key
 *   CONTACT_TO_EMALL — recipient email
 */
import { type NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const TO_EMALL = process.env.CONTACT_TO_EMALL || "fanjieboy@gmail.com";

interface RFQBody {
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

export async function POST(request: NextRequest) {
  try {
    const body: RFQBody = await request.json();

    const {
      company,
      name,
      email,
      phone,
      country,
      productCategory,
      materialPreference,
      quantity,
      hotelTier,
      customizations,
      timeline,
      message,
    } = body;

    if (!name || !email || !productCategory) {
      return NextResponse.json(
        { error: "Name, email and product category are required." },
        { status: 400 }
      );
    }

    const html = `
      <h2>New RFQ Submission — Nantong Linens</h2>
      <table cellpadding="6" cellspacing="0" border="1" style="border-collapse:collapse;font-size:14px;">
        <tr><td><strong>Company</strong></td><td>${company || "—"}</td></tr>
        <tr><td><strong>Contact</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
        <tr><td><strong>Country</strong></td><td>${country || "—"}</td></tr>
        <tr><td><strong>Product Category</strong></td><td>${productCategory}</td></tr>
        <tr><td><strong>Material</strong></td><td>${materialPreference || "—"}</td></tr>
        <tr><td><strong>Quantity</strong></td><td>${quantity || "—"}</td></tr>
        <tr><td><strong>Property Type</strong></td><td>${hotelTier || "—"}</td></tr>
        <tr><td><strong>Customizations</strong></td><td>${customizations?.join(", ") || "None"}</td></tr>
        <tr><td><strong>Timeline</strong></td><td>${timeline || "—"}</td></tr>
      </table>
      ${message ? `<h3>Additional Notes</h3><p>${message.replace(/\n/g, "<br/>")}</p>` : ""}
      <p style="color:#666;font-size:12px;margin-top:20px;">
        Submitted from nantonglinens.com/rfq
      </p>
    `;

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
          bcc: ["fanjieboy@gmail.com"],
          reply_to: email,
          subject: `[RFQ] ${productCategory} — ${company || name}`,
          html,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("Resend RFQ error:", err);
      }
    } else {
      console.log("[RFQ]", body);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("RFQ API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
