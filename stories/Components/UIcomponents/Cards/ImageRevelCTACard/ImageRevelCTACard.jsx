import React from 'react';
import './image-revel-cta-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/CtaLink/CtaLink';

export const ImageRevelCard = ({
  contentname, image, Size, data, delaytime,
}) => {
  let size = 'medium-4';
  if (Size == 'Small') {
    size = 'small';
  }

  return (
    <div className="grid-x grid-margin-x">
      {data.map((item, index) => (
        <div key={index} data-viewport="true" className={['cell', `${size}`, 'image-reveal-card', `delay-${2 + index++}`].join(' ')}>
          <a href={item.link}>
            <div className="image-reveal-card__content">
              {item.imageback && (<img src={item.imageback} alt={item.imageback} />)}
              {item.contentname && <Heading type="5" label={item.contentname} />}
            </div>
            <Ctalink label={item.btnlabel} button_option="span" />
          </a>
        </div>
      ))}
    </div>
  );
};
