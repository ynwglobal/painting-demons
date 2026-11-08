var e=`antagonist - Paintingdemons`,t=`<!-- MAIN CONTENT -->
  <div class="pd-main">
    <img src="https://paintingdemons.com/cdn/shop/t/55/assets/kryptoid-logo.png?v=100518093559378821921790206086" alt="" class="veil-sigil veil-sigil-subtle" data-sigil-id="2" style="bottom:70px; left:16px;" onclick="pdSigilFound(2)" aria-hidden="true">
<style>
    /* ========== BANNER ========== */
    .pd-banner { width: 100%; overflow: hidden; border-bottom: 2px solid #1a0000; }
    .pd-banner img { width: 100%; height: auto; display: block; }

    /* ========== MAIN CONTENT AREA ========== */
    .pd-antagonist-main {
      background-image: url('https://paintingdemons.com/cdn/shop/t/55/assets/blood.webp?v=39001067605903035731790206086') ;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 600px;
    }

    .pd-main-grid {
      display: grid;
      grid-template-columns: 0 1fr 0;
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

    /* CENTER COLUMN - ANTAGONIST AREA */
    .pd-center {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 16px;
      overflow-y: auto;
      flex-direction: column;
      width: 100%;
    }

    .antagonist-title {
      font-family: 'Sitka', 'Sitka Text', 'Georgia', 'Times New Roman', serif;
      font-size: 24px;
      font-weight: bold;
      color: #e0d8d0;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: center;
      margin-bottom: 20px;
      width: 100%;
      text-shadow: 0 0 10px rgba(139, 0, 0, 0.3);
      flex-shrink: 0;
    }

    .antagonist-container {
      width: 100%;
      max-width: 100%;
      height: auto;
    }

    .antagonist-bio-wrapper {
      width: 100%;
      margin-bottom: 20px;
    }

    .antagonist-bio {
      width: 100%;
      padding: 20px;
      background: rgba(0, 0, 0, 0.4);
      border: 2px solid #3a0000;
      border-radius: 3px;
      color: #ccc;
      font-size: 13px;
      line-height: 1.8;
      max-height: 200px;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .antagonist-bio.expanded {
      max-height: none;
      overflow: visible;
    }

    .antagonist-bio p {
      margin-bottom: 16px;
    }

    .antagonist-bio p:last-child {
      margin-bottom: 0;
    }

    .antagonist-bio strong {
      color: #e0d8d0;
      font-weight: bold;
    }

    .antagonist-bio-toggle {
      width: 100%;
      padding: 12px 20px;
      background: linear-gradient(180deg, #2a0a0a 0%, #0d0000 50%, #1a0505 100%);
      border: 1px solid #8b0000;
      border-top: none;
      color: #e0d8d0;
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: bold;
    }

    .antagonist-bio-toggle:hover {
      background: linear-gradient(180deg, #3a0a0a 0%, #1d0000 50%, #2a0505 100%);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5), 0 0 10px rgba(139, 0, 0, 0.5);
      border-color: #d32f2f;
    }

    .antagonist-gallery {
      width: 100%;
      margin-top: 30px;
    }

    .antagonist-section-title {
      font-family: 'Sitka', 'Sitka Text', 'Georgia', 'Times New Roman', serif;
      font-size: 18px;
      font-weight: bold;
      color: #e0d8d0;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 16px;
      margin-top: 20px;
      text-shadow: 0 0 10px rgba(139, 0, 0, 0.3);
      text-align: center;
    }

    .antagonist-gallery-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 20px;
    }

    .antagonist-hideout {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      border: 2px solid #3a0000;
      border-radius: 3px;
      overflow: hidden;
      background: #1a1a1a;
    }

    .antagonist-hideout img {
      width: 100%;
      height: auto;
      display: block;
    }

    .antagonist-image-box {
      display: flex;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.4);
      border: 2px solid #3a0000;
      border-radius: 3px;
      overflow: hidden;
    }

    .antagonist-image-container {
      width: 100%;
      aspect-ratio: 1;
      background: #1a1a1a;
      border-bottom: 2px solid #3a0000;
      overflow: hidden;
    }

    .antagonist-image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* ========== FEATURE GALLERY (6 images) ========== */
    .antagonist-feature-gallery {
      width: 100%;
      margin-bottom: 30px;
    }

    .antagonist-feature-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .antagonist-feature-box {
      cursor: pointer;
      overflow: hidden;
      border: 2px solid #3a0000;
      background: #1a1a1a;
      transition: border-color 0.2s, transform 0.2s;
    }

    .antagonist-feature-box:hover {
      border-color: #8b0000;
      transform: scale(1.02);
    }

    .antagonist-feature-box img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      display: block;
    }

    /* ========== LIGHTBOX ========== */
    .pd-lightbox {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.92);
      z-index: 9999;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .pd-lightbox.open { display: flex; }

    .pd-lightbox-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 700px;
      width: 100%;
      gap: 0;
    }

    .pd-lightbox-img {
      max-width: 100%;
      max-height: 60vh;
      object-fit: contain;
      display: block;
      border: 2px solid #8b0000;
    }

    .pd-lightbox-desc {
      width: 100%;
      padding: 16px 20px;
      background: rgba(0, 0, 0, 0.85);
      border: 2px solid #3a0000;
      border-top: none;
      color: #ccc;
      font-family: 'Courier New', Courier, monospace;
      font-size: 13px;
      line-height: 1.7;
      text-align: left;
    }

    .pd-lightbox-close {
      position: fixed;
      top: 20px;
      right: 24px;
      background: none;
      border: none;
      color: #e0d8d0;
      font-size: 32px;
      cursor: pointer;
      line-height: 1;
      transition: color 0.2s;
      z-index: 10000;
    }

    .pd-lightbox-close:hover { color: #DC143C; }

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
    }

    @media (max-width: 768px) {
      .pd-main-grid { grid-template-columns: 1fr; gap: 20px; }
      .pd-left { order: 2; flex-direction: row; flex-wrap: wrap; justify-content: center; padding: 16px; }
      .pd-center { order: 1; padding: 16px; }
      .pd-right { display: none !important; }
      .pd-loveslime { margin-top: 0; padding-bottom: 0; }
      .pd-newsletter-link { display: none !important; }
      .pd-newmasks-header { display: none !important; }
    }
</style>

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
<div class="pd-antagonist-main">
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

    <!-- CENTER COLUMN - ANTAGONIST -->
    <div class="pd-center">
      <div class="antagonist-title">THE ANTAGONIST BROTHERS</div>
      <div class="antagonist-container">
        <div class="antagonist-bio-wrapper">
          <div class="antagonist-bio" id="antagonistBio">
          <p>In the outskirts of Atlanta, Georgia, in an abandoned cathedral where the city fades into forgotten roads and empty woods, rumors began spreading about two figures who moved through the night like predators. No one knows where they came from. No one knows why they do what they do.<br>People only know them as the brothers.</p>

          <p><strong>The first brother is known as Pain.</strong><br>His skin is unnaturally pale, almost corpse-like against the darkness. On the right side of his forehead, the word "PAIN" and "555" is tattooed in bold lettering, into the left side of his forehead like a mark of a beast.<br>The lower half of his face appears grotesquely transformed into a monstrous jaw. Rows of long, jagged, monster-like teeth push outward from swollen, torn-looking gums. The teeth are uneven and oversized, layered in multiple rows like those of a predator. The flesh around the mouth looks stretched and raw, as if the jaw has been forced open far wider than a human face should allow. Piercings cut through the damaged skin of his face.</p>

          <p><strong>The second brother is known as Molly.</strong><br>Molly looks disturbingly alive, thick dreadlocks hang around his face. framing a smile that stretches far beyond what a human face should allow. His grin runs ear to ear, splitting his face into a permanent expression of manic amusement. Tattooed on his left cheek is the word "MOLLY." On his right cheek, just beneath his eye, sits the same tattoo his brother carries 555.</p>

          <p>Some believe the brothers are vampires, feeding on chaos. Others speculate they are demons wearing human skin. A few think they are simply men who have gone so far beyond sanity that they've become something else entirely.</p>

          <p>Over time, the public has pieced together fragments of information about the two brothers. Most of it comes from scattered sightings, crime scenes, and the rare accounts of people who claim to have encountered them.</p>

          <p>In his humanoid form, Pain appears controlled, quiet, and calculating. He moves slowly and deliberately, never rushing, never panicking. Those who have seen him say he behaves like a patient predator. He seems to understand that time is always on his side.<br>It is rumored that Pain is capable of shapeshifting, transforming from his humanoid appearance into something far more monstrous. At the height of his hunger, witnesses claim his body mutates into a grotesque mass of tendrils, bone, and shifting biomass, an otherworldly creature that no longer resembles an earthly being<br>Some reports describe him growing massive bat-like wings, with elongated clawed limbs and tendrils moving like living muscle. In this state he becomes a predatory organism, hunting and feeding before eventually returning to his humanoid form once the hunger has been satisfied.<br>People who have heard Pain speak say something equally disturbing.<br>He rarely says anything at all.<br>But when he does, witnesses claim he repeats the same word:<br><strong>"Homicide."</strong></p>

          <p>Where Pain is controlled, Molly is frantic. Where Pain waits, Molly acts immediately. Molly is reckless, unpredictable, and terrifyingly fast. Witness accounts describe him locking eyes with a victim, and within moments the victim is simply gone. Some say vaporized, while others claim the victims are torn apart so violently that almost nothing remains. Crime scenes connected to Molly often leave behind scattered clothing, scraps of fabric, and traces of DNA, but rarely anything recognizable as a body. Unlike Pain, Molly appears more human at first glance. Survivors and investigators say you can always tell when Molly has been somewhere. You see it. You smell it. The air itself feels wrong.</p>

          <p>Victims who managed to escape near death in their thought to be final moments reportedly described something even more disturbing. They beg and plead for mercy, but Molly only smiles. Witnesses say that before the end, he leans in close and quietly says one sentence: <strong>"Welcome to Molly's world."</strong></p>
          </div>
          <button class="antagonist-bio-toggle" id="antagonistToggle" onclick="toggleAntagonistBio()">Expand</button>
        </div>

        <!-- FEATURE GALLERY - 6 images with lightbox -->
        <div class="antagonist-feature-gallery">
          <div class="antagonist-section-title">GALLERY</div>
          <div class="antagonist-feature-grid">
            <div class="antagonist-feature-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/ant6.webp?v=45393896715808112451790206086', 'Something brought us all together, something we can\\'t explain. Nothing lasts forever so we unite as one until we are separated.')">
              <img src="https://paintingdemons.com/cdn/shop/t/55/assets/ant6.webp?v=45393896715808112451790206086" alt="Gallery image 6">
            </div>
            <div class="antagonist-feature-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/ant5.webp?v=158905971732859952711790206086', 'If someone could fulfill all of your desires and all of your materialistic needs, would you be willing to make a deal? How far would you go to obtain the things you\\'ve always wanted ?')">
              <img src="https://paintingdemons.com/cdn/shop/t/55/assets/ant5.webp?v=158905971732859952711790206086" alt="Gallery image 5">
            </div>
            <div class="antagonist-feature-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/ant4.webp?v=97894064265924462661790206086', 'Alone in the middle of a dark field . Hoping somebody finds me.')">
              <img src="https://paintingdemons.com/cdn/shop/t/55/assets/ant4.webp?v=97894064265924462661790206086" alt="Gallery image 4">
            </div>
            <div class="antagonist-feature-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/ant3.webp?v=12151299005184423761790206086', 'Soul eaters and their never ending hunger. The things we do out of deprivation cost us')">
              <img src="https://paintingdemons.com/cdn/shop/t/55/assets/ant3.webp?v=12151299005184423761790206086" alt="Gallery image 3">
            </div>
            <div class="antagonist-feature-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/ant2.webp?v=139699094383277786081790206086', 'Something stands over me as i close my eyes and ask for forgiveness. Something grips me with a force i cannot shake .')">
              <img src="https://paintingdemons.com/cdn/shop/t/55/assets/ant2.webp?v=139699094383277786081790206086" alt="Gallery image 2">
            </div>
            <div class="antagonist-feature-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/ant1.webp?v=97507941699157892681790206086', 'Abandoned building coated in stains of the righteous . Where do you go to hide from the world ? Are you scared of what\\'s outside? Is this a place we can do things we don\\'t want anybody to see ?')">
              <img src="https://paintingdemons.com/cdn/shop/t/55/assets/ant1.webp?v=97507941699157892681790206086" alt="Gallery image 1">
            </div>
          </div>
        </div>

        <!-- IMAGE GALLERY -->
        <div class="antagonist-gallery">
          <!-- PAIN SECTION -->
          <div class="antagonist-section-title">PAIN</div>
          <div class="antagonist-gallery-row">
            <div class="antagonist-image-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/pain1.webp?v=171270948156388631161790206086', '')" style="cursor:pointer;">
              <div class="antagonist-image-container">
                <img src="https://paintingdemons.com/cdn/shop/t/55/assets/pain1.webp?v=171270948156388631161790206086" alt="Pain image 1">
              </div>
            </div>

            <div class="antagonist-image-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/pain2.webp?v=47416658196167560761790206086', '')" style="cursor:pointer;">
              <div class="antagonist-image-container">
                <img src="https://paintingdemons.com/cdn/shop/t/55/assets/pain2.webp?v=47416658196167560761790206086" alt="Pain image 2">
              </div>
            </div>

            <div class="antagonist-image-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/pain3.webp?v=108670888035042516101790206086', '')" style="cursor:pointer;">
              <div class="antagonist-image-container">
                <img src="https://paintingdemons.com/cdn/shop/t/55/assets/pain3.webp?v=108670888035042516101790206086" alt="Pain image 3">
              </div>
            </div>

            <div class="antagonist-image-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/pain4.webp?v=140318746551525112591790206086', '')" style="cursor:pointer;">
              <div class="antagonist-image-container">
                <img src="https://paintingdemons.com/cdn/shop/t/55/assets/pain4.webp?v=140318746551525112591790206086" alt="Pain image 4">
              </div>
            </div>
          </div>

          <!-- MOLLY SECTION -->
          <div class="antagonist-section-title">MOLLY</div>
          <div class="antagonist-gallery-row">
            <div class="antagonist-image-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/molly1.webp?v=52321176215963148321790206086', '')" style="cursor:pointer;">
              <div class="antagonist-image-container">
                <img src="https://paintingdemons.com/cdn/shop/t/55/assets/molly1.webp?v=52321176215963148321790206086" alt="Molly image 1">
              </div>
            </div>

            <div class="antagonist-image-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/molly2.webp?v=117682361230588881061790206086', '')" style="cursor:pointer;">
              <div class="antagonist-image-container">
                <img src="https://paintingdemons.com/cdn/shop/t/55/assets/molly2.webp?v=117682361230588881061790206086" alt="Molly image 2">
              </div>
            </div>

            <div class="antagonist-image-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/molly3.webp?v=167440548951974321831790206086', '')" style="cursor:pointer;">
              <div class="antagonist-image-container">
                <img src="https://paintingdemons.com/cdn/shop/t/55/assets/molly3.webp?v=167440548951974321831790206086" alt="Molly image 3">
              </div>
            </div>

            <div class="antagonist-image-box" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/molly4.webp?v=50174873289533676011790206086', '')" style="cursor:pointer;">
              <div class="antagonist-image-container">
                <img src="https://paintingdemons.com/cdn/shop/t/55/assets/molly4.webp?v=50174873289533676011790206086" alt="Molly image 4">
              </div>
            </div>
          </div>

          <!-- HIDEOUT SECTION -->
          <div class="antagonist-section-title">HIDEOUT</div>
          <div class="antagonist-hideout" onclick="openLightbox('https://paintingdemons.com/cdn/shop/t/55/assets/hideout.webp?v=72639636909758713791790206086', '')" style="cursor:pointer;">
            <img src="https://paintingdemons.com/cdn/shop/t/55/assets/hideout.webp?v=72639636909758713791790206086" alt="The Antagonist Brothers Hideout">
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

  function toggleAntagonistBio() {
    const bioDom = document.getElementById('antagonistBio');
    const toggleBtn = document.getElementById('antagonistToggle');

    bioDom.classList.toggle('expanded');

    if (bioDom.classList.contains('expanded')) {
      toggleBtn.textContent = 'Collapse';
    } else {
      toggleBtn.textContent = 'Expand';
    }
  }

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