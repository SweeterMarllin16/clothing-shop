import { Navbar, initNavbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';

export function NotFound() {
  return `
    ${Navbar()}
    <main class="container">
      <section class="content-panel">
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
      </section>
    </main>
    ${Footer()}
  `;
}

export function afterRender() {
  initNavbar();
}