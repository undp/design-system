import React, { Component, useEffect } from 'react';
import { StatsCards } from '../../Components/UIcomponents/Cards/StatsCards/StatsCards';
import { carousel } from '../../assets/js/carousel';
import { parallaxEffect } from '../../assets/js/slider';
import './statsslider.scss';

export const StatsSlider = ({ data }) => {
  useEffect(() => {
    carousel('.stats-card-slider', 20, 20, 1, 1, 0, true, true);
    parallaxEffect();
  }, []);
  return (
    <div className="stats-card-slider stats-card-grid">
      <div class="glide__scrollbar show-for-small" aria-valuemin="0" aria-valuemax="100">
        <span class="glide__scrollbar-drag"></span>
      </div>
      <div className="glide__bullets show-for-small" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={`bullet ${1 + index}`} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {data.map((item, index) => <div className="glide__slide" aria-label={`slide ${1 + index}`} key={index}>
            <StatsCards number={item.numbername} percent={item.percentname} content={item.text} Size="Small"
           aria-roledescription="slide"/></div>)}
        </div>
      </div>
    </div>
  );
};
