import React from 'react';
import './chips.scss';

export const Chipscross = ({ label }) => {
  return (
    <div className="chips">
      <a class="chips__cross"
        href="#"
      >
        { label }
      </a>
    </div>
  );
};
