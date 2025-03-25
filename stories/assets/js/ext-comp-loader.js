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
            
          // Additional components will be added here in the future
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