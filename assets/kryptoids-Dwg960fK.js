var e=`kryptoids - Paintingdemons`,t=`<!-- MAIN CONTENT -->
  <div class="pd-main">
    <style>
    /* ========== BANNER ========== */
    .pd-banner { width: 100%; overflow: hidden; border-bottom: 2px solid #1a0000; }
    .pd-banner img { width: 100%; height: auto; display: block; }

    /* ========== MAIN CONTENT AREA ========== */
    .pd-kryptoids-main {
      background-image: url('https://paintingdemons.com/cdn/shop/t/55/assets/kryptoidbg.webp?v=1883524132437630261790206086');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      min-height: 600px;
    }
    .pd-kryptoids-main.thread-open {
      background-image: url('https://paintingdemons.com/cdn/shop/t/55/assets/storyline.webp?v=146842221870653608181790206086');
      background-size: cover;
      background-attachment: fixed;
    }
    .pd-main-grid { display: grid; grid-template-columns: 1fr; gap: 0; max-width: 1440px; margin: 0 auto; min-height: 600px; }

    /* ================================================================
       CENTER COLUMN - KRYPTOIDS FORUM (early-2000s occult forum skin)
       ================================================================ */
    .pd-center { display: flex; justify-content: flex-start; align-items: flex-start; padding: 16px; overflow-y: auto; flex-direction: column; width: 100%; }

    .kry-forum {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      background: #0c0c0c url('https://paintingdemons.com/cdn/shop/t/55/assets/bgg.png?v=74313532609594089381790206086');
      background-blend-mode: overlay;
      border: 3px double #6b1010;
      box-shadow: 0 0 0 1px #1a0000, 0 0 24px rgba(139,0,0,0.35);
      font-family: 'Times New Roman', Times, serif;
      color: #c9c2b8;
    }

    /* ---- Marquee-style banner strip ---- */
    .kry-marquee-wrap {
      background: #1a0000;
      border-bottom: 2px solid #6b1010;
      overflow: hidden;
      white-space: nowrap;
      padding: 3px 0;
    }
    .kry-marquee {
      display: inline-block;
      padding-left: 100%;
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      color: #ff3b3b;
      letter-spacing: 1px;
      animation: kryMarquee 22s linear infinite;
    }
    @keyframes kryMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }

    /* ---- Site title banner ---- */
    .kry-titlebar {
      text-align: center;
      padding: 18px 12px 14px;
      background: radial-gradient(ellipse at center, #1a0505 0%, #000 80%);
      border-bottom: 3px double #6b1010;
    }
    .kry-titlebar h1 {
      font-size: 30px;
      letter-spacing: 3px;
      color: #e8dfd2;
      text-shadow: 0 0 10px #8b0000, 0 0 2px #000, 2px 2px 0 #3a0000;
      font-weight: bold;
    }
    .kry-titlebar .kry-subtitle {
      margin-top: 6px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      color: #a89890;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .kry-titlebar .kry-blink {
      color: #ffcc33;
      animation: kryBlink 1.1s steps(1) infinite;
    }
    @keyframes kryBlink { 50% { opacity: 0; } }

    /* ---- Stats / welcome strip (classic phpBB "who's online" bar) ---- */
    .kry-statsbar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 6px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 10px;
      color: #8a8078;
      background: #100404;
      border-bottom: 1px solid #3a0000;
      padding: 5px 10px;
    }
    .kry-statsbar span { white-space: nowrap; }
    .kry-statsbar strong { color: #c9c2b8; }

    /* ---- Veil connection counter ---- */
    .kry-veilbar {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      letter-spacing: 1px;
      color: #ff5a5a;
      background: #000;
      border-bottom: 2px double #6b1010;
      padding: 6px 10px;
      text-shadow: 0 0 6px rgba(255, 60, 60, 0.5);
    }
    .kry-veilbar #kryVeilCount { color: #33ff33; font-weight: bold; text-shadow: 0 0 6px rgba(51,255,51,0.6); }
    .kry-veil-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #33ff33;
      box-shadow: 0 0 6px #33ff33;
      animation: kryVeilPulse 1.6s ease-in-out infinite;
    }
    @keyframes kryVeilPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

    /* ---- Board table ---- */
    .kry-board { width: 100%; border-collapse: collapse; }
    .kry-board thead th {
      background: linear-gradient(180deg, #3a0a0a 0%, #1a0000 100%);
      color: #e8dfd2;
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 6px 10px;
      border: 1px solid #5a1010;
      text-align: left;
    }
    .kry-board thead th.kry-col-num { text-align: center; width: 60px; }

    .kry-cat-row td {
      background: linear-gradient(180deg, #2a0808 0%, #150202 100%);
      border: 1px solid #5a1010;
      padding: 7px 10px;
      font-weight: bold;
      color: #ffb3b3;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
    }

    .kry-thread-row td {
      border: 1px solid #3a1414;
      padding: 8px 10px;
      background: rgba(20, 8, 8, 0.55);
      font-size: 13px;
      vertical-align: top;
    }
    .kry-thread-row:hover td { background: rgba(90, 16, 16, 0.35); }
    .kry-thread-row:nth-child(even) td { background: rgba(10, 4, 4, 0.55); }
    .kry-thread-row:nth-child(even):hover td { background: rgba(90, 16, 16, 0.35); }

    .kry-thread-title a { color: #e0d0c0; font-weight: bold; }
    .kry-thread-title a:hover { color: #ff5a5a; text-decoration: underline; }
    .kry-thread-title .kry-new-tag {
      display: inline-block;
      margin-left: 6px;
      background: #ffcc33;
      color: #000;
      font-family: 'Courier New', Courier, monospace;
      font-size: 9px;
      font-weight: bold;
      padding: 1px 4px;
      vertical-align: middle;
      animation: kryBlink 1.1s steps(1) infinite;
    }
    .kry-thread-meta {
      font-family: 'Courier New', Courier, monospace;
      font-size: 10px;
      color: #8a8078;
      margin-top: 3px;
    }
    .kry-thread-num { text-align: center; font-family: 'Courier New', Courier, monospace; font-size: 12px; color: #a89890; }
    .kry-thread-last { font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #8a8078; white-space: nowrap; }
    .kry-thread-last strong { color: #c9a0a0; }

    /* ---- Thread detail view ---- */
    .kry-thread-view { display: none; }
    .kry-thread-view.open { display: block; }
    .kry-board-view.hidden { display: none; }

    .kry-thread-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(180deg, #3a0a0a 0%, #1a0000 100%);
      border: 1px solid #5a1010;
      padding: 8px 12px;
      font-family: 'Courier New', Courier, monospace;
    }
    .kry-back-btn {
      background: #1a0000;
      border: 1px outset #6b1010;
      color: #e8dfd2;
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      padding: 4px 10px;
      cursor: pointer;
      letter-spacing: 1px;
    }
    .kry-back-btn:hover { background: #3a0000; }
    .kry-thread-bar-title { font-size: 13px; color: #ffb3b3; letter-spacing: 1px; text-transform: uppercase; }

    .kry-post {
      display: grid;
      grid-template-columns: 150px 1fr;
      border: 1px solid #3a1414;
      border-top: none;
    }
    .kry-post-user {
      background: #100404;
      border-right: 1px solid #3a1414;
      padding: 12px 10px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      color: #a89890;
      text-align: center;
    }
    .kry-post-avatar {
      width: 64px;
      height: 64px;
      margin: 0 auto 8px;
      background: #1a0000;
      border: 2px solid #5a1010;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
    }
    .kry-post-username { color: #ff5a5a; font-weight: bold; margin-bottom: 4px; }
    .kry-post-rank { color: #ffcc33; font-size: 9px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
    .kry-post-stat { font-size: 9px; color: #6b6058; }

    .kry-post-body { padding: 12px 14px; font-size: 13px; line-height: 1.7; color: #c9c2b8; }
    .kry-post-timestamp {
      font-family: 'Courier New', Courier, monospace;
      font-size: 10px;
      color: #6b6058;
      border-bottom: 1px dashed #3a1414;
      padding-bottom: 6px;
      margin-bottom: 8px;
    }
    .kry-post-body p { margin-bottom: 10px; }
    .kry-post-sig {
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px dashed #3a1414;
      font-size: 10px;
      color: #6b6058;
      font-style: italic;
      font-family: 'Courier New', Courier, monospace;
    }

    /* ---- Recovered audio block ---- */
    .kry-audio-block {
      margin-top: 16px;
      padding: 12px 14px;
      background: #0a0202;
      border: 1px solid #5a1010;
      border-left: 3px solid #8b0000;
    }
    .kry-audio-heading {
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      letter-spacing: 2px;
      color: #ff5a5a;
      text-shadow: 0 0 6px rgba(255,60,60,0.4);
      margin-bottom: 10px;
    }
    .kry-audio-item { margin-bottom: 12px; }
    .kry-audio-item:last-child { margin-bottom: 0; }
    .kry-audio-label {
      font-family: 'Courier New', Courier, monospace;
      font-size: 10px;
      color: #a89890;
      letter-spacing: 1px;
      margin-bottom: 4px;
    }
    .kry-audio-tag {
      color: #ffcc33;
      font-size: 9px;
      border: 1px solid #6b5010;
      padding: 1px 4px;
      margin-left: 4px;
    }
    .kry-audio-item audio {
      width: 100%;
      max-width: 480px;
      display: block;
      filter: sepia(0.4) hue-rotate(300deg) saturate(2) brightness(0.9);
    }

    /* ---- Archive evidence gallery (images + descriptions) ---- */
    .kry-evidence-block {
      margin-top: 16px;
      padding: 12px 14px 4px;
      background: #0a0202;
      border: 1px solid #5a1010;
      border-left: 3px solid #8b0000;
    }
    .kry-evidence-heading {
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      letter-spacing: 2px;
      color: #ff5a5a;
      text-shadow: 0 0 6px rgba(255,60,60,0.4);
      margin-bottom: 10px;
    }
    .kry-evidence-item { margin-bottom: 20px; }
    .kry-evidence-item:last-child { margin-bottom: 8px; }
    .kry-evidence-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
      gap: 8px;
    }
    .kry-evidence-thumb {
      aspect-ratio: 1;
      border: 1px solid #5a1010;
      background: #150505;
      overflow: hidden;
      cursor: pointer;
      transition: border-color 0.2s, transform 0.2s;
    }
    .kry-evidence-thumb:hover { border-color: #8b0000; transform: scale(1.03); }
    .kry-evidence-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .kry-evidence-caption-title {
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #e0d0c0;
      margin-top: 10px;
      margin-bottom: 6px;
      text-transform: uppercase;
    }
    .kry-evidence-caption-text {
      font-size: 13px;
      line-height: 1.7;
      color: #c9c2b8;
    }

    /* ---- Shop the collection (wired for Shopify "kryptoids" collection) ---- */
    .kry-shop-block {
      margin-top: 16px;
      padding: 12px 14px;
      background: #0a0202;
      border: 1px solid #5a1010;
      border-left: 3px solid #8b0000;
    }
    .kry-shop-heading {
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      letter-spacing: 2px;
      color: #ff5a5a;
      text-shadow: 0 0 6px rgba(255,60,60,0.4);
      margin-bottom: 4px;
    }
    .kry-shop-subheading {
      font-family: 'Courier New', Courier, monospace;
      font-size: 10px;
      color: #6b6058;
      letter-spacing: 1px;
      margin-bottom: 12px;
    }
    .kry-shop-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: 12px;
    }
    .kry-shop-item {
      background: rgba(20, 8, 8, 0.55);
      border: 1px solid #3a1414;
      display: flex;
      flex-direction: column;
      transition: border-color 0.2s, transform 0.2s;
    }
    .kry-shop-item:hover { border-color: #8b0000; transform: scale(1.02); }
    .kry-shop-img {
      aspect-ratio: 1;
      background: repeating-linear-gradient(135deg, #150505, #150505 10px, #1a0808 10px, #1a0808 20px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #3a1414;
      overflow: hidden;
    }
    .kry-shop-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .kry-shop-img-icon { width: 26px; height: auto; opacity: 0.35; }
    .kry-shop-info { padding: 8px 10px 10px; font-family: 'Courier New', Courier, monospace; }
    .kry-shop-name { font-size: 11px; color: #e0d0c0; letter-spacing: 0.5px; margin-bottom: 4px; text-transform: uppercase; }
    .kry-shop-price { font-size: 11px; color: #ff5a5a; font-weight: bold; margin-bottom: 8px; }
    .kry-shop-btn {
      display: block;
      width: 100%;
      text-align: center;
      background: linear-gradient(180deg, #2a0a0a 0%, #0d0000 50%, #1a0505 100%);
      border: 1px solid #5a1010;
      color: #a89890;
      font-family: 'Courier New', Courier, monospace;
      font-size: 10px;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 6px;
      cursor: default;
    }
    .kry-shop-item.live .kry-shop-btn { cursor: pointer; color: #e8dfd2; }
    .kry-shop-item.live .kry-shop-btn:hover { border-color: #8b0000; color: #fff; }

    /* ---- Fake reply box ---- */
    .kry-reply-box {
      border: 1px solid #3a1414;
      border-top: none;
      background: #100404;
      padding: 12px;
      font-family: 'Courier New', Courier, monospace;
    }
    .kry-reply-box textarea {
      width: 100%;
      min-height: 70px;
      background: #000;
      border: 1px inset #5a1010;
      color: #c9c2b8;
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      padding: 8px;
      resize: vertical;
    }
    .kry-reply-btn {
      margin-top: 8px;
      background: linear-gradient(180deg, #3a0a0a 0%, #1a0000 100%);
      border: 1px outset #6b1010;
      color: #e8dfd2;
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      padding: 6px 16px;
      cursor: pointer;
      letter-spacing: 1px;
    }
    .kry-reply-btn:hover { background: #4a0f0f; }

    /* ---- Footer strip inside forum ---- */
    .kry-forum-footer {
      text-align: center;
      padding: 10px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 9px;
      color: #5a5048;
      letter-spacing: 1px;
      border-top: 1px solid #3a0000;
    }
    .kry-hidden-link {
      color: #0a0300;
      text-decoration: none;
      padding: 6px 10px;
      margin: -6px -10px;
      display: inline-block;
      transition: color 1.2s ease;
    }
    .kry-hidden-link:hover { color: #3a0000; }

    /* ========== LIGHTBOX ========== */
    .pd-lightbox { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 9999; justify-content: center; align-items: center; padding: 20px; }
    .pd-lightbox.open { display: flex; }
    .pd-lightbox-inner { display: flex; flex-direction: column; align-items: center; max-width: 700px; width: 100%; }
    .pd-lightbox-img { max-width: 100%; max-height: 60vh; object-fit: contain; display: block; border: 2px solid #8b0000; }
    .pd-lightbox-desc { width: 100%; padding: 16px 20px; background: rgba(0,0,0,0.85); border: 2px solid #3a0000; border-top: none; color: #ccc; font-family: 'Courier New', Courier, monospace; font-size: 13px; line-height: 1.7; }
    .pd-lightbox-close { position: fixed; top: 20px; right: 24px; background: none; border: none; color: #e0d8d0; font-size: 32px; cursor: pointer; line-height: 1; transition: color 0.2s; z-index: 10000; }
    .pd-lightbox-close:hover { color: #DC143C; }

    /* ========== RESPONSIVE ========== */
    @media (max-width: 1024px) {
      .kry-post { grid-template-columns: 110px 1fr; }
      .kry-post-avatar { width: 44px; height: 44px; font-size: 20px; }
    }

    @media (max-width: 768px) {
      .kry-titlebar h1 { font-size: 20px; letter-spacing: 1.5px; }
      .kry-board thead { display: none; }
      .kry-thread-row td { display: block; border: none; }
      .kry-thread-row { display: block; border: 1px solid #3a1414; margin-bottom: -1px; }
      .kry-thread-num { display: none; }
      .kry-thread-last { display: block; margin-top: 4px; }
      .kry-post { grid-template-columns: 1fr; }
      .kry-post-user { border-right: none; border-bottom: 1px solid #3a1414; display: flex; align-items: center; gap: 10px; text-align: left; padding: 8px 10px; }
      .kry-post-avatar { margin: 0; }
    }
</style>

<!-- SIGILS (2 hidden on this page) -->
<img src="https://paintingdemons.com/cdn/shop/t/55/assets/kryptoid-logo.png?v=100518093559378821921790206086" alt="" class="veil-sigil veil-sigil-subtle" data-sigil-id="3" style="bottom:16px; left:120px;" onclick="pdSigilFound(3)" aria-hidden="true">
<img src="https://paintingdemons.com/cdn/shop/t/55/assets/kryptoid-logo.png?v=100518093559378821921790206086" alt="" class="veil-sigil veil-sigil-obvious" data-sigil-id="4" style="top:130px; right:16px;" onclick="pdSigilFound(4)" aria-hidden="true">

<!-- LIGHTBOX -->
<div class="pd-lightbox" id="pdLightbox" onclick="closeLightboxOnBg(event)">
  <button type="button" class="pd-lightbox-close" onclick="closeLightbox()">&times;</button>
  <div class="pd-lightbox-inner">
    <img src="" alt="" class="pd-lightbox-img" id="lightboxImg">
    <div class="pd-lightbox-desc" id="lightboxDesc"></div>
  </div>
</div>

<!-- BANNER -->
<div class="pd-banner">
  <img src="https://paintingdemons.com/cdn/shop/t/55/assets/banner2.png?v=73753946034174658961790206086" alt="Paintingdemons banner">
</div>

<!-- MAIN CONTENT -->
<div class="pd-kryptoids-main">
  <div class="pd-main-grid">

    <!-- CENTER COLUMN - KRYPTOIDS FORUM -->
    <div class="pd-center">
      <div class="kry-forum">

        <!-- MARQUEE -->
        <div class="kry-marquee-wrap">
          <span class="kry-marquee">*** WELCOME TO KRYPTOIDS.NET *** PLEASE READ THE RULES BEFORE POSTING *** REPORT SIGHTINGS RESPONSIBLY *** THIS BOARD IS BEST VIEWED AT 800x600 *** DO NOT FEED THE MODERATORS ***</span>
        </div>

        <!-- TITLE -->
        <div class="kry-titlebar">
          <h1>KRYPTOIDS</h1>
          <div class="kry-subtitle">Uncovering The Supernaturals Of The World <span class="kry-blink">*</span> est. 2003</div>
        </div>

        <!-- STATS BAR -->
        <div class="kry-statsbar">
          <span>Welcome, <strong>Human</strong>. [ <a href="#" style="color:#ff5a5a;">Log In</a> | <a href="#" style="color:#ff5a5a;">Register</a> ]</span>
          <span>Humans Online: <strong>13</strong> &nbsp;|&nbsp; Total Threads: <strong>1</strong></span>
          <span>Last Sighting Logged: <strong>2 hrs ago</strong></span>
        </div>

        <!-- VEIL CONNECTION COUNTER -->
        <div class="kry-veilbar">
          <span class="kry-veil-dot"></span>
          PEOPLE CURRENTLY INSIDE THE VEIL &mdash; HUMANS CURRENTLY CONNECTED: <span id="kryVeilCount">37</span>
        </div>

        <!-- BOARD VIEW -->
        <div class="kry-board-view" id="kryBoardView">
          <table class="kry-board">
            <thead>
              <tr>
                <th>Thread / Topic</th>
                <th class="kry-col-num">Replies</th>
                <th>Last Post</th>
              </tr>
            </thead>
            <tbody>

              <tr class="kry-cat-row"><td colspan="3">📁 The Archives</td></tr>

              <tr class="kry-thread-row" onclick="openThread('archive1')">
                <td>
                  <div class="kry-thread-title"><a href="#" onclick="return false;">ARCHIVE I — THE DISCOVERY</a><span class="kry-new-tag">NEW</span></div>
                  <div class="kry-thread-meta">recorded by <strong>CODEXHOLDER1</strong> in The Archives</div>
                </td>
                <td class="kry-thread-num">0</td>
                <td class="kry-thread-last"><strong>CODEXHOLDER1</strong><br>Today, 12:03 AM</td>
              </tr>

            </tbody>
          </table>

          <div class="kry-forum-footer">
            KRYPTOIDS.NET &copy; 2003&ndash;2026 &mdash; All sightings reported at your own risk.
          </div>
        </div>

        <!-- THREAD VIEW (single template reused for all threads via JS) -->
        <div class="kry-thread-view" id="kryThreadView">
          <div class="kry-thread-bar">
            <button class="kry-back-btn" onclick="closeThread()">&laquo; BACK TO BOARD</button>
            <span class="kry-thread-bar-title" id="kryThreadTitle">Thread Title</span>
            <span></span>
          </div>

          <div id="kryThreadPosts">
            <!-- posts injected by JS -->
          </div>

          <div class="kry-reply-box">
            <div style="font-size:11px; color:#8a8078; margin-bottom:6px;">Post a Reply</div>
            <textarea placeholder="Type your reply here... (demo only, not connected)" disabled></textarea>
            <button class="kry-reply-btn" type="button" disabled>Submit Reply</button>
          </div>

          <div class="kry-forum-footer">
            KRYPTOIDS.NET &copy; 2003&ndash;2026 &mdash; All sightings reported at your own risk.<a href="/pages/dontlookbehindyou" class="kry-hidden-link" aria-hidden="true" tabindex="-1">&nbsp;.</a>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>



  </div>

  <!-- FOOTER -->`,n=[`{

  // ========== KRYPTOIDS FORUM THREAD DATA ==========
  const KRY_THREADS = {
    archive1: {
      title: 'ARCHIVE I — THE DISCOVERY',
      posts: [
        { user: 'CODEXHOLDER1', rank: 'Archivist', joined: 'Joined: 2003', postCount: '1 post', avatar: '👤', time: 'Recorded by CODEXHOLDER1',
          body: '<p>What is your deepest desire, what is it that you crave most in this world, what does your flesh want, and what is your soul begging to be released from? What do you actually want to gain from this life? Perhaps you want wealth far beyond anything you could spend in a lifetime, maybe you want absolute power, or maybe you simply want to be desired, to seek revenge, or to become someone entirely different from the person staring back at you in the mirror. Have you prayed for these things and received no answer, crying out to something above you and begging for a door to open, only to hear absolute silence in return? Because if so, I have experienced that exact same silence.</p>' +
            '<p>For years, I believed humanity had been asking the wrong questions entirely, so I began searching not for God, but for whatever existed long before our modern understanding of Him. I buried myself in translations of ancient religious texts, Mesopotamian tablets, forgotten manuscripts, occult diagrams, and fragmented accounts of civilizations that disappeared thousands of years before either of us existed. While most of it was exactly what scholars claimed it to be, consisting merely of prayer, myth, law, divination, and basic ritual, everything changed the moment I found the triangle.</p>' +
            '<p><strong>THE THREEFOLD SIGIL</strong><br>It was a painfully simple shape made of just three lines, yet the moment I saw it, I felt as though I had encountered it long before, not with my physical eyes, but somewhere much deeper within myself. The symbol appeared alongside a collection of fragmented instructions that I initially mistook for prayers, though they were actually practical rituals and transactional steps. While some of the surrounding material seemed to originate from traditions thousands of years old, the symbol itself appeared impossible to accurately date, showing up across different centuries, civilizations, and names, yet always retaining those exact same three lines. Beside it were constant references to beings that translators had historically interpreted as spirits, demons, gods, messengers, or monsters, even though they were none of those things, instead calling themselves Kryptoids.</p>' +
            '<p><strong>THE VEIL</strong><br>Humanity has spent thousands of years uselessly arguing about Heaven and Hell simply because we assumed there were only two potential destinations, completely missing the fact that another space exists pressed directly between our world and what we call Hell. The ancient texts called this place The Veil, and it is the space where the Kryptoids exist. They are not spirits in the traditional sense, but rather entities existing at a specific frequency that our physical bodies were never designed to perceive, meaning you have likely stood beside one, heard one, or dreamed about one without ever realizing it was actually there. The Threefold Sigil is not simply their symbol, but a physical doorway that, when properly invoked across its three points, establishes direct communication between the human world and The Veil. However, communication is only the beginning of the process, because the oldest rule I discovered was also the simplest: you must give in order to receive, meaning every single request is a binding exchange where every gift leaves a mark and every bargain is remembered.</p>' +
            '<p><strong>MAMMON</strong><br>There is a distinct hierarchy within The Veil, and at its absolute highest point sits an entity known as the King of The Veil, who is the Kryptoid of greed, money, lust, status, and power. Mammon does not actually create these human desires because he has no need to, given that we constantly create them for him through every person willing to betray a loved one for money, every individual desperate to be worshipped, every empire built on endless greed, and every life destroyed for a taste of control. Human desire serves as his personal altar, which is precisely why I no longer believe the symbols surrounding wealth and power throughout human history are meaningless accidents. Perhaps humanity has not been worshipping Mammon knowingly, but rather Mammon has simply been teaching humanity how to worship him without ever explicitly uttering his name.</p>' +
            '<p>There are certainly those among us who do know his name, including powerful political figures, performers, executives, and old-money families whose influence survives across generations. I began finding this triangular symbol everywhere, hidden away in photographs, carved discreetly into objects, embedded within private ceremonies, and appearing for mere seconds in video recordings before disappearing again. While I initially assumed these people were actively worshipping the Kryptoids, I eventually realized I was wrong, because they are actually using them to obtain wealth, influence, beauty, desire, protection, fame, and control. A human offers a sacrifice, a Kryptoid returns the favor, and the only remaining question is how much that human is truly willing to give up.</p>' +
            '<p><strong>CROWN OF THORNS</strong><br>Although Mammon wears a crown of thorns, it is not a crown representing worship, but rather a physical restraint that something, or someone, placed upon him to suppress a portion of his abilities and bind him to laws even I do not completely understand. Yet, even in his restrained state, Mammon possesses a unique ability unlike the other Kryptoids, known as Dominion, which allows him to bend lesser entities of The Veil entirely to his will. Two specific entities appear beside his name far more than any others.</p>' +
            '<p><strong>SOLOMON</strong><br>The first being Solomon, who serves as the Binder. The symbol associated with Solomon appears throughout my research in forms disturbingly similar to the seals humanity would later connect to ancient occult traditions, though I do not believe those traditions created the symbol, but rather remembered it poorly as fragments degraded into mythology, religion, and eventual occultism over the millennia. Within The Veil, Solomon serves Mammon as a direct instrument of command, meaning that where Mammon creates the bargain, Solomon enforces it, where something refuses submission, Solomon binds it, and where a doorway must remain open, Solomon guards it, causing even other Kryptoids to fear his mark.</p>' +
            '<p><strong>LILITH</strong><br>Then there is Lilith, known as The Temptress, whom humans have told stories about for thousands of years in the form of night spirits, seducers, and succubi that appear in dreams to feed upon human desire. It is entirely possible those stories were never separate myths at all, but rather varying descriptions of the exact same entity. Lilith does not hunt with physical claws, but instead hunts purely with want, appearing as whatever her victim believes they cannot resist, whether that takes the shape of beauty, sex, love, validation, or attention. She never forces men toward her, but instead cleverly manipulates them into believing that approaching her was their own idea from the very beginning. Because Mammon feeds directly upon desire, Lilith\\'s role is to manufacture more of it, and as that desire slowly turns into total obsession, the doorway to The Veil becomes exponentially easier to open.</p>' +
            '<p><strong>I OPENED IT.</strong><br>After spending months translating the complex instructions surrounding the Threefold Sigil to learn their patterns, language, and names, I eventually began hearing strange sounds that I do not believe human vocal cords are physically capable of producing. That was the exact moment when simply studying them stopped being enough for me, because I needed actual proof, so I followed the instructions, drew the triangle, and spoke directly into The Veil. For several tense minutes, nothing happened at all, but then something finally answered, not from across the room, beneath the floor, or above my head, but rather sounding as though it was speaking from directly behind reality itself.</p>' +
            '<p>That was the very first night I heard the Kryptoid language spoken aloud, and it was the night I finally understood why I had been relentlessly searching for these beings for all these years. Our prayers were never actually going unanswered, we were simply praying in the wrong direction all along. My name is CODEXHOLDER1, and having dedicated my entire life to documenting what truly exists beyond The Veil, what I have shown you today is only the bare beginning, because there are many more of them out there, and now that you know exactly where to look, you will undoubtedly begin seeing them too.</p>' +
            '<div class="kry-audio-block">' +
              '<div class="kry-audio-heading">RECOVERED AUDIO &mdash; FROM THE VEIL</div>' +
              '<div class="kry-audio-item">' +
                '<div class="kry-audio-label">recovered_audio_01.mp3 <span class="kry-audio-tag">UNVERIFIED</span></div>' +
                '<audio controls src="https://paintingdemons.com/cdn/shop/t/55/assets/veil-archived-audio-recording-1.mp3?v=47527547539957278601790206086"></audio>' +
              '</div>' +
              '<div class="kry-audio-item">' +
                '<div class="kry-audio-label">recovered_audio_02.mp3 <span class="kry-audio-tag">UNVERIFIED</span></div>' +
                '<audio controls src="https://paintingdemons.com/cdn/shop/t/55/assets/veil-archived-audio-recording-2.mp3?v=69253781076126303891790206086"></audio>' +
              '</div>' +
              '<div class="kry-audio-item">' +
                '<div class="kry-audio-label">recovered_audio_03.mp3 <span class="kry-audio-tag">UNVERIFIED</span></div>' +
                '<audio controls src="https://paintingdemons.com/cdn/shop/t/55/assets/veil-archived-audio-recording-3.mp3?v=168169517035047901111790206086"></audio>' +
              '</div>' +
              '<div class="kry-audio-item">' +
                '<div class="kry-audio-label">recovered_audio_04.mp3 <span class="kry-audio-tag">UNVERIFIED</span></div>' +
                '<audio controls src="https://paintingdemons.com/cdn/shop/t/55/assets/veil-archived-audio-recording-4.mp3?v=19895659924250839051790206086"></audio>' +
              '</div>' +
            '</div>' +
            '<div class="kry-evidence-block">' +
              '<div class="kry-evidence-heading">ARCHIVE EVIDENCE &mdash; VISUAL RECORDS</div>' +

              '<div class="kry-evidence-item">' +
                '<div class="kry-evidence-gallery">' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/lilith1.jpg?v=60150487943821108841790206086\\', \\'Successful Lilith Bonding\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/lilith1.jpg?v=60150487943821108841790206086" alt="Successful Lilith Bonding 1"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/lilith2.jpg?v=100110358002200757041790206086\\', \\'Successful Lilith Bonding\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/lilith2.jpg?v=100110358002200757041790206086" alt="Successful Lilith Bonding 2"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/lilith3.jpg?v=183744606660696996341790206086\\', \\'Successful Lilith Bonding\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/lilith3.jpg?v=183744606660696996341790206086" alt="Successful Lilith Bonding 3"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/lilith4.jpg?v=85246161815831147481790206086\\', \\'Successful Lilith Bonding\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/lilith4.jpg?v=85246161815831147481790206086" alt="Successful Lilith Bonding 4"></div>' +
                '</div>' +
                '<div class="kry-evidence-caption-title">ARCHIVE EVIDENCE &mdash; SUCCESSFUL LILITH BONDING</div>' +
                '<div class="kry-evidence-caption-text">The subject is believed to have successfully established a bond with Lilith through the Threefold Sigil. Following contact, the subject surrendered a portion of her own will, allowing Lilith to influence her actions in the human world. In exchange, Lilith promised greater power, influence, and protection for the institution under the subject\\'s control. The formation of the triangle with the hands signifies an active connection to The Veil, while the abnormal appearance of the eyes indicates that Lilith is present within the host. The subject is not fully possessed; she remains conscious and capable of acting independently, but must carry out Lilith\\'s will to maintain the agreement. Like every Kryptoid transaction, the bond follows one law: you must give in order to receive.</div>' +
              '</div>' +

              '<div class="kry-evidence-item">' +
                '<div class="kry-evidence-gallery">' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/mammon1.jpg?v=165840748159684347171790206086\\', \\'Poor Mammon\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/mammon1.jpg?v=165840748159684347171790206086" alt="Poor Mammon 1"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/mammon2.jpg?v=3260196362564544341790206086\\', \\'Poor Mammon\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/mammon2.jpg?v=3260196362564544341790206086" alt="Poor Mammon 2"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/mammon3.jpg?v=120671954901922601491790206086\\', \\'Poor Mammon\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/mammon3.jpg?v=120671954901922601491790206086" alt="Poor Mammon 3"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/mammon4.jpg?v=111008383856791424681790206086\\', \\'Poor Mammon\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/mammon4.jpg?v=111008383856791424681790206086" alt="Poor Mammon 4"></div>' +
                '</div>' +
                '<div class="kry-evidence-caption-title">ARCHIVE EVIDENCE &mdash; POOR MAMMON</div>' +
                '<div class="kry-evidence-caption-text">The image known as &ldquo;Poor Mammon&rdquo; was originally believed to be an ancient religious depiction of a mother presenting her newborn child. For centuries, its distorted figures were dismissed as deterioration, symbolism, or the work of an unknown religious sect. My research suggests otherwise.<br>It is a Kryptoid birth.<br>Kryptoid mothers rarely survive the birth of their offspring. The newborn emerges with an instinctive hunger and, shortly after birth, will often consume the mother that carried it. This is believed to be the newborn\\'s first exchange with The Veil&mdash;the life that created it becoming the first life given to sustain it.<br>The true identity of the figures depicted in Poor Mammon remains unknown. However, the image may be among the earliest surviving human records of the Kryptoid reproductive cycle.<br>Even their first moments of life obey the law:<br><strong>YOU MUST GIVE IN ORDER TO RECEIVE.</strong></div>' +
              '</div>' +

              '<div class="kry-evidence-item">' +
                '<div class="kry-evidence-gallery">' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/table1.jpg?v=138776401039736436961790206086\\', \\'Mammon\\\\\\'s Table\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/table1.jpg?v=138776401039736436961790206086" alt="Mammon\\'s Table 1"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/table2.jpg?v=145971230446527726261790206086\\', \\'Mammon\\\\\\'s Table\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/table2.jpg?v=145971230446527726261790206086" alt="Mammon\\'s Table 2"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/table3.jpg?v=58973670880381146651790206086\\', \\'Mammon\\\\\\'s Table\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/table3.jpg?v=58973670880381146651790206086" alt="Mammon\\'s Table 3"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/table4.jpg?v=169321337648072867151790206086\\', \\'Mammon\\\\\\'s Table\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/table4.jpg?v=169321337648072867151790206086" alt="Mammon\\'s Table 4"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/table5.jpg?v=55600985803908291201790206086\\', \\'Mammon\\\\\\'s Table\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/table5.jpg?v=55600985803908291201790206086" alt="Mammon\\'s Table 5"></div>' +
                  '<div class="kry-evidence-thumb" onclick="openLightbox(\\'https://paintingdemons.com/cdn/shop/t/55/assets/table6.jpg?v=43299392029820362511790206086\\', \\'Mammon\\\\\\'s Table\\')"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/table6.jpg?v=43299392029820362511790206086" alt="Mammon\\'s Table 6"></div>' +
                '</div>' +
                '<div class="kry-evidence-caption-title">ARCHIVE EVIDENCE &mdash; MAMMON\\'S TABLE</div>' +
                '<div class="kry-evidence-caption-text">Mammon\\'s Table is a rare gathering reserved for powerful human hosts who have formed advanced contracts with Kryptoids. Unlike the basic bonding rituals practiced by most followers, the rituals performed at Mammon\\'s Table are far more intense. Those invited have usually requested something greater&mdash;wealth, political influence, protection, fame, control, or positions of power that ordinary offerings cannot provide.<br>In return, these individuals are bound by special contracts with Mammon and the entities beneath him. Their status is not permanent. Each contract contains obligations that must continually be fulfilled, and failure to uphold the agreement can result in everything they were given being taken away. The greater the reward, the greater the demand.</div>' +
              '</div>' +

            '</div>' +
            '<div class="kry-shop-block" id="krySharedShopBlock" style="display: none;">' +
              '<div class="kry-shop-heading">SHOP THE ARCHIVE</div>' +
              '<div class="kry-shop-subheading">Items linked to this case file</div>' +
              '<div class="kry-shop-grid" id="kryShopGrid"></div>' +
            '</div>',
          sig: '' }
      ]
    }
  };

  // ========== VEIL CONNECTION COUNTER (cosmetic fluctuation, not real users) ==========
  (function() {
    const el = document.getElementById('kryVeilCount');
    if (!el) return;
    let count = 37;

    function tick() {
      const delta = Math.floor(Math.random() * 5) - 2; // -2..+2
      count = Math.max(3, Math.min(66, count + delta));
      el.textContent = count;
      setTimeout(tick, 2200 + Math.random() * 3000);
    }

    setTimeout(tick, 2200 + Math.random() * 3000);
  })();

  function openThread(id) {
    const thread = KRY_THREADS[id];
    if (!thread) return;

    document.getElementById('kryThreadTitle').textContent = thread.title;

    const postsHtml = thread.posts.map(function(p) {
      return '' +
        '<div class="kry-post">' +
          '<div class="kry-post-user">' +
            '<div class="kry-post-avatar">' + p.avatar + '</div>' +
            '<div class="kry-post-username">' + p.user + '</div>' +
            '<div class="kry-post-rank">' + p.rank + '</div>' +
            '<div class="kry-post-stat">' + p.joined + '</div>' +
            '<div class="kry-post-stat">' + p.postCount + '</div>' +
          '</div>' +
          '<div class="kry-post-body">' +
            '<div class="kry-post-timestamp">' + p.time + '</div>' +
            p.body +
            (p.sig ? '<div class="kry-post-sig">' + p.sig + '</div>' : '') +
          '</div>' +
        '</div>';
    }).join('');

    document.getElementById('kryThreadPosts').innerHTML = postsHtml;

    document.getElementById('kryBoardView').classList.add('hidden');
    document.getElementById('kryThreadView').classList.add('open');
    document.querySelector('.pd-kryptoids-main').classList.add('thread-open');

    if (id === 'archive1' && document.getElementById('kryShopGrid')) {
      loadKryptoidsShop();
    }
  }

  // ========== SHOP THE ARCHIVE (pulls from the "kryptoids" Shopify collection) ==========
  async function loadKryptoidsShop() {
    const grid = document.getElementById('kryShopGrid');
    const block = document.getElementById('krySharedShopBlock');
    if (!grid || grid.dataset.loaded === '1') return;

    try {
      const query = \`
        query {
          collections(first: 1, query: "title:kryptoids") {
            edges {
              node {
                products(first: 12, sortKey: CREATED, reverse: true) {
                  edges {
                    node {
                      title
                      handle
                      featuredImage { url altText }
                      priceRange { minVariantPrice { amount currencyCode } }
                    }
                  }
                }
              }
            }
          }
        }
      \`;

      const response = await fetch('https://qjjfqu-5p.myshopify.com/api/2026-01/graphql.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': '05d0beea5eb382d56f68164cc5980e9c'
        },
        body: JSON.stringify({ query })
      });

      const data = await response.json();
      const collections = data.data && data.data.collections && data.data.collections.edges;
      if (!collections || collections.length === 0) return; // no "kryptoids" collection yet — section stays hidden

      const products = collections[0].node.products.edges;
      if (!products || products.length === 0) return; // collection exists but has no products — section stays hidden

      grid.innerHTML = products.map(function (edge) {
        const p = edge.node;
        const price = p.priceRange && p.priceRange.minVariantPrice
          ? '$' + parseFloat(p.priceRange.minVariantPrice.amount).toFixed(2)
          : '$--.--';
        const img = p.featuredImage ? p.featuredImage.url : 'https://paintingdemons.com/cdn/shop/t/55/assets/kryptoid-logo.png?v=100518093559378821921790206086';
        return '' +
          '<a class="kry-shop-item live" href="/products/' + p.handle + '">' +
            '<div class="kry-shop-img"><img src="' + img + '" alt="' + p.title + '"></div>' +
            '<div class="kry-shop-info">' +
              '<div class="kry-shop-name">' + p.title + '</div>' +
              '<div class="kry-shop-price">' + price + '</div>' +
              '<div class="kry-shop-btn">View Item</div>' +
            '</div>' +
          '</a>';
      }).join('');

      grid.dataset.loaded = '1';
      if (block) block.style.display = 'block';
    } catch (e) {
      // Storefront fetch failed — section stays hidden, nothing shown.
      console.error('Kryptoids shop fetch failed:', e);
    }
  }

  function closeThread() {
    document.getElementById('kryBoardView').classList.remove('hidden');
    document.getElementById('kryThreadView').classList.remove('open');
    document.querySelector('.pd-kryptoids-main').classList.remove('thread-open');
  }

  // ========== LIGHTBOX (shared) ==========
  function openLightbox(src, desc) {
    document.getElementById('lightboxImg').src = src;
    const descEl = document.getElementById('lightboxDesc');
    descEl.textContent = desc || '';
    descEl.style.display = desc ? 'block' : 'none';
    document.getElementById('pdLightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    document.getElementById('pdLightbox').classList.remove('open');
    document.body.style.overflow = '';
  }

  function closeLightboxOnBg(e) {
    if (e.target === document.getElementById('pdLightbox')) closeLightbox();
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

}`],r={title:e,html:t,scripts:n};export{r as default,t as html,n as scripts,e as title};