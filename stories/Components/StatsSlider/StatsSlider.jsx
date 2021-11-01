import React, { } from 'react';
import { StatsCards } from '../../Molecules/Blocks/StatsCards/StatsCards';
import './statsslider.scss';

export const StatsSlider = ({data}) => {
  return (
      <div className="grid-x grid-margin-x stats-card-row">
        {data.map((item, index) => {
          return <StatsCards number ={item.numbername} percent={item.percentname} content={item.text} size='md'/>
        })}
        {data.map((item, index) => {
          return <StatsCards number ={item.numbername} percent={item.percentname} content={item.text} size='md'/>
        })}
      </div>
  );
};
