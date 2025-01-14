import React, { useEffect } from "react";
import "../../../assets/scss/_typography.scss";
import { fitHeading } from "../../../assets/js/fitText";

export function Heading({
  type,
  label,
  className,
  tabIndex,
  dataViewport,
  isFitHeading,
}) {
  // use setTimeout to apply Fitty after the DOM has stabilized.
  // If you don’t use setTimeout, the heading may overlap the top of
  // the right image when refreshing the page or loading the homepage
  // for the first time.
  useEffect(() => {
    if (isFitHeading) {
      const timeoutId = setTimeout(() => {
        fitHeading(".pagehero-content", ".fit-text");
      }, 100);

      const handleResize = () => {
        fitHeading(".pagehero-content", ".fit-text");
      };
      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isFitHeading]);
  const HeadingTag = `h${type}`;
  const tab_index = tabIndex ?? "0";
  const data_viewport = dataViewport ?? false;
  const heading_classes = className ?? "";

  return (
    <HeadingTag
      className={`${heading_classes} fit-text`}
      tabIndex={tab_index}
      data-viewport={data_viewport}
    >
      {label}
    </HeadingTag>
  );
}
