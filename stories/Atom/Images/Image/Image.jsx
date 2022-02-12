import React from 'react';
import './image.scss';
import mongoliaGoat from '../../../assets/images/Mongolia-cashmere-goats.jpg';
import farmlandmd from '../../../assets/images/farmland-md.jpg';
import farmlandsm from '../../../assets/images/farmland-sm.jpg';

export const Image = ({ className, Type }) => {
  const image = {
    srclg: mongoliaGoat,
    srcmd: farmlandmd,
    srcsm: farmlandsm,
    alt: 'Undp Image',
  };
  return (
    <>
    {Type == 'img'
      ? (
        <img src={image.srclg} alt={image.alt} className={className} />
      )
      : (
        <picture>
            <source media="(min-width:1024px)" srcset={image.srclg} />
            <source media="(min-width:767px)" srcset={image.srcmd} />
            <img src={image.srcsm} alt={image.alt} className={className} />
        </picture>
      )}
    </>
  );
};
