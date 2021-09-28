import React from 'react';
import './input_group.scss';

export const Help_caption = ({ label }) => {
  return (
    <label className="help__caption">
      { label }
    </label>
  );
};
