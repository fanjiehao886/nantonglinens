#!/usr/bin/env python3
"""
Generate a styled PDF lead magnet from the "How to Buy Hotel Linens from China" guide.
Uses pdfkit-py pdf_create command for PDF generation.
"""
import json
import os
import sys

# The Sanity blog content
BLOG_CONTENT = {
  "title": "How to Buy Hotel Linens from China: The Complete 2026 Procurement Guide",
  "excerpt": "A step-by-step procurement guide for hotel buyers sourcing bed sheets, towels, and bath linens from China. Covers MOQ, pricing, shipping, and quality control — based on insider experience in the Dieshiqiao textile market.",
  "blocks": [
    {"style": "normal", "text": "If you're responsible for procuring hotel linens — whether for a 50-room boutique hotel or a 500-room chain property — sourcing from China is almost certainly on your radar. The numbers are compelling: cost savings of 30% to 60% compared to domestic suppliers, access to the world's largest textile manufacturing cluster, and lead times that rival or beat local alternatives."},
    {"style": "normal", "text": "But navigating the Chinese textile supply chain as a first-time buyer can be daunting. This guide walks you through every step — from defining your specifications to receiving your shipment — based on boots-on-the-ground experience in Dieshiqiao, Nantong, the global epicenter of hotel linen production."},
    {"style": "h2", "text": "Step 1: Define Your Specifications Before Contacting Suppliers"},
    {"style": "normal", "text": "The single biggest mistake we see buyers make: sending vague inquiries like 'I need hotel bed sheets, please quote.' Suppliers receive hundreds of these daily and will either ignore them or quote wildly different products."},
    {"style": "normal", "text": "Before contacting anyone, nail down these specifications:"},
    {"style": "table", "text": "Spec : What to Define : Example\nFiber Composition : 100% cotton, poly-cotton blend, bamboo, etc. : 100% combed cotton\nThread Count (Sheets) : 200TC to 1200TC; 300-400 is the hotel sweet spot : 300TC percale\nGSM (Towels) : 300 GSM (budget) to 700 GSM (luxury) : 550 GSM zero-twist\nWeave Type : Percale, sateen, jacquard, waffle : Percale\nSizes : Twin, Full, Queen, King + depth : King 78x80+16 inch\nColor / Finish : White, ivory, custom dye; mercerized, peach finish : White, mercerized\nPackaging : Individual polybag, bulk, retail-ready : Individual polybag"},
    {"style": "normal", "text": "Having these specs written down before you send a single inquiry will immediately signal to suppliers that you are a serious buyer — and will give you comparable quotes across factories."},
    {"style": "h2", "text": "Step 2: Understand Minimum Order Quantities (MOQ)"},
    {"style": "normal", "text": "MOQ is the most common friction point for first-time buyers. Here's what to expect:"},
    {"style": "bullets", "text": "Bed sheets: Most factories require 200-500 sets per size per color. Some will accept 100 sets with a small surcharge (5-10%).\nTowels: 500-1000 pieces per type is standard. Bath towels, hand towels, and washcloths often count as separate MOQs.\nDuvet covers & pillowcases: Similar to sheets — 200-500 sets per size."},
    {"style": "normal", "text": "Smaller factories or those in Dieshiqiao's wholesale corridors may accept lower MOQs (50-100 sets) but at higher per-unit prices. The tradeoff between MOQ and unit price is where a sourcing agent adds real value — knowing which factories are flexible and which aren't."},
    {"style": "h2", "text": "Step 3: Request and Compare Quotes"},
    {"style": "normal", "text": "When requesting quotes, send the same specification document to 3-5 factories. Key items to compare:"},
    {"style": "numbered", "text": "Unit price (in USD, FOB Shanghai or Ningbo unless DDP is specified)\nPayment terms (30% deposit / 70% before shipment is standard; L/C at sight for larger orders)\nSample policy (free pre-production sample vs. paid; who covers courier)\nLead time (typically 25-45 days after sample approval)\nPackaging included vs. extra charge"},
    {"style": "normal", "text": "A quote that is significantly lower than others usually means lower-grade fabric, lighter GSM, or thinner packaging — not a better deal."},
    {"style": "h2", "text": "Step 4: Sample Before You Commit"},
    {"style": "normal", "text": "Never, ever place a production order without approving a physical sample. Here's the typical sampling workflow:"},
    {"style": "bullets", "text": "Pre-production sample (PPS): Factory produces 1-2 pieces to your spec. Cost: $30-80 + courier ($30-50 via DHL/FedEx). Timeline: 7-10 days.\nLab dip (colored items): If you need custom colors, request lab dips before PPS. Timeline: 5-7 days.\nShipping sample: A few pieces pulled from the actual production run. Optional but recommended for first orders."},
    {"style": "normal", "text": "Keep the approved PPS. It's your legal reference if the bulk order doesn't match."},
    {"style": "h2", "text": "Step 5: Quality Control — The Non-Negotiable Step"},
    {"style": "normal", "text": "This is where most buyers who go direct lose money. You need eyes on the ground. The standard 3-stage QC process:"},
    {"style": "bullets", "text": "Pre-production inspection: Verify raw materials, fabric rolls, dye lots before cutting. Catch problems at the cheapest stage.\nIn-production inspection (DPI): Random check when 20-30% of the order is produced. Check stitching, sizing, color consistency, and fabric feel against your PPS.\nPre-shipment inspection (PSI): Final random sampling when 80-100% is packed. AQL 2.5 (major defects) / AQL 4.0 (minor defects) is the industry standard for hotel linens."},
    {"style": "normal", "text": "A detailed QC report with photos and measurements should be standard. If your supplier can't or won't provide this, find another supplier."},
    {"style": "h2", "text": "Step 6: Shipping and Logistics"},
    {"style": "normal", "text": "Two primary options for international buyers:"},
    {"style": "bullets", "text": "FOB (Free on Board): You pay the factory for goods + domestic transport to port. You arrange ocean freight and insurance. Cheaper but more work.\nDDP (Delivered Duty Paid): The supplier handles everything door-to-door, including customs clearance and duties. More expensive but zero hassle. Recommended for first-time buyers."},
    {"style": "normal", "text": "Ocean freight from Shanghai/Ningbo: 25-35 days to US West Coast, 35-45 days to Europe, 15-20 days to Middle East. Air freight: 5-7 days but 4-6x the cost — only for urgent small orders."},
    {"style": "h2", "text": "What to Budget"},
    {"style": "normal", "text": "As of mid-2026, here are approximate FOB price ranges for mid-range hotel quality (not luxury, not budget):"},
    {"style": "table", "text": "Product : Spec : FOB Price Range (per set/pc)\nBed Sheet Set (flat+fitted+2 pillowcases) : 300TC cotton percale, King : $8.50 - $14.00\nDuvet Cover : 300TC cotton sateen, King : $10.00 - $16.00\nBath Towel : 550 GSM zero-twist, 70x140cm : $3.50 - $6.00\nHand Towel : 550 GSM, 40x70cm : $1.80 - $3.00\nBathrobe : 450 GSM waffle, unisex : $8.00 - $15.00"},
    {"style": "normal", "text": "Add approximately 15-25% for freight, insurance, and customs clearance to get your landed cost."},
    {"style": "h2", "text": "Need Someone on the Ground?"},
    {"style": "normal", "text": "We live and work in Dieshiqiao every day. We handle sampling, negotiate with factories, run QC inspections, and manage logistics — so you get factory-direct pricing with professional oversight."},
    {"style": "normal", "text": "Visit nantonglinens.com for more guides and to request a custom quote."},
    {"style": "divider", "text": ""},
    {"style": "callout", "text": "About Nantong Linens: We are a hotel linen sourcing agent based in the Dieshiqiao textile market, Nantong, China. We help hotel buyers worldwide find the right suppliers, negotiate pricing, inspect quality, and manage logistics — without the risk of going factory-direct alone."},
  ]
}

