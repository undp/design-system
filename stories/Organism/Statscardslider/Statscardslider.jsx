import React, { useEffect } from 'react';
import './statscardslider.scss';
import { swiper } from '../../assets/js/swiper';
import { StatsCards } from '../../Components/UIcomponents/Cards/StatsCards/StatsCards';

export const Statscardslider = ({ data }) => {
  useEffect(() => {
    swiper('.stats-slider');
  }, []);
  return (
    <div className="stats-slider" data-swiper-slides-view-mobile="1" data-swiper-slides-view-tablet="2" data-swiper-slides-view-desktop="4" dir={`${window.UNDP.dir}`}>
      <div className="swiper-scrollbar" />
      <div className="swiper-wrapper">
        {data.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <StatsCards
              number={item.numbername}
              percent={item.percentname}
              content={item.text}
              Size="Small"
              Hovercolors="yellow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
