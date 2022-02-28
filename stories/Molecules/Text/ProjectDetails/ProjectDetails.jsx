import React from 'react';
import './projectdetails.scss';

export const Projectdetails = ({
  startName, startText, endName, endText, statusName, statusText,
}) => (
  <div className="project-data">
    <div className="project-data__col">
      <span className="project-data__label">{startName}</span>
      <span className="project-data__text">{startText}</span>
    </div>
    <div className="project-data__col">
      <span className="project-data__label">{endName}</span>
      <span className="project-data__text">{endText}</span>
    </div>
    <div className="project-data__col">
      <span className="project-data__label">{statusName}</span>
      <span className="project-data__text">{statusText}</span>
    </div>
  </div>
);
