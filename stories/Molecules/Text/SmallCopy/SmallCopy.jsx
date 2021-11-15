import React from 'react';
import './smallcopy.scss';

export const Smallcopy = ({
  locationName, phoneName, phonenumber, emailName, emailid,
}) => (
  <>
    <div className="smallcopy__box--locale">
      {locationName}
    </div>
    <div className="smallcopy__box">
      {phoneName}
      <a href="tel:+1 212-906-5000" type="tel">{phonenumber}</a>
    </div>
    <div className="smallcopy__box">
      {emailName}
      <a href="mailto:hq@undp.org">{emailid}</a>
    </div>
  </>
);
