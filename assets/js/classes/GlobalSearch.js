class GlobalSearch {
    constructor() {
        this.$parentContainer = $('[data-modal-search]');
    }

    init() {
        this.bindEvents();
        this.populateQuickLinks()
    }

    bindEvents() {

    }

    populateQuickLinks() {
        $.ajax({
            type: 'GET',
            url: '/assets/js/render-data/json-files/modals/search/search.json',
            dataType: 'json',
            success: (response) => {
                response.forEach((item) => {
                    this.$parentContainer.append(` 
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

    loadSelectOptions(select, type) {
        let $parentContainer = $(`#${select} .options`);
        let jsonUrl = ''

        if(type === 'regions') {
            jsonUrl = `/assets/js/render-data/json-files/global/${type}.json`
        } else {
            jsonUrl = `/assets/js/render-data/json-files/modals/locations/${type}.json`
        }

        $.ajax({
            type: 'GET',
            url: jsonUrl,
            dataType: 'json',
            success: function(response){
                response.forEach((item) => {
                    const optionHTML = `
                    <label class="checkbox-item">
                        <input type="checkbox" value="${ item.value }">
                        <span class="checkmark"></span>
                        <span class="name">${ item.name }</span>
                    </label>`;
                    $parentContainer.append(optionHTML);
                });
            }
        });
    }
}

export default GlobalSearch;