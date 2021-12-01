function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('.breadcrumb__wrapper').offset().top;
    if (window_top > div_top) {
        $('.sticky').addClass('stick');
        if(window_top > 1550){
            $('.sticky').removeClass('stick');
        }
    } else {
        $('.sticky').removeClass('stick');
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});