import { STORE_INFO } from '../utils/constants.js';

export function Navbar(activePage) {
  const link = (href, text) => `
    <a href="${href}" class="${window.location.pathname === href ? 'active' : ''}" data-link>${text}</a>
  `;
  return `
    <nav class="navbar" id="navbar">
      <a href="/" class="nav-logo" data-link>Élan</a>
      <ul class="nav-links">
        <li>${link('/', 'Home')}</li>
        <li>${link('/about', 'About')}</li>
        <li>${link('/collections', 'Collections')}</li>
        <li>${link('/gallery', 'Gallery')}</li>
        <li>${link('/contact', 'Contact')}</li>
      </ul>
      <div class="nav-actions">
        <a href="/contact" class="btn btn-outline btn-sm" data-link>Get Directions</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="overlay" id="overlay"></div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="/" data-link>Home</a>
      <a href="/about" data-link>About</a>
      <a href="/collections" data-link>Collections</a>
      <a href="/gallery" data-link>Gallery</a>
      <a href="/contact" data-link>Contact</a>
      <a href="tel:${STORE_INFO.phone}" class="btn btn-primary mt-2">Call Now</a>
    </div>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  function open() {
    mobileMenu.classList.add('open');
    overlay.classList.add('active');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  hamburger.addEventListener('click', () => mobileMenu.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
}