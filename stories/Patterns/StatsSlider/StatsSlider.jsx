import React, { useEffect } from 'react';
import { StatsCards } from '../../Components/UIcomponents/Cards/StatsCards/StatsCards';
import { swiper } from '../../assets/js/swiper';
import { parallaxEffect } from '../../assets/js/parallax';
import './statsslider.scss';

export const StatsSlider = ({ data }) => {
  useEffect(() => {
    swiper('.stats-card-slider');
    parallaxEffect('.stats-card-slider');
  }, []);
  return (
    <div className="stats-card-slider" data-swiper-device="mobile" dir={`${window.UNDP.dir}`}>
      <div className="swiper-scrollbar" />
      <div className="swiper-wrapper">
        {data.map((item, index) => (
          <div className="swiper-slide" aria-label={`slide ${1 + index}`} key={index}>
            <StatsCards number={item.numbername}
              percent={item.percentname}
              content={item.text}
              Size="Small"
              aria-roledescription="slide"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
