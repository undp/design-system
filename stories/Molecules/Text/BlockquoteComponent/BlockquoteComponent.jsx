import React from 'react';
import { Blockquote } from '../../../Atom/BaseTypography/Blockquote/Blockquote';
import './blockquotecomp.scss';

export const color_options = {
  default: 'default',
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  blue: 'blue',
  gray: 'gray',
  accent: '',
};

export function BlockquoteComponent({
  blockquoteText,
  citeText,
  Colors,
  ...args
}) {
  const { accent } = args;
  const hovercolor = color_options[`${Colors}`];
  const Color = (Boolean(accent)) && (!hovercolor) ? accent : hovercolor;
  const Class = (Color != 'default') ? 'blockquote' : '';

  if (Colors == 'default') {
    return (
      <Blockquote text={blockquoteText} citeText={citeText} />
    );
  }

  return (
    <div className={[Class, `${Color}`].join(' ')}>
      <Blockquote text={blockquoteText} citeText={citeText} />
    </div>
  );
}
