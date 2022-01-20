import React, { useEffect } from 'react';
import './parallaxcards.scss';
import '../../../../assets/scss/_glideslider.scss';
import { swiper } from '../../../../assets/js/swiper';
import { parallaxEffect } from '../../../../assets/js/parallax';
import Img from '../../../../assets/images/parallax-card.jpg';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import ParallaxCard from '../../../../Molecules/ParallaxCard/ParallaxCard';
import '../../../../assets/js/smartresize';

const ParallaxCards = ({ data, alt, title }) => {
  useEffect(() => {
    swiper('.parallax__content');
    parallaxEffect('.parallax-card', 'vertical');
  }, []);
  return (
    <section className="parallax">
      <div className="parallax__heading small-offset-1">
        <Heading type="2" label={title} />
      </div>
      <div className="parallax__content" data-swiper-device="mobile" dir={`${window.UNDP.dir}`}>
        <div className="swiper-scrollbar" />
        <div className="swiper-wrapper parallax-check">
          {data.map((item, index) => (
            <>
              {index % 2 == 0 ? <ParallaxCard glideClass="yes" Image="Right" name={item.name} descrption={item.descriptionText} button={item.btnlabel} alt={alt} src={Img} /> : <ParallaxCard glideClass="yes" name={item.name} descrption={item.descriptionText} button={item.btnlabel} alt={alt} src={Img} />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxCards;
