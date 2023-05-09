import React from 'react';
import './card-thumbnail.scss';

export const accent_color_options = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  blue: 'blue',
};

export function Cardthumb({ image, ...args }) {
  let color = accent_color_options[`${args.accent}`] ?? false;
  let accent_color = color ? `accent-${color}` : '';

  return (
    <div className={['card-thumbnail__image', accent_color].join(' ')}>
      <img src={image} alt={image} />
    </div>
  );
}
