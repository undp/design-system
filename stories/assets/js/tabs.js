/**
 * tabs.js library
 */
export function tabs() {
   $(document).foundation();
   //applied 'is-active' class for showing active state
   $('.tabs li:first, .tabs-content .tabs-panel:first').addClass('is-active');
}
