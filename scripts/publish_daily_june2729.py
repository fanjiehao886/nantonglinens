#!/usr/bin/env python3
"""Publish 3 daily blog posts for June 27, 28, 29, 2026."""
import json
import urllib.request
import re
import time

TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
API = "https://nk89o1k8.api.sanity.io/v2023-01-01/data/mutate/production"
ASSET_API = "https://nk89o1k8.api.sanity.io/v2021-06-07/assets/images/production"

CAT_BUYING_GUIDE = "cat-buying-guide"
CAT_MARKET_REPORTS = "cat-market-reports"

POSTS = [
    {
        "_id": "post-auto-20260627-1",
        "title": "Cotton Price Surge June 2026: What Hotel Linen Buyers Need to Watch Now",
        "slug": "cotton-price-surge-june-2026-hotel-linen-procurement",
        "category_ref": CAT_MARKET_REPORTS,
        "publishedAt": "2026-06-27T08:00:00Z",
        "excerpt": "NY futures hit 78.51 cents/lb (+3.0% weekly) as US drought risks, Hormuz Strait uncertainty, and Brazil export upgrades reshape the cotton market for hotel linen buyers.",
        "image_prompt": "Raw cotton bales at a textile processing facility, cotton supply chain from field to fabric, warm industrial lighting, agricultural and manufacturing photography",
        "body": """## The Cotton Market in Late June 2026

The week of June 15-19, 2026 delivered a clear signal to hotel linen procurement teams: cotton is getting more expensive, and the reasons are structural rather than temporary. Understanding what is driving the price move — and more importantly, how long it might last — is essential for anyone managing a hotel linen budget in Q3 2026.

According to the China Cotton Market Weekly Report published by the Nanjing Wool Market on June 23, New York cotton futures settled at an average of 78.51 cents per pound for the week, a gain of 2.31 cents (3.0%) over the previous week. The Chinese Cotton Index (M), which tracks the landed cost of imported cotton at Chinese ports, averaged 85.86 cents per pound — equivalent to approximately 14,253 yuan per ton (calculated at 1% import tariff, excluding port fees and freight). This represents a week-on-week increase of 218 yuan per ton, or +1.6%.

Domestic Chinese cotton prices followed a similar path, though more cautiously. The Zhengzhou Cotton Futures main contract settled at an average of 15,894 yuan per ton (+142 yuan, +0.9%), while the National Cotton Price B Index — the benchmark for standard-grade ginned cotton in the domestic market — averaged 17,447 yuan per ton (+63 yuan, +0.4%). The spread between domestic and international cotton prices stood at 3,194 yuan per ton, down 155 yuan from the prior week as international prices outpaced domestic gains.

## What Is Driving the Price Increase

Three distinct forces are pushing cotton prices higher simultaneously, and each one matters to hotel linen buyers for different reasons.

The first factor is US drought conditions. As of June 14, the drought-affected proportion of US cotton-growing regions stood at 79% — compared to just 6% a year ago. While this figure actually improved 8 percentage points from the prior week, the two-week weather forecast showed insufficient rainfall for West Texas and other key production areas, with the possibility of renewed drought intensification. Tropical Storm Arthur brought heavy rain to the Delta and Southeast regions, which simultaneously offered relief and flood risk. The net effect is continued weather uncertainty for the US crop, which is the world's largest cotton exporter.

The second factor is global supply chain tightening. Brazil's Cotton Exporters Association recently raised its 2026 full-year export forecast from 3.21 million tonnes to 3.36 million tonnes — a significant upward revision that reflects strong global demand. Meanwhile, India, the world's second-largest cotton producer, is facing a potential supply deficit: the India Cotton Association projects 2025/26 domestic production at approximately 29.2 million bales against industry needs of 33.7 million bales. India announced a cotton import tariff exemption effective June to bridge this gap, with imports expected to reach 1.02-1.10 million tonnes for the season. This structural deficit in India supports international cotton prices.

The third factor is macro sentiment. The June 18 signing of a US-Iran memorandum of understanding — establishing a framework for resuming negotiations within 60 days — introduced genuine optimism that the Hormuz Strait disruption (which has affected shipping costs since Q1 2026) could be resolved. Simultaneously, the US Federal Reserve's June meeting kept rates unchanged but signaled at least one rate hike ahead, strengthening the dollar and partially offsetting commodity price gains. China's Ministry of Industry and Information Technology held a provincial industrial economy meeting on June 17, emphasizing supply-demand matching and anti-involutionary competition in the textile sector — signals that could reduce excess domestic supply pressure over the medium term.

## The Yarn Market: A Warning Signal for Linen Buyers

While cotton raw fiber prices were rising, the yarn market told a more cautious story. China's C32S carded yarn market price averaged 23,265 yuan per ton, falling 91 yuan (-0.4%) from the prior week. Major imported yarn (C32S carded) averaged 23,039 yuan per ton, down 126 yuan (-0.5%). Standard imported yarn traded at a 226 yuan per ton discount to domestic yarn. Polyester staple fiber — the benchmark synthetic fiber — fell more sharply, dropping 353 yuan to 7,493 yuan per ton.

This divergence between rising raw cotton prices and falling yarn prices signals that textile mills are operating with margin compression. Mills are unwilling to immediately pass raw material cost increases through to finished products, because downstream demand (knitting mills, fabric weavers) is in the seasonal soft period and would simply switch to lower-cost alternatives. For hotel linen buyers, this means:

Short-term: finished product prices (sheets, towels, duvet covers) are likely to remain relatively stable for the next 4-6 weeks as mills absorb the cost pressure.
Medium-term (Q4 2026 and beyond): if raw cotton prices hold or continue rising, price increases in finished hotel linen are inevitable — mills cannot absorb indefinitely.
Benchmark to watch: the gap between C32S yarn price and the cotton index. When yarn premium over cotton cost compresses below 2,000 yuan per ton, mills have no margin room and price increases to downstream buyers become imminent.

## China Hotel Textile Market Context

China's domestic textile consumption showed interesting signals in the May data, which was the most recent available. Domestic textile and clothing retail sales reached 125.1 billion yuan in May, up 3.8% year-on-year. January-May cumulative domestic sales were 642.5 billion yuan, up 7.2% — a strong domestic demand trend that is absorbing production capacity and potentially limiting export availability for hotel linen buyers sourcing from Chinese factories.

Export performance was weaker: textile and clothing exports in May totaled 25.6 billion USD, down 2.3% year-on-year, with January-May cumulative exports up only 0.1% at 116.7 billion USD. The combination of strong domestic demand and flat exports suggests that Chinese factories face meaningful opportunity cost in producing for export at current price points — another structural reason why prices for export-oriented hotel linen may trend higher through H2 2026.

## Procurement Recommendations for Hotel Linen Buyers

Based on this cotton market picture, here are the key actions for hotel linen procurement teams in late June and July 2026:

Lock in Q3 prices now. Cotton futures have risen 3% in a single week. Suppliers who quote today may reprice in 30-45 days. Use any current open RFQ windows to lock in Q3 pricing before the next wave of raw material cost pressure reaches the finished goods level.

Monitor the Hormuz Strait situation closely. The US-Iran memorandum signed June 18 is the first concrete diplomatic development in months. If the Strait reopens within the 30-day framework, shipping costs from China to the Gulf and Europe should moderate — partially offsetting the raw material cost increase. Build a scenario planning spreadsheet: one row with Hormuz open (lower freight), one with Hormuz closed (elevated freight), and model the total landed cost impact on your key SKUs.

Prioritize long-staple cotton specifications. When cotton prices rise, mills face pressure to substitute lower-quality fiber. This is exactly when specification discipline matters most. Ensure your purchase orders clearly specify fiber type (long-staple, Xinjiang or equivalent), yarn count, and require third-party test reports. A mill under cost pressure cannot substitute fiber without violating your PO if the spec is tight.

Consider forward buying for known requirements. If you have Q4 hotel openings, refurbishments, or standard inventory replenishment needs that are predictable, Q3 is historically a more favorable pricing window than Q4 (which faces the dual pressure of peak season demand and year-end budget cycles). Lock in quantities now where your specifications are finalized.

The cotton market is telling hotel linen buyers to move with purpose in Q3 2026. The window for relatively stable pricing may be shorter than expected.""",
    },
    {
        "_id": "post-auto-20260628-1",
        "title": "China Hotel Linen Market 2026: $11.4 Billion, Three-Tier Structure, and What It Means for Buyers",
        "slug": "china-hotel-linen-market-2026-size-structure-buyer-guide",
        "category_ref": CAT_BUYING_GUIDE,
        "publishedAt": "2026-06-28T08:00:00Z",
        "excerpt": "China's hotel linen market hit 68 billion yuan in 2025 (8.3% CAGR). Premium hotel demand grew 12.1%, mid-tier hit 47% market share. A practical three-tier buyer framework.",
        "image_prompt": "Luxury hotel room with premium white bedding, neatly folded towels, and high-end bath products arranged on bed, professional hospitality photography, soft natural lighting",
        "body": """## Market Size and Growth Overview

China's hotel linen and cotton textile market is larger — and growing faster — than most international buyers realize. According to market research published by the China Textile Commerce Association, the total market for hotel linen and cotton textiles in China reached 68 billion yuan (approximately USD 9.4 billion) in 2025, with a compound annual growth rate of 8.3% sustained since 2020.

This market has three important structural characteristics that every hotel linen buyer should understand: where the growth is concentrated, who the key supplier archetypes are, and how to navigate the three-tier market to find the right match for your property and budget.

## Where Growth Is Concentrated: Premium vs Mid-Tier

Not all segments are growing equally. The headline 8.3% CAGR masks a much more dynamic picture at the segment level:

Premium and luxury hotel segment (5-star category): demand for high-end products such as high-fill-power down duvets and high-thread-count fine-count bedding grew at 12.1% year-on-year — nearly 50% faster than the overall market. This is being driven by rising traveler expectations, boutique hotel proliferation, and the growing affluence of China's domestic travel market demanding hotel experiences that match international standards.

Mid-tier hotel segment (3-4 star, domestic chain brands): demand for cost-quality balanced products now represents 47% of total market volume, up from approximately 39% five years ago. This segment is being driven by the rapid expansion of domestic hotel chains (Atour, Huazhu, BTG HomInn, etc.) standardizing their procurement at scale. For international buyers, this segment growth is relevant because it has triggered significant supplier investment in quality systems, certifications, and production consistency — raising the floor of what you can expect from a "midscale" Chinese supplier.

Economy and apartment hotel segment: the fastest-growing but most price-competitive segment. Suppliers here compete primarily on price and speed. This is where you see the greatest quality variability and highest risk of specification deviation.

## The Three-Tier Supplier Structure

China's hotel linen manufacturing ecosystem operates in three clear tiers, and understanding which tier you are sourcing from — and why — is one of the most consequential decisions in your procurement process.

Tier 1: Full Value Chain Manufacturers. These are companies that control the full production chain from spinning through to finished packaged product. They have integrated spinning, weaving, dyeing/finishing, cutting, and sewing operations, often spread across multiple dedicated facilities. They may also have downstream logistics capabilities (warehousing, RFID tracking, direct hotel delivery programs). Key characteristics: capital intensive (production bases of 100+ acres are common), strong quality management systems, ISO 9001 and OEKO-TEX certifications as standard, established international hotel group client relationships. Annual revenue typically 300 million yuan and above.

Tier 1 suppliers represent only about 22% of the market by company count (CR5 market concentration), but supply a disproportionate share of 5-star hotel requirements. The AI quality inspection upgrade is a notable Tier 1 trend — systems achieving 99.2% defect detection accuracy (vs. 85-90% for human visual inspection), which directly translates to lower defect escape rates and fewer post-shipment quality claims.

Tier 2: Category-Specialist Manufacturers. These factories focus deeply on one product category — towels, bathrobes, down products, or bed sheets — rather than covering the full range. They compete on depth of specialization: towel specialists may have the most advanced fiber-ring spinning equipment and decades of specific expertise in terry weave engineering; down product specialists may own their own rearing farms or hold exclusive processing contracts with certified down suppliers.

Tier 2 specialists are often the best sourcing choice for buyers with very high volume requirements in a specific category where depth of technical expertise matters more than one-stop-shop convenience. They may lack the brand recognition of Tier 1 suppliers but frequently match or exceed Tier 1 product quality at more competitive pricing.

Tier 3: Regional OEM Micro-Manufacturers. These are typically small-to-medium operations (under 50 employees) performing assembly-focused work — cutting and sewing fabric purchased from larger mills rather than weaving it themselves. They compete almost entirely on price, can respond very quickly to small orders, and often specialize in serving domestic chain hotels or sourcing agents with modest volume needs. Quality consistency is the primary risk: without in-house spinning and weaving, they cannot control upstream fiber quality, and their QC infrastructure is typically minimal.

## A Practical Framework for Buyer-Supplier Tier Matching

Understanding which supplier tier is right for you depends on three variables: your annual volume, quality requirements, and supply chain risk tolerance.

For large hotel groups and hospitality chains with multiple properties: prioritize Tier 1 suppliers. The higher unit cost (typically 10-15% above market average) is justified by quality consistency across large volumes, the ability to handle custom specifications, and the infrastructure to support ongoing supply relationships including technical support, reorder programs, and warranty handling. Require factory visits before contracting.

For individual hotels and boutique properties with 50-200 rooms: Tier 2 category specialists often deliver the best value. A towel specialist with deep technical expertise will produce superior bath linen compared to a general Tier 1 supplier — and at more competitive pricing. The tradeoff is managing multiple supplier relationships for different product categories.

For temporary hotel openings, FF&E projects with short procurement windows: Tier 3 operations or sourcing agents aggregating from multiple smaller factories can fulfill urgent needs faster. Implement strict incoming quality inspection at destination to compensate for reduced supplier-side QC infrastructure.

## Key Purchasing Selection Criteria for 2026

The 2026 market has raised the baseline on several procurement dimensions that were previously optional and are now becoming table stakes:

Smart quality inspection capability: AI-assisted inspection systems are now standard at Tier 1 and increasingly at Tier 2 suppliers. Ask potential suppliers whether they have AI inspection, and what the accuracy rate is. Suppliers without any automated inspection are increasingly at a competitive disadvantage — and represent higher quality risk.

Environmental compliance certifications: OEKO-TEX Standard 100, GOTS (Global Organic Textile Standard), and increasingly BSCI (Business Social Compliance Initiative) and SEDEX are now expected by European and North American hotel group buyers. If your property is in a market with strong ESG expectations, verify certification before shortlisting a supplier.

Customer repurchase rate: One of the most powerful and underused supplier screening questions. Ask a potential supplier for their hotel client repurchase rate (repeat order rate). Rates above 90% indicate stable quality and service. Rates below 70% warrant careful investigation of why clients are not returning.

Supply chain responsiveness: The 2025-2026 period has taught hotel operators that supply chain disruption is a real risk. Ask about the supplier's raw material inventory strategy, their contingency plans for fabric supply disruptions, and their average lead time for repeat orders. The best suppliers have moved from purely reactive to partially proactive inventory management — maintaining 2-4 weeks of fabric stock for their key hotel clients to buffer against upstream disruptions.

## Contract Terms Emerging in 2026

The 2026 market is seeing three new contractual elements becoming standard in hotel linen agreements:

Flexible MOQ clauses: Standard hotel procurement now commonly includes minimum order quantities of 1,000 pieces per SKU, with rapid replenishment capability (48-hour fulfillment for stock items). This reflects the shift from annual bulk purchasing to continuous replenishment models that reduce hotel storage requirements.

Quality assurance deposits: Buyers increasingly withhold 5-10% of the total invoice as a quality assurance deposit, released after a 3-month trial period confirming that received product meets specifications in actual hotel use. This effectively places part of the supplier's payment at risk if quality claims emerge post-delivery.

Technical support provisions: Leading supply contracts now include formal commitments from the supplier to provide wash cycle guidance (recommended maximum cycles before replacement), dimensional performance documentation, and in some cases direct connection to the hotel's linen inventory management system for replenishment triggers.

The $11.4 billion Chinese hotel linen market is sophisticated, segmented, and increasingly standards-driven. Buyers who approach it with the same rigor they would apply to any other major capital procurement decision — tier matching, certification verification, site visits, performance-linked contracts — consistently achieve better outcomes than those who treat it as a simple price-comparison exercise.""",
    },
    {
        "_id": "post-auto-20260629-1",
        "title": "Hormuz Strait Reopening Signals: What Hotel Linen Importers Can Expect in Q3 2026",
        "slug": "hormuz-strait-reopening-freight-costs-hotel-linen-q3-2026",
        "category_ref": CAT_MARKET_REPORTS,
        "publishedAt": "2026-06-29T08:00:00Z",
        "excerpt": "The US-Iran memorandum of June 18 signals Hormuz may reopen within 30 days. Analysis of what this means for China-Middle East and China-Europe freight rates for hotel linen imports.",
        "image_prompt": "Commercial shipping route map showing Middle East Gulf region, container ship navigating through a maritime strait, clear blue ocean, professional logistics photography",
        "body": """## A Potential Turning Point for Global Freight

On June 18, 2026, the United States and Iran signed a memorandum of understanding establishing a framework for negotiations. The agreement committed both parties to enter formal talks within 60 days, with a mutual commitment to restore normal shipping access through the Hormuz Strait within 30 days of the signing date.

For hotel linen importers, this diplomatic development deserves careful attention — but also careful interpretation. The Hormuz Strait disruption has been one of the two major freight cost drivers of 2026 (alongside European peak season demand), and any resolution will have meaningful and uneven effects on different trade routes. This analysis breaks down what the memorandum means in practice for hotel procurement budgets.

## What the Hormuz Strait Disruption Has Cost So Far

The Strait of Hormuz is the narrow waterway connecting the Persian Gulf to the Gulf of Oman, through which approximately 20% of global seaborne oil trade and a significant volume of container shipping passes. The 2026 disruption — which began in earnest in Q1 — forced carriers to:

Divert vessels away from Gulf routes, adding 8-12 days to China-Middle East voyages.
Increase insurance premiums for vessels transiting the region (war risk surcharges of $150,000-350,000 per transit became standard).
Reallocate container capacity from Asia-Europe routes (partly diverted via Cape of Good Hope rather than Suez) to serve Middle East demand under constrained supply.

The cumulative effect on hotel linen importers in the Gulf region (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain) was rate increases of 40-60% from pre-disruption levels on China-Gulf routes. Indirectly, it contributed to the 66-110% rate increases seen on China-Europe routes (as capacity was drawn toward the disrupted region).

## The 30-Day Reopening Framework: What to Expect

The memorandum's 30-day commitment for restoring Strait access means that — if the agreement holds — Hormuz should be navigable to commercial shipping before the end of July 2026. However, the transition will not be instant or linear. Here is a realistic timeline:

Days 1-10 (Late June): Political announcements. Carriers cautiously extend insurance coverage for Strait transits. Some vessels test alternative routings.
Days 11-20 (Early July): Gradual resumption of normal Hormuz transits as insurance costs normalize. War risk surcharges begin declining.
Days 21-30 (Mid-July): Full commercial traffic restoration. Container capacity begins flowing back to Asia-Middle East-Europe primary routes.
Week 5-8 (Late July to August): Freight rate normalization. As diverted capacity returns to Suez routing, Asia-Europe capacity improves. Rates begin declining from June peaks.

Caveat: This is the optimistic scenario conditional on the memorandum holding. Any renegotiation failure or security incident in the Strait could reverse the trajectory immediately. Procurement teams should monitor diplomatic news closely through mid-July.

## Route-by-Route Impact Analysis

China to Middle East (UAE, Saudi Arabia, Qatar): This route sees the most direct benefit from Hormuz reopening. Current rates of $4,688-$6,563 per 40ft to UAE should normalize toward $3,200-$4,500 if Strait access is fully restored by July. The directional improvement is large, but do not expect rates to return to pre-2026 levels immediately — the underlying demand for container capacity in the Gulf region has grown, which means some premium over 2025 rates will persist.

Practical recommendation: Do not book large forward positions on China-Gulf routing at current elevated rates. If your orders are not time-critical, a 3-4 week delay while Hormuz reopens could save $800-1,500 per container.

China to Europe (Hamburg, Rotterdam, Genoa): The Europe route sees indirect relief. When Hormuz reopens, carriers who repositioned vessels to Middle East routes can redeploy capacity to Asia-Europe, improving capacity availability and reducing the supply-demand imbalance that drove June's record rate increases (+110% to Germany). However, European peak season demand (July-August) is just beginning, which will partially absorb the returning capacity.

Realistic rate forecast for China-Northern Europe: from current $5,000-5,600 per 40ft, expect gradual moderation to $3,500-4,500 by late August, assuming Hormuz reopens on schedule. This is still well above 2025 levels but materially below the June 2026 peak.

Practical recommendation: For European hotel openings or inventory replenishment with August-September delivery windows, consider booking now with flexible clauses rather than waiting for the full rate correction. The difference between booking now vs. waiting 6 weeks may not be worth the risk of delaying a hotel opening.

China to US Trans-Pacific: The trans-Pacific route is not directly affected by Hormuz, but sees secondary effects through global container repositioning. As Gulf-diverted vessels return to their optimal deployments, container availability on Pacific routes improves slightly. Current rates of $5,018-$6,133 per 40ft to Los Angeles should moderate to $4,200-$5,000 by August assuming no new disruptions.

The trans-Pacific rate structure is driven more by peak season dynamics (July-August) and tariff-related front-loading than by Hormuz. Expect less dramatic improvement on this route than on Middle East and Europe routes.

## Recalculating Your Freight Budget for Q3-Q4

Based on this analysis, here is a revised freight budget framework for hotel linen importers:

If you are importing to the Middle East and your delivery window is flexible (August or later): hold off on booking and capture the Hormuz reopening discount. Potential saving: $1,000-2,000 per 40ft container.

If you are importing to Europe with a hard September delivery deadline: book now (or within two weeks) at current rates, request flexible cancellation terms, and monitor the Hormuz situation. If rates drop meaningfully in late July, you may be able to cancel and rebook — but only if your contract allows it. The risk of missing a hotel opening deadline is typically more expensive than locking in elevated freight.

If you are importing to the US: rates are less likely to change dramatically through Q3. Book at current rates with confidence — the downside risk of a Pacific rate spike is lower than the market uncertainty on other routes.

For all routes, build a 10-15% freight contingency into your H2 2026 procurement budget. The June volatility has demonstrated that freight can move 50-100% in a single month. Budgets without contingency will be broken.

## The Broader Supply Chain Picture for Hotel Linen

The Hormuz development coincides with two other significant supply chain signals that hotel procurement teams should integrate into their planning:

The Federal Reserve's June decision to hold rates (with a hike signal for H2 2026) will keep the US dollar strong, which generally benefits dollar-denominated importers of hotel linen — lower USD-equivalent prices from Chinese factories. Each 5% strengthening of the dollar relative to the Chinese yuan effectively reduces your linen procurement cost by approximately 3-4% for USD-priced contracts.

China's government industrial policy signal from June 17 — emphasizing anti-involutionary competition and supply-demand matching in the textile sector — is medium-term positive for quality standards but may lead to some capacity rationalization in lower-tier manufacturers. If smaller, price-competitive Chinese manufacturers exit the market, the short-term effect is tighter capacity and slightly higher prices; the longer-term effect is a better-quality, more consistent supply base.

The hotel linen supply chain is navigating a period of simultaneous shifts: diplomatic normalization in the Middle East, cotton price pressure, and China industrial policy evolution. The importers who will navigate this most successfully are those who track these developments regularly, maintain flexible procurement approaches, and build supplier relationships that allow honest, timely communication about cost pressures on both sides. The Hormuz reopening is good news — but it is the beginning of a normalization process, not an immediate return to 2025 pricing.""",
    },
]


