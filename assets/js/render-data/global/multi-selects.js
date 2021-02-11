const init = function () {
    loadSelectItems('regions-select', 'regions')
    loadSelectItems('office-type-select', 'offices')
    loadSelectItems('content-type-select', 'content-types')
    loadSelectItems('language-select', 'languages')
    loadSelectItems('topic-select', 'topics')
    loadSelectItems('regions-countries-select', 'regions-countries')

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
                        let subtreeAttrs = ''
                        let subtreeHTML = ''
                        let optionId = Math.random().toString(36).substr(2, 5);

                        if(item.sub !== undefined) {
                            subtreeAttrs = `aria-expanded="false" aria-controls="${optionId}-subtree" class="has-submenu"`
                            subtreeHTML = `
                            <ul id="${optionId}-subtree" class="sub-menu" role="group" aria-labelledby="${optionId}-option">
                                ${item.sub.map(subItem => {
                                    return `<li role="option">
                                                <label class="checkbox-item">
                                                    <input type="checkbox" value="${ subItem.value }">
                                                    <span class="checkmark"></span>
                                                    <span class="name">${ subItem.name }</span>
                                                </label>
                                            </li>`
                                })}
                            </ul>`
                        }

                        const optionHTML = `
                        <li role="option" id="${ optionId }-option" ${subtreeAttrs}>
                            <label class="checkbox-item">
                                <input type="checkbox" value="${ item.value }">
                                <span class="checkmark"></span>
                                <span class="name">${ item.name }</span>
                            </label>
                            ${subtreeHTML}
                        </li>`;

                        $parentContainer.append(optionHTML);
                    });
                }
            });
        }
    }
}

export default init
