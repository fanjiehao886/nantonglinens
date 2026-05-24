#!/usr/bin/env python3
"""Upload product images to Sanity and associate them with products."""

import os
import json
import urllib.request
import urllib.error

SANITY_PROJECT = "nk89o1k8"
SANITY_DATASET = "production"
SANITY_TOKEN = "skJlnKsUiRegErbeTJ2iCy6fM8tv6gsrnC7kmVLPv0wfakib9coE9tnZkavUsuOrtn91bFcEFxBYdMVGldL09M9RnbhBwGO8md6y2BWKIhRt4MgRpzrggsPLuxh7bIZx1VQ5VVBSJ8AB9q1ww4ClolfvKQQf4oPi7O4Rklz5bvXnn6vL7r6e"
API_BASE = f"https://{SANITY_PROJECT}.api.sanity.io/v2024-01-01"

PRODUCTS_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "products")

# Map category names (from Sanity) to image filenames
CATEGORY_IMAGE_MAP = {
    "Bed Sheets": "bedsheets.png",
    "Bath Towels": "towels.png",
    "Duvet Covers": "duvet.png",
    "Pillowcases": "pillowcases.png",
    "Mattress Toppers": "mattress.png",
    "Table Linen": "tablelinen.png",
    "Table Linens": "tablelinen.png",
    "Bathrobes": "bathrobes.png",
    "Pool & Beach Towels": "pooltowels.png",
    "Bath Mats": "bathmats.png",
}

def sanity_request(method, path, data=None, content_type=None):
    """Make a Sanity API request."""
    url = f"{API_BASE}/{path}"
    headers = {"Authorization": f"Bearer {SANITY_TOKEN}"}
    
    body = None
    if data is not None:
        if content_type:
            headers["Content-Type"] = content_type
            body = data
        else:
            headers["Content-Type"] = "application/json"
            body = json.dumps(data).encode("utf-8")
    
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"  HTTP {e.code}: {body[:300]}")
        return None

def upload_image(filepath, filename):
    """Upload an image to Sanity Assets."""
    print(f"  Uploading {filename}...")
    with open(filepath, "rb") as f:
        image_data = f.read()
    
    result = sanity_request(
        "POST",
        f"assets/images/{SANITY_DATASET}",
        data=image_data,
        content_type="image/png",
    )
    
    if result:
        asset_id = result["document"]["_id"]
        asset_url = result["document"].get("url", "")
        print(f"    -> Asset ID: {asset_id}")
        print(f"    -> URL: {asset_url}")
        return asset_id
    else:
        print(f"    -> FAILED")
        return None

def query_products():
    """Get all products from Sanity."""
    query = '*[_type == "product"]{_id, name, category}'
    encoded = urllib.parse.quote(query)
    result = sanity_request("GET", f"data/query/{SANITY_DATASET}?query={encoded}")
    return result["result"] if result else []

def patch_product_images(product_id, asset_ref, hot_spot=None):
    """Update a product's images field with a Sanity asset reference."""
    # Sanity image object format
    image_obj = {
        "_type": "image",
        "asset": {
            "_type": "reference",
            "_ref": asset_ref,
        },
        "alt": "Product image",
    }
    if hot_spot:
        image_obj["hotspot"] = hot_spot
    
    mutations = [{
        "patch": {
            "id": product_id,
            "set": {
                "images": [image_obj],
            },
        }
    }]
    
    result = sanity_request("POST", f"data/mutate/{SANITY_DATASET}", data={"mutations": mutations})
    return result is not None

def main():
    print("=== Uploading product images to Sanity ===\n")
    
    # Step 1: Upload all images
    asset_map = {}  # category -> asset_id
    for category, filename in CATEGORY_IMAGE_MAP.items():
        if category in asset_map:
            continue
        filepath = os.path.join(PRODUCTS_DIR, filename)
        if not os.path.exists(filepath):
            print(f"  WARNING: {filename} not found, skipping {category}")
            continue
        asset_id = upload_image(filepath, filename)
        if asset_id:
            asset_map[category] = asset_id
        print()
    
    print(f"Uploaded {len(asset_map)} images.\n")
    
    # Step 2: Query all products
    print("=== Querying products ===\n")
    products = query_products()
    print(f"Found {len(products)} products.\n")
    
    # Step 3: Patch each product with its category image
    print("=== Patching products ===\n")
    success = 0
    for p in products:
        pid = p["_id"]
        name = p["name"]
        category = p["category"]
        
        asset_id = asset_map.get(category)
        if not asset_id:
            print(f"  SKIP {name} - no image for category '{category}'")
            continue
        
        ok = patch_product_images(pid, asset_id)
        if ok:
            print(f"  OK   {name} ({category})")
            success += 1
        else:
            print(f"  FAIL {name} ({category})")
    
    print(f"\nDone! Updated {success}/{len(products)} products.")

if __name__ == "__main__":
    main()
