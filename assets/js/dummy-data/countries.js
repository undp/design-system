import countries from "/data/modals/locations/countries";

const init = function () {
    const parentContainer = $('.countries')
    countries.forEach(country => {
        const languages = JSON.parse(country.languages)
        const countryItem = `
        <div class="flex-container align-justify country-item"
            data-city-filters="${ country.name.toLowerCase() } ${ country.continent.toLowerCase() } ${ country.office.toLowerCase() }">
            <div class="country">${ country.name }</div>
            <div class="languages">
                ${languages.map(language => {
                    return `<a class="language-link" href="${ language.url }">${ language.name }</a>`;    
                }).join('')}
            </div>
        </div>`;
        parentContainer.append(countryItem);
    })
}
export default init;