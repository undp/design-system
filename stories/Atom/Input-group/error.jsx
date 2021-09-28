import React from 'react';
import './input_group.scss';

export const Error_caption = ({ label }) => {
  return (
    <label className="error__caption">
      { label }
    </label>
  );
};
