import React, { useEffect } from 'react';
import './countrycardhero.scss';
import viewport from '../../../../assets/js/viewport';
import '../../../../assets/js/smartresize';
import { swiper } from '../../../../assets/js/swiper';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { CountryCard } from '../../../../Molecules/Blocks/CountryCard/CountryCard';

export const CountryCardHero = ({ data, title, subtitle }) => {
  useEffect(() => {
    swiper('.country-card__items');
    viewport('.country-card__header h2');
    viewport('.country-card__header h5');
  }, []);
  return (
    <div className="pagehero-cards">
      <div className="grid-x pagehero-cards-top">
        <div className="cell large-5 medium-12">
          <Heading type="2" className="left-right" label={title} />
        </div>
        <div className="cell large-4 medium-12">
          <Heading type="3" className="left-right" label={subtitle} />
        </div>
      </div>
      <div className="country-card__items" data-swiper-device="mobile" dir={`${window.UNDP.dir}`}>
        <div className="swiper-scrollbar" />
        <CountryCard data={data} />
      </div>
    </div>
  );
};
