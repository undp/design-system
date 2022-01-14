import React, { useEffect } from 'react';
import './parallaxcards.scss';
import '../../../../assets/scss/_glideslider.scss';
import { carousel } from '../../../../assets/js/carousel';
import { parallaxEffect } from '../../../../assets/js/parallax';
import Img from '../../../../assets/images/parallax-card.jpg';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import ParallaxCard from '../../../../Molecules/ParallaxCard/ParallaxCard';
import '../../../../assets/js/smartresize';

const ParallaxCards = ({ data, alt, title }) => {
  useEffect(() => {
    carousel('.parallax__content', 46, 40, 1, 1, 0, true, true);
    parallaxEffect('.parallax-card.image-right .parallax-card__content', '50', '.glide__slides', '1', '.parallax-card__image');
    parallaxEffect('.parallax-card.image-right .parallax-card__image', '-100', '.glide__slides', '0.1', '.parallax-card__content');
    parallaxEffect('.parallax-card.image-left .parallax-card__content', '60', '.glide__slides', '1');
    parallaxEffect('.parallax-card.image-left .parallax-card__image', '-130', '.glide__slides', '0.7');
  }, []);
  return (
    <section className="parallax">
      <div className="parallax__heading small-offset-1">
        <Heading type="2" label={title} />
      </div>
      <div className="glide parallax__content">
        <div className="glide__scrollbar show-for-small" aria-valuemin="0" aria-valuemax="100">
          <span className="glide__scrollbar-drag" />
        </div>
        <div className="glide__bullets show-for-small" data-glide-el="controls[nav]">
          {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={`bullet ${1 + index}`} key={index} />)}
        </div>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides parallax-check">
            {data.map((item, index) => (
              <>
                {index % 2 == 0 ? <ParallaxCard glideClass="yes" Image="Right" name={item.name} descrption={item.descriptionText} button={item.btnlabel} alt={alt} src={Img} /> : <ParallaxCard glideClass="yes" name={item.name} descrption={item.descriptionText} button={item.btnlabel} alt={alt} src={Img} />}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxCards;
