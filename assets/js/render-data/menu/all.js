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

                //second menu
                $parentContainer.append(`
                <div class="cell large-auto  cell-menu opacity">
                    <ul class="menu">
                        ${response.menus.map((option, index) => {
                            return `<li class="${index === 0 ? 'active' : '' }" data-menu-option="${ option.menuOption }">
                                ${option.external
                                ? `<a class="text-link arrow-3 light-white" href="${ option.link }" target="_blank">${ option.name } <span>${ arrowExternal.html() }</span></a>`
                                : `<a href="${ option.link }" class="menu-item">${ option.name }</a>`}
                                </li>`;     
                        }).join('')}
                    </ul>
                    <button class="show-on-focus text-link close-submenu">Close Submenu</button>
                </div>
                `);

                //content and third menu
                $parentContainer.append(`
                <div class="cell large-auto opacity" data-container-content>
                    ${response.content.map((item, index) => {
                        return  `
                        <div id="${ item.contentId }" class="grid-x modal-nav-content ${index > 0 ? 'hide' : '' }">
                            ${$.isArray(item.links[0])
                            
                                ? `<div class="cell medium-8 content-text multiple-columns">
                                        <h2 class="title">${ item.title }</h2>
                                        <p class="big-copy description">${ item.description }</p>
                                    </div>
                                    <div class="cell content-text">
                                        <div class="grid-x">
                                            ${item.links.map(linkGroup => {
                                                return `
                                                    <div class="links medium-6">
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
                            
                                : `<div class="cell large-auto content-text" > 
                                       <h2 class="title"> ${ item.title }</h2>
                                       <p class="big-copy description">${ item.description }</p>
                                       <div class="links">
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
                                        </div>
                                    </div>
                                    <div class="cell large-auto flex-container align-right content-image">
                                        <img class="image lazy" data-src="${ item.image.link }" alt="${ item.image.alt }">
                                    </div>`
                            }
                        </div>`;
                    }).join('')}
                </div>`);


                //menu mobile
                $mobileParentContainer.append(`
                ${response.menus.map((option) => {
                    let subLinks = response.content.filter(content => content.contentId === option.menuOption)[0]
                    
                    if($.isArray(subLinks.links[0])) {
                        subLinks.links = [].concat.apply([], subLinks.links)    
                    }
                    return `<li class="menu-item">
                    ${option.external 
                        ? `<a class="menu-item-title text-link arrow-3" href="${ option.link }" target="_blank">
                                ${ option.name }
                                <span>${ arrowExternal.html() }</span>
                           </a>`
                        : `<a class="menu-item-title" href="${ option.link }">${ option.name }</a>`}
                    
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
