import json
import urllib.request
import urllib.parse
from datetime import datetime, timezone

PROJECT = "nk89o1k8"
DATASET = "production"
TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
NOW_UTC = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
SLUG = "august-2026-cotton-market-peak-season-hotel-linen"
TITLE = "August 2026 Cotton Market: Peak Season Guide for Hotel Linen Buyers"
EXCERPT = "Cotton prices hit 18,199 yuan/ton in August 2026. Here is what hotel linen buyers need to know for the September-October peak season."

print(f"Excerpt length: {len(EXCERPT)} chars")

# Step 1: Check if slug exists
query_str = '*[slug.current == "august-2026-cotton-market-peak-season-hotel-linen"][0]._id'
encoded_query = urllib.parse.quote(query_str)
check_url = f"https://{PROJECT}.api.sanity.io/v2024-01-01/data/query/{DATASET}?query={encoded_query}"
check_req = urllib.request.Request(check_url, headers={"Authorization": f"Bearer {TOKEN}"}, method="GET")
result = json.loads(urllib.request.urlopen(check_req, timeout=30).read().decode())
if result.get("result"):
    print(f"SLUG ALREADY EXISTS: {result['result']} -- skipping")
    exit()
print("Slug does not exist, proceeding with creation")

# Build body blocks
body = []
_block_counter = [0]

def add_block(style, text):
    _block_counter[0] += 1
    key = f"b{_block_counter[0]}"
    body.append({
        "_type": "block",
        "style": style,
        "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": text}],
        "key": key
    })

add_block("normal", "August 2026 has delivered a clear signal to hotel linen procurement teams: cotton is getting more expensive, global supply is tightening, and the September-October peak season is approaching fast. Domestic 3128B grade cotton reached 18,199 yuan per ton on August 26, up 4.37 percent from the start of the month. Reserve cotton auctions have maintained a 100 percent transaction rate for five consecutive weeks. Yarn mills have begun raising quotes by 200 to 300 yuan per ton. For hotel linen buyers, these are not abstract numbers — they directly affect bedding, towel, and bathrobe costs for the next procurement cycle.")

add_block("h2", "Cotton at 18,199 Yuan: Breaking Down the Numbers")
add_block("normal", "The headline figure is straightforward: 3128B grade cotton, the benchmark grade used across China's textile industry, closed August at 18,199 yuan per ton, a 4.37 percent increase from August 1. Zhengzhou cotton futures broke through the 17,000 yuan threshold, hitting a three-month high of 17,100 yuan per ton. The trajectory is unambiguously upward, and the rate of increase has accelerated in the second half of August.")
add_block("normal", "What makes this round different from earlier 2026 increases is the convergence of domestic and international factors. The internal-external price spread has narrowed to 3,039 yuan per ton, meaning imported cotton is becoming less of a cost-saving alternative. For hotel linen buyers sourcing from China, the window to lock in pre-peak-season pricing is narrowing by the day.")

add_block("h2", "Global Supply Squeeze: Weather Driving Tightening")
add_block("normal", "The supply picture is tightening on multiple fronts. U.S. cotton conditions have deteriorated sharply: as of August 23, the good-to-excellent rate stood at just 37 percent, down from 53 percent in late June, a 16-point decline in two months. Texas, the largest U.S. cotton-producing state, recorded a rate of only 19 to 21 percent. The USDA projects U.S. 2026/27 cotton production at 13.61 million bales, nearly 300,000 bales below the previous season.")
add_block("normal", "India's cotton planting area is down 2.4 percent year over year, with monsoon rainfall below historical averages. Australia and Brazil are both expected to see production declines. The USDA's August report revised global cotton consumption upward to 26.76 million tons, a six-year high, while global ending stocks fell to 15.17 million tons, down 6.8 percent year over year. The global stock-to-use ratio dropped to 56.7 percent, the lowest in recent years.")
add_block("normal", "Domestically, Xinjiang, China's primary cotton region, has experienced persistent high temperatures and drought during the critical boll development phase. Average boll counts are below last year's levels, and drought-affected areas face yield reduction expectations. The Ministry of Agriculture projects 2026/27 domestic production at 6.34 million tons. Either way, new-crop supply will not flood the market.")

add_block("h2", "Reserve Cotton: Five Weeks of 100 Percent Transaction")
add_block("normal", "China's central reserve cotton auctions have sent an unmistakable tightness signal. From July 20 through August 25, cumulative sales reached 216,579 tons with a 100 percent transaction rate. Every ton offered was purchased. Daily listings of approximately 8,000 tons have consistently drawn full bids with zero failed auctions.")
add_block("normal", "The average transaction price reached 17,177 yuan per ton, with the standard-grade equivalent at 17,827 yuan, a premium of 1,347 yuan over the base price. Imported cotton within the reserve auctions commanded even higher premiums of 1,478 yuan, reflecting strong structural demand for high-grade fiber. When reserve cotton sells at full premium with zero passes, it tells procurement teams that mills are competing aggressively for available supply.")

