import { Navbar, initNavbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { SectionHeader } from '../components/SectionHeader.js';

export function Gallery() {
  return `
    ${Navbar()}
    <main class="container">
      ${SectionHeader('Gallery')}
      <div class="gallery-grid gallery-grid-large">
        <div class="gallery-tile gallery-tile-large" style="--media-image: url('assets/images/gallery-1.jpg');"></div>
        <div class="gallery-tile gallery-tile-large" style="--media-image: url('assets/images/gallery-2.jpg');"></div>
        <div class="gallery-tile gallery-tile-large" style="--media-image: url('assets/images/gallery-3.jpg');"></div>
      </div>
    </main>
    ${Footer()}
  `;
}

export function afterRender() {
  initNavbar();
}