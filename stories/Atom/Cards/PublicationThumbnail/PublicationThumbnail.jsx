import React from 'react';
import './publication-thumbnail.scss';
import user from '../../../assets/images/publication-thumbnail.png';

export function Publicationthumb({ Hovercolors, ...args }) {
  const image = {
    src: user,
    alt: 'Image',
  };

  const color = (Hovercolors) || args.accent;

  return (
    <div className={['publication-thumbnail__image', color].join(' ')}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
}
