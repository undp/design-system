import React from 'react';
import './countrycard.scss';
import '../../../assets/scss/_grid.scss';

export const CountryCard = ({ data }) => (
  <div className="grid-x grid-margin-x glide__slides">
    {data.map((item, index) => (
      <div className={['pagehero-cards-box', 'cell', 'glide__slide', `${item.size}`].join(' ')} aria-label={`slide ${1 + index}`} key={index}>
        <a href={item.link}>
          {item.imageback && <img src={item.imageback} alt={item.imageback} />}
          <div className="pagehero-cards__caption">
            <p>{item.name}</p>
            <span className="cta__link cta--arrow">{item.btnlabel}</span>
          </div>
        </a>
      </div>
    ))}
  </div>
);
