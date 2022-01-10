import React from 'react';
import '../../../assets/scss/_typography.scss';

export const P = ({ label, className, tabIndex }) => (
  <p className={className} tabIndex={tabIndex}>
    { label }
  </p>
);
