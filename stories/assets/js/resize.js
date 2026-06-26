// Declare variables.
const delay = 200;

const triggerResizeStart = (target) => {
  target.dispatchEvent(new CustomEvent('resizestart'));
};

const triggerResizeEnd = (target) => {
  target.dispatchEvent(new CustomEvent('resizeend'));
};

// Custom window resize helper.
export function windowResize(target, fn) {
  const resizeTarget = target || window;
  let isStart = true;
  let timeoutId;

  const resizeEventsTrigger = () => {
    if (isStart) {
      triggerResizeStart(resizeTarget);
      isStart = false;
      return;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      triggerResizeEnd(resizeTarget);
      isStart = true;
    }, delay);
  };

  resizeTarget.addEventListener('resize', resizeEventsTrigger);
  resizeTarget.addEventListener('resizeend', fn);
}
