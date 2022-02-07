import React from 'react';
import './progress-bar.scss';

export const ProgressBar = ({ value, Percentage }) => (
  <progress aria-valuenow={value} aria-valuemax="100" value={Percentage} max="100" aria-label="progressbar"> </progress>
);
