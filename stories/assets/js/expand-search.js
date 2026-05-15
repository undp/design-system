/*
* Expand search
*/
export const expandSearch = (containerRef) => {
  let container = null;

  if (containerRef instanceof Element) {
    container = containerRef;
  } else if (containerRef && containerRef[0] instanceof Element) {
    container = containerRef[0];
  }

  if (!container || container.dataset.expandSearchInited === 'true') {
    return;
  }

  const input = container.querySelector('input');
  const closeButtons = Array.from(container.querySelectorAll('.close-button'));

  if (!input) {
    return;
  }

  const setCloseButtonVisibility = () => {
    const shouldShow = input.value.length >= 1;
    closeButtons.forEach((button) => {
      button.classList.toggle('show', shouldShow);
    });
  };

  input.addEventListener('input', setCloseButtonVisibility);

  container.addEventListener('click', (event) => {
    const expandButton = event.target.closest('.expand-button');
    const closeButton = event.target.closest('.close-button');

    if (expandButton && container.contains(expandButton)) {
      setCloseButtonVisibility();

      const isOpen = container.classList.toggle('open');
      if (isOpen) {
        input.focus();
      } else {
        input.blur();
        closeButtons.forEach((button) => {
          button.classList.remove('show');
        });
      }

      return;
    }

    if (closeButton && container.contains(closeButton)) {
      input.value = '';
      closeButtons.forEach((button) => {
        button.classList.remove('show');
      });
    }
  });

  document.addEventListener('mouseup', (event) => {
    if (input.value.length < 1 && !container.contains(event.target)) {
      container.classList.remove('open');
    }
  });

  container.dataset.expandSearchInited = 'true';
};

