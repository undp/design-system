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

    const tabItems = Array.from(tabList.querySelectorAll(".tabs-title"));
    const tabTriggers = tabItems
      .map((item) => item.querySelector("a, button"))
      .filter(Boolean);
    const panels = Array.from(panelContainer.querySelectorAll(".tabs-panel"));

    if (!tabTriggers.length || panels.length !== tabTriggers.length) {
      return;
    }

    const tabListId = tabList.id || `tablist-${componentIndex + 1}`;
    tabList.id = tabListId;

    let activeIndex = tabItems.findIndex((item) => item.classList.contains("is-active"));
    if (activeIndex < 0) {
      activeIndex = 0;
    }

    const deepLinkEnabled = tabList.getAttribute("data-deep-link") !== "false";

    const getPanelForTrigger = (trigger, index) => {
      const href = trigger.getAttribute("href") || "";
      if (href.startsWith("#")) {
        const panel = container.querySelector(href);
        if (panel) {
          return panel;
        }
      }

      return panels[index] || null;
    };

    const resolvedPanels = tabTriggers.map((trigger, index) =>
      getPanelForTrigger(trigger, index),
    );

    if (resolvedPanels.some((panel) => !panel)) {
      return;
    }

    const selectTab = (nextIndex, options = {}) => {
      const { focus = true, updateHash = deepLinkEnabled } = options;

      tabItems.forEach((item, index) => {
        const trigger = tabTriggers[index];
        const isActive = index === nextIndex;

        item.classList.toggle("is-active", isActive);
        trigger.setAttribute("aria-selected", isActive ? "true" : "false");
        trigger.setAttribute("tabindex", isActive ? "0" : "-1");
      });

      resolvedPanels.forEach((panel, index) => {
        const isActive = index === nextIndex;

        panel.classList.toggle("is-active", isActive);
        panel.setAttribute("aria-hidden", isActive ? "false" : "true");
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
        tabTriggers[nextIndex].focus();
      }
    };

    tabTriggers.forEach((trigger, index) => {
      const panel = resolvedPanels[index];

      trigger.setAttribute("role", "tab");
      trigger.setAttribute("id", trigger.id || `${tabListId}-tab-${index + 1}`);
      trigger.setAttribute("aria-controls", panel.id);

      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", trigger.id);

      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        selectTab(index, { focus: true });
      });

      trigger.addEventListener("keydown", (event) => {
        let nextIndex = index;

        switch (event.key) {
          case "ArrowRight":
          case "ArrowDown":
            nextIndex = (index + 1) % tabTriggers.length;
            break;
          case "ArrowLeft":
          case "ArrowUp":
            nextIndex = (index - 1 + tabTriggers.length) % tabTriggers.length;
            break;
          case "Home":
            nextIndex = 0;
            break;
          case "End":
            nextIndex = tabTriggers.length - 1;
            break;
          case "Enter":
          case " ":
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
