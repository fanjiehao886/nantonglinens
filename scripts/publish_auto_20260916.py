# -*- coding: utf-8 -*-
"""Publish 2026-09-16 blog post to Sanity (auto)."""
import json
import urllib.request
import urllib.parse
from datetime import datetime, timezone

PROJECT = "nk89o1k8"
DATASET = "production"
API = f"https://{PROJECT}.api.sanity.io/v2024-01-01"
TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
NOW_UTC = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
POST_ID = "post-auto-20260916-1"
SLUG = "nantong-hotel-linen-cluster-cross-border-ecommerce"

TITLE = "Nantong Hotel Linen Cluster Goes Global via Cross-Border E-Commerce"
EXCERPT = "Nantong's home textile expo drew 400+ buyers and RMB 100M+ in intended deals. What the cluster's cross-border shift means for hotel linen sourcing."

assert 50 <= len(TITLE) <= 70, f"TITLE len={len(TITLE)}"
assert len(EXCERPT) <= 155, f"EXCERPT len={len(EXCERPT)}"

# ---------- Step 1: slug uniqueness check ----------
q = urllib.parse.quote('*[_type=="post" && slug.current=="' + SLUG + '"]._id')
check_url = f"{API}/data/query/{DATASET}?query={q}"
check_req = urllib.request.Request(check_url, headers={"Authorization": f"Bearer {TOKEN}"})
existing = json.loads(urllib.request.urlopen(check_req, timeout=30).read().decode())
if existing.get("result"):
    print("SLUG_EXISTS:", existing["result"])
    raise SystemExit(0)

