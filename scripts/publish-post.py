#!/usr/bin/env python3
"""Publish today's blog post to Sanity CMS."""
import requests
import json
import sys

SANITY_PROJECT = "nk89o1k8"
SANITY_DATASET = "production"
SANITY_TOKEN = "skvNBwO80b5504XlXsL672JbNZ9OHZgphWqpsmJpVzV9FxmFnLBbP6vQk2Fmm6G9WJ01wyEubu5OfmherI1Afoi31zHD2moE9FJFlEML0sRkN1L5PF2uGcPK2cEaGbTJOY2ojijctt58GxGtEYWgkfFf8Bm12wMI8BLuejwMHHAfRFGdUHcD"
API_BASE = f"https://{SANITY_PROJECT}.api.sanity.io/v2024-01-01"

DOC_ID = "post-auto-20260526-1"
slug = "china-hotel-procurement-guide-2026"

# Step 1: Check slug
query = f'*[_type=="post" && slug.current=="{slug}"][0]._id'
resp = requests.get(
    f"{API_BASE}/data/query/{SANITY_DATASET}",
    params={"query": query},
    headers={"Authorization": f"Bearer {SANITY_TOKEN}"}
)
data = resp.json()
if data.get("result"):
    print(f"ERROR: Slug '{slug}' already exists with ID: {data['result']}")
    sys.exit(1)
print(f"Slug check passed: '{slug}' is available")

# Step 2: Create the document
body_blocks = [
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "China's position as the world's leading supplier of hotel textiles, furniture, and operating equipment is no longer a secret - but the scale of the advantage continues to grow. A newly released 2026 procurement guide from Taimi Consulting provides the most comprehensive data yet on why global hotel chains, independent properties, and procurement managers are increasingly sourcing directly from China. For buyers of hotel linens, bedding, and textiles, the numbers tell a compelling story."}]
    },
    {
        "style": "h2", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "The Numbers Behind China's Hotel Supply Dominance"}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "The global hotel FF&E (Furniture, Fixtures & Equipment) market reached $67.6 billion in 2026, with China accounting for 28% of that total. The market is projected to grow at a compound annual rate of 6.9% through 2033."}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "Meanwhile, the OS&E (Operating Supplies & Equipment) market - which includes linens, towels, amenities, and guest room textiles - was valued at $28.6 billion in 2025, with projections reaching $52.3 billion by 2034. Guest room supplies and F&B service items together account for 59% of OS&E spending."}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "With over 14,500 hotel projects representing 2.2 million rooms currently under construction worldwide, demand for quality hotel textiles has never been stronger. The post-pandemic tourism recovery, hotel technology upgrades, and ESG compliance requirements are cited as the three primary growth drivers."}]
    },
    {
        "style": "h2", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "Cost and Timeline Advantages That Matter for Buyers"}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "For procurement managers, the financial case for sourcing from China is straightforward. Compared to European procurement, products sourced directly from Chinese manufacturers deliver cost savings of 30% to 60% at comparable quality levels. Total delivery lead times are approximately 40% shorter than European alternatives."}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "These savings are not limited to entry-level products. Mid-range and premium hotel textiles from established Chinese manufacturing clusters routinely meet international hotel brand specifications while maintaining significant price advantages. For hotel operators managing tight pre-opening budgets, this cost differential can mean the difference between standard and premium guest room finishes."}]
    },
    {
        "style": "h2", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "Industry Clusters: Where Your Hotel Textiles Come From"}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "China's hotel textile industry is organized into highly specialized regional clusters that leverage deep supply chains and decades of manufacturing expertise. The Yangtze River Delta region - anchored by Nantong and Yangzhou - dominates over 30% of the global hotel linen market."}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "Nantong alone, home to the Dieshiqiao textile market with over 6,000 factories, represents the world's largest concentration of home textile and hotel linen production. The cluster offers everything from basic 200-thread-count cotton bedding to 1,200-thread-count sateen sheets, jacquard duvet covers, and zero-twist bath towels - all produced within a single geographic region that enables rapid sampling and on-site quality control."}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "Three major procurement clusters have emerged: the Pearl River Delta (Foshan-Zhongshan area), the Yangtze River Delta (Nantong-Yangzhou-Hangji area), and the Chaozhou-Jingdezhen-Zhongshan corridor. Each region serves distinct product categories, enabling buyers to consolidate sampling and factory visits within tight travel schedules."}]
    },
    {
        "style": "h2", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "The Six-Stage Procurement Framework"}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "The procurement guide outlines a standardized six-stage process with a total timeline of 16 to 26 weeks. Buyers are advised to initiate sourcing at least six months before hotel opening to allow adequate time for sampling, production, and shipping."}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "A three-tier quality control system forms the backbone of the framework: pre-production factory audits verify capabilities and certifications, in-production random inspections catch issues before they scale, and pre-shipment final checks ensure every shipment meets specifications. For trade terms, FOB (Free on Board) is recommended for experienced buyers, while DDP (Delivered Duty Paid) is suggested as a safer option for first-time procurement to minimize logistics risk. Ocean freight via 40HQ containers remains the dominant shipping method."}]
    },
    {
        "style": "h2", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "Sustainability Is Now a Baseline Requirement"}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "Environmental compliance has shifted from a differentiator to a baseline requirement. International certifications such as OEKO-TEX Standard 100, GOTS (Global Organic Textile Standard), and GRS (Global Recycled Standard) are now expected, not optional. Buyers should actively verify these certifications at the supplier level, as instances of unsubstantiated green claims have been reported in the market."}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "The guide notes that traceable plant-based fibers - including lyocell, TENCEL, and eucalyptus-derived textiles - saw a 120% year-over-year demand increase in China's premium hotel segment during 2025. Hotels are increasingly specifying biodegradable packaging for linen shipments and requiring suppliers to disclose material origin and treatment processes."}]
    },
    {
        "style": "h2", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "AI and Technology Reshaping Hotel Procurement"}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "Technology adoption in procurement is accelerating across the supply chain. AI-powered demand forecasting helps buyers optimize order quantities and reduce inventory waste. Smart quality inspection systems using computer vision can detect fabric defects with greater consistency and speed than manual inspection alone."}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "Blockchain-based supply chain traceability is emerging as a practical tool for verifying material origin and production conditions. Smart room penetration in China's hotel sector has reached 86%, and hotel textiles increasingly need to function within these connected ecosystems. RFID-tracked linens for automated inventory management and phase-change materials for adaptive temperature regulation are two applications gaining traction in the premium segment."}]
    },
    {
        "style": "h2", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "What This Means for Your 2026 Sourcing Strategy"}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "For hotel procurement managers, the 2026 landscape offers both opportunity and complexity. China's manufacturing scale, specialized industry clusters, and improving technology infrastructure make it the default sourcing destination for hotel textiles. The key is not whether to source from China, but how to do it effectively."}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "Work with verified suppliers who have documented quality control systems. Build clear specifications that reference international standards for thread count, fiber composition, and finish quality. Implement a multi-stage inspection process that gives you visibility before, during, and after production. These fundamentals remain unchanged - thread count, weave construction, and finishing quality still determine guest satisfaction more than any technology label."}]
    },
    {
        "style": "normal", "_type": "block", "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": "This article was adapted from Chinese textile industry sources. For custom hotel linen inquiries, visit nantonglinens.com."}]
    },
]

