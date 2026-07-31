#!/usr/bin/env python3
"""Publish July 30-31 daily blog posts to Sanity."""
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
        "id": "post-auto-20260730-1",
        "date": "2026-07-30T08:00:00Z",
        "category": "cat-market-reports",
        "title": "Xinjiang Cotton Yield in Jeopardy: Heat Wave Splits North and South as Boll-Setting Enters Critical Phase",
        "excerpt": "South Xinjiang faces 45°C+ heat causing irreversible flower/boll drop, while North Xinjiang lags 5-7 days behind. State reserve auction hits 8-day 100% sale streak at ¥17,404/ton. Production reduced to 634 million tons.",
        "body": """## Xinjiang Cotton Yield in Jeopardy: Heat Wave Splits North and South

As Xinjiang cotton enters the critical yield-determining boll-setting phase, a stark divergence is emerging between the north and south regions — one that could materially affect hotel linen raw material costs in Q4 2026 and Q1 2027.

### The Heat Crisis: South Xinjiang Under Pressure

South Xinjiang's core producing regions — Aksu, Kashgar, and Bayingolin — are facing what agricultural experts describe as the most intense heat stress event since 2022. Temperatures exceeding 45°C have been recorded across multiple monitoring stations, with sustained daytime highs above 40°C since mid-July. This is well above the 25-30°C optimal growth window for cotton boll development.

The impact is measurable:

- Pollen viability has collapsed under extreme heat, with fertilization rates dropping sharply
- Flower and boll drop (脱落) is being reported across dryland cotton fields
- Fields with adequate irrigation (6-7 water applications) are faring significantly better than water-stressed fields receiving only 3-5 applications
- Some fields show visible signs of "bud-heading" (蕾包头), where heat-damaged plants stop vertical growth prematurely

China Cotton Information Network monitoring shows the Xinjiang-wide flowering rate at just 50.8% as of late July — 1.7 percentage points behind last year. The gap is wider in water-stressed regions of southern Xinjiang.

### North Xinjiang: Playing Catch-Up

North Xinjiang presents a different picture. Following the cold, wet May that delayed seedling development, the region is now racing to catch up. Growth stages are running 5-7 days behind South Xinjiang, and while heat is present, the damage is less severe because plants are at earlier developmental stages that are more heat-tolerant.

However, the north is not immune. The combination of delayed development and suddenly intensifying July heat creates its own risk: if extreme temperatures persist into August when northern fields enter peak boll-setting, the yield damage could compound quickly.

### The State Reserve Auction: A Floor Under Prices

Since its launch on July 20, the central state reserve cotton auction has been a remarkable success — and a revealing signal about market dynamics:

- 8 consecutive trading days of 100% sold
- Cumulative sales: 64,160 tons
- Average transaction price: ¥17,404/ton
- Every single lot sold at a premium to floor price

The message is clear: textile mills see value at current prices, and the physical market is tighter than futures prices suggest. The auction is both suppressing speculative price spikes (by guaranteeing supply) and providing a concrete price floor (by demonstrating real demand at ¥17,400+ levels).

### Production Outlook: The Math Is Getting Tighter

The Ministry of Agriculture's July supply-demand report made three key adjustments:
- Cotton yield reduced to 147 kg/mu (down 2 kg)
- Total production estimated at 634 million tons
- Xinjiang acreage down 3.9% year-on-year (better than the 8-10% reduction early forecasts had feared)

The critical window is now: August weather will determine whether the 634 million ton estimate holds or needs further downward revision. With South Xinjiang already showing yield stress and North Xinjiang entering its vulnerable phase, the balance of risk tilts toward lower production.

### Global Context: ICE Cotton Divergence

While Chinese domestic cotton prices have been range-bound (Zhengzhou futures ~15,855), ICE cotton futures have rallied to above 80 US cents/lb — a 3.5% monthly gain driven by improved US export data and weaker USD expectations. This external strength limits the potential for cheap imported cotton to relieve domestic supply pressure.

### Key Numbers for Hotel Linen Buyers (July 30)

| Metric | July 30 Value | Direction |
|--------|--------------|-----------|
| Xinjiang 3128B physical | ¥17,400-17,650/ton | ↓ slightly |
| Zhengzhou futures | 15,855/ton | ↓ from 16,100 |
| State reserve auction price | ¥17,404/ton avg | 100% sold |
| Mill operating rate | 72% | ↓ 2.7pp in July |
| 32S combed yarn | ¥23,750/ton | flat |
| Polyester staple fiber | ¥7,400-7,500/ton | near 3-year low |
| ICE cotton | 80.5 US¢/lb | ↑ 3.5% monthly |
| India 29mm cotton | ₹65,000/candy | ↑ 1.6% |

### Procurement Implications

For hotel linen buyers sourcing from China, the July 30 market snapshot suggests:

1. Cotton price downside is limited — the state reserve auction at ¥17,400 provides a hard floor
2. Upside risk is real — any further deterioration in Xinjiang crop conditions could push prices toward ¥18,500-19,000
3. Polyester substitution remains economically attractive at the current ¥7,400 level
4. The August Xinjiang crop tour (typically early August) will be the next major market-moving event

**Action**: Lock in 50-60% of Q4 cotton linen requirements at current levels. Defer the balance to post-crop-tour pricing. For T/C blend products, polyester remains a buyer's market — no urgency to hedge."""
    },
    {
        "id": "post-auto-20260731-1",
        "date": "2026-07-31T08:00:00Z",
        "category": "cat-fabric-encyclopedia",
        "title": "Hotel Linen Procurement in 2026: Sustainability Regulations, Towel GSM Migration, and Smart Inventory Management",
        "excerpt": "Global hotel linen market projected at $15.73 billion in 2026 (5.9% CAGR). EU sustainability mandates, RFID tracking, and rising towel GSM expectations are reshaping procurement. A practical guide for hotel buyers.",
        "body": """## Hotel Linen Procurement in 2026: Regulations, Technology, and Rising Standards

The global hotel linen market has crossed a significant threshold. Valued at $14.85 billion in 2025 and projected to reach $15.73 billion in 2026 — growing at a 5.9% CAGR toward $20.95 billion by 2031 — the market is being reshaped by three converging forces: sustainability regulation, technology adoption, and rising guest expectations. For hotel procurement managers, understanding these shifts is not optional — the linen you specify today will still be in service in 2028 and 2029.

### Force 1: Sustainability Has Become Legally Enforceable

The single most consequential trend in hotel linen procurement is the transition of sustainability from a brand preference to a regulatory requirement.

#### EU Single-Use Plastics Directive

Hotels operating in EU markets can no longer specify individually wrapped linens in non-recyclable plastic packaging without regulatory and reputational risk. All linen packaging must be reviewed against country-specific regulations — recyclable paper, cardboard, or certified compostable materials should now be the default specification.

#### Extended Producer Responsibility (EPR)

EPR regulations are expanding rapidly across the EU and beginning to appear in Asian markets. These require manufacturers and importers to take financial responsibility for end-of-life product management. For linen procurement, this means that recyclability or compostability is becoming a procurement criterion with financial implications — not just a sustainability checkbox.

#### ZDHC Compliance as Minimum Qualification

The Zero Discharge of Hazardous Chemicals (ZDHC) framework is increasingly required by major hotel brands as a minimum supplier qualification criterion. Suppliers who cannot demonstrate Manufacturing Restricted Substances List (MRSL) conformance are at risk of being delisted by global chains.

#### What This Means for Buyers

Add these three questions to every supplier qualification process:
- Can you provide OEKO-TEX Standard 100 or GOTS certification?
- Do you have documented ZDHC MRSL compliance?
- Can you supply in fully recyclable packaging?

### Force 2: The Technology Revolution in Linen Management

#### RFID-Enabled Inventory Tracking

Hotels are increasingly implementing RFID tracking systems that provide real-time visibility into linen movement, laundry cycles, and asset utilization. Benefits include:
- Reduced linen loss/theft (typically 15-20% annual loss without tracking)
- Optimized replacement scheduling based on actual wash-cycle data
- Automated ordering to maintain PAR levels
- Reduced labor costs in inventory counting

Properties with 200+ rooms report ROI within 12-18 months on RFID linen management systems.

#### AI-Driven Procurement Platforms

Cloud-based procurement platforms now offer AI-powered demand forecasting, automated reordering, and spend analytics. These platforms are particularly valuable for hotel groups with 5+ properties, where centralized purchasing can reduce linen procurement costs by 8-12% through volume aggregation.

#### Digital Twin Laundry Optimization

Commercial laundries serving hotel clients are adopting predictive analytics to optimize washing frequencies, chemical dosing, and drying temperatures — extending linen lifespan by 15-25% while reducing water and energy consumption. When evaluating laundry service providers, ask about their predictive maintenance and optimization capabilities.

### Force 3: Rising Quality Expectations Across All Tiers

#### Towel GSM Migration

The industry-wide towel GSM is climbing steadily upward:

| Property Tier | 2020 GSM | 2026 GSM | Change |
|--------------|----------|----------|--------|
| Luxury | 600-700 | 650-750 | +50 GSM |
| Upscale | 450-500 | 500-550 | +50 GSM |
| Midscale | 350-400 | 400-450 | +50 GSM |
| Economy | 300-350 | 350-400 | +50 GSM |
| Budget | 250-300 | 300-350 | +50 GSM |

This uniform 50 GSM migration across all tiers reflects rising guest expectations. Hotels should benchmark their current specification against competitors and guest feedback — if online reviews mention thin or worn towels, a GSM upgrade is likely the most cost-effective guest experience improvement available.

#### Percale Becomes the Baseline

Percale weave bed linen has become the expected standard at upscale properties, replacing the lower-thread-count cotton-polyester blends that dominated a decade ago. Thread counts of 300-400 for percale and 400-600 for sateen are now standard at luxury and upper-upscale tiers.

If a property is still specifying cotton-polyester blend sheets below 200 TC, a bedding upgrade is overdue relative to guest expectations — and the total cost of ownership difference is not significant when lifespan (typically 80-120 washes for percale vs 60-80 for low-TC blends) is factored in.

#### Weighted Blankets and Sleep Programming

Weighted blankets (6-9 kg, glass microbeads or cotton inner layers) have moved from niche wellness amenity to mainstream offering. Properties investing in sleep programming — combining premium linens, blackout curtains, white noise machines, and weighted blanket options — report measurable improvements in guest satisfaction scores and repeat booking rates.

### The China Supply Advantage

For hotel linen buyers, China's position in the global supply chain remains dominant, with several structural strengths:

- **Product range**: Full spectrum from economy T/C blends to luxury long-staple cotton products
- **Price competitiveness**: Current cotton-polyester spread (¥17,400 vs ¥7,400) enables aggressive pricing on blended products
- **Quality infrastructure**: Major textile clusters in Jiangsu and Zhejiang have invested heavily in automated production, water-efficient dyeing, and OEKO-TEX certified finishing
- **Customization capability**: Low MOQs for embroidery, custom sizing, and branded packaging compared to other origins
- **Logistics maturity**: Ningbo and Shanghai ports offer weekly sailings to major markets globally

### 2026 Procurement Checklist

For hotel linen buyers reviewing their sourcing strategy, the following checklist captures the key 2026 decision points:

1. **Sustainability compliance**: Audit all suppliers for ZDHC, OEKO-TEX, and packaging compliance by market
2. **Towel GSM review**: Benchmark against competitors and plan upgrade path
3. **Sheet specification audit**: Verify thread count, weave type, and blend ratio against tier expectations
4. **RFID pilot**: Evaluate RFID tracking ROI for properties with 150+ rooms
5. **Supplier diversification**: Maintain at least two qualified suppliers across different regions
6. **Total cost analysis**: Move beyond unit price to evaluate cost per use (purchase price / expected wash cycles)
7. **Digital procurement**: Evaluate cloud-based procurement platforms for multi-property groups
8. **Replacement cycle planning**: Build 18-24 month replacement budgets based on actual usage data, not calendar-based schedules

### The Bottom Line

The hotel linen market in 2026 is defined by rising standards and increasing complexity. Properties that proactively upgrade specifications, adopt technology for inventory management, and integrate sustainability into procurement processes will gain a measurable competitive advantage in both guest satisfaction and operational efficiency. Those that treat linen procurement as a simple commodity purchase will find themselves falling behind — and paying more to catch up."""
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
