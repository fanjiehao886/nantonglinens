import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { PRODUCT_BY_SLUG_QUERY, PRODUCTS_QUERY } from "@/lib/queries";
import { ProductCard } from "@/components/ProductCard";
import { BuyerConcerns } from "@/components/BuyerConcerns";
import { company } from "@/lib/company";

// ----- Category data (merged from the dynamic category route) -----

const CATEGORY_DATA: Record<string, {
  name: string;
  title: string;
  description: string;
  keywords: string;
  intro: string;
  specs: string[];
  relatedGuides: { label: string; href: string }[];
  internalLinks: { label: string; href: string }[];
}> = {
  "bath-towels": {
    name: "Bath Towels",
    title: "Hotel Bath Towels — Wholesale GSM, Factory-Direct from Nantong",
    description: "Wholesale hotel bath towels, hand towels, and washcloths — manufactured factory-direct in Nantong. Custom GSM, cotton types, and sizes. Competitive pricing, strict QC, global shipping.",
    keywords: "hotel bath towels wholesale, bulk towels China, hotel towel supplier, terry towel manufacturer, factory-direct hotel towels",
    intro: "Hotel towels are one of the highest-touch items in any property. Guests judge quality by the towel's weight, absorbency, and softness within seconds. We manufacture bath towels, hand towels, face cloths, and bath mats on the towelling member's own terry lines in Nantong — each held to GSM consistency, colorfastness, and commercial laundry durability.",
    specs: [
      "GSM: 400–900 (see our towel GSM guide for hotel tier recommendations)",
      "Material: 100% Cotton (ring-spun, combed, Egyptian), poly-cotton blends available",
      "Weave: Terry loop, zero-twist hydro-cotton, waffle-weave options",
      "Sizes: Bath towel 70x140cm, Hand towel 40x70cm, Face cloth 30x30cm, Bath mat 50x80cm (all customizable)",
      "Border: Dobby band, satin band, or borderless",
      "Color: White (standard), dyed-to-match (pantone-matched) available for 1000+ pcs",
      "MOQ: 200 pieces per size/spec combination",
    ],
    relatedGuides: [
      { label: "Towel GSM Guide", href: "/guides/hotel-towel-gsm" },
      { label: "Towel Quality Guide", href: "/guides/hotel-towel-quality-guide" },
      { label: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
    ],
    internalLinks: [
      { label: "hotel towel wholesale China", href: "/products/bath-towels" },
      { label: "bulk bath towels GSM 600", href: "/guides/hotel-towel-gsm" },
      { label: "hotel terry towels manufacturer", href: "/products/bath-towels" },
      { label: "white hotel hand towels", href: "/products/bath-towels" },
      { label: "Nantong towel factory", href: "/about" },
      { label: "hotel linen manufacturer in China", href: "/about" },
      { label: "custom hotel towels logo", href: "/rfq" },
      { label: "pool and beach towels bulk", href: "/products/pool-beach-towels" },
    ],
  },
  "bathrobes": {
    name: "Bathrobes",
    title: "Hotel Bathrobes — Factory-Direct Waffle & Terry Robes",
    description: "Custom hotel bathrobes manufactured factory-direct in Nantong. Waffle-weave, terry velour, kimono and shawl collar styles. Logo embroidery available. Low MOQ, global shipping.",
    keywords: "hotel bathrobes wholesale, waffle robe supplier China, terry bathrobe manufacturer, custom logo bathrobes, spa robes bulk",
    intro: "A quality bathrobe transforms the guest bathroom experience. Whether for luxury suites, spa facilities, or standard rooms, we produce with specialised robe lines offering waffle-weave, terry velour, and microfiber robes — with custom embroidery, piping, and color matching available.",
    specs: [
      "Fabric: Waffle-weave (350–450 GSM), Terry velour (400–550 GSM), Microfiber (300–400 GSM)",
      "Material: 100% Cotton, cotton-polyester blend, bamboo fiber, microfiber",
      "Styles: Kimono, shawl collar, hooded, spa wrap",
      "Sizes: S/M, L/XL, one-size-unisex (custom grading available)",
      "Features: Belt loop, double belt loops, patch pockets, hanging loop",
      "Color: White (standard), beige, gray, navy (custom dyed-to-match)",
      "Embroidery: Logo embroidery on chest or sleeve available, minimum 300 pcs",
      "MOQ: 100 pieces per style/size combination",
    ],
    relatedGuides: [
      { label: "Bathrobe Buying Guide", href: "/guides/hotel-bathrobe-buying-guide" },
      { label: "Hotel Linen Buying Guide", href: "/guides/download" },
      { label: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
    ],
    internalLinks: [
      { label: "hotel bathrobes wholesale", href: "/products/bathrobes" },
      { label: "waffle robe supplier China", href: "/products/bathrobes" },
      { label: "custom logo hotel robes", href: "/products/bathrobes" },
      { label: "spa robes bulk manufacturer", href: "/products/bathrobes" },
      { label: "terry velour bathrobe", href: "/products/bathrobes" },
      { label: "hotel linen manufacturer in China", href: "/about" },
      { label: "Dieshiqiao textile market", href: "/about" },
      { label: "request bathrobe samples", href: "/rfq" },
    ],
  },
  "pool-beach-towels": {
    name: "Pool & Beach Towels",
    title: "Pool & Beach Towels — Wholesale Bulk Supply from Dieshiqiao",
    description: "Wholesale pool and beach towels manufactured factory-direct in Nantong. Custom sizes, colors, and stripes. High GSM for absorbency and durability. Resort, gym, and waterpark supply.",
    keywords: "pool towels wholesale, beach towels bulk China, resort towel supplier, gym towels manufacturer, striped beach towels",
    intro: "Pool and beach towels face different demands than bathroom towels: they are larger, need to handle chlorine and sun exposure, and often serve as visual branding for resorts and waterparks. The towelling member's own lines specialise in bold-striped beach towels and durable pool towels with high colorfastness and fast drying times.",
    specs: [
      "GSM: 350–500 (medium weight, optimized for poolside use)",
      "Material: 100% Cotton, cotton-polyester blend (for quick-dry pool use)",
      "Sizes: Standard 75x150cm, oversized 90x180cm, round 150cm diameter",
      "Design: Solid color, stripe patterns, dobby border, fringed edges",
      "Colorfastness: Chlorine-resistant dyes available, tested to ISO 105-E03",
      "MOQ: 200 pieces per design/color combination",
    ],
    relatedGuides: [
      { label: "Towel GSM Guide", href: "/guides/hotel-towel-gsm" },
      { label: "Towel Quality Guide", href: "/guides/hotel-towel-quality-guide" },
    ],
    internalLinks: [
      { label: "pool towels bulk wholesale", href: "/products/pool-beach-towels" },
      { label: "beach towel manufacturer China", href: "/products/pool-beach-towels" },
      { label: "resort towel supplier", href: "/products/pool-beach-towels" },
      { label: "striped beach towels wholesale", href: "/products/pool-beach-towels" },
      { label: "Nantong towel factory", href: "/about" },
      { label: "hotel bath towels", href: "/products/bath-towels" },
      { label: "request towel samples", href: "/rfq" },
    ],
  },
  "bath-mats": {
    name: "Bath Mats",
    title: "Hotel Bath Mats — Factory-Direct Cotton & Microfiber",
    description: "Wholesale hotel bath mats, factory-direct from Nantong: cotton terry, microfiber, and memory foam options. Non-slip backing, fast-drying, commercial laundry compatible. Low MOQ.",
    keywords: "hotel bath mats wholesale, bathroom mat supplier China, cotton bath mat, non-slip bath mat, hotel floor mat",
    intro: "Bathroom safety and cleanliness start at floor level. Our bath mat production covers traditional cotton terry mats, quick-dry microfiber mats, and memory foam mats — all with non-slip backing certified for commercial use and compatible with industrial washing machines.",
    specs: [
      "Material: 100% Cotton terry, microfiber, memory foam with PVC/non-slip backing",
      "GSM: 600–900 for cotton terry mats",
      "Sizes: 50x80cm (standard), 60x100cm (large), custom sizes available",
      "Backing: Spray latex, TPR dots, or full PVC non-slip base",
      "Color: White, beige, gray (standard); custom dyed-to-match",
      "MOQ: 200 pieces per size/color combination",
    ],
    relatedGuides: [
      { label: "Towel GSM Guide", href: "/guides/hotel-towel-gsm" },
      { label: "QC Checklist", href: "/blog/qc-checklist" },
    ],
    internalLinks: [
      { label: "hotel bath mats wholesale", href: "/products/bath-mats" },
      { label: "non-slip bathroom mat China", href: "/products/bath-mats" },
      { label: "cotton terry bath mat supplier", href: "/products/bath-mats" },
      { label: "hotel bathroom accessories", href: "/products/bath-towels" },
      { label: "hotel linen manufacturer in China", href: "/about" },
      { label: "request bath mat samples", href: "/rfq" },
    ],
  },
  "bed-sheets": {
    name: "Bed Sheets",
    title: "Hotel Bedding Wholesale — Bulk Bed Sheets & Linen Supply from China",
    description: "Wholesale hotel bedding factory-direct from Nantong. Hotel bed sheets, flat sheets, and fitted sheets in bulk — custom TC ranges, cotton types, and sizes. Competitive FOB pricing, strict QC, global shipping from Nantong.",
    keywords: "hotel bedding wholesale, hotel bed sheets wholesale, bulk hotel sheets China, hotel linen manufacturer, hotel bedding suppliers, hotel bedding wholesale manufacturer, Dieshiqiao bed sheets",
    intro: "Bed sheets are the foundation of the guest sleep experience. We manufacture flat and fitted sheets across all standard hotel sizes — from single to emperor — in thread counts ranging from budget 200 TC poly-cotton to ultra-luxury 1000 TC Egyptian cotton sateen.",
    specs: [
      "Thread Count: 200–1000 TC (single-ply count)",
      "Weave: Percale (crisp, breathable), Sateen (silky, lustrous)",
      "Material: Poly-cotton blend (budget), 100% Cotton, Combed cotton, Long-staple cotton, Egyptian cotton",
      "Sizes: Single, Double, Queen, King, Super King, Emperor (custom sizing available)",
      "Style: Flat sheet, Fitted sheet (with elastic depth options 25cm–40cm)",
      "Color: White (standard), custom dyed-to-match",
      "MOQ: 100 pieces per size/spec combination",
    ],
    relatedGuides: [
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
      { label: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
    ],
    internalLinks: [
      { label: "hotel bed sheets wholesale", href: "/products/bed-sheets" },
      { label: "TC buying guide", href: "/guides/hotel-bedding-thread-count" },
      { label: "Dieshiqiao hotel sheets", href: "/products/bed-sheets" },
      { label: "Nantong textile factory", href: "/about" },
      { label: "hotel linen manufacturer in China", href: "/about" },
    ],
  },
  "pillowcases": {
    name: "Pillowcases",
    title: "Hotel Pillowcases — Factory-Direct Cotton & Sateen",
    description: "Wholesale hotel pillowcases, factory-direct from Nantong: oxford, housewife, and envelope closure styles. All TC ranges, cotton types, and sizes. Custom embroidery available.",
    keywords: "hotel pillowcases wholesale, oxford pillowcase supplier China, sateen pillowcase manufacturer, hotel bedding pillowcases",
    intro: "Pillowcases are the closest textile to the guest's face — quality here is disproportionately noticed. We manufacture standard housewife, Oxford, and envelope-closure pillowcases in all common hotel sizes and cotton qualities.",
    specs: [
      "Thread Count: 200–1000 TC",
      "Style: Housewife (side opening), Oxford (bordered flange), Envelope closure",
      "Material: Poly-cotton blend, 100% Cotton, Combed cotton, Egyptian cotton",
      "Sizes: Standard 50x75cm, King 50x90cm, Super King 50x100cm",
      "MOQ: 100 pieces per size/spec combination",
    ],
    relatedGuides: [
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
    ],
    internalLinks: [
      { label: "hotel pillowcases wholesale", href: "/products/pillowcases" },
      { label: "oxford pillowcase China", href: "/products/pillowcases" },
      { label: "hotel linen manufacturer in China", href: "/about" },
    ],
  },
  "duvet-covers": {
    name: "Duvet Covers",
    title: "Hotel Duvet Covers — Factory-Direct Cotton & Sateen",
    description: "Wholesale hotel duvet covers manufactured factory-direct in Nantong. All TC ranges, cotton types, and closure styles. Custom sizes and embroidery available. Competitive pricing, global shipping.",
    keywords: "hotel duvet covers wholesale, duvet cover supplier China, sateen duvet cover manufacturer, hotel bedding",
    intro: "Duvet covers define the visual standard of a made bed. We manufacture large-format duvet covers with reinforced seams, hidden zipper or button closures, and corner ties to keep inserts in place.",
    specs: [
      "Thread Count: 200–600 TC",
      "Weave: Percale, Sateen, Jacquard (stripe/diamond patterns)",
      "Material: Poly-cotton blend, 100% Cotton, Combed cotton, Long-staple cotton",
      "Sizes: Single, Double, Queen, King, Super King",
      "Closure: Hidden zipper, button closure, envelope (no closure)",
      "Features: Corner ties, reinforced seams, double-stitched hems",
      "MOQ: 100 pieces per size/spec combination",
    ],
    relatedGuides: [
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
    ],
    internalLinks: [
      { label: "hotel duvet covers wholesale", href: "/products/duvet-covers" },
      { label: "hotel bedding manufacturer", href: "/products/bed-sheets" },
      { label: "TC buying guide", href: "/guides/hotel-bedding-thread-count" },
    ],
  },
  "table-linen": {
    name: "Table Linen",
    title: "Hotel Table Linen — Factory-Direct Tablecloths & Napkins",
    description: "Wholesale hotel table linens, factory-direct from Nantong: tablecloths, napkins, placemats, and runners. Cotton, polyester, and blended fabrics. Custom sizes and colors for banquet and restaurant use.",
    keywords: "hotel table linen wholesale, tablecloth supplier China, restaurant napkins manufacturer, banquet tablecloth",
    intro: "Restaurant and banquet table linens face heavy use and frequent laundering. Our production focuses on durable, stain-resistant fabrics with consistent color matching across reorders.",
    specs: [
      "Material: Polyester (wrinkle-resistant), Cotton-polyester blend, 100% Cotton",
      "Weave: Plain, damask, satin band, jacquard patterns",
      "Sizes: Square, rectangular, round — all standard banquet sizes; custom cut",
      "Color: White, ivory, black, navy (standard); custom dyed-to-match",
      "MOQ: 200 pieces per size/color combination",
    ],
    relatedGuides: [
      { label: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
    ],
    internalLinks: [
      { label: "hotel table linen wholesale", href: "/products/table-linen" },
      { label: "restaurant tablecloths China", href: "/products/table-linen" },
      { label: "banquet linen supplier", href: "/products/table-linen" },
    ],
  },
  "mattress-toppers": {
    name: "Mattress Toppers",
    title: "Hotel Mattress Toppers — Factory-Direct Pillow-Top & Featherbed",
    description: "Wholesale hotel mattress toppers, factory-direct from Nantong: pillow-top, featherbed, and memory foam options. Custom sizes, fill weights, and cover fabrics.",
    keywords: "hotel mattress topper wholesale, pillow top supplier China, featherbed manufacturer, hotel mattress protector",
    intro: "Mattress toppers extend mattress life and elevate guest comfort. We manufacture pillow-top mattress pads, down-alternative featherbeds, and memory foam toppers with fitted skirt options in all hotel bed sizes.",
    specs: [
      "Type: Pillow-top (quilted), Featherbed (down/down-alternative), Memory foam",
      "Fill: Polyester fiberfill, down-alternative microfiber, goose down blend",
      "Cover: 100% Cotton (200–300 TC), poly-cotton blend",
      "Sizes: All hotel bed sizes (Single to Emperor)",
      "MOQ: 100 pieces per size/type combination",
    ],
    relatedGuides: [
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
    ],
    internalLinks: [
      { label: "hotel mattress topper wholesale", href: "/products/mattress-toppers" },
      { label: "hotel bed sheets", href: "/products/bed-sheets" },
    ],
  },
  "bedding-sets": {
    name: "Hotel Bedding Sets",
    title: "Hotel Bedding Sets — Wholesale Sateen, Percale & Jacquard",
    description: "Wholesale hotel bedding sets factory-direct from Nantong: sateen, percale, stripe and jacquard lines, 200–400 TC, 40S–80S yarn. Logo embroidery available.",
    keywords: "hotel bedding set wholesale, hotel bed linen set supplier China, sateen bedding set manufacturer, hotel duvet cover set bulk, embroidered hotel bedding",
    intro: "A complete bedding set is where a room's standard is set: duvet cover, flat sheet, fitted sheet and pillowcases must match in shade across every room and every reorder. The founding member's bedding mill runs four weave lines — sateen plain, percale, sateen stripe and sateen jacquard — so a single property can specify one construction and hold it for the life of the contract.",
    specs: [
      "Weave lines: Sateen plain, Percale plain, Sateen stripe, Sateen jacquard (four separate production lines)",
      "Thread Count: 250 / 300 / 330 / 350 / 400 TC standard; 500 TC+ on request",
      "Yarn: 40S, 60S, 80S (combed and long-staple options at 350 TC and above)",
      "Material: 100% Cotton, 80/20 cotton-polyester blend, 50/50 CVC",
      "Set composition: Duvet cover + flat sheet + fitted sheet + 2 pillowcases (4-pc); configured to your room list",
      "Decoration: Embroidery (white, silver or gold thread), satin stripe, jacquard pattern; no-embroidery plain white option",
      "Color: White standard; dyed-to-match on 1,000 sets+",
      "MOQ: 100 sets per size/spec combination",
    ],
    relatedGuides: [
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
      { label: "Hotel Linen Buying Guide", href: "/guides/download" },
    ],
    internalLinks: [
      { label: "hotel bedding set wholesale", href: "/products/bedding-sets" },
      { label: "hotel bed linen supplier China", href: "/products/bedding-sets" },
      { label: "embroidered hotel bedding set", href: "/products/bedding-sets" },
      { label: "sateen vs percale hotel bedding", href: "/guides/hotel-bedding-thread-count" },
      { label: "hotel duvet covers", href: "/products/duvet-covers" },
      { label: "hotel bed sheets", href: "/products/bed-sheets" },
      { label: "hotel linen manufacturer in China", href: "/about" },
      { label: "request bedding samples", href: "/rfq" },
    ],
  },
  "bedding-fabric": {
    name: "Hotel Bedding Fabric",
    title: "Hotel Bedding Fabric — Wholesale Sateen & Percale by the Metre",
    description: "Wholesale hotel bedding fabric from Nantong: sateen, percale, stripe and jacquard sheeting, 200–400 TC, widths 2.6m / 2.8m / 3.05m. Sold by the metre or the roll.",
    keywords: "hotel bedding fabric wholesale, sateen fabric supplier China, percale sheeting fabric, hotel bed linen fabric by the metre, wide width cotton sheeting",
    intro: "Not every buyer wants finished bed linen. Converters, cut-and-sew factories and bedding brands buy sheeting fabric by the metre — and most hotel linen suppliers cannot sell it that way because they are cutters, not weavers. This is the one category where we are upstream of everyone else: the fabric comes off the founding member's own weaving lines in the 2.6m to 3.05m widths that hotel bedding actually needs.",
    specs: [
      "Constructions: Sateen plain, Percale plain, Sateen stripe, Sateen jacquard",
      "Thread Count: 200 / 250 / 300 / 330 / 350 / 400 TC (percale tops out around 233 TC, by nature of the weave)",
      "Yarn: 40S, 60S combed, 80S long-staple; single-pick and double-pick options",
      "Width: 2.6m / 2.8m / 3.05m — wide-rapier weaving, no pieced panels",
      "State: Prepared-for-dyeing (PFD), bleached white, or dyed to Pantone",
      "Packing: Rolled by the metre or per roll; roll length and core diameter to your spec",
      "MOQ: 3,000 m per construction/width combination",
    ],
    relatedGuides: [
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
      { label: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
    ],
    internalLinks: [
      { label: "hotel bedding fabric wholesale", href: "/products/bedding-fabric" },
      { label: "sateen fabric supplier China", href: "/products/bedding-fabric" },
      { label: "percale sheeting by the metre", href: "/products/bedding-fabric" },
      { label: "wide width hotel sheeting 3.05m", href: "/products/bedding-fabric" },
      { label: "sateen vs percale explained", href: "/guides/hotel-bedding-thread-count" },
      { label: "finished hotel bedding sets", href: "/products/bedding-sets" },
      { label: "request a fabric swatch set", href: "/rfq" },
    ],
  },
  "duvet-inners": {
    name: "Duvet Inners & Comforters",
    title: "Hotel Duvet Inners — Wholesale Down, Feather & Microfiber",
    description: "Wholesale hotel duvet inners factory-direct from Nantong: goose and duck down 50/50 to 90/10, 900 fill power, down-proof shells, and microfiber alternatives.",
    keywords: "hotel duvet inner wholesale, down comforter supplier China, goose down duvet manufacturer, hotel comforter bulk, down proof duvet factory",
    intro: "The duvet inner is the single item guests notice on a cold night and the one housekeeping replaces most often. We supply two parallel lines — a natural down and feather line for premium properties, and a microfiber line for high-turnover rooms where cost per wash matters more than hand feel — so a group can specify different grades by room class on one contract.",
    specs: [
      "Down/feather ratio: 50/50, 70/30, 90/10 (duck and goose); 90% white goose down at 900 fill power for flagship rooms",
      "Fill: Goose down and feather, duck down and feather, 3D siliconized microfiber, anti-allergenic microfiber",
      "Shell: 233T / 260T / 280T cotton, down-proof construction to stop fibre migration",
      "Weight: 200–400 gsm fill",
      "Construction: Baffle box, sewn-through, piped edge; corner loops to anchor inside the duvet cover",
      "Tog / warmth: specified by market and season (tropical resort to cold-climate property)",
      "MOQ: 100 pieces per size/fill combination",
    ],
    relatedGuides: [
      { label: "Hotel Linen Buying Guide", href: "/guides/download" },
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
    ],
    internalLinks: [
      { label: "hotel duvet inner wholesale", href: "/products/duvet-inners" },
      { label: "goose down duvet manufacturer China", href: "/products/duvet-inners" },
      { label: "down proof comforter supplier", href: "/products/duvet-inners" },
      { label: "microfiber hotel comforter bulk", href: "/products/duvet-inners" },
      { label: "hotel duvet covers", href: "/products/duvet-covers" },
      { label: "hotel pillows", href: "/products/pillows" },
      { label: "request duvet samples", href: "/rfq" },
    ],
  },
  "pillows": {
    name: "Hotel Pillows",
    title: "Hotel Pillows — Wholesale Down, Chamber & Microfiber Iinners",
    description: "Wholesale hotel pillows factory-direct from Nantong: goose and duck down, multi-chamber construction, 5cm gussets, and microfiber inners for high-turnover rooms.",
    keywords: "hotel pillow wholesale, down pillow supplier China, hotel pillow manufacturer, 3 chamber down pillow, hotel pillow inner bulk",
    intro: "Pillows drive guest complaints more than any other textile item — too flat, too firm, or uneven between rooms. We build inners rather than sell a single spec: down and feather for premium rooms, multi-chamber construction to stop the fill shifting to one side, and fabric shells with a down-proof finish so the filling stays put through industrial laundering.",
    specs: [
      "Fill: White duck down/feather 50/50 and 70/30, white goose down 90/10, 3D siliconized microfiber, down-alternative microfiber",
      "Construction: Single chamber, 3-chamber, and multi-chamber (keeps fill evenly distributed side to side)",
      "Gusset: 5cm gusset for a taller, firmer profile; plain-edge option",
      "Shell: Cotton 200T / 233T percale, 260TC and 280T down-proof cotton, microfibre casing",
      "Firmness: Soft / medium / firm fills — specifiable per room class so one property is consistent",
      "Sizes: Standard 50x75cm, 50x90cm, 65x65cm continental; custom sizes available",
      "MOQ: 200 pieces per size/fill combination",
    ],
    relatedGuides: [
      { label: "Hotel Linen Buying Guide", href: "/guides/download" },
      { label: "Thread Count Guide", href: "/guides/hotel-bedding-thread-count" },
    ],
    internalLinks: [
      { label: "hotel pillow wholesale", href: "/products/pillows" },
      { label: "down pillow manufacturer China", href: "/products/pillows" },
      { label: "3 chamber hotel pillow", href: "/products/pillows" },
      { label: "microfiber hotel pillow bulk", href: "/products/pillows" },
      { label: "hotel pillowcases", href: "/products/pillowcases" },
      { label: "hotel pillow protectors", href: "/products/pillow-protectors" },
      { label: "hotel duvet inners", href: "/products/duvet-inners" },
      { label: "request pillow samples", href: "/rfq" },
    ],
  },
  "mattress-protectors": {
    name: "Mattress Protectors",
    title: "Hotel Mattress Protectors — Wholesale Waterproof & Quilted",
    description: "Wholesale waterproof hotel mattress protectors, factory-direct from Nantong: TPU-laminated, quilted 120gsm, and terry-backed options with corner straps.",
    keywords: "hotel mattress protector wholesale, waterproof mattress protector supplier China, TPU laminated mattress protector, hotel mattress cover bulk, mattress pad manufacturer",
    intro: "A mattress protector is the cheapest item in the room and the one that decides whether a mattress survives its warranty. Housekeeping managers buy it for two reasons only: liquid containment and allergen control. We build to both — laminated waterproof barriers that still breathe, and quilted polyester/cotton faces that feel like bedding rather than plastic sheeting.",
    specs: [
      "Waterproofing: TPU lamination (breathable) or PU backing; fully waterproof, not water-repellent",
      "Face fabric: 120gsm quilted polyester, 180gsm poly-cotton terry loop, 200T cotton-poly with 4 corner straps",
      "Construction: Fitted skirt (stretch knit, 30–40cm drop) or corner straps",
      "Backing options: Terry-loop backing for a soft touch, plain knit backing for lowest cost",
      "Allergen control: polyester fibre fill quilted to 120gsm, dust-mite barrier on the sealed models",
      "Sizes: Single through Emperor, plus custom sizes and drop depths",
      "MOQ: 200 pieces per size/type combination",
    ],
    relatedGuides: [
      { label: "QC Checklist", href: "/blog/qc-checklist" },
      { label: "Hotel Linen Buying Guide", href: "/guides/download" },
    ],
    internalLinks: [
      { label: "hotel mattress protector wholesale", href: "/products/mattress-protectors" },
      { label: "waterproof mattress protector China", href: "/products/mattress-protectors" },
      { label: "TPU laminated mattress protector", href: "/products/mattress-protectors" },
      { label: "hotel mattress toppers", href: "/products/mattress-toppers" },
      { label: "hotel pillow protectors", href: "/products/pillow-protectors" },
      { label: "hotel bed sheets", href: "/products/bed-sheets" },
      { label: "request protector samples", href: "/rfq" },
    ],
  },
  "pillow-protectors": {
    name: "Pillow Protectors",
    title: "Hotel Pillow Protectors — Wholesale Waterproof & Zippered",
    description: "Wholesale hotel pillow protectors factory-direct from Nantong: zippered, waterproof TPU-backed and poly-cotton terry options in standard and continental sizes.",
    keywords: "hotel pillow protector wholesale, waterproof pillow protector supplier China, zippered pillow protector bulk, hotel pillow cover manufacturer, pillow protector factory",
    intro: "Pillow protectors exist to keep an expensive down pillow out of the bin. A soiled pillow can be washed; a pillow with a stained or torn shell gets written off. The protectors below are built for that specific job — fully enclosing, machine-washable, and sized to the pillow specs hotels actually buy.",
    specs: [
      "Closure: Zippered (fully enclosing) or envelope; zipper tested for commercial laundry cycling",
      "Waterproofing: TPU-laminated quilted 100gsm microfibre, or PU backing on woven microfibre",
      "Face fabric: 200TC poly-cotton plain, 100gsm quilted microfibre, 50/50 poly-cotton terry loop",
      "Construction: Quilted (adds loft and hides the inner pillow) or flat woven (adds no bulk)",
      "Sizes: Standard 50x75cm, 50x90cm, 65x65cm continental; custom sizes available",
      "Home and healthcare variants available on the same lines (hospital-grade waterproof specification)",
      "MOQ: 300 pieces per size/type combination",
    ],
    relatedGuides: [
      { label: "QC Checklist", href: "/blog/qc-checklist" },
      { label: "Hotel Linen Buying Guide", href: "/guides/download" },
    ],
    internalLinks: [
      { label: "hotel pillow protector wholesale", href: "/products/pillow-protectors" },
      { label: "waterproof pillow protector China", href: "/products/pillow-protectors" },
      { label: "zippered pillow protector bulk", href: "/products/pillow-protectors" },
      { label: "hotel pillows", href: "/products/pillows" },
      { label: "hotel pillowcases", href: "/products/pillowcases" },
      { label: "hotel mattress protectors", href: "/products/mattress-protectors" },
      { label: "request protector samples", href: "/rfq" },
    ],
  },
  "bed-runners": {
    name: "Bed Runners",
    title: "Hotel Bed Runners — Wholesale Custom Logo & Embroidered",
    description: "Wholesale hotel bed runners factory-direct from Nantong: woven, printed and embroidered decorative runners with custom logo or slogan. Any size, low MOQ.",
    keywords: "hotel bed runner wholesale, bed runner supplier China, custom logo bed runner, hotel bed scarf manufacturer, embroidered bed runner bulk",
    intro: "A bed runner does three jobs at once: it breaks up an all-white bed, it carries the property's logo where a guest sees it every night, and it keeps shoes and luggage off the bedding. Because it is decorative rather than functional, it is the one hotel textile where a property can afford to look different — and the one place logo placement earns its cost back.",
    specs: [
      "Function: Decoration, brand display (woven, printed or embroidered logo/slogan), and bedding protection",
      "Construction: Woven jacquard, printed, quilted, or velvet-faced to match the bedding programme",
      "Decoration: Logo or slogan by embroidery, woven label, or print; placement and size to your artwork",
      "Sizes: Standard 45x200cm / 50x220cm plus matching bed sizes; custom cut to any dimension",
      "Material: Polyester jacquard, cotton-poly blend, velvet, linen-look",
      "Color: Dyed to match the bedding programme or Pantone-matched to brand colour",
      "MOQ: 200 pieces per size/design combination",
    ],
    relatedGuides: [
      { label: "Hotel Linen Buying Guide", href: "/guides/download" },
      { label: "Fabric Encyclopedia", href: "/blog/fabric-encyclopedia" },
    ],
    internalLinks: [
      { label: "hotel bed runner wholesale", href: "/products/bed-runners" },
      { label: "custom logo bed runner", href: "/products/bed-runners" },
      { label: "embroidered bed runner manufacturer", href: "/products/bed-runners" },
      { label: "hotel bedding sets", href: "/products/bedding-sets" },
      { label: "hotel duvet covers", href: "/products/duvet-covers" },
      { label: "custom hotel logo embroidery", href: "/rfq" },
    ],
  },
};

const CATEGORY_SLUGS = new Set(Object.keys(CATEGORY_DATA));

/**
 * Decision facts rendered at the top of every category page (2026-10-01):
 * MOQ · bulk lead time · sample days.
 *
 * These are the three numbers a buyer uses to decide whether an enquiry is
 * worth sending, and they belong above the fold rather than buried in the
 * technical specification list.
 *
 * MOQ is deliberately NOT duplicated here — it is read out of each category's
 * own spec list, so the two can never disagree. Lead times are the normal-season
 * ranges; peak season (Aug–Nov) adds 7–10 days, which the block states itself.
 */
const SAMPLE_DAYS_DEFAULT = "5–7 days";
const BULK_LEAD_TIME: Record<string, string> = {
  "bath-towels": "20–30 days",
  "bath-mats": "20–30 days",
  "pool-beach-towels": "25–35 days",
  bathrobes: "25–35 days",
  "bed-sheets": "25–35 days",
  pillowcases: "25–35 days",
  "duvet-covers": "25–35 days",
  "table-linen": "25–35 days",
  "mattress-toppers": "25–35 days",
  "mattress-protectors": "25–35 days",
  "pillow-protectors": "25–35 days",
  "bed-runners": "25–35 days",
  "bedding-sets": "30–40 days",
  "duvet-inners": "30–40 days",
  pillows: "30–40 days",
  "bedding-fabric": "30–45 days",
};
/** Sampling takes longer where a shade is dyed, a fill is specified or a logo is embroidered. */
const SAMPLE_DAYS_BY_SLUG: Record<string, string> = {
  bathrobes: "7–10 days",
  "bedding-sets": "7–10 days",
  "duvet-inners": "7–10 days",
  pillows: "7–10 days",
  "bedding-fabric": "7–10 days",
  "bed-runners": "7–10 days",
};

/**
 * Categories that run on the founding member's bedding lines. Only these pages
 * state the bedding capacity figure — quoting a bedding number on a towel page
 * would be a claim about the wrong plant.
 */
const BEDDING_LINE_SLUGS = new Set([
  "bedding-sets",
  "bed-sheets",
  "duvet-covers",
  "duvet-inners",
  "pillows",
  "pillowcases",
  "bedding-fabric",
  "mattress-toppers",
  "mattress-protectors",
  "pillow-protectors",
  "bed-runners",
]);

function moqFromSpecs(specs: string[]): string {
  const line = specs.find((s) => /^moq\s*:/i.test(s));
  return line ? line.replace(/^moq\s*:\s*/i, "") : "On request";
}

/**
 * The decision block. Rendered on category pages and, in a reduced form, on
 * Sanity product pages, so every product page on the site carries the same three
 * numbers in the same place.
 */
function DecisionFacts({
  moq,
  bulkLeadTime,
  sampleDays,
}: {
  moq: string;
  bulkLeadTime: string;
  sampleDays: string;
}) {
  const facts = [
    { label: "MOQ", value: moq },
    { label: "Bulk lead time", value: bulkLeadTime },
    { label: "Sample lead time", value: sampleDays },
  ];

  return (
    <div className="mt-8">
      <div className="grid gap-3 sm:grid-cols-3">
        {facts.map((fact) => (
          <div key={fact.label} className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{fact.label}</p>
            <p className="mt-1 text-base font-semibold text-gray-900">{fact.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl bg-blue-50 px-5 py-3 text-sm text-blue-900">
        <span className="font-semibold">{company.service.quoteReplyLabel}</span>
        <span className="text-blue-800/80">
          {company.service.peakSeasonNote} Attach a photo of the label you use now and we can price
          most orders the same day.
        </span>
        <Link href="/rfq" className="font-semibold text-blue-800 underline underline-offset-2">
          Send your specification →
        </Link>
      </div>
    </div>
  );
}


// Map slug to Sanity category display name
const SLUG_TO_CATEGORY_NAME: Record<string, string> = {
  "bath-towels": "Bath Towels",
  "bathrobes": "Bathrobes",
  "pool-beach-towels": "Pool & Beach Towels",
  "bath-mats": "Bath Mats",
  "bed-sheets": "Bed Sheets",
  "pillowcases": "Pillowcases",
  "duvet-covers": "Duvet Covers",
  "table-linen": "Table Linen",
  "mattress-toppers": "Mattress Toppers",
  "bedding-sets": "Hotel Bedding Sets",
  "bedding-fabric": "Hotel Bedding Fabric",
  "duvet-inners": "Duvet Inners",
  "pillows": "Pillows",
  "mattress-protectors": "Mattress Protectors",
  "pillow-protectors": "Pillow Protectors",
  "bed-runners": "Bed Runners",
};

// ----- Page component -----

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Category route
  if (CATEGORY_SLUGS.has(slug)) {
    const data = CATEGORY_DATA[slug];
    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      alternates: { canonical: `/products/${slug}` },
      openGraph: {
        title: data.title,
        description: data.description,
        url: `https://www.nantonglinens.com/products/${slug}`,
      },
    };
  }

  // Product route
  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });
  if (!product) return {};

  return {
    title: `${product.name} — Hotel Linen Specs & Pricing | Nantong Linens`,
    description: product.shortDescription || `${product.name} in bulk — factory-direct pricing from member-owned factories in Nantong.`,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.name} — Hotel Linen Specs & Pricing | Nantong Linens`,
      description: product.shortDescription || "",
      images: product.images?.[0]?.asset?.url ? [product.images[0].asset.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const products = await client.fetch(PRODUCTS_QUERY).catch(() => []);
  const productSlugs = (products || []).map((p: any) => ({ slug: p.slug?.current }));
  const categorySlugs = Array.from(CATEGORY_SLUGS).map((s) => ({ slug: s }));
  return [...productSlugs, ...categorySlugs];
}

export default async function ProductOrCategoryPage({ params }: PageProps) {
  const { slug } = await params;

  // --- Category Route ---
  if (CATEGORY_SLUGS.has(slug)) {
    const data = CATEGORY_DATA[slug];
    const categoryName = SLUG_TO_CATEGORY_NAME[slug] || data.name;

    const allProducts = await client.fetch(PRODUCTS_QUERY);
    const filtered = allProducts.filter((p: any) => p.category === categoryName);

    return (
      <>
        <section className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-blue-800">Products</Link>
              <span>/</span>
              <span className="text-gray-600">{data.name}</span>
            </nav>
          </div>
        </section>

        <section className="bg-white py-14 border-b border-gray-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-medium text-blue-800 uppercase tracking-wider">Product Category</span>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">{data.name}</h1>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">{data.intro}</p>
            {/* Decision three lines — the numbers a buyer checks before enquiring */}
            <DecisionFacts
              moq={moqFromSpecs(data.specs)}
              bulkLeadTime={BULK_LEAD_TIME[slug] ?? company.service.bulkLeadTimeLabel}
              sampleDays={SAMPLE_DAYS_BY_SLUG[slug] ?? SAMPLE_DAYS_DEFAULT}
            />
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm text-gray-400">
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""} in {data.name}
          </p>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product: any) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="mx-auto max-w-md">
                <p className="text-lg text-gray-500">No products listed in {data.name} yet, but we manufacture these daily.</p>
                <p className="mt-2 text-sm text-gray-400">Alliance factories cover {data.name.toLowerCase()} across every spec combination.</p>
                <Link href="/rfq" className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors">
                  Tell us what you need →
                </Link>
              </div>
            </div>
          )}

          {/* Technical specifications */}
          <div className="mt-16 rounded-xl bg-gray-50 p-8">
            <h2 className="text-lg font-semibold text-gray-900">{data.name} — Technical Specifications</h2>
            <ul className="mt-4 space-y-2">
              {data.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 text-blue-800 font-bold">•</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Related guides */}
          {data.relatedGuides.length > 0 && (
            <div className="mt-8 rounded-xl border border-gray-100 bg-white p-8">
              <h2 className="text-lg font-semibold text-gray-900">Related Resources</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {data.relatedGuides.map((guide) => (
                  <Link key={guide.href} href={guide.href} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 hover:bg-blue-100 transition-colors">
                    {guide.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* SEO internal links */}
          <aside className="mt-8 rounded-xl bg-gray-50 p-8">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Explore {data.name} Manufacturing</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.internalLinks.map((kw) => (
                <Link key={kw.label} href={kw.href} className="rounded-full bg-white px-3 py-1.5 text-xs text-gray-500 border border-gray-200 hover:text-blue-800 hover:border-blue-200 transition-colors">
                  {kw.label}
                </Link>
              ))}
            </div>
          </aside>

          {/* Buyer objections — the four reasons an enquiry does not get sent.
              Sits between the product content and the factory/audit block. */}
          <BuyerConcerns category={data.name} variant="flush" />

          {/* Factory / audit internal link — category pages are the top entry point
              for "hotel X manufacturer" queries, so they must link to /factory. */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-900">Where {data.name} is made</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
              This category runs at the alliance member factory that owns those production lines — not at
              a third party we buy from. On the factory page you can see which member makes it, what the
              inspection standard covers, and how to arrange a site visit or a third-party audit before
              you place an order.
            </p>
            {BEDDING_LINE_SLUGS.has(slug) && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
                Bedding capacity across the alliance is{" "}
                <strong className="font-semibold text-gray-900">
                  {company.capacity.beddingLabel}
                </strong>{" "}
                of sets ({company.capacity.beddingScope}). {company.capacity.note}
              </p>
            )}
            <Link
              href="/factory"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Visit or audit our factories
            </Link>
          </div>

          {/* Cross-sell other categories — derived from CATEGORY_DATA so every
              category page links to every other one (internal-link mesh). */}
          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50/50 p-8">
            <h2 className="text-lg font-semibold text-gray-900">Looking for other hotel linen categories?</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(CATEGORY_DATA)
                .filter(([key]) => key !== slug)
                .map(([key, cat]) => (
                  <Link key={key} href={`/products/${key}`} className="rounded-lg bg-white border border-gray-100 p-4 text-sm font-medium text-gray-700 hover:border-blue-200 hover:text-blue-800 transition-colors">
                    {cat.name} →
                  </Link>
                ))}
            </div>
          </div>

          {/* RFQ CTA */}
          <div className="mt-12 rounded-2xl bg-blue-950 p-10 text-center">
            <h2 className="text-2xl font-bold text-white">Need custom {data.name.toLowerCase()} specifications?</h2>
            <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">
              Tell us your required specs and quantity — attach your specification sheet, or just a
              photo of the label you use today. We run it on the right member factory&apos;s line and
              come back with a factory-direct quote within 24 hours; samples follow in{" "}
              {SAMPLE_DAYS_BY_SLUG[slug] ?? SAMPLE_DAYS_DEFAULT}.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/rfq" className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors">
                Request a Quote
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors">
                View All Products
              </Link>
            </div>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: data.title,
            description: data.description,
            url: `https://www.nantonglinens.com/products/${slug}`,
            isPartOf: { "@type": "WebSite", name: "Nantong Linens", url: "https://www.nantonglinens.com" },
          }),
        }} />
      </>
    );
  }

  // --- Product Detail Route ---
  const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });
  if (!product) notFound();

  return (
    <>
      <section className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-800">Products</Link>
            <span>/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-50">
                {product.images?.[0]?.asset?.url ? (
                  <Image src={product.images[0].asset.url} alt={product.images[0].alt || product.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-gray-300">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                  </div>
                )}
              </div>
              {product.images && product.images.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {product.images.map((img: any, i: number) => (
                    <div key={i} className="relative h-20 w-20 overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
                      {img.asset?.url ? <Image src={img.asset.url} alt={img.alt || `${product.name} ${i + 1}`} fill sizes="80px" className="object-cover" /> : null}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              {/* Category badge — now links to category page */}
              {product.category && (() => {
                const catSlug = Object.entries(SLUG_TO_CATEGORY_NAME).find(([, name]) => name === product.category)?.[0];
                const badge = (
                  <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                    {product.category}
                  </span>
                );
                return catSlug ? <Link href={`/products/${catSlug}`}>{badge}</Link> : badge;
              })()}

              <h1 className="mt-3 text-3xl font-bold text-gray-900">{product.name}</h1>
              {product.shortDescription && (
                <p className="mt-4 text-base leading-relaxed text-gray-500">{product.shortDescription}</p>
              )}

              {/* Decision three lines — same three numbers as every category page */}
              <DecisionFacts
                moq={product.moq ? `${product.moq} pcs` : "On request"}
                bulkLeadTime={product.leadTime || company.service.bulkLeadTimeLabel}
                sampleDays={SAMPLE_DAYS_DEFAULT}
              />

              {product.priceRange && (
                <div className="mt-4 rounded-lg bg-gray-50 px-4 py-3">
                  <p className="text-xs text-gray-400">Price Range</p>
                  <p className="font-semibold text-gray-900">{product.priceRange}</p>
                </div>
              )}

              {product.specifications && (
                <div className="mt-8">
                  <h2 className="font-semibold text-gray-900">Specifications</h2>
                  <div className="mt-3 divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
                    {product.specifications.material && (
                      <div className="flex justify-between px-5 py-3"><span className="text-sm text-gray-500">Material</span><span className="text-sm font-medium text-gray-900">{product.specifications.material}</span></div>
                    )}
                    {product.specifications.threadCount && (
                      <div className="flex justify-between px-5 py-3"><span className="text-sm text-gray-500">Thread Count</span><span className="text-sm font-medium text-gray-900">{product.specifications.threadCount}</span></div>
                    )}
                    {product.specifications.gsm && (
                      <div className="flex justify-between px-5 py-3"><span className="text-sm text-gray-500">GSM</span><span className="text-sm font-medium text-gray-900">{product.specifications.gsm} g/m²</span></div>
                    )}
                    {product.specifications.sizes && (
                      <div className="flex justify-between px-5 py-3"><span className="text-sm text-gray-500">Sizes</span><span className="text-sm font-medium text-gray-900 text-right">{product.specifications.sizes}</span></div>
                    )}
                    {product.specifications.colors && (
                      <div className="flex justify-between px-5 py-3"><span className="text-sm text-gray-500">Colors</span><span className="text-sm font-medium text-gray-900">{product.specifications.colors}</span></div>
                    )}
                  </div>
                </div>
              )}

              {product.customizations && product.customizations.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-semibold text-gray-900">Customization Options</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.customizations.map((opt: string) => (
                      <span key={opt} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-800">{opt}</span>
                    ))}
                  </div>
                </div>
              )}

              {product.hotelTiers && product.hotelTiers.length > 0 && (
                <div className="mt-6">
                  <h2 className="font-semibold text-gray-900 text-sm">Suitable For</h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.hotelTiers.map((tier: string) => (
                      <span key={tier} className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">{tier}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/rfq" className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-800 transition-colors">
                  Request a Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <a href="https://wa.me/8615151361119" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-8 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {product.description && (
            <div className="mt-16 border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
              <div className="mt-6 prose max-w-none">
                <PortableTextContent content={product.description} />
              </div>
            </div>
          )}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: (() => {
          let minPrice: number | undefined;
          let maxPrice: number | undefined;
          if (product.priceRange) {
            const numbers = product.priceRange.match(/\d+(?:\.\d+)?/g)?.map(Number);
            if (numbers && numbers.length > 0) { minPrice = Math.min(...numbers); maxPrice = Math.max(...numbers); }
          }
          return JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription || "",
            brand: { "@type": "Brand", name: product.category || "Hotel Linen" },
            ...(product.images?.[0]?.asset?.url ? { image: product.images[0].asset.url } : {}),
            offers: {
              "@type": "AggregateOffer",
              offerCount: 1,
              lowPrice: minPrice,
              highPrice: maxPrice,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `https://www.nantonglinens.com/products/${product.slug?.current || slug}`,
              seller: { "@type": "Organization", name: "Nantong Linens" },
              ...(product.moq ? { eligibleQuantity: { "@type": "QuantitativeValue", value: product.moq, unitText: "pcs" } } : {}),
            },
            category: product.category,
            ...(product.specifications?.material ? { material: product.specifications.material } : {}),
          });
        })(),
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nantonglinens.com" },
            { "@type": "ListItem", position: 2, name: "Products", item: "https://www.nantonglinens.com/products" },
            { "@type": "ListItem", position: 3, name: product.name, item: `https://www.nantonglinens.com/products/${product.slug?.current || slug}` },
          ],
        }),
      }} />
    </>
  );
}

/* ---- Minimal Portable Text renderer ---- */
function PortableTextContent({ content }: { content: any[] }) {
  if (!content) return null;
  return (
    <div className="space-y-4 text-base leading-relaxed text-gray-600">
      {content.map((block: any, i: number) => {
        if (block._type !== "block") return null;
        const text = block.children?.map((c: any) => c.text).join("") || "";
        switch (block.style) {
          case "h1": return <h1 key={i} className="mt-8 text-2xl font-bold text-gray-900">{text}</h1>;
          case "h2": return <h2 key={i} className="mt-6 text-xl font-bold text-gray-900">{text}</h2>;
          case "h3": return <h3 key={i} className="mt-4 text-lg font-semibold text-gray-900">{text}</h3>;
          case "blockquote": return <blockquote key={i} className="border-l-4 border-blue-200 pl-4 italic text-gray-500">{text}</blockquote>;
          default: return <p key={i}>{text}</p>;
        }
      })}
    </div>
  );
}
