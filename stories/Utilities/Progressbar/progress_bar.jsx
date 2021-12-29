import React from 'react';
import './progress.scss';

export const ProgressBar = ({ value }) => (
  <progress role="progressbar" aria-valuenow={value} aria-valuemax="100" value={value} max="100" aria-label="progressbar"> </progress>
);