# ---------- Body ----------
blocks_src = [
    ("normal", "From September 9 to 12, 2026, the Nantong Cross-Border E-Commerce Sourcing Expo closed its latest edition in China's largest home textile cluster with its strongest results yet. For hotel procurement teams that source linens from China, the event offered a data-rich snapshot of how the supply side is reorganizing: bigger factory lineups, structured buyer-factory matchmaking, and a fast-expanding cross-border logistics network. Here is what the numbers say, and how they translate into practical sourcing decisions."),
    ("h2", "A Record-Scale Sourcing Expo in China's Home Textile Heartland"),
    ("normal", "Hosted at the Nantong International Convention and Exhibition Center, the 2026 edition doubled in scale: 24,000 square meters of exhibition space, 271 companies and 628 booths, drawing 13,045 visits over four days, including more than 400 professional buyers. On-site transactions exceeded RMB 18 million, while intended procurement volume broke through RMB 100 million. Eight of Nantong's signature industrial clusters exhibited together, and a quarter of exhibitors came from outside the city - from across Jiangsu as well as Hebei, Liaoning and Fujian - confirming the fair's pull as a national sourcing venue. Eighteen major cross-border platforms and 34 service providers covered overseas channels, payment settlement and international logistics on-site."),
    ("h2", "Factory-First Matchmaking: 110 Buyers, 200 Mills, 39.5% Intent Rate"),
    ("normal", "The most instructive format was the international sourcing matchmaking session organized under China's Ministry of Commerce export promotion program. Around 100 cross-border seller procurement delegations met roughly 200 factories specializing in home textiles, apparel and related categories. In the dedicated session, 110 key buyers held one-on-one meetings with 200 qualified mills, producing an intent-to-order rate of 39.5 percent. The format followed a closed loop: morning negotiations, an afternoon expo tour, and factory audits the following day - moving sourcing beyond exchanging business cards to production-line inspections and lead-time verification. Overall satisfaction with the event reached 82.9 percent, and more than 60 percent of exhibitors committed to return next year."),
    ("h2", "Cross-Border E-Commerce Is Rewiring How Linens Move"),
    ("normal", "Nantong, a national cross-border e-commerce comprehensive pilot zone, posted RMB 10.59 billion in cross-border e-commerce transaction value for January-July 2026, up 47.4 percent year on year. B2C export volume ranks fourth in Jiangsu province, while 1210 bonded imports have led the province for years with more than 40 percent of its total. The supporting infrastructure now includes 7 municipal and 3 provincial cross-border e-commerce industrial parks, plus 40 overseas warehouses built by local companies across 16 countries and regions. For hotel buyers, that network matters: regional stock positioned closer to destination markets can compress replenishment cycles for both emergency top-ups and scheduled renovation programs."),
    ("h2", "A Dedicated Hotel Linen Export Hub Takes Shape"),
    ("normal", "One signature deal signed at the expo points to where the category is heading: a RMB 100 million high-end textile cross-border operation center combining domestic and overseas warehousing, built to serve B2B hotel key accounts alongside marketplace and independent-site channels. Its declared scope covers hotel linens, premium bedding and soft furnishings, with a three-year cross-border sales target of RMB 800 million (roughly USD 110 million). When a production cluster starts building dedicated hotel-linen export infrastructure, procurement teams should read it as a signal: hotel textiles are becoming a flagship export category with purpose-built logistics, not an afterthought within generic home textiles."),
    ("h2", "What International Buyers Are Asking For"),
    ("normal", "An enterprise delegation organized by a Korean fiber technology institute came with a clear brief: functional fabrics, new materials and new designs. Its representative noted that Nantong's high-count, high-density home textiles already enjoy strong recognition among Korean trading companies. Buyers traveled from eight countries and regions - South Korea, Hungary, the UK, Spain and Uzbekistan among them - while domestic buyers from Yiwu and Tianjin concentrated on home textiles and hardware. The pattern repeats a theme hotel procurement teams already know: fine yarn counts and dense constructions remain the entry ticket, and functional finishes are what separate shortlisted suppliers from the rest."),
    ("h2", "Digital Printing Cuts the Cost of Customization"),
    ("normal", "Among the product highlights was a double-sided positioned digital-print towel developed by a Jiangsu mill over eight years of R&D, solving the alignment and color-bleed problems that traditionally limited double-sided patterns. Digital printing skips screen-making and paste mixing entirely: patterns are sprayed directly onto cotton fabric, then steamed, washed and fixed, which drastically shortens production cycles while keeping color fidelity high. For hotel projects, that matters in two ways - branded or patterned linens become viable at lower order quantities, and mid-contract refresh orders no longer require committing to a full custom print run."),
    ("h2", "Five Takeaways for Hotel Procurement Teams"),
    ("normal", "1. Verify at the factory, not the catalog. The matchmaking-plus-audit model now standard at cluster events shows how readily supplier verification can be built into a single sourcing trip. 2. Expect flexible order structures. Mills in the cluster increasingly run both small-batch, fast-turnover cross-border orders and bulk general-trade contracts from the same production lines. 3. Ask about overseas warehousing. With 40 regional warehouses already in place, ask suppliers what stock can sit closer to your market. 4. Specify construction and function together. High-count, high-density fabric plus durable functional finishes is the combination international buyers are screening for. 5. Watch the export-hub model. Integrated domestic-and-overseas warehousing aimed at hotel accounts could meaningfully shorten lead times for standardized hotel programs."),
    ("normal", "Nantong's 2026 expo confirms a structural shift: hotel linen sourcing is moving from catalog-based buying toward verified, channel-diverse procurement anchored in production clusters. Teams that adapt their supplier evaluation to this new landscape - factory audits, flexible MOQs, regional stock - stand to capture both cost and speed advantages."),
    ("normal", "This article was adapted from Chinese textile industry sources. For custom hotel linen inquiries, visit nantonglinens.com."),
]

body = []
for i, (style, text) in enumerate(blocks_src):
    key = f"b{i:02d}"
    body.append({
        "_type": "block", "style": style, "markDefs": [],
        "children": [{"_type": "span", "marks": [], "text": text}],
        "key": key,
    })

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
            "body": body,
        }
    }]
}

req = urllib.request.Request(
    f"{API}/data/mutate/{DATASET}",
    data=json.dumps(doc, ensure_ascii=False).encode("utf-8"),
    headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"},
    method="POST",
)
resp = json.loads(urllib.request.urlopen(req, timeout=30).read().decode())
print(json.dumps(resp, ensure_ascii=False))
print("TITLE_LEN:", len(TITLE), "EXCERPT_LEN:", len(EXCERPT))
word_count = sum(len(t.split()) for _, t in blocks_src)
print("WORD_COUNT:", word_count)
