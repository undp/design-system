import React, { Component, useEffect } from 'react';
import { StatsCards } from '../../Molecules/Blocks/StatsCards/StatsCards';
import { StatsSliderFun, CardParallaxFun } from '../../assets/js/SliderCustom';
import './statsslider.scss';

export const StatsSlider = ({ data }) => {
  useEffect(() => {
    StatsSliderFun('.stats-card-slider', '20');
    CardParallaxFun();
  }, []);
  return (
    <div className="stats-card-slider stats-card-grid">
      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0" />
        <button className="glide__bullet" data-glide-dir="=1" />
        <button className="glide__bullet" data-glide-dir="=2" />
        <button className="glide__bullet" data-glide-dir="=3" />
        <button className="glide__bullet" data-glide-dir="=4" />
        <button className="glide__bullet" data-glide-dir="=5" />
      </div>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {data.map((item, index) => <div className="glide__slide" key={index}><StatsCards number={item.numbername} percent={item.percentname} content={item.text} size="sm" /></div>)}
        </div>
      </div>
    </div>
  );
};
