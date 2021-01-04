const init = function () {
    function renderMenu(type, parentContainer) {
        const $parentContainer = $(`[${parentContainer}]`)
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
                                ? `<a class="text-link arrow-3 light-white" href="${ option.link }" target="_blank">${ option.name }<span class="arrow"></span></a>`
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
                                    
                                    ${item.links.map(linkGroup => {
                                        return `
                                        <div class="cell medium-6 content-text">
                                            <div class="links">
                                                ${linkGroup.map(link => {
                                                    if(link.external){
                                                        return `<div class="text-link-inline">
                                                            <a class="text-link arrow-3" href="${ link.link }" target="_blank">
                                                                ${ link.name }
                                                                <span class="arrow"></span>
                                                            </a>
                                                        </div>`; 
                                                    }else {
                                                        return `<a class="text-link arrow-1" href="${ link.link }">
                                                            ${ link.name }
                                                            <img src="../../../../assets/images/arrows/btn-arrow-red.svg" alt="dsjgdios">
                                                        </a>`
                                                    }
                                                }).join('')}
                                            </div>
                                        </div>`;      
                                    }).join('')}`
                            
                                : `<div class="cell large-auto content-text" > 
                                       <h2 class="title"> ${ item.title }</h2>
                                       <p class="big-copy description">${ item.description }</p>
                                       <div class="links">
                                            ${item.links.map(link => {
                                            if (link.external) {
                                                return `<div class="text-link-inline">
                                                            <a class="text-link arrow-3" href="${ link.link }" target="_blank">
                                                                ${ link.name }
                                                                <span class="arrow"></span>
                                                            </a>
                                                        </div>`; 
                                            } else {
                                                return `<a class="text-link arrow-1" href="${ link.link }">
                                                            ${ link.name }
                                                                <img src="../../../../assets/images/arrows/btn-arrow-red.svg" alt="dsjgdios">
                                                        </a>`;
                                            }
                                        }).join('')}
                                        </div>
                                    </div>
                                    <div class="cell large-auto flex-container align-right content-image">
                                        <img class="image" src="${ item.image.link }" alt="${ item.image.alt }">
                                    </div>`
                            }
                        </div>`;
                    }).join('')}
                </div>`);
            }
        });
    }

    renderMenu('who-we-are', 'data-menu-who-we-are');
    renderMenu('what-we-do', 'data-menu-what-we-do');
    renderMenu('our-impact', 'data-menu-our-impact');
    renderMenu('get-involved', 'data-menu-get-involved');
}

export default init;
