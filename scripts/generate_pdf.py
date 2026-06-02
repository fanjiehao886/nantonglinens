#!/usr/bin/env python3
"""Generate the Hotel Linen Buying Guide PDF using fpdf2."""

import os
import json
import textwrap
from fpdf import FPDF

OUTPUT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "downloads", "hotel-linen-buying-guide-2026.pdf")

# Brand colors
PRIMARY = (30, 64, 175)       # #1e40af blue
DARK = (17, 24, 39)           # #111827
BODY = (55, 65, 81)           # #374151
MUTED = (107, 114, 128)       # #6b7280
LIGHT_GRAY = (209, 213, 219)  # #d1d5db
LIGHTER = (156, 163, 175)     # #9ca3af
WHITE = (255, 255, 255)

TITLE = "How to Buy Hotel Linens from China: The Complete 2026 Procurement Guide"
SUBTITLE = "The Complete 2026 Procurement Guide for Hotel Buyers"
EXCERPT = "A step-by-step procurement guide for hotel buyers sourcing bed sheets, towels, and bath linens from China. Covers MOQ, pricing, shipping, and quality control  --  based on insider experience in the Dieshiqiao textile market."


class GuidePDF(FPDF):
    def __init__(self):
        super().__init__("P", "mm", "A4")
        self.set_auto_page_break(True, 20)
        # Use built-in Helvetica for English text
        self.add_page()

    def header(self):
        if self.page_no() > 1:
            self.set_font("Helvetica", "I", 7)
            self.set_text_color(*LIGHTER)
            self.cell(0, 4, "Nantong Linens  --  Hotel Linen Buying Guide 2026", align="L")
            self.ln(6)
            # Thin line
            self.set_draw_color(*LIGHT_GRAY)
            self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
            self.ln(4)

    def footer(self):
        if self.page_no() == 1:
            return
        self.set_y(-15)
        self.set_font("Helvetica", "I", 7)
        self.set_text_color(*LIGHTER)
        self.cell(0, 10, f"nantonglinens.com  |  Page {self.page_no() - 1}", align="C")

    def cover_page(self):
        self.ln(30)
        # Brand
        self.set_font("Helvetica", "B", 14)
        self.set_text_color(*PRIMARY)
        self.cell(0, 10, "Nantong Linens", align="C")
        self.ln(24)

        # Title
        self.set_font("Helvetica", "B", 22)
        self.set_text_color(*DARK)
        self.multi_cell(0, 10, TITLE, align="C")
        self.ln(6)

        # Subtitle
        self.set_font("Helvetica", "", 12)
        self.set_text_color(*MUTED)
        self.cell(0, 8, SUBTITLE, align="C")
        self.ln(16)

        # Excerpt
        self.set_font("Helvetica", "I", 10)
        self.set_text_color(*BODY)
        self.multi_cell(0, 6, EXCERPT, align="C")
        self.ln(14)

        # Date
        self.set_font("Helvetica", "", 10)
        self.set_text_color(*LIGHTER)
        self.cell(0, 8, "nantonglinens.com  |  June 2026", align="C")

    def toc_page(self):
        self.add_page()
        self.set_font("Helvetica", "B", 16)
        self.set_text_color(*PRIMARY)
        self.cell(0, 10, "Table of Contents")
        self.ln(14)

        toc = [
            "Step 1: Define Your Specifications Before Contacting Suppliers",
            "Step 2: Understand Minimum Order Quantities (MOQ)",
            "Step 3: Request and Compare Quotes",
            "Step 4: Sample Before You Commit",
            "Step 5: Quality Control  --  The Non-Negotiable Step",
            "Step 6: Shipping and Logistics",
            "What to Budget",
            "Need Someone on the Ground?",
        ]
        self.set_font("Helvetica", "", 11)
        self.set_text_color(*BODY)
        for item in toc:
            self.cell(8, 8, "")
            self.cell(0, 8, item)
            self.ln(8)

    def h2(self, text):
        self.ln(6)
        self.set_font("Helvetica", "B", 14)
        self.set_text_color(*PRIMARY)
        self.multi_cell(0, 7, text)
        self.ln(4)

    def p(self, text):
        self.set_font("Helvetica", "", 10)
        self.set_text_color(*BODY)
        self.multi_cell(0, 5.5, text)
        self.ln(3)

    def bullet(self, text):
        self.set_font("Helvetica", "", 10)
        self.set_text_color(*BODY)
        x = self.get_x()
        self.cell(6, 5.5, "-")
        self.multi_cell(self.w - self.l_margin - self.r_margin - 6, 5.5, text)
        self.ln(1)

    def numbered(self, num, text):
        self.set_font("Helvetica", "", 10)
        self.set_text_color(*BODY)
        self.cell(6, 5.5, f"{num}.")
        self.multi_cell(self.w - self.l_margin - self.r_margin - 6, 5.5, text)
        self.ln(1)

    def table_header(self, cells):
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(*PRIMARY)
        w = (self.w - self.l_margin - self.r_margin) / len(cells)
        for cell in cells:
            self.cell(w, 6, cell.strip(), border=0)
        self.ln(6)

    def table_row(self, cells):
        self.set_font("Helvetica", "", 9)
        self.set_text_color(*BODY)
        w = (self.w - self.l_margin - self.r_margin) / len(cells)
        for cell in cells:
            self.cell(w, 5.5, cell.strip(), border=0)
        self.ln(5.5)

    def divider(self):
        self.ln(2)
        self.set_draw_color(*LIGHT_GRAY)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(4)

    def callout(self, text):
        self.ln(4)
        self.set_font("Helvetica", "I", 9)
        self.set_text_color(*MUTED)
        self.multi_cell(0, 5, text)
        self.ln(4)

    def spacer(self, h=4):
        self.ln(h)


