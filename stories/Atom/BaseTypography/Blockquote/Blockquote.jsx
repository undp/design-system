import React from 'react';
import './blockquote.scss';

export function Blockquote({ text, citeText }) {
  return (
    <blockquote>
      {text}
      <cite>{citeText}</cite>
    </blockquote>
  );
}
