import React from 'react';
import './author-image.scss';

export const size_options = {
  Large: 'large',
  Small: '',
};

export const hover_color_options = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  blue: 'blue',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Authorimg = ({ image, alt, ...args }) => {
  let size_variant = size_options[`${args.variant}`];
  let Hovercolors = hover_color_options[`${args.hovercolor}`];
  return (
    <div className={cls('author__img', `${size_variant}`, `${Hovercolors}`)}>
      <img src={image} alt={alt} title={alt} />
    </div>
  );
};

Authorimg.defaultProps = {
  size: 'large',
  hovercolor: 'yellow',
};
