export function sidebarNav() {
  const accordionItems = Array.from(document.querySelectorAll('.sidebar-accordion li'));
  const accordionPanels = Array.from(document.querySelectorAll('.sidebar-accordion .accordion__panel'));

  const setPanelState = (panelElement, isOpen) => {
    if (!panelElement) {
      return;
    }

    panelElement.style.display = isOpen ? 'block' : 'none';
  };

  accordionItems.forEach((itemElement) => {
    const panelElement = itemElement.querySelector('.accordion__panel');
    if (!panelElement) {
      return;
    }

    if (itemElement.classList.contains('active')) {
      setPanelState(panelElement, true);
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
