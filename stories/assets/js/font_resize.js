import * as utility from './resize';
export function FontResize(element) {
  function resize() {
    $(element).each(function() {
      let text_size = $(this).text().length;
      let text_width = $(this).css('white-space', 'pre').get(0).scrollWidth;
      let text_parent_size = $(this).parent().width();
      // set 2 bcards looks good with 2 characters
      if (text_size > 2 && (text_width > text_parent_size)) {
        $(this).css('font-size', parseInt($(this).width())/text_size);
      } else {
        $(this).removeAttr('style');
      }
      $(this).css('white-space', '');
    });
  }

  // Custom windowResize;
  utility.windowResize($(window), (e) => {
    // run the function
    resize();
  });
}
