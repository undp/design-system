import React, { useEffect } from 'react';
import './pagehero-cards.scss';
import '../../../../assets/js/smartresize';
import { swiper } from '../../../../assets/js/swiper';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { CountryCard } from '../../../../Molecules/Blocks/CountryCard/CountryCard';

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}
export const CountryCardHero = ({ data, title, subtitle }) => {
  useEffect(() => {
    swiper('.pagehero-cards-items');
  }, []);
  return (
    <div className="pagehero-cards">
      <div className="grid-x pagehero-cards-top">
        <div className="cell large-5 medium-12">
          <Heading type="2" label={title} dataViewport="true"/>
        </div>
        <div className="cell large-4 medium-12">
          <Heading type="3" label={subtitle} dataViewport="true"/>
        </div>
      </div>
      <div className="pagehero-cards-items" data-swiper-device="mobile" dir={rtl}>
        <div className="swiper-scrollbar" />
        <CountryCard data={data} />
      </div>
    </div>
  );
};
