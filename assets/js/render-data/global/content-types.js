const init = function () {

    let $parentContainer = $(`#content-type-select .options`);

    $.ajax({
        type: 'GET',
        url: `/assets/js/render-data/json-files/global/content-types.json`,
        dataType: 'json',
        success: function(response){
            response.forEach((item) => {
                const contentType = `
                    <label class="checkbox-item">
                        <input type="checkbox" value="${ item.value }">
                        <span class="checkmark"></span>
                        <span class="name">${ item.name }</span>
                    </label>`;
                $parentContainer.append(contentType);
            });
        }
    });
}

export default init
