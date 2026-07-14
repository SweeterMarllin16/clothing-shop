import { Navbar, initNavbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { SectionHeader } from '../components/SectionHeader.js';

export function About() {
  return `
    ${Navbar()}
    <main class="container">
      ${SectionHeader('About Us')}
      <section class="content-panel">
        <p>Élan Boutique is a premium local clothing store focused on timeless style, thoughtful curation, and personal service.</p>
      </section>
    </main>
    ${Footer()}
  `;
}

export function afterRender() {
  initNavbar();
}