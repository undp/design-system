window.addEventListener('load', () => {
  const progressBars = Array.from(document.querySelectorAll('.progress-container .progress-bar'));
  if (progressBars.length < 1) {
    return;
  }

  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const maxScrollable = document.documentElement.scrollHeight - windowHeight;
    const scrollPercent = maxScrollable > 0 ? (window.scrollY / maxScrollable) * 100 : 0;
    const roundScroll = Math.round(scrollPercent);

    progressBars.forEach((progressBarElement) => {
      progressBarElement.style.width = `${roundScroll}%`;
      progressBarElement.classList.toggle('progress-top', roundScroll > 1);
    });
  });
});