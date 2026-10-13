# -*- coding: utf-8 -*-
"""Upload cover image and set mainImage for post-auto-20260916-1."""
import json
import urllib.request

PROJECT = "nk89o1k8"
DATASET = "production"
API = f"https://{PROJECT}.api.sanity.io/v2024-01-01"
TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
IMAGE_PATH = "/Users/nantongribao/Desktop/workspace/nantonglinens/generated-images/Professional_B2B_editorial_pho_2026-09-16T00-08-59.png"
POST_ID = "post-auto-20260916-1"

with open(IMAGE_PATH, "rb") as f:
    img_bytes = f.read()
print("IMG_BYTES:", len(img_bytes))

upload_req = urllib.request.Request(
    f"{API}/assets/images/{DATASET}",
    data=img_bytes,
    headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "image/png"},
    method="POST",
)
asset = json.loads(urllib.request.urlopen(upload_req, timeout=60).read().decode())
asset_id = asset["document"]["_id"]
print("ASSET_ID:", asset_id)

patch = {"mutations": [{"patch": {"id": POST_ID, "set": {"mainImage": {"_type": "image", "asset": {"_type": "reference", "_ref": asset_id}}}}}]}
patch_req = urllib.request.Request(
    f"{API}/data/mutate/{DATASET}",
    data=json.dumps(patch, ensure_ascii=False).encode("utf-8"),
    headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"},
    method="POST",
)
print(urllib.request.urlopen(patch_req, timeout=30).read().decode())
