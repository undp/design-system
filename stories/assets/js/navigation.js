import { getData } from './navigationData';

var lang = 'english';

export const init = (locale) => {
  const menuItem = $('.menu-item');
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
    const menuItem = $(document).find(`[menu-item-id='${id}']`);
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

  $('.mega-wrapper').on('mouseenter', '.submenu li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    const id = $(this).attr('id');
    $(this).parents('.mega-wrapper').find(`[data-id='${id}']`).addClass('active-content')
      .siblings()
      .removeClass('active-content');
  });

  $(document).on('click', '.mob-links .cta__link', function () {
    const id = $(this).attr('id');
    const text = $(this).text();
    $('.mobile-mega-content').find('.sub-heading').text(text);
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
