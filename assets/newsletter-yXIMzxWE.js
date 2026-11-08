var e=`newsletter - Paintingdemons`,t=`<!-- MAIN CONTENT -->
  <div class="pd-main">
    <style>
    /* ========== NEWSLETTER SIGNUP FORM ========== */
    .newsletter-container {
      background: rgba(0, 0, 0, 0.7);
      border: 2px solid #8b0000;
      padding: 40px;
      border-radius: 4px;
      max-width: 500px;
      width: 100%;
      text-align: center;
    }

    .newsletter-title {
      font-family: 'Sitka', 'Sitka Text', 'Georgia', 'Times New Roman', serif;
      font-size: 24px;
      font-weight: bold;
      color: #e0d8d0;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 12px;
      text-shadow: 0 0 10px rgba(139, 0, 0, 0.3);
    }

    .newsletter-subtitle {
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      color: #ccc;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .newsletter-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .newsletter-input {
      background: #1a1a1a;
      border: 2px solid #8b0000;
      color: #fff;
      padding: 12px 16px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 13px;
      border-radius: 3px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .newsletter-input:focus {
      outline: none;
      border-color: #d32f2f;
      box-shadow: 0 0 12px rgba(139, 0, 0, 0.5);
    }

    .newsletter-input::placeholder {
      color: #666;
    }

    .newsletter-btn {
      background: linear-gradient(180deg, #1a0a0a 0%, #000000 50%, #0a0000 100%);
      border: 2px solid #8b0000;
      color: #e0d8d0;
      padding: 12px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.2s;
      border-radius: 3px;
    }

    .newsletter-btn:hover {
      background: linear-gradient(180deg, #2a0a0a 0%, #0d0000 50%, #1a0505 100%);
      box-shadow: 0 0 12px rgba(139, 0, 0, 0.6);
      border-color: #d32f2f;
      color: #fff;
    }

    .newsletter-back-btn {
      display: block;
      background: linear-gradient(180deg, #1a0a0a 0%, #000000 50%, #0a0000 100%);
      border: 2px solid #8b0000;
      color: #999;
      padding: 12px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.2s;
      border-radius: 3px;
      text-align: center;
      text-decoration: none;
      margin-top: 12px;
    }

    .newsletter-back-btn:hover {
      background: linear-gradient(180deg, #2a0a0a 0%, #0d0000 50%, #1a0505 100%);
      border-color: #d32f2f;
      color: #ccc;
    }

    .newsletter-message {
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      color: #999;
      margin-top: 12px;
      min-height: 14px;
    }
</style>

<div style="display: flex; align-items: center; justify-content: center; min-height: 600px; padding: 40px 20px;">
  <div>
    <div class="newsletter-container">
      <div class="newsletter-title">Get Email Updates</div>
      <div class="newsletter-subtitle">
        Subscribe to receive exclusive updates, new releases, and behind-the-scenes content from Paintingdemons.
      </div>
      <form class="newsletter-form" id="newsletterForm">
        <input
          type="email"
          class="newsletter-input"
          placeholder="Enter your email address"
          name="email"
          required
          aria-label="Email address"
        >
        <button type="submit" class="newsletter-btn">Subscribe</button>
        <div class="newsletter-message" id="newsletterMessage"></div>
      </form>
    </div>
    <a href="/" class="newsletter-back-btn">Go Back</a>
  </div>
</div>



  </div>

  <!-- FOOTER -->`,n=[`{

  // Newsletter form handler
  const form = document.getElementById('newsletterForm');
  const messageDiv = document.getElementById('newsletterMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = form.querySelector('input[name="email"]').value;

    // TODO: Replace this URL with your Shopify customer mailing list endpoint
    const shopifyEndpoint = '/api/customers/email-list';

    messageDiv.textContent = 'Subscribing...';
    messageDiv.style.color = '#999';

    // This will need to be connected to Shopify when the site goes live
    setTimeout(() => {
      messageDiv.textContent = 'Thank you for subscribing! Check your email for confirmation.';
      messageDiv.style.color = '#7fb069';
      form.querySelector('input[name="email"]').value = '';
    }, 800);
  });

}`],r={title:e,html:t,scripts:n};export{r as default,t as html,n as scripts,e as title};