import React from 'react';
import './small.scss';

export const Small = ({ label }) => {
  return (
    <p>
      <small>
        {label}
      </small>
    </p>
  );
};
