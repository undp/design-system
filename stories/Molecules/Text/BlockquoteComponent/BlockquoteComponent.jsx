import React from 'react';
import { Blockquote } from '../../../Atom/Base-typography/Blockquote/blockquote';
import './blockquotecomp.scss';

export const color_options = {
  yellow: 'yellow',
  red: 'red',
  green: 'green',
  blue: 'blue',
  gray: 'gray',
  default: '',
};

export const BlockquoteComponent = ({
  blockquoteText, citeText, ...args
}) => (
  <div className={['blockquote-wrapper', `${color_options[`${args.color}`]}`].join(' ')}>
    <Blockquote text={blockquoteText} citeText={citeText}> </Blockquote>
  </div>
);
