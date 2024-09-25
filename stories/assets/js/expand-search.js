/*
* Expand search
*/
export const expandSearch = ($container) => {
  const $expandInput = $container.find('input');

  $expandInput.on('input', function () {
    if (jQuery(this).val().length >= 1) {
      $container.find('.close-button').addClass('show');
    } else {
      $container.find('.close-button').removeClass('show');
    }
  });

  $container.on('click', '.expand-button', function () {
    if (jQuery(this).siblings('input').val().length >= 1) {
      $container.find('.close-button').addClass('show');
    }

    $container.toggleClass('open');
    if ($container.hasClass('open')) {
      $container.find('input').focus();
    } else {
      $container.find('input').focusout();
      $container.find('.close-button').removeClass('show');
    }
  });

  $container.on('click', '.close-button', function () {
    $container.find('input').val('');
    $container.find('.close-button').removeClass('show');
  });

  jQuery(document).mouseup((e) => {
    const $input = $container.find('input');
    if ($input.val().length < 1) {
      if (!$container.is(e.target) && $container.has(e.target).length === 0) {
        $container.removeClass('open');
      }
    }
  });
};

