/* Stats JS start custom */
export function StatsFun() {
  var winHieght = $(window).height() - 378;
  var newWinHeight = winHieght / 2;
  //console.log(winHieght);
  //console.log(newWinHeight);
  $(window).scroll(function() {
    //var topScroll = $(window).scrollTop();
    $('.stats-grid .statspanel').each(function() {
      var topSpace = $(this).offset().top >= newWinHeight;
      var bottomSpace = $(this).offset().top <= newWinHeight + 378;
      if (topSpace && bottomSpace){
        $(this).addClass('active');
        } else {
        $(this).removeClass('active');
      }
    });
  });
}
/* Stats JS end custom */