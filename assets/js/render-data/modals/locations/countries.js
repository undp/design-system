const init = function () {
    const $parentContainer = $('.countries')

    $.ajax({
        type: 'GET',
        url: '/assets/js/render-data/json/modals/locations/countries.json',
        dataType: 'json',
        success: function(response){
            response.forEach((item) => {
                const countryItem = `
                    <div class="flex-container align-justify country-item"
                        data-city-filters="${ item.name.toLowerCase() } ${ item.continent.toLowerCase() } ${ item.office.toLowerCase() }">
                        <div class="country">${ item.name }</div>
                        <div class="languages">
                            ${item.languages.map(language => {
                                return `
                                    <a class="text-link arrow-3" href="${ language.url }">${ language.name }<span class="arrow"></span></a>`;
                            }).join('')}
                        </div>
                    </div>`;
                $parentContainer.append(countryItem);
            });
        }
    });
}
export default init;
