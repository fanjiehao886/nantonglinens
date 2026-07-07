#!/usr/bin/env python3
"""Publish daily textile news article to Sanity — June 25, 2026"""

import json
import urllib.request
import time

TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
API = "https://nk89o1k8.api.sanity.io/v2023-01-01/data/mutate/production"

CAT_REF = {"_type": "reference", "_ref": "cat-buying-guide"}

SLUG = "china-textile-market-slowdown-june-2026-hotel-linen-buyers"

def blk(style, text):
    return {
        "_type": "block",
        "style": style,
        "children": [{"_type": "span", "text": text}]
    }

body = [
    blk("h2", "The Off-Season Has Arrived: What the Numbers Say"),
    blk("normal", "The China Cotton Textile Association's latest survey (covering mills across Xinjiang, Shandong, Hebei, Henan, Jiangsu, Zhejiang, and other major textile provinces) confirms what many buyers sense: textile production has entered its traditional summer slowdown. Cotton yarn output fell 2.2% month-on-month in May. Fabric production dropped 3.6%. Operating rates at spinning mills slipped to 75.1% by mid-June — down from peak-season levels above 80%."),
    blk("normal", "This isn't alarming — it's seasonal. June through August is consistently the slowest quarter for China's textile industry, driven by lower consumer demand in Western markets during summer months and reduced factory activity during China's hot season. But the data reveals specific pressure points — and opportunities — for hotel linen buyers planning Q3 and Q4 orders."),

    blk("h2", "Cotton Prices: A Floor Beneath the Market"),
    blk("normal", "After rallying in April and early May, domestic cotton prices retreated. The China Cotton Index (3128B grade) settled at 17,398 yuan/ton by mid-June, down 1.43% from the start of the month and well below the May average of 17,789 yuan/ton. This pullback reflects weak downstream demand rather than supply-side easing."),
    blk("normal", "The critical point for procurement planning: a price floor is firmly in place. The Chinese government has locked in Xinjiang's target cotton price at 18,600 yuan/ton for 2026–2028, with a fixed subsidy volume of 5.1 million tons. With spot prices trading 1,200 yuan below the policy floor, there's limited room for further decline. Meanwhile, global cotton supply remains tight — USDA's June report raised consumption forecasts and cut ending stocks, reinforcing a structural supply deficit."),
    blk("normal", "For hotel linen buyers, this means: don't expect the current price dip to deepen significantly. The window for locking in fabric costs near current levels may be narrow. If your procurement cycle allows, placing orders before the September seasonal demand rebound could secure more favorable pricing."),

    blk("h2", "Yarn Prices Squeeze Margins — Even in a Slow Market"),
    blk("normal", "Here's the counterintuitive data point: despite the production slowdown, 32-count combed cotton yarn averaged 23,277 yuan/ton in May — up 3.54% month-on-month and 13.7% year-on-year. Yarn prices are following raw cotton costs upward, but with a lag and at a slower pace. This lag is compressing mill margins: input costs (cotton) rose faster than output prices (yarn), pushing many small and medium mills into unprofitable territory."),
    blk("normal", "Why this matters for buyers: margin-squeezed mills are more open to negotiation. Some are offering discounts to move inventory and maintain cash flow. The window for favorable pricing on cotton-rich hotel linen products — sheets, duvet covers, pillowcases — may be more favorable now than it was in Q1."),

    blk("h2", "Inventory Dynamics: Mills Are Cautious, Finished Goods Are Building"),
    blk("normal", "Cotton industrial inventory at mills dropped to 846,000 tons by end-May, down 31,000 tons from April. Only 24% of mills increased raw cotton holdings; 44% reduced them. This cautious posture reflects uncertainty about both demand direction and cotton price stability."),
    blk("normal", "At the same time, finished goods inventory is climbing. Yarn inventory reached 16.8 days (up 1.7 days MoM) and greige fabric inventory hit 27.7 days (up 2.9 days). The yarn sales rate slipped to 73%, down 2 percentage points from April."),
    blk("normal", "Translation for procurement: rising finished goods inventory means mills want to sell what they've already produced. Standard-specification hotel linens — 40S/60S cotton sheets, 300–400TC fabrics, 400–600GSM towels — may have shorter lead times and better pricing as mills work through accumulated stock. Custom specifications may take longer, as mills are running at reduced capacity and prioritizing existing orders."),

    blk("h2", "Export Picture: Flat Overall, But Signs of Recovery"),
    blk("normal", "China's textile and apparel exports totaled $116.72 billion for January–May 2026, barely up 0.1% year-on-year. May alone saw $25.61 billion in exports — down 2.3% YoY but up 6.4% month-on-month. The sequential improvement is encouraging: it suggests the trade environment is stabilizing after a volatile Q1."),
    blk("normal", "Textile exports (fabric, yarn, intermediate goods) reached $12.59 billion in May, essentially flat (-0.3% YoY). Apparel exports were $13.02 billion, down 4.1% YoY but rebounding 14.7% from April. The stronger apparel recovery signals that Western retail channels are restocking for summer/autumn — a positive leading indicator for hotel textile demand, which tends to follow the broader textile trade cycle with a 1–2 month lag."),
    blk("normal", "Geopolitical risks remain: ongoing trade friction with the US, inflation-weakened consumer spending in Europe, and growing competition from Southeast Asian suppliers all weigh on the outlook. However, for hotel linen buyers specifically, China's dominance in mid-to-high-end cotton textiles — driven by the Xinjiang cotton supply chain and Nantong's manufacturing cluster — means competitive alternatives are limited."),

    blk("h2", "Xinjiang Cotton Dominance Continues"),
    blk("normal", "Xinjiang cotton accounted for 74.1% of total mill consumption in May, up 1.9 percentage points from April. Imported cotton's share fell to 19.4%, down 1.8 percentage points, as higher international prices and logistics costs made foreign cotton less competitive. For hotel linen buyers, this reinforces what we've been saying: products made with Xinjiang long-staple cotton offer the best price-to-quality ratio in the current market."),

    blk("h2", "Procurement Strategy: 4 Actions for June–July"),
    blk("normal", "Based on the data, here are four concrete steps for hotel linen buyers right now:"),

    blk("normal", "1. Get quotes now, not in September. Mills are running below capacity with rising finished goods inventory. This is when you have negotiating leverage. Once September orders start flowing and operating rates climb back above 80%, pricing power shifts back to suppliers."),
    blk("normal", "2. Lock in cotton-heavy products first. Cotton yarn prices have risen 13.7% YoY and show no sign of reversing. Bed sheets, duvet covers, pillowcases — any product with high cotton content — should be prioritized for Q3/Q4 orders. Polyester-blend products face less cost pressure."),
    blk("normal", "3. Expect 15–25 day lead times for standard specs. With operating rates at 75%, production capacity is available. Custom or high-thread-count specifications (60S+, 400TC+) may take longer — plan for 25–35 days."),
    blk("normal", "4. Watch the September rebound. Historically, China's textile exports surge in September–October as Western buyers stock up for year-end. If you order during the June–July trough, you avoid competing for capacity during the peak — and you get better pricing."),

    blk("h2", "Bottom Line"),
    blk("normal", "The Chinese textile industry is in its seasonal trough — and that's exactly when smart hotel linen buyers should be active. Cotton prices have a hard floor at 18,600 yuan/ton under the Xinjiang policy. Yarn prices are up double digits YoY. Mills are cautious but liquid — they want to sell. The export environment is stabilizing. All signs point to: now is a better time to negotiate than September will be."),
]

title = "China Textile Slowdown June 2026: A Procurement Window for Hotel Linen Buyers"
excerpt = "China's textile industry enters seasonal trough with 75% operating rates and rising finished goods inventory. Cotton prices find floor at ¥18,600/ton. Smart buyers negotiate now."
slug_obj = {"_type": "slug", "current": SLUG}
published_at = "2026-06-25T04:00:00Z"

doc = {
    "_id": "post-auto-20260625-1",
    "_type": "post",
    "title": title,
    "slug": slug_obj,
    "publishedAt": published_at,
    "excerpt": excerpt,
    "body": body,
    "categories": [CAT_REF],
}

mutation = {"mutations": [{"create": doc}]}
data = json.dumps(mutation, ensure_ascii=False).encode("utf-8")

req = urllib.request.Request(API, data=data, headers={
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json",
})
req.add_header("Content-Length", str(len(data)))

print(f"Publishing: {title}")
print(f"Excerpt length: {len(excerpt)} chars")
resp = urllib.request.urlopen(req)
result = json.loads(resp.read())
print(f"Response: {json.dumps(result, indent=2)}")
print("✅ Published successfully")
