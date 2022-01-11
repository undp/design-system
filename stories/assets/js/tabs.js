/**
 * tabs.js library
 */
export function tabs() {
  // select all tabs on page
  let tabs = $('.tabs');

  // Init foundation tabs function on each tablist.
  $(tabs).each((i, elem) => {
    let tab = new Foundation.Tabs($(elem));
  });
}
