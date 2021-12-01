var lang = 'english';

const getData = () => {
  $.ajax({
    method: 'GET',
    url: './js/navigationData.json',
    dataType: 'json',
    success(res) {
      const resData = res.find((item) => item.language === lang);
      console.log(resData);
      // const menuData = resData.data.find((subItem) => subItem.id === id);
      const megaWrapper = $('.mega-wrapper');
      const mobileMegaWrapper = $('.mobile-mega-wrapper');
      megaWrapper.empty();
      mobileMegaWrapper.empty();
      resData.data.forEach((item, index) => {
        const submenus = item.submenus
          .map((menu, index) => `<li id="${menu.link.id}-${item.id}" class="${
            index === 0 ? 'active' : ''
          }"><a href="#" class="sub-link">${menu.link.label}</a></li>`)
          .join(' ');

        const gridX = item.submenus
          .map((menu, index) => `<div class="${
            index === 0
              ? 'grid-x sub-menu-content active-content'
              : 'grid-x sub-menu-content'
          }" data-id="${menu.link.id}-${item.id}">
                      <div class="${
  menu.image
    ? 'cell mega-sub-description large-6'
    : 'cell mega-sub-description large-10'
}">
                        <h3 class="mega-title">${menu.title}</h3>
                        <p class="mega-description">${menu.description}</p>
                        <div class="sub-sub-menu">
                            <ul class="list-col-first">
                            ${
  menu.linksCol1.length > 0
    ? menu.linksCol1
      .map((link) => `<li><a class="cta__link cta--arrow" href="#">${link.label}</a></li>`)
      .join(' ')
    : ''
}
                            </ul>
                            <ul class="list-col-second">
                            ${
  menu.linksCol2.length > 0
    ? menu.linksCol2
      .map((link) => `<li><a class="cta__link cta--arrow" href="#">${link.label}</a></li>`)
      .join(' ')
    : ''
}
                            </ul>
                        </div>
                      </div>
                      ${
  menu.image
    ? `<div class="cell large-6 mega-image"><img src="${menu.image}" alt="Author Image" class="image"></div>`
    : ''
}
                  </div>`)
          .join(' ');

        const renderHtml = `
                    <div class="cell large-12 mega-nav-option" menu-item-id="${item.id}">
                    <div class="grid-x">
                        <div class="cell large-3">
                          <ul class="submenu">
                              ${submenus}
                          </ul>
                        </div>
                        <div class="cell large-9">
                          ${gridX}
                        </div>
                    </div>
           </div>
        `;
        megaWrapper.append(renderHtml);

        // render mobile mega navs
        const renderMobileHtml = `
        <div class="mobile-mega-content" data-mobile-id="${item.id}">
          <h6 class="sub-heading">${item.title}</h6>
          ${item.submenus
    .map((submenu, index) => `<ul class="sub-sub-menus">
                      <li>
                        <span>${submenu.link.label}</span>
                        <ul>
                        ${[...submenu.linksCol1, ...submenu.linksCol2]
    .map((link, index) => `<li>
                            <a href="#">${link.label}</a>
                          </li>`)
    .join(' ')}
                        </ul>
                      </li>
                </ul>`)
    .join(' ')}
        </div>
        `;
        mobileMegaWrapper.append(renderMobileHtml);
      });
    },
    error(err) {
      console.log(err);
    },
  });
};


export const init = (locale) => {
  const menuItem = $('.menu-item');
  const megaNavOption = $('.mega-nav-option');
  const mobLinkWrapper = $('.mob-links');
  const submenuli = $('.submenu li');
  const midNav = $('.mid-nav');
  // calling ajax json
  lang = locale === 'en' ? 'english' : locale;
  getData();

  menuItem.on('mouseenter', function () {
    // megaNavOption.addClass('show-mega');
    const id = $(this).attr('id');
    $(document).find(`[menu-item-id='${id}']`).siblings().removeClass('show-mega');
    $(document).find(`[menu-item-id='${id}']`).addClass('show-mega');
    $('.show-mega').find('.sub-menu-content:first-child').addClass('active-content');
    $('.show-mega').find('.sub-menu-content:first-child').siblings().removeClass('active-content');
    $('.show-mega').find('.submenu li:first-child').addClass('active');
    $('.show-mega').find('.submenu li:first-child').siblings().removeClass('active');
  });

  $('.mega-wrapper').mouseleave(function () {
    $(this).find('.mega-nav-option.show-mega').removeClass('show-mega');
  });

  midNav.mouseleave(() => {
    // $('.mega-nav-option').removeClass('show-mega');
  });

  $('.mega-wrapper').mouseenter(function () {
    $('.mega-wrapper').find(this).addClass('show-mega');
  });

  $('.mega-wrapper').on('mouseenter', '.submenu li', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    const id = $(this).attr('id');
    $(this).parents('.mega-wrapper').find(`[data-id='${id}']`).addClass('active-content');
    $(this).parents('.mega-wrapper').find(`[data-id='${id}']`).siblings()
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
