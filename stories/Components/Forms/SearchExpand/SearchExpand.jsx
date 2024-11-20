import React, { useEffect, useRef } from 'react';
import './search-expand.scss';
import img from 'icons/search-black.svg';
import img_close from 'icons/times.svg';
import loader from '../../../assets/js/loader';

export const SearchExpand = () => {
  const expandContainerRef = useRef(null);

  useEffect(() => {
    if (loader) {
      loader();
    }
  }, []);

  return (
    <div className="expand-search" data-undpds="data-undpds-expand-search" ref={expandContainerRef}>
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