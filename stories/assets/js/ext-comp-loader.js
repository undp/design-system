/**
 * UNDP Design System Component Initializer
 * 
 * This file automatically initializes components based on
 * data-undpds-component attributes in the HTML.
 */

(function() {
    // Initialize all components when DOM is ready
    function initializeComponents() {
      // Find all elements with data-undpds-component attribute
      const componentElements = document.querySelectorAll('[data-undpds-component]');
      
      componentElements.forEach(element => {
        // Skip already initialized components
        if (element.hasAttribute('data-initialized')) {
          return;
        }
        
        const componentType = element.getAttribute('data-undpds-component');
        
        // Initialize based on component type
        switch (componentType) {
          case 'accordion':
            // Check if the accordion function exists in the global scope
            if (typeof accordion === 'function') {
              accordion();
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Accordion component requires accordion function. Make sure accordion.min.js is loaded.');
            }
            break;
          case 'sidebar':
            if (typeof sidebarNav === 'function' && typeof sidebarMenu === 'function') {
              sidebarNav();
              sidebarMenu();
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Sidebar component requires sidebarNav and sidebarMenu functions');
            }
            break;
            
          case 'custom-select':
            if (typeof select === 'function') {
              select();
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Custom Select component requires select function');
            }
            break;
          case 'multi-select':
            if (typeof multiSelect === 'function') {
              multiSelect();
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Multi Select component requires multiSelect function');
            }
            break;
          case 'language-switcher':
            if (typeof langSwitch === 'function') {
              langSwitch();
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Language Switcher component requires langSwitch function');
            }
            break;
            
          case 'country-header':
            if (typeof navigationInitialize === 'function') {
              navigationInitialize();
              navigationOverFlow();

              // Add edge detection for multi-level menus
              if (typeof navigationMultiLevelEdgeDetection === 'function') {
                navigationMultiLevelEdgeDetection();
              }
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Country Header requires navigationInitialize function');
            }
            break;
          case 'country-site-header':
            // Initialize functions based on the documented approach for external users
            if (typeof navigationInitialize === 'function') {
              // Call navigationInitialize without locale parameter as shown in documentation
              navigationInitialize();
              
              // Call navigationOverFlow if needed
              if (typeof navigationOverFlow === 'function') {
                navigationOverFlow();
              }
              
              // Call navigationMultiLevelEdgeDetection
              if (typeof navigationMultiLevelEdgeDetection === 'function') {
                navigationMultiLevelEdgeDetection();
              }
              
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('CountrySiteHeader component requires navigationInitialize function');
            }
            break;
          case 'modal':
            // Initialize modal functionality
            if (typeof modal === 'function') {
              modal();
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Modal component requires modal function');
            }
            break;
          case 'swiper':
            if (typeof swiper === 'function') {
              // Get the selectors from data attributes
              const selector = element.getAttribute('data-selector');
              const arrowsSelector = element.getAttribute('data-arrows-selector');
              
              if (selector) {
                // Handle the special case when arrowsSelector is 'false'
                const arrows = arrowsSelector === 'false' ? false : arrowsSelector;
                
                // Initialize swiper with the provided selectors
                swiper(selector, arrows);
                element.setAttribute('data-initialized', 'true');
              } else {
                console.warn('Swiper component requires data-selector attribute');
              }
            } else {
              console.warn('Swiper component requires swiper function. Make sure swiper.min.js is loaded.');
            }
            break;
          case 'lightbox-gallery':
            if (typeof lightboxGallery === 'function') {
              // Initialize the lightbox gallery
              lightboxGallery();
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Lightbox Gallery component requires lightboxGallery function. Make sure lightbox-gallery.min.js is loaded.');
            }
            break;
          case 'parallax':
            if (typeof parallaxEffect === 'function') {
              // Get options if provided
              let options = {
                triggerElement: '.parallax-gallery-images',
                targetSelector: '.column',
                triggerHook: 'top center',
                endTriggerHook: 'bottom+=15% center',
                direction: 'vertical',
                breakpoints: 'all'
              };
              
              if (element.hasAttribute('data-options')) {
                try {
                  const customOptions = JSON.parse(element.getAttribute('data-options'));
                  options = { ...options, ...customOptions };
                } catch (e) {
                  console.warn('Invalid JSON in data-options for parallax');
                }
              }
              
              // Initialize parallax with the configured options
              parallaxEffect(
                options.triggerElement, 
                options.targetSelector, 
                options.triggerHook, 
                options.endTriggerHook, 
                options.direction, 
                options.breakpoints
              );
              
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Parallax component requires parallaxEffect function. Make sure parallax.min.js is loaded.');
            }
            break;
          case 'expandToSize':
            if (typeof expandToSize === 'function') {
              // Get the selector from data attribute
              const selector = element.getAttribute('data-selector');
              
              if (selector) {
                // Initialize expandToSize with the provided selector
                expandToSize(selector);
                element.setAttribute('data-initialized', 'true');
              } else {
                console.warn('expandToSize component requires data-selector attribute');
              }
            } else {
              console.warn('expandToSize component requires expandToSize function. Make sure animation.min.js is loaded.');
            }
            break;
          case 'tabs':
            if (typeof tabs === 'function') {
              // Initialize tabs
              tabs();
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Tabs component requires tabs function. Make sure tabs.min.js is loaded.');
            }
            break;
          case 'stats':
            if (typeof statsHover === 'function') {
              // Initialize stats
              statsHover();
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Stats component requires statsHover function. Make sure stats.min.js is loaded.');
            }
            break;
          case 'download-modal':
            if (typeof checkbox === 'function' && typeof selectFilter === 'function' && typeof modal === 'function') {
              // Get selectors from data attributes or use defaults
              const checkboxSelector = element.getAttribute('data-checkbox-selector') || '.form-check input';
              const buttonSelector = element.getAttribute('data-button-selector') || '.download-footer .button-primary';
              
              // Initialize all required functions
              checkbox(checkboxSelector, buttonSelector);
              selectFilter();
              modal();
              
              element.setAttribute('data-initialized', 'true');
            } else {
              if (typeof checkbox !== 'function') {
                console.warn('Download Modal component requires checkbox function. Make sure download-modal.min.js is loaded.');
              }
              if (typeof selectFilter !== 'function') {
                console.warn('Download Modal component requires selectFilter function. Make sure download-modal.min.js is loaded.');
              }
              if (typeof modal !== 'function') {
                console.warn('Download Modal component requires modal function. Make sure modal.min.js is loaded.');
              }
            }
            break;
          case 'filter-search-bar':
            if (typeof toggleFilter === 'function') {
              // Check if locale attribute is provided
              if (element.hasAttribute('data-locale')) {
                const locale = element.getAttribute('data-locale');
                toggleFilter(locale);
              } else {
                toggleFilter();
              }
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Filter Search Bar component requires toggleFilter function. Make sure filter-search-bar.min.js is loaded.');
            }
            break;
          case 'stats-slider':
            if (typeof swiper === 'function' && typeof parallaxEffect === 'function') {
              swiper('.stats-card-slider');
              parallaxEffect('.stats-card-slider');
              element.setAttribute('data-initialized', 'true');
            } else {
              if (typeof swiper !== 'function') {
                console.warn('Stats Slider component requires swiper function. Make sure swiper.min.js is loaded.');
              }
              if (typeof parallaxEffect !== 'function') {
                console.warn('Stats Slider component requires parallaxEffect function. Make sure parallax.min.js is loaded.');
              }
            }
            break;
          case 'footer':
            if (typeof accordion === 'function') {
              accordion('[data-accordion="mobile"]', '.footer-panel', 'active');
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Footer component requires accordion function. Make sure accordion.min.js is loaded.');
            }
            break;
          case 'our-expertise':
            if (typeof ourExpertise === 'function') {
              ourExpertise();
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Our Expertise component requires ourExpertise function. Make sure our-expertise.min.js is loaded.');
            }
            break;
    }
      });
    }
    
    // Run when DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeComponents);
    } else {
      initializeComponents();
    }
    
    // Also run when the window loads (as a fallback) // wait until whole dom is loaded
    window.addEventListener('load', function() {
      // Check for any components that weren't initialized yet
      const uninitializedComponents = document.querySelectorAll('[data-undpds-component]:not([data-initialized])');
      if (uninitializedComponents.length > 0) {
        initializeComponents();
      }
    });
  })();