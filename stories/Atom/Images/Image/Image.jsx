import React from 'react';
import './image.scss';
import mongoliaGoat from '../../../assets/images/Mongolia-cashmere-goats.jpg';
import mongoliaGoatmd from '../../../assets/images/Mongolia-cashmere-goats-md.jpg';
import mongoliaGoatsm from '../../../assets/images/Mongolia-cashmere-goats-sm.jpg';

export const Image = ({ className, Type }) => {
  const image = {
    srclg: mongoliaGoat,
    srcmd: mongoliaGoatmd,
    srcsm: mongoliaGoatsm,
    alt: 'Undp Image',
  };
  return (
    <>
    {Type == 'img'
      ? (
        <>
        {className == 'lazy' ?
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt={image.alt} className={className} data-src={image.srclg}/>
        : 
        <img alt={image.alt} className={className} src={image.srclg}/> 
        }
        </>
      )
      : (
        <>
        {className == 'lazy' ?
          <picture className={className}>
            <source media="(min-width:1024px)" data-srcset={image.srclg} />
            <source media="(min-width:767px)" data-srcset={image.srcmd} />
            <img  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src={image.srcsm} alt={image.alt} />
          </picture>
         : 
         <picture className={className}>
            <source media="(min-width:1024px)" srcset={image.srclg} />
            <source media="(min-width:767px)" srcset={image.srcmd} />
            <img src={image.srcsm} alt={image.alt} />
          </picture>
         }
        </>
      )}
    </>
  );
};
