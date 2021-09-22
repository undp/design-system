import React from 'react';
import './abbr.scss';

export const Abbreviation = ({ label }) => {
  return (
      <abbr>
        { label }
      </abbr>
  );
};
