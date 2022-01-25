import React, { useEffect } from 'react';
import './parallax-cards.scss';
import { swiper } from '../../../../assets/js/swiper';
import { parallaxEffect } from '../../../../assets/js/parallax';
import Img from '../../../../assets/images/parallax-card.jpg';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import ParallaxCard from '../../../../Molecules/ParallaxCard/ParallaxCard';
import '../../../../assets/js/smartresize';

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}
const ParallaxCards = ({ data, alt, title }) => {
  useEffect(() => {
    swiper('.parallax__content');
    parallaxEffect('.parallax-card', ['.parallax-card__image', '.parallax-card__content'], 'top center', 'bottom+=85 center', 'vertical', 'desktop', 'percent');
  }, []);
  return (
    <section className="parallax">
      <div className="parallax__heading small-offset-1">
        <Heading type="2" label={title} />
      </div>
      <div className="parallax__content" data-swiper-device="mobile" dir={rtl}>
        <div className="swiper-scrollbar" />
        <div className="swiper-wrapper">
          {data.map((item, index) => (
            <>
              {index % 2 == 0 ? <ParallaxCard swipeClass="yes" Image="Right" name={item.name} descrption={item.descriptionText} button={item.btnlabel} alt={alt} src={Img} /> : <ParallaxCard swipeClass="yes" name={item.name} descrption={item.descriptionText} button={item.btnlabel} alt={alt} src={Img} />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxCards;
