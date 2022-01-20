import React from 'react';
import './countrycard.scss';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/Cta_link/Cta_link';
import '../../../assets/scss/_grid.scss';

export const CountryCard = ({ data }) => (
  <div className="grid-x grid-margin-x swiper-wrapper">
    {data.map((item, index) => (
      <div className={['country-card--item', 'cell', 'swiper-slide', `${item.size}`].join(' ')} aria-label={`slide ${1 + index}`} key={index}>
        <a href={item.link}>
          {item.imageback && <img src={item.imageback} alt={item.imageback} />}
          <div className="country-card__caption">
            <p>{item.name}</p>
            <Ctalink label={item.btnlabel} button_option="span"/>
          </div>
        </a>
      </div>
    ))}
  </div>
);