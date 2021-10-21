import React from 'react';
import './mark.scss';

export const Mark = ({ label }) => {
  return (
    <p>
      <mark>
        {label}
      </mark>
    </p>
  );
};
