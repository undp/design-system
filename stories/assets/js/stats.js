/* Stats JS start custom */
export function statsHover() {
  var $winHeight = $(window).height() - 378;
  var $newWinHeight = $(window).height() + 378;
  $(window).scroll(() => {
    $('.stats-grid .stats-panel').each(function () {
      var $topSpace = ($(this).offset().top - $(window).scrollTop()) * 3;
      if ($topSpace > $winHeight && ($topSpace + $(this).height()) < $newWinHeight) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
}
/* Stats JS end custom */
