import React, { useEffect } from 'react';
import './parallaxcards.scss';
import '../../../../assets/scss/_glideslider.scss';
import { glideSlider, parallaxEffect } from '../../../../assets/js/slider';
import Img from '../../../../assets/images/parallax-card.jpg';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import ParallaxCard from '../../../../Molecules/ParallaxCard/ParallaxCard';
import '../../../../assets/js/smartresize';

const ParallaxCards = ({ carddata, alt, title }) => (
  useEffect(() => {
    glideSlider('.parallax__content', '46');
    parallaxEffect('.parallax-card-right-content', '50', '.glide__slides', '1', '.parallax-card__image');
    parallaxEffect('.parallax-card-right-img', '-100', '.glide__slides', '0.1', '.parallax-card__content');
    parallaxEffect('.parallax-card-left-content', '60', '.glide__slides', '1');
    parallaxEffect('.parallax-card-left-img', '-130', '.glide__slides', '0.7');
  }, []),
    <section className="parallax">
      <div className="parallax__heading small-offset-1">
        <Heading type="2" label={title} />
      </div>
      <div className="glide parallax__content">
        <div className="glide__bullets show-for-small" data-glide-el="controls[nav]">
          {carddata.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
        </div>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides parallax-check">
            <ParallaxCard data={carddata} alt={alt} src={Img} />
          </div>
        </div>
      </div>
    </section>
)

export default ParallaxCards;
