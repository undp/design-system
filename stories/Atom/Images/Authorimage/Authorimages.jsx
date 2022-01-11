import React from 'react';
import './authorimage.scss';

export const size_options = {
  Large: 'large',
  Small: '',
};

export const Authorimg = ({ image, alt, ...args }) => {
  let size_variant = size_options[`${args.variant}`];
  return (
    <div className={['author__img', `${size_variant}`].join(' ').trim()}>
      <img src={image} alt={alt} title={alt} />
    </div>
  );
};

Authorimg.defaultProps = {
  size: 'large',
};
