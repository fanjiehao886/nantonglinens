"""Create blog posts, categories, and author in Sanity CMS."""
import json, os, sys, uuid, requests

TOKEN = os.environ.get("SANITY_TOKEN", "skJlnKsUiRegErbeTJ2iCy6fM8tv6gsrnC7kmVLPv0wfakib9coE9tnZkavUsuOrtn91bFcEFxBYdMVGldL09M9RnbhBwGO8md6y2BWKIhRt4MgRpzrggsPLuxh7bIZx1VQ5VVBSJ8AB9q1ww4ClolfvKQQf4oPi7O4Rklz5bvXnn6vL7r6e")
PROJECT_ID = "nk89o1k8"
DATASET = "production"
API = f"https://{PROJECT_ID}.api.sanity.io/v2024-01-01"
HEADERS = {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}

def create_mutation(mutations):
    r = requests.post(f"{API}/data/mutate/{DATASET}", headers=HEADERS, json={"mutations": mutations})
    r.raise_for_status()
    return r.json()

def create_doc(doc):
    r = requests.post(f"{API}/data/mutate/{DATASET}", headers=HEADERS,
        json={"mutations": [{"create": doc}]})
    r.raise_for_status()
    return r.json()

# ===== Step 1: Create Author =====
author_id = f"author-{uuid.uuid4().hex[:8]}"
print(f"Creating author: {author_id}")
create_mutation([
    {"create": {
        "_id": author_id,
        "_type": "author",
        "name": "Nantong Linens Editorial Team",
    }}
])
print("  Author created.")

# ===== Step 2: Create Categories =====
cats = {
    "buying-guide":     "Buying Guides",
    "hotel-bedding":    "Hotel Bedding",
    "textile-quality":  "Textile Quality",
    "hospitality-tips": "Hospitality Tips",
}
cat_ids = {}
for slug, title in cats.items():
    cid = f"cat-{slug}"
    cat_ids[cid] = title
    create_mutation([{"create": {
        "_id": cid,
        "_type": "category",
        "title": title,
        "slug": {"_type": "slug", "current": slug},
    }}])
    print(f"  Category: {title} ({cid})")

