import React from 'react';
import './countrycard.scss';
import '../../../assets/scss/_grid.scss';

export const CountryCard = ({ data }) => (
  <div className="grid-x grid-margin-x glide__slides">
    {data.map((item, index) => (
      <div className={['country-card', 'cell', 'glide__slide', `${item.size}`].join(' ')} aria-label={`slide ${1 + index}`} key={index}>
        <a href={item.link}>
          {item.imageback && <img src={item.imageback} alt={item.imageback} />}
          <div className="country-card__caption">
            <p>{item.name}</p>
            <span class="cta__link cta--arrow">{item.btnlabel}</span>
          </div>
        </a>
      </div>
    ))}
  </div>
);
