import { STORE_INFO } from '../utils/constants.js';

export function Footer() {
  return `
    <footer>
      <div class="container footer-grid">
        <div>
          <h3 style="font-family:var(--font-heading);">Élan</h3>
          <p style="opacity:0.8;">Premium clothing boutique in Mumbai. Style with heart.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="/" data-link>Home</a>
          <a href="/about" data-link>About</a>
          <a href="/collections" data-link>Collections</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p>${STORE_INFO.address}</p>
          <p>${STORE_INFO.phone}</p>
        </div>
        <div>
          <h4>Newsletter</h4>
          <div class="newsletter-form">
            <input type="email" placeholder="Your email" id="newsletterEmail">
            <button class="btn btn-accent btn-sm" id="newsletterSubscribe">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="text-center" style="padding-top:24px; opacity:0.6;">
        © ${new Date().getFullYear()} Élan Boutique. All rights reserved.
      </div>
    </footer>
  `;
}