/* accordion JS start custom */
export function accordion() {
  let accordionActive = 'accordion--active';
  let accordionPanel = '.accordion__panel';

  $('#accordion > li.accordion--active').children('.accordion__panel').slideDown();
  $('#accordion > li').click(function () {
    $(this).siblings('li').removeClass(accordionActive).children(accordionPanel)
      .slideUp();
    $(this).toggleClass(accordionActive).children(accordionPanel).slideToggle('');
  });
}
/* accordion JS end custom */
