import React from "react";
import "../../../assets/scss/_typography.scss";

export function Heading({
  type,
  label,
  className,
  tabIndex,
  dataViewport,
}) {
  const HeadingTag = `h${type}`;
  const tab_index = tabIndex ?? '0';
  const data_viewport = dataViewport ?? false;
  const heading_classes = className ?? '';

  return (
    <HeadingTag className={heading_classes} tabIndex={tab_index} data-viewport={data_viewport} style={{ fontSize: `${getSize()}vw` }}>
      {label}
    </HeadingTag>
  );

  function getSize() {
    const MAX_SIZE = 8;
    // there are more words
    if (label.indexOf(' ') !== -1) {
      return 4; // 4vw
    }

    // => there is only one word
    if (label.length < 5) {
      return 8; // 8vw
    }

    const WORD_LENGTH = label.length;
    const WORD_SIZE = WORD_LENGTH * (0.88 ** WORD_LENGTH);
    if (WORD_SIZE > MAX_SIZE) return MAX_SIZE;
    return WORD_SIZE;
  }
}
