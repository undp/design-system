import React from 'react';
import './authorimage.scss';

export const size_options = {
  Large: "large",
  Small: "small",
};

export const Authorimg = ({ image, alt, ...args }) => {
  return (
    <div className={["author__img", `author__img--${size_options[`${args.variant}`]}`].join(" ")}>    
      <img src={image} alt={image} />
    </div>
  );
};

Authorimg.defaultProps = {
  size: "Large",
};
