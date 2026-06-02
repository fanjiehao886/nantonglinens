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
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_TO_EMALL || "info@nantonglinens.com";

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
      // 1. Notification to us
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Nantong Linens <info@nantonglinens.com>",
          to: [TO_EMAIL],
          bcc: ["info@nantonglinens.com"],
          reply_to: email,
          subject: `[RFQ] ${productCategory} — ${company || name}`,
          html,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("Resend RFQ error:", err);
      }

      // 2. Confirmation email to the buyer
      const confirmHtml = `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
          <h2 style="color:#1e3a5f;">Thank you for your inquiry, ${name}!</h2>
          <p>We have received your RFQ for <strong>${productCategory}</strong> and will review it immediately.</p>
          <p><strong>What happens next:</strong></p>
          <ol>
            <li>We review your specifications and match them with suitable factories in Dieshiqiao.</li>
            <li>We prepare a detailed quote with pricing, MOQ, lead time, and shipping options.</li>
            <li>You typically receive our response within <strong>24 hours</strong> (often sooner).</li>
          </ol>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
          <p style="font-size:14px;color:#666;">While you wait, explore our free procurement guides:</p>
          <ul style="font-size:14px;">
            <li><a href="https://www.nantonglinens.com/blog?category=buying-guide" style="color:#1e3a5f;">Buying Guide — How to Source Hotel Linens from China</a></li>
            <li><a href="https://www.nantonglinens.com/blog?category=fabric-encyclopedia" style="color:#1e3a5f;">Fabric Encyclopedia — GSM, Thread Count & Weave Types</a></li>
            <li><a href="https://www.nantonglinens.com/blog?category=qc-checklist" style="color:#1e3a5f;">QC Checklist — Pre-Shipment Inspection Guide</a></li>
            <li><a href="https://www.nantonglinens.com/blog?category=market-reports" style="color:#1e3a5f;">Market Report — Pricing Trends & Cotton Outlook</a></li>
          </ul>
          <p style="font-size:14px;color:#666;">Questions? Reply to this email or message us on <a href="https://wa.me/8615151361119" style="color:#1e3a5f;">WhatsApp</a>.</p>
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
          subject: `We received your RFQ — ${productCategory} inquiry`,
          html: confirmHtml,
        }),
      });
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
