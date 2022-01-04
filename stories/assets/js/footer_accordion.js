/* footer menu on mobile view start */
export function footerAccordion(ele, find, topupclass) {
  const footernavbar = function () {
    if ($(window).width() < window.UNDP.breakpoints.MEDIUM) {
      $(ele).off('click').on('click', function () {
        $(this).parent().find(find).slideToggle();
        $(this).parent().siblings().find(find)
          .slideUp();
        $(this).parent().toggleClass(topupclass);
        $(this).parent().siblings().removeClass(topupclass);
      });
    } else {
      $(find).removeAttr('style');
      $(ele).parent().siblings().removeClass(topupclass);
    }
  };
  $(window)
    .off('load orientationChanged', footernavbar)
    .on('load orientationChanged', footernavbar)
    .smartresize(footernavbar);
}
/* footer menu on mobile view end */
