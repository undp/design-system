import { getData } from './navigation_data';

var lang = 'english';

export const navigationInitialize = (locale) => {
  const $menu = $('.menu');
  const $menuItem = $('.menu li');
  const $megaMenu = $('.show-mega');

  // calling ajax json
  lang = locale === 'en' ? 'english' : locale;
  getData(lang);

  $menuItem.on('mouseenter', function () {
    const id = $(this).attr('id');
    const $menuItem = $(document).find(`[data-menu-item-id='${id}']`);
    $menuItem.siblings().removeClass('show-mega');
    $menuItem.addClass('show-mega');
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

  $(document).on('click', '.mob-links .cta__link', function () {
    const ID = $(this).attr('id');
    const TEXT = $(this).text();
    $('.mobile-mega-content').find('.sub-heading').text(TEXT);
    $('.mobile-mega-wrapper').find(`[data-mobile-id='${ID}']`).addClass('show-content');
    $('.mob-links').addClass('hide-mob-links');
    $('.mob-sub-menu').addClass('show-sub');
  });

  $('.mob-lang-switcher').click(() => {
    $('.mob-sub-lang').addClass('show-sub');
    $('.mob-links').addClass('hide-mob-links');
  });

  $('.back-nav').click(() => {
    $('.mob-sub-menu, .mob-sub-lang').removeClass('show-sub');
    $('.mobile-mega-content').removeClass('show-content');
    $('.mob-links').removeClass('hide-mob-links');
  });
  $('header .menu-icon').click(function (e) {
    e.stopImmediatePropagation();
    $('.mobile-nav').toggleClass('show-mobile-nav');
    $('.mob-sub-menu').toggleClass('show-sub');
    $(this).toggleClass('open');
    $('.back-nav').click();
  })
};
