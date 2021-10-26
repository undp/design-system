import React from 'react';
import './statspanel.scss';
import BackgroundImg from '../../../assets/images/card2.jpg';

export const StatsPanel = ({ number, percent, content }) => (
  <div className="grid-x">
    <div className="cell medium-3 statspanel">
      <div
        className="statspanel__image"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      />
      <div className="statspanel__box">
        <span className="statspanel__number">{number}</span>
        <span className="statspanel__per">{percent}</span>
        <p>{content}</p>
      </div>
    </div>
  </div>
);
