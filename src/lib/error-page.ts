export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Demonic Anomaly // 500 Error</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font-family: 'Courier New', Courier, monospace; background: #000; color: #fff; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; background-image: radial-gradient(circle at center, #250000 0%, #000 80%); }
      .card { max-width: 32rem; width: 100%; text-align: center; padding: 2.5rem; background: #0d0101; border: 2px solid #8b0000; box-shadow: 0 0 30px rgba(255, 0, 0, 0.4); border-radius: 4px; }
      h1 { font-size: 1.5rem; margin: 0 0 0.8rem; color: #ff2222; text-shadow: 0 0 10px rgba(255, 0, 0, 0.7); letter-spacing: 0.1em; }
      p { color: #aaa; margin: 0 0 1.5rem; font-size: 0.95rem; line-height: 1.5; }
      .actions { display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.6rem 1.2rem; font-family: inherit; font-size: 0.85rem; font-weight: bold; cursor: pointer; text-decoration: none; border: 1px solid transparent; letter-spacing: 0.05em; text-transform: uppercase; }
      .primary { background: #ff2222; color: #000; }
      .secondary { background: #1a0000; color: #ff6666; border-color: #8b0000; }
      .primary:hover { background: #fff; }
      .secondary:hover { background: #330000; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>[ ANOMALY DETECTED ]</h1>
      <p>The veil between realms destabilized. Don't Paint Demons, Kids! Return to the sanctuary or try summoning the page again.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Summon Again</button>
        <a class="secondary" href="/">Escape Home</a>
        <a class="secondary" href="https://discord.gg/XQFhMYMH9" target="_blank" rel="noopener">Join Discord</a>
      </div>
    </div>
  </body>
</html>`;
}
