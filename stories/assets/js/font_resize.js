
export function FontResize(element) {
  // run the function
  resize();
  function resize() {
    $(element).each(function() {
      let text_size = $(this).text().length;
      // set 2 bcards looks good with 2 characters
      if (text_size > 2) {
        $(this).css('font-size', parseInt($(this).width())/text_size);
      } else {
        $(this).removeAttr('style');
      }
    });
  }
}
