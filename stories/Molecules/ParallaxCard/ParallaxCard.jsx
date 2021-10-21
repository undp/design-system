import React from 'react';
import PropTypes from 'prop-types';
import './parallaxCard.scss';
import '../../assets/scss/_grid.scss';
import Img from '../../assets/images/parallax-card.jpg';
import { Heading } from '../../Atom/Base-typography/Heading/Heading';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctaspace } from '../../Atom/Buttons-and-labels/Cta_button/cta_link_space';

const parallaxCard = ({
  contentname, descriptionText, button, alt
}) => {
  return (
    <>
    <article className="grid-x grid-margin-x parallax-card">
      <div className="parallax-card--image cell medium-3">
        <img src={Img} alt={alt} data-speed="-1" className="img-parallax" />
      </div>
      <div className="parallax-card--content cell medium-3">
        <a href="#" className="parallax-card--link">
          {contentname && <Heading type='3' label={contentname} />}
          {descriptionText && <P label={descriptionText} />}
          <Ctaspace label={button}/>
        </a>
      </div>
    </article>
    <article className="grid-x grid-margin-x parallax-card parallax-card--right">
    <div className="parallax-card--image cell medium-3">
      <img src={Img} alt={alt} data-speed="-1" className="img-parallax" />
    </div>
    <div className="parallax-card--content cell medium-3">
      <a href="#" className="parallax-card--link">
        {contentname && <Heading type='3' label={contentname} />}
        {descriptionText && <P label={descriptionText} />}
        <Ctaspace label={button}/>
      </a>
    </div>
  </article>
  </>
  )
}

export default parallaxCard;
