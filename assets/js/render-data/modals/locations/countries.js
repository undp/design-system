const init = function () {
    const $parentContainer = $('.countries')

    $.ajax({
        type: 'POST',
        url: '../../json/modals/locations/countries.json',
        dataType: 'json',
        success: function(response){
            response.forEach((item) => {
                const languages = JSON.parse(item.languages)
                const countryItem = `
                    <div class="flex-container align-justify country-item"
                        data-city-filters="${ item.name.toLowerCase() } ${ item.continent.toLowerCase() } ${ item.office.toLowerCase() }">
                        <div class="country">${ item.name }</div>
                        <div class="languages">
                            ${languages.map(language => {
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
