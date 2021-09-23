import React from 'react';
import './blockquote.scss';

export const Blockquote = ({ text }) => {
  return (
      <blockquote>
        {text}
      </blockquote>
  );
};
