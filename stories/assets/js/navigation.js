/* eslint-disable no-inner-declarations */
/* eslint-disable no-restricted-syntax */
export const navigationInitialize = (locale) => {
  const menu = document.querySelector('.menu > ul');
  const menuItems = document.querySelectorAll('.menu li a');
  const megaWrapper = document.querySelector('.mega-wrapper');
  const mainNavHeight = document.querySelector('.header nav.menu');
  const navRoot = menu?.closest('header') || document.querySelector('header') || document.body;

  if (navRoot.dataset.navigationInitInited) return;
  navRoot.dataset.navigationInitInited = 'true';

  if (!document.body.dataset.navigationInitGlobalInited) {
    document.body.dataset.navigationInitGlobalInited = 'true';

    document.addEventListener('click', (event) => {
      if (!event.target.classList.contains('show-on-focus')) return;
      // If the user clicks anywhere, close the mega menu panel, and reset the
      // tab index values.
      document.querySelectorAll('.mega-nav-option').forEach((el) => el.classList.remove('show-mega'));
      const menuItemsAll = document.querySelectorAll('.menu li a');
      menuItemsAll.forEach((item) => {
        item.setAttribute('tabIndex', '0');
      });
      if (menuItemsAll.length) menuItemsAll[0].focus();
      document.querySelectorAll('.logo, .top-right button').forEach((el) => el.setAttribute('tabIndex', '0'));
      document.querySelectorAll('.submenu li a').forEach((a) => a.setAttribute('tabIndex', '0'));
      document.querySelectorAll('.sub-sub-menu li a').forEach((a) => a.setAttribute('tabIndex', '-1'));
    });

    /**
     * Mobile navigation related functionality.
     */
    document.addEventListener('click', (e) => {
      const link = e.target.closest('.mobile-links .cta__link:not(.no-submenu)');
      if (!link) return;
      const navId = link.getAttribute('id');
      const navText = link.textContent;
      e.preventDefault();
      const subHeading = document.querySelector('.mobile-mega-content .sub-heading');
      if (subHeading) subHeading.textContent = navText;
      const mobileContent = document.querySelector(`.mobile-mega-wrapper [data-mobile-id='${navId}']`);
      if (mobileContent) mobileContent.classList.add('show-content');
      const mobileLinks = document.querySelector('.mobile-links');
      if (mobileLinks) mobileLinks.classList.add('hide');
      const mobileSubMenu = document.querySelector('.mobile-sub-menu');
      if (mobileSubMenu) mobileSubMenu.classList.add('show');
    });
  }

  // Track if a menu item is being hovered.
  let hovering_item = false;
  let hovering_panel = false;

  const handleMenuItemInteraction = function (event) {
    hovering_item = true;

    // Find the panel that matches with the parent menu link item in the main nav.
    const navId = this.parentElement.getAttribute('data-menu-id');
    const menuItemId = document.querySelector(`[data-menu-item-id='${navId}']`);
    const triggeringItem = event.target;

    if (!menuItemId) return;

    // Show the mega menu panel. Position it at the bottom of the header or overflow.
    let extra = 0;
    if (triggeringItem.closest('.menu__overflow__container')) {
      extra = triggeringItem.offsetHeight;
    }
    menuItemId.style.top = `${(mainNavHeight ? mainNavHeight.offsetHeight : 0) + extra}px`;

    // Add show-mega, remove from siblings.
    menuItemId.classList.add('show-mega');
    const sibs = menuItemId.parentElement ? Array.from(menuItemId.parentElement.children) : [];
    sibs.forEach((sib) => {
      if (sib !== menuItemId) {
        sib.classList.remove('show-mega');
        sib.classList.add('no-effect');
      }
    });

    // If the overflow is open, z-index the mega menu above everything.
    menuItemId.classList.remove('float-higher');
    const overflowContainer = document.querySelector('.menu__overflow__container');
    if (overflowContainer && !overflowContainer.classList.contains('hidden')) {
      menuItemId.classList.add('float-higher');
    }

    // Set the first link in the sub menus to the active link (live query - mega is now showing).
    const currentMega = document.querySelector('.show-mega');
    if (currentMega) {
      const firstSubContent = currentMega.querySelector('.sub-menu-content:first-of-type');
      if (firstSubContent) {
        firstSubContent.classList.add('active-content');
        Array.from(firstSubContent.parentElement.children).forEach((sib) => {
          if (sib !== firstSubContent) sib.classList.remove('active-content');
        });
      }
      const firstSubmenuLi = currentMega.querySelector('.submenu li:first-of-type');
      if (firstSubmenuLi) {
        firstSubmenuLi.classList.add('active');
        Array.from(firstSubmenuLi.parentElement.children).forEach((sib) => {
          if (sib !== firstSubmenuLi) sib.classList.remove('active');
        });
      }
    }

    // Set the tabIndex value for sub menu links on displayed mega menu panels.
    if (menuItemId.classList.contains('show-mega')) {
      menuItems.forEach((item) => item.setAttribute('tabIndex', '-1'));
      document.querySelectorAll('.logo, .top-right button').forEach((el) => el.setAttribute('tabIndex', '-1'));
    } else {
      menuItems.forEach((item) => item.setAttribute('tabIndex', '0'));
      document.querySelectorAll('.logo, .top-right button').forEach((el) => el.setAttribute('tabIndex', '0'));
    }
  };

  menuItems.forEach((item) => {
    item.addEventListener('mouseenter', handleMenuItemInteraction);
    item.addEventListener('click', handleMenuItemInteraction);
  });

  menuItems.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      hovering_item = false;

      // Alter the tab index of a menu item.
      menuItems.forEach((mi) => mi.setAttribute('tabIndex', '0'));
      document.querySelectorAll('.logo, .top-right button').forEach((el) => el.setAttribute('tabIndex', '0'));
    });
  });

  /**
   * Manage the open and closing animation of the mega menu.
   */
  if (menu) {
    menu.addEventListener('mouseenter', () => {
      hovering_item = true;
      hovering_panel = false;
    });
    menu.addEventListener('mouseleave', (event) => {
      if (event.type === 'mouseleave') {
        const el = event.toElement;
        // Set a timeout delay to check if the mega panel is now hovered after
        // leaving the menu, before dismissing the associated mega menu panel.
        setTimeout(() => {
          if (!hovering_panel) {
            const showingMega = document.querySelector('.mega-nav-option.show-mega');
            if (showingMega) {
              showingMega.classList.remove('show-mega', 'no-effect');
              showingMega.classList.add('show-mega-back');
              setTimeout(() => {
                document
                  .querySelectorAll('.mega-nav-option.show-mega-back')
                  .forEach((el) => el.classList.remove('show-mega-back'));
              }, 300);
            }
          }
        }, 0);
      }
    });
  }

  if (megaWrapper) {
    megaWrapper.addEventListener('mouseleave', (event) => {
      hovering_panel = false;
      if (event.type === 'mouseleave') {
        const el = event.toElement;
        if (document.querySelector('.mega-nav-option.show-mega')) {
          // Set a timeout delay to check if the menu or a menu item is hovered
          // after leaving the mega panel, before dismissing the associated
          // mega menu panel.
          setTimeout(() => {
            if (!hovering_item) {
              const showingMega = document.querySelector('.mega-nav-option.show-mega');
              if (showingMega) {
                showingMega.classList.remove('show-mega', 'no-effect');
                showingMega.classList.add('show-mega-back');
                setTimeout(() => {
                  document
                    .querySelectorAll('.mega-nav-option.show-mega-back')
                    .forEach((el) => el.classList.remove('show-mega-back'));
                }, 300);
              }
            }
          }, 0);
        }
      }
    });
    megaWrapper.addEventListener('mouseenter', () => {
      hovering_panel = true;
    });

    /**
     * Work with tab settings and active content states for the mega menu.
     */
    const handleSubmenuLiInteraction = (e) => {
      const li = e.target.closest('.submenu li');
      if (!li || !megaWrapper.contains(li)) return;
      document.querySelectorAll('.sub-sub-menu li a').forEach((a) => a.setAttribute('tabIndex', '-1'));
      li.classList.add('active');
      Array.from(li.parentElement.children).forEach((sib) => {
        if (sib !== li) sib.classList.remove('active');
      });
      const navId = li.getAttribute('id');
      const closestMegaWrapper = li.closest('.mega-wrapper');
      if (closestMegaWrapper) {
        const targetContent = closestMegaWrapper.querySelector(`[data-submenu-id='${navId}']`);
        if (targetContent) {
          targetContent.classList.add('active-content');
          Array.from(targetContent.parentElement.children).forEach((sib) => {
            if (sib !== targetContent) sib.classList.remove('active-content');
          });
        }
      }
      e.stopImmediatePropagation();
      const key = e.which;
      if (key === 39) {
        document.querySelectorAll('.submenu li a').forEach((a) => a.setAttribute('tabIndex', '-1'));
        const targetContentRight =
          closestMegaWrapper && closestMegaWrapper.querySelector(`[data-submenu-id='${navId}']`);
        if (targetContentRight) {
          targetContentRight.classList.add('active-content');
          Array.from(targetContentRight.parentElement.children).forEach((sib) => {
            if (sib !== targetContentRight) {
              sib.classList.remove('active-content');
              sib.querySelectorAll('a').forEach((a) => a.setAttribute('tabIndex', '0'));
            }
          });
        }
        document.querySelectorAll('.sub-sub-menu li a').forEach((a) => a.setAttribute('tabIndex', '0'));
        const firstSubSubA = document.querySelector('.sub-sub-menu ul:first-of-type li:first-of-type a');
        if (firstSubSubA) firstSubSubA.focus();
      }
    };
    megaWrapper.addEventListener('mouseenter', handleSubmenuLiInteraction, true);
    megaWrapper.addEventListener('focus', handleSubmenuLiInteraction, true);
    megaWrapper.addEventListener('keydown', handleSubmenuLiInteraction, true);

    megaWrapper.addEventListener(
      'focus',
      (e) => {
        const a = e.target.closest('.sub-sub-menu ul li a');
        if (!a || !megaWrapper.contains(a)) return;
        e.stopImmediatePropagation();
        const key = e.which;
        if (key === 37) {
          const activeSubmenuA = document.querySelector('.submenu li.active a');
          if (activeSubmenuA) activeSubmenuA.focus();
          document.querySelectorAll('.submenu li a').forEach((el) => el.setAttribute('tabIndex', '0'));
          document.querySelectorAll('.sub-sub-menu li a').forEach((el) => el.setAttribute('tabIndex', '-1'));
        }
      },
      true,
    );
    megaWrapper.addEventListener(
      'keydown',
      (e) => {
        const a = e.target.closest('.sub-sub-menu ul li a');
        if (!a || !megaWrapper.contains(a)) return;
        e.stopImmediatePropagation();
        const key = e.which;
        if (key === 37) {
          const activeSubmenuA = document.querySelector('.submenu li.active a');
          if (activeSubmenuA) activeSubmenuA.focus();
          document.querySelectorAll('.submenu li a').forEach((el) => el.setAttribute('tabIndex', '0'));
          document.querySelectorAll('.sub-sub-menu li a').forEach((el) => el.setAttribute('tabIndex', '-1'));
        }
      },
      true,
    );

    const handleLastSubSubA = (e) => {
      const a = e.target.closest('.sub-sub-menu ul:last-of-type li:last-of-type a:last-of-type');
      if (!a || !megaWrapper.contains(a)) return;
      e.stopImmediatePropagation();
      document.querySelectorAll('.submenu li a').forEach((el) => el.setAttribute('tabIndex', '0'));
      const key = e.which;
      if (key === 9) {
        const activeSubmenuLi = document.querySelector('.submenu li.active');
        if (activeSubmenuLi) {
          const nextLi = activeSubmenuLi.nextElementSibling;
          if (nextLi) {
            const nextA = nextLi.querySelector('a');
            if (nextA) nextA.focus();
          }
        }
      }
    };
    megaWrapper.addEventListener('focus', handleLastSubSubA, true);
    megaWrapper.addEventListener('keydown', handleLastSubSubA, true);
  }

  const backNav = document.querySelector('.back-nav');
  if (backNav) {
    backNav.addEventListener('click', () => {
      document.querySelectorAll('.mobile-sub-menu, .mob-sub-lang').forEach((el) => el.classList.remove('show'));
      const mobileContent = document.querySelector('.mobile-mega-content');
      if (mobileContent) mobileContent.classList.remove('show-content');
      const mobileLinks = document.querySelector('.mobile-links');
      if (mobileLinks) mobileLinks.classList.remove('hide');
    });
  }

  const hamburger = document.querySelector('.menu-hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function (e) {
      e.stopImmediatePropagation();
      const mobileNav = document.querySelector('.mobile-nav');
      if (mobileNav) mobileNav.classList.toggle('show');
      const mobileSubMenu = document.querySelector('.mobile-sub-menu');
      if (mobileSubMenu) mobileSubMenu.classList.toggle('show');
      this.classList.toggle('is-active');
      if (backNav) backNav.click();
    });
  }

  /**
   * Language switch toggle effect.
   */
  const mobLangSwitcher = document.querySelector('.mob-lang-switcher');
  if (mobLangSwitcher) {
    mobLangSwitcher.addEventListener('click', (ev) => {
      ev.preventDefault();
      const mobSubLang = document.querySelector('.mob-sub-lang');
      if (mobSubLang) mobSubLang.classList.add('show');
      const mobileLinks = document.querySelector('.mobile-links');
      if (mobileLinks) mobileLinks.classList.add('hide');
    });
  }

  /**
   * Scrolled logo effect.
   */
  const logo_scroller = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const logo = document.querySelector('.logo img');
        if (logo) {
          logo.classList.toggle('scrolled', !entry.isIntersecting);
        }
      });
    },
    { threshold: 1 },
  );
  const headerEl = document.querySelector('header');
  if (headerEl) logo_scroller.observe(headerEl);
};

