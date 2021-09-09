import React from 'react';
import './bodycolumn.scss';

export const BodyColumnTwo = ({ text, sizes }) => {
  return (
    <div className="row">
        <div className={sizes}><p>{text}</p></div>
        <div className={sizes}><p>{text}</p></div>
      </div>
  );
};
