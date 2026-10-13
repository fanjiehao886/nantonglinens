"""Upload cover image to Sanity and PATCH mainImage for 2026-09-04 post."""
import json
import urllib.request

PROJECT = "nk89o1k8"
DATASET = "production"
TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
IMAGE_PATH = "/Users/nantongribao/Desktop/workspace/nantonglinens/generated-images/Professional_B2B_editorial_cov_2026-09-04T04-02-21.png"
POST_ID = "post-auto-20260904-1"

# Step 1: Upload image
with open(IMAGE_PATH, "rb") as f:
    img_bytes = f.read()
print(f"[UPLOAD] Image size: {len(img_bytes)} bytes")

upload_req = urllib.request.Request(
    f"https://{PROJECT}.api.sanity.io/v2024-01-01/assets/images/{DATASET}",
    data=img_bytes,
    headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "image/png"},
    method="POST",
)
asset_resp = json.loads(urllib.request.urlopen(upload_req, timeout=60).read().decode())
asset_id = asset_resp["document"]["_id"]
print(f"[ASSET] {asset_id}")

# Step 2: PATCH mainImage
patch = {"mutations": [{"patch": {"id": POST_ID, "set": {"mainImage": {"_type": "image", "asset": {"_type": "reference", "_ref": asset_id}}}}}]}
patch_req = urllib.request.Request(
    f"https://{PROJECT}.api.sanity.io/v2024-01-01/data/mutate/{DATASET}",
    data=json.dumps(patch, ensure_ascii=False).encode("utf-8"),
    headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"},
    method="POST",
)
patch_resp = json.loads(urllib.request.urlopen(patch_req, timeout=30).read().decode())
print(f"[PATCH] {json.dumps(patch_resp, ensure_ascii=False, indent=2)}")
