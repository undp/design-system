const init = function () {
    function loadCheckboxOptions(type) {
        let $parentContainer = $(`[data-filter-checkbox] .checkbox-group[data-type="${type}"]`);

        $.ajax({
            type: 'GET',
            url: `/assets/js/render-data/json/modals/locations/${type}s.json`,
            dataType: 'json',
            success: function(response){
                response.forEach((item) => {
                    const regionItem = `
                    <label class="checkbox-item">
                        <input type="checkbox" value="${ item.value }">
                        ${ item.name }
                        <span class="checkmark"></span>
                    </label>`;
                    $parentContainer.append(regionItem);
                });
            }
        });
    }

    loadCheckboxOptions('region')
    loadCheckboxOptions('office')

}

export default init
