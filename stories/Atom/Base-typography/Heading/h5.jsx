import React from 'react';
import '../../../assets/scss/_typography.scss';

export const H5 = ({ label, className }) => {
  return (
    <h5 className={className}>
      { label }
    </h5>
  );
};
  