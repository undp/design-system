/* Stats JS start custom */
export function StatsFun(ele) {
  const eleHieght = $(ele).height();
  const eleTop = $(window).height() - eleHieght;
  const eleBottom = $(window).height() + eleHieght;
  $(window).scroll(() => {
    $(ele).each(function () {
      const eleTopOffset = ($(this).offset().top - $(window).scrollTop()) * 3;
      if (eleTopOffset > eleTop && (eleTopOffset + $(this).height()) < eleBottom) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
}
/* Stats JS end custom */
