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

//-------------------------------------------------------------------

let fittyInstance = null; //tracks the current instance of Fitty applied
let initialWindowWidth = null; //stores the window width at the time Fitty is first applied
let isFittyApplied = false; // tracks wheteher Fitty is currently active for the text element

export const fitHeading = (parentSelector, childSelector) => {
  const parent = document.querySelector(parentSelector);
  const child = document.querySelector(childSelector);

  if (!parent || !child) {
    console.error("Parent or child element not found.");
    return;
  }

  //checks if the child's total width exceeds the width of the parent
  const isWidthOverflow = child.scrollWidth > parent.offsetWidth;

  const parentRect = parent.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();

  //checks if the child's right edge extends beyond the parent's right edge
  const isPositionOverflow = childRect.right > parentRect.right;

  //Fitty deactivation for small screens
  if (window.innerWidth <= 480) {
    if (fittyInstance) {
      console.log("Window width <= 480px Unsubscribing Fitty.");
      fittyInstance.unsubscribe();
      fittyInstance = null;
      isFittyApplied = false;
    }

    child.style.wordBreak = "";
    return;
  }

  //Fitty reapplying after window resizes bigger than 480px(small screens)
  if (window.innerWidth > 480 && !isFittyApplied && isWidthOverflow) {
    console.log("Window width > 480px: Reapplying Fitty...");
    fittyInstance = fitty(child, {
      minSize: 24,
      multiLine: true,
    });

    if (initialWindowWidth === null) {
      initialWindowWidth = window.innerWidth;
    }
    child.style.wordBreak = "break-word";
    isFittyApplied = true;
  }

  //Fitty applications based on overflow
  //if the text is overflowing and Fitty is not active
  if ((isWidthOverflow || isPositionOverflow) && !isFittyApplied) {
    console.log(
      "Child element is overflowing the parent container. Applying Fitty...",
    );

    if (initialWindowWidth === null) {
      //save the initialwindowiwdth
      initialWindowWidth = window.innerWidth;
    }

    fittyInstance = fitty(child, {
      minSize: 24,
      multiLine: true,
    });

    child.style.wordBreak = "break-word";
    isFittyApplied = true;
  }

  //Fitty reset if the window width is larger than initial window width
  if (initialWindowWidth !== null && window.innerWidth > initialWindowWidth) {
    console.log(
      "Window width exceeded initial Fitty width. Resetting Fitty...",
    );
    if (fittyInstance) {
      fittyInstance.unsubscribe();
      fittyInstance = null;
    }
    initialWindowWidth = null;
    isFittyApplied = false;

    child.style.wordBreak = "";
    child.style.whiteSpace = "";
    child.style.overflowWrap = "";
    child.style.fontSize = "";
  }
};