def make_block(text, style="normal"):
    """Create a Portable Text block."""
    return {
        "_type": "block",
        "_key": f"b{abs(hash(text[:30])) % 100000:05d}",
        "style": style,
        "markDefs": [],
        "children": [{"_type": "span", "_key": "s0", "text": text, "marks": []}]
    }


def parse_markdown_to_pt(markdown_text):
    """Convert simple markdown to Portable Text blocks."""
    blocks = []
    lines = markdown_text.strip().split('\n')
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
            continue
        if line.startswith('## '):
            blocks.append(make_block(line[3:].strip(), 'h2'))
        elif line.startswith('### '):
            blocks.append(make_block(line[4:].strip(), 'h3'))
        elif line.startswith('#### '):
            blocks.append(make_block(line[5:].strip(), 'h3'))
        elif line.startswith('- ') or line.startswith('* '):
            text = re.sub(r'\*\*(.+?)\*\*', r'\1', line[2:].strip())
            blocks.append(make_block(text))
        elif re.match(r'^\d+\. ', line):
            text = re.sub(r'^\d+\. ', '', line).strip()
            text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
            blocks.append(make_block(text))
        else:
            text = line.strip()
            text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
            text = re.sub(r'\*(.+?)\*', r'\1', text)
            if text:
                blocks.append(make_block(text))
        i += 1
    return blocks


