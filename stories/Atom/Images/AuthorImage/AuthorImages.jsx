import React from 'react';
import './author-image.scss';
import { useGlobals } from '@storybook/api';

export const size_options = {
  Large: 'large',
  Small: '',
};

export const accent_color_options = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  blue: 'blue',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function Authorimg({ image, alt, ...args }) {
  let size_variant = size_options[`${args.variant}`];
  let color = accent_color_options[`${args.accent}`] ?? false;
  let accent_color = color ? `accent-${color}` : '';

  return (
    <div className={cls('author__img', `${size_variant}`, `${accent_color}`)}>
      <img src={image} alt={alt} title={alt} />
    </div>
  );
}
