function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var breadcrumb = $('.breadcrumb__wrapper');
    if (breadcrumb.length) {
        var div_top = $('.breadcrumb__wrapper').offset().top;
        if (window_top > div_top) {
            $('.sticky').addClass('stick');
            if(window_top > 2000){
                $('.sticky').removeClass('stick');
            }
        } else {
            $('.sticky').removeClass('stick');
        }
    }   
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
