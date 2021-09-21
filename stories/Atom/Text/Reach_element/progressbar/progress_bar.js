import React from 'react';
import '../reach_element.scss';

export const ProgressBar = ({value='32', max='100'}) => {
  return (
      <progress value={value} max={max}> </progress>
  );
};
