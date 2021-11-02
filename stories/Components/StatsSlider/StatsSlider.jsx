import React, { } from 'react';
import { StatsCards } from '../../Molecules/Blocks/StatsCards/StatsCards';
import '..//..//assets/js/glideslider.js';
import '..//..//assets/js/SliderCustom.js';
import './statsslider.scss';

export const StatsSlider = ({data}) => {

  return (
    <div className="stats-card-conatiner">
      <div className="stats-parallax-container">
        <div className="grid-x grid-margin-x stats-card-row">
          {data.map((item, index) => {
            return <StatsCards number ={item.numbername} percent={item.percentname} content={item.text} size='sm'/>
          })}
        </div>
        <div className="grid-x grid-margin-x stats-card-row">
          {data.map((item, index) => {
            return <StatsCards number ={item.numbername} percent={item.percentname} content={item.text} size='sm'/>
          })}
        </div>
      </div>
      <div className="stats-card-slider">
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
        </div>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data.map((item, index) => {
              return  <li className="glide__slide" key={index}><StatsCards number ={item.numbername} percent={item.percentname} content={item.text} size='sm'/></li>
            })}
          </ul>
        </div>
        <div className="glide__track" data-glide-el="track">...</div>
      </div>
    </div>
  );
};
