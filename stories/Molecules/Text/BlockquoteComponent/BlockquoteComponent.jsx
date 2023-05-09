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
};

export const accent_color_options = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  blue: 'blue',
};

export function BlockquoteComponent({
  blockquoteText,
  citeText,
  Colors,
  ...args
}) {
  const bgColor = color_options[`${Colors}`];
  const Color = (Boolean(args.accent)) && (!bgColor) ? args.accent : bgColor;

  let Class = (Color != 'default') ? 'blockquote' : '';
  let ColorClass = accent_color_options[Color] ? `accent-${Color}` : Color;

  if (bgColor == 'default' || (!bgColor && !args.accent)) {
    return (
      <Blockquote text={blockquoteText} citeText={citeText} />
    );
  }

  return (
    <div className={[Class, `${ColorClass}`].join(' ')}>
      <Blockquote text={blockquoteText} citeText={citeText} />
    </div>
  );
}
