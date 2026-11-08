var e=`Cyber Modeling - Paintingdemons`,t=`<!-- MAIN CONTENT -->
  <div class="pd-main">
    <img src="https://paintingdemons.com/cdn/shop/t/55/assets/kryptoid-logo.png?v=100518093559378821921790206086" alt="" class="veil-sigil veil-sigil-subtle" data-sigil-id="7" style="top:110px; left:50%;" onclick="pdSigilFound(7)" aria-hidden="true">
<style>
    .terminal {
      background: rgba(0, 0, 0, 0.8);
      border: 2px solid #0f0;
      border-radius: 4px;
      padding: 15px;
      max-width: 1400px;
      margin: 0 auto;
      box-shadow:
        0 0 30px rgba(0, 255, 0, 0.3),
        inset 0 0 20px rgba(0, 255, 0, 0.1);
      font-size: 13px;
      line-height: 1.5;
      color: #0f0;
      font-family: 'Lucida Console', 'Consolas', monospace;
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
      word-wrap: break-word;
      overflow-wrap: break-word;
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

    /* ========== RESPONSIVE ========== */
    @media (max-width: 768px) {
      .terminal {
        padding: 12px;
      }

      .terminal-header {
        padding-bottom: 8px;
        margin-bottom: 12px;
      }

      .header-line {
        font-size: 12px;
        margin-bottom: 4px;
      }

      .gallery-grid {
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
      }

      .section {
        padding-left: 15px;
      }
    }

    @media (max-width: 480px) {
      .terminal {
        padding: 10px;
        font-size: 11px;
      }

      .terminal-header {
        padding-bottom: 7px;
        margin-bottom: 10px;
      }

      .header-line {
        font-size: 11px;
        margin-bottom: 3px;
      }

      .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }

      #cmLightboxImg {
        max-width: 60vw !important;
      }
    }
</style>

<!-- LIGHTBOX -->
<div id="cmLightbox" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.95); z-index:9999; justify-content:center; align-items:center;">
  <button type="button" onclick="cmCloseLightbox()" style="position:fixed; top:20px; right:24px; background:none; border:none; color:#0f0; font-size:32px; cursor:pointer; line-height:1; text-shadow:0 0 10px rgba(0,255,0,0.7);">&times;</button>
  <button type="button" onclick="cmPrev()" id="cmPrevBtn" style="background:none; border:none; padding:0; cursor:pointer; flex-shrink:0; transition:filter 0.2s, transform 0.2s; margin-right:16px;">
    <svg viewBox="0 0 22 44" xmlns="http://www.w3.org/2000/svg" style="width:28px; height:56px; display:block;">
      <defs>
        <linearGradient id="cmGradL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#003300"/>
          <stop offset="50%" stop-color="#00ff00"/>
          <stop offset="100%" stop-color="#003300"/>
        </linearGradient>
      </defs>
      <polygon points="22,0 0,22 22,44" fill="url(#cmGradL)" stroke="#0f0" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
  </button>
  <img id="cmLightboxImg" src="" alt="" style="max-width:80vw; max-height:85vh; object-fit:contain; border:2px solid #0f0; box-shadow:0 0 30px rgba(0,255,0,0.4);">
  <button type="button" onclick="cmNext()" id="cmNextBtn" style="background:none; border:none; padding:0; cursor:pointer; flex-shrink:0; transition:filter 0.2s, transform 0.2s; margin-left:16px;">
    <svg viewBox="0 0 22 44" xmlns="http://www.w3.org/2000/svg" style="width:28px; height:56px; display:block;">
      <defs>
        <linearGradient id="cmGradR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#003300"/>
          <stop offset="50%" stop-color="#00ff00"/>
          <stop offset="100%" stop-color="#003300"/>
        </linearGradient>
      </defs>
      <polygon points="0,0 22,22 0,44" fill="url(#cmGradR)" stroke="#0f0" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
  </button>
</div>

<div class="terminal">

  <!-- ABOUT SECTION -->
  <div class="section">
    <div class="section-title">about cyber modeling</div>
    <div class="header-line">
      <span class="prompt">$</span> <span class="command">cat about.txt</span>
    </div>
    <div class="description-box">Cybermodeling is the evolution of fashion — a process that pushes the boundaries of identity, technology, and design. Before entering the cyber process, each participant is carefully analyzed by our data team to determine compatibility and potential for transformation.

Through this process, you are redefined — elevated from who you once were into something superior. Cybermodeling allows individuals from all walks of life to embrace their desire to be seen and to live within the art itself. Each garment becomes more than fabric; it bonds with you, merging body and design into a single, living creation.</div>
  </div>

  <!-- MEDIA GALLERY SECTION -->
  <div class="section">
    <div class="section-title">media gallery</div>
    <div class="header-line">
      <span class="prompt">$</span> <span class="command">ls -la media/</span>
    </div>
    <div class="gallery-grid">
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/001.webp?v=89561353025235446171790206086" alt="001"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/002.webp?v=73199001626341586801790206086" alt="002"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/003.webp?v=43712157602198675031790206086" alt="003"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/004.webp?v=71338933721987949051790206086" alt="004"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/005.webp?v=9724312980471153311790206086" alt="005"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/006.webp?v=12709929660932916311790206086" alt="006"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/007.webp?v=32498450417472476551790206086" alt="007"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/008.webp?v=128638634174664161441790206086" alt="008"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/009.webp?v=159742133434769178691790206086" alt="009"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/010.webp?v=55457151960360183831790206086" alt="010"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/011.webp?v=156305779146869703351790206086" alt="011"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/012.webp?v=102064101398037451281790206086" alt="012"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/013.webp?v=83891224476150623771790206086" alt="013"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/014.webp?v=174638691085460193131790206086" alt="014"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/015.webp?v=122432049973059707511790206086" alt="015"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/016.webp?v=159887517826468067571790206086" alt="016"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/017.webp?v=75552845280813159101790206086" alt="017"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/018.webp?v=163778285938206353021790206086" alt="018"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/019.webp?v=95411896064310870321790206086" alt="019"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/020.webp?v=139405417961298053671790206086" alt="020"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/021.webp?v=88670871800145307311790206086" alt="021"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/022.webp?v=90650278707904984581790206086" alt="022"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/023.webp?v=23814297266131528101790206086" alt="023"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/024.webp?v=147009207516094838861790206086" alt="024"></div>
      <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/025.webp?v=57090141485029966041790206086" alt="025"></div>
    </div>
    <div class="output">
      <span style="cursor: pointer;" onclick="loadMoreImages()">[+] 33 more files found</span>
    </div>
    <div id="moreImagesContainer" style="display: none;">
      <div class="gallery-grid">
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/026.webp?v=116752745368331850281790206086" alt="026"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/027.webp?v=53516621318445973531790206086" alt="027"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/028.webp?v=122676654167176956771790206086" alt="028"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/029.webp?v=141211965496676296301790206086" alt="029"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/030.webp?v=55576139518554033791790206086" alt="030"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/031.webp?v=161106419529196980741790206086" alt="031"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/032.webp?v=57388701306191504441790206086" alt="032"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/033.webp?v=4012972274544853681790206086" alt="033"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/034.webp?v=30912761613796152261790206086" alt="034"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/035.webp?v=49061564779916273351790206086" alt="035"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/036.webp?v=97067175457005712961790206086" alt="036"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/037.webp?v=153352813959034093671790206086" alt="037"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/038.webp?v=177490005767141767551790206086" alt="038"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/039.webp?v=68637268678803347091790206086" alt="039"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/040.webp?v=36036825170717911661790206086" alt="040"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/041.webp?v=171782838739253053931790206086" alt="041"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/042.webp?v=94413153294515376461790206086" alt="042"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/043.webp?v=36867974630317813741790206086" alt="043"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/044.webp?v=3471192356852753181790206086" alt="044"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/045.webp?v=134591518083076584921790206086" alt="045"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/046.webp?v=53996497314867017381790206086" alt="046"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/047.webp?v=41893961873160458011790206086" alt="047"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/048.webp?v=177938857595130649121790206086" alt="048"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/049.webp?v=6447475315334818921790206086" alt="049"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/050.webp?v=42382270142181378701790206086" alt="050"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/051.webp?v=95915398716247520291790206086" alt="051"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/052.webp?v=10435074409836328631790206086" alt="052"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/053.webp?v=132863939669662148231790206086" alt="053"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/054.webp?v=166425114965814022671790206086" alt="054"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/055.webp?v=182929422215094745381790206086" alt="055"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/056.webp?v=10386363490823927571790206086" alt="056"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/057.webp?v=142106950172620238091790206086" alt="057"></div>
        <div class="gallery-item"><img src="https://paintingdemons.com/cdn/shop/t/55/assets/058.webp?v=4306697197135453551790206086" alt="058"></div>
      </div>
      <div class="output">
        <span style="cursor: pointer;" onclick="loadMoreImages2()">[-] collapse files</span>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <div class="terminal-footer">
    <div class="footer-line">
      <span class="prompt">$</span> <span class="command">© 2026 Cyber Modeling - Paintingdemons | All Rights Reserved<span class="cursor"></span></span>
    </div>
  </div>

</div>



  </div>

  <!-- FOOTER -->`,n=[`{

function loadMoreImages() {
  document.getElementById('moreImagesContainer').style.display = 'block';
  cmBuildImageList();
}

function loadMoreImages2() {
  document.getElementById('moreImagesContainer').style.display = 'none';
  cmBuildImageList();
}

// ========== LIGHTBOX ==========
let cmImages = [];
let cmIndex = 0;

function cmBuildImageList() {
  cmImages = Array.from(document.querySelectorAll('.gallery-item img')).map(img => img.src);
}

function cmOpenLightbox(src) {
  cmBuildImageList();
  cmIndex = cmImages.indexOf(src);
  if (cmIndex === -1) cmIndex = 0;
  cmShow();
  const lb = document.getElementById('cmLightbox');
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cmShow() {
  document.getElementById('cmLightboxImg').src = cmImages[cmIndex];
  document.getElementById('cmPrevBtn').style.visibility = cmIndex === 0 ? 'hidden' : 'visible';
  document.getElementById('cmNextBtn').style.visibility = cmIndex === cmImages.length - 1 ? 'hidden' : 'visible';
}

function cmPrev() { if (cmIndex > 0) { cmIndex--; cmShow(); } }
function cmNext() { if (cmIndex < cmImages.length - 1) { cmIndex++; cmShow(); } }

function cmCloseLightbox() {
  document.getElementById('cmLightbox').style.display = 'none';
  document.body.style.overflow = '';
}

window.pdOnReady( function() {
  cmBuildImageList();

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() { cmOpenLightbox(this.src); });
  });

  document.getElementById('cmLightbox').addEventListener('click', function(e) {
    if (e.target === this) cmCloseLightbox();
  });
});

document.addEventListener('keydown', function(e) {
  const lb = document.getElementById('cmLightbox');
  if (lb.style.display !== 'flex') return;
  if (e.key === 'ArrowLeft') cmPrev();
  if (e.key === 'ArrowRight') cmNext();
  if (e.key === 'Escape') cmCloseLightbox();
});

}`],r={title:e,html:t,scripts:n};export{r as default,t as html,n as scripts,e as title};