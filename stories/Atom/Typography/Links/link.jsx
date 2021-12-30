import React from 'react';
import './link.scss';

export const Link = ({ label }) => (
  <a href="#" title={label}>
    { label }
  </a>
);
