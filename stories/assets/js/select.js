export function select() {
  let selectButton = $('.select-box button');
  let selectList = $('.select-box li');

  selectButton.on('click', function(){
    $(this).parent().toggleClass('expanded').find('ul').toggleClass('active');
  });
  selectList.on('click keypress', function(){
    $(this).parent().siblings().text($(this).find('span').text());
    $(this).parent().removeClass('active').parents().removeClass('expanded');
  });
  $(document).mouseup(function(e) {
    if (!selectButton.is(e.target) && selectButton.has(e.target).length === 0) {
      selectButton.parent().removeClass('expanded').find('ul').removeClass('active');
    }
  });
}
