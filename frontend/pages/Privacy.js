import { Navbar, initNavbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { SectionHeader } from '../components/SectionHeader.js';

export function Privacy() {
  return `
    ${Navbar()}
    <main class="container">
      ${SectionHeader('Privacy Policy')}
      <section class="content-panel">
        <p>This is a placeholder privacy policy page so the SPA routes resolve correctly.</p>
      </section>
    </main>
    ${Footer()}
  `;
}

export function afterRender() {
  initNavbar();
}