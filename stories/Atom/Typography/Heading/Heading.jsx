import React, { useEffect, useRef } from "react";
import "../../../assets/scss/_typography.scss";
import { fitTitle } from "../../../assets/js/fitTitle";

export function Heading({ type, label, className, tabIndex, dataViewport }) {
  const HeadingTag = `h${type}`;
  const tab_index = tabIndex ?? "0";
  const data_viewport = dataViewport ?? false;
  const heading_classes = className ?? "";

  const headingRef = useRef(null);

  useEffect(() => {
    fitTitle(headingRef.current);

    const handleResize = () => {
      if (headingRef.current) {
        fitTitle(headingRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
}
