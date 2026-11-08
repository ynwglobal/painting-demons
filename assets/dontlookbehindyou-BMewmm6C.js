var e=`&#8203;`,t=`<div class="veil-mark" id="veilMark" aria-label="" onclick="revealVeil()"></div>
  <div class="veil-message" id="veilMessage">CODEXHOLDER1 IS NOT THE ONE WRITING THESE ANYMORE.</div>`,n=[`{

    function revealVeil() {
      document.getElementById('veilMark').classList.add('spent');
      document.getElementById('veilMessage').classList.add('show');
    }
  
}`],r=`
    * { margin: 0; padding: 0; box-sizing: border-box; }

    html, body {
      width: 100%;
      height: 100%;
      background: #000;
      overflow: hidden;
      cursor: default;
    }

    body {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    /* the tiny triangle, nearly invisible against black, placed off-center */
    .veil-mark {
      position: absolute;
      top: 61%;
      left: 47%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 8px solid #0a0a0a;
      cursor: pointer;
      transition: border-bottom-color 3s ease;
      z-index: 5;
    }

    .veil-mark:hover {
      border-bottom-color: #1a0000;
    }

    /* revealed message */
    .veil-message {
      display: none;
      color: #8b0000;
      font-family: 'Courier New', Courier, monospace;
      font-size: clamp(14px, 3vw, 26px);
      letter-spacing: 2px;
      text-align: center;
      padding: 0 20px;
      text-shadow: 0 0 12px rgba(139, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 2.5s ease;
    }

    .veil-message.show {
      display: block;
      opacity: 1;
    }

    .veil-mark.spent {
      display: none;
    }
  `,i={title:e,html:t,scripts:n,css:r};export{r as css,i as default,t as html,n as scripts,e as title};