export function sidebarNav() {
  let $accordionNav = $('.sidebar-accordion li');
  let $accordionPanel = $('.sidebar-accordion .accordion__panel');
  $accordionNav.each((index, element) => {
    if ($(element).find('.accordion__panel').length) {
      if ($(element).hasClass('active')) {
        $(element).find('.accordion__panel').slideDown();
      }
      $(element).find('button').first().off('click keypress')
        .on('click keypress', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const duration = '30';
          let $activeLi = $(this).closest('li');
          let $activePanel = $activeLi.find('.accordion__panel');
          if ($activeLi.hasClass('active') && $activePanel.is(':visible')) {
            $activePanel.slideUp(duration);
            $activeLi.removeClass('active').removeAttr('class');
          } else {
            $accordionNav.removeClass('active').removeAttr('class');
            $accordionPanel.slideUp(duration);
            $activePanel.slideDown(duration);
            $activeLi.addClass('active');
          }
        });
    }
  });
}

export function sidebarMenu() {
  let $accordionWrapper = $('.sidebar-accordion');
  $accordionWrapper.each((index, element) => {
    $(element).find('h6').first().off('click')
      .click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).closest('.sidebar-accordion').toggleClass('show-small');
      });
  });
}
