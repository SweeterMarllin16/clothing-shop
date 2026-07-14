import { submitContactForm } from './api.js';
import { validateContactForm } from './validation.js';

export function initContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const successEl = e.target.querySelector('.form-success');
    const errorEl = e.target.querySelector('.form-error');

    try {
      validateContactForm(data);
      await submitContactForm(data);
      if (successEl) successEl.style.display = 'block';
      if (errorEl) errorEl.style.display = 'none';
      e.target.reset();
    } catch (error) {
      const message = error.message || 'Failed to send. Please try again.';
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
      } else {
        alert(message);
      }
    }
  });
}
