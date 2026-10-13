#!/usr/bin/env python3
"""Publish a blog post to Sanity CMS via API."""

import json
import urllib.request
import urllib.error
from datetime import datetime, timezone

SANITY_PROJECT = "nk89o1k8"
SANITY_DATASET = "production"
SANITY_TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
API_BASE = f"https://{SANITY_PROJECT}.api.sanity.io/v2024-01-01"

# Article metadata
TITLE = "China Textile 2026: Five-Year Plan Impacts Hotel Linen Buyers"
SLUG = "china-textile-2026-five-year-plan-hotel-linen"
EXCERPT = "China's 15th Five-Year Plan reshapes home textiles with AI, green standards, and sleep health labs. What hotel linen buyers must know."
DOC_ID = "post-auto-20260814-1"
AUTHOR_ID = "author-7745c84e"
CATEGORY_REF = "cat-buying-guide"
CATEGORY_KEY = "catbuyingguide"

# Get current UTC time
published_at = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

def make_block(style, text):
    """Create a Portable Text block."""
    return {
        "style": style,
        "_type": "block",
        "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": text}]
    }

# Build body content
body_blocks = [
    make_block("normal",
        "On August 12, 2026, the China Home Textile Association convened its annual curtain and fabric branch meeting in Keqiao, Shaoxing — China's largest textile trading hub with over 4,400 billion yuan in annual transaction volume at its Light Textile City market alone. The event brought together industry leaders, academic researchers, and cross-border e-commerce platforms to chart the home textile sector's direction under the nation's 15th Five-Year Plan. For hotel linen procurement professionals worldwide, the signals from this gathering carry direct implications for sourcing strategy, compliance readiness, and supplier evaluation in the years ahead."
    ),
    make_block("h2", "Industry Leaders Convene: The 2026 Keqiao Annual Meeting"),
    make_block("normal",
        "The meeting, themed \"Design Breakthrough, Tech Innovation, and Symbiotic Growth,\" gathered senior officials from the China National Textile and Apparel Council (CNTAC) and the China Home Textile Association (CHTA). CHTA President Zhu Xiaohong delivered a comprehensive review of the 14th Five-Year Plan period, noting that while industry scale remained stable, curtain and fabric enterprises faced mounting pressure from real estate downturns and rising raw material costs."
    ),
    make_block("normal",
        "The first half of 2026 saw Chinese home textile exports increase in volume but decline in average unit price — a trend that signals both opportunity and risk for international buyers seeking value in Chinese textile sourcing. CNTAC Vice President Liang Pengcheng confirmed that while production and exports grew steadily, the industry continues to face weak demand and trade volatility."
    ),
    make_block("h2", "Six Strategic Priorities Under the 15th Five-Year Plan"),
    make_block("normal",
        "CHTA outlined six development priorities that will shape the industry through 2030. First, diversifying global supply chains to reduce dependence on any single market. Second, stimulating domestic renovation and soft-furnishing demand. Third, activating new productive forces through AI integration and industry-academia collaboration. Fourth, building indigenous Chinese home textile aesthetic brands. Fifth, implementing full-chain carbon footprint standards across the production lifecycle."
    ),
    make_block("normal",
        "Sixth, and perhaps most relevant for hospitality, the association committed to establishing sleep health laboratories — a move that directly elevates the importance of functional and wellness-oriented bedding products. For hotel buyers, these priorities translate into a supplier base that is increasingly quality-driven, technologically advanced, and compliance-focused, rather than competing purely on price."
    ),
    make_block("h2", "AI-Powered Manufacturing: From Color Matching to Quality Inspection"),
    make_block("normal",
        "Professor Ji Feng from Donghua University's Textile College presented breakthroughs in digital and functional textile research that are moving from lab to factory floor. His team has built a massive dye database enabling AI-driven precise color matching that solves persistent digital printing color deviation problems — a longstanding challenge for hotel linen buyers who require consistent color across repeated orders and large batch sizes."
    ),
    make_block("normal",
        "Additionally, a fiber polarization image library combined with CNN deep learning now enables non-destructive, rapid fabric composition identification, replacing traditional chemical testing methods that are slower and destructive. These advances mean suppliers equipped with such technology can deliver more consistent quality, faster sampling cycles, and verifiable material composition — all critical factors in hotel linen procurement where consistency across hundreds or thousands of rooms is non-negotiable."
    ),
    make_block("h2", "Green Manufacturing and Carbon Footprint Standards"),
    make_block("normal",
        "The association emphasized that full-chain carbon footprint standards will become a formal industry requirement, not a voluntary initiative. This aligns with growing ESG procurement mandates from international hotel chains and hospitality groups, particularly in Europe where the EU Corporate Sustainability Reporting Directive (CSRD) now requires detailed supply chain emissions disclosure."
    ),
    make_block("normal",
        "Suppliers who can demonstrate verifiable carbon tracking — from raw material cultivation through weaving, dyeing, and packaging — will gain preferential access to premium hospitality contracts. Buyers should begin requesting carbon footprint documentation as part of their supplier evaluation checklists now, ahead of when these standards become mandatory in export markets. The transition period offers a window to identify and partner with forward-thinking manufacturers who have already invested in green production capabilities."
    ),
    make_block("h2", "Export Reality: Volume Rising, Prices Falling"),
    make_block("normal",
        "One of the most actionable data points from the meeting was the export trend. Chinese home textile exports in the first half of 2026 increased in volume but saw declining average prices. This dynamic creates a buyer's market for hotel linens, but also signals margin pressure on manufacturers that could affect long-term supplier stability."
    ),
    make_block("normal",
        "Keqiao alone reported 8 to 9 billion USD in cross-border online textile transactions, with local curtain and fabric companies numbering nearly 8,000 and generating close to 700 billion yuan in annual output. The 2025 Light Textile City transaction volume exceeded 4,400 billion yuan. For procurement professionals, this means competitive pricing is available now, but supplier financial stability and production capacity should be scrutinized more carefully, as price compression may lead some manufacturers to cut corners on quality."
    ),
    make_block("h2", "Functional Textiles: Sleep Health and Temperature Control"),
    make_block("normal",
        "The establishment of sleep health laboratories as a formal industry priority reflects a broader shift toward functional textile development. Technologies highlighted at the meeting included phase-change temperature control fabrics that actively regulate thermal comfort, nano-modified materials with enhanced durability and antimicrobial properties, and gel-infused cooling textiles."
    ),
    make_block("normal",
        "In Nantong — China's home textile manufacturing heartland and home to the famous Dieshiqiao market — companies are already commercializing these innovations. Cooling bedding products incorporating silk pupa protein fibers have secured multiple patents, while gel particle technology originally developed for medical applications is being adapted for hotel pillow and mattress topper applications. For hotels in warm-climate markets such as the Middle East, Southeast Asia, and tropical destinations, these functional textiles offer tangible guest comfort improvements that can differentiate a property's sleep experience."
    ),
    make_block("h2", "Cross-Border E-Commerce: New Channels for Global Buyers"),
    make_block("normal",
        "The meeting featured detailed cross-border e-commerce strategy sessions, with TikTok Shop emerging as a significant new channel for home textile exports. The platform covers over 150 countries with 2 billion monthly active users, with Southeast Asia and Latin America showing the fastest growth in home textile categories. Industry experts shared practical frameworks for building product matrices across basic, functional, and co-branded tiers."
    ),
    make_block("normal",
        "For hotel procurement, this means Chinese textile suppliers are increasingly accessible through digital channels, with many offering sample programs and small-batch ordering capabilities that were previously unavailable. However, buyers should exercise due diligence — digital storefront visibility does not replace factory audits, third-party testing, and quality verification protocols that are standard in hospitality procurement."
    ),
    make_block("h2", "What This Means for Hotel Linen Procurement"),
    make_block("normal",
        "The 2026 annual meeting signals that China's home textile industry is transitioning from volume competition to value competition. For hotel linen buyers, this translates into five actionable takeaways. First, prioritize suppliers who have adopted AI-assisted quality control and color management systems, as these directly reduce defect rates and color inconsistency risks."
    ),
    make_block("normal",
        "Second, request carbon footprint documentation as part of supplier pre-qualification, particularly for properties serving European markets where ESG compliance is becoming mandatory. Third, evaluate functional textile capabilities — particularly cooling, antimicrobial, and temperature-regulating treatments — for properties in warm-climate markets where guest comfort directly impacts review scores."
    ),
    make_block("normal",
        "Fourth, leverage the current buyer-friendly pricing environment while carefully assessing supplier financial health, production capacity, and quality consistency. Fifth, explore cross-border digital channels for initial sampling and product discovery, but maintain rigorous factory verification before committing to volume orders. The suppliers who thrive in this new era will be those who combine manufacturing scale with technological sophistication and verifiable compliance — exactly the profile that discerning hotel procurement teams should seek."
    ),
    make_block("normal",
        "This article was adapted from Chinese textile industry sources. For custom hotel linen inquiries, visit nantonglinens.com."
    ),
]

