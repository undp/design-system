import React from 'react';
import './bodycolumn.scss';

export const BodyColumnFour = ({text}) => {
  return (
      <div className="row">
        <div className="col-md-3"><p>{text}</p></div>
        <div className="col-md-3"><p>{text}</p></div>
        <div className="col-md-3"><p>{text}</p></div>
        <div className="col-md-3"><p>{text}</p></div>
      </div>
  );
};

