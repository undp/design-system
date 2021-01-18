const init = function () {
    const arrowExternal = $('[data-arrow-external]');
    const arrowRight = $('[data-arrow-right]');
    function renderMenu(type, parentContainer, mobileParentContainer) {
        const $parentContainer = $(`[${parentContainer}]`)
        const $mobileParentContainer = $(`[${mobileParentContainer}]`)

        $.ajax({
            type: 'GET',
            url:`/assets/js/render-data/json/menu/${type}.json`,
            dataType: 'json',
            success: function (response) {
                // Sub menu
                $parentContainer.find('ul.menu').append(`
                    ${response.menus.map((option, index) => {
                        return `<li class="${index === 0 ? 'active' : '' }" data-menu-option="${ option.menuOption }">
                            ${option.external
                            ? `<a class="text-link arrow-3 light-white" href="${ option.pageLink }" target="_blank">${ option.name } <span>${ arrowExternal.html() }</span></a>`
                            : `<a href="${ option.pageLink }" class="menu-item">${ option.name }</a>`}
                            </li>`;     
                    }).join('')}
                `);

                // Content and third menu
                $parentContainer.find('.modal-nav-content').append(`
                    ${response.content.map((item, index) => {
                        // Link list can be an array of links
                        // or an array of arrays for multicolumn layout, 1 array per column
                        const isLinkListArray = $.isArray(item.links[0]);
                        const hasImage = (item.image.link !== undefined)
                        
                        return  `
                        <div id="${ item.contentId }" class="grid-x ${index > 0 ? 'hide' : '' }">
                            <div class="cell large-auto content-text ${!hasImage ? 'no-image' : ''}">
                                <h2 class="title"><a href="${ item.pageLink }">${ item.title }</a></h2>
                                <p class="description">${ item.description }</p>
                                ${isLinkListArray
                                ? `<div class="cell ${isLinkListArray ? 'multiple-column' : ''}">
                                    <div class="grid-x">
                                        ${item.links.map(linkGroup => {
                                            return `
                                                <div class="links large-auto">
                                                    ${linkGroup.map(link => {
                                                        if(link.external){
                                                            return `<div class="text-link-inline">
                                                                <a class="text-link arrow-3" href="${ link.link }" target="_blank">
                                                                    <span>${ link.name }</span>
                                                                    <span>${ arrowExternal.html() }</span>
                                                                </a>
                                                            </div>`; 
                                                        }else {
                                                            return `<a class="text-link arrow-1" href="${ link.link }">
                                                                <span>${ link.name } </span> 
                                                                 <span>${ arrowRight.html() }</span>
                                                            </a>`
                                                        }
                                                    }).join('')}
                                                </div>`;      
                                        }).join('')}
                                    </div>
                                </div>`
                                : `<div class="links">
                                        ${item.links.map(link => {
                                            if (link.external) {
                                                return `<div class="text-link-inline">
                                                            <a class="text-link arrow-3" href="${ link.link }" target="_blank">
                                                                <span>${ link.name }</span>
                                                                 <span>${ arrowExternal.html() }</span>
                                                            </a>
                                                        </div>`; 
                                            } else {
                                                return `<a class="text-link arrow-1" href="${ link.link }">
                                                            <span>${ link.name }</span>
                                                            <span>${ arrowRight.html() }</span>
                                                        </a>`;
                                            }
                                        }).join('')}
                                   </div>`
                                }
                            </div>
                            ${hasImage
                            ? `<div class="cell large-auto flex-container align-right content-image">
                                <img class="image lazy" data-src="${item.image.link}" alt="${item.image.alt}">
                            </div>` : ''}
                        </div>`;
                    }).join('')}
                `);

                //menu mobile
                $mobileParentContainer.append(`
                ${response.menus.map((option) => {
                    let subLinks = response.content.filter(content => content.contentId === option.menuOption)[0]
                    
                    if($.isArray(subLinks.links[0])) {
                        subLinks.links = [].concat.apply([], subLinks.links)    
                    }
                    return `<li class="menu-item">
                    ${option.external 
                        ? `<a class="menu-item-title text-link arrow-3" href="${ option.pageLink }" target="_blank">
                                ${ option.name }
                                <span>${ arrowExternal.html() }</span>
                           </a>`
                        : `<a class="menu-item-title" href="${ option.pageLink }">${ option.name }</a>`}
                    
                    <ul class="submenu">
                        ${ subLinks.links.map((link) => {
                         return `${ link.external 
                             ? `<li><a class="text-link arrow-3" href="${ link.link }" target="_blank">${ link.name }  <span>${ arrowExternal.html() }</span></a></li>`
                             : `<li><a class="text-link arrow-1" href="${ link.link }">${ link.name }</a></li>`}`   
                        }).join('')}
                    </ul>
                </li>`
                }).join('')} 
               `)
            }
        });
    }

    renderMenu('who-we-are', 'data-menu-who-we-are','data-mobile-menu-who-we-are');
    renderMenu('what-we-do', 'data-menu-what-we-do', 'data-mobile-menu-what-we-do');
    renderMenu('our-impact', 'data-menu-our-impact', 'data-mobile-menu-our-impact');
    renderMenu('get-involved', 'data-menu-get-involved', 'data-mobile-menu-get-involved');
}

export default init;
