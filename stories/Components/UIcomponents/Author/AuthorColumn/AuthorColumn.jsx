import React from 'react';
import './author-column.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Authorimg } from '../../../../Atom/Images/AuthorImage/AuthorImages';

export const Author = ({
  data, image, alt, Image, Number, Link,
}) => {
  let size;
  let decNumber;
  switch (Number) {
    case 'One':
      decNumber = 1;
      break;
    case 'Two':
      size = 'medium-6';
      decNumber = 2;
      break;
    case 'Three':
      size = 'medium-4';
      decNumber = 3;
      break;
    case 'Four':
      size = 'large-3 small-6';
      decNumber = 4;
      break;
    case 'Five':
      size = 'large-3 small-6';
      decNumber = 5;
      break;
    default:
      decNumber = 1;
  }
  return (
    <>
      {Number == 'One' ? (
        <>
          {data.slice(0, decNumber).map((item, index) => (
            <>
              {Link == 'False' ? (
                <div className="author-box" key={index}>
                  {Image !== 'False' && decNumber <= 3 ? (
                    <Authorimg image={image} alt={alt} variant="Small" />
                  ) : (<></>)}
                  <div className="author-label">
                    <Heading type="6" label={item.Authorlabel} />
                    <P label={item.Authortext} />
                  </div>
                </div>
              ) : (
                <div className="author-box" key={index}>
                  <a href="#">
                    {Image !== 'False' && decNumber <= 3 ? (
                      <Authorimg image={image} alt={alt} variant="Small" />
                    ) : (<></>)}
                    <div className="author-label">
                      <Heading type="6" label={item.Authorlabel} />
                      <P label={item.Authortext} />
                    </div>
                  </a>
                </div>
              )}
            </>
          ))}
        </>
      ) : (
        <div className="grid-x grid-margin-x">
          {data.slice(0, decNumber).map((item, index) => (
            <>
              {Link == 'False' ? (
                <div className={['author-box', 'cell', `${size}`].join(' ')} key={index}>
                  {Image !== 'False' && decNumber <= 3 ? (
                    <Authorimg image={image} alt={alt} variant="Small" />
                  ) : (<></>)}
                  <div className="author-label">
                    <Heading type="6" label={item.Authorlabel} />
                    <P label={item.Authortext} />
                  </div>
                </div>
              ) : (
                <div className={['author-box', 'cell', `${size}`].join(' ')} key={index}>
                  <a href="#">
                    {Image !== 'False' && decNumber <= 3 ? (
                      <Authorimg image={image} alt={alt} variant="Small" />
                    ) : (<></>)}
                    <div className="author-label">
                      <Heading type="6" label={item.Authorlabel} />
                      <P label={item.Authortext} />
                    </div>
                  </a>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </>
  );
};
