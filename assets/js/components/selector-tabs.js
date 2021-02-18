const init = function () {

    const $tab = $('.tab-item')

    if ($tab.length) {
        $tab.click(function() {

            let $tabContent = $('.tab-content');

            let $target = $(this).attr('data-tab');
            console.log($target);

            if (!$(this).hasClass('active')) {
                $tab.removeClass('active');
                $tabContent.removeClass('active');
                $(this).addClass('active');
                $('#' + $target).addClass('active');
            } else {
                $(this).removeClass('active');
            }

        })
    }
}


export default init
