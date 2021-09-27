import React from 'react';
import './buttons.scss';

export const Primarybtnnoarrowdisbled = ({ label }) => {
  return (
    <a className="button button--primary disabled" href="#" role="button">
      { label }
    </a>
  );
};
