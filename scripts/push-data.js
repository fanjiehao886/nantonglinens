const https = require('https');

const projectId = 'nk89o1k8';
const dataset = 'production';
const token = 'skvNBwO80b5504XlXsL672JbNZ9OHZgphWqpsmJpVzV9FxmFnLBbP6vQk2Fmm6G9WJ01wyEubu5OfmherI1Afoi31zHD2moE9FJFlEML0sRkN1L5PF2uGcPK2cEaGbTJOY2ojijctt58GxGtEYWgkfFf8Bm12wMI8BLuejwMHHAfRFGdUHcD';

function mutate(mutations) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ mutations });
    const options = {
      hostname: `${projectId}.api.sanity.io`,
      port: 443,
      path: `/v1/data/mutate/${dataset}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => resolve({status: res.statusCode, body}));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function createDoc(doc) {
  return mutate([{ createOrReplace: doc }]);
}

async function main() {
  const products = [
    {
      _id: 'product-premium-bed-sheet-200tc',
      _type: 'product',
      name: 'Premium Hotel Bed Sheet Set - 200TC Cotton',
      slug: { _type: 'slug', current: 'premium-hotel-bed-sheet-set-200tc' },
      category: 'Bed Sheets',
      shortDescription: 'High-quality 200 thread count cotton bed sheets designed for hotels. Soft, durable, and machine washable for commercial use.',
      description: [],
      images: [],
      specifications: { material: '100% Cotton', threadCount: '200TC', gsm: 140, sizes: ['Twin', 'Full', 'Queen', 'King'], colors: ['White', 'Ivory'] },
      moq: '50 sets',
      leadTime: '10-15 days',
      priceRange: '$1.80 - $3.20 per set',
      featured: true
    },
    {
      _id: 'product-luxury-pillowcase-300tc',
      _type: 'product',
      name: 'Luxury Hotel Pillowcase - 300TC Egyptian Cotton',
      slug: { _type: 'slug', current: 'luxury-hotel-pillowcase-300tc' },
      category: 'Pillowcases',
      shortDescription: 'Premium 300 thread count Egyptian cotton pillowcases with envelope closure. Silky smooth feel.',
      description: [],
      images: [],
      specifications: { material: '100% Egyptian Cotton', threadCount: '300TC', gsm: 160, sizes: ['Standard', 'King', 'Euro'], colors: ['White', 'Cream', 'Light Blue'] },
      moq: '100 pieces',
      leadTime: '12-18 days',
      priceRange: '$0.85 - $1.50 per piece',
      featured: true
    },
    {
      _id: 'product-duvet-cover-microfiber',
      _type: 'product',
      name: 'Hotel Duvet Cover - Microfiber with Button Closure',
      slug: { _type: 'slug', current: 'hotel-duvet-cover-microfiber-button' },
      category: 'Duvet Covers',
      shortDescription: 'Wrinkle-resistant microfiber duvet cover with hidden button closure. Ideal for high-turnover hotel operations.',
      description: [],
      images: [],
      specifications: { material: 'Polyester Microfiber', threadCount: 'N/A', gsm: 120, sizes: ['Full/Queen', 'King', 'Super King'], colors: ['White', 'Grey', 'Navy'] },
      moq: '30 sets',
      leadTime: '7-12 days',
      priceRange: '$2.50 - $4.50 per set',
      featured: true
    },
    {
      _id: 'product-bath-towel-set-cotton',
      _type: 'product',
      name: 'Premium Hotel Bath Towel Set - 100% Combed Cotton',
      slug: { _type: 'slug', current: 'premium-bath-towel-set-combed-cotton' },
      category: 'Bath Towels',
      shortDescription: 'Absorbent and quick-drying combed cotton bath towels. Available in multiple weights from 400-700 GSM.',
      description: [],
      images: [],
      specifications: { material: '100% Combed Cotton', threadCount: 'N/A', gsm: 500, sizes: ['Bath Towel (27x54in)', 'Hand Towel (16x28in)', 'Washcloth (13x13in)'], colors: ['White', 'Ivory'] },
      moq: '200 pieces',
      leadTime: '10-15 days',
      priceRange: '$1.20 - $4.00 per piece',
      featured: false
    },
    {
      _id: 'product-mattress-topper-memory-foam',
      _type: 'product',
      name: 'Hotel Mattress Topper - Memory Foam Quilted',
      slug: { _type: 'slug', current: 'mattress-topper-memory-foam-quilted' },
      category: 'Mattress Toppers',
      shortDescription: 'Quilted memory foam mattress topper providing extra comfort layer. Fits mattresses up to 15 inches deep.',
      description: [],
      images: [],
      specifications: { material: 'Memory Foam + Cotton Cover', threadCount: 'N/A', gsm: 800, sizes: ['Twin', 'Full', 'Queen', 'King', 'California King'], colors: ['White'] },
      moq: '20 pieces',
      leadTime: '15-25 days',
      priceRange: '$12.00 - $35.00 per piece',
      featured: false
    },
    {
      _id: 'product-table-linen-polyester',
      _type: 'product',
      name: 'Banquet Table Linens - Polyester Damask Weave',
      slug: { _type: 'slug', current: 'banquet-table-linen-polyester-damask' },
      category: 'Table Linens',
      shortDescription: 'Elegant polyester damask tablecloths for banquet halls, conference rooms, and event spaces.',
      description: [],
      images: [],
      specifications: { material: '220g Polyester Damask', threadCount: 'N/A', gsm: 220, sizes: ['Round (60/72/90in)', 'Rectangular (60x102/60x126/90x132in)'], colors: ['White', 'Ivory', 'Black', 'Navy', 'Burgundy'] },
      moq: '50 pieces',
      leadTime: '10-14 days',
      priceRange: '$3.50 - $12.00 per piece',
      featured: false
    }
  ];

  console.log('Creating ' + products.length + ' products...\n');
  
  let ok = 0, fail = 0;
  for (let i = 0; i < products.length; i++) {
    try {
      const r = await createDoc(products[i]);
      if (r.status === 200 || r.status === 201) {
        console.log((i+1) + '. OK   ' + products[i].name.substring(0,52));
        ok++;
      } else {
        console.log((i+1) + '. FAIL ' + products[i].name.substring(0,48) + ' (' + r.status + ')');
        console.log('     Response: ' + (r.body||'').substring(0,120));
        fail++;
      }
    } catch(e) {
      console.log((i+1) + '. ERR  ' + e.message);
      fail++;
    }
  }

  // Create blog post
  try {
    const postR = await createDoc({
      _id: 'post-how-to-choose-hotel-linens',
      _type: 'post',
      title: "How to Choose Hotel Linens: A Complete Buyer's Guide for 2025",
      slug: { _type: 'slug', current: 'how-to-choose-hotel-linens-guide' },
      publishedAt: '2025-01-15T10:00:00Z',
      excerpt: 'Everything you need to know when sourcing hotel linens from manufacturers.',
      body: []
    });
    if (postR.status === 200 || postR.status === 201) {
      console.log('\n7. OK   Blog Post created');
      ok++;
    } else {
      console.log('\n7. FAIL Blog Post (' + postR.status + ')');
      fail++;
    }
  } catch(e) {
    console.log('\n7. ERR  Blog Post: ' + e.message);
    fail++;
  }

  console.log('\n=== Summary: ' + ok + ' OK, ' + fail + ' failed ===');
}

main().catch(e => console.error('Error:', e.message));
