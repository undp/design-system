import React from 'react';
import './progress.scss';

export const ProgressBar = ({ value }) => (
  <progress value={value} max="100"> </progress>
);
