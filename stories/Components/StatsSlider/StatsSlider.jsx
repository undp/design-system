import React, { Component, useEffect } from 'react';
import { StatsCards } from '../../Molecules/Blocks/StatsCards/StatsCards';
import { StatsSliderFun } from '../../assets/js/SliderCustom';
import './statsslider.scss';

export const StatsSlider = ({data}) => {
  useEffect(() => {
    StatsSliderFun();
  },[])
  return (
    <div className="stats-card-conatiner">
      <div className="stats-parallax-container">
        <div className="grid-x grid-margin-x stats-card-row">
          {data.slice(0, 3).map((item, index) => {
            return <StatsCards number ={item.numbername} percent={item.percentname} content={item.text} size='sm'/>
          })}
        </div>
        <div className="grid-x grid-margin-x stats-card-row">
          {data.slice(3, 6).map((item, index) => {
            return <StatsCards number ={item.numbername} percent={item.percentname} content={item.text} size='sm'/>
          })}
        </div>
      </div>
      <div className="stats-card-slider">
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
          <button className="glide__bullet" data-glide-dir="=3"></button>
          <button className="glide__bullet" data-glide-dir="=4"></button>
          <button className="glide__bullet" data-glide-dir="=5"></button>
        </div>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data.map((item, index) => {
              return  <li className="glide__slide" key={index}><StatsCards number ={item.numbername} percent={item.percentname} content={item.text} size='sm'/></li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
