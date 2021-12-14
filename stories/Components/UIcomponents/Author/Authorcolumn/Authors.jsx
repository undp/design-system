import React from 'react';
import './authors.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Authorimg } from '../../../../Atom/Images/Authorimage/Authorimages';

export const Author = ({
  data, image, alt, Image, Number,
}) => {
  let size = '';
  let decNumber = '';
  if (Number == 'one') {
    size = 'medium-12';
    decNumber = 1;
  } else if (Number == 'two') {
    size = 'medium-6';
    decNumber = 2;
  } else if (Number == 'three') {
    size = 'medium-4';
    decNumber = 3;
  } else if (Number == 'four') {
    size = 'large-3 small-6';
    decNumber = 4;
  } else {
    size = 'large-3 small-6';
    decNumber = 5;
  }
  return (
    <div className="grid-x grid-margin-x">
      {data.slice(0, decNumber).map((item, index) => (
        <div className={['author-wrapper__box', 'cell', `${size}`].join(' ')}>
          {(Image !== 'false') && (decNumber <= 3) ? (<Authorimg image={image} alt={alt} title={alt}variant="Small" />) : (<></>)}
          <div className="author__label">
            <Heading type="6" label={item.Authorlabel} />
            <div className="author__designation">{item.Authortext}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
