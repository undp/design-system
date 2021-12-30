/* accordion JS start custom */
export function FaqFun() {
  const $accordion = $('.accordion > li');
  const $accordion_active_li = $('.accordion > li.accordion--active');
  const accordion_active = 'accordion--active';
  const accordion_panel = '.accordion__panel';

  $accordion_active_li.children('.accordion__panel').slideDown();
  $accordion.on('click, focus', function () {
    $(this).siblings('li').removeClass(accordion_active).children(accordion_panel)
      .slideUp();
    $(this).toggleClass(accordion_active).children(accordion_panel).slideToggle('');
  });
}
/* accordion JS end custom */
