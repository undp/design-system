import React from 'react';
import './smallcopy.scss';

export const Smallcopy = ({
  locationName, locationText, phoneName, phonenumber, emailName, emailid,
}) => (
  <div className="smallcopy">
    <div className="smallcopy__box smallcopy__box--locale">
      <span className="smallcopy__label">{locationName}</span>
      <span>{locationText}</span>
    </div>
    <div className="smallcopy__box">
      <span className="smallcopy__label">
        {phoneName}
        :
      </span>
      <a href="tel:+1 212-906-5000" type="tel">{phonenumber}</a>
    </div>
    <div className="smallcopy__box">
      <span className="smallcopy__label">
        {emailName}
        :
      </span>
      <a href="mailto:hq@undp.org">{emailid}</a>
    </div>
  </div>
);