/**
 * Menu multi-level functionality.
 */
export const navigationMultiLevelEdgeDetection = () => {
  const menuRoot = document.querySelector('.menu');
  if (!menuRoot) return;
  if (menuRoot.dataset.navigationEdgeDetectionInited) return;
  menuRoot.dataset.navigationEdgeDetectionInited = 'true';

  // Determine if a multilevel menu item will go off the screen.
  // Change the side it renders on, if it will go off screen, by
  // adding the "edge" class. The formula to determine changes for
  // the language direction.
  const handleEdge = function () {
    const li = this;
    li.classList.remove('edge');
    if (li.querySelector('ul.submenu')) {
      const dir = getComputedStyle(document.body).direction;
      const elm = li.querySelector('ul');
      if (elm) {
        const rect = elm.getBoundingClientRect();
        const offset = { left: rect.left + window.scrollX };
        const elmW = elm.offsetWidth;
        const headerEl2 = document.querySelector('.header');
        const docW = headerEl2 ? headerEl2.offsetWidth : 0;
        const isEntirelyVisible = dir === 'rtl' ? offset.left >= elmW : offset.left + elmW <= docW;
        if (!isEntirelyVisible) {
          li.classList.add('edge');
        }
      }
    }
  };

  document.querySelectorAll('.menu li li').forEach((li) => {
    li.addEventListener('mouseenter', handleEdge);
    li.addEventListener('mouseleave', handleEdge);
  });
};

