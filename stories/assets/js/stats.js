/* Stats JS start custom */
export function statsHover() {
  const statsPanels = Array.from(document.querySelectorAll('.stats-grid .stats-panel'));
  if (statsPanels.length > 0) {
    const winHeight = window.innerHeight - 378;
    const newWinHeight = window.innerHeight + 378;

    const updateStatsState = () => {
      const currentScrollTop = window.scrollY;

      statsPanels.forEach((panelElement) => {
        const panelTop = panelElement.getBoundingClientRect().top + currentScrollTop;
        const topSpace = (panelTop - currentScrollTop) * 3;

        if (topSpace > winHeight && (topSpace + panelElement.offsetHeight) < newWinHeight) {
          panelElement.classList.add('active');
        } else {
          panelElement.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', updateStatsState);
    updateStatsState();
  }
}
/* Stats JS end custom */
