import React from 'react';
import './imagecard.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';

export const ImageRevelCard = ({
  data, contentname, image, size, link, button,
}) => (
  <div className="grid-x grid-margin-x">
    {data.map((item, index) => (
      <div key={index} className={['imagecard', 'cell', `${item.size}`].join(' ')}>
        <a href={item.link} className={['imagecard', `imagecard__${item.size}`].join(' ')}>
          <div className="imagecard__content">
            {item.image && (
              <div className={['imagecard__content--thumbnail-image', `${item.size}`].join(' ')}>
                <img src={item.image} alt={item.imgalt} />
              </div>
            )}
            <div className="imagecard__content--caption">
              {item.contentname && <Heading type="5" label={item.contentname} />}
            </div>
          </div>
          <Ctalink label={item.btnlabel} variant="Arrow" />
        </a>
      </div>
    ))}
  </div>
);
