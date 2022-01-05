import React, { Component, useEffect } from 'react';
import './statscardslider.scss';
import { carousel } from '../../assets/js/carousel';
import { StatsCards } from '../../Components/UIcomponents/Cards/StatsCards/StatsCards';

export const Statscardslider = ({ data, gapel, gapelsm, viewcard, perViewtablet, focusSpace }) => {
  viewcard = viewcard ? viewcard : 4;
  perViewtablet = perViewtablet ? perViewtablet : 2;
  gapel = gapel ? gapel : 20;
  gapelsm = gapelsm ? gapelsm : 20;
  focusSpace = focusSpace ? focusSpace : 0.2;
  useEffect(() => {
    carousel('.stats-slider', gapel, gapelsm, viewcard, perViewtablet, focusSpace);
  }, []);
  return (
    <div className="stats-slider">
      <div class="glide__scrollbar" aria-valuemin="0" aria-valuemax="100">
        <span class="glide__scrollbar-drag"></span>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {data.map((item, index) => (
            <div className="glide__slide" key={index}>
              <StatsCards
                number={item.numbername}
                percent={item.percentname}
                content={item.text}
                Size="Small"
              />
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};
