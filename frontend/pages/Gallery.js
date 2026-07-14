import { Layout, initLayout } from '../components/Layout.js';
import { SectionHeader } from '../components/SectionHeader.js';

export function Gallery() {
  const content = `
      ${SectionHeader('Gallery')}
      <div class="gallery-grid gallery-grid-large">
        <div class="gallery-tile gallery-tile-large" data-image="assets/images/gallery-1.jpg"></div>
        <div class="gallery-tile gallery-tile-large" data-image="assets/images/gallery-2.jpg"></div>
        <div class="gallery-tile gallery-tile-large" data-image="assets/images/gallery-3.jpg"></div>
      </div>
  `;
  return Layout({ content, mainClass: 'container' });
}

export function afterRender() {
  initLayout();
}
