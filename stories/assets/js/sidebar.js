export function sidebarNav() {
  let $accordionNav = $('.accordion-navbar li'),
      $accordionPanel = $('.accordion-navbar .accordion__panel');
  $accordionNav.each(function (index, element) {
    if ($(element).find('.accordion__panel').length) {
      $(element).find('span').off('click').on('click, focus', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const duration = '30';
        let $activeLi = $(this).closest('li');
        let $activePanel = $activeLi.find('.accordion__panel');
        if ($activeLi.hasClass('accordion--active') && $activePanel.is(':visible')) {
          $activePanel.slideUp(duration);
          $activeLi.removeClass('accordion--active');
        } else {
          $accordionNav.removeClass('accordion--active');
          $accordionPanel.slideUp(duration);
          $activePanel.slideDown(duration);
          $activeLi.addClass('accordion--active');
        }
      });
    }
  });
}

export function sidebarMenu() {
  let $accordionWrapper = $('.accordion-wrapper');
  $accordionWrapper.each(function (index, element) {
    $(element).find('span').first().off('click').click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).closest('.accordion-wrapper').toggleClass('show-small');
    });
  });
}
