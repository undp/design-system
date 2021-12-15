import React from 'react';
import './countrycard.scss';
import '../../../assets/scss/_grid.scss';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/Cta_link/Cta_link';

export const CountryCard = ({ data }) => (
  <div className="grid-x grid-margin-x glide__slides">
    {data.map((item, index) => (
      <div className={['country-card', 'cell', 'glide__slide', `${item.size}`].join(' ')} key={index}>
        <a href={item.link} className="country-card__link">
          {item.imageback && (
          <>
            <div className="country-card__overlay" />
            <img src={item.imageback} alt={item.imageback} />
          </>
          )}
          <div className="country-card__caption">
            <p>{item.name}</p>
            <Ctalink label={item.btnlabel} />
          </div>
        </a>
      </div>
    ))}
  </div>
);
