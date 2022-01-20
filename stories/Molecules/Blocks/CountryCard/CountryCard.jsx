import React from 'react';
import './countrycard.scss';
import '../../../assets/scss/_grid.scss';

export const CountryCard = ({ data }) => {
  const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);
  return (
    <div className="swiper-wrapper pagehero-cards-wrap">
      {data.map((item, index) => (

        <div className={cls('pagehero-cards-box', 'swiper-slide', `${item.size}`)} aria-label={`slide ${1 + index}`} key={index}>
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
  )}
