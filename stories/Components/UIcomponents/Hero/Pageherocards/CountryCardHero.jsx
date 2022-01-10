import React, { useEffect } from 'react';
import './countrycardhero.scss';
import viewport from '../../../../assets/js/viewport';
import '../../../../assets/js/smartresize';
import { carousel } from '../../../../assets/js/carousel';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { CountryCard } from '../../../../Molecules/Blocks/CountryCard/CountryCard';

export const CountryCardHero = ({ data, title, subtitle }) => {
  useEffect(() => {
    carousel('.country-card__items', 24, 24, 1, 1, 0, true, true);
    viewport('.country-card__header h2');
    viewport('.country-card__header h5');
  }, []);
  return (
    <div className="country-card__wrapper">
      <div className="grid-x country-card__header">
        <div className="cell large-5 medium-12">
          <Heading type="2" className="left-right" label={title} />
        </div>
        <div className="cell large-4 medium-12 country-card-border">
          <Heading type="5" className="left-right" label={subtitle} />
        </div>
      </div>
      <div className="glide country-card__items">
        <div className="glide__scrollbar show-for-small" aria-valuemin="0" aria-valuemax="100">
          <span className="glide__scrollbar-drag"></span>
        </div>
        <div className="glide__bullets show-for-small" data-glide-el="controls[nav]">
          {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={`bullet ${1 + index}`} key={index} />)}
        </div>
        <div className="glide__track" data-glide-el="track">
          <CountryCard data={data} />
        </div>
      </div>
    </div>
  );
};
