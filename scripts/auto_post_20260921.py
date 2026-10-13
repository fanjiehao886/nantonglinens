#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import urllib.request
from datetime import datetime, timezone

PROJECT = "nk89o1k8"
DATASET = "production"
TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
NOW_UTC = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

TITLE = "Cross-Border E-Commerce Reshapes China's Hotel Textile Supply Chain"
SLUG = "china-textile-cross-border-ecommerce-dieshiqiao"
EXCERPT = "China's Dieshiqiao textile cluster posted RMB 155 billion in 2025 sales with 31 overseas warehouses and 72-hour EU delivery. What it means for buyers."

assert len(EXCERPT) <= 155, f"Excerpt too long: {len(EXCERPT)}"
assert 50 <= len(TITLE) <= 70, f"Title length: {len(TITLE)}"

def block(key, style, text):
    return {"_type": "block", "style": style, "markDefs": [],
            "children": [{"_type": "span", "marks": [], "text": text}], "key": key}

body = [
    block("intro", "normal",
          "China's home textile industry has spent the past three years rebuilding how products reach overseas buyers, and the results are now measurable. At the Sixth China New E-Commerce Conference, a case study from Haimen District in Nantong was named one of the country's top twenty e-commerce innovations for 2025. The case describes how the Dieshiqiao textile cluster, the largest of its kind in the world, combined cross-border e-commerce platforms, overseas warehouses, and flexible manufacturing into a single supply chain. For hotel procurement managers who source bedding and linens from China, these changes directly affect lead times, order sizes, and pricing."),
    block("h2_1", "h2", "The Scale of the Dieshiqiao Cluster in 2025"),
    block("p_1", "normal",
          "Dieshiqiao, straddling Haimen District in Nantong, Jiangsu Province, is home to more than 4,000 textile manufacturers and over 200 design studios. The cluster and its surrounding area produce more than 1.2 billion bedding items per year, with a total industrial output exceeding RMB 200 billion. Products from this single cluster reach buyers in more than 130 countries and regions. In 2025, combined online and offline transaction volume through the Dieshiqiao market surpassed RMB 155 billion, including more than RMB 4 billion in home textile exports and over RMB 4 billion in cross-border e-commerce exports."),
    block("p_2", "normal",
          "Those figures matter to hospitality buyers for a simple reason: concentration. When fabric mills, bedding workshops, embroidery services, warehousing, and freight forwarders all operate within a few square kilometers, sample development is faster and unit costs are lower. A buyer who requests a custom 300-thread-count percale sheet set with embroidered logos can move from artwork to counter sample to bulk production without leaving the cluster."),
    block("h2_2", "h2", "From Full Containers to Small-Batch Quick Response"),
    block("p_3", "normal",
          "Historically, the biggest barrier for small and mid-sized buyers was order minimums. A single hotel group's requirements rarely filled a forty-foot container, and the paperwork for customs, logistics, and settlement was prohibitively complex for smaller firms. Many factories simply could not ship until they aggregated enough volume from multiple customers."),
    block("p_4", "normal",
          "That constraint has largely disappeared. The cluster now operates a hybrid model combining cross-border e-commerce, overseas warehousing, and industrial-belt integration. B2B and B2C channels run in parallel, supported by livestream commerce and semi-managed marketplace programs. Local factories have adopted digital production systems designed for small-batch, quick-turnaround orders. One widely cited arrangement links more than 4,000 sellers worldwide with over 100 vetted factories, transacting an average of 2 million textile items per month."),
    block("p_5", "normal",
          "For hotel buyers, the practical effect is flexibility. Pilot orders for a property refresh, mixed-category shipments that combine towels, bathrobes, and bedding, and repeat replenishment orders no longer require container-scale commitments. This is particularly relevant for boutique hotels and regional chains that manage inventory property by property rather than through centralized warehouses."),
    block("h2_3", "h2", "The Overseas Warehouse Network: 72-Hour Delivery to Europe"),
    block("p_6", "normal",
          "The most striking infrastructure statistic is warehousing. Dieshiqiao companies now operate 31 overseas warehouses covering Europe, North America, and countries along the Belt and Road, including nine provincial-level public warehouses, the most of any region in Jiangsu. Goods positioned in European warehouses can reach customers within 72 hours. The local international logistics park processes more than 1.5 million parcels per day."),
    block("p_7", "normal",
          "Hospitality procurement teams can use this network in two ways. First, replacement stock for emergency situations, such as linen damaged during a peak season, can arrive in days rather than the four to six weeks typical of ocean freight. Second, items stocked overseas in advance, such as standard-size towels and bedding sets, allow new properties to open on schedule without waiting for a full production and shipping cycle."),
    block("h2_4", "h2", "AI Is Entering the Sourcing Workflow"),
    block("p_8", "normal",
          "Digital tools are changing how buyers and factories find each other. In March 2026, a cross-border e-commerce enablement center opened in the Dieshiqiao phase-three market, offering AI-assisted product selection, immersive product displays, and brand incubation services under one roof. The center's stated three-year goal is to double the cluster's cross-border transaction volume and cultivate more than 200 active export enterprises."),
    block("p_9", "normal",
          "AI product-matching tools are useful, but they should complement, not replace, supplier due diligence. An algorithm can surface a factory whose catalog matches your specifications; it cannot verify shrinkage rates, colorfastness after fifty industrial launderings, or whether the stitching on a duvet cover will survive commercial laundry conditions. Buyers should treat AI-matched suppliers as candidates for sampling, not as pre-qualified vendors."),
    block("h2_5", "h2", "What This Means for Hotel Linen Buyers"),
    block("p_10", "normal",
          "Three takeaways stand out for procurement managers sourcing from China in 2026. First, minimum order quantities are falling across the cluster, which makes multi-property rollouts and trial orders more economical. Second, logistics options have multiplied: sea freight for planned bulk orders, air freight for urgent needs, and overseas warehouse stock for time-critical replenishment. Third, the buyer-matching event held in June 2026, where more than 200 Yiwu-based and international buyers visited the cluster and generated nearly RMB 100 million in intended orders within half a day, shows how aggressively the supply side is courting direct buyers."),
    block("p_11", "normal",
          "The flip side of easier access is wider variation in supplier quality. As more small workshops enter export markets through e-commerce channels, the gap between trading intermediaries, small processors, and vertically integrated factories becomes more consequential. A supplier that controls weaving, sewing, and finishing in-house can guarantee consistency across batches; a middleman reselling from whoever has idle capacity cannot."),
    block("h2_6", "h2", "Practical Checks Before You Commit"),
    block("p_12", "normal",
          "Before placing an order through any newly accessible channel, apply the same technical scrutiny you would with a traditional factory visit. Request third-party fabric test reports confirming fiber content, thread count, and shrinkage allowances, and write a shrinkage reserve of three to five percent into the contract for cotton bedding. Order counter samples and wash them at commercial laundry temperatures before approving bulk production."),
    block("p_13", "normal",
          "For embroidered or customized items, ask for physical examples of similar work and verify stitch density and colorfastness. Confirm in writing whether the factory or a trading company will hold responsibility for quality claims. Finally, clarify Incoterms early: with overseas warehousing now common, buyers should understand exactly where liability transfers, whether at the factory gate under FOB or at the destination warehouse."),
    block("h2_7", "h2", "The Bottom Line"),
    block("p_14", "normal",
          "China's hotel textile supply chain is faster, more granular, and more digitally connected than it was three years ago. The Dieshiqiao data confirms that scale and infrastructure are no longer the bottleneck for foreign buyers. The remaining variable is supplier selection: the easier it becomes to reach factories, the more important it is to distinguish manufacturers with genuine quality systems from sellers with attractive catalogs. Buyers who pair modern sourcing channels with disciplined technical verification will capture the speed benefits without absorbing the quality risk."),
    block("outro", "normal",
          "This article was adapted from Chinese textile industry sources. For custom hotel linen inquiries, visit nantonglinens.com."),
]

doc = {
    "mutations": [{
        "create": {
            "_id": "post-auto-20260921-1",
            "_type": "post",
            "title": TITLE,
            "slug": {"_type": "slug", "current": SLUG},
            "excerpt": EXCERPT,
            "publishedAt": NOW_UTC,
            "categories": [{"_type": "reference", "_ref": "cat-buying-guide", "_key": "catbuyingguide"}],
            "author": {"_type": "reference", "_ref": "author-7745c84e"},
            "body": body,
        }
    }]
}

req = urllib.request.Request(
    f"https://{PROJECT}.api.sanity.io/v2024-01-01/data/mutate/{DATASET}",
    data=json.dumps(doc, ensure_ascii=False).encode("utf-8"),
    headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"},
    method="POST",
)
resp = json.loads(urllib.request.urlopen(req, timeout=30).read().decode())
print(json.dumps(resp))
print("TITLE_LEN", len(TITLE))
print("EXCERPT_LEN", len(EXCERPT))
