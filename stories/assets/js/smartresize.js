(function (root, sr) {
  // Debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  const debounce = function (func, threshold, execAsap) {
    let timeout;

    return function (...args) {
      const context = this;
      const delayed = () => {
        if (!execAsap) {
          func.apply(context, args);
        }
        timeout = null;
      };

      if (timeout) {
        clearTimeout(timeout);
      } else if (execAsap) {
        func.apply(context, args);
      }

      timeout = setTimeout(delayed, threshold || 100);
    };
  };

  // Vanilla smartresize helper.
  // Usage:
  // 1) smartresize(target, fn, threshold?) -> bind debounced resize and return unbind function
  // 2) smartresize(fn, threshold?) -> same as smartresize(window, fn, threshold)
  // 3) smartresize(target) -> dispatch a custom smartresize event on target
  root[sr] = (targetOrFn, fnOrThreshold, threshold = 100) => {
    const isFnFirstArg = typeof targetOrFn === 'function';
    const target = isFnFirstArg ? root : (targetOrFn || root);
    const fn = isFnFirstArg ? targetOrFn : fnOrThreshold;
    let debounceDelay = threshold;
    if (isFnFirstArg && typeof fnOrThreshold === 'number') {
      debounceDelay = fnOrThreshold;
    }

    if (!target || typeof target.addEventListener !== 'function') {
      return () => {};
    }

    // Trigger mode: smartresize(target)
    if (typeof fn !== 'function') {
      target.dispatchEvent(new CustomEvent(sr));
      return () => {};
    }

    const handler = debounce(fn, debounceDelay);
    target.addEventListener('resize', handler);
    return () => target.removeEventListener('resize', handler);
  };
}(window, 'smartresize'));
