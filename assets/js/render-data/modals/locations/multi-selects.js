const init = function () {
    function loadSelectItems(select, type) {
        let $parentContainer = $(`#${select} .options`);

        $.ajax({
            type: 'POST',
            url: `../../json/modals/locations/${type}.json`,
            dataType: 'json',
            success: function(response){
                response.forEach((item) => {
                    const regionItem = `
                    <label class="checkbox-item">
                        <input type="checkbox" value="${ item.value }">
                        <span class="checkmark"></span>
                        <span class="name">${ item.name }</span>
                    </label>`;
                    $parentContainer.append(regionItem);
                });
            }
        });
    }

    loadSelectItems('regions-select', 'regions')
    loadSelectItems('office-type-select', 'offices')

}

export default init
