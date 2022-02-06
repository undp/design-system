import React from 'react';
import './publication-thumbnail.scss';
import user from '../../../assets/images/publication-thumbnail.jpg';

export const Publicationthumb = ({ Hovercolors }) => {
  const image = {
    src: user,
    alt: 'Image',
  };

  return (
    <div className={['publication-thumbnail__image'].join(' ')}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};