def build_content(pdf):
    # Step 1
    pdf.h2("Step 1: Define Your Specifications Before Contacting Suppliers")
    pdf.p("The single biggest mistake we see buyers make: sending vague inquiries like 'I need hotel bed sheets, please quote.' Suppliers receive hundreds of these daily and will either ignore them or quote wildly different products.")
    pdf.p("Before contacting anyone, nail down these specifications:")

    pdf.table_header(["Specification", "What to Define", "Example"])
    pdf.table_row(["Fiber Composition", "100% cotton, poly-cotton blend, bamboo, etc.", "100% combed cotton"])
    pdf.table_row(["Thread Count (Sheets)", "200TC to 1200TC; 300-400 is hotel sweet spot", "300TC percale"])
    pdf.table_row(["GSM (Towels)", "300 GSM (budget) to 700 GSM (luxury)", "550 GSM zero-twist"])
    pdf.table_row(["Weave Type", "Percale, sateen, jacquard, waffle", "Percale"])
    pdf.table_row(["Sizes", "Twin, Full, Queen, King + depth", "King 78x80+16 inch"])
    pdf.table_row(["Color / Finish", "White, ivory, custom dye; mercerized", "White, mercerized"])
    pdf.table_row(["Packaging", "Individual polybag, bulk, retail-ready", "Individual polybag"])
    pdf.ln(2)

    pdf.p("Having these specs written down before you send a single inquiry will immediately signal to suppliers that you are a serious buyer  --  and will give you comparable quotes across factories.")

    # Step 2
    pdf.h2("Step 2: Understand Minimum Order Quantities (MOQ)")
    pdf.p("MOQ is the most common friction point for first-time buyers. Here's what to expect:")
    pdf.bullet("Bed sheets: Most factories require 200-500 sets per size per color. Some will accept 100 sets with a small surcharge (5-10%).")
    pdf.bullet("Towels: 500-1000 pieces per type is standard. Bath towels, hand towels, and washcloths often count as separate MOQs.")
    pdf.bullet("Duvet covers & pillowcases: Similar to sheets  --  200-500 sets per size.")
    pdf.p("Smaller factories or those in Dieshiqiao's wholesale corridors may accept lower MOQs (50-100 sets) but at higher per-unit prices. The tradeoff between MOQ and unit price is where a sourcing agent adds real value  --  knowing which factories are flexible and which aren't.")

    # Step 3
    pdf.h2("Step 3: Request and Compare Quotes")
    pdf.p("When requesting quotes, send the same specification document to 3-5 factories. Key items to compare:")
    pdf.numbered(1, "Unit price (in USD, FOB Shanghai or Ningbo unless DDP is specified)")
    pdf.numbered(2, "Payment terms (30% deposit / 70% before shipment is standard; L/C at sight for larger orders)")
    pdf.numbered(3, "Sample policy (free pre-production sample vs. paid; who covers courier)")
    pdf.numbered(4, "Lead time (typically 25-45 days after sample approval)")
    pdf.numbered(5, "Packaging included vs. extra charge")
    pdf.p("A quote that is significantly lower than others usually means lower-grade fabric, lighter GSM, or thinner packaging  --  not a better deal.")

    # Step 4
    pdf.h2("Step 4: Sample Before You Commit")
    pdf.p("Never, ever place a production order without approving a physical sample. Here's the typical sampling workflow:")
    pdf.bullet("Pre-production sample (PPS): Factory produces 1-2 pieces to your spec. Cost: $30-80 + courier ($30-50 via DHL/FedEx). Timeline: 7-10 days.")
    pdf.bullet("Lab dip (colored items): If you need custom colors, request lab dips before PPS. Timeline: 5-7 days.")
    pdf.bullet("Shipping sample: A few pieces pulled from the actual production run. Optional but recommended for first orders.")
    pdf.p("Keep the approved PPS. It's your legal reference if the bulk order doesn't match.")

    # Step 5
    pdf.h2("Step 5: Quality Control  --  The Non-Negotiable Step")
    pdf.p("This is where most buyers who go direct lose money. You need eyes on the ground. The standard 3-stage QC process:")
    pdf.bullet("Pre-production inspection: Verify raw materials, fabric rolls, dye lots before cutting. Catch problems at the cheapest stage.")
    pdf.bullet("In-production inspection (DPI): Random check when 20-30% of the order is produced. Check stitching, sizing, color consistency, and fabric feel against your PPS.")
    pdf.bullet("Pre-shipment inspection (PSI): Final random sampling when 80-100% is packed. AQL 2.5 (major defects) / AQL 4.0 (minor defects) is the industry standard for hotel linens.")
    pdf.p("A detailed QC report with photos and measurements should be standard. If your supplier can't or won't provide this, find another supplier.")

    # Step 6
    pdf.h2("Step 6: Shipping and Logistics")
    pdf.p("Two primary options for international buyers:")
    pdf.bullet("FOB (Free on Board): You pay the factory for goods + domestic transport to port. You arrange ocean freight and insurance. Cheaper but more work.")
    pdf.bullet("DDP (Delivered Duty Paid): The supplier handles everything door-to-door, including customs clearance and duties. More expensive but zero hassle. Recommended for first-time buyers.")
    pdf.p("Ocean freight from Shanghai/Ningbo: 25-35 days to US West Coast, 35-45 days to Europe, 15-20 days to Middle East. Air freight: 5-7 days but 4-6x the cost  --  only for urgent small orders.")

    # Budget
    pdf.h2("What to Budget")
    pdf.p("As of mid-2026, here are approximate FOB price ranges for mid-range hotel quality (not luxury, not budget):")
    pdf.table_header(["Product", "Specification", "FOB Price Range"])
    pdf.table_row(["Bed Sheet Set", "300TC cotton percale, King", "$8.50 - $14.00 / set"])
    pdf.table_row(["Duvet Cover", "300TC cotton sateen, King", "$10.00 - $16.00 / pc"])
    pdf.table_row(["Bath Towel", "550 GSM zero-twist, 70x140cm", "$3.50 - $6.00 / pc"])
    pdf.table_row(["Hand Towel", "550 GSM, 40x70cm", "$1.80 - $3.00 / pc"])
    pdf.table_row(["Bathrobe", "450 GSM waffle, unisex", "$8.00 - $15.00 / pc"])
    pdf.ln(2)
    pdf.p("Add approximately 15-25% for freight, insurance, and customs clearance to get your landed cost.")

    # Closing
    pdf.h2("Need Someone on the Ground?")
    pdf.p("We live and work in Dieshiqiao every day. We handle sampling, negotiate with factories, run QC inspections, and manage logistics  --  so you get factory-direct pricing with professional oversight.")

    pdf.divider()

    pdf.set_font("Helvetica", "B", 12)
    pdf.set_text_color(*PRIMARY)
    pdf.cell(0, 8, "Ready to Source Hotel Linens from China?")
    pdf.ln(10)
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(*BODY)
    pdf.cell(0, 6, "Email: info@nantonglinens.com")
    pdf.ln(6)
    pdf.cell(0, 6, "RFQ: nantonglinens.com/rfq")
    pdf.ln(6)
    pdf.cell(0, 6, "WhatsApp: +86 15151361119")
    pdf.ln(10)

    pdf.callout("About Nantong Linens: We are a hotel linen sourcing agent based in the Dieshiqiao textile market, Nantong, China. We help hotel buyers worldwide find the right suppliers, negotiate pricing, inspect quality, and manage logistics  --  without the risk of going factory-direct alone.")

    pdf.divider()
    pdf.set_font("Helvetica", "I", 7)
    pdf.set_text_color(*LIGHTER)
    pdf.cell(0, 4, "This guide is for informational purposes only. Prices and lead times are estimates and subject to change.")
    pdf.ln(4)
    pdf.cell(0, 4, "(c) 2026 Nantong Linens. All rights reserved.")


def generate():
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)

    pdf = GuidePDF()
    pdf.set_left_margin(20)
    pdf.set_right_margin(20)

    # Cover
    pdf.cover_page()

    # TOC
    pdf.toc_page()

    # Content
    build_content(pdf)

    pdf.output(OUTPUT_PATH)
    file_size = os.path.getsize(OUTPUT_PATH)
    print(f"PDF generated: {OUTPUT_PATH}")
    print(f"File size: {file_size:,} bytes ({file_size/1024:.1f} KB)")

    # Also create a simple info JSON
    info = {
        "title": TITLE,
        "subtitle": SUBTITLE,
        "file": "hotel-linen-buying-guide-2026.pdf",
        "size_bytes": file_size,
        "size_kb": round(file_size / 1024, 1),
        "pages": pdf.page_no(),
    }
    info_path = os.path.join(os.path.dirname(OUTPUT_PATH), "guide-info.json")
    with open(info_path, "w") as f:
        json.dump(info, f, indent=2)
    print(f"Info saved: {info_path}")
    print("SUCCESS")


if __name__ == "__main__":
    generate()