def build_elements():
    """Convert blog content blocks to pdf_create elements."""
    elements = []
    
    # Cover page
    elements.append({"type": "spacer", "height": 80})
    elements.append({
        "type": "heading",
        "text": "Nantong Linens",
        "font_size": 14,
        "align": "center",
        "color": "#1e40af"
    })
    elements.append({"type": "spacer", "height": 40})
    elements.append({
        "type": "heading",
        "text": BLOG_CONTENT["title"],
        "font_size": 26,
        "align": "center",
        "bold": True,
        "color": "#111827"
    })
    elements.append({"type": "spacer", "height": 16})
    elements.append({
        "type": "paragraph",
        "text": "The Complete 2026 Procurement Guide for Hotel Buyers",
        "font_size": 14,
        "align": "center",
        "color": "#6b7280"
    })
    elements.append({"type": "spacer", "height": 30})
    elements.append({
        "type": "paragraph",
        "text": BLOG_CONTENT["excerpt"],
        "font_size": 12,
        "align": "center",
        "color": "#4b5563",
        "italic": True
    })
    elements.append({"type": "spacer", "height": 40})
    elements.append({
        "type": "paragraph",
        "text": "nantonglinens.com | June 2026",
        "font_size": 11,
        "align": "center",
        "color": "#9ca3af"
    })
    elements.append({"type": "page_break"})
    
    # Table of Contents
    elements.append({
        "type": "heading",
        "text": "Table of Contents",
        "font_size": 18,
        "color": "#1e40af"
    })
    elements.append({"type": "spacer", "height": 12})
    toc_items = [
        "Step 1: Define Your Specifications Before Contacting Suppliers",
        "Step 2: Understand Minimum Order Quantities (MOQ)",
        "Step 3: Request and Compare Quotes",
        "Step 4: Sample Before You Commit",
        "Step 5: Quality Control — The Non-Negotiable Step",
        "Step 6: Shipping and Logistics",
        "What to Budget",
        "Need Someone on the Ground?"
    ]
    for item in toc_items:
        elements.append({
            "type": "paragraph",
            "text": f"  {item}",
            "font_size": 12,
            "color": "#374151"
        })
        elements.append({"type": "spacer", "height": 4})
    
    elements.append({"type": "page_break"})
    
    # Content blocks
    for i, block in enumerate(BLOG_CONTENT["blocks"]):
        style = block["style"]
        text = block["text"]
        
        if style == "h2":
            if i > 0:
                elements.append({"type": "spacer", "height": 16})
            elements.append({
                "type": "heading",
                "text": text,
                "font_size": 16,
                "color": "#1e40af"
            })
            elements.append({"type": "spacer", "height": 8})
        
        elif style == "normal":
            elements.append({
                "type": "paragraph",
                "text": text,
                "font_size": 11,
                "color": "#374151",
                "line_height": 1.6
            })
            elements.append({"type": "spacer", "height": 8})
        
        elif style == "bullets":
            for line in text.split("\n"):
                elements.append({
                    "type": "paragraph",
                    "text": f"  •  {line.strip()}",
                    "font_size": 11,
                    "color": "#374151",
                    "line_height": 1.6
                })
                elements.append({"type": "spacer", "height": 4})
        
        elif style == "numbered":
            for idx, line in enumerate(text.split("\n"), 1):
                elements.append({
                    "type": "paragraph",
                    "text": f"  {idx}.  {line.strip()}",
                    "font_size": 11,
                    "color": "#374151",
                    "line_height": 1.6
                })
                elements.append({"type": "spacer", "height": 4})
        
        elif style == "table":
            lines = text.split("\n")
            # Header row
            headers = lines[0].split(":")
            elements.append({
                "type": "paragraph",
                "text": "  |  ".join(headers),
                "font_size": 11,
                "bold": True,
                "color": "#1e40af"
            })
            elements.append({
                "type": "paragraph",
                "text": "—" * 70,
                "font_size": 9,
                "color": "#d1d5db"
            })
            # Data rows
            for line in lines[1:]:
                cells = line.split(":")
                elements.append({
                    "type": "paragraph",
                    "text": "  |  ".join(cells),
                    "font_size": 10,
                    "color": "#374151"
                })
                elements.append({"type": "spacer", "height": 2})
            elements.append({"type": "spacer", "height": 8})
        
        elif style == "callout":
            elements.append({"type": "spacer", "height": 8})
            elements.append({
                "type": "paragraph",
                "text": text,
                "font_size": 10,
                "color": "#6b7280",
                "italic": True
            })
            elements.append({"type": "spacer", "height": 8})
        
        elif style == "divider":
            elements.append({
                "type": "paragraph",
                "text": "—" * 70,
                "font_size": 9,
                "color": "#d1d5db"
            })
    
    # Footer on last page
    elements.append({"type": "spacer", "height": 24})
    elements.append({
        "type": "paragraph",
        "text": "—" * 70,
        "font_size": 9,
        "color": "#d1d5db"
    })
    elements.append({"type": "spacer", "height": 8})
    elements.append({
        "type": "heading",
        "text": "Ready to Source Hotel Linens from China?",
        "font_size": 14,
        "color": "#1e40af"
    })
    elements.append({"type": "spacer", "height": 6})
    elements.append({
        "type": "paragraph",
        "text": "Contact us at info@nantonglinens.com or submit an RFQ at nantonglinens.com/rfq",
        "font_size": 11,
        "color": "#374151"
    })
    elements.append({"type": "spacer", "height": 4})
    elements.append({
        "type": "paragraph",
        "text": "WhatsApp: +86 15151361119",
        "font_size": 11,
        "color": "#374151"
    })
    elements.append({"type": "spacer", "height": 12})
    elements.append({
        "type": "paragraph",
        "text": "© 2026 Nantong Linens. This guide is for informational purposes only. Prices and lead times are estimates and subject to change.",
        "font_size": 9,
        "color": "#9ca3af"
    })
    
    return elements


if __name__ == "__main__":
    elements = build_elements()
    
    # Determine paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_dir = os.path.join(script_dir, "..", "public", "downloads")
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, "hotel-linen-buying-guide-2026.pdf")
    elements_path = os.path.join(output_dir, "elements.json")
    
    # Save elements JSON for pdf_create
    with open(elements_path, "w", encoding="utf-8") as f:
        json.dump(elements, f, ensure_ascii=False, indent=2)
    
    print(f"Elements written to: {elements_path}")
    print(f"Total elements: {len(elements)}")
    print(f"Output PDF will be: {output_path}")
    print("SUCCESS")
