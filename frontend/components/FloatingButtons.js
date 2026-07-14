import { STORE_INFO } from '../utils/constants.js';

export function FloatingButtons() {
  return `
    <a href="https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Élan!" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Chat with us on WhatsApp" title="Chat with us">
      <i class="ph ph-whatsapp-logo" aria-hidden="true"></i>
    </a>
    <a href="tel:${STORE_INFO.phone}" class="phone-float" aria-label="Call us" title="Call us">
      <i class="ph ph-phone" aria-hidden="true"></i>
    </a>
    <button type="button" class="back-to-top" id="backToTop" aria-label="Back to top" title="Back to top">
      <i class="ph ph-arrow-up" aria-hidden="true"></i>
    </button>
  `;
}

let backToTopScrollHandler = null;

export function initFloatingButtons() {
  const backBtn = document.getElementById('backToTop');
  if (!backBtn) return;

  if (backToTopScrollHandler) {
    window.removeEventListener('scroll', backToTopScrollHandler);
  }
  backToTopScrollHandler = () => {
    backBtn.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', backToTopScrollHandler);
  backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
