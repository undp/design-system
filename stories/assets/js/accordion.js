/* accordion JS start custom */
export function accordion(
  accordionSelector,
  accordionSiblingSelector,
  accordionActiveSelector,
) {
  const accordionElement = accordionSelector || ".accordion";
  const accordionPanel = accordionSiblingSelector || ".accordion__panel";
  const accordionActiveElement = accordionActiveSelector || "accordion--active";
  const slideDuration = 250;
  const panelTimers = new WeakMap();

  const toBoolean = (value) => value === true || value === "true";

  const getPanelsForButton = (button, panelSelector) => {
    if (!button || !button.parentElement) {
      return [];
    }

    return Array.from(button.parentElement.querySelectorAll(`:scope > ${panelSelector}`));
  };

  const clearPanelAnimation = (panel) => {
    const timer = panelTimers.get(panel);
    if (timer) {
      clearTimeout(timer);
      panelTimers.delete(panel);
    }
  };

  const slidePanel = (panel, shouldOpen, animate = true) => {
    if (!panel) {
      return;
    }

    clearPanelAnimation(panel);

    if (!animate) {
      panel.style.removeProperty('transition');
      panel.style.removeProperty('overflow');
      panel.style.removeProperty('max-height');
      panel.style.display = shouldOpen ? 'block' : 'none';
      return;
    }

    panel.style.transition = `max-height ${slideDuration}ms ease`;
    panel.style.overflow = 'hidden';

    if (shouldOpen) {
      panel.style.display = 'block';
      panel.style.maxHeight = '0px';
      requestAnimationFrame(() => {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      });

      const openTimer = setTimeout(() => {
        panel.style.removeProperty('transition');
        panel.style.removeProperty('overflow');
        panel.style.removeProperty('max-height');
        panel.style.display = 'block';
        panelTimers.delete(panel);
      }, slideDuration);
      panelTimers.set(panel, openTimer);
      return;
    }

    panel.style.maxHeight = `${panel.scrollHeight}px`;
    requestAnimationFrame(() => {
      panel.style.maxHeight = '0px';
    });

    const closeTimer = setTimeout(() => {
      panel.style.removeProperty('transition');
      panel.style.removeProperty('overflow');
      panel.style.removeProperty('max-height');
      panel.style.display = 'none';
      panelTimers.delete(panel);
    }, slideDuration);
    panelTimers.set(panel, closeTimer);
  };

  const setButtonExpanded = (button, panelSelector, activeClass, shouldOpen, animate = true) => {
    if (!button) {
      return;
    }

    button.classList.toggle(activeClass, shouldOpen);
    button.setAttribute("aria-expanded", shouldOpen ? "true" : "false");

    getPanelsForButton(button, panelSelector).forEach((panel) => {
      panel.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
      slidePanel(panel, shouldOpen, animate);
    });
  };

  // Accordion Trigger Function as callback for Click and Keypress Events.
  const accordionTrigger = (
    currentElem,
    accordionListItem,
    accordinSiblingElement,
    accordionActiveElem,
    allowMultiExpand,
  ) => {
    // Check if 'accordion--active' class exists on current list item button.
    if (!currentElem.classList.contains(accordionActiveElem)) {
      // Add active class and show the accordion panel.
      setButtonExpanded(currentElem, accordinSiblingElement, accordionActiveElem, true);

      // Close all other list items and panels.
      if (!allowMultiExpand) {
        accordionListItem.forEach((button) => {
          if (button !== currentElem) {
            setButtonExpanded(button, accordinSiblingElement, accordionActiveElem, false);
          }
        });
      }
    } else {
      // Close active list item if open.
      setButtonExpanded(currentElem, accordinSiblingElement, accordionActiveElem, false);
    }
  };

  const accordionClick = (
    accordionSelectorValue,
    accordionSibling,
    accordionActiveClass,
  ) => {
    const accordions = document.querySelectorAll(accordionSelectorValue);

    accordions.forEach((element) => {
      const allowMultiExpand = toBoolean(element.dataset.multiExpand);
      const hasMobileAttr = element.getAttribute("data-accordion") === "mobile";
      const accordionListItems = Array.from(element.querySelectorAll("button"));
      const activeButtons = accordionListItems.filter((button) =>
        button.classList.contains("is-active"),
      );

      if (hasMobileAttr) {
        accordionListItems.forEach((button) => {
          button.classList.add("desktop-event-none");
          getPanelsForButton(button, accordionSibling).forEach((panel) => {
            panel.classList.add("desktop-visible");
          });
        });
      }

      // Keep only the first .is-active if multi-expand=false.
      if (!allowMultiExpand && activeButtons.length > 1) {
        activeButtons.forEach((button, index) => {
          if (index === 0) {
            setButtonExpanded(button, accordionSibling, accordionActiveClass, true, false);
          } else {
            button.classList.remove("is-active");
            setButtonExpanded(button, accordionSibling, accordionActiveClass, false, false);
          }
        });
      }

      // Init accordion behavior and make sure it is initialized only once.
      accordionListItems.forEach((button) => {
        if (button.dataset.inited === "true") {
          return;
        }

        const onTrigger = (event) => {
          const isEnterKey =
            event.type === "keypress" && (event.keyCode || event.which) === 13;

          if (event.type === "click" || isEnterKey) {
            accordionTrigger(
              event.currentTarget,
              accordionListItems,
              accordionSibling,
              accordionActiveClass,
              allowMultiExpand,
            );
          }
        };

        button.addEventListener("click", onTrigger);
        button.addEventListener("keypress", onTrigger);
        button.dataset.inited = "true";
      });

      element.querySelectorAll(".is-active button").forEach((button) => {
        accordionTrigger(
          button,
          accordionListItems,
          accordionPanel,
          accordionActiveElement,
          true,
        );
      });
    });
  };

  accordionClick(accordionElement, accordionPanel, accordionActiveElement);
}
