/**
 * tabs.js library
 */
export function tabs() {
  // select all tabs on page
  let $tabs = jQuery('.tabs ul');

  // Init foundation tabs function on each tablist.
  jQuery($tabs).each((i, elem) => {
    let tab = new Foundation.Tabs(jQuery(elem));
  });
}
