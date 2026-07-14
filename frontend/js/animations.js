let scrollObserver = null;

export function initScrollReveal() {
  if (scrollObserver) {
    scrollObserver.disconnect();
  }

  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('section, .card').forEach(el => {
    el.classList.add('fade-in');
    el.classList.remove('visible');
    scrollObserver.observe(el);
  });
}
