import React from 'react';
import './blockquote.scss';

export const Blockquote = ({ text, citeText}) => {
  return (
    <>
      <blockquote>
        {text}
         <cite>{citeText}</cite>
      </blockquote>
    </>
  );
};