# Construct the document
doc = {
    "_id": DOC_ID,
    "_type": "post",
    "title": TITLE,
    "slug": {"_type": "slug", "current": SLUG},
    "excerpt": EXCERPT,
    "publishedAt": published_at,
    "categories": [
        {"_type": "reference", "_ref": CATEGORY_REF, "_key": CATEGORY_KEY}
    ],
    "author": {"_type": "reference", "_ref": AUTHOR_ID},
    "body": body_blocks
}

# Create mutation
payload = json.dumps({"mutations": [{"create": doc}]}).encode("utf-8")

url = f"{API_BASE}/data/mutate/{SANITY_DATASET}"
req = urllib.request.Request(
    url,
    data=payload,
    headers={
        "Authorization": f"Bearer {SANITY_TOKEN}",
        "Content-Type": "application/json"
    },
    method="POST"
)

try:
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read().decode("utf-8"))
        print("SUCCESS:", json.dumps(result, indent=2))
        if "transactionId" in result:
            print(f"\nTransaction ID: {result['transactionId']}")
            print(f"Document ID: {DOC_ID}")
            print(f"Slug: {SLUG}")
            print(f"Title: {TITLE}")
            print(f"Excerpt length: {len(EXCERPT)} chars")
            print(f"Published at: {published_at}")
except urllib.error.HTTPError as e:
    error_body = e.read().decode("utf-8")
    print(f"HTTP Error {e.code}: {error_body}")
except Exception as e:
    print(f"Error: {e}")
