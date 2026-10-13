# -*- coding: utf-8 -*-
import json
import urllib.request
import urllib.parse
from datetime import datetime, timezone

PROJECT = "nk89o1k8"
DATASET = "production"
TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
NOW_UTC = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

POST_ID = "post-auto-20260927-1"
SLUG = "rfid-smart-linen-management-hotel-procurement"
TITLE = "RFID Smart Linen Management: What Hotel Buyers Need to Know in 2026"
EXCERPT = ("Chinese hotels are sewing RFID chips into sheets and towels to track wash cycles, "
           "cut losses and prove hygiene. What the shift means for hotel buyers.")
print("excerpt len:", len(EXCERPT))
assert len(EXCERPT) <= 155, "EXCERPT TOO LONG"

# ---- Step 0: check slug uniqueness ----
q = urllib.parse.quote('*[_type=="post" && slug.current=="%s"]._id' % SLUG)
check_req = urllib.request.Request(
    "https://%s.api.sanity.io/v2024-01-01/data/query/%s?query=%s" % (PROJECT, DATASET, q),
    headers={"Authorization": "Bearer %s" % TOKEN},
)
existing = json.loads(urllib.request.urlopen(check_req, timeout=30).read().decode())
if existing.get("result"):
    print("SLUG EXISTS:", existing["result"], "- SKIP PUBLISH")
    raise SystemExit(0)

def blk(style, text, key):
    return {"_type": "block", "style": style, "markDefs": [],
            "children": [{"_type": "span", "marks": [], "text": text}], "key": key}

