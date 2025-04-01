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
          case 'country-header':
            if (typeof navigationInitialize === 'function' && 
                typeof langSwitch === 'function') {
              navigationInitialize();
              
              // Initialize overflow if the element has overflow attribute
              if (element.hasAttribute('data-overflow') && 
                  element.getAttribute('data-overflow') === 'true') {
                if (typeof navigationOverFlow === 'function') {
                  navigationOverFlow();
                } else {
                  console.warn('Country Header overflow requires navigationOverFlow function');
                }
              }
              
              // Initialize multi-level edge detection
              if (typeof navigationMultiLevelEdgeDetection === 'function') {
                navigationMultiLevelEdgeDetection();
              } else {
                console.warn('Country Header multi-level edge detection requires navigationMultiLevelEdgeDetection function');
              }
              
              // Initialize language switcher
              if (typeof langSwitch === 'function') {
                langSwitch();
                console.log("inside langSwitch");
              }
              
              element.setAttribute('data-initialized', 'true');
            } else {
              console.warn('Country Header component requires navigationInitialize and langSwitch functions');
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
    
    // Also run when the window loads (as a fallback)
    window.addEventListener('load', function() {
      // Check for any components that weren't initialized yet
      const uninitializedComponents = document.querySelectorAll('[data-undpds-component]:not([data-initialized])');
      if (uninitializedComponents.length > 0) {
        initializeComponents();
      }
    });
  })();