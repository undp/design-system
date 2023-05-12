/* expand animation start custom */
export default function expandToSize(ele) {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 50) {
      jQuery(ele).addClass('expand-to-size');
    } else {
      jQuery(ele).removeClass('expand-to-size');
    }
  });
}
// for webpack build
export { expandToSize };
/* expand animation end custom */
