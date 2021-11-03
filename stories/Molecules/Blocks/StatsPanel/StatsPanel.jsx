import React from 'react';
import './statspanel.scss';
import BackgroundImg from '../../../assets/images/card2.jpg';

export const StatsPanel = ({ number, percent, content }) => (
  <div className="cell medium-3 statspanel">
    <div
      className="statspanel__image"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    />
    <div className="statspanel__box">
      <div className="statspanel__number">{number}</div>
      <div className="statspanel__per">{percent}</div>
      <p>{content}</p>
    </div>
  </div>
);
