import React from 'react';
import './mark.scss';

export function Mark({ label }) {
  return (
    <p>
      <mark>
        {label}
      </mark>
    </p>
  );
}
