import React from 'react';
import './authorimage.scss';
import user from '../../../assets/images/user.svg';

export const Authorimg = ({ src, alt, size }) => {
  const image = {
    src: user,
    alt: 'user',
  };
  return (
    <div className={['author__img', `author__img--${size}`].join(' ')}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};
