import "./undp";

/**
 * Helper function to measure text width using a temporary pseudo-element
 * Used to find the longest word in a string
 *
 * @param {CSSStyleDeclaration} style - Computed style of the element
 * @param {string} text - Text to measure
 * @returns {number} Width in pixels (rounded up)
 */
function measureTextWidth(style, text) {
  const pseudo = document.createElement('div');
  pseudo.textContent = text;
  pseudo.style.font = style.font;
  pseudo.style.textTransform = style.textTransform;
  pseudo.style.letterSpacing = style.letterSpacing;
  pseudo.style.whiteSpace = 'nowrap';
  pseudo.style.position = 'absolute';
  pseudo.style.visibility = 'hidden';
  pseudo.style.zIndex = '-1';
  pseudo.style.top = '0';

  document.body.appendChild(pseudo);
  const width = Math.ceil(pseudo.offsetWidth);
  document.body.removeChild(pseudo);

  return width;
}

/**
 * Calculate the optimal font size for fitting text within available width
 * This is a pure calculation function with no side effects
 *
 * @param {HTMLElement} element - The element containing the text
 * @param {Object} sizes - Size options { small: number, medium: number }
 * @returns {number|null} Optimal font size in pixels, or null if no adjustment needed
 */
export function calculateOptimalFontSize(element, sizes = { small: 16, medium: 24 }) {
  if (!element) return null;

  const style = window.getComputedStyle(element);
  const availableWidth = element.clientWidth
    - parseFloat(style.paddingLeft)
    - parseFloat(style.paddingRight);

  // Determine target size based on viewport
  const targetSize = window.matchMedia(
    `(min-width: ${window.UNDP.breakpoints.SMALL}px)`,
  ).matches
    ? sizes.medium
    : sizes.small;

  // Find the longest word
  const longestWordWidth = element.textContent
    .split(/\s+/)
    .reduce((maxWidth, word) => {
      if (word.length === 0) return maxWidth;
      const wordWidth = measureTextWidth(style, word);
      return Math.max(maxWidth, wordWidth);
    }, 0);

  // If longest word fits, no adjustment needed
  if (longestWordWidth <= availableWidth) {
    return null;
  }

  // Calculate scaled font size to fit longest word
  const currentFontSize = parseFloat(style.fontSize);
  const scaledFontSize = Math.max(
    targetSize,
    Math.floor((currentFontSize * availableWidth) / longestWordWidth) - 1,
  );

  return scaledFontSize;
}

/**
 * Apply optimal font sizing to an element (standalone utility function)
 * This version applies the calculated font size directly to the element
 * Does NOT wrap the element - wrapping should be handled by the calling code
 *
 * @param {string|HTMLElement} selector - CSS selector or element reference
 * @param {Object} sizes - Size options { small: number, medium: number }
 */
export const fitTitle = (selector, sizes = { small: 16, medium: 24 }) => {
  const items =
    typeof selector === "string"
      ? document.querySelectorAll(selector)
      : [selector];

  items.forEach((ele) => {
    const optimalSize = calculateOptimalFontSize(ele, sizes);

    if (optimalSize !== null) {
      ele.style.fontSize = optimalSize + 'px';
    } else {
      // Reset to default if no adjustment needed
      ele.style.fontSize = '';
    }

    // Add responsive listener if not already added
    if (!ele.dataset.fitTitleListenerAttached) {
      const resizeHandler = () => fitTitle(ele, sizes);
      window.addEventListener('resize', resizeHandler);
      window.addEventListener('orientationchange', resizeHandler);
      ele.dataset.fitTitleListenerAttached = 'true';

      // Store cleanup function for potential removal
      ele.dataset.fitTitleCleanup = resizeHandler;
    }
  });
};

/**
 * React Hook: useOptimalFontSize
 * Calculates and returns optimal font size without side effects
 * Ideal for React components that manage styling internally
 *
 * Usage in React:
 *   const fontSize = useOptimalFontSize(elementRef, { small: 16, medium: 24 });
 *   return <h2 ref={elementRef} style={{ fontSize: fontSize ? `${fontSize}px` : undefined }} />;
 *
 * @param {React.RefObject} elementRef - React ref to the element
 * @param {Object} sizes - Size options { small: number, medium: number }
 * @returns {number|null} Optimal font size or null if no adjustment needed
 */
export function useOptimalFontSize(elementRef, sizes = { small: 16, medium: 24 }) {
  // Note: This is exported for use in a React hook wrapper
  // The actual React hook implementation should be in the component
  if (!elementRef?.current) return null;
  return calculateOptimalFontSize(elementRef.current, sizes);
}
