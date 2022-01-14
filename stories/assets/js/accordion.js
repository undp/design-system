/* accordion JS start custom */
export function accordion(accordionSelector, accordionSiblingSelector, accordionActiveSelector) {
  const accordionElement = accordionSelector ? accordionSelector : '.accordion';
  const accordionPanel = accordionSiblingSelector ? accordionSiblingSelector : '.accordion__panel';
  const accordionActiveElement = accordionActiveSelector ? accordionActiveSelector : 'accordion--active';

  // Accordion Trigger Function as callback for Click and Keypress Events.
  const accordionTrigger = (currentElem, accordionListItem, accordinSiblingElement, accordionActiveElem) => {
    // Check if 'accordion--active' class exists on current list item button.
    if (!$(currentElem).hasClass(accordionActiveElem)) {
      // Add active class and show the accordion panel
      $(currentElem).addClass(accordionActiveElem).attr('aria-expanded', true);
      $(currentElem).siblings(accordinSiblingElement).slideDown('fast').attr('aria-hidden', false);
      // Close all other list items and panels.
      $(accordionListItem).not($(currentElem)).removeClass(accordionActiveElem).attr('aria-expanded', false);
      $(accordionListItem).not($(currentElem)).siblings(accordinSiblingElement).slideUp('fast')
        .attr('aria-hidden', true);
    } else {
      // Close active list item if open.
      $(currentElem).removeClass(accordionActiveElem).attr('aria-expanded', false);
      $(currentElem).siblings(accordinSiblingElement).slideUp('fast').attr('aria-hidden', true);
    }
  };
  const accordionClick = (accordion, accordionSibling, accordionActiveClass) => {
    const hasMobileAttr = $(accordion).attr('data-accordion') == 'mobile';
    $(accordion).each((index, element) => {
      const accordionListItem = $(element).find('button');
      if (hasMobileAttr) {
        $(accordionListItem).addClass('desktop-event-none').siblings(accordionSibling).addClass('desktop-visible');
      }
      $(accordionListItem).click(function (e) {
        e.preventDefault();
        // Callback function for Accordion Trigger.
        accordionTrigger($(this), accordionListItem, accordionSibling, accordionActiveClass);
      }).keypress(function (e) {
        e.preventDefault();
        const keycode = (e.keyCode ? e.keyCode : e.which);
        // Check if 'Enter' key is pressed.
        if (keycode == 13) accordionTrigger($(this), accordionListItem, accordionSibling, accordionActiveClass);
      });
    });
  }
  accordionClick(accordionElement, accordionPanel, accordionActiveElement);
}
