#!/usr/bin/env python3
"""Create Knowledge Hub categories in Sanity."""
import requests
import json

SANITY_PROJECT = "nk89o1k8"
SANITY_DATASET = "production"
SANITY_TOKEN = "skvNBwO80b5504XlXsL672JbNZ9OHZgphWqpsmJpVzV9FxmFnLBbP6vQk2Fmm6G9WJ01wyEubu5OfmherI1Afoi31zHD2moE9FJFlEML0sRkN1L5PF2uGcPK2cEaGbTJOY2ojijctt58GxGtEYWgkfFf8Bm12wMI8BLuejwMHHAfRFGdUHcD"
API_BASE = f"https://{SANITY_PROJECT}.api.sanity.io/v2024-01-01"

categories = [
    {"_id": "cat-fabric-encyclopedia", "title": "Fabric Encyclopedia", "slug": "fabric-encyclopedia"},
    {"_id": "cat-qc-checklist", "title": "QC Checklist", "slug": "qc-checklist"},
    {"_id": "cat-market-reports", "title": "Market Reports", "slug": "market-reports"},
]

for cat in categories:
    # Check if exists
    check = requests.get(
        f"{API_BASE}/data/doc/{SANITY_DATASET}/{cat['_id']}",
        headers={"Authorization": f"Bearer {SANITY_TOKEN}"}
    )
    if check.status_code == 200:
        print(f"✓ Already exists: {cat['_id']}")
        continue

    resp = requests.post(
        f"{API_BASE}/data/mutate/{SANITY_DATASET}",
        headers={"Authorization": f"Bearer {SANITY_TOKEN}", "Content-Type": "application/json"},
        json={"mutations": [{"create": {
            "_id": cat["_id"],
            "_type": "category",
            "title": cat["title"],
            "slug": {"_type": "slug", "current": cat["slug"]}
        }}]}
    )
    result = resp.json()
    if "transactionId" in result:
        print(f"✓ Created: {cat['_id']} ({cat['title']})")
    else:
        print(f"✗ Failed: {cat['_id']} — {result}")
