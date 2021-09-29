import React from 'react';
import './smallcopy.scss';

export const Smallcopy = ({ locationName, locationText, phoneName, phonenumber, emailName, emailid }) => {
    return (
        <div className='smallcopy'>
            <div className='smallcopy__box smallcopy__box--locale'>
                <span className="smallcopy__label">{locationName}</span>
                <span>{locationText}</span>
            </div>
            <div className='smallcopy__box'>
                <span className="smallcopy__label">{phoneName}:</span>
                <span>{phonenumber}</span>
            </div>
            <div className='smallcopy__box'>
                <span className="smallcopy__label">{emailName}:</span>
                <span>{emailid}</span>
            </div>
        </div>
    );
};
