import React, { useEffect } from 'react';
import './statspanel.scss';
import viewport from '../../../assets/js/viewport';

export const StatsPanel = ({
  number, percent, Hovercolors, content, delaytime, imageback,
}) => {
  useEffect(() => {
    viewport('.statspanel-card');
  }, []);
  return (
    <div className={`cell medium-3 statspanel-card left-right delay-${delaytime}`}>
      <div className={['stats-panel', `${[`${Hovercolors}`]}`].join(' ')}>
        <img src={imageback} alt={imageback} />
        <div className="stats-box">
          <div className="stats-number">{number}</div>
          <div className="stats-per">{percent}</div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

StatsPanel.defaultProps = {
  Hovercolors: 'yellow',
};
