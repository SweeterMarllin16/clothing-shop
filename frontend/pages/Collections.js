import { Navbar, initNavbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { SectionHeader } from '../components/SectionHeader.js';
import { ProductCard } from '../components/ProductCard.js';

export function Collections() {
  return `
    ${Navbar()}
    <main class="container">
      ${SectionHeader('Collections')}
      <div class="grid-3">
        ${ProductCard({ image: 'assets/images/product-linen-dress.jpg', title: 'Women', description: 'Elegant everyday pieces' })}
        ${ProductCard({ image: 'assets/images/product-blazer.jpg', title: 'Men', description: 'Modern tailoring' })}
        ${ProductCard({ image: 'assets/images/product-shirt.jpg', title: 'Kids', description: 'Comfort-first essentials' })}
      </div>
    </main>
    ${Footer()}
  `;
}

export function afterRender() {
  initNavbar();
}