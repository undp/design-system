import React, { useEffect } from 'react';
import './SearchExpand.scss';
import img from '../../../assets/images/Icon/Search_black.svg';
import { expandSearch } from '../../../assets/js/expand_search';

export const SearchExpand = ({}) => {
  useEffect(() => {
    expandSearch();
  }, []);
  return (
    <div className="expand-search">
      <img src={img} alt="icon" className="icon-search-black" />
      <input type="text" aria-label="expand-search" />
    </div>
  );
};
