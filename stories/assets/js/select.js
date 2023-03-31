export function select() {
  let $selectButton = jQuery('.select-box button');
  let $selectList = jQuery('.select-box li');

  $selectButton.on('click', function () {
    jQuery(this).parent().toggleClass('expanded').find('ul')
      .toggleClass('active');

    jQuery(this).trigger({
      type: 'selectToggle',
      bubbles: true,
      cancelable: false,
      state: (jQuery(this).hasClass('expanded')) ? 'open' : 'closed',
      open: (jQuery(this).hasClass('expanded')),
      closed: (!jQuery(this).hasClass('expanded')),
    });
  });

  $selectList.on('click keypress', function () {
    jQuery(this).parent().siblings().text(jQuery(this).find('span').text());
    jQuery(this).parent().removeClass('active').parents()
      .removeClass('expanded');
  });

  jQuery(document).mouseup((e) => {
    if (!$selectButton.is(e.target) && $selectButton.has(e.target).length === 0) {
      $selectButton.parent().removeClass('expanded').find('ul').removeClass('active');
    }
  });
}
