export function SidebarNav() {
  $("#accordion-menu > li.accordion--active").children(".accordion__panel").slideDown();
  $("#accordion-menu > li span").click(function () {
    $(this).closest("li").siblings("li").removeClass("accordion--active").children(".accordion__panel").slideUp();
    $(this).closest("li").toggleClass("accordion--active").children(".accordion__panel").slideToggle("");
  });
}

export function SidebarMenu() {
  $("#sidebar-menu").click(function () {
    $(".accordion-wrapper").toggleClass("show");
  });
}
