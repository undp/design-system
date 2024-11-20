/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import './parallax-cards.scss';
import Img from '../../../../assets/images/parallax-card.jpg';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import ParallaxCard from '../../../../Molecules/ParallaxCard/ParallaxCard';
import '../../../../assets/js/smartresize';
import loader from '../../../../assets/js/loader';

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}
function ParallaxCards({ data, alt, title }) {
  useEffect(() => {
    loader();
  }, []);
  return (
    <section className="parallax" data-undpds="data-undpds-swiper">
      <div className="parallax__heading small-offset-1">
        <Heading type="2" label={title} />
      </div>
      <div className="parallax__content" data-swiper-mobile dir={rtl}>
        <div className="swiper-scrollbar" />
        <div className="swiper-wrapper">
          {data.map((item, index) => (
            <>
              {index % 2 == 0 ? (
                <ParallaxCard key={index} swipeClass="yes" Image="Right" name={item.name} descrption={item.descriptionText} button={item.btnlabel} alt={alt} src={Img} />
              ) : (
                <ParallaxCard key={index} swipeClass="yes" name={item.name} descrption={item.descriptionText} button={item.btnlabel} alt={alt} src={Img} />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ParallaxCards;
