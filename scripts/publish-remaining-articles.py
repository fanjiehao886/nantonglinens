#!/usr/bin/env python3
"""Create missing categories and publish remaining 3 articles."""
import requests
import json
import sys
import uuid

SANITY_PROJECT = "nk89o1k8"
SANITY_DATASET = "production"
SANITY_TOKEN = "skvNBwO80b5504XlXsL672JbNZ9OHZgphWqpsmJpVzV9FxmFnLBbP6vQk2Fmm6G9WJ01wyEubu5OfmherI1Afoi31zHD2moE9FJFlEML0sRkN1L5PF2uGcPK2cEaGbTJOY2ojijctt58GxGtEYWgkfFf8Bm12wMI8BLuejwMHHAfRFGdUHcD"
API_BASE = f"https://{SANITY_PROJECT}.api.sanity.io/v2024-01-01"

# Categories to create
categories = [
    ("cat-fabric-encyclopedia", "Fabric Encyclopedia", "fabric-encyclopedia"),
    ("cat-qc-checklist", "QC Checklist", "qc-checklist"),
    ("cat-market-reports", "Market Reports", "market-reports"),
]

print("=== Creating missing categories ===")
for cat_id, cat_title, cat_slug in categories:
    # Verify it doesn't already exist
    check = requests.get(
        f"{API_BASE}/data/doc/{SANITY_DATASET}/{cat_id}",
        headers={"Authorization": f"Bearer {SANITY_TOKEN}"}
    )
    if check.status_code == 200:
        print(f"  SKIP: {cat_id} already exists")
        continue

    resp = requests.post(
        f"{API_BASE}/data/mutate/{SANITY_DATASET}",
        headers={"Authorization": f"Bearer {SANITY_TOKEN}", "Content-Type": "application/json"},
        json={"mutations": [{"createOrReplace": {
            "_id": cat_id,
            "_type": "category",
            "title": cat_title,
            "slug": {"_type": "slug", "current": cat_slug}
        }}]}
    )
    result = resp.json()
    if "transactionId" in result:
        print(f"  ✓ Created: {cat_id} ({cat_title})")
    else:
        print(f"  ✗ FAIL: {cat_id} — {json.dumps(result)}")
        sys.exit(1)

print()
print("=== Publishing remaining 3 articles ===")

def make_span(text, marks=None):
    span = {"_type": "span", "text": text}
    if marks:
        span["marks"] = marks
    return span

def h2(text):
    return {"style": "h2", "_type": "block", "markDefs": [], "children": [make_span(text)]}

def h3(text):
    return {"style": "h3", "_type": "block", "markDefs": [], "children": [make_span(text)]}

def p(text):
    return {"style": "normal", "_type": "block", "markDefs": [], "children": [make_span(text)]}

def table_row(cells, bold=False):
    children = []
    for i, cell in enumerate(cells):
        children.append(make_span(cell, ["strong"] if bold else []))
        if i < len(cells) - 1:
            children.append(make_span("  |  "))
    return {"style": "normal", "_type": "block", "markDefs": [], "children": children}

