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
            import("./lang-switcher.js").then(module => {
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
            import("./accordion.js").then(module => {
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
                import("./modal.js").then(module => {
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
                import("./swiper.js").then(module => {
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
                import("./lightbox-gallery.js").then(module => {
                    if (module && typeof module.lightboxGallery === 'function') {
                    module.lightboxGallery();
                }
                element.setAttribute('data-initialized', 'true');
            }).catch(err => console.error('Error initializing lightbox gallery :', err));
            }
            break;
        case 'expandToSize':
            if (typeof expandToSize === 'function') {
                const selector = element.getAttribute('data-selector');
                expandToSize(selector);
                element.setAttribute('data-initialized', 'true');
            } else {
                import("./animation.js").then(module => {
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
                import("./tabs.js").then(module => {
                    if (module && typeof module.tabs === 'function') {
                        module.tabs();
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing tabs:', err));
            }
            break;
        case 'stats-cards':
            if (typeof fitText === 'function') {
                // Get options with proper error handling
                let fitTextSelector = '.stats-card h2'; // Default selector
                
                if (options && options.selector) {
                    fitTextSelector = options.selector;
                }
                
                // Apply fitText with the selector
                fitText(fitTextSelector);
                element.setAttribute('data-initialized', 'true');
            } else {
                import("./fitText.js").then(module => {
                    if (module && typeof module.fitText === 'function') {
                        // Get options with proper error handling
                        let fitTextSelector = '.stats-card h2'; // Default selector
                        
                        if (options && options.selector) {
                            fitTextSelector = options.selector;
                        }
                        
                        // Apply fitText with the selector
                        module.fitText(fitTextSelector);
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing stats-cards:', err));
            }
            break;
        case 'parallax':
            if (typeof parallaxEffect === 'function') {
                const options = element.getAttribute('data-options') ? JSON.parse(element.getAttribute('data-options')) : {};
                parallaxEffect(
                    options.selector || '.parallax-card',
                    options.elements || ['.parallax-card__image', '.parallax-card__content'],
                    options.trigger || 'top center',
                    options.endTrigger || 'bottom+=85 center',
                    options.direction || 'vertical',
                    options.breakpoint || 'desktop',
                    options.unit || 'percent'
                );
                element.setAttribute('data-initialized', 'true');
            } else {
                import("./parallax.js").then(module => {
                    if (module && typeof module.parallaxEffect === 'function') {
                        const options = element.getAttribute('data-options') ? JSON.parse(element.getAttribute('data-options')) : {};
                        module.parallaxEffect(
                            options.selector || '.parallax-card',
                            options.elements || ['.parallax-card__image', '.parallax-card__content'],
                            options.trigger || 'top center',
                            options.endTrigger || 'bottom+=85 center',
                            options.direction || 'vertical',
                            options.breakpoint || 'desktop',
                            options.unit || 'percent'
                        );
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing parallax:', err));
            }
            break;
        case 'custom-select':
            if (typeof select === 'function') {
                select();
                element.setAttribute('data-initialized', 'true');
            } else {
                import("./select.js").then(module => {
                    if (module && typeof module.select === 'function') {
                        module.select();
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing custom-select:', err));
            }
            break;
        case 'multi-select':
            if (typeof multiSelect === 'function') {
                // Get locale from options if available
                const locale = options && options.locale ? options.locale : undefined;
                multiSelect(locale);
                element.setAttribute('data-initialized', 'true');
            } else {
                import("./multi-select.js").then(module => {
                    if (module && typeof module.multiSelect === 'function') {
                        // Get locale from options if available
                        const locale = options && options.locale ? options.locale : undefined;
                        module.multiSelect(locale);
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing multi-select:', err));
            }
            break;
        case 'expand-search':
            if (typeof expandSearch === 'function') {
                // Pass the jQuery element to expandSearch
                expandSearch(jQuery(element));
                element.setAttribute('data-initialized', 'true');
            } else {
                import("./expand-search.js").then(module => {
                    if (module && typeof module.expandSearch === 'function') {
                        // Pass the jQuery element to expandSearch
                        module.expandSearch(jQuery(element));
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing expand-search:', err));
            }
            break;
        case 'sidebar':
            if (typeof sidebarNav === 'function' && typeof sidebarMenu === 'function') {
                sidebarNav();
                sidebarMenu();
                element.setAttribute('data-initialized', 'true');
            } else {
                import("./sidebar.js").then(module => {
                    if (module && typeof module.sidebarNav === 'function' && 
                        typeof module.sidebarMenu === 'function') {
                        module.sidebarNav();
                        module.sidebarMenu();
                    }
                    element.setAttribute('data-initialized', 'true');
                }).catch(err => console.error('Error initializing sidebar:', err));
            }
            break;
        }
      });
    }, 100);
    
    return Story(Object.assign({}, context));
};