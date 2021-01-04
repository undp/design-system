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
                                return `<a class="language-link" href="${ language.url }">${ language.name }</a>`;
                            }).join('')}
                        </div>
                    </div>`;
                $parentContainer.append(countryItem);
            });
        }
    });
}
export default init;
