/* eslint-disable no-restricted-syntax */
export const navigationInitialize = (locale) => {
  const $menu = jQuery('.menu');
  const $menuItem = jQuery('.menu li a');
  const $megaMenu = jQuery('.show-mega');
  const $megaWrapper = jQuery('.mega-wrapper');
  let $header = jQuery('.header');

  // Track if a menu item is being hovered.
  let hovering_item = false;
  let hovering_panel = false;

  $menuItem.on('mouseenter click', function (event) {
    hovering_item = true;

    // Find the panel that matches with the parent menu link item in the main nav.
    const navId = jQuery(this).parent().attr('data-menu-id');
    let $menuItemId = jQuery(document).find(`[data-menu-item-id='${navId}']`);

    // Show the mega menu panel. Position it at the bottom of the header or overflow.
    $menuItemId.css({ top: $header.height() });
    $menuItemId.addClass('show-mega').siblings().removeClass('show-mega').addClass('no-effect');

    // Set the first link in the sub menus to the active link.
    $megaMenu.find('.sub-menu-content:first-of-type').addClass('active-content').siblings().removeClass('active-content');
    $megaMenu.find('.submenu li:first-of-type').addClass('active').siblings().removeClass('active');

    // Set the tabIndex value for sub menu links on displayed mega menu panels.
    if ($menuItemId.hasClass('show-mega')) {
      $menuItem.attr('tabIndex', '-1');
      jQuery('.logo, .top-right button').attr('tabIndex', '-1');
    } else {
      $menuItem.attr('tabIndex', '0');
      jQuery('.logo, .top-right button').attr('tabIndex', '0');
    }
  });

  $menuItem.on('mouseleave', (event) => {
    hovering_item = false;

    // Alter the tab index of a menu item.
    $menuItem.attr('tabIndex', '0');
    jQuery('.logo, .top-right button').attr('tabIndex', '0');
  });

  jQuery(document).on('click', '.show-on-focus', (event) => {
    // If the user clicks anywhere, close the mega menu panel, and reset the
    // tab index values.
    jQuery('.mega-nav-option').removeClass('show-mega');
    $menuItem.attr('tabIndex', '0').focus();
    $menuItem.first().focus();
    jQuery('.logo, .top-right button').attr('tabIndex', '0');
    jQuery('.submenu li a').attr('tabIndex', '0');
    jQuery('.sub-sub-menu li').find('a').attr('tabIndex', '-1');
  });

  /**
   * Manage the open and closing animation of the mega menu.
   */
  $menu.on('mouseenter', (event) => {
    hovering_item = true;
    hovering_panel = false;
  });
  $menu.on('mouseleave', (event) => {
    if (event.type === 'mouseleave') {
      const el = event.toElement;
      // Set a timeout delay to check if the mega panel is now hovered after
      // leaving the menu, before dismissing the associated mega menu panel.
      setTimeout(() => {
        if (!hovering_panel) {
          if (jQuery('.mega-nav-option').hasClass('show-mega')) {
            jQuery('.mega-nav-option.show-mega').removeClass('show-mega no-effect')
              .addClass('show-mega-back');
            setTimeout(() => {
              jQuery('.mega-nav-option.show-mega-back').removeClass('show-mega-back');
            }, 300);
          }
        }
      }, 0);
    }
  });
  $megaWrapper.on('mouseleave', (event) => {
    hovering_panel = false;
    if (event.type === 'mouseleave') {
      const el = event.toElement;
      if (jQuery('.mega-nav-option').hasClass('show-mega')) {
        // Set a timeout delay to check if the menu or a menu item is hovered
        // after leaving the mega panel, before dismissing the associated
        // mega menu panel.
        setTimeout(() => {
          if (!hovering_item) {
            jQuery('.mega-nav-option.show-mega').removeClass('show-mega no-effect')
              .addClass('show-mega-back');
            setTimeout(() => {
              jQuery('.mega-nav-option.show-mega-back').removeClass('show-mega-back');
            }, 300);
          }
        }, 0);
      }
    }
  });
  $megaWrapper.on('mouseenter', (event) => {
    hovering_panel = true;
  });

  /**
   * Work with tab settings and active content states for the mega menu.
   */
  $megaWrapper.on('mouseenter focus keydown', '.submenu li', function (e) {
    jQuery('.sub-sub-menu li').find('a').attr('tabIndex', '-1');
    jQuery(this).addClass('active').siblings().removeClass('active');
    const navId = jQuery(this).attr('id');
    jQuery(this).parents('.mega-wrapper').find(`[data-submenu-id='${navId}']`).addClass('active-content')
      .siblings()
      .removeClass('active-content');
    e.stopImmediatePropagation();
    var key = e.which;
    if (key == 39) {
      jQuery('.submenu li').find('a').attr('tabIndex', '-1');
      jQuery(this).parents('.mega-wrapper').find(`[data-submenu-id='${navId}']`).addClass('active-content')
        .siblings()
        .removeClass('active-content')
        .find('a')
        .attr('tabIndex', '0');
      jQuery('.sub-sub-menu li').find('a').attr('tabIndex', '0');
      jQuery('.sub-sub-menu ul:first-of-type li:first-of-type a').focus();
    }
  });
  $megaWrapper.on('focus keydown', '.sub-sub-menu ul li a', (e) => {
    e.stopImmediatePropagation();
    var key = e.which;
    if (key == 37) {
      jQuery('.submenu li.active').find('a').focus();
      jQuery('.submenu li').find('a').attr('tabIndex', '0');
      jQuery('.sub-sub-menu li').find('a').attr('tabIndex', '-1');
    }
  });
  $megaWrapper.on('focus keydown', '.sub-sub-menu ul:last-of-type li:last-of-type a:last-of-type', (e) => {
    e.stopImmediatePropagation();
    jQuery('.submenu li a').attr('tabIndex', '0');
    var key = e.which;
    if (key == 9) {
      jQuery('.submenu li.active').next().find('a').focus();
    }
  });

  /**
   * Mobile navigation related functionality.
   */
  jQuery(document).on('click', '.mobile-links .cta__link', function (e) {
    const navId = jQuery(this).attr('id');
    const navText = jQuery(this).text();
    e.preventDefault();
    jQuery('.mobile-mega-content').find('.sub-heading').text(navText);
    jQuery('.mobile-mega-wrapper').find(`[data-mobile-id='${navId}']`).addClass('show-content');
    jQuery('.mobile-links').addClass('hide');
    jQuery('.mobile-sub-menu').addClass('show');
  });

  jQuery('.back-nav').on('click', () => {
    jQuery('.mobile-sub-menu, .mob-sub-lang').removeClass('show');
    jQuery('.mobile-mega-content').removeClass('show-content');
    jQuery('.mobile-links').removeClass('hide');
  });

  jQuery('.menu-hamburger').on('click', function (e) {
    e.stopImmediatePropagation();
    jQuery('.mobile-nav').toggleClass('show');
    jQuery('.mobile-sub-menu').toggleClass('show');
    jQuery(this).toggleClass('is-active');
    jQuery('.back-nav').trigger('click');
  });

  /**
   * Animation functionality
   *
   * Displays the logo moving into position and then displays the rest of the header content.
   */
  const headerClass = localStorage.getItem('current-nav');
  if (headerClass == 'global-header') {
    jQuery('.global-header').removeClass('global-load-animation');
    jQuery('.country-load-animation').addClass('run-animation');
    setTimeout(() => {
      jQuery('.country-load-animation.run-animation').removeClass('country-load-animation run-animation').addClass('show-content');
    }, 800);
    setTimeout(() => {
      jQuery('.country-header').removeClass('show-content');
      localStorage.setItem('current-nav', document.getElementsByTagName('header')[0].classList[0]);
    }, 1000);
  } else {
    jQuery('.country-header').removeClass('country-load-animation');
    jQuery('.global-load-animation').addClass('run-animation');
    setTimeout(() => {
      jQuery('.global-load-animation.run-animation').removeClass('global-load-animation run-animation').addClass('show-content');
    }, 800);
    setTimeout(() => {
      jQuery('.global-header').removeClass('show-content');
      localStorage.setItem('current-nav', document.getElementsByTagName('header')[0].classList[0]);
    }, 1000);
  }

  /**
   * Language switch toggle effect.
   */
  jQuery('.mob-lang-switcher').on('click', (ev) => {
    ev.preventDefault();
    jQuery('.mob-sub-lang').addClass('show');
    jQuery('.mobile-links').addClass('hide');
  });

  /**
   * Scrolled logo effect.
   */
  jQuery(window).scroll(() => {
    var winScroll = jQuery(window).scrollTop();
    if (winScroll >= 1) {
      jQuery('.logo img').addClass('scrolled');
    } else {
      jQuery('.logo img').removeClass('scrolled');
    }
  });
};

