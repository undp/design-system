import React from 'react';
import './link.scss';

export const Link = ({ label }) => {
  return (
    <a href="#">
      { label }
    </a>
  );
};
