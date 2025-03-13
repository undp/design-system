export const initializeComponents = (Story, context) => {
  
    setTimeout(() => {
     
      const componentElements = document.querySelectorAll('[data-undpds-component]');
      
      componentElements.forEach(element => {
        const componentType = element.getAttribute('data-undpds-component');
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
            if (typeof langSwitch === 'function') {
                langSwitch();
                element.setAttribute('data-initialized', 'true');
            } else {
            import("../js/lang-switcher.js").then(module => {
                if (module && typeof module.langSwitch === 'function') {
                    module.langSwitch();
                }
                element.setAttribute('data-initialized', 'true');
            }).catch(err => console.error('Error initializing language-switcher:', err));
            }
            break;

        case 'accordion':
            if (typeof accordion === 'function') {
                accordion();
                element.setAttribute('data-initialized', 'true');
            } else {
            import("../js/accordion.js").then(module => {
                if (module && typeof module.accordion === 'function') {
                    module.accordion();
                }
                element.setAttribute('data-initialized', 'true');
            }).catch(err => console.error('Error initializing accordion:', err));
            }
            break;

        case 'modal':
            if (typeof modal === 'function') {
                modal();
                element.setAttribute('data-initialized', 'true');
            } else {
                import("../js/modal.js").then(module => {
                if (module && typeof module.modal === 'function') {
                    module.modal();
                }
                element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing accordion:', err));
            }
            break;
        case 'swiper':
            if (typeof swiper === 'function') {
                const targetSelector = element.getAttribute('data-selector');
                let arrowsSelector = element.getAttribute('data-arrows-selector');
                const optionsAttr = element.getAttribute('data-options');
                if (arrowsSelector === "false") {
                    arrowsSelector = false;
                }
                let swiperOptions = {};
                if (optionsAttr) {
                    try {
                        swiperOptions = JSON.parse(optionsAttr);
                    } catch (error) {
                        console.warn('Invalid swiper options format:', error);
                    }
                }
                
                swiper(targetSelector, arrowsSelector, swiperOptions);
                element.setAttribute('data-initialized', 'true');
            } else {
                import("../js/swiper.js").then(module => {
                if (module && typeof module.swiper === 'function') {
                    const targetSelector = element.getAttribute('data-selector');
                    let arrowsSelector = element.getAttribute('data-arrows-selector');
                    const optionsAttr = element.getAttribute('data-options');
                    if (arrowsSelector === "false") {
                        arrowsSelector = false;
                    }
                    let swiperOptions = {};
                    if (optionsAttr) {
                        try {
                            swiperOptions = JSON.parse(optionsAttr);
                        } catch (error) {
                            console.warn('Invalid swiper options format:', error);
                        }
                    }
                    
                    module.swiper(targetSelector, arrowsSelector, swiperOptions);
                }
                element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing swiper:', err));
            }
            break;
        case 'lightbox-gallery':
            if (typeof lightboxGallery === 'function') {
                lightboxGallery();
                element.setAttribute('data-initialized', 'true');
            } else {
                import("../js/lightbox-gallery.js").then(module => {
                    if (module && typeof module.lightboxGallery === 'function') {
                    module.lightboxGallery();
                }
                element.setAttribute('data-initialized', 'true');
            }).catch(err => console.error('Error initializing lightbox gallery :', err));
            }
            break;
        case 'parallax':
            if (typeof parallaxEffect === 'function') {
                const { triggerElement, targetSelector, triggerHook, endTriggerHook, direction, breakpoints } = options;
                parallaxEffect(triggerElement, targetSelector, triggerHook, endTriggerHook, direction, breakpoints);
                element.setAttribute('data-initialized', 'true');
            } else {
                import("../js/parallax.js").then(module => {
                    if (module && typeof module.parallaxEffect === 'function') {
                        const { triggerElement, targetSelector, triggerHook, endTriggerHook, direction, breakpoints } = options;
                        module.parallaxEffect(triggerElement, targetSelector, triggerHook, endTriggerHook, direction, breakpoints);
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing parallax effect:', err));
            }
            break;
        case 'expandToSize':
            if (typeof expandToSize === 'function') {
                const selector = element.getAttribute('data-selector');
                expandToSize(selector);
                element.setAttribute('data-initialized', 'true');
            } else {
                import("../js/animation.js").then(module => {
                    if (module && typeof module.default === 'function') {
                        const selector = element.getAttribute('data-selector');
                        module.default(selector);
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing expandToSize:', err));
            }
            break;
        case 'tabs':
            if (typeof tabs === 'function') {
                tabs();
                element.setAttribute('data-initialized', 'true');
            } else {
                import("../js/tabs.js").then(module => {
                    if (module && typeof module.tabs === 'function') {
                        module.tabs();
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing tabs:', err));
            }
            break;
        }
      });
    }, 100);
    
    return <Story {...context} />;
};