/**
 * Menu multi-level functionality.
 */
export const navigationMultiLevelEdgeDetection = () => {
  // Determine if a multilevel menu item will go off the screen.
  // Change the side it renders on, if it will go off screen, by
  // adding the "edge" class. The formula to determine changes for
  // the language direction.
  jQuery('.menu ul.dropdown li.menu-item').on('mouseenter mouseleave', 'li.menu-item', function (e) {
    let $this = jQuery(this);
    $this.removeClass('edge');
    if (jQuery('ul.submenu', $this).length) {
      let dir = getComputedStyle(document.body).direction;
      let elm = $('ul:first', $this);
      let offset = elm.offset();
      let elm_w = elm.width();
      let docW = $('.header').width();
      let isEntirelyVisible = (dir === 'rtl') ? (offset.left >= elm_w) : (offset.left + elm.width() <= docW);
      if (!isEntirelyVisible) {
        $this.addClass('edge');
      }
    }
  });
};

/**
 * Navigation overflow functionality.
 */
export const navigationOverFlow = () => {
  // /**
  //  * Generate the button
  //  */
  // let $button = $(document.createElement('button')).prop({
  //   innerHTML: '<span class="hidden">Menu toggle</span>',
  //   class: 'menu__overflow__toggle',
  //   'aria-hidden': 'true',
  //   'aria-controls': 'navigation-dropdown',
  //   'aria-label': 'Menu overflow toggle',
  // });
  // if (jQuery('.menu__overflow__toggle').length === 0) {
  //   /**
  //    * Toggle overflow section via button.
  //    */
  //   $(document).ready(() => {
  //     $('.top-left').append($button);
  //   });
  // } else {
  // }

  /**
   * Toggle overflow section via button.
   */
  jQuery('.menu__overflow__toggle').on('click', (e) => {
    if (jQuery('.menu__overflow__container').hasClass('hidden')) {
      jQuery('.menu__overflow__container').removeClass('hidden');
    } else {
      jQuery('.menu__overflow__container').addClass('hidden');
    }
  });

  // Define some constants and variables for later use.
  const $menu_items = jQuery('.menu > ul.dropdown > li');
  const total_main_level_menu_items = jQuery('.menu > ul.dropdown > li').length;
  let number_of_menu_items_that_can_fit_in_upper_nav = 0;
  let number_of_items_to_move_into_overflow = 0;

  /**
   * Add the menu items width as a data attribute.
   */
  jQuery('.menu > ul.dropdown > li').each(function () {
    jQuery(this).attr('data-item-width', jQuery(this).width());
  });

  jQuery('.menu__overflow__container > ul.dropdown').empty();

  /**
   * Trigger the overflow navigation setup.
   * @param {*} menu_container_width
   */
  function TriggerOverFlowFunctionality(menu_container_width) {
    if (typeof (menu_container_width) === 'number') {
      // Adjust the menu_container_width to always allow at least 1 item, otherwise.
      // the math breaks.
      let width_of_single_item = $menu_items.width() ?? $menu_items.attr('data-item-width');
      menu_container_width = menu_container_width <= width_of_single_item ? width_of_single_item : menu_container_width;

      /**
       * Move extra menu items to the overflow container.
       */
      number_of_menu_items_that_can_fit_in_upper_nav = Math.floor(menu_container_width / width_of_single_item);
      number_of_items_to_move_into_overflow = total_main_level_menu_items - number_of_menu_items_that_can_fit_in_upper_nav;
      const $items_to_move_to_overflow = jQuery('.menu > ul.dropdown > li').filter((item) => item > number_of_menu_items_that_can_fit_in_upper_nav - 1);
      $items_to_move_to_overflow.prependTo('.menu__overflow__container > ul.dropdown');

      /**
       * Move an overflow item back to the main menu if there is room.
       *
       * Set the current menu count to always be at least 1, otherwise math breaks.
       */
      let current_main_menu_count = jQuery('.menu > ul.dropdown > li').length ?? 1;
      let open_pixel_value = menu_container_width - (current_main_menu_count * width_of_single_item);
      if (open_pixel_value >= width_of_single_item) {
        if (jQuery('.menu__overflow__container > ul.dropdown > li').length) {
          jQuery('.menu__overflow__container > ul.dropdown > li').first().appendTo('.menu > ul.dropdown');
        }
      }

      /**
       * Display the overflow button if there are more items then can fit.
       */
      jQuery('.menu__overflow__toggle').addClass('hidden');
      if (number_of_items_to_move_into_overflow > 0) {
        jQuery('.menu__overflow__toggle').removeClass('hidden');
      }
    }
  }

  // Trigger a recalculation on any resize to figure out if menu items should
  // be moved to overflow section.
  const observer = new ResizeObserver((items) => {
    for (const item of items) {
      TriggerOverFlowFunctionality(Math.floor(item.contentRect?.width));
    }
  });
  if (jQuery('.menu').length !== 0) {
    observer.observe(jQuery('.menu')[0], { box: 'border-box' });
  }
};
