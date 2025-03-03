export const initializeComponents = (Story, context) => {
  
    setTimeout(() => {
     
      const componentElements = document.querySelectorAll('[data-component]');
      
      componentElements.forEach(element => {
        const componentType = element.getAttribute('data-component');
        if (element.hasAttribute('data-initialized')) {
          return;
        }
        
        let options = {};
        if (element.hasAttribute('data-options')) {
          try {
            options = JSON.parse(element.getAttribute('data-options'));
          } catch (error) {
            console.warn(`Invalid options format for ${componentType}:`, error);
          }
        }
        
        // Initialize based on component type
        switch (componentType) {
            case 'language-switcher':
                // Assuming langSwitch is available somehow in your project
                if (typeof window.UNDP?.langSwitch === 'function') {
                window.UNDP.langSwitch();
                } else {
                // Try using your existing import pattern - adjust path as needed
                import("../js/lang-switcher.js").then(module => {
                    if (module && typeof module.langSwitch === 'function') {
                    module.langSwitch();
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing language-switcher:', err));
                }
                break;

            case 'accordion':
                if (typeof window.UNDP?.accordion === 'function') {
                window.UNDP.accordion();
                } else {
                // Try using your existing import pattern - adjust path as needed
                import("../js/accordion.js").then(module => {
                    if (module && typeof module.accordion === 'function') {
                    module.accordion();
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing accordion:', err));
                }
                break;

            case 'modal':
                if (typeof window.UNDP?.modal === 'function') {
                    window.UNDP.modal();
                } else {
                    // Try using your existing import pattern - adjust path as needed
                    import("../js/modal.js").then(module => {
                    if (module && typeof module.modal === 'function') {
                        module.modal();
                    }
                    element.setAttribute('data-initialized', 'true');
                    }).catch(err => console.error('Error initializing accordion:', err));
                }
                break;
          // Add other component types as needed
        }
      });
    }, 100);
    
    return <Story {...context} />;
};