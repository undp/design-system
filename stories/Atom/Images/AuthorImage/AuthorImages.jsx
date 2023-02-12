import React from 'react';
import './author-image.scss';
import { useGlobals } from '@storybook/api';

export const size_options = {
  Large: 'large',
  Small: '',
};

export const hover_color_options = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  blue: 'blue',
  accent: '',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function Authorimg({ image, alt, ...args }) {
  let size_variant = size_options[`${args.variant}`];

  // If there is a hovercolor set, use that. Otherwise follow the accent if present.
  let { accent } = args;
  let hovercolor = hover_color_options[`${args.hovercolor}`];
  let Hovercolors = (Boolean(accent)) && (!hovercolor) ? accent : hovercolor;

  return (
    <div className={cls('author__img', `${size_variant}`, `${Hovercolors}`)}>
      <img src={image} alt={alt} title={alt} />
    </div>
  );
}
