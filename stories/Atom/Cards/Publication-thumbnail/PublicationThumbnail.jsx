import React from 'react';
import './publication-thumbnail.scss';
import user from '../../../assets/images/publication-thumbnail.jpg';

export const Publicationthumb = ({ }) => {
  const image = {
    src: user,
    alt: 'Image',
  }
  return (
  <div className="publication_thumbnail__image"><img src={image.src} alt={image.alt} /></div>
  );
};
