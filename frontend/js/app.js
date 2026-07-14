import { initRouter } from './router.js';
import { initScrollReveal } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  initRouter(app);
  initScrollReveal();
  // Navbar scroll effect & mobile menu are handled inside Navbar component
});