var e=`How To&#39;s - Paintingdemons`,t=`<!-- MAIN CONTENT -->
  <div class="pd-main">
    <style>
    /* ========== BANNER ========== */
    .pd-banner { width: 100%; overflow: hidden; border-bottom: 2px solid #1a0000; }
    .pd-banner img { width: 100%; height: auto; display: block; }

    /* ========== MAIN CONTENT AREA ========== */
    .pd-howto-main {
      background-image: url('https://paintingdemons.com/cdn/shop/t/55/assets/blood.webp?v=39001067605903035731790206086') ;
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

    /* CENTER COLUMN - HOWTOS AREA */
    .pd-center {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 16px;
      overflow-y: auto;
      max-height: 600px;
      flex-direction: column;
    }

    .howto-title {
      font-family: 'Sitka', 'Sitka Text', 'Georgia', 'Times New Roman', serif;
      font-size: 24px;
      font-weight: bold;
      color: #e0d8d0;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: center;
      margin-bottom: 20px;
      margin-top: 10px;
      width: 100%;
      text-shadow: 0 0 10px rgba(139, 0, 0, 0.3);
      flex-shrink: 0;
    }

    .howto-container {
      display: flex;
      flex-direction: column;
      gap: 25px;
      width: 100%;
      max-width: 550px;
    }

    .howto-step {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      text-align: center;
    }

    .howto-image {
      width: 100%;
      max-width: 400px;
      height: 250px;
      border: 2px solid #3a0000;
      background: #1a1a1a;
      overflow: hidden;
      transition: transform 0.2s, border-color 0.2s;
    }

    .howto-image:hover {
      transform: scale(1.02);
      border-color: #8b0000;
    }

    .howto-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .howto-text {
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      color: #ccc;
      line-height: 1.5;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid #3a0000;
      padding: 12px;
      border-radius: 2px;
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
    @media (max-width: 768px) {
      .pd-main-grid { grid-template-columns: 1fr; gap: 20px; }
      .pd-left { order: 2; flex-direction: row; flex-wrap: wrap; justify-content: center; padding: 16px; }
      .pd-center { order: 1; padding: 16px; overflow-y: visible !important; max-height: none !important; }
      .pd-right { display: none !important; }
      .pd-loveslime { margin-top: 0; padding-bottom: 0; }
      .pd-newsletter-link { display: none !important; }
    }

    @media (max-width: 480px) {
      .howto-title { font-size: 18px; }
      .howto-image { max-width: 100%; }
    }
</style>

<!-- BANNER -->
<div class="pd-banner">
  <img src="https://paintingdemons.com/cdn/shop/t/55/assets/banner2.png?v=73753946034174658961790206086" alt="Paintingdemons banner">
</div>

<!-- MAIN CONTENT -->
<div class="pd-howto-main">
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

    <!-- CENTER COLUMN - HOWTOS -->
    <div class="pd-center">
      <div class="howto-title">HOW TO TAKE OFF MASK</div>
      <div class="howto-container">
        <!-- Step 1 -->
        <div class="howto-step">
          <div class="howto-image">
            <img src="https://paintingdemons.com/cdn/shop/t/55/assets/takeoff1.webp?v=68411140843218726441790206086" alt="Step 1">
          </div>
          <div class="howto-text">
            Step 1: Look at your own reflection and think about every sin you've committed.
          </div>
        </div>

        <!-- Step 2 -->
        <div class="howto-step">
          <div class="howto-image">
            <img src="https://paintingdemons.com/cdn/shop/t/55/assets/takeoff2.webp?v=155168841292685290941790206086" alt="Step 2">
          </div>
          <div class="howto-text">
            Step 2: Place both hands on your head and let it all out.
          </div>
        </div>

        <!-- Step 3 -->
        <div class="howto-step">
          <div class="howto-image">
            <img src="https://paintingdemons.com/cdn/shop/t/55/assets/takeoff3.webp?v=47213710915999140611790206086" alt="Step 3">
          </div>
          <div class="howto-text">
            Step 3: Release the bugs under your skin they're too loud.
          </div>
        </div>

        <!-- Step 4 -->
        <div class="howto-step">
          <div class="howto-image">
            <img src="https://paintingdemons.com/cdn/shop/t/55/assets/takeoff4.webp?v=92843206129959984951790206086" alt="Step 4">
          </div>
          <div class="howto-text">
            Step 4: Shed your skin.
          </div>
        </div>
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

  window.pdOnReady( loadMasks);

}`],r={title:e,html:t,scripts:n};export{r as default,t as html,n as scripts,e as title};