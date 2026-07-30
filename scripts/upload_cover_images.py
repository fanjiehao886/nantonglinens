#!/usr/bin/env python3
"""Upload 4 cover images to Sanity and patch them to blog posts."""
import json, urllib.request, os

TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
ASSETS_API = "https://nk89o1k8.api.sanity.io/v2021-06-07/assets/images/production"
MUTATE_API = "https://nk89o1k8.api.sanity.io/v2023-01-01/data/mutate/production"
IMG_DIR = os.path.join(os.path.dirname(__file__), "..", "generated-images")

IMAGES = [
    ("indian_factory.jpg",   "post-auto-20260720-1"),
    ("luxury_bathroom.jpg",  "post-auto-20260721-1"),
    ("brazil_cotton.jpg",    "post-auto-20260722-1"),
    ("el_nino.jpg",          "post-auto-20260723-1"),
]

for img_name, post_id in IMAGES:
    img_path = os.path.join(IMG_DIR, img_name)
    if not os.path.exists(img_path):
        print(f"  SKIP {img_name}: file not found at {img_path}")
        continue

    file_size = os.path.getsize(img_path)
    print(f"\n--- Uploading {img_name} ({file_size:,} bytes) → {post_id} ---")

    with open(img_path, "rb") as f:
        img_data = f.read()

    # Upload to Sanity Assets API
    req = urllib.request.Request(
        ASSETS_API,
        data=img_data,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "image/jpeg",
            "Content-Length": str(len(img_data)),
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            result = json.loads(resp.read())
            asset_id = result.get("document", {}).get("_id", "")
            print(f"  Uploaded → asset: {asset_id}")

            if not asset_id:
                print(f"  ERROR: no asset _id in response")
                print(f"  Response: {json.dumps(result)[:300]}")
                continue

            # Patch the post to add mainImage
            patch = {
                "mutations": [{
                    "patch": {
                        "id": post_id,
                        "set": {
                            "mainImage": {
                                "_type": "image",
                                "asset": {"_type": "reference", "_ref": asset_id},
                            }
                        },
                    }
                }]
            }

            patch_data = json.dumps(patch, ensure_ascii=False).encode("utf-8")
            patch_req = urllib.request.Request(
                MUTATE_API,
                data=patch_data,
                headers={
                    "Authorization": f"Bearer {TOKEN}",
                    "Content-Type": "application/json; charset=utf-8",
                },
                method="POST",
            )

            with urllib.request.urlopen(patch_req, timeout=30) as presp:
                presult = json.loads(presp.read())
                tx = presult.get("transactionId", "N/A")
                print(f"  Patched {post_id} → tx {tx}")

    except Exception as e:
        print(f"  ERROR: {e}")
        if hasattr(e, "read"):
            err_body = e.read().decode()[:400]
            print(f"  Response: {err_body}")

print("\n✅ All done.")
