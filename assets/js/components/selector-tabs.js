const init = function () {

    const $tab = $('.tab-item')

    if ($tab.length) {
        $tab.click(function() {

            let $tabContent = $('.ct-tab-content');
            let $tabItem = $('.selector-tabs-container .tab-item');

            let $target = $(this).attr('data-tab');
            console.log($target);

            if (!$(this).hasClass('active')) {
                $tabItem.removeClass('active');
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
