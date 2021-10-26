import React from 'react';
import './radio.scss';

export const Radio = ({ label }) => (
  <>
    <div className="radio-wrapper">
      <input type="radio" id="undp" name="fav_language" value="undp" className="custom-control-input" />
      <label htmlFor="undp" className="custom-control-label">
        <span className="radio_border" />
        { label }
      </label>
    </div>
    <div className="radio-wrapper">
      <input type="radio" id="undp2" name="fav_language" value="undp2" className="custom-control-input" />
      <label htmlFor="undp2" className="custom-control-label">
        <span className="radio_border" />
        { label }
      </label>
    </div>
  </>
);
