import React from 'react';
import './buttons.scss';

export const Primarybuttonnoarrow = ({ label }) => {
  return (
    <a className="button button--primary" href="#" role="button">
      { label }
    </a>
  );
};
