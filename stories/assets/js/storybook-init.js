// This script logic is identical to init.js, but it is used for Storybook.

export const initializeComponents = (Story, context) => {
  // Helper function to mark a component as initialized
  const markAsInitialized = (element, componentType) => {
    const initializedAttr = element.getAttribute("data-initialized") || "";
    const initializedComponents = initializedAttr
      ? initializedAttr
          .split(",")
          .map((c) => c.trim())
          .filter((c) => c)
      : [];

    if (!initializedComponents.includes(componentType)) {
      initializedComponents.push(componentType);
      element.setAttribute("data-initialized", initializedComponents.join(","));
    }
  };

  setTimeout(() => {
    const componentElements = document.querySelectorAll(
      "[data-undpds-component]",
    );

    componentElements.forEach((element) => {
      // Get comma-separated list of component types
      const componentTypesAttr = element.getAttribute("data-undpds-component");
      if (!componentTypesAttr) {
        return;
      }

      // Get already initialized components
      const initializedAttr = element.getAttribute("data-initialized") || "";
      const initializedComponents = initializedAttr
        ? initializedAttr.split(",").map((c) => c.trim())
        : [];

      // Parse component types (comma-separated)
      const componentTypes = componentTypesAttr.split(",").map((c) => c.trim());

      let options = {};
      if (element.hasAttribute("data-options")) {
        try {
          options = JSON.parse(element.getAttribute("data-options"));
        } catch (error) {
          console.warn(`Invalid options format for component:`, error);
        }
      }

      // Process each component type
      componentTypes.forEach((componentType) => {
        // Skip if this specific component is already initialized
        if (initializedComponents.includes(componentType)) {
          return;
        }

        // Initialize based on component type (alphabetical order)
        switch (componentType) {
          case "accordion":
            if (typeof accordion === "function") {
              accordion();
              markAsInitialized(element, componentType);
            } else {
              import("./accordion.js")
                .then((module) => {
                  if (module && typeof module.accordion === "function") {
                    module.accordion();
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing accordion:", err),
                );
            }
            break;
          case "change-background":
            // Check if the changeBackground function exists in the global scope
            if (typeof changeBackground === "function") {
              changeBackground(element);
              markAsInitialized(element, componentType);
            } else {
              import("./smooth-bg-change.js")
                .then((module) => {
                  if (module && typeof module.changeBackground === "function") {
                    module.changeBackground(element);
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing changeBackground:", err),
                );
            }
            break;

          case "custom-select":
            if (typeof select === "function") {
              select();
              markAsInitialized(element, componentType);
            } else {
              import("./select.js")
                .then((module) => {
                  if (module && typeof module.select === "function") {
                    module.select();
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing custom-select:", err),
                );
            }
            break;
          case "expand-search":
            if (typeof expandSearch === "function") {
              expandSearch(jQuery(element));
              markAsInitialized(element, componentType);
            } else {
              import("./expand-search.js")
                .then((module) => {
                  if (module && typeof module.expandSearch === "function") {
                    module.expandSearch(jQuery(element));
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing expand-search:", err),
                );
            }
            break;
          case "expandToSize":
            if (typeof expandToSize === "function") {
              expandToSize(element);
              markAsInitialized(element, componentType);
            } else {
              import("./animation.js")
                .then((module) => {
                  if (module && typeof module.default === "function") {
                    module.default(element);
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing expandToSize:", err),
                );
            }
            break;
          case "language-switcher":
            if (typeof langSwitch === "function") {
              langSwitch();
              markAsInitialized(element, componentType);
            } else {
              import("./lang-switcher.js")
                .then((module) => {
                  if (module && typeof module.langSwitch === "function") {
                    module.langSwitch();
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing language-switcher:", err),
                );
            }
            break;
          case "lightbox-gallery":
            if (typeof lightboxGallery === "function") {
              lightboxGallery();
              markAsInitialized(element, componentType);
            } else {
              import("./lightbox-gallery.js")
                .then((module) => {
                  if (module && typeof module.lightboxGallery === "function") {
                    module.lightboxGallery();
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing lightbox gallery :", err),
                );
            }
            break;
          case "modal":
            if (typeof modal === "function") {
              modal();
              markAsInitialized(element, componentType);
            } else {
              import("./modal.js")
                .then((module) => {
                  if (module && typeof module.modal === "function") {
                    module.modal();
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing modal:", err),
                );
            }
            break;
          case "multi-select":
            if (typeof multiSelect === "function") {
              const locale =
                options && options.locale ? options.locale : undefined;
              multiSelect(locale);
              markAsInitialized(element, componentType);
            } else {
              import("./multi-select.js")
                .then((module) => {
                  if (module && typeof module.multiSelect === "function") {
                    const locale =
                      options && options.locale ? options.locale : undefined;
                    module.multiSelect(locale);
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing multi-select:", err),
                );
            }
            break;
          case "parallax":
            if (typeof parallaxEffect === "function") {
              const options = element.getAttribute("data-options")
                ? JSON.parse(element.getAttribute("data-options"))
                : {};
              parallaxEffect(
                options.selector || ".parallax-card",
                options.elements || [
                  ".parallax-card__image",
                  ".parallax-card__content",
                ],
                options.trigger || "top center",
                options.endTrigger || "bottom+=85 center",
                options.direction || "vertical",
                options.breakpoint || "desktop",
                options.unit || "percent",
              );
              markAsInitialized(element, componentType);
            } else {
              import("./parallax.js")
                .then((module) => {
                  if (module && typeof module.parallaxEffect === "function") {
                    const options = element.getAttribute("data-options")
                      ? JSON.parse(element.getAttribute("data-options"))
                      : {};
                    module.parallaxEffect(
                      options.selector || ".parallax-card",
                      options.elements || [
                        ".parallax-card__image",
                        ".parallax-card__content",
                      ],
                      options.trigger || "top center",
                      options.endTrigger || "bottom+=85 center",
                      options.direction || "vertical",
                      options.breakpoint || "desktop",
                      options.unit || "percent",
                    );
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing parallax:", err),
                );
            }
            break;
          case "sidebar":
            if (
              typeof sidebarNav === "function" &&
              typeof sidebarMenu === "function"
            ) {
              sidebarNav();
              sidebarMenu();
              markAsInitialized(element, componentType);
            } else {
              import("./sidebar.js")
                .then((module) => {
                  if (
                    module &&
                    typeof module.sidebarNav === "function" &&
                    typeof module.sidebarMenu === "function"
                  ) {
                    module.sidebarNav();
                    module.sidebarMenu();
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing sidebar:", err),
                );
            }
            break;
          case "stats-cards":
            if (typeof fitText === "function") {
              let fitTextSelector = ".stats-card h2";
              if (options && options.selector) {
                fitTextSelector = options.selector;
              }
              fitText(fitTextSelector);
              markAsInitialized(element, componentType);
            } else {
              import("./fitText.js")
                .then((module) => {
                  if (module && typeof module.fitText === "function") {
                    let fitTextSelector = ".stats-card h2";
                    if (options && options.selector) {
                      fitTextSelector = options.selector;
                    }
                    module.fitText(fitTextSelector);
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing stats-cards:", err),
                );
            }
            break;
          case "sticky":
            if (typeof sticky === "function") {
              const stickyMovingSide =
                element.getAttribute("data-sticky-movingside") ||
                ".generic-content";
              sticky(element, stickyMovingSide);
              markAsInitialized(element, componentType);
            } else {
              import("./sticky.js")
                .then((module) => {
                  if (module && typeof module.sticky === "function") {
                    const stickyMovingSide =
                      element.getAttribute("data-sticky-movingside") ||
                      ".generic-content";
                    module.sticky(element, stickyMovingSide);
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error(
                    "Error initializing sticky functionality:",
                    err,
                  ),
                );
            }
            break;
          case "swiper":
            if (typeof swiper === "function") {
              const targetSelector = element.getAttribute("data-selector");
              let arrowsSelector = element.getAttribute("data-arrows-selector");
              const optionsAttr = element.getAttribute("data-options");
              if (arrowsSelector === "false") {
                arrowsSelector = false;
              }
              let swiperOptions = {};
              if (optionsAttr) {
                try {
                  swiperOptions = JSON.parse(optionsAttr);
                } catch (error) {
                  console.warn("Invalid swiper options format:", error);
                }
              }
              swiper(targetSelector, arrowsSelector, swiperOptions);
              markAsInitialized(element, componentType);
            } else {
              import("./swiper.js")
                .then((module) => {
                  if (module && typeof module.swiper === "function") {
                    const targetSelector =
                      element.getAttribute("data-selector");
                    let arrowsSelector = element.getAttribute(
                      "data-arrows-selector",
                    );
                    const optionsAttr = element.getAttribute("data-options");
                    if (arrowsSelector === "false") {
                      arrowsSelector = false;
                    }
                    let swiperOptions = {};
                    if (optionsAttr) {
                      try {
                        swiperOptions = JSON.parse(optionsAttr);
                      } catch (error) {
                        console.warn("Invalid swiper options format:", error);
                      }
                    }
                    module.swiper(
                      targetSelector,
                      arrowsSelector,
                      swiperOptions,
                    );
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) =>
                  console.error("Error initializing swiper:", err),
                );
            }
            break;
          case "tabs":
            if (typeof tabs === "function") {
              tabs();
              markAsInitialized(element, componentType);
            } else {
              import("./tabs.js")
                .then((module) => {
                  if (module && typeof module.tabs === "function") {
                    module.tabs();
                  }
                  markAsInitialized(element, componentType);
                })
                .catch((err) => console.error("Error initializing tabs:", err));
            }
            break;
        }
      });
    });
  }, 100);

  return Story(Object.assign({}, context));
};
