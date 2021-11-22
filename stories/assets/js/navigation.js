let lang = 'english';
let subMenus = [];
export const init = (locale) => {
  const menuItem = $('.menu-item');
  const megaNavOption = $('.mega-nav-option');
  const mobLinkWrapper = $('.mob-links');
  const submenuli = $('.submenu li');
  const midNav = $('.mid-nav');

  const getSubMenuData = (id) => {
    const data = subMenus.find((sub) => sub.link.id === id);
    if (!data.image) {
      $('.mega-nav-option .mega-sub-description').removeClass('large-6').addClass('large-10');
      $('.mega-nav-option .mega-image').hide();
    } else {
      $('.mega-nav-option .mega-sub-description').removeClass('large-10').addClass('large-6');
      $('.mega-nav-option .mega-image').show();
    }
    $('.mega-nav-option').find('.list-col-first').empty();
    $('.mega-nav-option').find('.list-col-second').empty();
    data.linksCol1.forEach((item) => {
      $('.mega-nav-option').find('.list-col-first').append(`<li><a class='cta__link cta--arrow'  href="#">${item.label}</a></li>`);
    });
    data.linksCol2.forEach((item) => {
      $('.mega-nav-option').find('.list-col-second').append(`<li><a class='cta__link cta--arrow'  href="#">${item.label}</a></li>`);
    });

    $('.mega-nav-option').find('.mega-title').text(data.title);
    $('.mega-nav-option').find('.mega-description').text(data.description);
    $('.mega-nav-option').find('.image').attr('src', data.image);
  };

  const getData = (id) => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:6006/js/navigationData.json',
      dataType: 'json',
      success(res) {
        const resData = res.find((item) => item.language === lang);
        const menuData = resData.data.find((subItem) => subItem.id === id);
        subMenus = menuData.submenus;
        $('.mega-nav-option').find('.submenu').empty();
        menuData.submenus.forEach((item) => {
          $('.mega-nav-option').find('.submenu').append(`<li><a href="#" class="sub-link" id="${item.link.id}">${item.link.label}</a></li>`);
        });
        $('.mega-nav-option').find('.list-col-first').empty();
        $('.mega-nav-option').find('.list-col-second').empty();

        menuData.submenus[0].linksCol1.forEach((item) => {
          $('.mega-nav-option').find('.list-col-first').append(`<li><a class='cta__link cta--arrow'  href="#">${item.label}</a></li>`);
        });
        menuData.submenus[0].linksCol2.forEach((item) => {
          $('.mega-nav-option').find('.list-col-second').append(`<li><a class='cta__link cta--arrow'  href="#">${item.label}</a></li>`);
        });

        $('.mega-nav-option').find('.mega-title').text(menuData.submenus[0].title);
        $('.mega-nav-option').find('.mega-description').text(menuData.submenus[0].description);
        if (!menuData.submenus[0].image) {
          $('.mega-nav-option .mega-sub-description').removeClass('large-6');
          $('.mega-nav-option .mega-sub-description').addClass('large-10');
          $('.mega-nav-option .mega-image').hide();
        } else {
          $('.mega-nav-option .mega-sub-description').removeClass('large-10');
          $('.mega-nav-option .mega-sub-description').addClass('large-6');
          $('.mega-nav-option .mega-image').show();
        }
        $('.mega-nav-option').find('.image').attr('src', menuData.submenus[0].image);
        $('.mega-nav-option').find('.submenu li:first-child').addClass('active');
      },
      error(err) {
        console.log(err);
      },
    });
  };

  const getMobileData = (id) => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:6006/js/navigationData.json',
      dataType: 'json',
      success(res) {
        const resData = res.find((item) => item.language === lang);
        const menuData = resData.data.find((subItem) => subItem.id === id);
        subMenus = menuData.submenus;
        $('.mobile-nav').find('.sub-sub-menus').empty();

        menuData.submenus.forEach((item) => {
          let cols = '';
          [...item.linksCol1, ...item.linksCol2].forEach((menu) => {
            cols += `<li><a href="#">${menu.label}</a></li>`;
          });
          $('.mobile-nav').find('.sub-sub-menus').append(`<li><span>${item.link.label}</span><ul>${cols}</ul></li>`);
        });
        $('.mega-nav-option').find('.list-col-first').empty();
        $('.mega-nav-option').find('.list-col-second').empty();

        $('.mobile-nav').find('.sub-heading').text(menuData.submenus[0].title);
      },
      error(err) {
        console.log(err);
      },
    });
  };

  menuItem.mouseenter(function () {
    megaNavOption.addClass('show-mega');
    const id = $(this).attr('id');
    getData(id);
    const menuItemId = $(this).attr('id');
    megaNavOption.attr('menu-item-id', menuItemId);
  });

  menuItem.mouseleave(() => {
    megaNavOption.removeAttr('menu-item-id');
  });

  midNav.mouseleave(() => {
    if (megaNavOption.hasClass('show-mega')) {
      megaNavOption.removeClass('show-mega');
    }
  });

  megaNavOption.mouseenter(() => {
    megaNavOption.addClass('show-mega');
  });

  megaNavOption.mouseleave(() => {
    megaNavOption.removeClass('show-mega');
    megaNavOption.removeAttr('menu-item-id');
  });
  lang = locale === 'en' ? 'english' : locale;

  megaNavOption.on('mouseenter', '.sub-link', function () {
    const id = $(this).attr('id');
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    getSubMenuData(id);
  });

  mobLinkWrapper.on('click', '.cta__link', function () {
    const id = $(this).attr('id');
    getMobileData(id);
  });
  submenuli.mouseenter(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });
};
