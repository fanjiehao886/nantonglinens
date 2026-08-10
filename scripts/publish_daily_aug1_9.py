#!/usr/bin/env python3
"""Publish August 1-9 daily blog posts to Sanity."""
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
    # Aug 1 - Market Report
    {
        "id": "post-auto-20260801-1",
        "date": "2026-08-01T08:00:00Z",
        "category": "cat-market-reports",
        "title": "August Opens with Cotton Steady: State Reserve Hits 12-Day Perfect Streak as Market Awaits Harvest Clarity",
        "excerpt": "Xinjiang 3128B holds at ¥17,400/ton, Zhengzhou futures flat at 15,855. State reserve auction maintains 100% clearance through 12 sessions. August weather will decide whether yield forecasts hold or slip further.",
        "body": """## August Opens with Cotton Steady as Market Awaits Harvest

The Chinese cotton market entered August in a state of suspended animation — prices range-bound, futures flat, and all eyes turned toward Xinjiang's cotton fields where the next six weeks will determine whether 2026/27 production forecasts hold.

### Price Snapshot (August 1)

- Xinjiang 3128B machine-picked: ¥17,400-17,500/ton (flat)
- Zhengzhou CF609 futures: 15,855/ton (intraday range 15,780-15,920)
- CC Index 3128B: ¥17,393/ton
- 32S combed cotton yarn: ¥23,751/ton (flat)
- Polyester staple fiber: ¥7,400/ton (near 3-year low)
- Cotton-polyester spread: ¥9,993/ton (near record)

### State Reserve Auction: The Perfect Streak Continues

The central state reserve cotton auction has now completed 12 consecutive trading days with a 100% clearance rate. Cumulative sales have reached approximately 80,000 tons, with average transaction prices gradually easing from the opening ¥17,404/ton toward ¥17,190/ton.

The auction's success reveals two important market dynamics:

First, real demand exists at current price levels. Textile mills are not speculating — they are buying cotton they need for production. This provides a concrete price floor.

Second, the gradual decline in average transaction prices suggests the most urgent mill demand has been satisfied. Subsequent sessions may see more selective bidding, particularly as August progresses and mills assess their autumn order books.

### August: The Yield-Determining Month

The cotton industry adage "July determines the year" is being tested in 2026. While July's heat stress was significant, August is when cotton bolls reach their final weight — and current conditions are not encouraging.

The Xinjiang Climate Center's August forecast predicts temperatures 1.2-2.8°C above normal across all cotton regions, with northern Xinjiang and eastern Xinjiang seeing temperatures 2°C+ above average. High-temperature events of 35°C+ are expected to be widespread and sustained.

The critical risk is boll shedding. Cotton plants under heat stress will abort bolls to conserve resources. Each aborted boll represents lost yield that cannot be recovered. The next 3-4 weeks are the window where this damage crystallizes.

### Commercial Inventory: Destocking Accelerating

National cotton commercial inventory stood at 248 million tons as of July 31, down 11.8 million tons week-on-week. The accelerated destocking reflects:
- Mills drawing down stocks rather than buying spot cotton (preferring reserve auction cotton)
- Reduced import arrivals as Chinese buyers remain hesitant
- Tighter physical availability supporting spot basis

The basis (spot - futures spread) remains firm at ¥1,800+/ton, indicating that physical cotton holders are confident in their negotiating position.

### What This Means for Hotel Linen Buyers

The August market presents a window of price stability before the September harvest clarity arrives. For hotel linen procurement:

1. Current cotton prices are not at extremes — ¥17,400 is within the July trading range
2. The polyester-cotton spread at nearly ¥10,000 makes T/C blend products exceptionally cost-effective
3. Risk of price spikes exists if August weather deteriorates further
4. The September-October harvest period will bring price volatility — plan accordingly

**Recommendation**: For Q4 delivery requirements, consider pricing 40-50% of volume now at current levels. For T/C blend products, current polyester pricing offers excellent value — no need to delay."""
    },
    # Aug 2 - Fabric Encyclopedia
    {
        "id": "post-auto-20260802-1",
        "date": "2026-08-02T08:00:00Z",
        "category": "cat-fabric-encyclopedia",
        "title": "Hotel Towel GSM Guide: Choosing the Right Weight for Every Property Tier in 2026",
        "excerpt": "From 300 GSM economy to 750 GSM luxury, towel weight directly impacts guest perception, laundry costs, and replacement cycles. A practical specification guide with 2026 pricing benchmarks.",
        "body": """## Hotel Towel GSM Guide: Choosing the Right Weight

GSM (grams per square meter) is the single most important specification for hotel towels. It determines absorbency, drying time, durability, guest perception, and total cost of ownership. In 2026, with cotton at ¥17,400/ton and guest expectations rising across all property tiers, getting GSM right is both more important and more nuanced than ever.

### What GSM Actually Means

GSM measures the weight of fabric per square meter. For towels, higher GSM means more cotton fiber per unit area, which generally translates to:

- Greater absorbency (more fibers to hold water)
- Softer hand feel (more loops and pile density)
- Longer drying time (more mass to dry)
- Higher initial cost (more raw material)
- Potentially shorter lifespan if laundry cycles are optimized for speed

The relationship between GSM and performance is not linear. A jump from 400 to 500 GSM produces a noticeable quality improvement, while a jump from 600 to 700 GSM yields diminishing returns for most hotel applications.

### GSM Tiers and Their Applications

**300-350 GSM (Economy/Budget)**
- Best for: Budget hotels, motels, gym pools, high-turnover facilities
- Absorbency: Adequate but not plush
- Drying time: Fast (40-50 minutes in commercial dryer)
- Wash cycles: 80-100 before noticeable wear
- Cost reference: ¥18-25 per bath towel (FOB China)
- Guest perception: Functional, not luxurious

**350-400 GSM (Midscale)**
- Best for: 3-star hotels, limited-service properties, staff towels
- Absorbency: Good
- Drying time: Moderate (50-60 minutes)
- Wash cycles: 100-120
- Cost reference: ¥25-35 per bath towel
- Guest perception: Acceptable for the price point

**400-500 GSM (Upscale)**
- Best for: 4-star hotels, resort properties, boutique hotels
- Absorbency: Very good
- Drying time: 60-75 minutes
- Wash cycles: 120-150
- Cost reference: ¥35-50 per bath towel
- Guest perception: Good quality, meets expectations

**500-600 GSM (Luxury)**
- Best for: 5-star hotels, luxury resorts, premium spa properties
- Absorbency: Excellent
- Drying time: 75-90 minutes
- Wash cycles: 150-200
- Cost reference: ¥50-80 per bath towel
- Guest perception: Premium, plush, luxurious

**600-750 GSM (Ultra-Luxury)**
- Best for: Ultra-luxury properties, presidential suites, spa signature towels
- Absorbency: Exceptional
- Drying time: 90-120 minutes
- Wash cycles: 200+ with proper care
- Cost reference: ¥80-150+ per bath towel
- Guest perception: Exceptional, memorable

### The 2026 GSM Migration

The industry-wide trend of GSM upgrading continues in 2026. Properties that specified 400 GSM in 2022 are now moving to 500 GSM. This migration is driven by:

1. Rising guest expectations influenced by social media and luxury brand marketing
2. Online review dynamics — towel quality is frequently mentioned in reviews
3. Competitive pressure — neighboring properties upgrading creates expectations
4. Improved laundry technology — modern tunnel washers handle heavier towels more efficiently

### The Total Cost of Ownership Calculation

Many procurement managers focus on unit price and overlook the total cost of ownership. Here is a practical comparison:

| Metric | 400 GSM | 500 GSM | 600 GSM |
|--------|---------|---------|---------|
| Unit cost (FOB) | ¥35 | ¥45 | ¥60 |
| Wash cycles | 120 | 150 | 180 |
| Cost per use | ¥0.29 | ¥0.30 | ¥0.33 |
| Drying cost/use | ¥0.08 | ¥0.10 | ¥0.13 |
| Total cost/use | ¥0.37 | ¥0.40 | ¥0.46 |

The cost-per-use difference between 400 and 500 GSM is just ¥0.03 — a small price for a meaningful quality upgrade that improves guest satisfaction scores.

### Cotton Quality Interaction

GSM alone does not determine towel quality. The cotton fiber used matters enormously:

- **Regular cotton (29mm)**: Adequate for economy and midscale towels. Lower cost, slightly rougher hand feel.
- **Long-staple cotton (33-35mm)**: Recommended for upscale and luxury. Softer, stronger, better absorbency.
- **Extra-long-staple cotton (38mm+, Xinjiang/Egyptian/Pima)**: Ideal for luxury and ultra-luxury. Exceptional softness and durability.

A 500 GSM towel made with long-staple cotton will outperform a 600 GSM towel made with regular cotton in both hand feel and durability.

### Specification Recommendations by Property Type

**Luxury/5-Star**: 600-700 GSM, 100% long-staple cotton, zero-twist or low-twist construction, 70x140cm bath towel minimum

**Upscale/4-Star**: 500-550 GSM, 100% cotton (long-staple preferred), 70x140cm

**Midscale/3-Star**: 450-500 GSM, 100% cotton or 80/20 cotton/polyester blend, 70x135cm

**Economy/2-3 Star**: 350-400 GSM, cotton or cotton/polyester blend, 65x130cm

**Resort/Pool**: 400-450 GSM quick-dry construction, 80/20 cotton/polyester blend for faster drying

### Procurement Tips

1. Always request physical samples before committing to volume orders
2. Specify GSM, cotton type, dimensions, and construction in your purchase order
3. Test wash performance — some "500 GSM" towels lose 10-15% of weight after 5 washes
4. Consider the " GSM + cotton type" combination rather than GSM alone
5. For properties with in-house laundry, factor drying time into your GSM decision"""
    },
    # Aug 3 - Market Report
    {
        "id": "post-auto-20260803-1",
        "date": "2026-08-03T08:00:00Z",
        "category": "cat-market-reports",
        "title": "Xinjiang August Forecast: Temperatures 1.2-2.8C Above Normal as Boll Weight Phase Begins",
        "excerpt": "Xinjiang Climate Center predicts widespread 35C+ heat through August. Marcus Weather estimates up to 5% yield reduction. Cotton fields enter critical boll-weight phase with irrigation water tightening.",
        "body": """## Xinjiang August Forecast: Heat Stress Intensifies

The Xinjiang Climate Center's August climate trend prediction, released July 31, confirms what cotton market participants feared: the heat wave that stressed crops through July will intensify rather than abate in August.

### The August Temperature Forecast

The forecast predicts:
- Average temperatures 1.2-2.8°C above historical normals across all Xinjiang cotton regions
- Northern Xinjiang and eastern Xinjiang: temperatures 2°C+ above normal
- 35°C+ high-temperature events: widespread and sustained
- Precipitation: below normal across most cotton regions

For cotton in the boll-weight phase (August), sustained temperatures above 35°C cause:
- Accelerated boll opening before fibers are fully developed (reducing lint weight and quality)
- Increased water demand at a time when irrigation supplies are tightening
- Elevated risk of boll shedding in water-stressed fields

### Yield Impact Estimates

Marcus Weather, a US-based agricultural meteorology firm, estimates that sustained high temperatures and drought could reduce Xinjiang cotton yields by up to 5% in August. This would bring the 2026/27 production estimate down from the Ministry of Agriculture's 634 million tons toward approximately 602 million tons — a significant reduction.

Chinese agricultural survey teams report a more nuanced picture:
- Well-irrigated fields (6-7 water applications): growth is adequate, yield potential maintained
- Water-stressed fields (3-5 water applications): stunted plants, fewer fruiting branches, reduced boll counts
- Regional divergence: South Xinjiang worse than North Xinjiang; Ili and Changji showing concerning variability

### The "Easy to Decrease, Hard to Increase" Consensus

Individual growers, large-scale leaseholders, and cotton processing enterprises are converging on a sober assessment: the 2026/27 Xinjiang yield pattern will be "easy to decrease, hard to increase." The proportion of acreage expected to maintain or increase yield is shrinking, while the proportion facing yield declines is expanding.

This is not a disaster scenario — it is a gradual deterioration that compounds across thousands of hectares. The market impact is not a price spike but a persistent floor under cotton prices through the harvest period.

### Irrigation Water: The Decisive Variable

Most cotton fields require 3-4 more irrigation cycles before defoliant application in late August. Water availability is becoming the single most important variable:

- Northern Xinjiang: water supply adequate but timing becoming critical
- Southern Xinjiang: significant water stress in Aksu and Kashgar regions
- Ili region: uneven water distribution causing field-to-field yield divergence

Agricultural extension services are advising farmers to shift management focus to "promoting top-boll development and preventing premature senescence" — reducing phosphorus and potassium fertilizer while increasing nitrogen to support late-stage boll growth.

### Ginning Plant Dilemma

The deteriorating yield outlook is creating a difficult situation for ginning plants. Based on current spot cotton prices (¥17,400/ton) and cottonseed prices (¥2.40-2.50/kg), an opening seed cotton purchase price of ¥7.00/kg would leave most ginning plants facing an inverted cost structure — where production costs exceed potential sales revenue.

Cotton farmers, however, are expecting opening prices of ¥7.50/kg or higher. The gap between ginning plant economics and farmer expectations sets up a potentially tense September harvest negotiation period.

### Market Price Impact

The August weather forecast is supporting cotton prices:

- Xinjiang 3128B physical: ¥17,500-17,600/ton (up from late July)
- Zhengzhou futures: testing the 16,000 resistance level
- Spot basis: firm at ¥1,800+/ton
- Import cotton: Brazilian and Australian arrivals providing partial supply relief

### Procurement Implications

For hotel linen buyers, the August weather forecast reinforces the case for timely procurement:

1. Cotton prices are likely to remain elevated through September
2. The yield risk is real but not catastrophic — prices are unlikely to spike dramatically
3. The September harvest will bring price volatility as ginning plants and farmers negotiate
4. T/C blend products remain the best value proposition given the record cotton-polyester spread

**Action**: If Q4 linen orders are not yet placed, initiate the process now. Current pricing is favorable relative to the risk of September-October volatility."""
    },
    # Aug 4 - Market Report
    {
        "id": "post-auto-20260804-1",
        "date": "2026-08-04T08:00:00Z",
        "category": "cat-market-reports",
        "title": "Cotton Yarn Prices Flat as Mill Inventories Rise: Downstream Demand Remains Subdued",
        "excerpt": "32S combed yarn at ¥23,377/ton, 21S at ¥22,700. Mill operating rates declining, yarn inventory days increasing to 23.1. Grey fabric orders 20-25% below seasonal norms.",
        "body": """## Cotton Yarn Prices Flat as Mill Inventories Rise

The cotton yarn market is sending mixed signals in early August: prices are stable, but the underlying demand dynamics are weakening. For hotel linen buyers, this divergence creates both opportunity and risk.

### Yarn Price Snapshot (August 4)

- 32S combed cotton yarn: ¥23,377-23,751/ton (flat to slightly down)
- 21S combed cotton yarn: ¥22,700/ton (flat)
- 40S combed cotton yarn: ¥25,000-25,800/ton
- T/C 65/35 32S blended yarn: ¥16,500-17,000/ton
- CVC 60/40 32S: ¥19,500-20,000/ton
- Imported Vietnam C32S: competitive on landed cost basis

### The Inventory Build-Up

Textile mill data reveals a concerning trend:

- Yarn inventory days: 23.1 (up 6.35 days from previous period)
- Grey fabric inventory days: 31.6 (up 4.03 days)
- Mill operating rates: declining from 85-90% to 70-75% in some regions

The rising inventory and falling operating rates tell a clear story: production is outpacing demand. Mills are producing yarn but downstream fabric converters and garment manufacturers are not buying at the same pace.

### Downstream Demand Assessment

The demand picture across the textile value chain:

**Grey Fabric Mills**: Operating rates at 39.1% (down 2% monthly). New orders are scarce, particularly for autumn/winter fabric programs that typically drive August-September demand.

**Apparel Manufacturers**: Export orders to the US and EU remain cautious, with buyers placing smaller, more frequent batches rather than large seasonal commitments. The India-US trade deal has marginally improved Indian competitiveness but has not triggered significant volume shifts.

**Hotel Textile Segment**: Relatively resilient compared to apparel. Hotel linen replacement cycles are less discretionary than fashion purchases. However, new hotel opening schedules have slipped slightly in some markets, delaying first-fit orders.

**Import Competition**: Vietnamese and Pakistani cotton yarn continues to gain market share in Chinese coastal textile clusters. Vietnam's C32S combed yarn is particularly competitive due to lower domestic cotton costs and favorable logistics.

### The Cotton-Yarn Spread

The spread between cotton raw material and yarn prices is a key indicator of mill profitability:

- Cotton (3128B): ¥17,393/ton
- 32S combed yarn: ¥23,751/ton
- Spread: ¥6,358/ton

This spread covers spinning costs (typically ¥4,500-5,500/ton for 32S) and provides a thin mill margin of ¥800-1,800/ton. For mills without long-term cotton hedges, the margin is near break-even — explaining the declining operating rates.

### State Reserve Auction Impact on Yarn Market

The state reserve cotton auction is having a nuanced effect on the yarn market:

- Mills buying reserve cotton at ¥17,190/ton (vs spot ¥17,400) achieve a ¥200/ton cost saving
- This saving is insufficient to meaningfully reduce yarn prices but prevents price increases
- The auction is channeling cotton to mills with genuine production needs rather than speculators
- Total auction volume through August 4: approximately 96,222 tons

### What This Means for Hotel Linen Buyers

The current yarn market presents a favorable procurement window:

1. **Yarn prices are stable** — no upward pressure in the near term
2. **Mill margins are thin** — mills are motivated to secure orders at current prices
3. **T/C blend yarn is excellent value** — the cotton-polyester spread makes blended products significantly cheaper
4. **Fabric prices should be negotiable** — with grey fabric inventories rising, converters are under pressure to move stock

**Price Guidance** (FOB China, per piece):
- 300 TC percale sheet set (100% cotton): $8.50-11.00
- 200 TC T/C 65/35 sheet set: $5.50-7.00
- 500 GSM bath towel (100% cotton): $4.50-6.00
- 400 GSM T/C bath towel: $3.00-4.00

**Recommendation**: This is a buyer's market for cotton and T/C textile products. Negotiate firmly — mills and converters need volume. Lock in pricing for Q4 delivery before the September harvest brings potential cotton price volatility."""
    },
    # Aug 5 - Fabric Encyclopedia
    {
        "id": "post-auto-20260805-1",
        "date": "2026-08-05T08:00:00Z",
        "category": "cat-fabric-encyclopedia",
        "title": "Percale vs Sateen: A Technical Comparison for Hotel Bed Linen Specification in 2026",
        "excerpt": "Percale (plain weave) offers crisp durability; sateen (satin weave) delivers silky drape. Thread count, weave structure, and cotton type interact to determine sheet performance. A specification guide for hotel buyers.",
        "body": """## Percale vs Sateen: Weave Structure Determines Sheet Performance

The choice between percale and sateen is one of the most consequential decisions in hotel bed linen specification. It affects guest perception, durability, laundry performance, and cost. Yet many procurement managers make this choice based on marketing materials rather than technical understanding.

### Weave Fundamentals

**Percale (Plain Weave)**
- Construction: One thread over, one thread under (1x1)
- Surface: Matte, crisp, cool to the touch
- Durability: Excellent — the tight interlacing creates a strong fabric
- Breathability: Very good — air passes easily through the regular structure
- Wrinkle resistance: Moderate — percale wrinkles more than sateen
- Drape: Relatively stiff compared to sateen
- Best for: Hotels in warm climates, properties prioritizing crisp clean aesthetics

**Sateen (Satin Weave)**
- Construction: Multiple threads over, one thread under (typically 4x1)
- Surface: Smooth, lustrous, silky sheen
- Durability: Good but lower than percale — longer floats are more prone to snagging
- Breathability: Moderate — the dense surface restricts airflow slightly
- Wrinkle resistance: Good — the smooth surface resists creasing
- Drape: Excellent — fluid and luxurious
- Best for: Luxury properties, hotels in cool climates, properties prioritizing silky hand feel

### Thread Count: Quality vs Marketing

Thread count (TC) is the number of threads per square inch (warp + weft). Higher TC generally means finer yarn and denser fabric — but only up to a point.

**200-300 TC (Standard Hotel Range)**
- Yarn count: 40s-60s combed cotton
- Weight: 120-140 gsm
- Performance: Good durability, crisp hand feel
- Best for: Midscale to upscale hotels
- Cost reference: ¥35-50/meter (FOB China)

**300-400 TC (Premium Range)**
- Yarn count: 60s-80s combed cotton
- Weight: 130-150 gsm
- Performance: Excellent balance of softness and durability
- Best for: Upscale to luxury hotels
- Cost reference: ¥50-75/meter

**400-600 TC (Luxury Range)**
- Yarn count: 80s-120s combed cotton
- Weight: 140-170 gsm
- Performance: Very soft, luxurious drape; durability adequate with proper care
- Best for: Luxury and ultra-luxury properties
- Cost reference: ¥75-120/meter

**600+ TC (Ultra-Luxury / Marketing Claims)**
- Many "1000 TC" products use multi-ply yarns to inflate the count
- True single-ply 600+ TC requires extremely fine yarn and specialized looms
- Diminishing returns in performance vs significant cost increase
- Best for: Marketing differentiation rather than practical performance

### The Cotton Factor

Weave and thread count are meaningless without the right cotton. The fiber quality determines the ultimate performance of the sheet:

**Regular Cotton (29mm staple)**
- Adequate for 200 TC percale
- Cost-effective for midscale properties
- Will pill and roughen after 60-80 wash cycles

**Long-Staple Cotton (33-35mm)**
- Recommended for 300+ TC percale and sateen
- Maintains softness through 100+ wash cycles
- Minimal pilling
- Cost premium: 15-25% over regular cotton

**Extra-Long-Staple Cotton (38mm+, Xinjiang/Egyptian/Pima)**
- Essential for 400+ TC luxury sheets
- Exceptional durability (150+ wash cycles)
- Superior luster and hand feel
- Cost premium: 40-60% over regular cotton

### Construction Variations

**Combed vs Carded**: Combed cotton removes short fibers, producing smoother, stronger yarn. Always specify combed cotton for hotel applications.

**Single-Ply vs Multi-Ply**: Single-pply yarn produces finer, more durable fabric. Multi-ply yarn inflates thread count but reduces quality. Always specify single-ply for hotel sheets.

**Mercerized vs Unmercerized**: Mercerization treats cotton yarn with sodium hydroxide, increasing strength, luster, and dye affinity. Mercerized sheets cost 10-15% more but offer significantly better appearance and longevity.

### Performance Comparison Table

| Attribute | 300 TC Percale | 400 TC Sateen | 500 TC Sateen |
|-----------|---------------|---------------|---------------|
| Hand feel | Crisp, cool | Smooth, silky | Very smooth, luxurious |
| Breathability | Excellent | Good | Moderate |
| Durability (wash cycles) | 120-150 | 100-130 | 90-120 |
| Wrinkle resistance | Moderate | Good | Very good |
| Stain release | Very good | Good | Moderate |
| Color retention | Good | Very good | Excellent |
| Drying time | Fast | Moderate | Longer |
| Cost (FOB per set) | $8-11 | $12-16 | $18-25 |

### 2026 Specification Recommendations

**Luxury/5-Star**: 400-600 TC sateen, extra-long-staple cotton, mercerized, 300+ gsm. The silky drape and lustrous appearance communicate luxury. Accept the higher replacement frequency as a cost of brand positioning.

**Upscale/4-Star**: 300-400 TC percale, long-staple cotton, combed, 250-300 gsm. The crisp, clean appearance of percale communicates quality without the fragility of sateen. Better durability reduces total cost of ownership.

**Midscale/3-Star**: 200-250 TC percale, regular or long-staple cotton, combed, 200-250 gsm. Percale's durability advantage is critical at this tier where laundry cycles are frequent and aggressive.

**Economy**: 180-200 TC percale or T/C 65/35 blend. At this tier, blend ratios matter more than weave — polyester content improves durability and reduces cost.

### Procurement Checklist

When specifying hotel bed linens, include these parameters in your purchase order:
1. Weave type (percale/plain or sateen/satin)
2. Thread count (single-ply, specify explicitly)
3. Yarn count (e.g., 60s combed)
4. Cotton type (regular, long-staple, or extra-long-staple; specify origin if required)
5. Fabric weight (gsm)
6. Mercerization (yes/no)
7. Dimensions with tolerance (e.g., 250cm x 280cm +/- 2cm)
8. Shrinkage requirement (max 3-5% after 5 washes)
9. Color fastness rating (Grade 4+ minimum)"""
    },
    # Aug 6 - Market Report
    {
        "id": "post-auto-20260806-1",
        "date": "2026-08-06T08:00:00Z",
        "category": "cat-market-reports",
        "title": "Cotton Prices Rebound on Weather Fears: Zhengzhou Futures Rally Above 15,990 as Heat Persists",
        "excerpt": "Xinjiang 3128B rises to ¥17,559/ton (+0.85%), Zhengzhou CF609 closes at 15,990 (+1.14%). State reserve auction third week begins with 100% clearance. Weather premium builds as August heat continues.",
        "body": """## Cotton Prices Rebound on Weather Fears

The cotton market found its footing in early August as the reality of sustained Xinjiang heat stress translated into price action. Both physical and futures markets moved higher, breaking the July downtrend.

### Price Action (August 5-6)

- Xinjiang 3128B spot: ¥17,559/ton, up 0.85% single-day (August 5)
- Zhengzhou CF609 futures: closed at 15,990/ton, up 1.14% — second consecutive day of gains
- CC Index: ¥17,393/ton (lagging spot due to calculation methodology)
- Basis (spot - futures): ¥1,569/ton, narrowing as futures catch up
- Cottonseed: ¥2.49/kg (stable)

The rally was driven primarily by supply-side concerns rather than demand improvement. The market is building a weather premium into cotton prices as August heat conditions persist across Xinjiang.

### State Reserve Auction: Third Week

The state reserve cotton auction entered its third week with continued strong demand:
- Cumulative volume (July 20 - August 4): 96,222 tons
- Clearance rate: 100% (every session fully sold)
- Average transaction price: ¥17,191/ton
- Third week floor price: ¥16,166/ton (equivalent to ¥16,166 for standard 3128B grade)

The floor price acts as a policy-driven support level. With Zhengzhou futures at 15,990 (still below the reserve floor of 16,166), the market is signaling that physical cotton is worth more than futures prices suggest.

### Commercial Inventory: Accelerated Destocking

National commercial cotton inventory data shows accelerated destocking:
- July 31: 248 million tons (down 11.8 million tons week-on-week)
- Destocking pace: significantly faster than seasonal norms
- Warehouse receipts (Zhengzhou): 9,903 lots (down week-on-week)

The combination of declining commercial inventory, falling warehouse receipts, and high auction demand creates a tightening physical market — even as the demand side remains weak.

### The Weather Premium

The August weather forecast is the primary bullish driver:

- Xinjiang Climate Center: August temps 1.2-2.8°C above normal
- Marcus Weather: up to 5% yield reduction possible
- Field reports: "easy to decrease, hard to increase" yield consensus
- Irrigation water: tightening across South Xinjiang

The market is pricing in a production reduction of 3-5% from the Ministry of Agriculture's 634 million ton estimate. If August heat persists through mid-month, the discount could deepen.

### Downstream: Still Weak

Despite the cotton price rally, downstream demand remains subdued:

- Mill operating rates: 72% (down from 85-90% in Q2)
- Yarn inventory: 23.1 days (rising)
- Grey fabric orders: 20-25% below seasonal norms
- Export orders: cautious, small batch sizes

The divergence between rising cotton prices and weak downstream demand is unsustainable in the medium term. Either demand must recover to justify higher cotton prices, or cotton prices must retreat to levels mills can absorb.

### Technical Analysis

Zhengzhou CF609 futures:
- Support: 15,700-15,800 (tested and held)
- Resistance: 16,200-16,400 (key level to watch)
- Trend: short-term bullish, medium-term range-bound
- RSI: neutral, not overbought

The market is likely to remain volatile through August as weather reports and field condition surveys drive daily price movements.

### Key Numbers for Hotel Linen Buyers

| Metric | Aug 6 Value | Week Change | Direction |
|--------|------------|-------------|-----------|
| Xinjiang 3128B | ¥17,559/ton | +0.9% | ↑ |
| Zhengzhou futures | 15,990 | +1.1% | ↑ |
| 32S combed yarn | ¥23,377/ton | flat | → |
| Polyester staple | ¥7,400/ton | flat | → |
| Reserve auction avg | ¥17,191/ton | -0.6% | ↓ |
| Commercial inventory | 248M tons | -4.5% | ↓ |

### Procurement Implications

The cotton price rebound reinforces the importance of timely procurement decisions:

1. **Cotton prices are rising** — the weather premium is real and likely to persist through August
2. **Yarn prices have not yet followed** — mills are absorbing the cotton cost increase, but this cannot last
3. **T/C blend products offer a hedge** — polyester at ¥7,400 is unaffected by cotton weather concerns
4. **The September harvest is the wildcard** — a better-than-expected harvest could reverse gains; a poor harvest could accelerate them

**Action**: For cotton-rich linen products (100% cotton sheets, towels), consider pricing orders now before yarn prices adjust upward. For T/C blend products, there is less urgency — polyester prices remain weak and stable."""
    },
    # Aug 7 - Fabric Encyclopedia
    {
        "id": "post-auto-20260807-1",
        "date": "2026-08-07T08:00:00Z",
        "category": "cat-fabric-encyclopedia",
        "title": "RFID Hotel Linen Management: ROI Analysis and Implementation Guide for 2026",
        "excerpt": "RFID-tagged linens reduce loss by 15-20%, cut inventory time by 90%, and deliver ROI in 12-18 months for 200+ room properties. Tag costs now $0.50-1.50. A practical implementation guide.",
        "body": """## RFID Hotel Linen Management: ROI Analysis and Implementation

RFID (Radio Frequency Identification) technology has crossed the cost-effectiveness threshold for hotel linen management. What was a premium technology deployed only by large luxury chains five years ago is now entering mainstream adoption across upscale and upper-midscale properties. For properties with 200+ rooms, the ROI is typically 12-18 months.

### How RFID Linen Tracking Works

Each textile item (sheet, towel, bathrobe, pillowcase) is embedded with a washable RFID chip — a small, flexible tag sewn into a seam or hem. These tags can withstand 200+ industrial laundry cycles and operate at UHF frequencies (860-960 MHz).

The system works through three components:

**1. Tags**: Embedded in each linen item. Cost: $0.50-1.50 per tag depending on volume and form factor. Each tag contains a unique ID number linked to a database record.

**2. Readers**: Fixed readers installed at key choke points (laundry entry/exit, linen closet doors, room corridors) and handheld readers for manual scanning. Fixed reader cost: $2,000-5,000 each. Handheld reader: $500-1,500.

**3. Software Platform**: Cloud-based or on-premises system that tracks each item's location, wash count, and lifecycle status. Software cost: $200-800/month for cloud-based SaaS, or $15,000-50,000 for on-premises license.

### What RFID Tracking Delivers

**Loss Prevention**
- Annual linen loss in hotels averages 15-20% of inventory without tracking
- RFID reduces this to 3-5% by providing real-time visibility
- A 200-room hotel with ¥500,000 in linen inventory saves ¥75,000-100,000 annually

**Inventory Time Reduction**
- Manual linen counts: 4-8 hours per month per floor
- RFID counts: 15-30 minutes per floor (90% reduction)
- Staff time reallocated to guest service and quality improvement

**Wash Cycle Optimization**
- Each item's wash count is tracked precisely
- Items approaching end-of-life are flagged for proactive replacement
- Prevents premature disposal of serviceable linens
- Extends average linen lifespan by 10-15%

**PAR Level Management**
- Automated alerts when inventory falls below PAR (Per Available Room) levels
- Automated reorder triggers to maintain optimal stock
- Prevents overstocking (tying up capital) and understocking (guest complaints)

**Quality Control**
- Tracking which items have been through how many washes
- Identifying patterns of premature wear (potential supplier quality issues)
- Documenting linen lifecycle for warranty claims

### ROI Calculation: 200-Room Hotel

**Investment**:
- RFID tags (2,000 items @ $1.00): $2,000
- Fixed readers (4 @ $3,000): $12,000
- Handheld readers (2 @ $800): $1,600
- Software setup and first year: $6,000
- Total initial investment: $21,600

**Annual Savings**:
- Reduced linen loss (from 18% to 4%): ¥63,000 ($8,700)
- Staff time savings (30 hours/month @ $15/hr): $5,400
- Extended linen lifespan (12.5%): ¥15,000 ($2,100)
- Total annual savings: $16,200

**ROI**: 16 months payback period. Year 2+ net savings: $16,200 annually.

For larger properties (400+ rooms), the ROI improves due to economies of scale on the reader infrastructure.

### Implementation Roadmap

**Phase 1: Assessment (Month 1)**
- Audit current linen inventory and PAR levels
- Document loss rates and replacement patterns
- Calculate potential ROI for your property
- Select RFID system vendor (get 3 quotes)

**Phase 2: Pilot (Month 2-3)**
- Tag one floor or one linen category (e.g., bath towels)
- Install one fixed reader at laundry exit
- Train housekeeping and laundry staff
- Collect baseline data for 4-6 weeks

**Phase 3: Full Rollout (Month 4-6)**
- Tag all linen items
- Install all fixed readers
- Integrate with property management system
- Establish automated alerts and reorder triggers
- Full staff training

**Phase 4: Optimization (Month 7+)**
- Analyze wash cycle data to optimize laundry operations
- Adjust PAR levels based on actual usage patterns
- Use lifecycle data to negotiate better supplier terms
- Review and refine alert thresholds

### Vendor Selection Criteria

When evaluating RFID linen management vendors, consider:

1. **Tag durability**: Request wash-test data (minimum 200 cycles)
2. **Reader range**: Ensure coverage for your laundry and corridor layout
3. **Software integration**: Compatibility with your PMS and procurement systems
4. **Reporting capabilities**: Customizable dashboards and exportable reports
5. **Support and training**: On-site installation and staff training included
6. **Scalability**: System should accommodate future property expansion
7. **Tag form factor**: Tags must be invisible to guests and not affect linen comfort

### Common Pitfalls to Avoid

**Metal Interference**: Metal laundry carts and shelving can block RFID signals. Ensure your vendor accounts for metal in the environment.

**Tag Placement**: Poorly placed tags can be felt by guests or damaged in laundry. Follow vendor recommendations for tag placement on each item type.

**Staff Adoption**: RFID systems only work if staff use them correctly. Invest in thorough training and make the system easy to use.

**Data Quality**: The system is only as good as the data entered. Ensure initial inventory data is accurate and ongoing data entry is disciplined.

### 2026 Market Context

The RFID linen management market is maturing rapidly in 2026:
- Tag costs have fallen 30-40% from 2023 levels
- Software-as-a-Service models eliminate large upfront software costs
- Integration with major PMS platforms (Opera, Mews, Cloudbeds) is now standard
- Several Chinese textile manufacturers offer pre-tagged linens at minimal cost premium

For hotel linen buyers sourcing from China, ask your supplier about pre-tagged options. Many Nantong and Jiangsu factories now offer RFID tag embedding as a value-added service at ¥2-5 per item — a small cost that dramatically improves linen management efficiency."""
    },
    # Aug 8 - Market Report
    {
        "id": "post-auto-20260808-1",
        "date": "2026-08-08T08:00:00Z",
        "category": "cat-market-reports",
        "title": "State Reserve Auction Enters Third Week: 100% Clearance Streak Continues as Inventory Tightens",
        "excerpt": "Cumulative reserve sales surpass 120,000 tons with perfect clearance. Commercial inventory down to 248M tons. Cotton spot at ¥17,730/ton, Zhengzhou futures testing 16,000. Market braces for September harvest.",
        "body": """## State Reserve Auction: Three Weeks of Perfect Clearance

The central state reserve cotton auction has completed its third week with an unbroken 100% clearance rate — a remarkable streak that underscores the tightness of the physical cotton market heading into the September harvest period.

### Auction Performance Summary

- Start date: July 20, 2026
- Sessions completed: 15+ (through August 7)
- Clearance rate: 100% (every lot fully sold)
- Cumulative volume: approximately 120,000+ tons
- Average transaction price: ¥17,070-17,191/ton (gradually declining)
- Third week floor price: ¥16,166/ton (standard 3128B equivalent)

The declining average price is not a bearish signal. It reflects the composition of offered cotton — earlier sessions included higher-grade lots, while later sessions are offering more standard grades. The consistent 100% clearance demonstrates that demand exists at every price level offered.

### Why the Auction Matters

The state reserve auction serves three critical market functions:

**1. Price Floor**: The auction floor price (¥16,166/ton) acts as a policy-driven support level. As long as the auction maintains 100% clearance, this price represents a verified market transaction — not a theoretical support level.

**2. Supply Bridge**: The auction bridges the supply gap between the 2025/26 crop (nearly exhausted) and the 2026/27 harvest (available October-November). Without this bridge, physical cotton would be significantly scarcer and spot prices would be higher.

**3. Demand Barometer**: The clearance rate and transaction premiums reveal real mill demand. The 100% clearance rate tells us mills need cotton now — they are not speculating or building strategic stockpiles.

### Physical Market Tightening

The physical cotton market is tightening on multiple fronts:

**Commercial Inventory**: 248 million tons as of July 31, down 11.8 million tons week-on-week. The destocking pace is accelerating as mills draw down stocks rather than purchase expensive spot cotton.

**Warehouse Receipts**: Zhengzhou warehouse receipts at 9,903 lots and declining. Fewer registered warehouse receipts mean less deliverable cotton against futures contracts — a bullish technical factor.

**Import Cotton**: Port inventories of Brazilian and Australian cotton are declining slowly. Chinese buyers remain hesitant to commit to new import orders given the uncertain demand outlook and the availability of reserve auction cotton.

**Spot Basis**: The basis between physical Xinjiang cotton and Zhengzhou futures remains firm at ¥1,500-1,800/ton. This persistent premium reflects the scarcity of immediately available physical cotton.

### Price Snapshot (August 8)

| Metric | Value | Weekly Change |
|--------|-------|---------------|
| Xinjiang 3128B (machine-picked) | ¥17,730-17,780/ton | +1.5% |
| Zhengzhou CF609 | ~15,990-16,050 | +0.8% |
| CC Index | ¥17,393/ton | flat |
| 32S combed yarn | ¥23,377/ton | flat |
| Polyester staple | ¥7,400/ton | flat |
| Cottonseed | ¥2.49/kg | flat |
| Indian 29mm cotton | ₹65,000/candy | +1.6% |
| ICE cotton | ~80.5 US¢/lb | +3.5% (monthly) |

### The September Harvest: What to Expect

The cotton market is entering its most volatile period. The September-October harvest will bring:

**Yield Uncertainty**: The "easy to decrease, hard to increase" consensus suggests yields will disappoint. The question is by how much — a 3% reduction is manageable; a 5-8% reduction would be significant.

**Price Negotiation**: Ginning plants and cotton farmers are far apart on opening purchase price expectations (¥7.00 vs ¥7.50/kg). This gap could delay harvest purchases and extend the period of tight physical supply.

**New Crop Quality**: Heat-stressed cotton may have shorter fiber length and lower strength, affecting yarn quality and ultimately hotel linen fabric quality. Buyers should pay close attention to new crop quality reports.

**Global Context**: US, Indian, and Brazilian crop conditions will also influence prices. A global supply shortfall would amplify Xinjiang-specific concerns.

### Procurement Strategy for August-September

For hotel linen buyers, the current market environment calls for a balanced approach:

**Do Now (August)**:
- Price 40-50% of Q4 cotton-rich linen orders at current levels
- Lock in T/C blend product pricing (polyester is unaffected by cotton weather)
- Place orders for items with longer lead times (custom embroidery, special sizes)

**Defer (September)**:
- 30% of Q4 orders — wait for initial harvest reports to assess price direction
- If harvest is good: prices may dip 3-5%, offering better value
- If harvest disappoints: prices will rise, but 50% coverage limits exposure

**Contingency (October)**:
- Remaining 20% of Q4 orders — priced based on actual harvest data
- Build 5-10% price contingency into budgets for cotton-rich products

**Risk Management**:
- Maintain supplier relationships in multiple countries (China + India/Pakistan)
- Consider split shipments to reduce single-vessel risk
- Build 2-week buffer stock to absorb delivery delays"""
    },
    # Aug 9 - Market Report / Weekly Wrap
    {
        "id": "post-auto-20260809-1",
        "date": "2026-08-09T08:00:00Z",
        "category": "cat-market-reports",
        "title": "Weekly Hotel Linen Market Wrap August 9: Cotton Rebounds, Yarn Flat, Harvest Looms",
        "excerpt": "Cotton rallied 1.5% on Xinjiang heat concerns while yarn prices stayed flat. State reserve auction hit 3-week perfect streak. Polyester at record low. Full weekly analysis and Q4 procurement strategy.",
        "body": """## Weekly Hotel Linen Market Wrap: August 3-9, 2026

The first full week of August brought a decisive shift in cotton market sentiment. Weather-driven supply concerns pushed prices higher, while downstream demand remained subdued — creating a divergence that defines the current procurement environment.

### Cotton: Weather Premium Builds

The week's most significant development was the cotton price rally:

| Metric | Aug 2 | Aug 9 | Change |
|--------|-------|-------|--------|
| Xinjiang 3128B | ¥17,400/ton | ¥17,730/ton | +1.9% |
| Zhengzhou CF609 | 15,855 | ~16,050 | +1.2% |
| CC Index | ¥17,393 | ¥17,393 | flat |
| Basis (spot-futures) | ¥1,545 | ¥1,680 | widening |

The rally was driven entirely by supply-side factors:

1. **August heat forecast**: Xinjiang Climate Center predicts temperatures 1.2-2.8°C above normal, with sustained 35°C+ events
2. **Yield downgrade risk**: Marcus Weather estimates up to 5% yield reduction; Chinese survey teams report "easy to decrease, hard to increase" pattern
3. **Physical market tightening**: Commercial inventory at 248M tons (down 11.8M week-on-week), warehouse receipts declining
4. **Reserve auction support**: 100% clearance rate through 15+ sessions provides a verified price floor at ¥16,166/ton

### Yarn: The Divergence

While cotton prices rose, yarn prices remained flat — creating a margin squeeze for spinning mills:

| Yarn Type | Price | Weekly Change |
|-----------|-------|---------------|
| 32S combed | ¥23,377/ton | flat |
| 21S combed | ¥22,700/ton | flat |
| 40S combed | ¥25,000/ton | flat |
| T/C 65/35 32S | ¥16,750/ton | flat |

The flat yarn prices reflect weak downstream demand:
- Mill operating rates: 72% (declining)
- Yarn inventory: 23.1 days (rising)
- Grey fabric orders: 20-25% below seasonal norms

This divergence is temporary. If cotton prices remain elevated, yarn prices will eventually follow — typically with a 2-3 week lag. Hotel linen buyers should expect yarn price increases of 1-3% in late August if cotton holds above ¥17,500.

### Polyester: The Value Story

Polyester staple fiber remained at ¥7,400/ton — near three-year lows and unchanged for the third consecutive week. The cotton-polyester spread widened to ¥10,330/ton, the highest level in over 18 months.

This spread has profound implications for hotel linen economics:

**Cost Comparison (per sheet set, FOB China)**:
- 100% cotton 300 TC percale: $8.50-11.00
- T/C 65/35 200 TC: $5.50-7.00
- Savings from T/C blend: 35-37%

For budget and midscale hotel properties, the economic case for T/C blends has never been stronger. Even upscale properties should consider T/C blends for back-of-house linens (staff uniforms, cleaning cloths, non-guest-facing items).

### State Reserve Auction: The Perfect Streak

The central reserve cotton auction completed its third week with a 100% clearance rate:
- Cumulative volume: 120,000+ tons
- Average price: ¥17,070-17,191/ton (gradually declining as offered grades shift)
- Third week floor price: ¥16,166/ton

The auction's success confirms that real mill demand exists at current price levels. This is not speculative buying — it is production-driven procurement.

### Global Context

**ICE Cotton**: Rallied to above 80 US¢/lb, gaining 3.5% in July. The external strength limits the potential for cheap imported cotton to relieve domestic supply pressure.

**Indian Cotton**: 29mm spot at ₹65,000/candy, up 1.6% in July. Indian textile exports remain competitive following the India-US interim trade deal.

**US Cotton**: USDA export sales data turned significantly weaker in late July, confirming the global demand slowdown. However, US crop conditions are improving, which could add to global supply in Q4.

**Freight Rates**: Container rates remained elevated but stable:
- Shanghai to Rotterdam: $6,850/40ft
- Shanghai to Los Angeles: $5,120/40ft
- Shanghai to Genoa: $7,340/40ft

### New Capacity: Hotel Linen Production Expanding

A notable development in the textile sector: Xinjiang Jiepeng Textile Technology has officially commenced production, with an annual capacity of 12.5 million meters of home textile fabric and 800,000 sets of high-end hotel linens. This adds meaningful hotel linen production capacity in Xinjiang, potentially reducing transportation costs for cotton-rich products (cotton sourced and processed in the same region).

Additionally, Xinjiang Ruihong Textile has commissioned a 500,000-spindle intelligent spinning line, producing 260 tons/day of high-quality 40s pure cotton yarn — primarily supplying Guangdong and Jiangsu textile clusters.

### August 2026: Key Metrics Summary

| Metric | Aug 1 | Aug 9 | Change |
|--------|-------|-------|--------|
| Xinjiang 3128B (¥/ton) | 17,400 | 17,730 | +1.9% |
| Zhengzhou futures | 15,855 | ~16,050 | +1.2% |
| 32S combed yarn (¥/ton) | 23,751 | 23,377 | -1.6% |
| Polyester staple (¥/ton) | 7,400 | 7,400 | flat |
| Cotton-poly spread (¥/ton) | 10,000 | 10,330 | +3.3% |
| Mill operating rate | 72% | 72% | flat |
| Commercial inventory (M tons) | 260 | 248 | -4.6% |
| Reserve auction clearance | 100% | 100% | — |

### Q4 2026 Procurement Strategy

Based on current market conditions, here is the recommended procurement approach for Q4 hotel linen orders:

**For 100% Cotton Products (sheets, towels, bathrobes)**:
- Cotton prices are rising and likely to remain elevated through September
- Price 50-60% of Q4 volume now at current yarn pricing (before mills pass through cotton cost increases)
- Defer 20-30% to post-harvest pricing (mid-October) — if harvest is better than expected, prices may ease 3-5%
- Maintain 10-20% contingency for price volatility

**For T/C Blend Products**:
- Polyester pricing is at multi-year lows with no upward pressure
- Price 70-80% of Q4 volume now — the value proposition is exceptional
- No urgency to hedge polyester exposure

**For All Products**:
- Build 5-10% freight cost contingency into Q4 budgets (West Asia risk)
- Maintain supplier relationships in at least two countries
- Consider split shipments to reduce single-vessel delivery risk
- Request digital production tracking from your China supplier
- Verify sustainability certifications (OEKO-TEX, GOTS) before placing orders

### Looking Ahead: Key Events to Monitor

1. **August 15-20**: Xinjiang field condition surveys — the first comprehensive yield assessments
2. **Late August**: Cotton defoliation begins — signals harvest timing
3. **Early September**: Opening seed cotton purchase price negotiations — ginning plants vs farmers
4. **Mid-September**: First new crop cotton available — price discovery for 2026/27 season
5. **October**: Peak harvest period — final production numbers emerge

The next 4-6 weeks will determine whether cotton prices continue their August rally or retreat toward pre-summer levels. For hotel linen buyers, the prudent approach is partial coverage now with flexibility for the remainder."""
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