# Article 2: Fabric Encyclopedia
article2 = {
    "slug": "hotel-linen-fabric-guide-gsm-thread-count-weave-types",
    "title": "Hotel Linen Fabric Guide: GSM, Thread Count & Weave Types Explained",
    "category_id": "cat-fabric-encyclopedia",
    "excerpt": "Everything hotel buyers need to know about GSM, thread count, weave types, and fiber choices. Understand the specs that determine quality and durability — so you buy the right fabric for your hotel tier.",
    "body": [
        p("Walk into any hotel procurement meeting and you'll hear three terms repeated: GSM, thread count, and weave type. These specifications define how your linens look, feel, wear, and wash — and getting them wrong means unhappy guests, high replacement rates, and wasted budget. This guide explains each specification in plain language, with practical recommendations for budget, mid-range, and luxury hotels."),
        h2("Thread Count: What It Actually Means"),
        p("Thread count (TC) is the number of threads woven into one square inch of fabric — counting both vertical (warp) and horizontal (weft) threads. A 300TC fabric has roughly 150 warp threads and 150 weft threads per square inch."),
        p("The sweet spot for hotel bed sheets is 300-400 TC. Here's why:"),
        h3("Below 200 TC"),
        p("Feels rough, less durable, visibly lower quality. Suitable only for ultra-budget motels or disposable-use scenarios."),
        h3("200-300 TC"),
        p("Entry-level hotel quality. Acceptable for 2-3 star properties. Use percale weave for a crisp feel or sateen for a softer hand."),
        h3("300-400 TC (Recommended)"),
        p("The hotel standard. 300TC percale gives that crisp, cool 'hotel sheet' feel guests love. 400TC sateen adds subtle sheen and extra softness for upscale properties. At this range, single-ply long-staple cotton makes a bigger difference than the TC number itself."),
        h3("400-600 TC"),
        p("Premium feel, noticeably softer. Good for 4-5 star hotels and luxury boutiques. Requires finer yarns (60s-80s count) and more careful laundering."),
        h3("Above 600 TC"),
        p("Most claims above 600TC use multi-ply yarns — twisting multiple threads together and counting each ply. A genuine 600TC+ single-ply sheet is rare, expensive, and not necessarily more comfortable. Focus on fiber quality over inflated numbers."),
        h2("GSM: The Towel Metric That Matters"),
        p("GSM (grams per square meter) measures fabric weight and density. For towels, GSM is the single most important quality indicator."),
        table_row(["GSM Range", "Feel & Purpose", "Best For"], True),
        table_row(["300-400 GSM", "Light, fast-drying, less absorbent", "Gym towels, pool towels, budget hotels"]),
        table_row(["400-500 GSM", "Mid-weight, good absorbency", "3-star hotels, guest bath towels"]),
        table_row(["500-600 GSM", "Plush, highly absorbent, substantial feel", "4-star hotels, boutique properties"]),
        table_row(["600-700 GSM", "Very plush, spa-grade, slow-drying", "5-star hotels, luxury spas, resorts"]),
        table_row(["700+ GSM", "Maximum density, heavy, very slow-drying", "Ultra-luxury — high laundering cost"]),
        p("Important: GSM is measured before washing. Expect 5-8% weight loss after the first wash. For most hotels, 500-550 GSM is the practical sweet spot — plush enough to feel premium, light enough to dry efficiently."),
        h2("Weave Types: Percale vs. Sateen"),
        h3("Percale Weave"),
        p("One-over-one-under grid pattern. Crisp, cool, matte finish, breathable, holds up well to industrial laundering. The classic 'hotel sheet' feel. Recommended for all hotel tiers, especially in warm climates."),
        h3("Sateen Weave"),
        p("Four-over-one-under pattern. Silky, smooth, subtle sheen, slightly warmer than percale. More prone to pilling. Recommended for 4-5 star properties and cooler climates."),
        h3("Waffle / Honeycomb"),
        p("Textured grid creating air pockets. Highly absorbent, lightweight, distinctive look. Primarily for bathrobes and spa towels across all hotel tiers."),
        h3("Jacquard Weave"),
        p("Patterns woven directly into the fabric — not printed. Elegant, decorative, durable. Higher cost. Best for decorative top sheets, pillow shams, and table linens in premium properties."),
        h2("Fiber Types: Cotton and Beyond"),
        h3("Standard vs. Combed Cotton"),
        p("Combed cotton: short fibers removed, leaving longer, smoother fibers. Result: less pilling, softer hand, about 10-20% price premium over standard cotton. Worth it for guest-facing linens."),
        h3("Egyptian / Supima Cotton"),
        p("Long-staple cotton (32-38mm fiber length). Exceptionally soft, durable, lustrous. Price premium: 30-60%. Verify with fiber content test reports — mislabeling is common in the market."),
        h3("Poly-Cotton Blends"),
        p("Typically 65/35 or 50/50. Wrinkle-resistant, cheaper, faster-drying, longer-lasting. Less breathable, can feel synthetic. Best for budget hotels, pillow protectors, and mattress pads."),
        h3("TENCEL / Lyocell / Bamboo"),
        p("Botanical fibers with growing hotel demand. Silky feel, moisture-wicking, eco-credential. 30-50% premium over cotton. Best for eco-conscious luxury properties."),
        h2("Quick Selection Matrix"),
        table_row(["Hotel Tier", "Sheets", "Towels", "Bathrobes"], True),
        table_row(["Budget / 2-3★", "200-300TC percale, poly-cotton", "350-450 GSM", "350 GSM waffle"]),
        table_row(["Mid-Range / 3-4★", "300-400TC percale, combed cotton", "450-550 GSM", "400 GSM waffle/terry"]),
        table_row(["Upscale / 4-5★", "400-600TC percale/sateen, long-staple", "550-650 GSM zero-twist", "450 GSM plush terry"]),
        table_row(["Luxury / 5★+", "400-600TC single-ply, Egyptian/Supima", "600-700 GSM", "500 GSM organic terry"]),
        p("Remember: fiber quality beats thread count every time. A 300TC long-staple combed cotton sheet outperforms a 600TC short-staple sheet in comfort, durability, and guest satisfaction."),
    ]
}

