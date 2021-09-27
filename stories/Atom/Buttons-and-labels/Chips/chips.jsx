import React from 'react';
import './chips.scss';

export const Chips = ({ label }) => {
  return (
    <div className="chips">
      <a className="chips__no-cross" href="#">
        { label }
      </a>
    </div>
  );
};