body = [
blk("normal", "Two tender announcements from Chinese hotels in early September 2026 quietly confirmed a shift that hotel procurement teams worldwide should not ignore. A five-star property in Qingdao put the laundering of everything from bed sheets and duvet covers to bathrobes, mattress protectors and curtains out to bid for the 2026-2027 season. Days earlier, a Beijing airport hotel and its serviced apartments went one step further: their cotton goods laundering contract explicitly listed the application and maintenance of RFID smart linen chips as part of the scope. Linen tracking is no longer a pilot project. It is entering the specification.", "intro"),
blk("h2", "Why Linen Tracking Suddenly Matters", "h2_1"),
blk("normal", "Hospitality linen has spent years under scrutiny. Media investigations across China have repeatedly tested whether hotels actually change sheets and towels between guests, and regulators have responded with tightened enforcement of one-guest-one-change hygiene rules. The problem for honest operators is that compliance is hard to prove: once a clean sheet goes back on the bed, there is no record of what happened to it.", "p1"),
blk("normal", "That is the gap RFID closes. The fourth Laundry Digital Congress, held in Jiaxing on September 19-20, 2026 under the theme of making digital value visible, drew suppliers, laundry plants and hotel operators around exactly this promise: turn every piece of linen into a traceable, countable asset.", "p2"),
blk("h2", "What the Latest Tenders Reveal", "h2_2"),
blk("normal", "The Qingdao tender is notable for its breadth. Washing coverage spans bed sheets, duvet covers, pillowcases, bathrobes, bath towels, duvets, mattress protectors, bed skirts and curtains, and bidders are required to demonstrate prior experience with hotel outsourcing programs. Laundering is being treated as a managed service, not a commodity purchase.", "p3"),
blk("normal", "The Beijing airport hotel project is more telling still. Beyond washing, disinfection, ironing and transport, it requires the supplier to handle RFID chip tagging and ongoing system maintenance. Meanwhile a Crowne Plaza property in Lanzhou published a single-source procurement for a smart linen management system with an annual budget of roughly CNY 60,000, priced around CNY 2.5 per chip plus 22 handheld RFID scanners and a CNY 5,000 monthly system fee. These are modest figures, which is precisely the point: the barrier to entry has dropped to a level mid-scale properties can absorb.", "p4"),
blk("h2", "How an RFID Linen System Works", "h2_3"),
blk("normal", "Each item carries a flexible UHF tag, sewn or heat-pressed into a hem, that survives high-temperature industrial washing for thousands of cycles. Fixed tunnel readers scan more than 400 pieces in about three seconds, even when the linen is damp or stacked. Handheld terminals let staff count an entire storeroom by walking through it, and fixed readers at handover points automatically log every truck between hotel and laundry plant.", "p5"),
blk("normal", "The data flows into a dashboard that integrates with the hotel PMS or the laundry plant's ERP. Every item acquires a service history: when it entered service, how many wash cycles it has survived, where it is right now, and when it should be retired.", "p6"),
blk("h2", "The Numbers Behind the Business Case", "h2_4"),
blk("normal", "Operators running these systems report concrete results. Laundry plants adopting full-process digital management have cut linen losses by more than 30 percent. Handover counting between hotel and plant takes over 60 percent less time, replacing the classic dispute of hotel and laundry each blaming the other for missing pieces. Machine sorting has pushed error rates below 0.1 percent while multiplying daily throughput several times over.", "p7"),
blk("normal", "One frequently cited field test at a 200-room five-star hotel found that room-report and wash-count paperwork fell by roughly 90 percent, and warehouse inventory time by around 80 percent. Systems can also flag automatic retirement once an item approaches its rated wash-count ceiling, commonly in the region of 200 industrial cycles, so linen is replaced on evidence rather than on guesswork.", "p8"),
blk("h2", "From Unit Price to Cost per Use", "h2_5"),
blk("normal", "The deeper change is conceptual. Hotel linen now follows a full lifecycle: production, procurement, storage, use, laundering, inventory, replenishment and disposal. Once wash cycles are tracked per item, the decisive purchasing metric becomes cost per use rather than unit price. A towel that costs slightly more but reliably delivers 260 washes beats a cheaper one that fails at 180, and wash-count data finally makes that comparison provable.", "p9"),
blk("normal", "This also reframes the supplier relationship. Manufacturers able to keep batch-to-batch consistency, support custom specifications and feed product data into a tracking system are no longer selling fabric; they are underwriting a measurable service life.", "p10"),
blk("h2", "What Hotel Buyers Should Ask Suppliers Now", "h2_6"),
blk("normal", "Procurement teams evaluating hotel linens in 2026 should add a few pointed questions. Can the supplier sew washable UHF tags to specification, and does it hold test data proving tag readability after several hundred industrial washes? Can it guarantee consistent weave, weight and dimensions across batches, so that tagged items remain interchangeable over years of replenishment? Is the supplier willing to align product records with the hotel's tracking platform rather than resisting the paperwork?", "p11"),
blk("normal", "Buyers should also weigh service capacity alongside price: stable replenishment cycles, multi-property delivery, custom sizing, and responsiveness to urgent needs. These capabilities rarely show up in a sample swatch, yet they determine whether a linen program runs smoothly over a multi-year contract.", "p12"),
blk("h2", "The Bottom Line", "h2_7"),
blk("normal", "A chip that costs a couple of yuan converts a consumable into an asset with an auditable lifecycle, and the tenders above show hotels are now willing to pay for that visibility inside their laundering contracts. For procurement managers, the practical move is simple: build tag-readiness and traceability requirements into the next linen tender, and evaluate suppliers on verified wash life, not just the quotation.", "p13"),
blk("normal", "This article was adapted from Chinese textile industry sources. For custom hotel linen inquiries, visit nantonglinens.com.", "outro"),
]

total_words = sum(len(b["children"][0]["text"].split()) for b in body)
print("word count:", total_words)

doc = {
    "mutations": [{
        "create": {
            "_id": POST_ID,
            "_type": "post",
            "title": TITLE,
            "slug": {"_type": "slug", "current": SLUG},
            "excerpt": EXCERPT,
            "publishedAt": NOW_UTC,
            "categories": [{"_type": "reference", "_ref": "cat-textile-quality", "_key": "cattexquality"}],
            "author": {"_type": "reference", "_ref": "author-7745c84e"},
            "body": body,
        }
    }]
}

req = urllib.request.Request(
    "https://%s.api.sanity.io/v2024-01-01/data/mutate/%s" % (PROJECT, DATASET),
    data=json.dumps(doc, ensure_ascii=False).encode("utf-8"),
    headers={"Authorization": "Bearer %s" % TOKEN, "Content-Type": "application/json"},
    method="POST",
)
resp = json.loads(urllib.request.urlopen(req, timeout=30).read().decode())
print("CREATE RESULT:", json.dumps(resp, ensure_ascii=False))
print("POST_ID:", POST_ID)
print("SLUG:", SLUG)
