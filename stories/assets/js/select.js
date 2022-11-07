export function select() {
  let $selectButton = jQuery('.select-box button');
  let $selectList = jQuery('.select-box li');

  $selectButton.on('click', function(){
    jQuery(this).parent().toggleClass('expanded').find('ul').toggleClass('active');
  });
  $selectList.on('click keypress', function(){
    jQuery(this).parent().siblings().text(jQuery(this).find('span').text());
    jQuery(this).parent().removeClass('active').parents().removeClass('expanded');
  });
  jQuery(document).mouseup(function(e) {
    if (!$selectButton.is(e.target) && $selectButton.has(e.target).length === 0) {
      $selectButton.parent().removeClass('expanded').find('ul').removeClass('active');
    }
  });
}
