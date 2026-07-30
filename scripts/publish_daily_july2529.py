#!/usr/bin/env python3
"""Publish July 25-29 daily blog posts to Sanity."""
import json, urllib.request, hashlib, re

TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
API = "https://nk89o1k8.api.sanity.io/v2023-01-01/data/mutate/production"

def pkey(s):
    return f"b{abs(int(hashlib.md5(s.encode()).hexdigest(), 16)) % 100000:05d}"

def make_block(text, style="normal"):
    text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
    text = re.sub(r'_(.+?)_', r'\1', text)
    text = re.sub(r'`(.+?)`', r'\1', text)
    return {
        "_type": "block", "_key": pkey(text),
        "style": style, "markDefs": [],
        "children": [{"_type": "span", "_key": "s0", "text": text, "marks": []}]
    }

def parse_body(md_text):
    blocks = []
    lines = md_text.strip().split('\n')
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
        if stripped.startswith('#### '):
            blocks.append(make_block(stripped[5:], "h4"))
        elif stripped.startswith('### '):
            blocks.append(make_block(stripped[4:], "h3"))
        elif stripped.startswith('## '):
            blocks.append(make_block(stripped[3:], "h2"))
        elif stripped.startswith('# '):
            blocks.append(make_block(stripped[2:], "h1"))
        elif stripped.startswith('- '):
            blocks.append(make_block(stripped[2:].lstrip(), "normal"))
            blocks[-1]["listItem"] = "bullet"
        elif stripped.startswith('> '):
            blocks.append(make_block(stripped[2:], "blockquote"))
        else:
            blocks.append(make_block(stripped, "normal"))
    return blocks


