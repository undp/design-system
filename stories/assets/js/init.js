/**
 * UNDP Design System Component Initializer
 *
 * This file automatically initializes components based on
 * data-undpds-component attributes in the HTML.
 */

(function () {
  // Helper function to mark a component as initialized
  function markAsInitialized(element, componentType) {
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
  }

  // Initialize all components when DOM is ready
  function initializeComponents() {
    // Find all elements with data-undpds-component attribute
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

      // Process each component type
      componentTypes.forEach((componentType) => {
        // Skip if this specific component is already initialized
        if (initializedComponents.includes(componentType)) {
          return;
        }

        // Initialize based on component type
        switch (componentType) {
          case "accordion":
            // Check if the accordion function exists in the global scope
            if (typeof accordion === "function") {
              accordion();
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Accordion component requires accordion function. Make sure accordion.min.js is loaded.",
              );
            }
            break;
          case "author-filter":
            // Check if the accordion function exists in the global scope
            if (typeof authorFilter === "function") {
              authorFilter();
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Author Filter component requires authorFilter function. Make sure author-filter.min.js is loaded.",
              );
            }
            break;
          case "change-background":
            // Check if the changeBackground function exists in the global scope
            if (typeof changeBackground === "function") {
              changeBackground(element);
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Heading Big Block component requires changeBackground function. Make sure smooth-bg-change.min.js is loaded.",
              );
            }
            break;
          case "custom-select":
            if (typeof select === "function") {
              select();
              markAsInitialized(element, componentType);
            } else {
              console.warn("Custom Select component requires select function");
            }
            break;
          case "download-modal":
            if (
              typeof checkbox === "function" &&
              typeof selectFilter === "function" &&
              typeof modal === "function"
            ) {
              // Get selectors from data attributes or use defaults
              const checkboxSelector =
                element.getAttribute("data-checkbox-selector") ||
                ".form-check input";
              const buttonSelector =
                element.getAttribute("data-button-selector") ||
                ".download-footer .button-primary";

              // Initialize all required functions
              checkbox(checkboxSelector, buttonSelector);
              selectFilter();
              modal();

              markAsInitialized(element, componentType);
            } else {
              if (typeof checkbox !== "function") {
                console.warn(
                  "Download Modal component requires checkbox function. Make sure download-modal.min.js is loaded.",
                );
              }
              if (typeof selectFilter !== "function") {
                console.warn(
                  "Download Modal component requires selectFilter function. Make sure download-modal.min.js is loaded.",
                );
              }
              if (typeof modal !== "function") {
                console.warn(
                  "Download Modal component requires modal function. Make sure modal.min.js is loaded.",
                );
              }
            }
            break;
          case "expandToSize":
            if (typeof expandToSize === "function") {
              // Get the selector from data attribute
              const selector = element.getAttribute("data-selector");

              if (selector) {
                // Initialize expandToSize with the provided selector
                expandToSize(selector);
                markAsInitialized(element, componentType);
              } else {
                console.warn(
                  "expandToSize component requires data-selector attribute",
                );
              }
            } else {
              console.warn(
                "expandToSize component requires expandToSize function. Make sure animation.min.js is loaded.",
              );
            }
            break;
          case "filter-search-bar":
            if (typeof toggleFilter === "function") {
              // Check if locale attribute is provided
              if (element.hasAttribute("data-locale")) {
                const locale = element.getAttribute("data-locale");
                toggleFilter(locale);
              } else {
                toggleFilter();
              }
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Filter Search Bar component requires toggleFilter function. Make sure filter-search-bar.min.js is loaded.",
              );
            }
            break;
          case "fitText":
            // Check if the fitText function exists in the global scope
            if (typeof fitText === "function") {
              fitText(element);
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "fitText function mut be present. Make sure fitText.min.js is loaded.",
              );
            }
            break;
          case "fitTitle":
            // Check if the fitTitle function exists in the global scope
            if (typeof fitTitle === "function") {
              let sizes = null;
              try {
                const inputSizes = element.getAttribute("data-sizes");
                const textArea = document.createElement("textarea");
                textArea.innerHTML = inputSizes;
                sizes = JSON.parse(textArea.value);
              } catch (e) {}
              if (sizes !== null) {
                fitTitle(element, sizes);
              } else {
                fitTitle(element);
              }
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "fitTitle function mut be present. Make sure fitTitle.min.js is loaded.",
              );
            }
            break;
          case "footer":
            if (typeof accordion === "function") {
              accordion('[data-accordion="mobile"]', ".footer-panel", "active");
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Footer component requires accordion function. Make sure accordion.min.js is loaded.",
              );
            }
            break;
          case "language-switcher":
            if (typeof langSwitch === "function") {
              langSwitch();
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Language Switcher component requires langSwitch function",
              );
            }
            break;
          case "lightbox-gallery":
            if (typeof lightboxGallery === "function") {
              // Initialize the lightbox gallery
              lightboxGallery();
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Lightbox Gallery component requires lightboxGallery function. Make sure lightbox-gallery.min.js is loaded.",
              );
            }
            break;
          case "modal":
            // Initialize modal functionality
            if (typeof modal === "function") {
              modal();
              markAsInitialized(element, componentType);
            } else {
              console.warn("Modal component requires modal function");
            }
            break;
          case "multi-select":
            if (typeof multiSelect === "function") {
              multiSelect();
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Multi Select component requires multiSelect function",
              );
            }
            break;
          case "navigation":
            if (typeof navigationInitialize === "function") {
              navigationInitialize();

              if (
                element.hasAttribute("data-overflow") &&
                typeof navigationOverFlow === "function"
              ) {
                navigationOverFlow();
              }

              // Add edge detection for multi-level menus
              if (
                element.hasAttribute("data-multilevel") &&
                typeof navigationMultiLevelEdgeDetection === "function"
              ) {
                navigationMultiLevelEdgeDetection();
              }
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Header components require navigationInitialize function. Make sure navigation.min.js is loaded.",
              );
            }
            break;
          case "our-expertise":
            if (typeof ourExpertise === "function") {
              ourExpertise();
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Our Expertise component requires ourExpertise function. Make sure our-expertise.min.js is loaded.",
              );
            }
            break;
          case "parallax":
            if (typeof parallaxEffect === "function") {
              // Get options if provided
              let options = {
                triggerElement: ".parallax-gallery-images",
                targetSelector: ".column",
                triggerHook: "top center",
                endTriggerHook: "bottom+=15% center",
                direction: "vertical",
                breakpoints: "all",
              };

              if (element.hasAttribute("data-options")) {
                try {
                  const dataOptions = element.getAttribute("data-options");
                  // convert HTML entities to their original characters (encoded double quotes)
                  const textArea = document.createElement("textarea");
                  textArea.innerHTML = dataOptions;
                  const customOptions = JSON.parse(textArea.value);
                  // Merge default options with custom options
                  options = { ...options, ...customOptions };
                } catch (e) {
                  console.warn("Invalid JSON in data-options for parallax");
                }
              }

              // Initialize parallax with the configured options
              parallaxEffect(
                options.triggerElement,
                options.targetSelector,
                options.triggerHook,
                options.endTriggerHook,
                options.direction,
                options.breakpoints,
              );

              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Parallax component requires parallaxEffect function. Make sure parallax.min.js is loaded.",
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
              console.warn(
                "Sidebar component requires sidebarNav and sidebarMenu functions",
              );
            }
            break;
          case "stats":
            if (typeof statsHover === "function") {
              // Initialize stats
              statsHover();
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Stats component requires statsHover function. Make sure stats.min.js is loaded.",
              );
            }
            break;
          case "stats-slider":
            if (
              typeof swiper === "function" &&
              typeof parallaxEffect === "function"
            ) {
              swiper(".stats-card-slider");
              parallaxEffect(".stats-card-slider");
              markAsInitialized(element, componentType);
            } else {
              if (typeof swiper !== "function") {
                console.warn(
                  "Stats Slider component requires swiper function. Make sure swiper.min.js is loaded.",
                );
              }
              if (typeof parallaxEffect !== "function") {
                console.warn(
                  "Stats Slider component requires parallaxEffect function. Make sure parallax.min.js is loaded.",
                );
              }
            }
            break;
          case "sticky":
            if (typeof sticky === "function") {
              // Initialize sticky side navigation
              const stickyMovingSide =
                element.getAttribute("data-sticky-movingside") ||
                ".generic-content";
              sticky(element, stickyMovingSide);
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Sidebar component requires sticky function. Make sure sticky.min.js is loaded.",
              );
            }
            break;
          case "swiper":
            if (typeof swiper === "function") {
              // Get the selectors from data attributes
              const selector = element.getAttribute("data-selector");
              const arrowsSelector = element.getAttribute(
                "data-arrows-selector",
              );

              if (selector) {
                // Handle the special case when arrowsSelector is 'false'
                const arrows =
                  arrowsSelector === "false" ? false : arrowsSelector;

                // Initialize swiper with the provided selectors
                swiper(selector, arrows);
                markAsInitialized(element, componentType);
              } else {
                console.warn(
                  "Swiper component requires data-selector attribute",
                );
              }
            } else {
              console.warn(
                "Swiper component requires swiper function. Make sure swiper.min.js is loaded.",
              );
            }
            break;
          case "tabs":
            if (typeof tabs === "function") {
              // Initialize tabs
              tabs();
              markAsInitialized(element, componentType);
            } else {
              console.warn(
                "Tabs component requires tabs function. Make sure tabs.min.js is loaded.",
              );
            }
            break;
        }
      });
    });
  }

  // Run when DOM is fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeComponents);
  } else {
    initializeComponents();
  }

  // Also run when the window loads (as a fallback) // wait until whole dom is loaded
  window.addEventListener("load", function () {
    // Check for any components that weren't initialized yet
    const uninitializedComponents = document.querySelectorAll(
      "[data-undpds-component]:not([data-initialized])",
    );
    if (uninitializedComponents.length > 0) {
      initializeComponents();
    }
  });
})();
