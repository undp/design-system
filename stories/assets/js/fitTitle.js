import "./undp";

export const fitTitle = (selector, sizes = { small: 16, medium: 24 }) => {
  const items =
    typeof selector === "string"
      ? document.querySelectorAll(selector)
      : [selector];
  const size = window.matchMedia(
    `(min-width: ${window.UNDP.breakpoints.SMALL}px)`,
  ).matches
    ? sizes.medium
    : sizes.small;

  // render pseudolement from the string using original element's
  // returns the width of the pseudo element
  const renderedWidth = (style, string) => {
    let pseudo = $(`<div>${string}</div>`);
    pseudo.css({
      font: style.font,
      "text-transform": style.textTransform,
      "letter-spacing": style.letterSpacing,
      "white-space": "nowrap",
      position: "absolute",
      visibility: "hidden",
      "z-index": -1,
      top: 0,
    });
    $("body").append(pseudo);
    const renderedWidth = pseudo.width();
    pseudo.remove();
    return Math.ceil(renderedWidth);
  };

  items.forEach((ele) => {
    let $ele = $(ele);
    let style = window.getComputedStyle(ele);
    let width = ele.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);

    // When there is only one word, the parent element may shrink to fit the content length,
    // so we force its width to 100% to ensure consistent behavior.
    let $parent = $ele.parent();
    $parent.css("width", "100%");
    // Removes the previously applied font size and resets it to the default value
    $ele.css("font-size", "");
    // find the longest word
    let longestWord = $ele
      .text()
      .split(" ")
      .reduce((longest, word) => {
        let wordWidth = word.length > 0 ? renderedWidth(style, word) : 0;
        return wordWidth > longest ? wordWidth : longest;
      }, "");
    if (longestWord > width) {
      let fontSize = Math.max(
        size,
        Math.floor(
          (parseFloat(style.fontSize.replace("px", "")) *
            width) /
            longestWord,
        ) - 1,
      );
      $ele.css("font-size", fontSize + "px");
      if ($ele.data("fitted") != true) {
        $ele.data("fitted", true);
        $(window).on("resize orientationchange", (e) => {
          fitTitle(ele, sizes);
        });
      }
    }
  });
};