# Article 3: QC Checklist
article3 = {
    "slug": "hotel-linen-quality-control-checklist-pre-shipment-inspection",
    "title": "Hotel Linen Quality Control Checklist: What to Inspect Before Shipment",
    "category_id": "cat-qc-checklist",
    "excerpt": "A practical QC checklist for hotel linen buyers. Covers the 3-stage inspection process, AQL standards, common defects, and what a proper QC report should include — based on real factory inspection experience.",
    "body": [
        p("You've negotiated the price, approved the sample, and your order is in production. Now comes the step that separates professional buyers from amateurs: quality control. Without proper QC, you'll discover problems when your shipment arrives — and by then, the factory has been paid and your guests are waiting."),
        h2("The 3-Stage QC Process"),
        p("Professional buyers use a three-stage inspection. Each catches different problems at the point where they're cheapest to fix."),
        h3("Stage 1: Pre-Production Inspection (PPI)"),
        p("Timing: Before cutting begins. What to check:"),
        p("☐ Raw fabric — verify GSM with fabric cutter and scale. Tolerance: ±5% of spec."),
        p("☐ Fiber composition — request test certificate (OEKO-TEX, SGS, or Intertek)."),
        p("☐ Color matching — check dye lot against approved lab dip. D65 lighting. Delta E < 1.0."),
        p("☐ Colorfastness — minimum grade 4 for washing, 3-4 for rubbing."),
        p("☐ Shrinkage — pre-shrunk fabric. Max 3-5% for cotton, < 2% for poly-cotton."),
        p("☐ Thread quality — consistent thickness, no broken filaments, correct twist."),
        p("Red flag: If the factory won't show raw materials or test certificates, stop. Do not proceed."),
        h3("Stage 2: In-Production Inspection (DPI)"),
        p("Timing: When 20-30% of production is complete."),
        p("☐ Stitching — seam strength, 8-12 stitches per inch, no skipped stitches."),
        p("☐ Dimensions — random measurement against spec. Tolerance: ±2%."),
        p("☐ Hemming — even width, no twisting, clean corners."),
        p("☐ Edge finishing — no fraying or loose threads."),
        p("☐ GSM of finished product — random sampling. Must match approved PPS."),
        p("☐ Color consistency — no visible shade variation between pieces."),
        p("☐ Labels — care/size/brand labels correctly placed, correct information."),
        p("At this stage, you're looking for systemic problems — issues affecting the entire batch."),
        h3("Stage 3: Pre-Shipment Inspection (PSI)"),
        p("Timing: When 80-100% is produced and packed. Your final checkpoint."),
        h3("AQL Sampling Table"),
        table_row(["Order Qty", "Sample Size (AQL 2.5)", "Max Major Defects", "Max Minor Defects"], True),
        table_row(["91-150 pcs", "20 pcs", "1", "2"]),
        table_row(["151-280 pcs", "32 pcs", "2", "3"]),
        table_row(["281-500 pcs", "50 pcs", "3", "5"]),
        table_row(["501-1200 pcs", "80 pcs", "5", "7"]),
        table_row(["1201-3200 pcs", "125 pcs", "7", "10"]),
        p("Major defects: holes, stains, severe size deviation, missing labels, broken stitching. Minor defects: slight color variation, minor thread ends, light creasing."),
        h3("Full PSI Checklist"),
        p("☐ Visual inspection on table, adequate lighting (750-1000 lux). Both sides."),
        p("☐ Fabric defects — holes, snags, stains, oil spots, slubs, yarn irregularities."),
        p("☐ Stitching defects — skipped stitches, broken seams, loose threads, uneven hems."),
        p("☐ Size measurement — metal tape against spec. Multiple samples checked."),
        p("☐ GSM verification — industrial cutter + calibrated digital scale."),
        p("☐ Color verification — against approved PPS under D65 light."),
        p("☐ Labels — correct info, placement, language."),
        p("☐ Packaging — correct polybag, correct folding, correct carton marking."),
        p("☐ Quantity — count cartons, verify packing list."),
        p("☐ Photo documentation — all defects, inspection process, representative samples."),
        h2("Common Defects to Watch"),
        table_row(["Defect", "Description", "Severity"], True),
        table_row(["Shading", "Different dye lots mixed; visible color difference", "Major"]),
        table_row(["Slubs", "Irregular thick sections in yarn", "Minor-Major"]),
        table_row(["Holes / Tears", "Any hole in fabric", "Critical — reject"]),
        table_row(["Stains / Oil spots", "Machine oil or handling marks", "Major — unacceptable for white linen"]),
        table_row(["Size deviation >3%", "Significantly off-spec", "Major"]),
        table_row(["GSM underweight >5%", "Towel lighter than specified", "Major"]),
        table_row(["Skipped stitches", "Gaps in stitching on hems", "Major"]),
        table_row(["Twisted hem", "Hem doesn't lay flat", "Minor-Major"]),
        table_row(["Loose threads", "Thread ends >1cm", "Minor"]),
        h2("What a Professional QC Report Includes"),
        p("1. Date, time, factory name and address"),
        p("2. Inspector name and contact"),
        p("3. Order reference and product description"),
        p("4. AQL sampling plan (level, sample size, lot size)"),
        p("5. Inspection results with defect classification and count"),
        p("6. Measurement table (spec vs. actual)"),
        p("7. GSM test results with photos of the process"),
        p("8. Photos of every defect found (with ruler for scale)"),
        p("9. Overall pass/fail result with actionable recommendations"),
        p("A report that says 'all good' with two blurry photos is not QC. Demand detail."),
        h2("What If Inspection Fails?"),
        p("Option A — 100% re-inspection: Factory sorts, removes defects, re-presents. +3-7 days."),
        p("Option B — Rework: Factory repairs correctable defects. +5-10 days."),
        p("Option C — Discount: Accept with negotiated 5-15% reduction. Only for cosmetic issues."),
        p("Option D — Reject: Cancel. Last resort. Contract should specify rejection terms."),
        p("Never pay full balance before passing PSI. Standard terms: 30% deposit, 70% after passing inspection."),
    ]
}

