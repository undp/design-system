import React, { Component, useEffect } from 'react';
import { StatsCards } from '../../Components/UIcomponents/Cards/StatsCards/StatsCards';
import { GlideSlider, ParallaxEffect } from '../../assets/js/SliderCustom';
import './statsslider.scss';

export const StatsSlider = ({ data }) => {
  useEffect(() => {
    GlideSlider('.stats-card-slider', '20');
    ParallaxEffect();
  }, []);
  return (
    <div className="stats-card-slider stats-card-grid"  aria-labelledby="carousel" >
      <div className="glide__bullets show-for-small" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides" aria-live="off" >
          {data.map((item, index) => <div className="glide__slide" key={index}><StatsCards number={item.numbername} percent={item.percentname} content={item.text} Size="Small"
           aria-roledescription="slide"/></div>)}
        </div>
      </div>
    </div>
  );
};
