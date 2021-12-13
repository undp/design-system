export function SidebarNav() {
  $('#accordion-menu > li.accordion--active').children('.accordion__panel').slideDown();
  $('#accordion-menu > li span').click(function () {
    $(this).closest('li').siblings('li').removeClass('accordion--active')
      .children('.accordion__panel')
      .slideUp();
    $(this).closest('li').toggleClass('accordion--active').children('.accordion__panel')
      .slideToggle('');
  });
}

export function SidebarMenu() {
  $('.accordion-wrapper > span').click(() => {
    $('.accordion-wrapper').toggleClass('show-small');
  });
}
