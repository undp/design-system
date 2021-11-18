import React from 'react';
import './card-thumbnail.scss';
import user from '../../../assets/images/card-thumbnail.jpg';

export const Cardthumb = ({ }) => {
  const image = {
    src: user,
    alt: 'Image',
  };
  return (
    <div className="card-thumbnail__image">
      <img src={image.src} alt={image.alt} />
    </div>
  );
};
