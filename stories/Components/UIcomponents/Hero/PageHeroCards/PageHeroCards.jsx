import React, { useEffect } from 'react';
import './pagehero-cards.scss';
import '../../../../assets/scss/_grid.scss';
import '../../../../assets/scss/_swiper.scss';
import '../../../../assets/js/smartresize';
import { swiper } from '../../../../assets/js/swiper';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { CountryCard } from '../../../../Molecules/Blocks/CountryCard/CountryCard';

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}
export function CountryCardHero({ data, title, subtitle }) {
  useEffect(() => {
    swiper('.pagehero-cards-items', false, { breakpoints: { 768: { slidesPerView: 2 } } });
  }, []);
  return (
    <div className="pagehero-cards">
      <div className="grid-x pagehero-cards-top">
        <div className="cell large-5 medium-12">
          <Heading type="2" label={title} dataViewport="true" />
        </div>
        <div className="cell large-4 medium-12">
          <Heading type="3" label={subtitle} dataViewport="true" />
        </div>
      </div>
      <div className="pagehero-cards-items" data-swiper-tablet data-swiper-mobile dir={rtl}>
        <div className="swiper-scrollbar" />
        <CountryCard data={data} />
      </div>
    </div>
  );
}