add_block("h2", "Inventory and Imports: The Buffer Is Shrinking")
add_block("normal", "National commercial cotton inventory totaled 2.12 million tons as of August 21, down 11.23 million tons, or 5.03 percent, from the previous month. While year-over-year inventory is still up 23.83 percent, the month-over-month decline confirms that available stock is being consumed faster than it is being replenished.")
add_block("normal", "Imports tell a parallel story. China imported 90,000 tons of cotton in July, up 71.1 percent year over year. Year-to-date imports reached 1.03 million tons, nearly double the prior year's figure. The Ministry of Agriculture raised the 2025/26 import estimate to 1.55 million tons. This surge reflects mill efforts to secure supply ahead of the peak season, but it also means imported cotton is no longer a cheap alternative, as global prices have risen in tandem.")

add_block("h2", "Yarn Price Transmission: Costs Are Already Moving")
add_block("normal", "The cost increase is not theoretical. According to the China Cotton Textile Association's 131st market survey, covering 260-plus enterprises across 15 industry clusters, cotton yarn prices have risen by 200 to 300 yuan per ton in recent weeks. However, downstream acceptance remains low, with mills reporting that buyers are resisting the increases.")
add_block("normal", "Operating rates provide additional context. Spinning mill utilization stood at 68.9 percent as of August 20, while weaving plant operating rates were just 36.72 percent. Yarn inventory at mills reached 31.86 days, still high but declining by 0.24 days week over week. Polyester staple fiber reached 7,704 yuan per ton, driven by oil price increases, and viscose staple fiber held at 14,300 to 14,500 yuan per ton. For hotel linen buyers, the key takeaway is that yarn mills are caught between rising raw material costs and weak downstream demand, creating a narrow window to place orders before peak season forces broader price increases.")

add_block("h2", "Peak Season Framework: Five Actions for September-October")
add_block("normal", "Based on the current market data, hotel linen procurement teams should consider the following actions before the September-October peak season fully activates.")
add_block("normal", "First, lock in fourth-quarter orders now. With cotton at 18,199 yuan and rising, and September marking the new-crop transition window, prices are likely to remain elevated through October. Negotiating fixed-price contracts before peak season demand fully activates can save 8 to 15 percent compared to spot purchases in October.")
add_block("normal", "Second, specify cotton grade and origin in contracts. With Xinjiang yields under pressure, ensure your supplier can guarantee the cotton grade specified in your purchase agreement. Lower-grade substitutions may reduce upfront costs but will compromise fabric quality, durability, and guest satisfaction over the full lifecycle of the linen.")
add_block("normal", "Third, evaluate blended fabric options. For mid-range properties, 40 to 60 count cotton-polyester blends offer a practical balance between comfort and cost stability. Polyester staple fiber at 7,704 yuan per ton provides a hedge against pure cotton price volatility while maintaining acceptable hand feel and durability.")
add_block("normal", "Fourth, extend lead time expectations. With spinning mills at 68.9 percent capacity and weaving at 36.72 percent, production bottlenecks are likely during peak season. Build an extra 10 to 15 days into your delivery schedules, particularly for high-thread-count bedding of 60s and above.")
add_block("normal", "Fifth, monitor reserve cotton auction results. The 100 percent transaction rate is a leading indicator of market tightness. If auctions continue at full subscription into September, expect further price increases. If transaction rates begin to drop, it may signal that supply pressure is easing and spot prices may stabilize.")

add_block("h2", "Looking Ahead: Key Indicators to Watch")
add_block("normal", "The September-October period will be defined by three variables: new-crop yield realization in Xinjiang, the pace of downstream order recovery, and the trajectory of reserve cotton auctions. The Ministry of Agriculture's 6.34 million ton production forecast suggests domestic supply will remain constrained. Textile and apparel exports were up 7.6 percent in July, and retail sales of clothing and textiles grew 5.8 percent year to date, both positive demand signals.")
add_block("normal", "For hotel linen buyers, the message is clear: the market is sending tightening signals across every indicator — price, inventory, imports, reserve auctions, and global supply. Acting on these signals before the peak season fully activates will protect both procurement budgets and supply continuity through the fourth quarter and into 2027.")
add_block("normal", "This article was adapted from Chinese textile industry sources. For custom hotel linen inquiries, visit nantonglinens.com.")

# Count words
full_text = " ".join([b["children"][0]["text"] for b in body])
word_count = len(full_text.split())
print(f"Word count: {word_count}")

# Step 2: Create document
POST_ID = "post-auto-20260830-1"

doc = {
    "mutations": [{
        "create": {
            "_id": POST_ID,
            "_type": "post",
            "title": TITLE,
            "slug": {"_type": "slug", "current": SLUG},
            "excerpt": EXCERPT,
            "publishedAt": NOW_UTC,
            "categories": [{"_type": "reference", "_ref": "cat-buying-guide", "_key": "catbuyingguide"}],
            "author": {"_type": "reference", "_ref": "author-7745c84e"},
            "body": body
        }
    }]
}

req = urllib.request.Request(
    f"https://{PROJECT}.api.sanity.io/v2024-01-01/data/mutate/{DATASET}",
    data=json.dumps(doc, ensure_ascii=False).encode("utf-8"),
    headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"},
    method="POST",
)
response = json.loads(urllib.request.urlopen(req, timeout=30).read().decode())
print(f"Create response: {json.dumps(response, indent=2)}")
