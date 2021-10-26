import React from 'react';
import './mark.scss';

export const Mark = ({ label }) => (
  <p>
    <mark>
      {label}
    </mark>
  </p>
);
