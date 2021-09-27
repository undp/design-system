import React from 'react';
import './buttons.scss';

export const Primarybuttonarrow = ({ label }) => {
  return (
    <a className="button button--primary button--arrow" href="#" role="button">
      { label }
    </a>
  );
};
