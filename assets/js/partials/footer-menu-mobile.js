import Foundation from 'foundation-sites'

const init = function () {

    function openMenuOptions() {
        let previousTarget = null;

        $('.footer-subtitle').click((e)=>{
            let $target = $(e.currentTarget);
            let $list = $target.parent().children('.list');
            let $subtitle = $('.footer-subtitle');

            $subtitle.parent().children('.list').hide();
            $subtitle.children('.footer-subtitle-arrow').removeClass('rotate');

            if(previousTarget == e.currentTarget){
                $list.hide();
                previousTarget = null;
            }else{
                $list.show();
                $target.children('.footer-subtitle-arrow').addClass('rotate');

                previousTarget = e.currentTarget;
            }

        });
    }

    if($(window).width() < Foundation.MediaQuery.get('medium')){
        openMenuOptions();
    }

    $(window).resize(()=>{
        if(Foundation.MediaQuery.is('medium up')){
            $('.footer-body').find('.list').show();
        }

        if($(window).width() < Foundation.MediaQuery.get('medium')){
            openMenuOptions();
        }
    })
}

export default init
