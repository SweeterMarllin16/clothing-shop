import { Navbar, initNavbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { SectionHeader } from '../components/SectionHeader.js';

export function Contact() {
  return `
    ${Navbar()}
    <main class="container">
      ${SectionHeader('Contact')}
      <form class="contact-form">
        <div class="form-group"><label>Name</label><input type="text" /></div>
        <div class="form-group"><label>Email</label><input type="email" /></div>
        <div class="form-group"><label>Message</label><textarea rows="4"></textarea></div>
        <button class="btn btn-accent" type="submit">Send</button>
      </form>
    </main>
    ${Footer()}
  `;
}

export function afterRender() {
  initNavbar();
}