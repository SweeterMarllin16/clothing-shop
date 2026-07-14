import { Layout, initLayout } from '../components/Layout.js';
import { SectionHeader } from '../components/SectionHeader.js';

export function Privacy() {
  const content = `
      ${SectionHeader('Privacy Policy')}
      <section class="content-panel">
        <p>This is a placeholder privacy policy page so the SPA routes resolve correctly.</p>
      </section>
  `;
  return Layout({ content, mainClass: 'container' });
}

export function afterRender() {
  initLayout();
}
