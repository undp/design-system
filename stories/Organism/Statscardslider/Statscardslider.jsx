import React, { useEffect } from 'react';
import './stats-card-slider.scss';
import { swiper } from '../../assets/js/swiper';
import { StatsCards } from '../../Components/UIcomponents/Cards/StatsCards/StatsCards';
import { FontResize } from '../../assets/js/font-resize';

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}
export const Statscardslider = ({ data }) => {
  useEffect(() => {
    swiper('.stats-slider');
    FontResize('.stats-card > h2');
  }, []);
  return (
    <div className="stats-slider" data-swiper-slides-view-mobile="1" data-swiper-slides-view-tablet="2" data-swiper-slides-view-desktop="4" data-swiper-offset="50" dir={rtl}>
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
