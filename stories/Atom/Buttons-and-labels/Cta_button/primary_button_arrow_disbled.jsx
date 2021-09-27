import React from 'react';
import './buttons.scss';

export const Primarybtnarrowdisbled = ({ label }) => {
  return (
    <a className="button button--primary button--arrow disabled" href="#" role="button">
      { label }
    </a>
  );
};
