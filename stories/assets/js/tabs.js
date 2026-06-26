/**
 * tabs.js library
 */
export function tabs() {
  const tabComponents = Array.from(
    document.querySelectorAll("[data-undpds-component]"),
  ).filter((element) => {
    const componentAttr = element.getAttribute("data-undpds-component") || "";
    return componentAttr
      .split(",")
      .map((value) => value.trim())
      .includes("tabs");
  });

  tabComponents.forEach((container, componentIndex) => {
    if (container.getAttribute("data-tabs-initialized") === "true") {
      return;
    }

    const tabList = container.querySelector('[role="tablist"], [data-tabs]');
    const panelContainer = container.querySelector(".tabs-content");

    if (!tabList || !panelContainer) {
      return;
    }



    let tabItems = Array.from(tabList.querySelectorAll('.tabs-title[role="tab"]'));
    let panels = Array.from(panelContainer.querySelectorAll('.tabs-panel'));
    let isOldMarkup = false;

    // Fallback for old markup: role="tab" on <a> or <button> inside .tabs-title
    if (!tabItems.length) {
      const triggers = Array.from(tabList.querySelectorAll('.tabs-title a[role="tab"], .tabs-title button[role="tab"]'));
      if (triggers.length) {
        isOldMarkup = true;
        tabItems = triggers;
      }
    }

    if (!tabItems.length || panels.length !== tabItems.length) {
      return;
    }

    const tabListId = tabList.id || `tablist-${componentIndex + 1}`;
    tabList.id = tabListId;

    let activeIndex = tabItems.findIndex((item) => item.classList.contains('is-active'));
    if (activeIndex < 0) {
      activeIndex = 0;
    }

    const deepLinkEnabled = tabList.getAttribute('data-deep-link') !== 'false';

    const getPanelForTab = (tab, index) => {
      if (isOldMarkup) {
        const href = tab.getAttribute('href') || '';
        if (href.startsWith('#')) {
          const panel = container.querySelector(href);
          if (panel) {
            return panel;
          }
        }
        return panels[index] || null;
      } else {
        const anchor = tab.querySelector('a, button');
        if (anchor) {
          const href = anchor.getAttribute('href') || '';
          if (href.startsWith('#')) {
            const panel = container.querySelector(href);
            if (panel) {
              return panel;
            }
          }
        }
        return panels[index] || null;
      }
    };

    const resolvedPanels = tabItems.map((tab, index) => getPanelForTab(tab, index));

    if (resolvedPanels.some((panel) => !panel)) {
      return;
    }

    const selectTab = (nextIndex, options = {}) => {
      const { focus = true, updateHash = deepLinkEnabled } = options;

      tabItems.forEach((tab, index) => {
        const isActive = index === nextIndex;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        tab.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      resolvedPanels.forEach((panel, index) => {
        const isActive = index === nextIndex;
        panel.classList.toggle('is-active', isActive);
        panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        panel.hidden = !isActive;
      });

      activeIndex = nextIndex;

      if (updateHash) {
        const panelId = resolvedPanels[nextIndex].id;
        if (panelId) {
          window.location.hash = panelId;
        }
      }

      if (focus) {
        tabItems[nextIndex].focus();
      }
    };

    tabItems.forEach((tab, index) => {
      const panel = resolvedPanels[index];
      tab.setAttribute('aria-controls', panel.id);
      tab.setAttribute('id', tab.id || `${tabListId}-tab-${index + 1}`);
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tab.id);

      tab.addEventListener('click', (event) => {
        event.preventDefault();
        selectTab(index, { focus: true });
      });

      tab.addEventListener('keydown', (event) => {
        let nextIndex = index;
        switch (event.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            nextIndex = (index + 1) % tabItems.length;
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            nextIndex = (index - 1 + tabItems.length) % tabItems.length;
            break;
          case 'Home':
            nextIndex = 0;
            break;
          case 'End':
            nextIndex = tabItems.length - 1;
            break;
          case 'Enter':
          case ' ':
            selectTab(index, { focus: true });
            event.preventDefault();
            return;
          default:
            return;
        }
        event.preventDefault();
        selectTab(nextIndex, { focus: true });
      });
    });

    if (deepLinkEnabled && window.location.hash) {
      const hashPanelId = window.location.hash.slice(1);
      const hashIndex = resolvedPanels.findIndex((panel) => panel.id === hashPanelId);
      if (hashIndex >= 0) {
        activeIndex = hashIndex;
      }
    }

    window.addEventListener("hashchange", () => {
      if (!deepLinkEnabled) {
        return;
      }

      const hashPanelId = window.location.hash.slice(1);
      const hashIndex = resolvedPanels.findIndex((panel) => panel.id === hashPanelId);

      if (hashIndex >= 0 && hashIndex !== activeIndex) {
        selectTab(hashIndex, { focus: false, updateHash: false });
      }
    });

    selectTab(activeIndex, { focus: false, updateHash: false });
    container.setAttribute("data-tabs-initialized", "true");
  });
}
