import React from 'react';
import './radio.scss';

export const Radio = ({ label }) => {
  return (
    <>
      <div className="radio-wrapper">
        <input type="radio" id="undp" name="fav_language" value="undp" className="custom-control-input"/>
        <label for="undp" className="custom-control-label"><span className="radio_border"></span>{ label }</label>
      </div>
      <div className="radio-wrapper">
        <input type="radio" id="undp2" name="fav_language" value="undp2" className="custom-control-input"/>
        <label for="undp2" className="custom-control-label"><span className="radio_border"></span>{ label }</label>
      </div>
    </>
  );
};
