"""Upload blog cover images to Sanity and patch post documents with mainImage."""

from __future__ import annotations

import json
import requests
from pathlib import Path

TOKEN = "skJlnKsUiRegErbeTJ2iCy6fM8tv6gsrnC7kmVLPv0wfakib9coE9tnZkavUsuOrtn91bFcEFxBYdMVGldL09M9RnbhBwGO8md6y2BWKIhRt4MgRpzrggsPLuxh7bIZx1VQ5VVBSJ8AB9q1ww4ClolfvKQQf4oPi7O4Rklz5bvXnn6vL7r6e"
PROJECT_ID = "nk89o1k8"
DATASET = "production"
API_BASE = f"https://{PROJECT_ID}.api.sanity.io/v2024-01-01"

HEADERS = {"Authorization": f"Bearer {TOKEN}"}

# Map: image filename -> (post slug, alt text)
MAPPING = [
    ("choose-linens.png", "how-to-choose-hotel-linens-guide", "Hospitality buyer inspecting premium hotel bed sheets"),
    ("laundry-care.png", "hotel-linen-laundry-care-guide", "Commercial hotel laundry room with fresh white linens"),
    ("cotton-types.png", "cotton-types-hotel-bedding-comparison", "Comparison of three hotel bedding cotton fabric types"),
    ("moq-lead-time.png", "hotel-linen-moq-lead-time-explained", "Textile factory floor with shipping documents and linen fabric"),
]

BLOG_DIR = Path(__file__).parent.parent / "public" / "blog"


def upload_image(filepath: Path) -> dict:
    """Upload image to Sanity and return the asset doc."""
    ext = filepath.suffix.lstrip(".")
    mime = {"png": "image/png", "jpg": "image/jpeg", "jpeg": "image/jpeg"}.get(ext, "image/png")

    with open(filepath, "rb") as f:
        image_data = f.read()

    resp = requests.post(
        f"{API_BASE}/assets/images/{DATASET}",
        headers={**HEADERS, "Content-Type": mime},
        data=image_data,
    )
    resp.raise_for_status()
    asset = resp.json()
    print(f"  Uploaded: {filepath.name} -> assetId: {asset['document']['_id']}")
    return asset["document"]


def get_post_by_slug(slug: str) -> str | None:
    """Find post _id by slug (skip drafts, most recently created first)."""
    query = f'*[_type=="post" && !(_id in path("drafts.**")) && slug.current=="{slug}"] | order(_createdAt desc)[0]._id'
    resp = requests.get(
        f"{API_BASE}/data/query/{DATASET}",
        headers=HEADERS,
        params={"query": query},
    )
    resp.raise_for_status()
    result = resp.json()["result"]
    return result


def patch_post_mainimage(post_id: str, asset_id: str, alt: str):
    """Patch a post document to add mainImage."""
    patch = {
        "set": {
            "mainImage": {
                "_type": "image",
                "asset": {
                    "_type": "reference",
                    "_ref": asset_id,
                },
                "alt": alt,
            }
        }
    }
    resp = requests.post(
        f"{API_BASE}/data/mutate/{DATASET}",
        headers={**HEADERS, "Content-Type": "application/json"},
        json={
            "mutations": [
                {"patch": {"id": post_id, "set": patch["set"]}}
            ]
        },
    )
    resp.raise_for_status()
    print(f"  Patched: {post_id}")


def main():
    for filename, slug, alt in MAPPING:
        filepath = BLOG_DIR / filename
        print(f"\nProcessing: {filename} -> {slug}")

        # 1. Upload image
        asset = upload_image(filepath)
        asset_id = asset["_id"]

        # 2. Find post
        post_id = get_post_by_slug(slug)
        if not post_id:
            print(f"  WARNING: No post found for slug '{slug}', skipping")
            continue
        print(f"  Found post: {post_id}")

        # 3. Patch post
        patch_post_mainimage(post_id, asset_id, alt)

    print("\nDone! All blog images uploaded and linked.")


if __name__ == "__main__":
    main()
