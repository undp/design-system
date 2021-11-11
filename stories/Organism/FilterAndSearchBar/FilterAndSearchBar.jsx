import React, { useEffect } from 'react';
import toggleFilter from '../../assets/js/FilterAndSearchBar';
import { Chips } from '../../Atom/Buttons-and-labels/Chips/chips';
import { IconsSearchBlack } from '../../Atom/Global/Icons/search_black';
import SelectTag from '../../Molecules/Multiselect/MultiSelect';
import './FilterAndSearchBar.scss';

const FilterAndSearchBar = ({data}) => {
  useEffect(() => {
    toggleFilter();
  }, []);

  return (
    <div id="search-filter">
      <button type="button" id="toggle-search" className="toggle-search">
      <IconsSearchBlack />
      </button>
      <br />
      <div id="select-wrapper">
        <SelectTag text={data} eleId="select-1" />
        <SelectTag text={data} eleId="select-2" />
        <SelectTag text={data} eleId="select-3" />
        <SelectTag text={data} eleId="select-4" />
        <div id="selected-chips" className="selected-chips">
          <Chips label="demo" variant="Cross" />
        </div>
      </div>
    </div>
  );
};

export default FilterAndSearchBar;
