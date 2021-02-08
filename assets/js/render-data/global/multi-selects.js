const init = function () {
    loadSelectItems('regions-select', 'regions')
    loadSelectItems('office-type-select', 'offices')
    loadSelectItems('content-type-select', 'content-types')

    function loadSelectItems(select, type) {
        let $parentContainer = $(`#${select} .options`);
        let jsonUrl = `/assets/js/render-data/json-files/global/${type}.json`

        if($parentContainer.length) {
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
}

export default init
