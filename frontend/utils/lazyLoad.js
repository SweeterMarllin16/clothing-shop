let imageObserver = null;

export function lazyLoadImages() {
  if (imageObserver) {
    imageObserver.disconnect();
  }

  imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const url = entry.target.getAttribute('data-image');
        if (url) {
          entry.target.style.setProperty('--media-image', `url('${url}')`);
        }
        imageObserver.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('[data-image]').forEach(el => imageObserver.observe(el));
}
