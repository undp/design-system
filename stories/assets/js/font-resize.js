
export function fontResize(element) {
  $(element).each(function() {
    let text_size = $(this).text().trim();
    if(text_size) {
      text_size = text_size.length;
      // make it inline-block easy to calculate width
      // and compare with the parent
      $(this).css({
        "display": "inline-block",
        "word-break": "keep-all"
      });
      let el_width = $(this).width();
      let el_parent_width = $(this).parent().width();
      if ((el_width + 32) > el_parent_width) {
        $(this).css({
          'font-size': el_parent_width/text_size, // get max width and devide by characters
          "display": "block",
        });
      } else {
        $(this).removeAttr('style');
      }
    }
  });
}
