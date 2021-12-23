import React from 'react';
import './parallaxCard.scss';
import '../../assets/scss/_grid.scss';
import Img from '../../assets/images/parallax-card.jpg';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';

const ParallaxCard = ({
  name, descrption, button, alt, Text, Content,
}) => {
  let text = '';
  let content = 'left';

  if (Text == 'Left') {
    text = 'order';
  }

  if (Content == 'Right') {
    content = 'right';
  }
  return (
    <>
      <article className={['grid-x parallax-card', 'glide__slide', `${content}`].join(' ')}>
        <div className={['cell medium-3 small-10 parallax-card__image', `parallax-card-${content}-img`].join(' ')}>
          <img src={Img} alt={alt} data-speed="-1" />
        </div>
        <div className={['cell medium-3 parallax-card__content', `parallax-card-${content}`, `${text}`].join(' ').trim()}>
          <a href="#" className="parallax-card__link">
            {name && <Heading type="3" label={name} />}
            {descrption && <P label={descrption} />}
            <span className="cta__link cta--space">{button}</span>
          </a>
        </div>
      </article>
    </>
  );
};

export default ParallaxCard;