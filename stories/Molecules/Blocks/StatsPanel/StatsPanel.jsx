import React, { useEffect } from 'react';
import './statspanel.scss';
import viewport from '../../../assets/js/viewport';

export const StatsPanel = ({ number, percent, content, delaytime, imageback }) => {
  useEffect(() => {
    viewport('.statspanel-card');
  }, []);
  return (
    <div className={`cell medium-3 statspanel-card left-right delay-${delaytime}`}>
      <div className="statspanel">
        <img src={imageback} alt={imageback} />
        <div className="statspanel__box">
          <div className="statspanel__number">{number}</div>
          <div className="statspanel__per">{percent}</div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
