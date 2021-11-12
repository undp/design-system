/* footer menu on mobile view start */
export function accordion(ele, find, topupclass) {
  $(window).bind('load resize orientationchange', () => {
    if ($(window).width() < 768) {
      $(ele).off('click').on('click', function () {
        $(this).parent().find(find).slideToggle();
        $(this).parent().siblings().find(find)
          .slideUp();
        $(this).parent().toggleClass(topupclass);
        $(this).parent().siblings().removeClass(topupclass);
      });
    }
  });
}
/* footer menu on mobile view end */
