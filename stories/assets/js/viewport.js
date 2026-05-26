window.addEventListener('load', () => {
  const elements = document.querySelectorAll('[data-viewport=true]');

  if (!elements.length) {
    return;
  }

  const isElementInViewport = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inviewport');
          isElementInViewport.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
    },
  );

  elements.forEach((element) => {
    isElementInViewport.observe(element);
  });
});