export const navigationInitialize = (locale) => {
  const $menu = jQuery('.menu');
  const $menuItem = jQuery('.menu li a');
  const $megaMenu = jQuery('.show-mega');

  $menuItem.on('mouseenter click', function (event) {
    const navId = jQuery(this).parent().attr('data-menu-id');
    const $menuItemId = jQuery(document).find(`[data-menu-item-id='${navId}']`);
    $menuItemId.addClass('show-mega').removeClass('hide').siblings().removeClass('show-mega')
      .addClass('no-effect');
    $megaMenu.find('.sub-menu-content:first-of-type').addClass('active-content')
      .siblings().removeClass('active-content');
    $megaMenu.find('.submenu li:first-of-type').addClass('active').siblings().removeClass('active');

    if ($menuItemId.hasClass('show-mega')) {
      $menuItem.attr('tabIndex', '-1');
      jQuery('.logo, .top-right button').attr('tabIndex', '-1');
    } else {
      $menuItem.attr('tabIndex', '0');
      jQuery('.logo, .top-right button').attr('tabIndex', '0');
    }
  });

  $menu.on('mouseenter', (event) => {
    jQuery('.mega-nav-option').removeClass('no-effect');
  });

  $menuItem.on('mouseleave', (event) => {
    $menuItem.attr('tabIndex', '0');
    jQuery('.logo, .top-right button').attr('tabIndex', '0');
  });

  jQuery(document).on('click', '.show-on-focus', (event) => {
    jQuery('.mega-nav-option').removeClass('show-mega');
    $menuItem.attr('tabIndex', '0').focus();
    $menuItem.first().focus();
    jQuery('.logo, .top-right button').attr('tabIndex', '0');
    jQuery('.submenu li a').attr('tabIndex', '0');
    jQuery('.sub-sub-menu li').find('a').attr('tabIndex', '-1');
  });

  jQuery('.mega-wrapper').mouseenter(function () {
    jQuery('.mega-wrapper').find(this).addClass('show-mega').addClass('show-mega-forward');
    setTimeout(() => {
      jQuery('.mega-nav-option.show-mega').removeClass('show-mega-forward');
    }, 300);
  });

  $menu.mouseleave((event) => {
    jQuery('.mega-nav-option').removeClass('no-effect');
    if (event.type === 'mouseleave') {
      const el = event.toElement;
      if (el != null && !el.classList.contains('mega-nav-option')) {
        if (jQuery('.mega-nav-option').hasClass('show-mega')) {
          jQuery('.mega-nav-option.show-mega').removeClass('show-mega').addClass('show-mega-back');
          setTimeout(() => {
            jQuery('.mega-nav-option.show-mega-back').removeClass('show-mega-back');
          }, 300);
        }
      }
    }
  });

  jQuery('.mega-wrapper').mouseleave(function () {
    jQuery('.mega-nav-option').removeClass('no-effect');
    jQuery(this).find('.mega-nav-option.show-mega').removeClass('show-mega no-effect').addClass('show-mega-back');
    setTimeout(() => {
      jQuery('.mega-nav-option.show-mega-back').removeClass('show-mega-back');
    }, 300);
  });

  jQuery('.mega-wrapper').on('mouseenter focus keydown', '.submenu li', function (e) {
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

  jQuery('.mega-wrapper').on('focus keydown', '.sub-sub-menu ul li a', (e) => {
    e.stopImmediatePropagation();
    var key = e.which;
    if (key == 37) {
      jQuery('.submenu li.active').find('a').focus();
      jQuery('.submenu li').find('a').attr('tabIndex', '0');
      jQuery('.sub-sub-menu li').find('a').attr('tabIndex', '-1');
    }
  });

  jQuery('.mega-wrapper').on('focus keydown', '.sub-sub-menu ul:last-of-type li:last-of-type a:last-of-type', (e) => {
    e.stopImmediatePropagation();
    jQuery('.submenu li a').attr('tabIndex', '0');
    var key = e.which;
    if (key == 9) {
      jQuery('.submenu li.active').next().find('a').focus();
    }
  });

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
};

/**
 * Language switch toggle effect.
 */
export const languageSwitchToggle = () => {
  jQuery('.mob-lang-switcher').on('click', (ev) => {
    ev.preventDefault();
    jQuery('.mob-sub-lang').addClass('show');
    jQuery('.mobile-links').addClass('hide');
  });
};

/**
 * Scrolled logo effect.
 */
export const scrolledLogoEffect = () => {
  // Add a class to the logo if the page is scrolled.
  // This effect changes the height of the logo.
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
export const navigationMultiLevel = () => {
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
