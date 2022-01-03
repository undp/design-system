$(window).scroll(() => {
  var $window = $(window);
  var $body = $('body');
  var $container = $('.heading-big.inviewport');

  var $scroll = $window.scrollTop() + ($window.height() / 2);
  $container.each(function () {
    var $this = $(this);
    if ($this.position().top <= $scroll && $this.position().top + $this.height() + 200 > $scroll) {
      $body.removeClass((index, css) => (css.match(/(^|\s)color-\S+/g) || []).join(' '));

      $body.addClass(`color-${$(this).data('color')}`);
      $container.find('h2').css('color', '#fff');
      $container.find('h4').css('color', '#fff');
    } else {
      $body.css('transition', 'background-color 1s ease-in-out');
      $body.removeClass((index, css) => (css.match(/(^|\s)color-\S+/g) || []).join(' '));
    }
  });
}).scroll();
