/* expand animation start custom */
export default function expandToSize(ele) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(ele).addClass('expand-to-size');
    } else {
      $(ele).removeClass('expand-to-size');
    }
  });
}
// for webpack build
export {expandToSize as expandToSize}
/* expand animation end custom */
