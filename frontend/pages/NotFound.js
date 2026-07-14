import { Layout, initLayout } from '../components/Layout.js';
import { PAGES } from '../utils/constants.js';

export function NotFound() {
  const content = `
      <section class="content-panel">
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <a href="${PAGES.HOME}" class="btn btn-accent mt-2" data-link>Back to Home</a>
      </section>
  `;
  return Layout({ content, mainClass: 'container' });
}

export function afterRender() {
  initLayout();
}
