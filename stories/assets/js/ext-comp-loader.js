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