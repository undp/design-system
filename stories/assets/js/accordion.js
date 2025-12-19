/* accordion JS start custom */
export function accordion(
  accordionSelector,
  accordionSiblingSelector,
  accordionActiveSelector,
) {
  const accordionElement = accordionSelector || ".accordion";
  const accordionPanel = accordionSiblingSelector || ".accordion__panel";
  const accordionActiveElement = accordionActiveSelector || "accordion--active";

  // Accordion Trigger Function as callback for Click and Keypress Events.
  const accordionTrigger = (
    currentElem,
    accordionListItem,
    accordinSiblingElement,
    accordionActiveElem,
    allowMultiExpand,
  ) => {
    // Check if 'accordion--active' class exists on current list item button.
    if (!jQuery(currentElem).hasClass(accordionActiveElem)) {
      // Add active class and show the accordion panel
      jQuery(currentElem)
        .addClass(accordionActiveElem)
        .attr("aria-expanded", true);
      jQuery(currentElem)
        .siblings(accordinSiblingElement)
        .slideDown("fast")
        .attr("aria-hidden", false);
      // Close all other list items and panels.
      if (!allowMultiExpand) {
        jQuery(accordionListItem)
          .not(jQuery(currentElem))
          .removeClass(accordionActiveElem)
          .attr("aria-expanded", false);
        jQuery(accordionListItem)
          .not(jQuery(currentElem))
          .siblings(accordinSiblingElement)
          .slideUp("fast")
          .attr("aria-hidden", true);
      }
    } else {
      jQuery(currentElem)
        // Close active list item if open.
        .removeClass(accordionActiveElem)
        .attr("aria-expanded", false);
      jQuery(currentElem)
        .siblings(accordinSiblingElement)
        .slideUp("fast")
        .attr("aria-hidden", true);
    }
  };

  const accordionClick = (
    accordion,
    accordionSibling,
    accordionActiveClass,
  ) => {
    const allowMultiExpand = jQuery(accordion).data("multi-expand") === true;
    const hasMobileAttr = jQuery(accordion).attr("data-accordion") == "mobile";

    jQuery(accordion)
      .each((index, element) => {
        const accordionListItem = jQuery(element).find("button");
        const activePanels = jQuery(element).find(".is-active");

        if (hasMobileAttr) {
          jQuery(accordionListItem)
            .addClass("desktop-event-none")
            .siblings(accordionSibling)
            .addClass("desktop-visible");
        }
        // Keep only the first .is-active if multi-expand=false
        if (!allowMultiExpand && activePanels.length > 1) {
          activePanels.each((i, panel) => {
            if (i === 0) {
              jQuery(panel)
                .attr("aria-expanded", true)
                .siblings(accordionSibling)
                .attr("aria-hidden", false)
                .show();
            } else {
              jQuery(panel)
                .removeClass("is-active")
                .attr("aria-expanded", false)
                .siblings(accordionSibling)
                .attr("aria-hidden", true)
                .hide();
            }
          });
        }

        // Init accordion onClick behavior and make sure it is initialized only once
        if (!jQuery(accordionListItem).data('inited')) {
          jQuery(accordionListItem, element).on('click keypress', e => {
            if (e.type === 'click' || (e.type === 'keypress' && (e.keyCode || e.which) == 13) ) {
              accordionTrigger(
                jQuery(e.currentTarget),
                accordionListItem,
                accordionSibling,
                accordionActiveClass,
                allowMultiExpand,
              );
            }
          });
          jQuery(accordionListItem).data('inited', true)
        }

      })
      .find(".is-active button")
      .each(function () {
        accordionTrigger(
          jQuery(this),
          jQuery(this).closest(accordionElement).find("button"),
          accordionPanel,
          accordionActiveElement,
          true,
        );
      });
  };

  accordionClick(accordionElement, accordionPanel, accordionActiveElement);
}
