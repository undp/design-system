const init = function () {
    function loadSelectItems(select, type) {
        let $select = $(`.${select}`);
        let $checkItem = $select.find('.checkbox-item');
        let parent = $checkItem.parent()

        $.ajax({
            type: 'GET',
            url: '/views/sql/queries.php',
            data: {
                type: type
            },
            dataType: 'json',
            success: function(response){
                response.forEach((item) => {
                    let $clone = $checkItem.clone();
                    $clone.removeClass('hide').appendTo(parent);
                    $clone.find('input').val(item.value);
                    $clone.find('.name').html(item.name);
                });
            }
        });
    }

    loadSelectItems('regions-select', 'regions')
    loadSelectItems('office-type-select', 'offices')

}

export default init