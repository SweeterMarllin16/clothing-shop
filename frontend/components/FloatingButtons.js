import { STORE_INFO } from '../utils/constants.js';

export function FloatingButtons() {
  return `
    <a href="https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Élan!" target="_blank" class="whatsapp-float" aria-label="Chat on WhatsApp">
      <i class="ph ph-whatsapp-logo"></i>
    </a>
    <button class="back-to-top" id="backToTop" aria-label="Back to top">
      <i class="ph ph-arrow-up"></i>
    </button>
  `;
}

export function initFloatingButtons() {
  const backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backBtn.classList.toggle('visible', window.scrollY > 500);
  });
  backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}