# Article 4: Market Report
article4 = {
    "slug": "china-hotel-linen-market-report-pricing-trends-2026",
    "title": "China Hotel Linen Market Report: Pricing Trends & Cotton Outlook (Mid-2026)",
    "category_id": "cat-market-reports",
    "excerpt": "A mid-2026 pricing snapshot for hotel linens sourced from China. Covers cotton futures, current FOB price ranges, ocean freight rates, and procurement strategy recommendations based on Dieshiqiao market intelligence.",
    "body": [
        p("Hotel linen buyers planning their 2026 procurement have three variables to watch: cotton prices, factory capacity in Nantong, and ocean freight rates. Here's where they stand as of mid-2026."),
        h2("Cotton Market Overview"),
        p("Cotton futures on the Zhengzhou Commodity Exchange have traded between 13,500-15,000 RMB/tonne in H1 2026 — roughly stable compared to H1 2025. ICE Cotton #2 contract has ranged from 75-85 cents/lb."),
        p("China's domestic cotton production for 2025/26: estimated 6.1 million tonnes (+2% YoY), primarily from Xinjiang. Global stocks-to-use ratio is comfortable at ~72%, limiting upward price pressure."),
        p("Key for US buyers: the 25% Section 301 tariff on Chinese textiles remains in effect, making DDP pricing to US market approximately 30-35% above FOB. Non-US markets face no such tariff burden."),
        h2("Current FOB Price Ranges (Mid-2026)"),
        p("Benchmark FOB Shanghai/Ningbo prices for mid-range hotel quality:"),
        table_row(["Product", "Specification", "FOB Price (USD)"], True),
        table_row(["Flat Sheet", "300TC cotton percale, King", "$4.50 - $7.00/pc"]),
        table_row(["Fitted Sheet", "300TC cotton percale, King", "$4.00 - $6.50/pc"]),
        table_row(["Pillowcase (pair)", "300TC cotton percale, King", "$1.50 - $2.50/pair"]),
        table_row(["Duvet Cover", "300TC cotton sateen, King", "$10.00 - $16.00/pc"]),
        table_row(["Bath Towel", "550 GSM zero-twist, 70x140cm", "$3.50 - $6.00/pc"]),
        table_row(["Hand Towel", "550 GSM, 40x70cm", "$1.80 - $3.00/pc"]),
        table_row(["Washcloth", "550 GSM, 33x33cm", "$0.80 - $1.50/pc"]),
        table_row(["Bath Mat", "800 GSM, 50x80cm", "$2.50 - $4.50/pc"]),
        table_row(["Bathrobe", "450 GSM waffle, unisex", "$8.00 - $15.00/pc"]),
        table_row(["Tablecloth", "180 GSM poly-cotton, banquet", "$5.00 - $10.00/pc"]),
        p("Fabric costs stable; labor costs in Yangtze River Delta up ~5-7% YoY. Some factories absorbed via automation; others added 2-3% on labor-intensive items (bathrobes, jacquard)."),
        h2("Ocean Freight Rate Update"),
        table_row(["Route", "40HQ Container (Approx)"], True),
        table_row(["Shanghai → US West Coast", "$2,800 - $3,500"]),
        table_row(["Shanghai → US East Coast", "$4,000 - $5,000"]),
        table_row(["Shanghai → Rotterdam", "$2,500 - $3,200"]),
        table_row(["Shanghai → Jebel Ali (Dubai)", "$1,800 - $2,200"]),
        table_row(["Shanghai → Singapore/SE Asia", "$800 - $1,200"]),
        p("A 40HQ holds ~3,000-4,000 sheet sets or ~5,000-7,000 towels. Freight cost per sheet set: roughly $0.75-$1.00 to US West Coast."),
        h2("Factory Capacity & Lead Times"),
        p("Dieshiqiao factory utilization: approximately 75-85%, healthy capacity. Current lead times: 25-40 days from sample approval. Peak seasons: March-June and September-November (add 7-14 days)."),
        p("Chinese New Year 2027 falls late January. Place orders for pre-CNY delivery by late October 2026 at the latest."),
        h2("Procurement Strategy Recommendations"),
        p("1. Lock in Q3-Q4 2026 orders now. Cotton stable, freight predictable, capacity available."),
        p("2. Request both FOB and DDP quotes. US buyers: DDP may simplify tariff complexity. Non-US: FOB remains most cost-effective."),
        p("3. Build 10-15% timeline buffer. 25-day production can become 35 days; 30-day transit can become 40 days."),
        p("4. Diversify across 2-3 vetted factories. Single-sourcing is concentration risk."),
        p("5. Verify credentials: business license, export license, recent audit reports (BSCI/SEDEX)."),
        p("This report is based on daily pricing intelligence from the Dieshiqiao textile market. Prices vary by spec and volume. Contact us for a customized quote."),
    ]
}

