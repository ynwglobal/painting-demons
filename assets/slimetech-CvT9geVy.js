var e=`slimetech - Paintingdemons`,t=`<!-- MAIN CONTENT -->
  <div class="pd-main">
    <img src="https://paintingdemons.com/cdn/shop/t/55/assets/kryptoid-logo.png?v=100518093559378821921790206086" alt="" class="veil-sigil veil-sigil-subtle" data-sigil-id="5" style="bottom:70px; right:70px;" onclick="pdSigilFound(5)" aria-hidden="true">
<style>
    /* ========== SCROLLBAR STYLING ========== */
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: #000;
    }

    ::-webkit-scrollbar-thumb {
      background: #0f0;
      border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #00ff00;
    }

    /* Firefox scrollbar */
    * {
      scrollbar-color: #0f0 #000;
      scrollbar-width: thin;
    }

    /* ========== HIDE TOPBAR, MASK & BLOOD BACKGROUND ========== */
    .pd-topbar {
      display: none !important;
    }
    .pd-mask-character {
      display: none !important;
    }
    .pd-header-wrap::before {
      display: none !important;
    }

    /* ========== SLIMETECH FOOTER OVERRIDE ========== */
    .pd-footer {
      text-align: center !important;
      padding: 16px 20px !important;
      background: linear-gradient(180deg, #0a3a0a 0%, #000 50%, #052005 100%) !important;
      border-top: 2px solid #0f0 !important;
      font-family: 'Lucida Console', 'Consolas', monospace !important;
      font-size: 11px !important;
      color: #0f0 !important;
      letter-spacing: 1.5px !important;
      text-transform: uppercase !important;
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.2) !important;
      width: calc(100% - 40px) !important;
      margin: 20px auto 0 !important;
      box-sizing: border-box !important;
    }

    /* ========== SLIMETECH NAVBAR OVERRIDE ========== */
    .pd-navbar {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      background: linear-gradient(180deg, #0a3a0a 0%, #052005 50%, #0a2a0a 100%) !important;
      border-top: 1px solid #0f0 !important;
      border-bottom: 1px solid #0f0 !important;
      padding: 0 !important;
      margin: 0 auto !important;
      flex-wrap: wrap !important;
      position: relative !important;
      z-index: 2 !important;
      box-shadow: 0 0 15px rgba(0, 255, 0, 0.2) !important;
      width: calc(100% - 40px) !important;
      max-width: calc(100vw - 40px) !important;
      box-sizing: border-box !important;
    }

    .pd-nav-link {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex: 1 1 auto !important;
      text-align: center !important;
      padding: 10px 8px !important;
      font-family: 'Sitka', 'Sitka Text', 'Georgia', 'Times New Roman', serif !important;
      font-size: 16px !important;
      font-weight: bold !important;
      color: #0f0 !important;
      letter-spacing: 2px !important;
      text-transform: uppercase !important;
      transition: color 0.2s, text-shadow 0.2s, transform 0.15s !important;
      text-shadow: 0 1px 2px rgba(0,0,0,0.8) !important;
      white-space: nowrap !important;
    }

    .pd-nav-link:hover {
      color: #fff !important;
      text-shadow: 0 0 8px rgba(0, 255, 0, 0.6), 0 1px 3px rgba(0,0,0,0.9) !important;
      transform: scale(1.05) !important;
    }

    .pd-nav-link.active {
      color: #fff !important;
      text-shadow: 0 0 8px rgba(0, 255, 0, 0.8), 0 1px 3px rgba(0,0,0,0.9) !important;
    }

    /* ========== SLIMETECH TERMINAL STYLES ========== */
    .terminal {
      background: rgba(0, 0, 0, 0.8);
      border: 2px solid #0f0;
      border-radius: 4px;
      padding: 15px;
      width: calc(100% - 40px);
      margin: 20px;
      box-sizing: border-box;
      box-shadow:
        0 0 30px rgba(0, 255, 0, 0.3),
        inset 0 0 20px rgba(0, 255, 0, 0.1);
      font-size: 13px;
      line-height: 1.5;
      font-family: 'Lucida Console', 'Consolas', monospace;
      color: #0f0;
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
      letter-spacing: 0.05em;
    }

    /* ========== HEADER ========== */
    .terminal-header {
      border-bottom: 1px solid #0f0;
      padding-bottom: 10px;
      margin-bottom: 15px;
    }

    .header-line {
      margin-bottom: 5px;
    }

    .prompt {
      color: #0f0;
      font-weight: bold;
    }

    .command {
      color: #0f0;
    }

    .output {
      color: #0f0;
      margin-left: 20px;
    }

    /* ========== SECTIONS ========== */
    .section {
      margin-bottom: 20px;
      border-left: 2px solid #0f0;
      padding-left: 15px;
    }

    .section-title {
      color: #0f0;
      font-weight: bold;
      text-decoration: underline;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    /* ========== IMAGE GALLERY ========== */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 12px;
      margin: 15px 0;
      padding: 10px;
      border: 1px solid rgba(0, 255, 0, 0.3);
      background: rgba(0, 0, 0, 0.5);
    }

    .gallery-item {
      aspect-ratio: 1;
      border: 1px solid #0f0;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s;
      background: #111;
    }

    .gallery-item:hover {
      box-shadow: 0 0 15px rgba(0, 255, 0, 0.6);
      transform: scale(1.05);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* ========== PRODUCTS SECTION ========== */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 15px 0;
      padding: 10px;
      border: 1px solid rgba(0, 255, 0, 0.3);
      background: rgba(0, 0, 0, 0.5);
    }

    .product-item {
      border: 1px solid rgba(0, 255, 0, 0.5);
      padding: 12px;
      background: transparent;
      transition: all 0.2s;
      width: fit-content;
    }

    .product-item:hover {
      box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
      border-color: #0f0;
    }

    .product-image {
      width: 150px;
      height: 150px;
      object-fit: contain;
      margin-bottom: 10px;
    }

    .product-title {
      color: #0f0;
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s;
      max-width: 150px;
      word-wrap: break-word;
    }

    .product-title:hover {
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    }

    .product-price {
      color: #0f0;
      font-size: 12px;
      opacity: 0.8;
    }

    /* ========== PROFILE INFO ========== */
    .profile-grid {
      display: grid;
      grid-template-columns: 150px 1fr;
      gap: 20px;
      margin: 15px 0;
      padding: 10px;
      border: 1px solid rgba(0, 255, 0, 0.3);
      background: rgba(0, 0, 0, 0.5);
    }

    .profile-pic {
      width: 150px;
      height: 150px;
      border: 1px solid #0f0;
      overflow: hidden;
      background: #111;
    }

    .profile-pic img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 8px;
    }

    .info-line {
      display: flex;
      gap: 20px;
    }

    .info-label {
      color: #0f0;
      font-weight: bold;
      min-width: 100px;
    }

    .info-value {
      color: #0f0;
    }

    /* ========== DESCRIPTION ========== */
    .description-box {
      border: 1px solid #0f0;
      padding: 10px;
      margin: 15px 0;
      background: rgba(0, 0, 0, 0.5);
      max-height: 400px;
      overflow-y: auto;
      font-size: 12px;
      line-height: 1.6;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .description-box::-webkit-scrollbar {
      width: 8px;
    }

    .description-box::-webkit-scrollbar-track {
      background: #000;
    }

    .description-box::-webkit-scrollbar-thumb {
      background: #0f0;
    }

    /* ========== FOOTER ========== */
    .terminal-footer {
      border-top: 1px solid #0f0;
      padding-top: 15px;
      margin-top: 20px;
      font-size: 11px;
      text-align: center;
    }

    .footer-line {
      margin: 5px 0;
    }

    /* ========== GREEN GRADIENT BUTTONS ========== */
    .st-btn {
      padding: 10px 15px;
      background: linear-gradient(180deg, #0a3a0a 0%, #000 50%, #052005 100%);
      border: 2px solid #0f0;
      color: #0f0;
      font-family: 'Lucida Console', 'Consolas', monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: bold;
      box-shadow: inset 0 1px 2px rgba(0, 255, 0, 0.2);
    }

    .st-btn:hover {
      background: linear-gradient(180deg, #0f5a0f 0%, #0a3a0a 50%, #052005 100%);
      box-shadow: inset 0 1px 2px rgba(0, 255, 0, 0.2), 0 0 15px rgba(0, 255, 0, 0.5);
      transform: scale(1.02);
    }

    /* ========== CURSOR BLINK ========== */
    .cursor {
      display: inline-block;
      width: 10px;
      height: 1em;
      background: #0f0;
      margin-left: 5px;
      animation: blink 1s infinite;
    }

    @keyframes blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }

    /* ========== LIGHTBOX ========== */
    .st-lightbox {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.95);
      z-index: 1000;
      align-items: center;
      justify-content: center;
    }

    .st-lightbox.active {
      display: flex;
    }

    .st-lightbox-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
    }

    .st-lightbox-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border: 3px solid #0f0;
      box-shadow: 0 0 30px rgba(0, 255, 0, 0.5);
    }

    .st-lightbox-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: transparent;
      border: 2px solid #0f0;
      color: #0f0;
      font-size: 28px;
      width: 50px;
      height: 50px;
      cursor: pointer;
      transition: all 0.2s;
      font-family: 'Lucida Console', 'Consolas', monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .st-lightbox-close:hover {
      background: #0f0;
      color: #000;
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.6);
    }

    /* ========== LOADING CODE ========== */
    .st-loading-screen {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 999;
      align-items: center;
      justify-content: center;
      border: 2px solid #0f0;
    }

    .st-loading-screen.active {
      display: flex;
    }

    .st-loading-content {
      width: 90%;
      max-width: 800px;
      padding: 20px;
      border: 1px solid #0f0;
      background: rgba(0, 0, 0, 0.8);
      font-family: 'Lucida Console', 'Consolas', monospace;
      font-size: 12px;
      color: #0f0;
      overflow-y: auto;
      max-height: 80vh;
      box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
    }

    .st-code-line {
      margin: 3px 0;
      word-wrap: break-word;
    }

    .st-prompt {
      color: #0f0;
      font-weight: bold;
    }

    .st-command {
      color: #00ff00;
    }

    .st-output {
      color: #0f0;
      opacity: 0.8;
    }

    /* ========== PAGE BOOT SCREEN ========== */
    .st-boot-screen {
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 2000;
      align-items: center;
      justify-content: center;
      border: 2px solid #0f0;
    }

    .st-boot-screen.hidden {
      display: none;
    }

    .st-boot-content {
      width: 90%;
      max-width: 900px;
      padding: 20px;
      border: 1px solid #0f0;
      background: #000;
      font-family: 'Lucida Console', 'Consolas', monospace;
      font-size: 13px;
      color: #0f0;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 0 30px rgba(0, 255, 0, 0.5);
    }

    .st-boot-line {
      margin: 5px 0;
      min-height: 1.5em;
    }

    /* ========== RESPONSIVE ========== */
    @media (max-width: 768px) {
      .terminal {
        padding: 12px;
      }

      .profile-grid {
        grid-template-columns: 1fr;
        gap: 15px;
        align-items: center;
        justify-items: center;
      }

      .profile-pic {
        width: 120px;
        height: 120px;
        margin: 0;
      }

      .gallery-grid {
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
      }

      .info-line {
        flex-direction: row;
        gap: 15px;
      }
    }

    @media (max-width: 480px) {
      .terminal {
        padding: 10px;
        font-size: 12px;
      }

      .gallery-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
      }

      .section {
        padding-left: 15px;
      }
    }
</style>

<!-- PAGE BOOT SCREEN -->
<div class="st-boot-screen" id="bootScreen">
  <div class="st-boot-content" id="bootContent">
    <div class="st-boot-line">[SLIMETECH TERMINAL v3.0]</div>
    <div class="st-boot-line">[INITIALIZING SYSTEM...]</div>
    <div class="st-boot-line">&nbsp;</div>
    <div class="st-boot-line">[*] Loading kernel modules...</div>
    <div class="st-boot-line">[OK] Core initialization complete</div>
    <div class="st-boot-line">[*] Mounting bio-database partition...</div>
    <div class="st-boot-line">[OK] Bio-database mounted</div>
    <div class="st-boot-line">&nbsp;</div>
    <div class="st-boot-line">[*] Initializing paintingdemons network...</div>
    <div class="st-boot-line">[OK] Network initialized</div>
    <div class="st-boot-line">[*] Loading SlimeTech protocols...</div>
    <div class="st-boot-line">[OK] Protocols loaded</div>
    <div class="st-boot-line">&nbsp;</div>
    <div class="st-boot-line">[*] Engaging neon-green display...</div>
    <div class="st-boot-line">[OK] Display active</div>
    <div class="st-boot-line">[*] Rendering terminal interface...</div>
    <div class="st-boot-line">[OK] Interface ready</div>
    <div class="st-boot-line">&nbsp;</div>
    <div class="st-boot-line">[✓] SLIMETECH TERMINAL READY</div>
    <div class="st-boot-line">[✓] System fully operational</div>
    <div class="st-boot-line">&nbsp;</div>
    <div class="st-boot-line">Entering interface in <span id="countdown">3</span>...</div>
  </div>
</div>

<div class="terminal">
  <!-- HEADER -->
  <div class="terminal-header">
    <div class="header-line">
      <span class="prompt">$</span> <span class="command">slimetech --version</span>
    </div>
    <div class="header-line output">
      SlimeTech v3.0 | Paintingdemons Terminal Interface
    </div>
    <div class="header-line output">
      User: @paintingdemons | Status: ONLINE | Date: <span id="dateDisplay">Loading...</span> | Time: <span id="timeDisplay">Loading...</span> <span id="ampmDisplay">Loading...</span>
    </div>
  </div>

  <!-- ABOUT SECTION -->
  <div class="section">
    <div class="section-title">about slimetech</div>
    <div class="header-line">
      <span class="prompt">$</span> <span class="command">cat about.txt</span>
    </div>
    <div class="description-box">Welcome to SlimeTech v3.0, the cutting edge of slime technology brought to you by Paintingdemons.

Slimetech is a biotech-horror division within the PaintingDemons Corporation, specializing in advanced biological weaponry and experimental augmentation. The program originated from secretive experiments designed to merge organic tissue with reactive nanopolymers, producing hybrid soldiers with both human instincts and machine precision.

Purpose and Creation
Initially conceived to create the next evolution of warfare, Slimetech developed a sentient bio-substance — the Slimetech compound — capable of fusing with living hosts. When introduced into the bloodstream, it rewrites genetic code and forms living armor known as Slimetech plating, which pulses with neon-green bioluminescence and self-repairs in real time.

At its core, Slimetech represents the corruption of progress — the idea that technological perfection requires human sacrifice. It symbolizes humanity's obsession with control, immortality, and the fusion of biology and machinery. The result: living soldiers who blur the line between man, weapon, and experiment.</div>
  </div>

  <!-- MEDIA GALLERY SECTION -->
  <div class="section">
    <div class="section-title">media gallery</div>
    <div class="header-line">
      <span class="prompt">$</span> <span class="command">ls -la media/</span>
    </div>
    <div class="gallery-grid" id="initialGallery">
      <!-- Gallery items generated by JavaScript -->
    </div>
  </div>

  <!-- PRODUCTS SECTION -->
  <div class="section">
    <div class="section-title">available products</div>
    <div class="header-line">
      <span class="prompt">$</span> <span class="command">fetch slimetech_products.db</span>
    </div>
    <div class="products-grid" id="productsContainer">
      <!-- Products will be inserted here by JavaScript -->
    </div>
  </div>

  <!-- PROFILE SECTION -->
  <div class="section">
    <div class="section-title">user profile</div>
    <div class="header-line">
      <span class="prompt">$</span> <span class="command">cat profile.json</span>
    </div>
    <div class="profile-grid">
      <div class="profile-pic">
        <img src="https://paintingdemons.com/cdn/shop/t/55/assets/pfp.webp?v=76899133069369420551790206086" alt="Profile">
      </div>
      <div class="profile-info">
        <div class="info-line">
          <span class="info-label">Name:</span>
          <span class="info-value">paintingdemons</span>
        </div>
        <div class="info-line">
          <span class="info-label">Username:</span>
          <span class="info-value">@paintingdemons</span>
        </div>
        <div class="info-line">
          <span class="info-label">Status:</span>
          <span class="info-value">● Online</span>
        </div>
        <div class="info-line">
          <span class="info-label">Last Update:</span>
          <span class="info-value" id="lastUpdate">Loading...</span>
        </div>
        <div class="info-line">
          <span class="info-label">Timezone:</span>
          <span class="info-value" id="timezoneDisplay">Loading...</span>
        </div>
      </div>
    </div>
  </div>

  <!-- LOADING SCREEN -->
  <div class="st-loading-screen" id="loadingScreen">
    <div class="st-loading-content" id="loadingContent">
      <div class="st-code-line"><span class="st-prompt">$</span> <span class="st-command">slimetech --load-asset</span></div>
      <div class="st-code-line st-output">[INITIALIZING SLIMETECH MEDIA PROTOCOL v3.0]</div>
      <div class="st-code-line st-output">[CONNECTING TO BIO-DATABASE...]</div>
      <div class="st-code-line st-output">[AUTH: paintingdemons_clearance_level_9]</div>
      <div class="st-code-line st-output">[STATUS: VERIFIED]</div>
      <div class="st-code-line st-output">&nbsp;</div>
      <div class="st-code-line st-output">[RETRIEVING ASSET...]</div>
      <div class="st-code-line st-output" id="progressBar">[░░░░░░░░░░░░░░░░░░] 0%</div>
      <div class="st-code-line st-output">&nbsp;</div>
      <div class="st-code-line st-output">[DECODING BIOLUMINESCENT DATA...]</div>
      <div class="st-code-line st-output">[APPLYING NEON-GREEN FILTER...]</div>
      <div class="st-code-line st-output">[RENDERING ASSET...]</div>
      <div class="st-code-line st-output">&nbsp;</div>
      <div class="st-code-line st-output">[ASSET LOADED SUCCESSFULLY]</div>
      <div class="st-code-line st-output">[STATUS: READY FOR VIEWING]</div>
      <div class="st-code-line"><span class="st-prompt">$</span> <span class="st-cursor">█</span></div>
    </div>
  </div>

  <!-- LIGHTBOX -->
  <div class="st-lightbox" id="lightbox">
    <div class="st-lightbox-content">
      <img class="st-lightbox-image" id="lightboxImage" src="" alt="SlimeTech">
      <button class="st-lightbox-close" onclick="closeLightbox()">×</button>
    </div>
  </div>

  <!-- FOOTER -->
  <div class="terminal-footer">
    <div class="footer-line">
      <span class="prompt">$</span> <span class="command">© 2026 SlimeTech - Paintingdemons | All Rights Reserved<span class="cursor"></span></span>
    </div>
  </div>

</div>



  </div>

  <!-- FOOTER -->`,n=[`{

  // Update date and time based on visitor's timezone
  function updateDateTime() {
    const now = new Date();

    // Format date
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('dateDisplay').textContent = dateString;

    // Format time with 12-hour format
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    // Extract time and AM/PM
    const timeParts = timeString.split(' ');
    const time = timeParts[0];
    const ampm = timeParts[1];

    document.getElementById('timeDisplay').textContent = time;
    document.getElementById('ampmDisplay').textContent = ampm;

    // Get timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('timezoneDisplay').textContent = timezone;

    // Update last update time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('lastUpdate').textContent = \`\${hours}:\${minutes}:\${seconds}\`;
  }

  // Update on load and every second
  updateDateTime();
  setInterval(updateDateTime, 1000);

  // Storefront API Configuration
  const STOREFRONT_API = {
    store: 'qjjfqu-5p.myshopify.com',
    token: '05d0beea5eb382d56f68164cc5980e9c',
    endpoint: 'https://qjjfqu-5p.myshopify.com/api/2026-01/graphql.json'
  };

  // Fetch products from SlimeTech collection
  async function fetchSlimeTechProducts() {
    const query = \`
      query {
        collections(first: 1, query: "title:slimetech") {
          edges {
            node {
              products(first: 20) {
                edges {
                  node {
                    id
                    title
                    handle
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
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

      if (data.errors) {
        console.error('API Error:', data.errors);
        return [];
      }

      const collections = data.data?.collections?.edges || [];

      if (collections.length === 0) {
        return [];
      }

      const products = collections[0]?.node?.products?.edges || [];

      return products.map((edge) => {
        const product = edge.node;
        return {
          id: product.id,
          shopifyHandle: product.handle,
          name: product.title,
          price: parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2),
          image: product.featuredImage?.url || 'placeholder.webp'
        };
      });
    } catch (error) {
      console.error('Failed to fetch products:', error);
      return [];
    }
  }

  // Populate products grid
  async function loadSlimeTechProducts() {
    const container = document.getElementById('productsContainer');
    if (!container) return;

    const products = await fetchSlimeTechProducts();

    if (products.length === 0) {
      return;
    }

    container.innerHTML = products.map(product => \`
      <div class="product-item">
        <img src="\${product.image}" alt="\${product.name}" class="product-image">
        <a href="/products/\${product.shopifyHandle}" style="text-decoration: none;">
          <div class="product-title">\${product.name}</div>
        </a>
        <div class="product-price">$\${product.price}</div>
      </div>
    \`).join('');
  }

  // Gallery images (s010 and s011 don't exist)
  const GALLERY_IMAGES = ['s012', 's013', 's014', 's015', 's016', 's017', 's018', 's019', 's020', 's021', 's022', 's023', 's024'];

  // Generate gallery items dynamically
  function generateGallery() {
    const initialGallery = document.getElementById('initialGallery');
    const getAssetUrl = (name) => \`//paintingdemons.com/cdn/shop/t/55/assets/placeholder.webp?v=43187\`.replace('placeholder.webp', name + '.webp');

    initialGallery.innerHTML = GALLERY_IMAGES.map((name, i) => \`
        <div class="gallery-item">
          <img src="\${getAssetUrl(name)}" alt="SlimeTech Soldier \${i + 1}">
        </div>
      \`).join('');

    attachLightboxListeners();
  }

  // Attach lightbox click listeners
  function attachLightboxListeners() {
    document.querySelectorAll('.gallery-item img').forEach(img => {
      img.removeEventListener('click', openLightbox);
      img.addEventListener('click', openLightbox);
    });
  }

  function openLightbox() {
    const loadingScreen = document.getElementById('loadingScreen');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const progressBar = document.getElementById('progressBar');
    const loadingContent = document.getElementById('loadingContent');

    // Show loading screen
    loadingScreen.classList.add('active');

    // Auto-scroll loading content to bottom
    setTimeout(() => {
      if (loadingContent) {
        loadingContent.scrollTop = loadingContent.scrollHeight;
      }
    }, 100);

    // Animate progress bar from 0 to 100%
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress > 100) progress = 100;

      const filled = Math.floor(progress / 5);
      const empty = 20 - filled;
      const bar = '[' + '█'.repeat(filled) + '░'.repeat(empty) + '] ' + Math.floor(progress) + '%';
      if (progressBar) progressBar.textContent = bar;

      if (progress >= 100) {
        clearInterval(progressInterval);
      }
    }, 150);

    // Load the image and show lightbox after 1.4 seconds
    lightboxImage.src = this.src;
    setTimeout(() => {
      loadingScreen.classList.remove('active');
      lightbox.classList.add('active');
    }, 1400);
  }

  // Toggle more images
  function loadMoreImages() {
    const container = document.getElementById('moreImagesContainer');
    if (container.style.display === 'none') {
      container.style.display = 'block';
    }
  }

  function loadMoreImages2() {
    const container = document.getElementById('moreImagesContainer');
    container.style.display = 'none';
  }

  // Generate gallery and load products on page load
  generateGallery();
  loadSlimeTechProducts();

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
  }

  // Close lightbox when clicking outside the image
  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
      closeLightbox();
    }
  });

  // Close lightbox with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  // Page boot sequence
  window.pdOnReady( function() {
    const bootScreen = document.getElementById('bootScreen');
    const bootContent = document.getElementById('bootContent');
    const countdownElement = document.getElementById('countdown');

    // Auto-scroll to bottom
    setTimeout(() => {
      bootContent.scrollTop = bootContent.scrollHeight;
    }, 500);

    // Countdown from 3 to 1
    let count = 3;
    const countdownInterval = setInterval(() => {
      count--;
      if (countdownElement) {
        countdownElement.textContent = count;
      }
      if (count === 0) {
        clearInterval(countdownInterval);
        setTimeout(() => {
          bootScreen.classList.add('hidden');
        }, 300);
      }
    }, 1000);
  });

}`],r={title:e,html:t,scripts:n};export{r as default,t as html,n as scripts,e as title};