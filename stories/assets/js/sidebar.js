export function sidebarNav() {
  const accordionItems = Array.from(document.querySelectorAll('.sidebar-accordion li'));
  const accordionPanels = Array.from(document.querySelectorAll('.sidebar-accordion .accordion__panel'));
  const slideDuration = 250;
  const panelTimers = new WeakMap();

  const clearPanelAnimation = (panelElement) => {
    const timer = panelTimers.get(panelElement);
    if (timer) {
      clearTimeout(timer);
      panelTimers.delete(panelElement);
    }
  };

  const slidePanel = (panelElement, isOpen, animate = true) => {
    if (!panelElement) {
      return;
    }

    clearPanelAnimation(panelElement);

    if (!animate) {
      panelElement.style.removeProperty('transition');
      panelElement.style.removeProperty('overflow');
      panelElement.style.removeProperty('max-height');
      panelElement.style.display = isOpen ? 'block' : 'none';
      return;
    }

    panelElement.style.transition = `max-height ${slideDuration}ms ease`;
    panelElement.style.overflow = 'hidden';

    if (isOpen) {
      panelElement.style.display = 'block';
      panelElement.style.maxHeight = '0px';
      requestAnimationFrame(() => {
        panelElement.style.maxHeight = `${panelElement.scrollHeight}px`;
      });

      const openTimer = setTimeout(() => {
        panelElement.style.removeProperty('transition');
        panelElement.style.removeProperty('overflow');
        panelElement.style.removeProperty('max-height');
        panelElement.style.display = 'block';
        panelTimers.delete(panelElement);
      }, slideDuration);
      panelTimers.set(panelElement, openTimer);
      return;
    }

    panelElement.style.maxHeight = `${panelElement.scrollHeight}px`;
    requestAnimationFrame(() => {
      panelElement.style.maxHeight = '0px';
    });

    const closeTimer = setTimeout(() => {
      panelElement.style.removeProperty('transition');
      panelElement.style.removeProperty('overflow');
      panelElement.style.removeProperty('max-height');
      panelElement.style.display = 'none';
      panelTimers.delete(panelElement);
    }, slideDuration);
    panelTimers.set(panelElement, closeTimer);
  };

  const setPanelState = (panelElement, isOpen, animate = true) => {
    if (!panelElement) {
      return;
    }

    slidePanel(panelElement, isOpen, animate);
  };

  accordionItems.forEach((itemElement) => {
    const panelElement = itemElement.querySelector('.accordion__panel');
    if (!panelElement) {
      return;
    }

    if (itemElement.classList.contains('active')) {
      setPanelState(panelElement, true, false);
    }

    const firstButton = itemElement.querySelector('button');
    if (!firstButton || firstButton.dataset.sidebarNavInited === 'true') {
      return;
    }

    const togglePanel = (event) => {
      event.preventDefault();
      event.stopPropagation();

      const activeItem = event.currentTarget.closest('li');
      const activePanel = activeItem?.querySelector('.accordion__panel');
      if (!activeItem || !activePanel) {
        return;
      }

      const isOpen = activeItem.classList.contains('active') && activePanel.style.display !== 'none';
      if (isOpen) {
        setPanelState(activePanel, false);
        activeItem.classList.remove('active');
        activeItem.removeAttribute('class');
      } else {
        accordionItems.forEach((accordionItemElement) => {
          accordionItemElement.classList.remove('active');
          accordionItemElement.removeAttribute('class');
        });
        accordionPanels.forEach((accordionPanelElement) => {
          setPanelState(accordionPanelElement, false);
        });
        setPanelState(activePanel, true);
        activeItem.classList.add('active');
      }
    };

    firstButton.addEventListener('click', togglePanel);
    firstButton.addEventListener('keypress', togglePanel);
    firstButton.dataset.sidebarNavInited = 'true';
  });
}

export function sidebarMenu() {
  const accordionWrappers = Array.from(document.querySelectorAll('.sidebar-accordion'));
  accordionWrappers.forEach((wrapperElement) => {
    const headingElement = wrapperElement.querySelector('h6');
    if (!headingElement || headingElement.dataset.sidebarMenuInited === 'true') {
      return;
    }

    headingElement.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      wrapperElement.classList.toggle('show-medium');
    });

    headingElement.dataset.sidebarMenuInited = 'true';
  });
}
