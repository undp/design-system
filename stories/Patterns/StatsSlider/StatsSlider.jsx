import React, { useEffect } from 'react';
import { StatsCards } from '../../Components/UIcomponents/Cards/StatsCards/StatsCards';
import { swiper } from '../../assets/js/swiper';
import { parallaxEffect } from '../../assets/js/parallax';
import './stats-slider.scss';

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}
export function StatsSlider({ data, ...args }) {
  useEffect(() => {
    swiper('.stats-card-slider');
    parallaxEffect('.stats-card-slider', '.parallax-slide', 'top bottom', 'bottom top', 'horizontal');
  }, []);
  return (
    <div className="stats-card-slider" data-swiper-mobile dir={rtl}>
      <div className="swiper-scrollbar" />
      <div className="swiper-wrapper">
        {data.map((item, index) => (
          <div className="swiper-slide" aria-label={`slide ${1 + index}`} key={index}>
            <StatsCards number={item.numbername}
              percent={item.percentname}
              content={item.text}
              Size="Small"
              aria-roledescription="slide"
              Hovercolors={item.Hovercolors}
              {...args}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
