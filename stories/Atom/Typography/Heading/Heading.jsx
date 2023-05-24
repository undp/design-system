import React from 'react';
import '../../../assets/scss/_typography.scss';

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
    <HeadingTag className={heading_classes} tabIndex={tab_index} data-viewport={data_viewport}>
      {label}
    </HeadingTag>
  );
}