# ===== Step 3: Blog Posts =====
posts = [
    {
        "slug": "how-to-choose-hotel-linens-guide",
        "title": "How to Choose Hotel Linens: A Complete Guide for Hospitality Buyers",
        "excerpt": "Learn the key factors in selecting hotel bed sheets, towels, and bathrobes. Thread count, GSM, fiber types, and supplier vetting explained for hotel procurement teams.",
        "categories": ["cat-buying-guide", "cat-hotel-bedding"],
        "publishedAt": "2026-05-15T08:00:00Z",
        "body": [
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Selecting the right hotel linens is one of the most impactful procurement decisions a hospitality brand can make. Guest satisfaction surveys consistently rank bed comfort and towel quality among the top three factors influencing a positive review. Yet many hotel buyers approach linen sourcing with a narrow focus on price per piece — missing the total cost of ownership picture entirely."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "1. Know Your Guest Profile First"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Before comparing thread counts or GSM numbers, define who sleeps in your beds. A 3-star business hotel guest has different expectations than a 5-star resort honeymooner. Luxury properties demand sateen or Egyptian cotton with a silky hand feel. Budget hotels prioritize durability and bleach resistance over sheen. Boutique hotels often want something distinctive — perhaps colored borders or custom monograms. Map your guest profile first, then match the product specification."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "2. Thread Count vs. GSM: What Actually Matters"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Thread count (TC) measures threads per square inch of woven fabric. A 200-300 TC percale is crisp and breathable — ideal for hotel use because it launders well. Sateen at 400-600 TC delivers luxury sheen. But thread count above 600 in cotton is usually marketing fiction achieved by twisting multiple yarns."}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "For towels, GSM (grams per square meter) is the key number. Hotel bath towels range from 450 GSM (lightweight, fast drying) to 700 GSM (heavy, plush, spa-grade). 500-550 GSM is the sweet spot for most hotels: absorbent, durable, and cost-effective to launder. Pool towels work best at 350-400 GSM."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "3. Fiber and Weave Selection"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "100% Combed Cotton removes short fibers and impurities — the result is smoother, stronger yarn. Egyptian or Supima cotton adds premium cachet but at a price premium. 50/50 Poly-Cotton blends offer wrinkle resistance and lower cost, suitable for economy properties. Tencel (lyocell) is gaining traction for eco-conscious hotels with its silky feel and sustainable production."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "4. Certifications That Matter"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "OEKO-TEX Standard 100 certifies that every component is tested for harmful substances — this is the minimum bar for hotel textiles. ISO 9001 factory certification ensures consistent quality management. For eco-conscious hotels, GOTS (Global Organic Textile Standard) and BCI (Better Cotton Initiative) add credibility."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "5. Supplier Vetting Checklist"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "When sourcing from overseas manufacturers, always request: (1) third-party lab test reports for fiber content and colorfastness, (2) physical swatch samples before bulk orders, (3) clear MOQ and lead time commitments in writing, (4) reference clients in your region, and (5) a formal quality guarantee covering defects and shrinkage. A supplier who refuses any of these is a red flag."}]},
        ]
    },
    {
        "slug": "hotel-linen-laundry-care-guide",
        "title": "Hotel Linen Care: How to Maximize the Lifespan of Your Bed Sheets and Towels",
        "excerpt": "Practical laundry and storage tips to double the service life of hotel bed linens, towels, and bathrobes. Save thousands in replacement costs per property per year.",
        "categories": ["cat-hospitality-tips", "cat-hotel-bedding"],
        "publishedAt": "2026-05-10T08:00:00Z",
        "body": [
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Proper linen care is the single most cost-effective investment a hotel can make. A well-maintained bed sheet set should deliver 150-200 wash cycles in a commercial laundry setting. Poor care cuts that lifespan in half — doubling your annual linen budget. Here's how to get the most out of every piece."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "1. The Wash Cycle That Saves Money"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Water temperature matters more than detergent volume. White cotton sheets wash best at 60°C (140°F) — hot enough to sanitize, not so hot that fibers degrade prematurely. Lower temperatures (40°C) extend fabric life further but require oxygen-based bleach for sanitation. Overheating (above 75°C) causes cotton fibers to weaken and shrink."}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Key rule: never overload machines. Linens need room to agitate freely. A 50kg-capacity washer should hold no more than 40kg of sheets. Overloading creates friction damage and uneven cleaning."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "2. Drying: The Hidden Fiber Killer"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Over-drying is the primary cause of premature linen failure in hotels. When cotton sheets are dried past their natural moisture retention point (about 6-8% moisture), the fibers become brittle and tear. Commercial dryers should stop when linens are slightly damp — they will finish air-drying on the shelf. A moisture sensor system pays for itself in linen savings within six months."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "3. Bleach: Use Sparingly"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Chlorine bleach attacks cotton fiber structure with every use. After 20-30 bleach cycles, sheet tensile strength drops 40-50%. Switch to oxygen-based (hydrogen peroxide) bleach for routine whitening. Reserve chlorine bleach only for stain emergencies on otherwise-doomed items."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "4. Storage and Rotation"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Implement a strict PAR (periodic automatic replacement) system. Rotate three sets per bed: one on the bed, one in laundry, one on the shelf. This spreads wear evenly. Store linens in a cool, dry, dark environment — UV light and humidity degrade cotton over time. Elevate shelves 15cm off the floor to prevent moisture wicking."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "5. Know When to Retire"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Retire sheets when: edges fray beyond 1cm, fabric feels thin when held to light, or stains remain after two treatments. Retire towels when: edges unravel, pile becomes flat and non-absorbent, or bleaching leaves a permanent yellowish cast. A retirement log helps forecast replacement orders and budget planning."}]},
        ]
    },
    {
        "slug": "cotton-types-hotel-bedding-comparison",
        "title": "Cotton Types for Hotel Bedding: Egyptian, Combed, Organic, and Tencel Compared",
        "excerpt": "A practical comparison of cotton types used in hotel bed linens. Understand fiber length, durability, cost, and guest feel to make the right choice for your property tier.",
        "categories": ["cat-textile-quality", "cat-hotel-bedding"],
        "publishedAt": "2026-05-05T08:00:00Z",
        "body": [
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Not all cotton is created equal, and the differences matter enormously for hotel applications. Here is a practical breakdown of the main fiber types you will encounter when sourcing hotel bed linens — what they mean, what they cost, and which property tier they suit."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "1. 100% Combed Cotton (Recommended)"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Combing removes short fibers (<10mm) and impurities before spinning, leaving only the longest, strongest fibers. Result: smoother yarn, fewer pills, better dye uptake, and 30-50% fewer breaks during laundering. This is the workhorse of hotel bedding — perfect for 3-5 star properties. Price range: $4-8/pc for sheets from direct manufacturers. Our most common specification."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "2. Egyptian / Giza Cotton"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Grown in the Nile Delta, Egyptian cotton has extra-long staple fibers (35mm+). This produces exceptionally fine, strong yarns. True Egyptian cotton sheets have a silky luster and soften with every wash. However, beware: much of what is labeled Egyptian cotton on the market is blended with standard cotton. Always request fiber origin certification. Best for 5-star and luxury boutique properties. Cost: 30-50% premium over combed cotton."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "3. Organic Cotton (GOTS Certified)"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Grown without synthetic pesticides or fertilizers, processed without toxic chemicals. GOTS certification ensures the entire supply chain meets organic standards — from farm to finished product. The hand feel is comparable to conventional cotton. The value proposition is the sustainability story, which appeals strongly to eco-conscious guests (a growing segment). Ideal for eco-resorts and green-certified hotels. Price: 20-40% premium."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "4. Tencel / Lyocell"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Made from wood pulp (usually eucalyptus) via a closed-loop solvent process. Tencel is softer than cotton, more absorbent, and resists bacterial growth naturally — making it excellent for pillowcases and duvet covers. The environmental story is strong: 10-20x less water than cotton production. Drawbacks: higher cost ($10-18/pc) and requires gentler laundry handling. Growing fast in luxury and wellness hotels."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "5. Poly-Cotton Blends"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Commonly 50/50 or 65/35 polyester-cotton. The polyester adds wrinkle resistance, colorfastness, and cuts cost by 30-40%. The trade-off: polyester does not breathe as well (guests sleep warmer), feels less natural, and can develop static. Suitable for economy hotels and budget chains where durability and price trump luxury feel. Price: $2-4/pc."}]},
        ]
    },
    {
        "slug": "hotel-linen-moq-lead-time-explained",
        "title": "Hotel Linen MOQ and Lead Time: What to Expect When Sourcing from Chinese Manufacturers",
        "excerpt": "Understand minimum order quantities, production lead times, and shipping logistics when sourcing hotel linens from China. Real numbers from Nantong's textile hub.",
        "categories": ["cat-buying-guide", "cat-hospitality-tips"],
        "publishedAt": "2026-04-28T08:00:00Z",
        "body": [
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "If you are sourcing hotel linens from China for the first time, the numbers around MOQ and lead time can be confusing. Here is everything you need to know, explained by manufacturers working in Nantong — the world's largest textile production hub."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "What is a Realistic MOQ for Hotel Linens?"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Minimum Order Quantities vary by product type and customization level:"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Standard products (no customization): 100-200 pieces per size/color combination."}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Custom logo embroidery: 300-500 pieces per design, because setup (digitizing the logo, thread matching, machine programming) is the cost driver, not the stitching itself."}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Custom size or fabric: 500-1,000 pieces, as the factory needs to set up a dedicated production run. Pantone color matching adds 200-300 pieces to the minimum."}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Complete private label: 2,000+ pieces across all SKUs. This typically includes custom packaging, hang tags, and woven labels."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Lead Time: The Real Timeline"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "A typical hotel linen order follows this timeline:"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Day 1-3: Payment confirmation and production scheduling"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Day 3-5: Yarn dyeing (if custom colors)"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Day 5-12: Weaving and finishing"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Day 12-15: Cutting, sewing, embroidery"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Day 15-17: Quality inspection and packing"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Total: 15-20 days from payment to finished goods for a standard order. Rush orders (7-10 days) are possible at a 15-25% surcharge."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Shipping: FOB vs. DDP"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "FOB Nantong/Shanghai: You pay for goods + domestic transport to port. You arrange international shipping and handle customs clearance. This gives you control over the freight forwarder and shipping cost."}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "DDP (Delivered Duty Paid):The manufacturer handles everything from factory to your warehouse door. You pay one all-inclusive price. Shipping time: 25-35 days by sea to US/Europe. Air freight: 5-7 days at 4-6x the cost (only for urgent small orders)."}]},
            {"style": "h2", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Payment Terms"}]},
            {"style": "normal", "_type": "block", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Standard terms for new buyers: 30% T/T deposit with order, 70% against copy of shipping documents (B/L). Established relationships often move to 100% L/C at sight or net 30-60 days. Always use a contract that specifies: exact product specifications, quality standards, inspection rights, delivery window, and penalty clauses for late delivery."}]},
        ]
    },
]

# Write posts
for post in posts:
    pid = f"post-{post['slug'][:20]}"
    print(f"\nCreating post: {post['title'][:60]}...")

    body = post.pop("body")
    cats = post.pop("categories")

    create_mutation([{"create": {
        "_id": pid,
        "_type": "post",
        **post,
        "slug": {"_type": "slug", "current": post["slug"]},
        "categories": [{"_type": "reference", "_ref": c, "_key": c.replace("-", "")} for c in cats],
        "author": {"_type": "reference", "_ref": author_id},
        "body": body,
    }}])
    print(f"  Created: {pid}")

print("\nDone! 4 blog posts, 4 categories, 1 author created.")
