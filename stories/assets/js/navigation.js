
export const navigationInitialize = (locale) => {
  const $menu = $('.menu');
  const $menuItem = $('.menu li a');
  const $megaMenu = $('.show-mega');

  $menuItem.on('mouseenter click', function (event) {
    const navId = $(this).parent().attr('data-menu-id');
    const $menuItemId = $(document).find(`[data-menu-item-id='${navId}']`);
    $menuItemId.addClass('show-mega').removeClass('hide').siblings().removeClass('show-mega').addClass('no-effect');
    $megaMenu.find('.sub-menu-content:first-child').addClass('active-content')
      .siblings().removeClass('active-content');
    $megaMenu.find('.submenu li:first-child').addClass('active').siblings().removeClass('active');

    if($menuItemId.hasClass('show-mega'))
    {
      $menuItem.attr("tabIndex","-1");
      $('.logo, .top-right button').attr("tabIndex","-1");
    }else{
      $menuItem.attr("tabIndex","0");
      $('.logo, .top-right button').attr("tabIndex","0");
    }
  });
  $menu.on('mouseenter', function (event) {
    $('.mega-nav-option').removeClass('no-effect');
  });
  $menuItem.on('mouseleave', function (event) {
    $menuItem.attr("tabIndex","0");
    $('.logo, .top-right button').attr("tabIndex","0");
  });
  $(document).on('click', '.show-on-focus', function () {
    $('.mega-nav-option').removeClass('show-mega');
    $menuItem.attr("tabIndex","0").focus();
    $menuItem.first().focus();
    $('.logo, .top-right button').attr("tabIndex","0");
    $('.submenu li a').attr("tabIndex","0");
    $('.sub-sub-menu li').find('a').attr("tabIndex","-1");
  });

  $('.mega-wrapper').mouseenter(function () {
    $('.mega-wrapper').find(this).addClass('show-mega');
  });
  $menu.mouseleave((event) => {
    $('.mega-nav-option').removeClass('no-effect');
    if (event.type === 'mouseleave') {
      const el = event.toElement;
      if (el != null && !el.classList.contains('mega-nav-option')) { 
        if($('.mega-nav-option').hasClass('show-mega')){
          $('.mega-nav-option.show-mega').removeClass('show-mega').addClass('show-mega-back');
          setTimeout(function () {
            $('.mega-nav-option.show-mega-back').removeClass('show-mega-back');
          }, 300);
        }
      }
    }
  });

  $('.mega-wrapper').mouseleave(function () {
    $('.mega-nav-option').removeClass('no-effect');
    $(this).find('.mega-nav-option.show-mega').removeClass('show-mega no-effect').addClass('show-mega-back');
    setTimeout(function () {
      $('.mega-nav-option.show-mega-back').removeClass('show-mega-back');
    }, 300);
  });

  $('.mega-wrapper').on('mouseenter focus keydown', '.submenu li', function (e) {
    $('.sub-sub-menu li').find('a').attr("tabIndex","-1");
    $(this).addClass('active').siblings().removeClass('active');
    const navId = $(this).attr('id');
    $(this).parents('.mega-wrapper').find(`[data-submenu-id='${navId}']`).addClass('active-content')
      .siblings().removeClass('active-content');
      e.stopImmediatePropagation();
      var key = e.which;
      if(key == 39){
        $('.submenu li').find('a').attr("tabIndex","-1");
        $(this).parents('.mega-wrapper').find(`[data-submenu-id='${navId}']`).addClass('active-content')
        .siblings().removeClass('active-content').find('a').attr("tabIndex","0");
        $('.sub-sub-menu li').find('a').attr("tabIndex","0");
        $(".sub-sub-menu ul:first-child li:first-child a").focus();
      }
  });

  $('.mega-wrapper').on('focus keydown', '.sub-sub-menu ul li a', function (e) {
    e.stopImmediatePropagation();
    var key = e.which;
    if(key == 37){
      $(".submenu li.active").find('a').focus();  
      $('.submenu li').find('a').attr("tabIndex","0");
      $('.sub-sub-menu li').find('a').attr("tabIndex","-1");
    }
  });

  $('.mega-wrapper').on('focus keydown', '.sub-sub-menu ul:last-child li:last-child a:last-child', function (e) {
    e.stopImmediatePropagation();
    $(".submenu li a").attr("tabIndex","0");
    var key = e.which;
    if(key == 9){
      $(".submenu li.active").next().find('a').focus();  
    }
  });

  $(window).scroll(() => {
    var winScroll = $(window).scrollTop();
    if (winScroll >= 1) {
      $('.logo img').addClass('scrolled');
    } else {
      $('.logo img').removeClass('scrolled');
    }
  });

  $(document).on('click', '.mobile-links .cta__link', function (e) {
    const navId = $(this).attr('id');
    const navText = $(this).text();
    e.preventDefault();
    $('.mobile-mega-content').find('.sub-heading').text(navText);
    $('.mobile-mega-wrapper').find(`[data-mobile-id='${navId}']`).addClass('show-content');
    $('.mobile-links').addClass('hide');
    $('.mobile-sub-menu').addClass('show');
  });

  $('.mob-lang-switcher').on('click', function(ev) {
    ev.preventDefault();
    $('.mob-sub-lang').addClass('show');
    $('.mobile-links').addClass('hide');
  });

  $('.back-nav').on('click',() => {
    $('.mobile-sub-menu, .mob-sub-lang').removeClass('show');
    $('.mobile-mega-content').removeClass('show-content');
    $('.mobile-links').removeClass('hide');
  });
  $('.menu-hamburger').on('click', function(e) {
    e.stopImmediatePropagation();
    $('.mobile-nav').toggleClass('show');
    $('.mobile-sub-menu').toggleClass('show');
    $(this).toggleClass('is-active');
    $('.back-nav').click();
  });

  const headerClass=localStorage.getItem('current-nav');
  if (headerClass == 'global-header') {
    $('.global-header').removeClass('global-load-animation');
    $('.country-load-animation').addClass('run-animation');
    setTimeout(function () {
      $('.country-load-animation.run-animation').removeClass('country-load-animation run-animation').addClass('show-content');
    }, 800);
    setTimeout(function () {
      $('.country-header').removeClass('show-content');
      localStorage.setItem("current-nav", document.getElementsByTagName("header")[0].classList[0]);
    }, 1000);
  } else {
    $('.country-header').removeClass('country-load-animation');
    $('.global-load-animation').addClass('run-animation');
    setTimeout(function () {
      $('.global-load-animation.run-animation').removeClass('global-load-animation run-animation').addClass('show-content');
    }, 800);
    setTimeout(function () {
      $('.global-header').removeClass('show-content');
      localStorage.setItem("current-nav", document.getElementsByTagName("header")[0].classList[0]);
    }, 1000);
  }
};
