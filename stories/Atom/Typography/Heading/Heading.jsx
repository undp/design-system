import React from 'react';
import '../../../assets/scss/_typography.scss';

export const Heading = ({
  type, label, className, tabIndex, dataViewport
}) => {
  const HeadingTag = `h${type}`;
  return (
    <HeadingTag className={className} tabIndex={tabIndex} data-viewport={dataViewport}>
      { label }
    </HeadingTag>
  );
};
