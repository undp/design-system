import React from 'react';
import './bodycolumn.scss';

export const BodyColumnTwo = ({ text}) => {
  return (
    <div className="row">
        <div className="col-md-4"><p>{text}</p></div>
        <div className="col-md-4"><p>{text}</p></div>
      </div>
  );
};
