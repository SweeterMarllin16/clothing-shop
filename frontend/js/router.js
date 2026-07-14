import { PAGES } from '../utils/constants.js';
import * as Pages from '../pages/index.js';
import { updateActiveLink } from '../components/Navbar.js';
import { initScrollReveal } from './animations.js';
import { lazyLoadImages } from '../utils/lazyLoad.js';

const routes = [
  { path: PAGES.HOME, component: Pages.Home },
  { path: PAGES.ABOUT, component: Pages.About },
  { path: PAGES.COLLECTIONS, component: Pages.Collections },
  { path: PAGES.GALLERY, component: Pages.Gallery },
  { path: PAGES.CONTACT, component: Pages.Contact },
  { path: PAGES.PRIVACY, component: Pages.Privacy },
];

function getRouteFromPath(path) {
  const [pathname] = path.split('?');
  return routes.find(r => r.path === pathname);
}

function renderView(app, component) {
  const view = typeof component === 'function'
    ? component()
    : component.render();

  app.textContent = '';
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = view;
  app.appendChild(tempDiv);

  if (typeof component.afterRender === 'function') {
    component.afterRender();
  }

  updateActiveLink();
  lazyLoadImages();
  initScrollReveal();
}

export function initRouter(app) {
  function render() {
    const path = window.location.pathname + window.location.search;
    const route = getRouteFromPath(path);
    const component = route ? route.component : Pages.NotFound;
    renderView(app, component);
  }

  window.addEventListener('popstate', render);
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-link]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.history.pushState(null, '', href);
      render();
    }
  });
  render();
}
