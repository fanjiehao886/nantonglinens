#!/usr/bin/env python3
"""Upload cover image to Sanity and associate with blog post."""

import json
import urllib.request
import urllib.error

SANITY_PROJECT = "nk89o1k8"
SANITY_DATASET = "production"
SANITY_TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
API_BASE = f"https://{SANITY_PROJECT}.api.sanity.io/v2024-01-01"
IMAGE_PATH = "/Users/nantongribao/Desktop/workspace/nantonglinens/generated-images/Luxury_hotel_room_with_pristin_2026-08-13T23-54-10.png"
POST_DOC_ID = "post-auto-20260814-1"

# Step 1: Upload image to Sanity Assets API
print("Uploading image to Sanity...")
with open(IMAGE_PATH, "rb") as f:
    image_data = f.read()

upload_url = f"{API_BASE}/assets/images/{SANITY_DATASET}"
upload_req = urllib.request.Request(
    upload_url,
    data=image_data,
    headers={
        "Authorization": f"Bearer {SANITY_TOKEN}",
        "Content-Type": "image/png"
    },
    method="POST"
)

try:
    with urllib.request.urlopen(upload_req) as resp:
        upload_result = json.loads(resp.read().decode("utf-8"))
        asset_id = upload_result["document"]["_id"]
        print(f"Upload SUCCESS!")
        print(f"Asset ID: {asset_id}")
except urllib.error.HTTPError as e:
    error_body = e.read().decode("utf-8")
    print(f"Upload HTTP Error {e.code}: {error_body}")
    exit(1)
except Exception as e:
    print(f"Upload Error: {e}")
    exit(1)

# Step 2: Patch the post document to set mainImage
print(f"\nAssociating mainImage with post {POST_DOC_ID}...")
patch_payload = json.dumps({
    "mutations": [{
        "patch": {
            "id": POST_DOC_ID,
            "set": {
                "mainImage": {
                    "_type": "image",
                    "asset": {"_type": "reference", "_ref": asset_id}
                }
            }
        }
    }]
}).encode("utf-8")

mutate_url = f"{API_BASE}/data/mutate/{SANITY_DATASET}"
mutate_req = urllib.request.Request(
    mutate_url,
    data=patch_payload,
    headers={
        "Authorization": f"Bearer {SANITY_TOKEN}",
        "Content-Type": "application/json"
    },
    method="POST"
)

try:
    with urllib.request.urlopen(mutate_req) as resp:
        mutate_result = json.loads(resp.read().decode("utf-8"))
        print(f"Patch SUCCESS!")
        print(f"Transaction ID: {mutate_result.get('transactionId', 'N/A')}")
        print(f"\nFinal results:")
        print(f"  Post ID: {POST_DOC_ID}")
        print(f"  Asset ID: {asset_id}")
        print(f"  Image path: {IMAGE_PATH}")
except urllib.error.HTTPError as e:
    error_body = e.read().decode("utf-8")
    print(f"Patch HTTP Error {e.code}: {error_body}")
except Exception as e:
    print(f"Patch Error: {e}")
