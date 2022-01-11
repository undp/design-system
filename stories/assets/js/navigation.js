import { getData } from './navigation_data';

var lang = 'english';

export const navigationInitialize = (locale) => {
  const $menu = $('.menu');
  const $menuItem = $('.menu li a');
  const $megaMenu = $('.show-mega');

  // calling ajax json
  lang = locale === 'en' ? 'english' : locale;
  getData(lang);

  $menuItem.on('mouseenter focus', function () {
    const id = $(this).parent().attr('data-menu-id');
    const $menuItemId = $(document).find(`[data-menu-item-id='${id}']`);
    $menuItemId.addClass('show-mega').siblings().removeClass('show-mega');
    $megaMenu.find('.sub-menu-content:first-child').addClass('active-content')
      .siblings().removeClass('active-content');
    $megaMenu.find('.submenu li:first-child').addClass('active').siblings().removeClass('active');
  });

  $('.mega-wrapper').mouseleave(function () {
    $(this).find('.mega-nav-option.show-mega').removeClass('show-mega');
  });

  $('.mega-wrapper').mouseenter(function () {
    $('.mega-wrapper').find(this).addClass('show-mega');
  });
  $menu.mouseleave(function (event) {
    if(event.type==='mouseleave'){
      const el=event.toElement;
        if(!el.classList.contains('mega-nav-option')){
          $('.mega-nav-option.show-mega').removeClass('show-mega');
        }
      }
  });

  $('.mega-wrapper').mouseleave(function () {
    $(this).find('.mega-nav-option.show-mega').removeClass('show-mega');
  });

  $('.mega-wrapper').on('mouseenter focus', '.submenu li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    const ID = $(this).attr('id');
    $(this).parents('.mega-wrapper').find(`[data-submenu-id='${ID}']`).addClass('active-content')
    .siblings().removeClass('active-content');
  });

  $(window).scroll(function() {
    var $scroll = $(window).scrollTop();
    if ($scroll >= 1) {
        $(".logo img").addClass("scrolled");
    } else {
        $(".logo img").removeClass("scrolled");
    }
  });

  $(document).on('click', '.mobile-links .cta__link', function () {
    const ID = $(this).attr('id');
    const TEXT = $(this).text();
    $('.mobile-mega-content').find('.sub-heading').text(TEXT);
    $('.mobile-mega-wrapper').find(`[data-mobile-id='${ID}']`).addClass('show-content');
    $('.mobile-links').addClass('hide');
    $('.mob-sub-menu').addClass('show');
  });

  $('.mob-lang-switcher').click(() => {
    $('.mob-sub-lang').addClass('show');
    $('.mobile-links').addClass('hide');
  });

  $('.back-nav').click(() => {
    $('.mob-sub-menu, .mob-sub-lang').removeClass('show');
    $('.mobile-mega-content').removeClass('show-content');
    $('.mobile-links').removeClass('hide');
  });
  $('.menu-hamburger').click(function (e) {
    e.stopImmediatePropagation();
    $('.mobile-nav').toggleClass('show');
    $('.mob-sub-menu').toggleClass('show');
    $(this).toggleClass('is-active');
    $('.back-nav').click();
  })
};
