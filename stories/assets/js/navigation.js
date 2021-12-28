import { getData } from './navigationData';

var lang = 'english';

export const init = (locale) => {
  const $menu = $('.menu');
  const menuItem = $('.menu li');
  const megaNavOption = $('.mega-nav-option');
  const mobLinkWrapper = $('.mob-links');
  const submenuli = $('.submenu li');
  const midNav = $('.mid-nav');
  const megaMenu = $('.show-mega');

  // calling ajax json
  lang = locale === 'en' ? 'english' : locale;
  getData(lang);

  menuItem.on('mouseenter', function () {
    const id = $(this).attr('id');
    const menuItem = $(document).find(`[data-menu-item-id='${id}']`);
    menuItem.siblings().removeClass('show-mega');
    menuItem.addClass('show-mega');
    megaMenu.find('.sub-menu-content:first-child').addClass('active-content')
      .siblings().removeClass('active-content');
    megaMenu.find('.submenu li:first-child').addClass('active').siblings().removeClass('active');
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
    const id = $(this).attr('id');
    $(this).parents('.mega-wrapper').find(`[data-submenu-id='${id}']`).addClass('active-content')
    .siblings().removeClass('active-content');
  });


  $(document).on('click', '.mob-links .cta__link', function () {
    const id = $(this).attr('id');
    const text = $(this).text();
    console.log(text)
    $('.mobile-mega-content').find('.sub-heading').text(text);
    console.log($('.mobile-mega-wrapper').find(`[data-mobile-id='${id}']`));
    $('.mobile-mega-wrapper').find(`[data-mobile-id='${id}']`).addClass('show-content');
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
  $('header .icon-bar').click(function () {
    $('.mobile-nav').addClass('show-mobile-nav');
    $('.mob-sub-menu').addClass('show-sub');
    $(this).hide();
    $(this).siblings('.icon-close').show();
    $('.back-nav').click();
  });
  $('header .icon-close').click(function () {
    $('.mobile-nav').removeClass('show-mobile-nav');
    $('.mob-sub-menu').removeClass('show-sub');
    $(this).hide();
    $(this).siblings('.icon-bar').show();
  });
};
