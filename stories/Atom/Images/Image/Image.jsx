import React from 'react';
import './image.scss';
import user from '../../../assets/images/bees.svg';

export const Image = ({ src, alt }) => {
    const image = {
        src: user,
        alt: 'Author Image',
    }
    return (
      <img src={image.src} alt={image.alt} className="image" />     
    );
};
