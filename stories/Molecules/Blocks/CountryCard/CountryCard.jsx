import React from 'react';
import './countrycard.scss';
import '../../../assets/scss/_grid.scss';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';

export const CountryCard = ({ data }) => (
  <div className="grid-x grid-margin-x">
    {data.map((item, index) => (
      <div className={['country-card', 'cell', `${item.size}`].join(' ')}>
        <a href={item.link} className="country-card__link">
          {item.imageback && (
          <>
            <div className="country-card__overlay" />
            <img src={item.imageback} alt={item.imageback} className="country-card__img" />
          </>
          )}
          <div className="country-card__caption">
            <p>{item.name}</p>
            <Ctalink label={item.btnlabel} variant="Arrow" />
          </div>
        </a>
      </div>
    ))}
  </div>
);
