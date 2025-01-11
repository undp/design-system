import fitty from "fitty";

export const fitText = (selector) => {
  let items =
    typeof selector === "string"
      ? document.querySelectorAll(selector)
      : [selector];
  items.forEach((ele) => {
    // remove inline font size and retireve it from stylesheet
    if (ele.style.removeProperty) {
      ele.style.removeProperty("font-size");
    } else {
      ele.style.removeAttribute("font-size");
    }
    let fontSize = window
      .getComputedStyle(ele, null)
      .getPropertyValue("font-size");
    let maxSize = Math.round(parseFloat(fontSize));
    fitty(ele, { maxSize });
  });
};

export const fitHeading = (selector) => {
  const items =
    typeof selector === "string"
      ? document.querySelectorAll(selector)
      : [selector];

  const getMinSize = () => (window.innerWidth > 480 ? 24 : 16);

  items.forEach((ele) => {
    if (ele.style.removeProperty) {
      ele.style.removeProperty("font-size");
    } else {
      ele.style.removeAttribute("font-size");
    }

    ele.style.whiteSpace = "normal";
    fitty(ele, {
      multiLine: true,
      minSize: getMinSize(),
    });
  });
};
