
export function FontResize(element) {
  // run the function
  resize();
  function resize() {
    $(element).each(function() {
      let text_size = $(this).text().length;
      // make it inline-block easy to calculate width
      // and compare with the parent
      $(this).css({
        "display": "inline-block",
        "word-break": "keep-all"
      });
      let el_width = $(this).width();
      let el_parent_width = $(this).parent().width();
      if (el_width > el_parent_width) {
        $(this).css({
          'font-size': el_parent_width/text_size, // get max width and devide by characters
          "display": "block",
        });
      } else {
        $(this).removeAttr('style');
      }
    });
  }
}
