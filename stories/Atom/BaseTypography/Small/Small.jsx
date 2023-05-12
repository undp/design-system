import React from 'react';
import './small.scss';

export function Small({ label }) {
  return (
    <p>
      <small>
        {label}
      </small>
    </p>
  );
}
