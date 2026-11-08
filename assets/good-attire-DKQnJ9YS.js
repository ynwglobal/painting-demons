var e=`Good Attire - Paintingdemons`,t=`<!-- MAIN CONTENT -->
  <div class="pd-main">
    <style>
    /* ========== BANNER ========== */
    .pd-banner { width: 100%; overflow: hidden; border-bottom: 2px solid #1a0000; }
    .pd-banner img { width: 100%; height: auto; display: block; }

    /* ========== MAIN CONTENT AREA ========== */
    .pd-goodattire-main {
      background-image: url('https://paintingdemons.com/cdn/shop/t/55/assets/blood.webp?v=39001067605903035731790206086');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 600px;
    }

    .pd-main-grid {
      display: grid;
      grid-template-columns: 1fr 2.5fr 1fr;
      gap: 0;
      max-width: 1440px;
      margin: 0 auto;
      min-height: 600px;
    }

    /* LEFT COLUMN */
    .pd-left { display: flex; flex-direction: column; align-items: center; padding: 24px 16px; gap: 20px; }

    .pd-newsletter-link { display: block; transition: transform 0.15s, filter 0.2s; }
    .pd-newsletter-link img { max-width: 240px; width: 100%; height: auto; display: block; }
    .pd-newsletter-link:hover { transform: scale(1.05); filter: brightness(1.3); }

    .pd-warning img { max-width: 306px; width: 100%; height: auto; display: block; }

    .pd-loveslime { margin-top: auto; padding-bottom: 20px; }
    .pd-loveslime a { display: block; transition: transform 0.15s, filter 0.2s; }
    .pd-loveslime a img { max-width: 165px; width: 100%; height: auto; display: block; }
    .pd-loveslime a:hover { transform: scale(1.08); filter: brightness(1.3); }

    /* CENTER COLUMN - PRODUCTS AREA */
    .pd-center {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 16px;
      overflow-y: auto;
      max-height: 600px;
    }

    .pd-products-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 600px;
      padding: 16px;
      box-sizing: border-box;
    }

    .pd-product-item {
      background: rgba(0, 0, 0, 0.6);
      border: 2px solid #3a0000;
      padding: 12px;
      text-align: center;
      transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
      cursor: pointer;
    }

    .pd-product-item:hover {
      transform: scale(1.05);
      border-color: #8b0000;
      box-shadow: 0 0 15px rgba(139, 0, 0, 0.5);
    }

    .pd-product-item img {
      width: 100%;
      height: 200px;
      object-fit: contain;
      display: block;
      margin-bottom: 10px;
      background: #000;
    }

    .pd-product-item.has-hover-image:hover .pd-product-image-main {
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .pd-product-item.has-hover-image:hover .pd-product-image-hover {
      opacity: 1 !important;
      transition: opacity 0.3s ease;
    }

    .pd-product-name {
      font-family: 'Sitka', 'Sitka Text', 'Georgia', 'Times New Roman', serif;
      font-size: 12px;
      font-weight: bold;
      color: #e0d8d0;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .pd-product-price {
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      color: #888;
      margin-bottom: 8px;
    }

    .pd-product-btn {
      background: linear-gradient(180deg, #2a0a0a 0%, #0d0000 50%, #1a0505 100%);
      border: 1px solid #8b0000;
      color: #fff;
      padding: 6px 10px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 10px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.2s;
      width: 100%;
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1);
    }

    .pd-product-btn:hover {
      background: linear-gradient(180deg, #3a0a0a 0%, #1d0000 50%, #2a0505 100%);
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 0 10px rgba(139, 0, 0, 0.5);
      border-color: #d32f2f;
    }

    .pd-product-btn-sold-out {
      background: linear-gradient(180deg, #1a0a0a 0%, #0d0000 50%, #1a0505 100%) !important;
      border-color: #555555 !important;
      color: #666666 !important;
      cursor: not-allowed !important;
      opacity: 0.5;
    }

    .pd-product-btn-sold-out:hover {
      background: linear-gradient(180deg, #1a0a0a 0%, #0d0000 50%, #1a0505 100%) !important;
      border-color: #555555 !important;
      box-shadow: none !important;
      opacity: 0.5;
    }

    .pd-product-btn-coming-soon {
      background: linear-gradient(180deg, #1a0a0a 0%, #0d0000 50%, #1a0505 100%) !important;
      border-color: #555555 !important;
      color: #666666 !important;
      cursor: not-allowed !important;
      opacity: 0.5;
    }

    .pd-product-btn-coming-soon:hover {
      background: linear-gradient(180deg, #1a0a0a 0%, #0d0000 50%, #1a0505 100%) !important;
      border-color: #555555 !important;
      box-shadow: none !important;
      opacity: 0.5;
    }

    /* RIGHT COLUMN */
    .pd-right { display: flex; flex-direction: column; align-items: center; padding: 24px 16px; gap: 16px; }
    .pd-newmasks-header img { max-width: 330px; width: 100%; height: auto; display: block; }
    .pd-masks-wrap { display: flex; align-items: center; gap: 8px; width: 100%; max-width: 380px; }
    .pd-masks-wrap .pd-masks-grid { flex: 1; min-width: 0; }
    .pd-slider-btn { background: none; border: none; padding: 0; cursor: pointer; flex-shrink: 0; transition: filter 0.2s, transform 0.2s; }
    .pd-slider-btn:hover { filter: brightness(1.5); transform: scale(1.1); }
    .pd-slider-btn[hidden] { display: none; }
    .pd-slider-btn svg { display: block; width: 16px; height: 32px; }
    .pd-masks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .pd-masks-grid a { display: block; transition: transform 0.2s, filter 0.2s; }
    .pd-masks-grid a img { width: 100%; height: auto; display: block; }
    .pd-masks-grid a:hover { transform: scale(1.05); filter: brightness(1.2); }

    /* ========== RESPONSIVE ========== */
    @media (max-width: 1024px) {
      .pd-main-grid { grid-template-columns: 1fr 2fr 1fr; }
      .pd-products-container { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
    }

    @media (max-width: 768px) {
      .pd-main-grid { grid-template-columns: 1fr; gap: 20px; }
      .pd-left { order: 2; flex-direction: row; flex-wrap: wrap; justify-content: center; padding: 16px; }
      .pd-center { order: 1; padding: 16px; overflow-y: visible !important; max-height: none !important; }
      .pd-right { display: none !important; }
      .pd-loveslime { margin-top: 0; padding-bottom: 0; }
      .pd-newsletter-link { display: none !important; }
      .pd-products-container { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); max-width: 100%; }
    }

    @media (max-width: 480px) {
      .pd-products-container { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 12px; max-width: 100%; }
    }
</style>

<!-- BANNER -->
<div class="pd-banner">
  <img src="https://paintingdemons.com/cdn/shop/t/55/assets/banner2.png?v=73753946034174658961790206086" alt="Paintingdemons banner">
</div>

<!-- MAIN CONTENT -->
<div class="pd-goodattire-main">
  <div class="pd-main-grid">

    <!-- LEFT COLUMN -->
    <div class="pd-left">
      <a href="/pages/newsletter" class="pd-newsletter-link">
        <img src="https://paintingdemons.com/cdn/shop/t/55/assets/newsletter.webp?v=78008712266500154041790206086" alt="Newsletter">
      </a>
      <div class="pd-warning">
        <img src="https://paintingdemons.com/cdn/shop/t/55/assets/warning.webp?v=36499827313250621221790206086" alt="Warning disclaimer">
      </div>
      <div class="pd-loveslime">
        <a href="/pages/slimetech">
          <img src="https://paintingdemons.com/cdn/shop/t/55/assets/loveslime.webp?v=59159862344707361771790206086" alt="Love Slime? Click Here">
        </a>
      </div>
    </div>

    <!-- CENTER COLUMN - PRODUCTS -->
    <div class="pd-center">
      <div class="pd-products-container" id="productsContainer">
        <!-- Products will be inserted here by JavaScript -->
      </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="pd-right">
      <div class="pd-newmasks-header">
        <img src="https://paintingdemons.com/cdn/shop/t/55/assets/newmasks.webp?v=83783435762914275861790206086" alt="New Masks / Souls">
      </div>
      <div class="pd-masks-wrap">
        <button type="button" class="pd-slider-btn" id="masksPrev" hidden aria-label="Previous masks">
          <svg viewBox="0 0 22 44" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="maskArrowGradL" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#c40000"/>
                <stop offset="50%" stop-color="#5a0000"/>
                <stop offset="100%" stop-color="#8b0000"/>
              </linearGradient>
            </defs>
            <polygon points="22,0 0,22 22,44" fill="url(#maskArrowGradL)" stroke="#ff3b3b" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="pd-masks-grid" id="masksContainer">
          <!-- Masks will be inserted here by JavaScript -->
        </div>
        <button type="button" class="pd-slider-btn" id="masksNext" hidden aria-label="Next masks">
          <svg viewBox="0 0 22 44" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="maskArrowGradR" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#c40000"/>
                <stop offset="50%" stop-color="#5a0000"/>
                <stop offset="100%" stop-color="#8b0000"/>
              </linearGradient>
            </defs>
            <polygon points="0,0 22,22 0,44" fill="url(#maskArrowGradR)" stroke="#ff3b3b" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</div>



  </div>

  <!-- FOOTER -->`,n=[`{

  // Storefront API Configuration
  const STOREFRONT_API = {
    store: 'qjjfqu-5p.myshopify.com',
    token: '05d0beea5eb382d56f68164cc5980e9c',
    endpoint: 'https://qjjfqu-5p.myshopify.com/api/2026-01/graphql.json'
  };

  // Fetch masks from "New" collection
  async function fetchStorefrontMasks() {
    const query = \`
      query {
        collections(first: 1, query: "title:new") {
          edges {
            node {
              products(first: 20, sortKey: CREATED, reverse: true) {
                edges {
                  node {
                    id
                    title
                    handle
                    featuredImage {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    \`;

    try {
      const response = await fetch(STOREFRONT_API.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_API.token
        },
        body: JSON.stringify({ query })
      });

      const data = await response.json();
      if (data.errors) return [];
      const collections = data.data?.collections?.edges || [];
      if (collections.length === 0) return [];
      const masks = collections[0]?.node?.products?.edges || [];
      return masks.map((edge) => ({
        id: edge.node.id,
        shopifyHandle: edge.node.handle,
        name: edge.node.title,
        image: edge.node.featuredImage?.url || 'placeholder.webp'
      }));
    } catch (error) {
      console.error('Failed to fetch masks:', error);
      return [];
    }
  }

  // Populate masks grid (paginated)
  async function loadMasks() {
    const container = document.getElementById('masksContainer');
    const prevBtn = document.getElementById('masksPrev');
    const nextBtn = document.getElementById('masksNext');
    if (!container) return;

    const allMasks = await fetchStorefrontMasks();
    if (allMasks.length === 0) return;

    const pageSize = 4;
    let page = 0;
    const totalPages = Math.ceil(allMasks.length / pageSize);

    function render() {
      const slice = allMasks.slice(page * pageSize, page * pageSize + pageSize);
      container.innerHTML = slice.map(mask => \`
        <a href="/products/\${mask.shopifyHandle}" style="display: block; transition: transform 0.2s, filter 0.2s;">
          <img src="\${mask.image}" alt="\${mask.name}" style="width: 100%; height: auto; display: block;">
        </a>
      \`).join('');

      container.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.05)';
          this.style.filter = 'brightness(1.2)';
        });
        link.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
          this.style.filter = 'brightness(1)';
        });
      });

      if (prevBtn) prevBtn.hidden = page === 0;
      if (nextBtn) nextBtn.hidden = page >= totalPages - 1;
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (page < totalPages - 1) { page++; render(); }
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (page > 0) { page--; render(); }
      });
    }

    render();
  }

  // Fetch products from Storefront API
  async function fetchStorefrontProducts() {
    const query = \`
      query {
        collections(first: 1, query: "title:Good Attire") {
          edges {
            node {
              products(first: 20) {
                edges {
                  node {
                    id
                    title
                    handle
                    availableForSale
                    descriptionHtml
                    tags
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                    featuredImage {
                      url
                      altText
                    }
                    images(first: 2) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                    variants(first: 1) {
                      edges {
                        node {
                          id
                          title
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    \`;

    try {
      const response = await fetch(STOREFRONT_API.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_API.token
        },
        body: JSON.stringify({ query })
      });

      const data = await response.json();

      if (data.errors) {
        console.error('API Error:', data.errors);
        return [];
      }

      const collections = data.data?.collections?.edges || [];

      if (collections.length === 0) {
        console.warn('No "Good Attire" collection found.');
        return [];
      }

      const products = collections[0]?.node?.products?.edges || [];

      return products.map((edge) => {
        const product = edge.node;
        const images = product.images?.edges || [];
        const secondImage = images.length > 1 ? images[1].node.url : null;
        const isComingSoon = product.tags?.includes('coming-soon') || false;
        const variantId = product.variants?.edges?.[0]?.node?.id || null;

        return {
          id: product.id,
          variantId: variantId,
          shopifyHandle: product.handle,
          name: product.title,
          price: parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2),
          image: product.featuredImage?.url || 'placeholder.webp',
          secondImage: secondImage,
          availableForSale: product.availableForSale,
          description: product.descriptionHtml,
          isComingSoon: isComingSoon
        };
      });
    } catch (error) {
      console.error('Failed to fetch products:', error);
      return [];
    }
  }

  // Populate products
  async function loadProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '<div style="text-align: center; color: #aaa;">Loading products...</div>';

    const products = await fetchStorefrontProducts();

    if (products.length === 0) {
      container.innerHTML = '<div style="text-align: center; color: #aaa;">No products found</div>';
      return;
    }

    container.innerHTML = products.map(product => \`
      <div class="pd-product-item \${product.secondImage ? 'has-hover-image' : ''}">
        <a href="/products/\${product.shopifyHandle}" style="display: block; position: relative; overflow: hidden;">
          <img src="\${product.image}" alt="\${product.name}" style="cursor: pointer;" class="pd-product-image-main">
          \${product.secondImage ? \`<img src="\${product.secondImage}" alt="\${product.name}" style="cursor: pointer; position: absolute; top: 0; left: 0; width: 100%; height: 200px; object-fit: contain; background: #000; opacity: 0;" class="pd-product-image-hover">\` : ''}
        </a>
        <div class="pd-product-name">\${product.name}</div>
        <div class="pd-product-price">$\${product.price}</div>
        \${product.isComingSoon ? \`
          <button class="pd-product-btn pd-product-btn-coming-soon" disabled>Coming Soon</button>
        \` : product.availableForSale && product.variantId ? \`
          <button class="pd-product-btn" onclick="addToCart('\${product.variantId}', '\${product.name.replace(/\\s+/g, ' ').replace(/'/g, "\\\\'").replace(/"/g, '&quot;')}')">Add to Cart</button>
        \` : \`
          <button class="pd-product-btn pd-product-btn-sold-out" disabled>Sold Out</button>
        \`}
      </div>
    \`).join('');
  }

  function addToCart(variantId, productName) {
    // Extract numeric ID from GraphQL ID (gid://shopify/ProductVariant/123456789 -> 123456789)
    let numericVariantId = variantId;
    if (variantId && variantId.includes('gid://')) {
      const parts = variantId.split('/');
      numericVariantId = parts[parts.length - 1];
    }

    console.log('Adding to cart - Variant ID:', numericVariantId, 'Product:', productName);

    window.pdCartAddJs('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: numericVariantId,
        quantity: 1
      })
    })
    .then(response => {
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Cart data:', data);
      document.dispatchEvent(new CustomEvent('cart:updated'));
      if (typeof updateCartBadge === 'function') updateCartBadge();
      alert(\`\${productName} added to cart!\`);
    })
    .catch(error => {
      console.error('Error adding to cart:', error);
      alert('Error adding to cart. Please try again. Check browser console for details.');
    });
  }

  // Load products and masks on page load
  window.pdOnReady( function() {
    loadProducts();
    loadMasks();
  });

}`],r={title:e,html:t,scripts:n};export{r as default,t as html,n as scripts,e as title};