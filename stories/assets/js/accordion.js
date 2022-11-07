/* accordion JS start custom */
export function accordion(accordionSelector, accordionSiblingSelector, accordionActiveSelector) {
  const accordionElement = accordionSelector ? accordionSelector : '.accordion';
  const accordionPanel = accordionSiblingSelector ? accordionSiblingSelector : '.accordion__panel';
  const accordionActiveElement = accordionActiveSelector ? accordionActiveSelector : 'accordion--active';

  // Accordion Trigger Function as callback for Click and Keypress Events.
  const accordionTrigger = (currentElem, accordionListItem, accordinSiblingElement, accordionActiveElem) => {
    // Check if 'accordion--active' class exists on current list item button.
    if (!jQuery(currentElem).hasClass(accordionActiveElem)) {
      // Add active class and show the accordion panel
      jQuery(currentElem).addClass(accordionActiveElem).attr('aria-expanded', true);
      jQuery(currentElem).siblings(accordinSiblingElement).slideDown('fast').attr('aria-hidden', false);
      // Close all other list items and panels.
      jQuery(accordionListItem).not(jQuery(currentElem)).removeClass(accordionActiveElem).attr('aria-expanded', false);
      jQuery(accordionListItem).not(jQuery(currentElem)).siblings(accordinSiblingElement).slideUp('fast')
        .attr('aria-hidden', true);
    } else {
      // Close active list item if open.
      jQuery(currentElem).removeClass(accordionActiveElem).attr('aria-expanded', false);
      jQuery(currentElem).siblings(accordinSiblingElement).slideUp('fast').attr('aria-hidden', true);
    }
  };
  const accordionClick = (accordion, accordionSibling, accordionActiveClass) => {
    const hasMobileAttr = jQuery(accordion).attr('data-accordion') == 'mobile';
    jQuery(accordion).each((index, element) => {
      const accordionListItem = jQuery(element).find('button');
      if (hasMobileAttr) {
        jQuery(accordionListItem).addClass('desktop-event-none').siblings(accordionSibling).addClass('desktop-visible');
      }
      jQuery(accordionListItem).click(function (e) {
        e.preventDefault();
        // Callback function for Accordion Trigger.
        accordionTrigger(jQuery(this), accordionListItem, accordionSibling, accordionActiveClass);
      }).keypress(function (e) {
        e.preventDefault();
        const keycode = (e.keyCode ? e.keyCode : e.which);
        // Check if 'Enter' key is pressed.
        if (keycode == 13) accordionTrigger(jQuery(this), accordionListItem, accordionSibling, accordionActiveClass);
      });
    });
  }
  accordionClick(accordionElement, accordionPanel, accordionActiveElement);
}
