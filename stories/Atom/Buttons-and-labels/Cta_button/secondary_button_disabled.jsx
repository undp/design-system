import React from 'react';
import './buttons.scss';

export const Secondarybuttondisbled = ({ label }) => {
  return (
    <a className="button button--secondary disabled" href="#" role="button">
      { label }
    </a>
  );
};