/**
 * Navigation overflow functionality.
 */
export const navigationOverFlow = () => {
  const overflowUl = document.querySelector('.menu > ul.overflow');
  if (!overflowUl) return;
  if (overflowUl.dataset.navigationOverflowInited) return;
  overflowUl.dataset.navigationOverflowInited = 'true';

  /**
   * Generate the button and add to navigation if it doesn't exist.
   */
  const button = document.createElement('button');
  button.innerHTML = '<span class="hidden">Menu toggle</span>';
  button.className = 'menu__overflow__toggle';
  button.setAttribute('aria-hidden', 'false');
  button.setAttribute('aria-controls', 'navigation-overflow');
  button.setAttribute('aria-label', 'Menu overflow toggle');

  // Add the button to an overflow item in the main nav.
  if (!document.querySelector('.menu__overflow__item')) {
    const item = document.createElement('li');
    item.className = 'menu__overflow__item hidden';
    item.appendChild(button);
    overflowUl.prepend(item);
  }

  /**
   * Toggle overflow section via button.
   */
  const overflowToggle = document.querySelector('.menu__overflow__toggle');
  if (overflowToggle) {
    overflowToggle.addEventListener('click', () => {
      const overflowContainer = document.querySelector('.menu__overflow__container');
      if (!overflowContainer) return;
      if (overflowContainer.classList.contains('hidden')) {
        overflowToggle.classList.add('toggled');
        overflowContainer.classList.remove('hidden');
      } else {
        overflowToggle.classList.remove('toggled');
        overflowContainer.classList.add('hidden');
      }
    });
  }

  /**
   * Add the menu items width as a data attribute.
   */
  document.querySelectorAll('.menu > ul.overflow > li').forEach((li) => {
    li.setAttribute('data-item-width', li.offsetWidth);
  });

  /**
   * Trigger the overflow navigation setup.
   * @param {*} header_container_width
   */
  function TriggerOverFlowFunctionality(header_container_width) {
    if (typeof header_container_width === 'number') {
      const menuEl = document.querySelector('.menu');
      if (!menuEl) return;

      // Get the width of the holding menu container.
      const menu_container_width = menuEl.offsetWidth;

      /**
       * Move extra menu items to the overflow container.
       */
      let current_combined_width = 0;
      const items_to_move_to_overflow = [];
      document.querySelectorAll('.menu > ul.overflow > li').forEach((li) => {
        current_combined_width += parseInt(li.offsetWidth, 10);
        if (current_combined_width > menu_container_width) {
          items_to_move_to_overflow.push(li);
        }
      });
      const overflowContainerUl = document.querySelector('.menu__overflow__container > ul.overflow');
      if (overflowContainerUl) {
        items_to_move_to_overflow.forEach((li) => overflowContainerUl.prepend(li));
      }

      /**
       * Move an overflow item back to the main menu if there is room.
       * Calculate the open pixel value by comparing the main menu container
       * with the combined total of all active main menu items. When the open
       * space is greater than the width of the first item in the overflow,
       * move that item back into the active main nav.
       */
      const overflowContainerItems = document.querySelectorAll('.menu__overflow__container > ul.overflow > li');
      if (overflowContainerItems.length) {
        let total_width_of_active_main_nav_items = 0;
        document.querySelectorAll('.menu > ul.overflow > li').forEach((li) => {
          total_width_of_active_main_nav_items += parseInt(li.offsetWidth, 10);
        });
        const open_pixel_value = menu_container_width - total_width_of_active_main_nav_items;
        const firstOverflowItem = document.querySelector('.menu__overflow__container > ul.overflow > li');
        if (
          firstOverflowItem &&
          open_pixel_value >= parseInt(firstOverflowItem.getAttribute('data-item-width'), 10)
        ) {
          overflowUl.appendChild(firstOverflowItem);
        }
      }

      /**
       * Display the overflow button if there are more items then can fit.
       */
      const overflowItem = document.querySelector('.menu__overflow__item');
      if (overflowItem) {
        overflowItem.classList.add('hidden');
        if (document.querySelectorAll('.menu__overflow__container > ul.overflow > li').length > 0) {
          overflowItem.classList.remove('hidden');
        }
      }

      const overflowContainer = document.querySelector('.menu__overflow__container');
      if (overflowContainer && !document.querySelectorAll('.menu__overflow__container > ul.overflow > li').length) {
        overflowContainer.classList.add('hidden');
      }
    }
  }

  // Trigger a recalculation on any resize to figure out if menu items should
  // be moved to overflow section.
  const resize_observer = new ResizeObserver((items) => {
    for (const item of items) {
      const menuEl = document.querySelector('.menu');
      const topCenter = document.querySelector('.top-center');
      // Set the width of the menu, to the width of the parent.
      if (menuEl && topCenter) {
        menuEl.style.width = `${topCenter.offsetWidth - 40}px`;
      }

      // Trigger the overflow rebuild.
      TriggerOverFlowFunctionality(Math.floor(item.contentRect?.width));
    }
  });

  const header = document.querySelector('.header');
  if (header) {
    resize_observer.observe(header, { box: 'border-box' });
  }
};
