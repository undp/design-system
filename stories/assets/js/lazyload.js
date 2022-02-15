document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.lazy');

  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        entry.target.classList.add('loaded')
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection);
  images.forEach(image => observer.observe(image));
});