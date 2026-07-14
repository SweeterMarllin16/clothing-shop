export function ProductCard({ image, title, description }) {
  return `
    <article class="card product-card">
      <div class="product-card-media" style="--media-image: url('${image}')" aria-hidden="true"></div>
      <div class="card-body">
        <h3>${title}</h3>
        <p class="text-secondary">${description}</p>
      </div>
    </article>
  `;
}