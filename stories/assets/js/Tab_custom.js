/* Tab JS start custom */
export function TabFun() {
  const $tab_item = $('#tab .tab__item');
  const $tab_content = $('.tab__content');
  const $tab_item_active = $('#tab .tab__item:first-child, #tab-1');

  $tab_item_active.addClass('active');
  $tab_item.click(function () {
    const tab_id = $(this).attr('data-tab');
    $tab_item.removeClass('active');
    $tab_content.removeClass('active');
    $(this).addClass('active');
    $(`#${tab_id}`).addClass('active');
  });
}
/* Tab JS end custom */