def publish(article):
    slug = article["slug"]
    doc_id = f"seed-{slug}"
    
    # Check if exists
    check = requests.get(
        f"{API_BASE}/data/doc/{SANITY_DATASET}/{doc_id}",
        headers={"Authorization": f"Bearer {SANITY_TOKEN}"}
    )
    if check.status_code == 200:
        print(f"  SKIP: already exists")
        return False

    resp = requests.post(
        f"{API_BASE}/data/mutate/{SANITY_DATASET}",
        headers={"Authorization": f"Bearer {SANITY_TOKEN}", "Content-Type": "application/json"},
        json={"mutations": [{"create": {
            "_id": doc_id,
            "_type": "post",
            "title": article["title"],
            "slug": {"_type": "slug", "current": slug},
            "excerpt": article["excerpt"],
            "publishedAt": "2026-06-02T00:00:00Z",
            "categories": [{"_type": "reference", "_ref": article["category_id"], "_key": str(uuid.uuid4())[:12]}],
            "author": {"_type": "reference", "_ref": "author-7745c84e"},
            "body": article["body"]
        }}]}
    )
    result = resp.json()
    if "transactionId" in result:
        print(f"  ✓ Published!")
        return True
    else:
        print(f"  ✗ Failed: {json.dumps(result)}")
        return False

for i, article in enumerate([article2, article3, article4], 2):
    print(f"\n[{i}/4] {article['title'][:70]}...")
    publish(article)

print("\nDone!")
