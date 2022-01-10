/* accordion JS start custom */
export function accordion() {
  // Accordion Trigger Function as callback for Click and Keypress Events.
  const accordionTrigger = (currentElem, accordionListItem) => {
    // Check if 'accordion--active' class exists on current list item button.
    if (!$(currentElem).hasClass('accordion--active')) {
      // Add active class and show the accordion panel
      $(currentElem).addClass('accordion--active').attr('aria-expanded', true);
      $(currentElem).siblings('.accordion__panel').slideDown('fast').attr('aria-hidden', false);
      // Close all other list items and panels.
      $(accordionListItem).not($(currentElem)).removeClass('accordion--active').attr('aria-expanded', false);
      $(accordionListItem).not($(currentElem)).siblings('.accordion__panel').slideUp('fast').attr('aria-hidden', true);
    } else {
      // Close active list item if open.
      $(currentElem).removeClass('accordion--active').attr('aria-expanded', false);
      $(currentElem).siblings('.accordion__panel').slideUp('fast').attr('aria-hidden', true);
    }
  }

  // Get all accordions on the page.
  const accordion = $('.accordion');
  $(accordion).each(function (index, element) {
    const accordionListItem = $(element).find('button');
    $(accordionListItem).click(function (e) {
      e.preventDefault();
      // Callback function for Accordion Trigger.
      accordionTrigger($(this), accordionListItem);
    }).keypress(function (e) {
      e.preventDefault();
      const keycode = (e.keyCode ? e.keyCode : e.which);
      // Check if 'Enter' key is pressed.
      if (keycode == 13) accordionTrigger($(this), accordionListItem);
    });
  });
}