def create_post(post):
    """Create a post in Sanity with body content."""
    blocks = parse_markdown_to_pt(post["body"])
    print(f"  Parsed {len(blocks)} body blocks")
    
    doc = {
        "_id": post["_id"],
        "_type": "post",
        "title": post["title"],
        "slug": {"_type": "slug", "current": post["slug"]},
        "excerpt": post["excerpt"],
        "publishedAt": post["publishedAt"],
        "categories": [{"_type": "reference", "_ref": post["category_ref"]}],
        "body": blocks,
    }
    
    mutation = {"mutations": [{"createOrReplace": doc}]}
    data = json.dumps(mutation, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(API, data=data, headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json",
    })
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read())
        tx_id = result.get("transactionId", "N/A")
        print(f"  Created: {post['_id']} | tx: {tx_id}")
        return tx_id


def upload_and_link_image(image_path, post_id, alt_text):
    """Upload image and PATCH to post mainImage."""
    with open(image_path, 'rb') as f:
        image_data = f.read()
    
    req = urllib.request.Request(ASSET_API, data=image_data, headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "image/png",
    }, method="POST")
    
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read())
        asset_id = result['document']['_id']
        print(f"  Uploaded image: {asset_id}")
    
    mutation = {"mutations": [{"patch": {"id": post_id, "set": {
        "mainImage": {
            "_type": "image",
            "asset": {"_type": "reference", "_ref": asset_id},
            "alt": alt_text
        }
    }}}]}
    
    data = json.dumps(mutation).encode("utf-8")
    req2 = urllib.request.Request(API, data=data, headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json",
    })
    with urllib.request.urlopen(req2) as resp:
        r = json.loads(resp.read())
        print(f"  Linked image: {r.get('transactionId')}")
    
    return asset_id


def main():
    print("=" * 60)
    print("Publishing 3 daily posts (June 27-29, 2026)")
    print("=" * 60)
    
    for i, post in enumerate(POSTS, 1):
        print(f"\n[{i}/3] {post['_id']}")
        print(f"  Title: {post['title'][:80]}...")
        print(f"  Date: {post['publishedAt'][:10]}")
        print(f"  Excerpt: {len(post['excerpt'])} chars")
        
        try:
            create_post(post)
        except Exception as e:
            print(f"  ERROR creating post: {e}")
            if hasattr(e, 'read'):
                print(f"  Response: {e.read().decode()[:300]}")
    
    print("\n" + "=" * 60)
    print("All 3 posts created. Now generate and upload cover images.")
    print("=" * 60)


if __name__ == "__main__":
    main()
