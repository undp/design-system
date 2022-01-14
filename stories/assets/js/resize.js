// Declare variables.
const delay = 200;
let isStart = true;
let timeoutId;

// Resize Started
let triggerResizeStart = (el) => {
  el.trigger('resizestart');
  isStart = !isStart;
}

// Resize Ended
let triggerResizeEnd = (el) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function () {
    el.trigger('resizeend');
    isStart = !isStart;
  }, delay);
}

// Resize Event Callback
const resizeEventsTrigger = (el) => {
  isStart ? triggerResizeStart(el) : triggerResizeEnd(el);
};

// Custom Windows Resize Function.
export function windowResize(elem, fn) {
  // Resize Event Observer.
  elem.resize(function () {
    resizeEventsTrigger(elem);
  });

  // Resize before callback.
  //  For now this is not required so keeping this line commented as we may use it in future.
  // elem.on('resizestart', fn);

  // Resize after callback.
  elem.on('resizeend', fn);
};
