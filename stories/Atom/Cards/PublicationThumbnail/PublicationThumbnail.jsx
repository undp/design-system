import React from 'react';
import './publication-thumbnail.scss';
import user from '../../../assets/images/publication-thumbnail.png';

export const accent_color_options = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  blue: 'blue',
};

export function Publicationthumb({ Hovercolors, ...args }) {
  const image = {
    src: user,
    alt: 'Image',
  };

  const hover_color = (Hovercolors) || args.accent;
  let color = accent_color_options[hover_color] ?? false;
  let accent_color = color ? `accent-${color}` : '';

  return (
    <div className={['publication-thumbnail__image', accent_color].join(' ')}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
}
