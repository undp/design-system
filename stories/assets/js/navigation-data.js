export const getData = (lang) => {
  $.ajax({
    method: 'GET',
    url: './js/navigation-data.json',
    dataType: 'json',
    success(res) {
      lang = lang || 'english';
      const resData = res.find((item) => item.language === lang);
      const $megaWrapper = $('.mega-wrapper');
      const $mobileMegaWrapper = $('.mobile-mega-wrapper');
      $megaWrapper.empty();
      $mobileMegaWrapper.empty();
      resData.data.forEach((item, index) => {
        const submenus = item.submenus
          .map((menu, index) => `<li id="${menu.link.id}-${item.id}" class="${
            index === 0 ? 'active' : ''
          }"><a tabindex="0" href="${menu.external_link ? menu.external_link : '#'}" class="sub-link">${menu.link.label}${menu.external_link ? '<span class="external-link"></span>' : ''}</a></li>`)
          .join(' ');

        const gridX = item.submenus
          .map((menu, index) => `<div class="${
            index === 0
              ? 'grid-x sub-menu-content active-content'
              : 'grid-x sub-menu-content'
          }" data-submenu-id="${menu.link.id}-${item.id}">
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
      .map((link) => `<li><a class="cta__link cta--space" href="#">${link.label}</a></li>`)
      .join(' ')
    : ''
}
                            </ul>
                            ${
  menu.linksCol2.length > 0
    ? `<ul class="list-col-second">
                                  ${menu.linksCol2
    .map((link) => `<li><a class="cta__link cta--space" href="#">${link.label}</a></li>`)
    .join(' ')
}
                              </ul>` : ''
}
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
                    <div class="cell large-12 mega-nav-option" data-menu-item-id="${item.id}">
                    <div class="grid-x">
                        <div class="cell large-3">
                          <ul class="submenu">
                              ${submenus}
                          </ul>
                        </div>
                        <div class="cell large-9">
                          ${gridX}
                        </div>
                        <button class="show-on-focus" aria-label="Close mega menu">Close mega menu</button>
                    </div>
           </div>
        `;
        $megaWrapper.append(renderHtml);

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
        $mobileMegaWrapper.append(renderMobileHtml);
      });
    },
  });
};
