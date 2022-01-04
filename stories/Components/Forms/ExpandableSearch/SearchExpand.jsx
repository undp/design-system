import React, { useEffect } from 'react';
import './SearchExpand.scss';
import { IconsSearchBlack } from '../../../Atom/Icons/search_black';
import { expandSearch } from '../../../assets/js/expand_search';

export const SearchExpand = ({}) => {
  useEffect(() => {
    expandSearch();
  }, []);
  return (
    <div className="expand-search">
      <IconsSearchBlack />
      <input type="text" aria-label="expand-search" />
    </div>
  );
};
