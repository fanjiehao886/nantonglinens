import json
import urllib.request

PROJECT = "nk89o1k8"
DATASET = "production"
TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
POST_ID = "post-auto-20260830-1"
IMAGE_PATH = "/Users/nantongribao/Desktop/workspace/nantonglinens/generated-images/Professional_B2B_editorial_cov_2026-08-29T23-54-34.png"

# Step 1: Upload image to Sanity
with open(IMAGE_PATH, "rb") as f:
    img_bytes = f.read()
print(f"Image size: {len(img_bytes)} bytes")

upload_req = urllib.request.Request(
    f"https://{PROJECT}.api.sanity.io/v2024-01-01/assets/images/{DATASET}",
    data=img_bytes,
    headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "image/png"},
    method="POST",
)
asset = json.loads(urllib.request.urlopen(upload_req, timeout=60).read().decode())
asset_id = asset["document"]["_id"]
print(f"Asset ID: {asset_id}")
print(f"Asset response keys: {list(asset['document'].keys())}")

# Step 2: Patch mainImage to post
patch = {
    "mutations": [{
        "patch": {
            "id": POST_ID,
            "set": {
                "mainImage": {
                    "_type": "image",
                    "asset": {"_type": "reference", "_ref": asset_id}
                }
            }
        }
    }]
}
patch_req = urllib.request.Request(
    f"https://{PROJECT}.api.sanity.io/v2024-01-01/data/mutate/{DATASET}",
    data=json.dumps(patch, ensure_ascii=False).encode("utf-8"),
    headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"},
    method="POST",
)
patch_result = json.loads(urllib.request.urlopen(patch_req, timeout=30).read().decode())
print(f"Patch result: {json.dumps(patch_result, indent=2)}")
