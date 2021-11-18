import React, { useEffect } from 'react';
import './parallaxcards.scss';
import '../../../assets/scss/_glideslider.scss';
import { GlideSlider, ParallaxEffect } from '../../../assets/js/SliderCustom';
import Img from '../../../assets/images/parallax-card.jpg';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import ParallaxCard from '../../../Molecules/ParallaxCard/ParallaxCard';
import '../../../assets/js/smartresize';

const ParallaxCards = ({ carddata, alt, title }) => (
  useEffect(() => {
    GlideSlider('.ourexpertise__content', '46');
    ParallaxEffect('.parallax-card-right', '50', '.glide__slides', '1', '.parallax-card__image');
    ParallaxEffect('.parallax-card-right-img', '-100', '.glide__slides', '0.1', '.parallax-card__content');
    ParallaxEffect('.parallax-card-left', '60', '.glide__slides', '1');
    ParallaxEffect('.parallax-card-left-img', '-130', '.glide__slides', '0.7');
  }, []),
    <section className="ourexpertise">
      <div className="ourexpertise__heading small-offset-1">
        <Heading type="2" label={title} />
      </div>
      <div className="glide ourexpertise__content">
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {carddata.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
        </div>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides parallax__class">
            <ParallaxCard data={carddata} alt={alt} src={Img} />
          </div>
        </div>
      </div>
    </section>
);

export default ParallaxCards;
