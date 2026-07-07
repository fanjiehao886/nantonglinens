#!/usr/bin/env python3
"""Upload cover images to Sanity and associate with posts"""
import json
import urllib.request
import os

TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
ASSET_API = "https://nk89o1k8.api.sanity.io/v2021-06-07/assets/images/production"
MUTATE_API = "https://nk89o1k8.api.sanity.io/v2023-01-01/data/mutate/production"

IMAGE_POSTS = [
    {
        "image_path": "generated-images/A_close_up_photograph_of_natur_2026-06-26T02-34-07.png",
        "post_id": "post-fabric-encyclopedia-linen-20260626",
        "label": "Fabric Encyclopedia (Linen)"
    },
    {
        "image_path": "generated-images/A_hotel_financial_planning_sce_2026-06-26T02-34-07.png",
        "post_id": "post-hospitality-tips-cpor-20260626",
        "label": "Hospitality Tips (CPOR)"
    },
    {
        "image_path": "generated-images/Luxury_hotel_bedroom_with_whit_2026-06-26T02-34-07.png",
        "post_id": "post-hotel-bedding-filling-guide-20260626",
        "label": "Hotel Bedding (Filling Guide)"
    },
    {
        "image_path": "generated-images/Cargo_container_ships_at_a_maj_2026-06-26T02-34-07.png",
        "post_id": "post-market-reports-shipping-q3-20260626",
        "label": "Market Reports (Shipping)"
    },
    {
        "image_path": "generated-images/Professional_textile_color_tes_2026-06-26T02-34-35.png",
        "post_id": "post-qc-color-consistency-20260626",
        "label": "QC Checklist (Color)"
    },
    {
        "image_path": "generated-images/Textile_quality_testing_labora_2026-06-26T02-34-35.png",
        "post_id": "post-textile-quality-shrinkage-20260626",
        "label": "Textile Quality (Shrinkage)"
    },
    {
        "image_path": "generated-images/Professional_business_document_2026-06-26T02-34-35.png",
        "post_id": "post-buying-guide-rfp-template-20260626",
        "label": "Buying Guides (RFP)"
    },
]


def upload_image(image_path):
    """Upload image to Sanity using v2021-06-07 API"""
    with open(image_path, "rb") as f:
        image_data = f.read()

    req = urllib.request.Request(
        ASSET_API,
        data=image_data,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "image/png",
        },
        method="POST",
    )

    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read())
        asset_id = result["document"]["_id"]
        return asset_id


def patch_main_image(post_id, asset_id):
    """Patch post document to set mainImage"""
    mutation = {
        "mutations": [
            {
                "patch": {
                    "id": post_id,
                    "set": {
                        "mainImage": {
                            "_type": "image",
                            "asset": {
                                "_type": "reference",
                                "_ref": asset_id
                            }
                        }
                    }
                }
            }
        ]
    }

    data = json.dumps(mutation, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(
        MUTATE_API,
        data=data,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "application/json",
        },
    )

    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read())
        return result.get("transactionId")


def main():
    base_dir = "/Users/nantongribao/Desktop/workspace/nantonglinens"
    print("=" * 60)
    print("Uploading 7 cover images to Sanity")
    print("=" * 60)

    for i, item in enumerate(IMAGE_POSTS, 1):
        full_path = os.path.join(base_dir, item["image_path"])
        print(f"\n[{i}/7] {item['label']}")

        try:
            asset_id = upload_image(full_path)
            print(f"  Asset ID: {asset_id}")

            tx_id = patch_main_image(item["post_id"], asset_id)
            print(f"  Linked to post: {item['post_id']}")
            print(f"  Transaction: {tx_id}")

        except Exception as e:
            print(f"  ERROR: {e}")
            if hasattr(e, "read"):
                try:
                    print(f"  Response: {e.read().decode()[:500]}")
                except:
                    pass

    print("\n" + "=" * 60)
    print("All covers uploaded and linked.")
    print("=" * 60)


if __name__ == "__main__":
    main()
