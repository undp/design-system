import React from 'react';
import './abbr.scss';

export function Abbreviation({ label }) {
  return (
    <abbr>
      {label}
    </abbr>
  );
}
