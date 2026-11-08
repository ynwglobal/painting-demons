var e=`Paintingdemons - Paintingdemons`,t=`<!-- MAIN CONTENT -->
  <div class="pd-main">
    <img src="https://paintingdemons.com/cdn/shop/t/55/assets/kryptoid-logo.png?v=100518093559378821921790206086" alt="" class="veil-sigil veil-sigil-obvious" data-sigil-id="1" style="bottom:16px; right:140px;" onclick="pdSigilFound(1)" aria-hidden="true">
<style>
  /* ========== MASK ANIMATION ========== */
  .pd-mask-character { position: absolute; left: 50%; transform: translateX(-50%); z-index: 500; display: flex; flex-direction: column; align-items: center; top: -366px; animation: maskPeek 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, maskExit 1s ease-in 2s forwards; }
  @keyframes maskPeek { 0% { top: -366px; } 100% { top: -165px; } }
  @keyframes maskExit { 0% { opacity: 1; top: -165px; } 100% { opacity: 0; top: -366px; } }
  .pd-mask-character a { display: block; transition: transform 0.3s; }
  .pd-mask-character a:hover { transform: scale(1.05); }
  .pd-mask-character img.pd-mask-img { width: 220px; height: auto; display: block; filter: drop-shadow(0 4px 20px rgba(0,0,0,0.8)); }
  .pd-clickme-wrap { position: absolute; right: -130px; top: 200px; animation: maskExit 1s ease-in 2s forwards; }
  .pd-clickme-wrap img { width: 120px; height: auto; display: block; animation: clickmeBounce 0.8s ease-in-out infinite; }
  @keyframes clickmeBounce { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-5px) rotate(3deg); } }

  /* ========== BANNER ========== */
  .pd-banner { width: 100%; overflow: hidden; border-bottom: 2px solid #1a0000; }
  .pd-banner img { width: 100%; height: auto; display: block; }

  /* ========== MAIN CONTENT AREA ========== */
  .pd-main {
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

  /* Show clickme and masktop only on homepage */
  .pd-mask-character { display: flex !important; }
  .pd-clickme-wrap { display: block !important; }

  @media (max-width: 768px) {
    .pd-mask-character { display: flex !important; top: -234px; }
    .pd-clickme-wrap { display: block !important; right: -90px; top: 130px; }
    .pd-mask-character img.pd-mask-img { width: 140px; }
    .pd-clickme-wrap img { width: 80px; }
    /* peek offsets scaled to the 140px mask (height ~234px) */
    @keyframes maskPeek { 0% { top: -234px; } 100% { top: -105px; } }
    @keyframes maskExit { 0% { opacity: 1; top: -105px; } 100% { opacity: 0; top: -234px; } }
  }

  @media (max-width: 480px) {
    .pd-mask-character { top: -184px; }
    .pd-clickme-wrap { right: -70px; top: 100px; }
    .pd-mask-character img.pd-mask-img { width: 110px; }
    .pd-clickme-wrap img { width: 65px; }
    /* peek offsets scaled to the 110px mask (height ~184px) */
    @keyframes maskPeek { 0% { top: -184px; } 100% { top: -83px; } }
    @keyframes maskExit { 0% { opacity: 1; top: -83px; } 100% { opacity: 0; top: -184px; } }
  }

  /* CENTER COLUMN */
  .pd-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 16px 24px 16px;
  }

  .pd-mainbox { display: block; max-width: 100%; width: 100%; margin-top: 1px; }
  .pd-mainbox video { width: 100%; height: auto; display: block; }

  /* ========== PRODUCT SLIDER ========== */
  .pd-slider-wrap {
    display: none;
    align-items: center;
    gap: 8px;
    width: 100%;
    margin-top: 12px;
    max-width: 420px;
    align-self: center;
  }

  .pd-slider-track {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .pd-slider-item {
    display: block;
    text-decoration: none;
    transition: transform 0.2s, filter 0.2s;
  }

  .pd-slider-item:hover { transform: scale(1.03); filter: brightness(1.1); }

  .pd-slider-item img {
    width: 100%;
    height: auto;
    display: block;
  }

  .pd-slider-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    flex-shrink: 0;
    transition: filter 0.2s, transform 0.2s;
  }

  .pd-slider-btn:hover { filter: brightness(1.5); transform: scale(1.1); }
  .pd-slider-btn[hidden] { display: none; }
  .pd-slider-btn svg { display: block; width: 16px; height: 32px; }

  /* RIGHT COLUMN */
  .pd-right { display: flex; flex-direction: column; align-items: center; padding: 24px 16px; gap: 16px; }
  .pd-newmasks-header img { max-width: 330px; width: 100%; height: auto; display: block; }
  .pd-masks-wrap { display: flex; align-items: center; gap: 8px; width: 100%; max-width: 380px; }
  .pd-masks-wrap .pd-masks-grid { flex: 1; min-width: 0; }
  .pd-masks-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; }
  .pd-masks-grid a { display: block; transition: transform 0.2s, filter 0.2s; }
  .pd-masks-grid a img { width: 100%; height: auto; display: block; }
  .pd-masks-grid a:hover { transform: scale(1.03); filter: brightness(1.1); }

  /* ========== RESPONSIVE ========== */
  @media (max-width: 1024px) {
    .pd-main-grid { grid-template-columns: 1fr 2fr 1fr; }
  }

  @media (max-width: 768px) {
    .pd-main-grid { grid-template-columns: 1fr; gap: 20px; }
    .pd-left { order: 2; flex-direction: row; flex-wrap: wrap; justify-content: center; padding: 16px; }
    .pd-center { order: 1; padding: 16px; }
    .pd-right { display: none !important; }
    .pd-newmasks-header { display: none !important; }
    .pd-masks-grid { display: none !important; }
    .pd-newsletter-link { display: none !important; }
    .pd-loveslime { margin-top: 0; padding-bottom: 0; }
    .pd-slider-wrap { display: flex !important; }
  }

  @media (max-width: 480px) {
    .pd-left { gap: 12px; }
    .pd-newsletter-link img { max-width: 180px; }
    .pd-warning img { max-width: 240px; }
    .pd-loveslime a img { max-width: 140px; }
  }
</style>

<!-- MASK CHARACTER PEEKING FROM TOP -->
<div class="pd-mask-character" id="maskCharacter">
  <a href="/products/slime-karen" aria-label="Featured mask">
    <img src="https://paintingdemons.com/cdn/shop/t/55/assets/masktop.webp?v=78590233400980713571790206086" alt="Featured mask" class="pd-mask-img">
  </a>
  <div class="pd-clickme-wrap">
    <img src="https://paintingdemons.com/cdn/shop/t/55/assets/clickme.webp?v=88476245968973250551790206086" alt="Click me!">
  </div>
</div>

<!-- BANNER -->
<div class="pd-banner">
  <img src="https://paintingdemons.com/cdn/shop/t/55/assets/banner2.png?v=73753946034174658961790206086" alt="Paintingdemons banner">
</div>

<!-- MAIN CONTENT -->
<div class="pd-main">
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

    <!-- CENTER COLUMN -->
    <div class="pd-center">
      <div class="pd-mainbox">
        <video autoplay muted loop playsinline>
          <source src="https://paintingdemons.com/cdn/shop/t/55/assets/sitevid.mp4?v=62259415315356347871790206086" type="video/mp4">
        </video>
      </div>

      <!-- PRODUCT SLIDER -->
      <div class="pd-slider-wrap">
        <button type="button" class="pd-slider-btn" id="sliderPrev" hidden>
          <svg viewBox="0 0 22 44" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="arrowGradL" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#c40000"/>
                <stop offset="50%" stop-color="#5a0000"/>
                <stop offset="100%" stop-color="#8b0000"/>
              </linearGradient>
            </defs>
            <polygon points="22,0 0,22 22,44" fill="url(#arrowGradL)" stroke="#ff3b3b" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="pd-slider-track" id="sliderTrack"></div>
        <button type="button" class="pd-slider-btn" id="sliderNext" hidden>
          <svg viewBox="0 0 22 44" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="arrowGradR" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#c40000"/>
                <stop offset="50%" stop-color="#5a0000"/>
                <stop offset="100%" stop-color="#8b0000"/>
              </linearGradient>
            </defs>
            <polygon points="0,0 22,22 0,44" fill="url(#arrowGradR)" stroke="#ff3b3b" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </button>
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
          <!-- Products from 'new' collection will be inserted here by JavaScript -->
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

  // Fetch products from "New" collection
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
      console.error('Failed to fetch products:', error);
      return [];
    }
  }

  // Populate masks grid with fetched products (paginated)
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

  // Load products when page loads
  window.pdOnReady( loadMasks);

  // ========== PRODUCT SLIDER ==========
  async function fetchSliderProducts() {
    const query = \`
      query {
        collectionByHandle(handle: "slider") {
          products(first: 50) {
            edges {
              node {
                handle
                title
                featuredImage { url }
                priceRange { minVariantPrice { amount } }
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
      const edges = data.data?.collectionByHandle?.products?.edges || [];
      return edges.map(e => ({
        handle: e.node.handle,
        title: e.node.title,
        image: e.node.featuredImage?.url || '',
        price: parseFloat(e.node.priceRange.minVariantPrice.amount).toFixed(2)
      }));
    } catch { return []; }
  }

  async function initSlider() {
    const products = await fetchSliderProducts();
    if (products.length === 0) return;

    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const pageSize = 3;
    let page = 0;
    const totalPages = Math.ceil(products.length / pageSize);

    function render() {
      const slice = products.slice(page * pageSize, page * pageSize + pageSize);
      track.innerHTML = slice.map(p => \`
        <a href="/products/\${p.handle}" class="pd-slider-item">
          <img src="\${p.image}" alt="\${p.title}">
        </a>
      \`).join('');

      prevBtn.hidden = page === 0;
      nextBtn.hidden = page >= totalPages - 1;
    }

    nextBtn.addEventListener('click', () => { page++; render(); });
    prevBtn.addEventListener('click', () => { page--; render(); });

    if (totalPages > 1) nextBtn.hidden = false;
    render();
  }

  window.pdOnReady( initSlider);

}`],r={title:e,html:t,scripts:n};export{r as default,t as html,n as scripts,e as title};