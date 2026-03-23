import React, { forwardRef, useLayoutEffect, useRef } from "react";
import "../../../assets/scss/_typography.scss";
import { calculateOptimalFontSize } from "../../../assets/js/fitTitle";

/**
 * Heading Component with optional text fitting
 *
 * When type="2" (h2) is used, automatically applies optimal font sizing.
 * For other heading levels, no special sizing is applied.
 *
 * Props:
 *   type: heading level (1-6)
 *   label: heading text
 *   className: additional CSS classes
 *   tabIndex: tab index for accessibility
 *   dataViewport: viewport data attribute
 *   applyFitTitle: whether to apply fitTitle sizing (default: true for h2, false for others)
 */
export const Heading = forwardRef(function Heading(
  { type, label, className, tabIndex, dataViewport, applyFitTitle = (type === "2") },
  ref
) {
  const HeadingTag = `h${type}`;
  const tab_index = tabIndex ?? "0";
  const data_viewport = dataViewport ?? false;
  const heading_classes = className ?? "";

  const internalRef = useRef(null);
  const headingRef = ref || internalRef;

  useLayoutEffect(() => {
    // Only apply fitTitle if explicitly enabled and ref is available
    if (!applyFitTitle || !headingRef?.current) return;

    const applyOptimalFontSize = () => {
      if (!headingRef?.current) return;

      const optimalSize = calculateOptimalFontSize(headingRef.current, {
        small: 16,
        medium: 24,
      });

      if (optimalSize !== null) {
        headingRef.current.style.fontSize = optimalSize + 'px';
      } else {
        headingRef.current.style.fontSize = '';
      }
    };

    // Apply on mount
    applyOptimalFontSize();

    // Reapply on window resize/orientation change
    const resizeHandler = applyOptimalFontSize;
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('orientationchange', resizeHandler);
    };
  }, [label, applyFitTitle]);

  return (
    <HeadingTag
      className={heading_classes}
      tabIndex={tab_index}
      data-viewport={data_viewport}
      ref={headingRef}
    >
      {label}
    </HeadingTag>
  );
});
