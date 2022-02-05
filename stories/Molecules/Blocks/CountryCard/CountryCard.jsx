import React from 'react';
import './country-card.scss';
import '../../../assets/scss/_grid.scss';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/CtaLink/CtaLink';

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
              <Ctalink label={item.btnlabel} button_option="span" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
