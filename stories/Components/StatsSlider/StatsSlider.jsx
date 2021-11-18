import React, { Component, useEffect } from 'react';
import { StatsCards } from '../../Molecules/Blocks/StatsCards/StatsCards';
import { GlideSlider, ParallaxEffect } from '../../assets/js/SliderCustom';
import './statsslider.scss';

export const StatsSlider = ({ data }) => {
  useEffect(() => {
    GlideSlider('.stats-card-slider', '20');
    ParallaxEffect();
  }, []);
  return (
    <div className="stats-card-slider stats-card-grid">
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {data.map((item, index) => <div className="glide__slide" key={index}><StatsCards number={item.numbername} percent={item.percentname} content={item.text} size="sm" /></div>)}
        </div>
      </div>
    </div>
  );
};
