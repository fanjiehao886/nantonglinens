#!/usr/bin/env python3
"""Publish 6 Fabric Encyclopedia articles to Sanity CMS."""
import json
import urllib.request
import sys

TOKEN = "skWFHcgBgCZaKIBps0LbdTip88hEmh4GkfRF1lBhwDL9hNpziCwc9BuBzmuM7YjugQkWWbAHDXdUs9I6fcRkucCOBFXvXV0TXfSXfZJsq3tRkdnUWrYo9IKS9xpAejKLQ2VDEsGQq2IQBeIb5TVfGG1LzupeVxxYtpV5NTeEuaVu9LUVSClD"
API = "https://nk89o1k8.api.sanity.io/v2023-01-01/data/mutate/production"
CAT_REF = {"_type": "reference", "_ref": "cat-fabric-encyclopedia"}

articles = [
    {
        "_type": "post",
        "_id": "fabric-encyclopedia-cotton-types",
        "title": "Cotton Types for Hotel Linens: Egyptian, Pima & Long-Staple Explained",
        "slug": {"_type": "slug", "current": "hotel-linen-cotton-types-guide"},
        "excerpt": "Compare Egyptian, Pima, and long-staple cotton for hotel bedding. Learn which fiber delivers the best durability, softness, and ROI for your property.",
        "publishedAt": "2026-06-22T00:00:00Z",
        "categories": [CAT_REF],
        "body": [
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Cotton is the foundation of hotel bedding. But not all cotton is equal. The difference between a sheet that pills after 50 washes and one that stays smooth through 200 industrial laundry cycles often comes down to the cotton variety itself. For hotel procurement managers, understanding cotton types is not an academic exercise — it directly affects guest satisfaction scores, replacement cycles, and per-room linen budgets."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "What Makes Cotton \"Long-Staple\"?"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Cotton fiber length — measured as staple length — is the single most important quality indicator. Short-staple cotton (under 1 1/8 inch) produces yarn with more exposed fiber ends, leading to a rougher hand feel and increased pilling. Long-staple cotton (1 1/4 inch and above) spins into smoother, stronger yarns with fewer splices. The result: a tighter weave, higher thread count potential, and dramatically better durability. For hotel applications, long-staple cotton typically delivers 40-60% longer service life compared to short-staple equivalents."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Egyptian Cotton: The Gold Standard"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Egyptian cotton (Gossypium barbadense) produces the longest, finest fibers in the world — typically 1 3/8 to 1 1/2 inches. Its extra-long staple yields yarn with exceptional strength and a naturally lustrous finish. For 5-star hotels, Egyptian cotton sheets in 300-600 thread count represent the premium tier. However, genuine Egyptian cotton accounts for less than 1% of global cotton production. Many products labeled \"Egyptian cotton\" are blends or entirely different varieties. When sourcing, always request fiber origin certification and lab test reports. At our partner mills in Nantong, we source certified Giza-region Egyptian cotton with full traceability documentation."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Pima/Supima Cotton: The American Premium"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Pima cotton, grown primarily in the US Southwest, is another extra-long-staple variety (1 3/8 inch). Supima is the trademarked certification that guarantees 100% American Pima cotton. It offers excellent softness and durability, comparable to Egyptian cotton but with a slightly different hand feel — many hoteliers describe Pima as \"crisper\" and Egyptian as \"silkier.\" Price-wise, Supima typically runs 15-20% below certified Egyptian cotton, making it a strong value proposition for upper-midscale to upscale properties. Pima is particularly well-suited for high-thread-count sateen weaves where its fiber length prevents the thin spots that plague lesser cottons at 400+ thread counts."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Xinjiang Long-Staple Cotton: The Value Champion"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "China's Xinjiang region produces long-staple cotton with fiber lengths of 1 1/4 to 1 3/8 inch — entering true long-staple territory at a fraction of Egyptian cotton prices. Xinjiang long-staple cotton has become the workhorse of the global hotel linen industry. It delivers 80-90% of the performance characteristics of Egyptian cotton at 30-40% of the cost. For midscale hotels, chain properties, and budget-conscious procurement managers, Xinjiang long-staple cotton represents the optimal price-performance ratio. Our Nantong partner factories maintain direct supply relationships with Xinjiang cotton mills, eliminating intermediaries and ensuring competitive FOB pricing."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Upland Cotton: Budget Option with Tradeoffs"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Upland cotton (Gossypium hirsutum) is the world's most common cotton, with staple lengths of 7/8 to 1 1/8 inch. It's widely used in economy hotel linens but comes with notable drawbacks: rougher texture, faster pilling, lower absorbency, and shorter service life (typically 100-150 washes vs. 200+ for long-staple). While the upfront cost is 50-60% lower, the total cost of ownership often exceeds long-staple alternatives due to more frequent replacement cycles. We generally recommend Upland cotton only for budget properties with annual linen replacement programs or for guest rooms with seasonal occupancy patterns where durability is less critical."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "How to Verify Cotton Quality When Sourcing from China"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "When procuring cotton linens from Chinese suppliers, insist on the following documentation: fiber length test reports (ASTM D1447), yarn count certification, fabric weight (GSM) verification, and color fastness test results (AATCC 61). Reputable Nantong mills provide these as standard with bulk orders. Additionally, request a pre-production sample for independent lab testing before confirming the production run. Our on-site QC team in Nantong performs fiber length verification using high-volume instrument testing at every stage from raw cotton bale inspection through finished product sampling."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Procurement Recommendation by Hotel Tier"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Luxury/5-Star: Certified Egyptian cotton, 400-600 TC sateen or percale. Budget $35-55 per sheet set (FOB Nantong). Upper-Upscale: Supima or Xinjiang long-staple, 300-400 TC. Budget $22-35 per sheet set. Midscale: Xinjiang long-staple, 250-300 TC. Budget $15-22 per sheet set. Economy: Xinjiang long-stapble or Upland blends, 200-250 TC. Budget $10-15 per sheet set. All prices are indicative FOB Nantong for bulk orders (500+ sets). Contact us with your specifications for a precise quotation."}]
            }
        ]
    },
    {
        "_type": "post",
        "_id": "fabric-encyclopedia-percale-vs-sateen",
        "title": "Percale vs Sateen: Hotel Bedding Weave Types Compared",
        "slug": {"_type": "slug", "current": "percale-vs-sateen-hotel-bedding-weave-comparison"},
        "excerpt": "Percale or sateen for your hotel? Compare weave types on crispness, durability, wrinkle resistance, and guest preference to make the right procurement choice.",
        "publishedAt": "2026-06-22T00:00:00Z",
        "categories": [CAT_REF],
        "body": [
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Hotel procurement managers face a fundamental decision when selecting bed linens: percale or sateen? This choice affects not only the guest experience but also laundry costs, replacement cycles, and housekeeping workflow. Understanding the structural differences between these two weave types — and how they perform in commercial hospitality environments — is essential for making informed purchasing decisions."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "The Weave Difference: One-Over-One-Under vs. Four-Over-One-Under"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Percale uses a plain weave: one warp thread over, one weft thread under, in a tight grid pattern. This creates a matte finish with a crisp, cool hand feel. Sateen uses a satin weave: typically four warp threads over one weft thread. This exposes more of the yarn surface on the face side, producing a silky, lustrous finish. The structural difference has cascading effects: percale is inherently more breathable (more gaps in the weave), while sateen feels warmer against the skin (less air circulation). Sateen's floating yarns create a smoother surface but are more susceptible to snagging and pilling than percale's tightly interlocked grid."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Percale: The Hotel Industry Workhorse"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Percale dominates the hotel industry for good reason. Its plain weave structure delivers superior durability — the fabric resists pilling, snagging, and thinning through hundreds of industrial wash cycles. It feels crisp and cool, which guests consistently associate with cleanliness and freshness. From an operational standpoint, percale sheets are easier to iron and fold, reducing housekeeping time per room. Most major hotel chains — Marriott, Hilton, IHG — standardize on percale for their core bedding programs. Typical specifications: 200-300 thread count for everyday use, 300-400 for premium rooms. Percale performs best at thread counts under 400; beyond that, the dense weave can reduce breathability without meaningful comfort gains."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Sateen: The Luxury Guest Experience"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Sateen is the choice for properties prioritizing the tactile guest experience. Its silky, drapey hand feel creates an immediate impression of luxury — guests notice the difference the moment they touch the sheets. Sateen also photographs better, making it ideal for properties that rely on visual marketing. However, sateen requires more careful handling: it wrinkles more easily (higher housekeeping labor for pressing), snags more readily on rough surfaces, and may show wear faster than percale under identical wash conditions. For 5-star and luxury boutique properties where guests expect indulgence, sateen remains the gold standard. Typical specifications: 300-600 thread count, with 400-500 being the sweet spot for balancing luxury feel with practical durability."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Thread Count Reality Check: Don't Be Fooled"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "A common procurement mistake is equating higher thread count with better quality — this is especially dangerous with sateen. Some suppliers inflate thread counts by counting individual plies in multi-ply yarns rather than actual woven threads. A legitimate 300 TC percale sheet will outperform a misleading \"1000 TC\" sateen sheet made with low-grade short-staple cotton. For percale, the practical maximum is around 400 TC. For sateen, 500-600 TC is the genuine ceiling for quality products. Beyond these thresholds, manufacturers are using creative counting methods rather than delivering real performance improvements. Always verify thread count specifications with an independent lab test rather than relying on packaging claims."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Laundry and Maintenance Comparison"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "In commercial laundry environments, percale and sateen behave differently. Percale releases stains more easily due to its tighter weave structure, requiring less aggressive chemical treatment. It also dries faster — 10-15% shorter dryer cycles compared to equivalent-weight sateen. Sateen's smoother surface resists initial staining but holds onto oils and skincare product residues more stubbornly, often requiring pre-treatment in hotel laundry operations. Over time, sateen loses its lustrous finish gradually (noticeable after 80-100 washes), while percale's matte appearance remains consistent throughout its lifespan. For properties with on-premise laundry, the operational cost differential favors percale by approximately 8-12% per wash cycle when accounting for chemical, energy, and labor differences."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Making the Right Choice for Your Property"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Choose percale if: you operate a midscale to upscale property prioritizing durability and operational efficiency; your guests value crisp, cool bedding; you have high room turnover rates. Choose sateen if: you operate a luxury property where guest tactile experience drives reviews and repeat bookings; your housekeeping team has capacity for higher-maintenance linens; your marketing emphasizes visual luxury. Many properties use a hybrid approach — percale for standard rooms, sateen for suites and VIP accommodations. This strategy balances operational costs while still offering a premium upgrade path. Our Nantong partner mills produce both weaves to identical quality standards, allowing single-supplier procurement across your entire linen program."}]
            }
        ]
    },
    {
        "_type": "post",
        "_id": "fabric-encyclopedia-tencel-lyocell",
        "title": "Tencel & Lyocell for Hotel Linens: The Sustainable Luxury Fiber Guide",
        "slug": {"_type": "slug", "current": "tencel-lyocell-hotel-bed-linen-sustainable-guide"},
        "excerpt": "Discover why Tencel and Lyocell are reshaping hotel linen procurement. Sustainable, silky-smooth, and moisture-wicking — perfect for eco-conscious luxury properties.",
        "publishedAt": "2026-06-22T00:00:00Z",
        "categories": [CAT_REF],
        "body": [
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "The hospitality industry is under increasing pressure to demonstrate environmental responsibility — and guest expectations are rising in parallel. A 2025 Booking.com survey found that 76% of travelers prefer eco-certified accommodations. Tencel and Lyocell fibers have emerged as the leading sustainable alternative to conventional cotton in hotel bedding, offering a unique combination of environmental credentials and luxury performance that appeals to both procurement managers and eco-conscious guests."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Tencel vs. Lyocell: Understanding the Terminology"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Lyocell is the generic fiber name — a regenerated cellulose fiber made from wood pulp through a closed-loop solvent spinning process. Tencel is the branded Lyocell produced exclusively by Austria's Lenzing AG, the industry leader. The difference matters: Tencel carries Lenzing's full chain-of-custody certification guaranteeing sustainably harvested wood (primarily eucalyptus) and the closed-loop production process that recovers and reuses 99.8% of the solvent. Generic Lyocell from other manufacturers may not meet the same environmental standards. For hotel procurement, specifying \"Lenzing Tencel\" ensures you receive the genuine article with verifiable sustainability credentials that you can communicate to guests."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Performance Characteristics: Why Hotels Choose Tencel"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Tencel outperforms cotton in several dimensions critical to hotel applications. Moisture management: Tencel absorbs 50% more moisture than cotton and releases it faster — guests sleep cooler and drier, and sheets dry faster in laundry cycles (energy savings). Smoothness: Under electron microscopy, Tencel fibers show an exceptionally smooth surface without the natural irregularities of cotton, producing fabric that feels consistently silkier against skin. This smoothness also inhibits bacterial growth — Tencel naturally resists bacterial colonization without chemical treatments, a hygiene advantage in hospitality settings. Strength: Wet Tencel retains approximately 85% of its dry strength, compared to cotton's 70%, translating to better durability through repeated commercial washing."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Sustainability Credentials that Matter to Guests"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Tencel's environmental story is genuinely compelling and guest-communicable. The raw material — eucalyptus wood — grows on marginal land unsuitable for food crops, requires no irrigation (rain-fed), and needs no pesticides. The closed-loop production process recovers 99.8% of the amine oxide solvent, making it one of the most water-efficient textile fibers in existence — Tencel production uses approximately 10-20% of the water required for conventional cotton. Lenzing's fibers are certified biodegradable and compostable under industrial, soil, freshwater, and marine conditions. Many properties feature these facts on room cards or website sustainability pages, directly connecting the linen choice to their environmental commitments."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Blending Tencel with Cotton: The Best of Both Worlds"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Pure Tencel fabrics can be expensive and may feel too slick for some guests accustomed to cotton's familiar texture. The practical sweet spot for hotel applications is the Tencel-cotton blend, typically 30% Tencel / 70% long-staple cotton or 50/50. These blends deliver most of Tencel's moisture-wicking and smoothness benefits while maintaining the crisp structure and lower cost of cotton. 30/70 blends add approximately 15-20% to the fabric cost versus pure cotton but extend linen service life through better wet strength and reduced pilling. 50/50 blends are positioned for luxury eco-tier rooms, offering a distinctive hand feel that differentiates premium accommodations. Our Nantong mills produce Tencel-cotton blend sheets with both percale and sateen weaves, providing flexibility across property tiers."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Care and Laundering Considerations"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Tencel and Tencel-blend linens require slightly adjusted laundry protocols. Wash temperature should not exceed 40°C (104°F) — higher temperatures can cause fibrillation (surface fuzzing) on pure Tencel fabrics. Avoid chlorine bleach; oxygen-based bleaches are compatible. Tumble dry on low to medium heat; high heat can set wrinkles permanently. The good news: Tencel blends dry faster than pure cotton, reducing dryer energy consumption by roughly 15-20%. With proper care, Tencel-blend hotel linens deliver 200-250 commercial wash cycles before showing noticeable wear, comparable to or exceeding high-quality all-cotton alternatives."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Sourcing Tencel Hotel Linens from China"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "When sourcing Tencel-blend hotel linens from Chinese manufacturers, request Lenzing certification documentation for every order. Legitimate Tencel users receive a Lenzing Certificate that traces the fiber from Austrian production to the Chinese weaving mill. Without this certificate, you may be receiving generic Lyocell of unknown provenance. Our partner mills in Nantong are authorized Lenzing Tencel fabric producers with documented supply chain traceability. We provide the Lenzing certification with every Tencel-containing order as standard documentation. Typical lead time for custom Tencel-blend orders is 25-30 days, with MOQ of 200 sets per specification."}]
            }
        ]
    },
    {
        "_type": "post",
        "_id": "fabric-encyclopedia-tc-blends",
        "title": "Polyester-Cotton Blends for Hotel Linens: T/C Ratios Guide",
        "slug": {"_type": "slug", "current": "polyester-cotton-blend-hotel-linen-tc-ratio-guide"},
        "excerpt": "T/C 80/20, 65/35, or 50/50? Master polyester-cotton blend ratios for hotel linens. Balance cost, durability, and guest comfort with the right specification.",
        "publishedAt": "2026-06-22T00:00:00Z",
        "categories": [CAT_REF],
        "body": [
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Polyester-cotton blends — commonly abbreviated as T/C (short for Terylene/Cotton) in Chinese textile industry terminology — are the most widely used fabrics in the global hotel linen market. They dominate the economy and midscale segments because they solve a fundamental procurement challenge: how to deliver acceptable guest comfort at a price point that works for high-volume, margin-sensitive operations. Understanding blend ratios is essential for making specifications that balance cost, durability, and guest experience."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "How T/C Ratios Work: The Percentage Rule"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "T/C ratios are typically expressed as polyester/cotton percentages. T/C 80/20 means 80% polyester, 20% cotton. T/C 65/35 means 65% polyester, 35% cotton. CVC (Chief Value Cotton) reverses the ratio — typically CVC 60/40 means 60% cotton, 40% polyester. The first number is always polyester in standard T/C notation. The ratio directly determines the fabric's balance of properties: higher polyester = more durability, less cost, but reduced breathability and a more synthetic hand feel. Higher cotton = better comfort, more natural feel, but higher cost and more wrinkling. There is no \"best\" ratio — only the right ratio for your specific property tier and operational priorities."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "T/C 80/20: Maximum Durability, Minimum Cost"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "T/C 80/20 is the economy hotel standard. It offers exceptional durability — 300+ industrial wash cycles with minimal degradation — and the lowest per-unit cost in the market (typically $8-12 per sheet set FOB Nantong for 200 TC). The trade-off is noticeable: 80/20 sheets feel distinctly synthetic, sleep warm (poor moisture wicking), and can develop an electrostatic charge in dry climates. These fabrics are widely used in budget hotel chains, motels, hostels, and institutional settings where cost per occupied room is the primary procurement driver. For properties with nightly rates under $80, T/C 80/20 is the pragmatic choice. Key specification: look for 200-250 thread count — going higher on high-polyester blends yields diminishing comfort returns."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "T/C 65/35: The Industry Standard for Midscale"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "T/C 65/35 is the most common specification in the global hotel industry, found in countless midscale and select-service properties. It represents the \"good enough\" equilibrium: the 65% polyester provides wrinkle resistance and durability (250-280 wash cycles), while 35% cotton delivers enough natural fiber for acceptable comfort and breathability. These sheets require minimal ironing — a significant operational advantage — and maintain a crisp white appearance through extended use. Typical pricing is $12-18 per sheet set (250-300 TC, FOB Nantong). For properties in the $80-150 nightly rate range, T/C 65/35 with a minimum 250 thread count is the recommended baseline specification."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "T/C 50/50 and CVC: Upscale Poly-Cotton"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "T/C 50/50 and CVC 60/40 (cotton-dominant) blends bridge the gap between poly-cotton economics and all-cotton comfort. At 50% or higher cotton content, the fabric begins to feel genuinely natural — guests may not distinguish it from all-cotton without close inspection. These blends offer approximately 70-80% of the comfort of all-cotton at 50-60% of the price. CVC fabrics are particularly popular in the Asian and Middle Eastern markets where high humidity makes polyester's poor breathability a genuine comfort issue. For properties in the $120-200 rate range, CVC 60/40 with 300+ thread count provides an excellent balance of guest experience and procurement economics. Pricing: $18-25 per sheet set (FOB Nantong)."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Beyond the Ratio: Fabric Construction Matters"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "The T/C ratio is not the only variable. Fabric weight (GSM), yarn count, and finishing treatments all interact with the blend ratio to determine real-world performance. A well-constructed T/C 65/35 at 130 GSM with anti-pill finishing will outperform a poorly made T/C 50/50 at 110 GSM. When specifying T/C linens, always include: blend ratio, thread count, fabric weight in GSM, yarn count (e.g., 40S, 60S), and finishing requirements. A complete specification prevents supplier substitution and ensures you receive what you intended. Our procurement service includes spec sheet preparation with all critical parameters documented for your order."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Environmental Considerations"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Polyester is petroleum-based and non-biodegradable, raising legitimate environmental concerns. For properties with sustainability commitments, recycled polyester (rPET) T/C blends are an emerging alternative. rPET T/C 65/35 fabrics perform identically to virgin polyester blends but carry a significantly lower carbon footprint — approximately 50-60% less CO2 emissions in fiber production. Several Nantong mills now offer rPET blend options at a modest 8-12% price premium over virgin polyester equivalents. If your property markets sustainability credentials, rPET T/C blends allow you to maintain the cost advantages of poly-cotton while communicating a genuine environmental commitment to guests."}]
            }
        ]
    },
    {
        "_type": "post",
        "_id": "fabric-encyclopedia-finishing",
        "title": "Hotel Linen Fabric Finishing: Mercerization, Sanforization & Anti-Pill Treatments",
        "slug": {"_type": "slug", "current": "fabric-finishing-hotel-linen-mercerization-sanforization"},
        "excerpt": "Fabric finishing transforms raw textiles into hotel-grade linens. Learn how mercerization, sanforization, and anti-pill treatments affect durability, sheen, and guest experience.",
        "publishedAt": "2026-06-22T00:00:00Z",
        "categories": [CAT_REF],
        "body": [
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Two fabric samples can share identical fiber content, thread count, and GSM — yet perform completely differently in a hotel environment. The difference is finishing. Fabric finishing processes are the least visible but arguably most important step in textile manufacturing for hospitality applications. They transform grey (unfinished) fabric into linen that resists shrinkage, maintains color through bleach-heavy laundry cycles, and stays smooth wash after wash. For procurement managers, understanding finishing is what separates a specification that looks good on paper from one that actually performs in the field."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Mercerization: The Foundation of Quality Cotton Finishing"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Mercerization is a chemical treatment — invented by John Mercer in 1844 — that treats cotton yarn or fabric with a caustic soda (sodium hydroxide) solution under tension. The process permanently alters the cotton fiber's physical structure: the fiber swells, its cross-section changes from a flat ribbon to a round shape, and its surface becomes smoother and more reflective. The results are dramatic: increased tensile strength (25-30% stronger), enhanced dye uptake (colors are deeper and more colorfast), improved luster (the characteristic \"mercerized sheen\"), and reduced fiber shrinkage in subsequent washing. For hotel linens, mercerization is not optional — it is the difference between sheets that look premium and those that look budget, regardless of thread count. Always verify that suppliers mercerize their cotton yarns before weaving, not as a superficial post-treatment that washes out."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Sanforization: The Anti-Shrinkage Process"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Sanforization is a controlled compressive shrinkage process that pre-shrinks fabric before it reaches the cutting table. Without sanforization, cotton fabrics can shrink 5-10% after the first few washes — disastrous for fitted sheets that must maintain precise dimensions. The sanforization process feeds fabric through a machine that compresses it longitudinally, effectively \"using up\" the shrinkage potential before the fabric is cut and sewn. Sanforized fabric carries a guarantee of less than 1% residual shrinkage. For hotel procurement, sanforization is non-negotiable on all 100% cotton items — sheets, duvet covers, pillowcases. T/C blends with polyester content above 50% naturally resist shrinkage and may not require sanforization, though confirming dimensional stability through wash testing is always recommended."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Anti-Pill Finishing: Extending the \"New\" Look"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Pilling — the formation of small fiber balls on the fabric surface — is the most common guest complaint about hotel linens and the primary reason sheets are retired before the base fabric wears out. Anti-pill finishing addresses this through multiple approaches: enzymatic bio-polishing removes loose surface fibers before they can tangle into pills; resin treatments bind fibers more tightly; and singeing passes the fabric over a flame to burn off protruding fiber ends. The most effective approach combines bio-polishing with light resin treatment, which can extend the pill-free service life of cotton sheets by 40-60% (from approximately 100 washes to 160-180 washes). When specifying hotel linens, request Martindale abrasion test results (ISO 12947) with a minimum rating of 4 out of 5 after 5,000 cycles as verification of anti-pill effectiveness."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Optical Brighteners and Whitening"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Hotel linens are overwhelmingly white — and staying white through hundreds of washes is a chemical challenge. Optical brightening agents (OBAs) are fluorescent compounds that absorb ultraviolet light and re-emit it as visible blue light, making fabrics appear whiter and brighter. They are applied during finishing and gradually deplete through washing. Quality hotel linens use OBA treatments designed for 100-150 commercial wash cycles before noticeable yellowing occurs. When the OBA effect fades, laundry operations typically add OBAs in the wash cycle to restore whiteness. For procurement, specify OBAs compatible with your laundry chemicals — some chlorine-based bleaches degrade certain OBA formulations. Providing your laundry chemical specifications to the fabric supplier ensures OBA compatibility."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Calendering: The Final Finish for Crispness"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Calendering is a mechanical finishing process that passes fabric between heated rollers under high pressure. For hotel linens — particularly percale sheets and table linens — calendering creates the crisp, smooth surface that guests associate with high-quality bedding. The degree of calendering is specified by the roller pressure, temperature, and number of passes. Light calendering provides a natural look with minimal sheen; heavy calendering produces a glossy, almost paper-like finish favored by luxury properties. The effect is semi-permanent — it diminishes through washing but can be partially restored in laundry through flatwork ironers (essentially large-scale calenders). When specifying sheeting, indicate your calendering preference: hotel finish (medium), luxury finish (heavy), or natural finish (light/minimal)."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Quality Verification: What to Request from Suppliers"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "When procuring finished hotel linens from Chinese mills, request the following test reports as standard: shrinkage test (AATCC 135, max 3% after 5 washes), color fastness to laundering (AATCC 61, rating 4 minimum), tensile strength (ASTM D5034), tear strength (ASTM D1424), pilling resistance (ASTM D4970 or ISO 12945-2, rating 4 minimum), and pH value (ISO 3071, range 4.0-7.5). These six tests cover the critical performance dimensions and are standard at reputable Nantong textile mills. Our on-site QC team collects samples from every production batch for independent third-party lab testing before shipment authorization, ensuring the finishing quality matches the specification."}]
            }
        ]
    },
    {
        "_type": "post",
        "_id": "fabric-encyclopedia-bamboo-fibers",
        "title": "Bamboo & Alternative Fibers for Hotel Bedding: A Procurement Guide",
        "slug": {"_type": "slug", "current": "bamboo-alternative-fibers-hotel-bedding-procurement"},
        "excerpt": "Bamboo, modal, hemp, and linen for hotel bedding — explore alternative natural fibers, their performance characteristics, cost profiles, and procurement considerations.",
        "publishedAt": "2026-06-22T00:00:00Z",
        "categories": [CAT_REF],
        "body": [
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Cotton dominates hotel bedding — but it is not the only option. A growing segment of hotel properties, particularly in the boutique, eco-resort, and luxury wellness categories, is exploring alternative natural fibers. Bamboo, modal, hemp, and linen each offer distinctive performance characteristics, sustainability narratives, and guest experience profiles that differentiate properties from the cotton-standard competition. This guide examines the procurement realities — not just the marketing claims — for each alternative fiber in hospitality applications."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Bamboo: The Marketing vs. The Reality"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Bamboo fabric is one of the most marketed — and most misunderstood — textile fibers. The reality: virtually all commercially available \"bamboo\" fabric is bamboo viscose (rayon), a regenerated cellulose fiber made by chemically dissolving bamboo pulp and extruding it into fibers. It is not the mechanically crushed \"bamboo linen\" that some marketing suggests. Bamboo viscose shares manufacturing similarities with generic rayon and involves chemical processing — a fact often glossed over in eco-marketing. That said, bamboo viscose delivers genuine performance benefits for hotel applications: exceptional softness (comparable to high-end cotton sateen), natural antimicrobial properties (bamboo kun, retained through the viscose process to varying degrees), excellent moisture wicking, and a distinctive cool-to-the-touch feel. Durability is the weak point — bamboo viscose loses 20-30% of its wet strength and typically delivers 120-150 commercial wash cycles, 30-40% fewer than comparable cotton. For hotel use, bamboo-cotton blends (typically 40/60 or 50/50) offer a more practical balance of bamboo's sensory benefits with cotton's durability."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Modal: The Underappreciated Premium Fiber"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Modal is a type of rayon made exclusively from beechwood pulp, with Lenzing Modal (Austria) being the industry gold standard. Compared to generic viscose/bamboo, Modal offers significantly higher wet strength (retaining approximately 60% of dry strength) and superior softness that actually improves with washing. Modal fabrics have a silky drape and deep dye absorption — colors appear richer and more saturated than on cotton. For hotel applications, Modal excels in high-touch items: bathrobes, towels (blended with cotton), and pillowcases where guests directly experience the fiber's softness. Pure Modal is rarely used for sheets due to cost ($30-45 per set, FOB) and lower abrasion resistance. Modal-cotton blends at 30-40% Modal content are the practical specification for hotel bedding. Modal prices are approximately 20-30% above Tencel and 40-50% above premium long-staple cotton."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Linen (Flax): The Heritage Luxury Fiber"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Linen — made from flax fibers — is the original luxury bedding fiber, predating cotton by millennia. Its characteristic slubby texture and exceptional breathability make it a favorite for high-end resorts in warm climates (Mediterranean, Caribbean, Southeast Asia). Linen's performance characteristics are distinctive: it is 2-3 times stronger than cotton, highly absorbent (up to 20% of its weight in moisture without feeling damp), naturally antimicrobial, and becomes softer with every wash. The drawbacks are significant for hospitality: linen wrinkles aggressively (a \"feature\" in boutique settings, a liability in convention hotels), it is expensive ($50-80 per sheet set FOB for European flax linen), and its textured hand feel is polarizing — guests either love it or complain about the \"roughness.\" Linen is best deployed strategically: premium suites, spa guest rooms, and properties where the \"lived-in luxury\" aesthetic aligns with the brand identity. For these applications, specify European flax (Belgian or French origin) with a minimum 160 GSM for durability."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Hemp: The Sustainability Powerhouse"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Hemp fabric is the most environmentally sustainable textile fiber, period. It requires no pesticides, minimal water (half of cotton's requirements), regenerates soil, and produces 2-3 times more fiber per acre than cotton. For eco-resorts and properties marketing aggressive sustainability credentials, hemp bedding offers an authentic story that bamboo cannot match. Performance-wise, hemp is the strongest natural fiber, highly breathable, naturally UV-resistant and antimicrobial, and softens dramatically with use. The challenges: pure hemp fabric is expensive (comparable to premium linen), has limited supply chains (few Chinese mills produce hotel-grade hemp sheeting), and the initial hand feel can be stiff until broken in through multiple washes. Hemp-cotton blends (typically 55% hemp / 45% organic cotton) are the most practical hotel specification, balancing hemp's sustainability credentials with cotton's familiar softness. These are specialty products — expect 35-45 day lead times and MOQs of 300+ sets."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Organic Cotton: Certification-Driven Procurement"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Organic cotton is not a different fiber but a different agricultural standard — and it has become the baseline sustainability specification for many hotel chains' bedding programs. GOTS (Global Organic Textile Standard) certification is the procurement benchmark, covering not just fiber origin but also processing chemicals, water treatment, and social compliance throughout the supply chain. GOTS-certified organic cotton typically costs 25-40% more than conventional cotton of equivalent quality. The performance characteristics are identical to conventional cotton of the same staple length and weave — organic certification does not inherently improve or degrade fabric quality. For hotels, the value proposition is entirely in the certification: it provides a verifiable, third-party-audited sustainability claim that guests recognize and that supports ESG reporting requirements. When sourcing organic cotton from Chinese mills, always verify GOTS certification through the GOTS public database rather than accepting supplier-provided certificates at face value."}]
            },
            {
                "_type": "block",
                "style": "h2",
                "children": [{"_type": "span", "text": "Making the Right Alternative Fiber Decision"}]
            },
            {
                "_type": "block",
                "style": "normal",
                "children": [{"_type": "span", "text": "Alternative fibers succeed in hotel applications when they serve a strategic purpose — differentiating the property, supporting a sustainability narrative, or delivering a distinctive guest experience that drives reviews and repeat bookings. They fail when adopted purely on trend without considering operational implications. Before specifying an alternative fiber, evaluate: expected service life vs. cotton baseline (most alternative fibers underperform cotton on durability), laundry compatibility with your existing chemicals and temperatures, guest expectations in your market segment, price premium vs. marketing ROI, and supplier reliability for what may be a lower-volume specialty order. Our procurement service can source and QC-verify bamboo, modal, linen, hemp, and organic cotton hotel linens from qualified Nantong and surrounding mills — including blended specifications that optimize the balance of performance and cost for your specific property requirements."}]
            }
        ]
    }
]

def publish_article(article, index):
    data = json.dumps({
        "mutations": [{
            "createOrReplace": article
        }]
    }, ensure_ascii=False).encode("utf-8")
    
    req = urllib.request.Request(
        f"{API}?returnIds=true",
        data=data,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "application/json"
        },
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read())
            article_id = result.get("results", [{}])[0].get("id", "unknown")
            print(f"  [{index}/6] OK — {article['title'][:60]}... → {article_id}")
            return True
    except urllib.error.HTTPError as e:
        err_body = e.read().decode()
        print(f"  [{index}/6] FAIL — {e.code}: {err_body[:200]}")
        return False

print("Publishing 6 Fabric Encyclopedia articles...\n")
success = 0
for i, article in enumerate(articles, 1):
    if publish_article(article, i):
        success += 1

print(f"\nDone: {success}/6 articles published successfully.")
