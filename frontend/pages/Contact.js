import { Layout, initLayout } from '../components/Layout.js';
import { SectionHeader } from '../components/SectionHeader.js';
import { STORE_INFO } from '../utils/constants.js';
import { initContactForm } from '../utils/contactForm.js';

export function Contact() {
  const content = `
      ${SectionHeader('Contact')}
      <div class="contact-split mb-3">
        <div class="contact-card card">
          <p class="overline">Visit Us</p>
          <h3>${STORE_INFO.name}</h3>
          <p>${STORE_INFO.address}</p>
          <p>${STORE_INFO.hours}</p>
          <p><a href="tel:${STORE_INFO.phone}">${STORE_INFO.phone}</a></p>
        </div>
      </div>
      <form id="contactForm" class="contact-form">
        <div class="form-group"><label for="contact-name">Name</label><input type="text" id="contact-name" name="name" required minlength="2"></div>
        <div class="form-group"><label for="contact-email">Email</label><input type="email" id="contact-email" name="email" required></div>
        <div class="form-group"><label for="contact-message">Message</label><textarea id="contact-message" name="message" rows="4" required minlength="5" maxlength="1000"></textarea></div>
        <button type="submit" class="btn btn-accent">Send Message</button>
        <p class="form-error" style="color:var(--color-error, #c0392b);display:none;"></p>
        <p class="form-success" style="color:var(--color-success);display:none;">Thank you! We'll get back to you soon.</p>
      </form>
  `;
  return Layout({ content, mainClass: 'container' });
}

export function afterRender() {
  initLayout();
  initContactForm('contactForm');
}