mutation = {
    "mutations": [{
        "create": {
            "_id": DOC_ID,
            "_type": "post",
            "title": "China Hotel Procurement Guide 2026: Data, Trends, and Cost Advantages",
            "slug": {"_type": "slug", "current": slug},
            "excerpt": "China accounts for 28% of the $67.6B global hotel FF&E market. Learn what the latest procurement data means for hotel buyers sourcing from China.",
            "publishedAt": "2026-05-26T00:00:00Z",
            "categories": [
                {"_type": "reference", "_ref": "cat-buying-guide", "_key": "catbuyingguide"}
            ],
            "author": {"_type": "reference", "_ref": "author-7745c84e"},
            "body": body_blocks
        }
    }]
}

resp = requests.post(
    f"{API_BASE}/data/mutate/{SANITY_DATASET}",
    headers={
        "Authorization": f"Bearer {SANITY_TOKEN}",
        "Content-Type": "application/json"
    },
    json=mutation
)

result = resp.json()
print(f"HTTP {resp.status_code}: {json.dumps(result, indent=2)}")

if "transactionId" in result:
    print(f"\nSUCCESS: Post published!")
    print(f"Document ID: {DOC_ID}")
    print(f"Slug: {slug}")
    print(f"Transaction: {result['transactionId']}")
elif "error" in result:
    print(f"\nFAILED: {result['error'].get('description', str(result))}")
    sys.exit(1)
