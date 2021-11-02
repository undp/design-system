import React, { } from 'react';
import { StatsCards } from '../../Molecules/Blocks/StatsCards/StatsCards';
import '../../assets/js/glideslider';

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
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">0</li>
              <li class="glide__slide">1</li>
              <li class="glide__slide">2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
