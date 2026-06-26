import React from 'react';
import './search-expand.scss';
import img from 'icons/search-black.svg';
import img_close from 'icons/times.svg';

export const SearchExpand = () => {
  return (
    <div className="expand-search" data-undpds-component="expand-search" > 
      <button className='expand-button'>
        <img src={img} alt="search expand" />
      </button>
      <input type="text" aria-label="expand-search" />
      <button className='close-button'>
        <img src={img_close} alt="close search" />
      </button>
    </div>
  );
};