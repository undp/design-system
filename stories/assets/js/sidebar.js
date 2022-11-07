export function sidebarNav() {
  let $accordionNav = jQuery('.sidebar-accordion li');
  let $accordionPanel = jQuery('.sidebar-accordion .accordion__panel');
  $accordionNav.each((index, element) => {
    if (jQuery(element).find('.accordion__panel').length) {
      if (jQuery(element).hasClass('active')) {
        jQuery(element).find('.accordion__panel').slideDown();
      }
      jQuery(element).find('button').first().off('click keypress')
        .on('click keypress', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const duration = '30';
          let $activeLi = jQuery(this).closest('li');
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
  let $accordionWrapper = jQuery('.sidebar-accordion');
  $accordionWrapper.each((index, element) => {
    jQuery(element).find('h6').first().off('click')
      .click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        jQuery(this).closest('.sidebar-accordion').toggleClass('show-small');
      });
  });
}
