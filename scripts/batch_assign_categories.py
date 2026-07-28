#!/usr/bin/env python3
"""Batch assign categories to posts without one, using keyword matching on slug + title."""
import json, urllib.request, urllib.parse, sys

TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
PROJECT_ID = "nk89o1k8"
API = f"https://{PROJECT_ID}.api.sanity.io/v2023-01-01/data/mutate/production"
QUERY_URL = f"https://{PROJECT_ID}.api.sanity.io/v2023-01-01/data/query/production"

# Category keywords: (category_ref, [keywords list])
CATEGORY_MAP = [
    ("cat-buying-guide", [
        "buying-guide", "buying guide", "how to buy", "how-to-buy", "how to source",
        "sourcing agent", "procurement guide", "china hotel procurement",
        "guide for hotel", "choosing hotel", "MOQ", "lead time", "rfp template",
        "evaluate supplier", "6-dimension", "procurement mistakes", "hotel linen in 2026",
        "strategic partnership", "supply chain evolution", "supply chain transformation",
        "procurement window", "complete guide", "costly mistakes",
    ]),
    ("cat-fabric-encyclopedia", [
        "fabric encyclopedia", "fabric guide", "fabric innovation",
        "cotton type", "egyptian cotton", "pima", "combed cotton",
        "percale", "sateen", "weave type", "tencel", "lyocell",
        "t/c blend", "polyester cotton", "bamboo", "alternative fiber",
        "finishing", "mercerization", "sanforization", "yarn count",
        "thread count", "gsm meaning", "gsm guide", "300 GSM", "400 GSM",
        "500 GSM", "550 GSM", "600 GSM", "gsm towel",
    ]),
    ("cat-hospitality-tips", [
        "hospitality tips", "hospitality trend", "laundry", "lifespan",
        "linen care", "maximize", "PAR level", "inventory plan",
        "hygiene", "one guest one change", "cradle to cradle",
        "sustainability", "oeko-tex", "antimicrobial", "rfid",
        "smart linen", "AI transforming", "cpor", "sleep economy",
        "hotel housekeeping",
    ]),
    ("cat-hotel-bedding", [
        "hotel bedding", "bedding procurement", "bedding quality",
        "bedding guide", "bedding innovation", "bedding climate",
        "bedding property", "bed sheet", "duvet", "pillowcase",
        "filling guide", "pillow filling", "hotel textile trend",
        "textile innovation", "reshaping hotel",
    ]),
    ("cat-market-reports", [
        "market report", "market trend", "market wrap", "weekly wrap",
        "cotton price", "cotton outlook", "cotton forecast",
        "cotton market", "cotton surge", "us cotton",
        "india cotton", "cotton import", "raw material", "price index",
        "dieshiqiao", "nantong dieshiqiao",
        "tariff", "us-china", "import regulation",
        "global trend", "global hotel linen",
        "china hotel linen market", "china textile", "china home textile",
        "middle east hotel", "hormuz", "cma cgm", "freight rate",
        "shipping", "container", "icac",
        "textile industry", "textile slowdown", "textile market",
        "china procurement guide 2026", "hotel linen supply chain",
        "hotel linen procurement trend", "q1 2026",
    ]),
    ("cat-qc-checklist", [
        "qc checklist", "qc check", "quality inspection", "quality control",
        "pre-shipment", "bed sheet quality", "towel quality", "bathrobe quality",
        "table linen", "duvet cover qc", "pillowcase qc", "napkin",
        "stitching", "zipper", "absorbency", "color consistency",
        "durability testing", "tensile strength", "stain release",
        "hemming", "color", "delta e", "terry", "velour",
    ]),
    ("cat-textile-quality", [
        "textile quality", "textile standard", "aql",
        "shrinkage", "pilling", "abrasion", "colorfastness",
        "hotel linen hygiene", "2026 hotel bedding", "2026 hotel linen",
        "quality standard", "procurement standard",
        "2026 fabric", "textile procurement 2026",
        "how cotton price", "cotton price drive",
        "hotel procurement 2026 quality", "hotel procurement 2026 data",
        "quality-driven era",
    ]),
]


def classify(text_lower):
    """Return category ref based on keyword match."""
    scores = {}
    for cat_ref, keywords in CATEGORY_MAP:
        score = 0
        for kw in keywords:
            if kw in text_lower:
                score += 1
        if score > 0:
            scores[cat_ref] = score
    if not scores:
        return None
    return max(scores, key=scores.get)


def main():
    # Fetch posts without category
    query = '*[_type == "post" && (!defined(category) || category._ref == null)] { _id, title, slug }'
    encoded = urllib.parse.quote(query)
    url = f"{QUERY_URL}?query={encoded}"

    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {TOKEN}"})
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())

    posts = data.get("result", [])
    print(f"Fetched {len(posts)} posts without category")

    # Classify each post
    mappings = []
    unclassified = []
    for p in posts:
        slug = p.get("slug", {}).get("current", "") or ""
        title = p.get("title", "") or ""
        text = (slug + " " + title).lower()
        cat = classify(text)
        if cat:
            mappings.append((p["_id"], cat, title))
        else:
            unclassified.append(p)

    print(f"Classified: {len(mappings)}, Unclassified: {len(unclassified)}")

    if unclassified:
        print("\nUnclassified posts:")
        for p in unclassified:
            print(f"  {p['_id']}  slug={p.get('slug',{}).get('current','')}  title={p.get('title','')}")

    # Show category distribution
    dist = {}
    for _, cat, _ in mappings:
        dist[cat] = dist.get(cat, 0) + 1
    print("\nCategory distribution:")
    for cat_ref, count in sorted(dist.items(), key=lambda x: -x[1]):
        cat_name = cat_ref.replace("cat-", "").replace("-", " ").title()
        print(f"  {cat_name}: {count}")

    if not mappings:
        print("No posts to update!")
        return

    # Batch mutations (50 per batch)
    BATCH_SIZE = 50
    for i in range(0, len(mappings), BATCH_SIZE):
        batch = mappings[i:i + BATCH_SIZE]
        mutations = []
        for post_id, cat_ref, _ in batch:
            mutations.append({
                "patch": {
                    "id": post_id,
                    "set": {
                        "category": {
                            "_type": "reference",
                            "_ref": cat_ref
                        }
                    }
                }
            })

        payload = json.dumps({"mutations": mutations}).encode("utf-8")
        req = urllib.request.Request(API, data=payload, headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "application/json",
        })

        try:
            with urllib.request.urlopen(req) as resp:
                result = json.loads(resp.read())
                print(f"Batch {i // BATCH_SIZE + 1}: {len(batch)} posts → tx {result.get('transactionId')}")
        except Exception as e:
            print(f"Batch {i // BATCH_SIZE + 1} FAILED: {e}")
            if hasattr(e, 'read'):
                print(f"  Response: {e.read().decode()[:500]}")
            sys.exit(1)

    print(f"\n✅ All {len(mappings)} posts categorized!")

    # Verify
    verify_query = '*[_type == "post" && (!defined(category) || category._ref == null)] { _id }'
    verify_encoded = urllib.parse.quote(verify_query)
    verify_url = f"{QUERY_URL}?query={verify_encoded}"
    req = urllib.request.Request(verify_url, headers={"Authorization": f"Bearer {TOKEN}"})
    with urllib.request.urlopen(req) as resp:
        verify_data = json.loads(resp.read())
    remaining = verify_data.get("result", [])
    print(f"Remaining uncategorized: {len(remaining)}")


if __name__ == "__main__":
    main()
