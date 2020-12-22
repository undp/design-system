const init = function () {

    const countriesContainer = $('[data-countries]');

    $.ajax({
        type: 'GET',
        url: '/views/sql/queries.php',
        data: {
            type: 'countries'
        },
        dataType: 'json',
        success: function (response) {
            response.forEach((country) => {
                countriesContainer.append(`<div class="flex-container align-justify country-item" data-city-filters="${country.name.toLowerCase()} ${country.continent.toLowerCase()} ${country.office.toLowerCase()}">
                        <div class="country">${country.name}</div>
                        <div class="languages">
                            ${country.languages.split(',').map(country => {
                               return `<a class="language-link" href="#">${country}</a>`
                            })}
                        </div>
                    </div>`);
            });
        }

    });
}

export default init