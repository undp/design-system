import React from 'react';
import './publication-thumbnail.scss';
import user from '../../../assets/images/publication-thumbnail.png';

export function Publicationthumb({ Hovercolors }) {
  const image = {
    src: user,
    alt: 'Image',
  };

  return (
    <div className={['publication-thumbnail__image', Hovercolors].join(' ')}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
}
