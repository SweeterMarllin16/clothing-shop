import { STORE_INFO, PAGES } from '../utils/constants.js';

export function Navbar() {
  const link = (href, text) => `
    <a href="${href}" data-link>${text}</a>
  `;
  return `
    <nav class="navbar" id="navbar">
      <a href="${PAGES.HOME}" class="nav-logo" data-link>Élan</a>
      <ul class="nav-links">
        <li>${link(PAGES.HOME, 'Home')}</li>
        <li>${link(PAGES.ABOUT, 'About')}</li>
        <li>${link(PAGES.COLLECTIONS, 'Collections')}</li>
        <li>${link(PAGES.GALLERY, 'Gallery')}</li>
        <li>${link(PAGES.CONTACT, 'Contact')}</li>
      </ul>
      <div class="nav-actions">
        <a href="${PAGES.CONTACT}" class="btn btn-outline btn-sm" data-link>Get Directions</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="overlay" id="overlay"></div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="${PAGES.HOME}" data-link>Home</a>
      <a href="${PAGES.ABOUT}" data-link>About</a>
      <a href="${PAGES.COLLECTIONS}" data-link>Collections</a>
      <a href="${PAGES.GALLERY}" data-link>Gallery</a>
      <a href="${PAGES.CONTACT}" data-link>Contact</a>
      <a href="tel:${STORE_INFO.phone}" class="btn btn-primary mt-2" aria-label="Call us">Call Now</a>
    </div>
  `;
}

export function updateActiveLink() {
  const pathname = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a[data-link]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === pathname);
  });
}

let navbarScrollHandler = null;

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  if (!navbar || !hamburger || !mobileMenu || !overlay) return;

  updateActiveLink();

  if (navbarScrollHandler) {
    window.removeEventListener('scroll', navbarScrollHandler);
  }
  navbarScrollHandler = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', navbarScrollHandler);

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
  mobileMenu.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', close);
  });
}
