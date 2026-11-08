var e=`angels - Paintingdemons`,t=`<!-- MAIN CONTENT -->
  <div class="pd-main">
    <style>
  /* ========== BANNER ========== */
  .pd-banner { width: 100%; overflow: hidden; border-bottom: 2px solid #8ec5e0; }
  .pd-banner img { width: 100%; height: auto; display: block; }

  /* ========== MAIN CONTENT AREA ========== */
  .pd-angels-main {
    background: linear-gradient(135deg, #f0f4f8 0%, #e3eff8 100%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 600px;
  }

  .pd-main-grid {
    display: none;
    grid-template-columns: 1fr 2.5fr 1fr;
    gap: 0;
    max-width: 1440px;
    margin: 0 auto;
    min-height: 600px;
  }

  /* ========== COMING SOON OVERLAY ========== */
  .pd-coming-soon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 600px;
    gap: 30px;
    padding: 40px 20px;
    background: linear-gradient(135deg, #f0f4f8 0%, #e3eff8 100%);
  }

  .coming-soon-text {
    font-family: 'Sitka', 'Sitka Text', 'Georgia', 'Times New Roman', serif;
    font-size: 48px;
    font-weight: bold;
    color: #4a7fa8;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
  }

  .coming-soon-button-wrap {
    margin-top: -15px;
  }

  .coming-soon-btn {
    background: linear-gradient(180deg, #a8d0e8 0%, #7ab8d8 100%);
    border: 1px solid #6ba3d4;
    color: #fff;
    padding: 12px 30px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.2s;
    border-radius: 2px;
    font-weight: bold;
  }

  .coming-soon-btn:hover {
    background: linear-gradient(180deg, #8fc0e0 0%, #5fa8cc 100%);
    box-shadow: 0 0 12px rgba(106, 163, 212, 0.6);
    border-color: #4a8fb8;
    transform: scale(1.05);
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

  /* RIGHT COLUMN */
  .pd-right { display: flex; flex-direction: column; align-items: center; padding: 24px 16px; gap: 16px; }
  .pd-newmasks-header img { max-width: 330px; width: 100%; height: auto; display: block; }
  .pd-masks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .pd-masks-grid a { display: block; transition: transform 0.2s, filter 0.2s; }
  .pd-masks-grid a img { width: 100%; height: auto; display: block; }
  .pd-masks-grid a:hover { transform: scale(1.05); filter: brightness(1.2); }

  /* ========== RESPONSIVE ========== */
  @media (max-width: 1024px) {
    .pd-main-grid { grid-template-columns: 1fr 2fr 1fr; }
  }

  @media (max-width: 768px) {
    .coming-soon-text { font-size: 32px; }
    .pd-main-grid { grid-template-columns: 1fr; gap: 20px; }
    .pd-left { order: 2; flex-direction: row; flex-wrap: wrap; justify-content: center; padding: 16px; }
    .pd-right { display: none !important; }
    .pd-loveslime { margin-top: 0; padding-bottom: 0; }
    .pd-newsletter-link { display: none !important; }
    .pd-newmasks-header { display: none !important; }
  }

  @media (max-width: 480px) {
    .coming-soon-text { font-size: 24px; }
  }
</style>

<!-- COMING SOON SECTION -->
<div class="pd-angels-main">
  <div class="pd-coming-soon">
    <div class="coming-soon-text">Coming Soon</div>
    <div class="coming-soon-button-wrap">
      <button class="coming-soon-btn" onclick="window.location.href='/'">Back to Home</button>
    </div>
  </div>
</div>

  </div>

  <!-- FOOTER -->`,n=[],r={title:e,html:t,scripts:n};export{r as default,t as html,n as scripts,e as title};