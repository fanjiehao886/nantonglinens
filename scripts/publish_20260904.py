"""Publish 2026-09-04 auto blog: Two new China textile standards (GB/T 29862-2026 + GB/T 47782-2026)."""
import json
import urllib.request
from datetime import datetime, timezone

PROJECT = "nk89o1k8"
DATASET = "production"
TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
NOW_UTC = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

TITLE = "Hotel Linen Buyers: Two New China Textile Standards for 2026"
SLUG = "china-hotel-linen-2026-textile-standards-compliance"
EXCERPT = "Two new China textile standards - GB/T 29862-2026 fiber labels and GB/T 47782-2026 cooling tests - are reshaping hotel linen procurement compliance."

# Verify excerpt length
assert len(EXCERPT) <= 155, f"Excerpt too long: {len(EXCERPT)} chars"

doc = {
    "mutations": [{
        "create": {
            "_id": "post-auto-20260904-1",
            "_type": "post",
            "title": TITLE,
            "slug": {"_type": "slug", "current": SLUG},
            "excerpt": EXCERPT,
            "publishedAt": NOW_UTC,
            "categories": [{"_type": "reference", "_ref": "cat-textile-quality", "_key": "cattextileq"}],
            "author": {"_type": "reference", "_ref": "author-7745c84e"},
            "body": [
                {"_type": "block", "style": "normal", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "On July 2, 2026, China's National Standardization Administration quietly released two new textile standards that will reshape how every hotel procurement team sources from China. GB/T 29862-2026 rewrites the rules for fiber content labeling, while GB/T 47782-2026 introduces the country's first national test method for long-lasting moisture-wicking and cooling performance. Both standards take effect in 2027, giving sourcing teams roughly a year to align supplier documentation, product specifications, and commercial contracts. For hotel buyers, the message is clear: the days of vague marketing claims and inconsistent labels are ending, and the next twelve months will determine who is ready when the enforcement clock starts."}], "key": "intro"},

                {"_type": "block", "style": "h2", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "GB/T 29862-2026: The End of Digital-Only Fiber Labels"}], "key": "h2_1"},
                {"_type": "block", "style": "normal", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Replacing the 2013 version, GB/T 29862-2026 'Textiles - Technical Specification for Fiber Content Labeling' introduces three structural changes that directly affect every textile SKU shipped under a hotel brand. First, Section 4.11 mandates a directly visible physical label on every product. QR codes, mini-programs, and RFID chips can still accompany a label, but they can no longer replace it. Second, Section 4.5 requires that any e-commerce listing display fiber content identical to the physical label, eliminating the long-standing practice of 'online card says 100% cotton, product tag says 80% polyester.' Third, the standard bans the use of marketing-driven fiber names such as 'cloud cotton,' 'ice silk,' or other invented descriptors, requiring instead the use of standardized fiber terminology. For hotel buyers reviewing supplier catalogs, these changes mean a SKU cannot be described one way in the B2B quotation and another way on the retail-facing label or e-commerce page. The label is now the single source of truth."}], "key": "p_1"},
                {"_type": "block", "style": "normal", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "The new standard also adds labeling rules for previously ambiguous categories: recycled fibers, coated fibers, and bi-component composite fibers now have explicit guidance on how to declare content, and the tolerance window for declared versus tested fiber content is tightened. Sourcing teams should expect mill-side documentation to require updates across the board, particularly for blends that combine natural and synthetic fibers, where the older 2013 framework left interpretation gaps."}], "key": "p_2"},

                {"_type": "block", "style": "h2", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "GB/T 47782-2026: Quantifying Long-Cooling Performance"}], "key": "h2_2"},
                {"_type": "block", "style": "normal", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Until now, the only national benchmark for cooling textiles was GB/T 35263-2017, which measured the instant cool feel at the moment of skin contact. That test created a loophole: fabrics that felt cool for two seconds could be marketed as 'cooling' even if they trapped heat and moisture after the wearer started sweating. GB/T 47782-2026 closes this gap. The new method places the fabric sample on a constant-temperature plate inside a 35 degrees Celsius chamber, drips water onto the sample to simulate perspiration, and records the temperature drop over a ten-minute window. To qualify as having genuine moisture-wicking cooling performance, a textile must demonstrate a maximum temperature reduction of at least 7 degrees Celsius and a ten-minute average reduction of at least 6 degrees Celsius, both before and after a standardized wash cycle. The post-wash threshold is the most consequential part of the standard, because it ensures the cooling function survives commercial laundering, which typically runs at 60-85 degrees Celsius in hotel laundries."}], "key": "p_3"},
                {"_type": "block", "style": "normal", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "GB/T 47782-2026 takes effect on February 1, 2027, slightly earlier than the fiber content standard. The two standards are designed to work in parallel: hotels marketing a 'contact-cool' sensation can still rely on the 2017 method, but any claim of sustained cooling during sleep or extended wear must be backed by the new 2026 test. This dual-track system brings China into closer alignment with Japan and South Korea, where the JIS L 1950-1 and KS K 0340 frameworks have long required post-wash performance data for cooling claims."}], "key": "p_4"},

                {"_type": "block", "style": "h2", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Why Hotel Procurement Teams Should Act Now"}], "key": "h2_3"},
                {"_type": "block", "style": "normal", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "For hotel groups that source bed linens, towels, bathrobes, and sleepwear from China, the new standards raise the documentation bar in three measurable ways. First, the procurement specification must be rewritten to reference the new GB numbers, and any reference to older standards should be updated. Second, supplier quality agreements need to require test reports that demonstrate compliance with the new thresholds, particularly the post-wash cooling test and the physical-label visibility rule. Third, the B2B contract language around marketing claims should be tightened so that any product labeled 'cooling,' 'moisture-wicking,' or 'long-lasting fresh' is backed by a certified test report, not a supplier brochure. Hotel chains that delay this work risk discovering in 2027 that their existing inventory documentation does not satisfy the new standard, and that replacement sourcing, re-labeling, and re-testing will be required during a peak procurement window."}], "key": "p_5"},

                {"_type": "block", "style": "h2", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Recommended Compliance Timeline"}], "key": "h2_4"},
                {"_type": "block", "style": "normal", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Between now and January 2027, hotel buyers should focus on a transition phase. Audit the current SKU list and identify every product that makes a fiber-blend claim or a cooling/sweat-management claim. Request updated test reports from each nominated mill, confirming that the test is conducted according to the new method and that post-wash results meet the threshold. Between February and July 2027, when the cooling standard is already effective but the labeling standard is not, suppliers will begin rolling out new hangtags and care labels. Hotels should run a small batch of pilot orders to verify that the new labels are durable, readable after commercial washing, and consistent with the e-commerce product page if the product is sold through direct-to-guest channels. From August 1, 2027 onward, GB/T 29862-2026 becomes the binding reference, and any product without a compliant physical label and a matching online disclosure is technically non-compliant."}], "key": "p_6"},

                {"_type": "block", "style": "h2", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "Six Action Items for Sourcing Teams"}], "key": "h2_5"},
                {"_type": "block", "style": "normal", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "First, update the master procurement specification to cite GB/T 29862-2026 and GB/T 47782-2026 by name, and require suppliers to flag any deviation. Second, demand that mill samples carry a directly visible fiber content label and that any cooling claim is supported by a GB/T 47782-2026 test report showing pre-wash and post-wash results. Third, align internal e-commerce and in-room collateral with the physical label, eliminating any descriptive drift. Fourth, build a 'standards change log' in the supplier relationship management system so the transition is auditable. Fifth, negotiate a clause in supplier contracts that places the cost of re-labeling and re-testing on the supplier if the documentation does not match the new standard at delivery. Sixth, train front-office and housekeeping teams to recognize the new label and to flag products that still carry the 2013 fiber content code, which will appear on legacy stock throughout 2027."}], "key": "p_7"},

                {"_type": "block", "style": "h2", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "The Bigger Picture"}], "key": "h2_6"},
                {"_type": "block", "style": "normal", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "The two new standards are part of a broader 2026-2028 Chinese textile industry action plan coordinated by three ministries, targeting more than 300 national standards across fiber, fabric, finished product, and method categories. For the hotel sector, the practical effect is that compliance is becoming a procurement prerequisite rather than a quality bonus. Buyers who treat the new rules as a routine documentation update will absorb the change smoothly. Buyers who wait for enforcement notices will find themselves in a 2027 scramble, paying for rush testing, last-minute label redesigns, and supplier substitutions at the worst possible moment in the buying calendar."}], "key": "p_8"},

                {"_type": "block", "style": "normal", "markDefs": [], "children": [{"_type": "span", "marks": [], "text": "In summary, GB/T 29862-2026 makes the physical fiber label and the e-commerce listing the authoritative record of a textile's true content, while GB/T 47782-2026 forces every cooling claim to survive commercial laundering. Hotel procurement teams that begin aligning their specifications, supplier audits, and contract language now will protect their brand from compliance risk and gain a clear advantage in 2027, when the new rules reshape the competitive landscape. This article was adapted from Chinese textile industry sources. For custom hotel linen inquiries, visit nantonglinens.com."}], "key": "conclusion"},
            ]
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
print(json.dumps(resp, ensure_ascii=False, indent=2))
print(f"\n[TITLE LEN] {len(TITLE)} chars")
print(f"[EXCERPT LEN] {len(EXCERPT)} chars")
print(f"[SLUG] {SLUG}")
print(f"[POST ID] post-auto-20260904-1")
print(f"[NOW_UTC] {NOW_UTC}")
