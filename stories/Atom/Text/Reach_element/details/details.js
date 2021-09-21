import React from 'react';
import '../../Reach_element/reach_element.scss';

export const DetailsTag = ({summary, details}) => {
  return (
    <details>
      <summary> {summary}</summary>
        <p>{details}</p>
     </details>
  );
};
