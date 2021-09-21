import React from 'react';
import './progress.scss';

export const ProgressBar = ({value='32', max='100'}) => {
  return (
      <progress value={value} max={max}> </progress>
  );
};
