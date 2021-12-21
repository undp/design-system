$(window).scroll(function() {  
    var $window = $(window),
        $body = $('body'),
        $container = $('.heading-big.inviewport');
    
    var scroll = $window.scrollTop() + ($window.height() / 3);
    $container.each(function () {
      var $this = $(this);
      if ($this.position().top <= scroll && $this.position().top + $this.height() + 150 > scroll) {
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });

        $body.addClass('color-' + $(this).data('color'));
        $container.find("h2").css("color", "#fff");
        $container.find("h4").css("color", "#fff");
      }else{
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
      }      
    });        
  }).scroll();
  