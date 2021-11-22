import React from 'react';
import './authors.scss';
import { Heading } from '../../../../Atom/Base-typography/Heading/Heading';
import { Authorimg } from '../../../../Atom/Images/Authorimage/Authorimages';

export const Author = ({
  data, width, image, size,
}) => (
  <div className={['grid-x', 'author-wrapper', `author-wrapper--${width}`].join(' ')}>
    {data.map((item, index) => (
      <div key={index} className={['author-wrapper__box', 'cell', `${size}`].join(' ')}>
        {image && <Authorimg image={image} variant="Small" />}
        <div className="author__label">
          <Heading type="6" label={item.Authorlabel} />
          <div className="author__designation">{item.Authortext}</div>
        </div>
      </div>
    ))}
  </div>
);
