import React from 'react';
import './parallaxCard.scss';
import '../../assets/scss/_grid.scss';
import Img from '../../assets/images/parallax-card.jpg';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Components/UIcomponents/Buttons/Cta_link/Cta_link';

const ParallaxCard = ({ data, alt, ...args }) =>(
  <>
    {data.map((item, index) =>
    <article key={index} className={['grid-x parallax-card glide__slide', `${(args.position === 'right' || item.direction === 'right') ? 'parallax-card-right' : 'parallax-card-left'}`].join(' ')}>
      <div className={`cell medium-3 small-10 parallax-card__image ${item.direction === 'right' ? 'parallax-card-right-img' : 'parallax-card-left-img'}`}>
        <img src={Img} alt={alt} data-speed="-1" />
      </div>
      <div className={`cell medium-3 parallax-card__content ${item.direction === 'right' ? 'parallax-card-right-content' : 'parallax-card-left-content'}`}>
        <a href="#" className="parallax-card__link">
          {item.name && <Heading type="3" label={item.name} />}
          {item.descriptionText && <P label={item.descriptionText} />}
          <span className="cta__link cta--space">{item.btnlabel}</span>
        </a>
      </div>
    </article>
    )}
  </>
);

export default ParallaxCard;
