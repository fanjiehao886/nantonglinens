#!/usr/bin/env python3
"""Upload cover image to Sanity and link as mainImage on post-auto-20260827-1"""
import json
import urllib.request
import os

PROJECT = "nk89o1k8"
DATASET = "production"
TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
POST_ID = "post-auto-20260827-1"

IMAGE_PATH = "/Users/nantongribao/Desktop/workspace/nantonglinens/generated-images/A_professional_hotel_bedroom_s_2026-08-27T07-49-30.png"

if not os.path.exists(IMAGE_PATH):
    raise FileNotFoundError(f"Image not found: {IMAGE_PATH}")

# Step 1: Upload image to Sanity Assets
with open(IMAGE_PATH, "rb") as f:
    image_bytes = f.read()

upload_url = f"https://{PROJECT}.api.sanity.io/v2024-01-01/assets/images/{DATASET}"
upload_req = urllib.request.Request(
    upload_url,
    data=image_bytes,
    headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "image/png",
    },
    method="POST",
)

with urllib.request.urlopen(upload_req, timeout=60) as resp:
    upload_result = json.loads(resp.read().decode("utf-8"))

asset_id = upload_result["document"]["_id"]
print(f"Asset uploaded: {asset_id}")
print(f"Dimensions: {upload_result.get('document', {}).get('metadata', {}).get('dimensions', {})}")

# Step 2: Patch the post to set mainImage
patch_url = f"https://{PROJECT}.api.sanity.io/v2024-01-01/data/mutate/{DATASET}"
patch_payload = {
    "mutations": [{
        "patch": {
            "id": POST_ID,
            "set": {
                "mainImage": {
                    "_type": "image",
                    "asset": {"_type": "reference", "_ref": asset_id},
                }
            }
        }
    }]
}

patch_req = urllib.request.Request(
    patch_url,
    data=json.dumps(patch_payload, ensure_ascii=False).encode("utf-8"),
    headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json",
    },
    method="POST",
)

with urllib.request.urlopen(patch_req, timeout=30) as resp:
    patch_result = json.loads(resp.read().decode("utf-8"))

print(f"Patch transaction: {patch_result['transactionId']}")
print(f"Operation: {patch_result['results'][0]['operation']}")
print(f"Asset ID set: {asset_id}")
