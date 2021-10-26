import React from 'react';
import './projectdetails.scss';

export const Projectdetails = ({
  startName, startText, endName, endText, statusName, statusText,
}) => (
  <div className="projectdata">
    <div className="projectdata__col">
      <span className="projectdata__label">{startName}</span>
      <span className="projectdata__text">{startText}</span>
    </div>
    <div className="projectdata__col">
      <span className="projectdata__label">{endName}</span>
      <span className="projectdata__text">{endText}</span>
    </div>
    <div className="projectdata__col">
      <span className="projectdata__label">{statusName}</span>
      <span className="projectdata__text">{statusText}</span>
    </div>
  </div>
);