ARTICLES = [
    {
        "id": "post-auto-20260725-1",
        "date": "2026-07-25T08:00:00Z",
        "category": "cat-market-reports",
        "title": "Chinese Cotton Prices Edge Down as Off-Season Demand Fades: July 25 Market Update",
        "excerpt": "Xinjiang 3128B cotton slipped to ¥17,400/ton while Zhengzhou futures closed at ¥15,830. Off-season textile demand, rising mill inventories, and weak downstream orders signal cautious procurement.",
        "body": """## Chinese Cotton Prices Edge Down as Off-Season Demand Fades

The Chinese cotton market entered a decisive correction phase on July 25 as off-season textile demand softened and mill inventories climbed. Xinjiang 3128B machine-picked cotton traded at ¥17,400 per ton, down ¥80 from the previous session, while the Zhengzhou cotton futures main contract settled at ¥15,830/ton, losing 95 points or 0.60%.

### Supply-Side Divergence

The market is experiencing a pronounced divergence between supply expectations and demand reality. On the supply side, Xinjiang's cotton fields are entering the critical boll-setting stage — the period when July weather determines annual yield. High temperatures and drought conditions across Xinjiang have strengthened production reduction expectations, keeping spot basis (the spread between physical and futures prices) firm at ¥1,814/ton.

Northern Xinjiang basis is notably higher than southern Xinjiang, reflecting regional disparities in water availability and heat stress. State reserve cotton auctions continue, with daily transactions performing steadily, providing a floor under the market.

### Import Cotton Under Pressure

At Qingdao port, 2025 Brazilian M1-1/8 cotton was quoted at ¥17,935–18,035/ton (USD 83.72–84.72/lb), while 2025 Australian SM1-5/32 fetched ¥19,360–19,460/ton (USD 92.92–93.91/lb). Imported cotton prices trended weaker as buyers held back amid plentiful supply of Brazilian and Australian new crop arrivals.

### Demand-Side Weakness

The demand picture is less optimistic. Domestic textile mills are facing intense competitive pressure with rising yarn inventories. Grey fabric mills show low restocking enthusiasm, preferring to maintain a wait-and-see posture. Market transactions are limited to small, just-in-time purchases — no concentrated replenishment is occurring.

The autumn/winter order season has yet to materialize, and downstream demand for cotton yarn remains lackluster. Imported yarn competition has further pressured domestic prices, with Vietnam C32S combed yarn gaining share at competitive FOB pricing.

### Key Numbers for Hotel Linen Buyers

For hotel linen procurement professionals, the current cotton price environment presents a mixed picture:

- Xinjiang 3128B (standard quality): ¥17,400/ton — down from early July highs
- 32S combed yarn: ¥23,751/ton — flat, no movement
- Polyester staple fiber: ¥7,498/ton — down 0.46% daily
- Cotton-yarn spread: narrowing, benefiting yarn spinners but pressuring weavers

### Procurement Implication

The softening cotton price, combined with weak downstream demand, suggests that Chinese hotel linen FOB prices may face some downward pressure in the coming weeks. However, the critical variable remains Xinjiang weather — any intensification of drought or extreme heat could reverse the trend rapidly. Buyers should monitor the August cotton crop condition reports closely."""
    },
    {
        "id": "post-auto-20260726-1",
        "date": "2026-07-26T08:00:00Z",
        "category": "cat-market-reports",
        "title": "India-US Trade Talks: Tariff Uncertainty Clouds Textile and Hotel Linen Supply Chains",
        "excerpt": "India seeking competitive tariff advantage for $10.5B textile exports to US. Meanwhile, West Asia conflict threatens freight costs, Indian cotton at ₹65,000/candy.",
        "body": """## India-US Trade Talks: Tariff Uncertainty Clouds Textile Supply Chains

Indian textile and apparel exporters are navigating a fresh wave of uncertainty as they await clarity on US tariff negotiations scheduled to conclude later this month. With $10.5 billion in annual textile and apparel exports to the United States, India's competitive positioning in the global textile supply chain hangs in the balance.

### The Tariff Calculus

India's negotiation strategy centers on securing a tariff advantage over rival sourcing destinations — primarily Vietnam, Bangladesh, and China. For hotel linen buyers who depend on a diversified supply base, the outcome of these talks will directly affect procurement costs and sourcing strategies.

"Brands and retailers are placing smaller and more frequent orders instead of committing to large contracts as they wait for greater clarity on tariffs," said Marc Lewkowitz, President and CEO of Supima. The shift to shorter order cycles is disruptive for hotel linen procurement, where lead times typically range from 45 to 75 days.

### Cotton Price Dynamics

Indian benchmark 29mm cotton spot prices have risen to ₹65,000 per candy (approximately ₹182/kg) as of mid-July, reflecting both domestic production concerns and global supply tightness. Some exporters anticipated the price surge and pre-booked yarn with spinning mills to lock in costs.

The cotton landscape is particularly relevant for hotel textile products — bedsheets, towels, and bathrobes — where cotton constitutes approximately 70% of raw material input. In contrast, apparel manufacturing relies more heavily on polyester (70% of input), making the apparel segment less vulnerable to cotton price shocks.

### West Asia Conflict: The Freight Wildcard

The renewed conflict in West Asia following the collapse of US-Iran peace negotiations introduces a significant freight cost variable. Military strikes in the Strait of Hormuz region threaten to disrupt global shipping routes, increase marine insurance premiums, and raise bunker fuel costs — all of which translate directly into higher ocean freight rates for textile shipments from Asia to Europe and the Americas.

Indian exporters were already sharing part of the additional duty burden by offering discounts to retain US customers after the earlier round of reciprocal tariffs. Now, with both tariff and geopolitical uncertainty, planning procurement cycles has become significantly harder.

### Three Scenarios for Hotel Linen Buyers

**Scenario 1 — Favorable Deal**: India secures tariff advantage over Southeast Asian competitors. More hotel linen sourcing shifts to India, particularly for mid-range and economy segment products. Indian cotton yarn and fabric become more price-competitive.

**Scenario 2 — Stalemate**: No deal, status quo tariffs remain. Buyers continue diversified sourcing with no dramatic shifts. Smaller, more frequent orders become the norm.

**Scenario 3 — Escalation**: Tariff negotiations break down, West Asia conflict intensifies. Freight costs spike 20-40%, India cotton exports face headwinds, and global hotel linen procurement costs rise across all origins.

### What This Means for Your Sourcing Strategy

Hotel linen buyers should:
1. Monitor the India-US trade announcement (expected late July/early August)
2. Maintain at least two supplier relationships across different countries
3. Consider placing smaller, more frequent orders rather than large annual contracts
4. Build a 5-10% freight cost contingency into Q3-Q4 budgets"""
    },
    {
        "id": "post-auto-20260727-1",
        "date": "2026-07-27T08:00:00Z",
        "category": "cat-fabric-encyclopedia",
        "title": "Polyester-Cotton Blends for Hotel Linens: The 65/35 vs. 50/50 Debate in 2026",
        "excerpt": "As cotton stays elevated above ¥17,000/ton while polyester drops to ¥7,500, hotel linen buyers are rethinking blend ratios. A technical comparison of 65/35, 50/50, and T/C reverse blends.",
        "body": """## Polyester-Cotton Blends for Hotel Linens: The 65/35 vs. 50/50 Debate in 2026

The divergence in cotton and polyester pricing through mid-2026 is reshaping the blend ratio calculus for hotel linen procurement. With Xinjiang cotton at ¥17,400/ton and polyester staple fiber at ¥7,500/ton — a spread of nearly ¥10,000 — the economics of blend selection have shifted meaningfully.

### The Price Gap Widens

In January 2026, the cotton-polyester price spread was approximately ¥8,000/ton. By late July, it had widened to ¥9,900 — nearly a 24% increase. This means every percentage point of cotton replaced by polyester in a blend delivers proportionally larger cost savings than at the start of the year.

For a typical hotel that orders 5,000 sets of bed linens annually, a shift from 80/20 cotton/polyester to 50/50 blend could reduce raw material costs by 12-15%, depending on construction and finishing requirements.

### Blend Ratio Comparison

**80/20 Cotton-Rich (Traditional Hotel Standard)**
- Hand feel: Natural, soft, breathable
- Durability: Moderate (80-100 industrial wash cycles)
- Wrinkle resistance: Poor — requires ironing
- Cost: Highest among blends
- Best for: 4-5 star hotels, boutique properties, guest-facing linens

**65/35 Polyester-Cotton (T/C Blend)**
- Hand feel: Slightly crisp, less natural drape
- Durability: Good (120-150 industrial wash cycles)
- Wrinkle resistance: Improved — reduced laundry finishing time
- Cost: ~15% cheaper than 80/20
- Best for: 3-4 star hotels, economy chains, back-of-house linens

**50/50 Cotton-Polyester**
- Hand feel: Compromise between natural and synthetic
- Durability: Very good (150-200 industrial wash cycles)
- Wrinkle resistance: Good — significantly reduced ironing
- Cost: ~25% cheaper than 80/20
- Best for: Budget hotels, high-turnover properties, rental linen services

**35/65 Polyester-Cotton (Reverse Blend / CVC)**
- Hand feel: Synthetic-dominant, less breathable
- Durability: Excellent (200+ industrial wash cycles)
- Wrinkle resistance: Excellent — minimal ironing needed
- Cost: ~35% cheaper than 80/20
- Best for: Hospital linens, institutional laundry, extreme-use environments

### The 2026 Tipping Point

Several factors make 2026 a pivotal year for blend reconsideration:

**Factor 1: Cotton Supply Uncertainty**
With El Niño concerns, Xinjiang drought, and global cotton stocks at multi-year lows, cotton prices are expected to remain elevated through at least Q1 2027. This structural price pressure makes polyester substitution economically rational for price-sensitive hotel segments.

**Factor 2: Improved Polyester Technology**
Modern micro-polyester fibers have significantly improved hand feel and moisture wicking properties compared to polyester of a decade ago. High-quality CVC blends are now difficult to distinguish from cotton-rich blends in blind testing.

**Factor 3: Laundry Cost Optimization**
Polyester-rich blends require less water, lower drying temperatures, and shorter finishing time in commercial laundries. A 50/50 blend can reduce per-cycle laundry costs by 15-20% compared to 80/20, a significant consideration for properties operating in-house laundries.

### The Quality Trade-Off

The key trade-offs hotel buyers must evaluate:

| Attribute | 80/20 Cotton | 50/50 Blend | 35/65 CVC |
|-----------|-------------|-------------|-----------|
| Guest comfort perception | ★★★★★ | ★★★☆☆ | ★★☆☆☆ |
| Industrial wash durability | ★★★☆☆ | ★★★★☆ | ★★★★★ |
| Wrinkle recovery | ★★☆☆☆ | ★★★★☆ | ★★★★★ |
| Stain release | ★★★★★ | ★★★☆☆ | ★★☆☆☆ |
| Color retention | ★★★☆☆ | ★★★★☆ | ★★★★★ |
| Raw material cost | Highest | -25% | -35% |
| Laundry cost/cycle | Highest | -15% | -25% |

### Recommendation by Hotel Segment

**Luxury/5-Star**: Maintain 100% cotton or 80/20. Guest experience and brand standards justify the premium.

**Mid-Range/4-Star**: Consider 65/35 T/C for duvet covers and sheets in standard rooms, keeping 80/20 for suites and premium rooms.

**Economy/3-Star**: 50/50 is a strong value proposition. The durability advantage means fewer replacements, offsetting the minor guest perception trade-off.

**Rental Linen Services**: 35/65 CVC or even 100% polyester for maximum cycle life. Rental models prioritize total cost per use over guest perception.

### The Bottom Line

In the current pricing environment, a strategic shift from 80/20 to 65/35 T/C blend for mid-range hotel linens offers an 8-12% procurement cost reduction with acceptable quality trade-offs. For budget properties, 50/50 now delivers a compelling cost-quality balance that was harder to justify when cotton was ¥15,000/ton."""
    },
    {
        "id": "post-auto-20260728-1",
        "date": "2026-07-28T08:00:00Z",
        "category": "cat-market-reports",
        "title": "Cotton Market July 28: Zhengzhou Futures Slip Below 15,900, Textile Demand Remains Subdued",
        "excerpt": "Xinjiang 3128B at ¥17,644/ton (-¥88), Zhengzhou futures 15,830 (-95 pts). State reserve auctions continue. Autumn orders yet to materialize as mills navigate high inventories.",
        "body": """## Cotton Market July 28: Zhengzhou Futures Slip Below 15,900

The Chinese cotton market continued its July correction on July 28, with both physical and futures prices edging lower against a backdrop of weak downstream demand and high mill inventories.

### Today's Key Numbers

- **Xinjiang 3128B physical**: ¥17,644/ton, down ¥88 from previous day
- **Zhengzhou futures main contract**: ¥15,830, down 95 points (-0.60%)
- **Basis (spot - futures)**: ¥1,814/ton — remaining firm
- **32S combed cotton yarn**: ¥23,751/ton — unchanged
- **Polyester staple fiber**: ¥7,465/ton, down ¥25 (-0.33%)
- **Imported Brazilian M1-1/8**: ¥17,935–18,035/ton (USD 83.72–84.72/lb)

### The Basis Puzzle

One of the most notable features of the current market is the stubbornly firm basis — the spread between physical Xinjiang cotton and Zhengzhou futures. At ¥1,814/ton, the basis is near its 90th percentile historically, indicating that physical cotton holders are reluctant to sell at futures-referenced prices.

This basis strength is primarily driven by:
1. Xinjiang drought concerns supporting physical premium
2. State reserve auctions providing a price floor
3. Northern Xinjiang commanding a significant quality premium over Southern Xinjiang production

### Downstream Distress Signals

The textile mill sector is sending multiple caution signals:

**Inventory Build-Up**: Mills are reporting rising yarn and grey fabric inventories, reflecting the gap between production and offtake. The traditional July pre-autumn restocking cycle is notably absent this year.

**Operating Rates**: Some inland mills have begun reducing operating rates from 85-90% to 70-75% as margin pressure intensifies. Yarn margins for 32S combed cotton are near break-even or slightly negative for mills without long-term cotton hedges.

**Import Competition**: Vietnamese and Pakistani cotton yarn continues to gain market share in Chinese coastal textile clusters. Vietnam's C32S combed yarn, in particular, has been competitive on a landed cost basis due to lower domestic cotton prices (India-sourced) and favorable logistics.

### Import Cotton Dynamics

At Qingdao and Shanghai ports, imported cotton trading remains thin. Brazilian and Australian new crop arrivals have improved availability, but domestic buyers are hesitant to commit given the uncertain demand outlook. USDA weekly export sales data turned significantly weaker in late July, confirming the global demand slowdown.

### Autumn/Winter Order Pipeline

The critical variable for the coming weeks is whether autumn/winter textile orders materialize. As of late July, the pipeline remains dry:
- No significant volume orders from domestic apparel brands
- Export orders to the US and EU remain cautious, with buyers placing smaller, more frequent batches
- Grey fabric converters report inquiry levels 20-25% below seasonal norms

### What This Means for Hotel Linen Procurement

For hotel linen buyers, the current market presents:

**Short-Term (Q3 2026)**: Cotton prices likely range-bound between ¥17,000–18,000/ton. The downside is limited by Xinjiang supply concerns; the upside is capped by weak demand. Expect flat to slightly lower FOB pricing for standard hotel linen products.

**Medium-Term (Q4 2026 – Q1 2027)**: The key catalyst will be the Xinjiang harvest outcome. A good harvest could push prices toward ¥16,000; a poor harvest (drought-impacted) could drive prices above ¥19,000. September-October will be the decisive window.

**Purchasing Strategy**: 
- For spot needs: Current prices are not at extremes — proceed with normal procurement
- For Q4 delivery: Consider partial hedging (50-60% of volume at current levels, balance to be priced later)
- For 2027 contract negotiation: Build in a ±10% cotton price adjustment clause"""
    },
    {
        "id": "post-auto-20260729-1",
        "date": "2026-07-29T08:00:00Z",
        "category": "cat-market-reports",
        "title": "Weekly Hotel Linen Market Wrap July 29: Cotton Correction, Trade Talks, and Q3 Outlook",
        "excerpt": "July closed with cotton at ¥17,644 and futures below 15,900. India-US trade talks concluded, polyester-cotton spreads at record, and Q2 textile export data released. Full weekly analysis.",
        "body": """## Weekly Hotel Linen Market Wrap: July 23–29, 2026

The final week of July brought a measured correction in cotton prices, the conclusion of India-US trade negotiations, and mounting questions about the strength of Q3 textile demand recovery.

### Cotton: The Correction Continues

Zhengzhou cotton futures declined 1.2% this week, closing at ¥15,830 on July 28. Physical Xinjiang 3128B followed suit, shedding ¥132 week-over-week to settle at ¥17,644/ton. The correction was orderly — no panic selling, just a gradual adjustment to demand reality.

Key drivers this week:
- State reserve cotton auctions maintained steady volumes but saw slightly lower transaction prices
- Xinjiang crop conditions remained stressed but not catastrophic — the market is pricing in a 5-7% production reduction, not a disaster
- Mill operating rates edged lower across inland provinces
- Imported cotton arrivals (Brazil, Australia) improved port availability

### The Polyester-Cotton Spread Hits Record

Perhaps the most consequential development for hotel linen economics is the record polyester-cotton spread. At ¥7,465/ton, polyester staple fiber costs less than 43% of cotton — the widest spread in 18 months. This differential is driving a structural shift in blend ratios across mid-range and economy hotel linen segments.

### Global Cotton Balance Sheet

The USDA's latest weekly export sales report showed a sharp decline:
- Net upland cotton sales: 34,700 running bales — down 71% from the prior 4-week average
- Major buyers: Vietnam (12,400 RB), China (8,100 RB), Pakistan (6,300 RB)
- Cancellations: Notable reductions from Turkey and Bangladesh

The weak export data reflects the global textile demand slowdown, particularly in price-sensitive markets where currency depreciation against the USD has eroded purchasing power.

### India-US Trade Deal: Initial Read

India and the US concluded interim trade negotiations on July 28. While the full text has not been released, early reports suggest:
- India secured partial tariff relief on select textile categories (HS chapters 52-63)
- The competitive positioning relative to Vietnam and Bangladesh appears marginally improved
- Full implementation timeline: 60-90 days

The immediate market reaction was muted — most buyers and mills had already discounted a positive outcome. The real test will be whether US buyers shift procurement volumes toward India in the coming months.

### Freight Rate Update

Container freight rates remained elevated but stable:
- Shanghai to Rotterdam: $6,850/40ft (flat WoW)
- Shanghai to Los Angeles: $5,120/40ft (+2.1% WoW)
- Shanghai to Genoa: $7,340/40ft (+1.4% WoW)
- Ningbo Containerized Freight Index: 1,867 points (+0.8%)

The West Asia conflict premium has been partially priced in, but any escalation in the Strait of Hormuz region could rapidly push rates 15-25% higher.

### July 2026: The Month in Review

| Metric | July 1 | July 29 | Change |
|--------|--------|---------|--------|
| Xinjiang 3128B (¥/ton) | 17,800 | 17,644 | -0.9% |
| ZCE Cotton Futures | 16,100 | 15,830 | -1.7% |
| 32S Combed Yarn (¥/ton) | 23,800 | 23,751 | -0.2% |
| Polyester Staple (¥/ton) | 7,700 | 7,465 | -3.1% |
| Shanghai-Rotterdam 40ft | $7,000 | $6,850 | -2.1% |
| Indian 29mm Cotton (₹/candy) | 64,000 | 65,000 | +1.6% |
| ICE Cotton (US¢/lb) | 80.69 | ~78.80 | -2.3% |

### Q3 2026 Outlook for Hotel Linen Buyers

**Bearish Factors** (supporting lower prices):
- Weak global textile demand, particularly from Europe
- Improving global cotton supply (Brazil, Australia bumper crops)
- Polyester substitution reducing cotton demand in budget segments
- High mill inventories depressing yarn and fabric prices

**Bullish Factors** (supporting higher prices):
- Xinjiang drought risk — the September harvest is still uncertain
- El Niño intensification could damage India and Australia cotton
- West Asia conflict escalation could spike freight costs
- Potential recovery in autumn/winter order pipeline

**Base Case**: Cotton ¥16,800–18,200/ton range through September, with hotel linen FOB pricing flat to slightly softer. The balance of risks tilts modestly bearish in the near term but highly uncertain heading into the Xinjiang harvest period.

### Action Items for Procurement Teams

1. **Review Blend Specifications**: With the polyester-cotton spread at record levels, evaluate whether your current blend ratios are optimal
2. **Monitor XE Harvest Reports**: August-September Xinjiang crop reports will be the most important market-moving data points
3. **Freight Budget Adjustment**: Build a 10-15% freight contingency for Q4 shipments to account for West Asia risk
4. **Supplier Diversification**: Ensure at least one non-China supplier relationship is active, particularly for India and Pakistan sourcing"""
    },
]

print(f"Publishing {len(ARTICLES)} posts...")

for article in ARTICLES:
    post_id = article["id"]
    body = parse_body(article["body"])
    doc = {
        "_id": post_id,
        "_type": "post",
        "title": article["title"],
        "slug": {"_type": "slug", "current": post_id.replace("post-auto-", "").replace("-1", "")},
        "publishedAt": article["date"],
        "excerpt": article["excerpt"],
        "body": body,
        "category": {"_type": "reference", "_ref": article["category"]},
        "author": {"_type": "reference", "_ref": "author-7745c84e"},
    }

    mutation = {"mutations": [{"createOrReplace": doc}]}
    data = json.dumps(mutation, ensure_ascii=False).encode("utf-8")

    req = urllib.request.Request(API, data=data, headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json; charset=utf-8",
    })

    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read())
            tx = result.get('transactionId', 'N/A')
            print(f"  ✓ {article['id'][:25]}... → tx {tx}")
    except Exception as e:
        print(f"  ✗ {article['id']}: {e}")
        if hasattr(e, 'read'):
            err_body = e.read().decode()[:300]
            print(f"    Response: {err_body}")

print(f"\n✅ Done — {len(ARTICLES)} posts created.")
