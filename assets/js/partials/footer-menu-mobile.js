import Foundation from 'foundation-sites'

const init = function () {
    if($(window).width() < 834){
        $('.footer-subtitle').click((e)=>{

            let $target = $(e.currentTarget);
            let $list = $target.parent().children('.list');
            let $subtitle = $('.footer-subtitle');

            $subtitle.parent().children('.list').hide();
            $subtitle.children('.footer-subtitle-arrow').removeClass('rotate');

            $list.show();
            $target.children('.footer-subtitle-arrow').addClass('rotate');

        });
    }

    $(window).resize(()=>{
        if(Foundation.MediaQuery.is('medium up')){
            $('.footer-body').find('.list').show();
        }
    })
}

export default init