import { Layout, initLayout } from '../components/Layout.js';
import { SectionHeader } from '../components/SectionHeader.js';

export function About() {
  const content = `
      ${SectionHeader('About Us')}
      <section class="content-panel">
        <p>Élan Boutique is a premium local clothing store focused on timeless style, thoughtful curation, and personal service.</p>
      </section>
  `;
  return Layout({ content, mainClass: 'container' });
}

export function afterRender() {
  initLayout();
}
