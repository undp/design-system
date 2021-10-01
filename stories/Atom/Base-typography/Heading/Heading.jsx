import React from 'react';
import '../../../assets/scss/_typography.scss';

export const Heading = ({ type, label }) => {
  const HeadingTag = `h${type}`;
  return (
    <HeadingTag>
      { label }
    </HeadingTag>
  );
}
