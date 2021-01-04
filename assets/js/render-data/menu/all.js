const init = function () {
    const parentMenu = $('[data-modal-search]');
    const parentContent = $('[data-modal-search]');

    function renderMenu(type, parentMenu, parentContent) {
        const $parentMenu = $(`[${parentMenu}]`)
        // const $parentContent = $(`[${parentContent}]`)
        $.ajax({
            type: 'GET',
            url:`/assets/js/render-data/json/menu/${type}.json`,
            dataType: 'json',
            success: function (response) {
                console.log(response);
                console.log("full", item);
                response.forEach((item) => {
                    $parentMenu.append(`
                    <div class="cell large-auto  cell-menu opacity">
                        <ul class="menu">
                            ${item.menu.map((option, index) => {
                                return `<li class="${index === 0 ? 'active' : '' }" data-menu-option="${ option.menuOption }">
                                    ${option.external
                                    ? `<a class="text-link arrow-3 light-white" href="${ option.link }" target="_blank">${ option.name }<span class="arrow"></span></a>`
                                    : `<a href="${ option.link }" class="menu-item">${ option.name }</a>`}
                                    </li>`;     
                            })}
                        </ul>
                        <button class="show-on-focus text-link close-submenu">Close Submenu</button>
                    </div>
                    `);
                    // $parentContent.append(``);
                });
            }
        });
    }

    renderMenu('who-we-are', 'data-menu-who-we-are', '');
}

export default init;
