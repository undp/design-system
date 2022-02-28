import React from 'react';
import './details.scss';

export const DetailsTag = ({ summary, details }) => (
  <details>
    <summary>
      {summary}
    </summary>
    <p>{details}</p>
  </details>
);
