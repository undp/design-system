import React from 'react';
import './parallaxCard.scss';
import '../../assets/scss/_grid.scss';
import Img from '../../assets/images/parallax-card.jpg';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Components/UIcomponents/Buttons/Cta_link/Cta_link';

const ParallaxCard = ({ data, alt }) => (
  <>
    {data.map((item, index) => (
      <article className="grid-x parallax-card glide__slide" key={index}>
        <div className={index % 2 === 0 ? 'cell medium-3 small-10 parallax-card__image parallax-card-right-img' : 'cell medium-3 small-10 parallax-card__image parallax-card-left-img'}>
          <img src={Img} alt={alt} data-speed="-1" className="img-parallax" />
        </div>
        <div className={index % 2 === 0 ? 'cell medium-3 parallax-card__content parallax-card-right' : 'cell medium-3 parallax-card__content parallax-card-left'}>
          <a href="#" className="parallax-card__link">
            {item.name && <Heading type="3" label={item.name} />}
            {item.descriptionText && <P label={item.descriptionText} />}
            <Ctalink label={item.btnlabel} variant="Space" />
          </a>
        </div>
      </article>
    ))}
  </>
);

export default ParallaxCard;
