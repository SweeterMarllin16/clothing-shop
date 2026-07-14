import { Navbar, initNavbar } from './Navbar.js';
import { Footer } from './Footer.js';
import { FloatingButtons, initFloatingButtons } from './FloatingButtons.js';

export function Layout({ content, mainClass = '', floatingButtons = false }) {
  return `
    ${Navbar()}
    <main class="${mainClass}">${content}</main>
    ${Footer()}
    ${floatingButtons ? FloatingButtons() : ''}
  `;
}

export function initLayout({ floatingButtons = false } = {}) {
  initNavbar();
  if (floatingButtons) initFloatingButtons();
}
