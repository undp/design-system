import React, { useEffect } from 'react';
import './countrycardhero.scss';
import viewport from '../../../../assets/js/viewport';
import '../../../../assets/js/smartresize';
import { GlideSlider } from '../../../../assets/js/SliderCustom';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { CountryCard } from '../../../../Molecules/Blocks/CountryCard/CountryCard';

export const CountryCardHero = ({ data, title, subtitle }) => {
  useEffect(() => {
    GlideSlider('.countrycard__items', '24');
    viewport('.countrycard__header h1');
    viewport('.countrycard__header h6');
  }, []);
  return (
    <div className="country-card__wrapper">
      <div className="grid-x country-card__header">
        <div className="cell large-5 medium-12">
          <Heading type="1" className="left-right" label={title} />
        </div>
        <div className="cell large-4 medium-12 country-card-border">
          <Heading type="6" className="left-right" label={subtitle} />
        </div>
      </div>
      <div className="glide country-card__items">
        <div className="glide__bullets show-for-small" data-glide-el="controls[nav]">
          {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
        </div>
        <div className="glide__track" data-glide-el="track">
          <CountryCard data={data} />
        </div>
      </div>
    </div>
  );
};
