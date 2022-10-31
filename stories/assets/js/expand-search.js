/*
* Expand search
*/
export const expandSearch = () => {
  const $expand = jQuery('.expand-search');
  const $expandInput = jQuery('.expand-search input');

  $expandInput.on('input', function() {
    if (jQuery(this).val().length >= 1) {
      jQuery(this).parent($expand).find('.close-button').addClass('show');
    } else {
      jQuery(this).parent($expand).find('.close-button').removeClass('show');
    }
  });

  jQuery(document).on('click', '.expand-button', function () {
    if (jQuery(this).siblings('input').val().length >= 1) {
      jQuery(this).siblings('.close-button').addClass('show');
    }
    jQuery(this).parent($expand).toggleClass('open');
    if (jQuery(this).parent($expand).hasClass('open')) {
      jQuery(this).siblings('input').focus();
    }
    else {
      jQuery(this).siblings($expandInput).focusout();
      jQuery(this).siblings('.close-button').removeClass('show');
    }
  });
  jQuery(document).on('click', '.expand-search .close-button', function () {
    jQuery(this).siblings('input').val('');
    jQuery(this).removeClass('show');
  });
  jQuery(document).mouseup((e) => {
    var $container = jQuery('.expand-search');
    var $input = $container.find('input');
    if ($input.length < 1 || $input.val().length < 1) {
      if (!$container.is(e.target) && $container.has(e.target).length === 0) {
        $container.removeClass('open');
      }
    }
  });
};
