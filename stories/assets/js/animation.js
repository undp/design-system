/* expand animation start custom */
export default function expandtosize(ele) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(ele).addClass('expand-to-size');
    } else {
      $(ele).removeClass('expand-to-size');
    }
  });
}
/* expand animation end custom */
