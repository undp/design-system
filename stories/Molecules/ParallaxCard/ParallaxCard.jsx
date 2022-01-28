import React from 'react';
import './parallax-card.scss';
import '../../assets/scss/_grid.scss';
import Img from '../../assets/images/parallax-card.jpg';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';

const ParallaxCard = ({
  name, descrption, button, alt, Text, Image, swipeClass,
}) => {
  let text = '';
  let image = 'image-left';
  let addClass = '';

  if (Text == 'Left') {
    text = 'text-left';
  }

  if (Image == 'Right') {
    image = 'image-right';
  }

  if (swipeClass == 'yes') {
    addClass = 'swiper-slide';
  }

  const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

  return (
    <>
      <div className={cls('grid-x parallax-card', `${addClass}`, `${image}`, `${text}`)}>
        <div className="cell medium-3 small-10 parallax-card__image">
          <img src={Img} alt={alt} data-speed="-1" />
        </div>
        <div className="cell medium-3 parallax-card__content">
          <a href="#">
            {name && <Heading type="3" label={name} />}
            {descrption && <P label={descrption} />}
            <span className="cta__link cta--space">{button}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ParallaxCard;
