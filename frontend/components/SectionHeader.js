export function SectionHeader(title, subtitle = '') {
  return `
    <div class="section-header">
      <h2>${title}</h2>
      <div class="gold-line"></div>
      ${subtitle ? `<p class="text-secondary">${subtitle}</p>` : ''}
    </div>
  `;
}