import { PAGES } from '../utils/constants.js';
import * as Pages from '../pages/index.js';

const routes = [
  { path: PAGES.HOME, component: Pages.Home },
  { path: PAGES.ABOUT, component: Pages.About },
  { path: PAGES.COLLECTIONS, component: Pages.Collections },
  { path: PAGES.GALLERY, component: Pages.Gallery },
  { path: PAGES.CONTACT, component: Pages.Contact },
  { path: PAGES.PRIVACY, component: Pages.Privacy },
];

export function initRouter(app) {
  function render() {
    const path = window.location.pathname;
    const route = routes.find(r => r.path === path);
    const component = route ? route.component : Pages.NotFound;
    const view = typeof component === 'function'
      ? component()
      : component.render();
    app.innerHTML = view;
    if (typeof component.afterRender === 'function') {
      component.afterRender();
    }
  }

  window.addEventListener('popstate', render);
  document.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      window.history.pushState(null, '', href);
      render();
    }
  });
  render();
}