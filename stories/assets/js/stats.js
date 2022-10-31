/* Stats JS start custom */
export function statsHover() {
  var $winHeight = jQuery(window).height() - 378;
  var $newWinHeight = jQuery(window).height() + 378;
  jQuery(window).scroll(() => {
    jQuery('.stats-grid .stats-panel').each(function () {
      var $topSpace = (jQuery(this).offset().top - jQuery(window).scrollTop()) * 3;
      if ($topSpace > $winHeight && ($topSpace + jQuery(this).height()) < $newWinHeight) {
        jQuery(this).addClass('active');
      } else {
        jQuery(this).removeClass('active');
      }
    });
  });
}
/* Stats JS end custom */
