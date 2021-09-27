import React from 'react';
import './buttons.scss';

export const Secondarybutton = ({ label }) => {
  return (
    <a className="button button--secondary" href="#" role="button">
      { label }
    </a>
  );
};
