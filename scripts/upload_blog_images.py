#!/usr/bin/env python3
"""Organize generated images, upload to Sanity, and patch posts with mainImage."""
import os
import glob
import urllib.request
import urllib.parse
import json
import shutil

TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
PROJECT = "nk89o1k8"
ASSET_API = f"https://{PROJECT}.api.sanity.io/v2021-06-07/assets/images/production"
MUTATE_API = f"https://{PROJECT}.api.sanity.io/v2023-01-01/data/mutate/production"
BASE = "/Users/nantongribao/Desktop/workspace/nantonglinens/generated-images"

# Mapping: post_id -> (directory, filename_prefix)
MAPPING = {
    # Fabric Encyclopedia
    "fabric-encyclopedia-cotton-types": ("fabric-encyclopedia", "Professional_photograph_of_dif"),
    "fabric-encyclopedia-percale-vs-sateen": ("fabric-encyclopedia", "Close_up_comparison_of_percale"),
    "fabric-encyclopedia-tencel-lyocell": ("fabric-encyclopedia", "Luxurious_Tencel_lyocell_hotel"),
    "fabric-encyclopedia-tc-blends": ("fabric-encyclopedia", "Polyester_cotton_blend_fabric"),
    "fabric-encyclopedia-finishing": ("fabric-encyclopedia", "Hotel_linen_fabric_finishing_p"),
    "fabric-encyclopedia-bamboo-fibers": ("qc-checklist", "Bamboo_fiber_hotel_bedding"),
    "seed-hotel-linen-fabric-guide-gsm-thread-count-weave-types": ("qc-checklist", "Comprehensive_hotel_linen_fabr"),
    # QC Checklist
    "qc-checklist-bed-sheets": ("qc-checklist", "Hotel_bed_sheet_quality_inspec"),
    "qc-checklist-towels": ("qc-checklist", "Hotel_towel_quality_control_te"),
    "qc-checklist-duvet-pillowcase": ("qc-checklist", "Hotel_duvet_cover_and_pillowca"),
    "qc-checklist-bathrobes": ("qc-checklist", "Hotel_bathrobe_quality_inspect"),
    "qc-checklist-table-linen": ("qc-checklist", "Hotel_table_linen_and_napkin_q"),
    "qc-checklist-pre-shipment": ("qc-checklist", "Hotel_linen_pre_shipment_quali"),
    "seed-hotel-linen-quality-control-checklist-pre-shipment-inspection": ("market-reports", "Hotel_linen_quality_control_ch"),
    # Market Reports
    "market-report-raw-material-q2-2026": ("market-reports", "Textile_raw_materials_price_in"),
    "market-report-dieshiqiao-june-2026": ("market-reports", "Nantong_Dieshiqiao_textile_mar"),
    "market-report-global-trends-2026": ("market-reports", "Global_hotel_linen_procurement"),
    "market-report-cotton-outlook-2026": ("market-reports", "China_cotton_market_forecast"),
    "market-report-import-regulations-2026": ("market-reports", "International_shipping_contain"),
    "market-report-sustainable-linen-2026": ("market-reports", "Sustainable_hotel_linen_market"),
    "seed-china-hotel-linen-market-report-pricing-trends-2026": ("market-reports", "China_hotel_linen_market_analy"),
}

def find_file(directory, prefix):
    """Find the image file in directory that starts with prefix."""
    pattern = os.path.join(BASE, directory, f"{prefix}*.png")
    matches = glob.glob(pattern)
    if matches:
        return matches[0]
    return None

def upload_image(filepath, post_id):
    """Upload image to Sanity assets and return the asset _id."""
    with open(filepath, "rb") as f:
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
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read())
        return result["document"]["_id"]
    except Exception as e:
        print(f"  ERROR uploading {filepath}: {e}")
        return None

def patch_post(post_id, asset_id):
    """Patch the Sanity post with mainImage reference."""
    mutation = {
        "mutations": [{
            "patch": {
                "id": post_id,
                "set": {
                    "mainImage": {
                        "_type": "image",
                        "asset": {
                            "_type": "reference",
                            "_ref": asset_id,
                        },
                    }
                },
            }
        }]
    }
    data = json.dumps(mutation).encode("utf-8")
    req = urllib.request.Request(
        MUTATE_API,
        data=data,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read())
        return result
    except Exception as e:
        print(f"  ERROR patching {post_id}: {e}")
        return None

def main():
    results = []
    for post_id, (directory, prefix) in MAPPING.items():
        filepath = find_file(directory, prefix)
        if not filepath:
            print(f"SKIP {post_id}: no file found for prefix '{prefix}' in {directory}")
            results.append((post_id, "SKIP", None))
            continue

        print(f"Uploading {post_id}: {os.path.basename(filepath)} ({os.path.getsize(filepath)} bytes)")
        asset_id = upload_image(filepath, post_id)
        if not asset_id:
            results.append((post_id, "UPLOAD_FAIL", None))
            continue

        print(f"  Asset ID: {asset_id}")
        print(f"  Patching {post_id}...")
        patch_result = patch_post(post_id, asset_id)
        if patch_result:
            results.append((post_id, "OK", asset_id))
            print(f"  DONE")
        else:
            results.append((post_id, "PATCH_FAIL", asset_id))

    print("\n" + "=" * 60)
    print("SUMMARY:")
    ok = sum(1 for _, status, _ in results if status == "OK")
    fail = sum(1 for _, status, _ in results if status != "OK")
    print(f"  Total: {len(results)}, OK: {ok}, Failed: {fail}")
    for post_id, status, asset_id in results:
        marker = "✓" if status == "OK" else "✗"
        print(f"  {marker} {post_id} -> {status} {asset_id or ''}")

if __name__ == "__main__":
    main()
