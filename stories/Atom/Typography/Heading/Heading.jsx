import React from 'react';
import '../../../assets/scss/_typography.scss';

export const Heading = ({ type, label, className }) => {
  const HeadingTag = `h${type}`;
  return (
    <HeadingTag className={className}>
      { label }
    </HeadingTag>
  );
};
