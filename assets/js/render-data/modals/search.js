const init = function () {
    const $parentContainer = $('[data-modal-search]');

    $.ajax({
        type: 'POST',
        url: '/assets/js/render-data/json/modals/search/search.json',
        dataType: 'json',
        success: function(response){
            response.forEach((item) => {
                $parentContainer.append(` 
                <div class="cell large-6">
                    <div class="list-popular-search">
                        <h2 class="title">${ item.name }</h2>
                        <ul class="list uppercase">
                            ${item.links.map(link => {
                                return `<li><a href="${ link.url }">${ link.name }</a></li>`
                            }).join('')}
                        </ul>
                    </div>
                </div>`);
            });
        }
    });
}

export default init;
