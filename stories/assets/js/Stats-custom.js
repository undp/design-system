/* Stats JS start custom */
export function StatsFun() {
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.stats-grid .statspanel').each(function(i) {
                if ($(this).position().top <= windscroll + 100) {
                    $('.stats-grid .statspanel.active').removeClass('active');
                    $('.stats-grid .statspanel').eq(i).addClass('active');
                }
            });
        } else {
            $('.stats-grid .statspanel.active').removeClass('active');
        }
    }).scroll();
  }
   /* Stats JS end custom */