import React from 'react';
import '../../../assets/scss/_typography.scss';

export const P = ({ label, className }) => (
  <p className={className}>
    { label }
  </p>
);
