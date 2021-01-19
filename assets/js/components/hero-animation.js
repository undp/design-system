const init = function () {
    $(window).scroll(()=>{
        let $hero = $('.hero');

        if($(window).scrollTop() > 0){
            $hero.addClass('contract');
        }else{
            $hero.removeClass('contract');
        }
    })
}

export default init
