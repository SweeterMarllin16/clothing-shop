import { Layout, initLayout } from '../components/Layout.js';
import { SectionHeader } from '../components/SectionHeader.js';
import { ProductCard } from '../components/ProductCard.js';
import { STORE_INFO, PAGES } from '../utils/constants.js';
import { initContactForm } from '../utils/contactForm.js';

export function Home() {
  const content = `
      <!-- Hero -->
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="overline hero-kicker">Premium local boutique</p>
            <h1>Timeless Style,<br>Local Heart</h1>
            <p class="hero-lead">Discover handpicked collections at ${STORE_INFO.name}. Personal styling, ethical fashion, and a warm welcome await.</p>
            <div class="btn-group hero-actions">
              <a href="${PAGES.CONTACT}" class="btn btn-accent" data-link>Visit Us Today</a>
              <a href="${PAGES.COLLECTIONS}" class="btn btn-outline" data-link>Explore Collections</a>
            </div>
            <div class="hero-pills">
              <span>Women</span>
              <span>Men</span>
              <span>Kids</span>
              <span>Accessories</span>
            </div>
          </div>
          <aside class="hero-panel card">
            <p class="overline">This week</p>
            <h2>Fresh edits, styled with intention</h2>
            <ul class="hero-highlights">
              <li><strong>01</strong><span>New arrivals curated weekly</span></li>
              <li><strong>02</strong><span>Personal styling by appointment</span></li>
              <li><strong>03</strong><span>Tailored for everyday wear</span></li>
            </ul>
            <a href="${PAGES.GALLERY}" class="btn btn-outline btn-sm" data-link>See the store</a>
          </aside>
        </div>
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
      </section>

      <!-- Categories -->
      <section class="container">
        ${SectionHeader('Shop by Category')}
        <div class="grid-4">
          <a href="${PAGES.COLLECTIONS}?cat=women" class="category-card" data-link data-image="assets/images/women-category.jpg">
            <span class="card-overlay">Women</span>
          </a>
          <a href="${PAGES.COLLECTIONS}?cat=men" class="category-card" data-link data-image="assets/images/men-category.jpg">
            <span class="card-overlay">Men</span>
          </a>
          <a href="${PAGES.COLLECTIONS}?cat=kids" class="category-card" data-link data-image="assets/images/kids-category.jpg">
            <span class="card-overlay">Kids</span>
          </a>
          <a href="${PAGES.COLLECTIONS}?cat=accessories" class="category-card" data-link data-image="assets/images/accessories-category.jpg">
            <span class="card-overlay">Accessories</span>
          </a>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="container">
        ${SectionHeader('New Arrivals')}
        <div class="grid-3">
          ${ProductCard({ image: 'assets/images/product-linen-dress.jpg', title: 'Summer Linen Dress', description: 'View in Store' })}
          ${ProductCard({ image: 'assets/images/product-blazer.jpg', title: 'Structured Blazer', description: 'View in Store' })}
          ${ProductCard({ image: 'assets/images/product-shirt.jpg', title: 'Classic Cotton Shirt', description: 'View in Store' })}
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="container">
        ${SectionHeader('Why Shop With Us')}
        <div class="usps grid-3 text-center">
          <div class="usp-card"><span class="usp-index">01</span><h3>Ethically Sourced</h3><p>Fabrics and crafts from local artisans.</p></div>
          <div class="usp-card"><span class="usp-index">02</span><h3>Personal Styling</h3><p>One-on-one appointments.</p></div>
          <div class="usp-card"><span class="usp-index">03</span><h3>Local Love</h3><p>Supporting the community since 2012.</p></div>
        </div>
      </section>

      <!-- Reviews -->
      <section style="background: var(--color-bg-secondary);">
        <div class="container">
          ${SectionHeader('What Our Customers Say')}
          <div class="reviews-carousel">
            <div class="review-card"><div class="review-stars">★★★★★</div><p>“The personal styling session was incredible.”</p><strong>– Priya M.</strong></div>
            <div class="review-card"><div class="review-stars">★★★★★</div><p>“Great quality kids' clothes that last.”</p><strong>– Rahul S.</strong></div>
            <div class="review-card"><div class="review-stars">★★★★★</div><p>“Élan has the best accessories collection in town.”</p><strong>– Sneha K.</strong></div>
          </div>
        </div>
      </section>

      <!-- Gallery Preview -->
      <section class="container">
        ${SectionHeader('Inside Our Store')}
        <div class="gallery-grid">
          <div class="gallery-tile" data-image="assets/images/gallery-1.jpg"></div>
          <div class="gallery-tile" data-image="assets/images/gallery-2.jpg"></div>
          <div class="gallery-tile" data-image="assets/images/gallery-3.jpg"></div>
        </div>
        <div class="text-center mt-2">
          <a href="${PAGES.GALLERY}" class="btn btn-outline" data-link>View Full Gallery</a>
        </div>
      </section>

      <!-- Map & Contact Info -->
      <section class="container contact-split">
        <div class="map-card card">
          <p class="overline">Find Us</p>
          <h3>${STORE_INFO.name}</h3>
          <div class="map-preview">
            <span>Colaba, Mumbai</span>
            <strong>123 Fashion Street</strong>
            <p>${STORE_INFO.hours}</p>
          </div>
          <div class="map-meta">
            <p>${STORE_INFO.address}</p>
            <p>${STORE_INFO.phone}</p>
          </div>
          <a href="https://maps.google.com/?q=${encodeURIComponent(STORE_INFO.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-2">Get Directions</a>
        </div>
        <div class="contact-card card">
          <p class="overline">Visit Us</p>
          <h3>${STORE_INFO.name}</h3>
          <p>${STORE_INFO.address}</p>
          <p>${STORE_INFO.hours}</p>
          <p>${STORE_INFO.phone}</p>
          <a href="https://maps.google.com/?q=${encodeURIComponent(STORE_INFO.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-2">Get Directions</a>
        </div>
      </section>

      <!-- Quick Contact Form -->
      <section class="container" id="contact-form-section">
        ${SectionHeader('Send Us a Message')}
        <form id="homeContactForm" class="contact-form">
          <div class="form-group"><label for="name">Name</label><input type="text" id="name" name="name" required minlength="2"></div>
          <div class="form-group"><label for="email">Email</label><input type="email" id="email" name="email" required></div>
          <div class="form-group"><label for="message">Message</label><textarea id="message" name="message" rows="4" required minlength="5" maxlength="1000"></textarea></div>
          <button type="submit" class="btn btn-accent">Send Message</button>
          <p class="form-error" style="color:var(--color-error, #c0392b);display:none;"></p>
          <p class="form-success" style="color:var(--color-success);display:none;">Thank you! We'll get back to you soon.</p>
        </form>
      </section>
  `;

  return Layout({ content, floatingButtons: true });
}

export function afterRender() {
  initLayout({ floatingButtons: true });
  initContactForm('homeContactForm');
}
