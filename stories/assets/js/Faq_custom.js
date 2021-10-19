/* Faq JS start custom */
export function FaqFun() {
  $("#accordion > li.accordion--active").children(".accordion__panel").slideDown();
  $("#accordion > li").click(function () {
    $(this).siblings("li").removeClass("accordion--active").children(".accordion__panel").slideUp();
    $(this).toggleClass("accordion--active").children(".accordion__panel").slideToggle("");
  });
}
 /* Faq JS end custom */
