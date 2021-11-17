import React, { useEffect } from 'react';
import toggleFilter from '../../assets/js/FilterAndSearchBar';
import { Chips } from '../../Atom/Buttons-and-labels/Chips/chips';
import { IconsSearchBlack } from '../../Atom/Global/Icons/search_black';
import SelectTag from '../../Molecules/Multiselect/MultiSelect';
import './FilterAndSearchBar.scss';

const FilterAndSearchBar = ({ data, clearText, activeFilterText }) => {
  useEffect(() => {
    toggleFilter();
  }, []);

  return (
    <div className="search-filter">
      <button type="button" className="toggle-search">
        <IconsSearchBlack />
      </button>
      <div className="select-wrapper">
        <SelectTag text={data} eleId="select-1" />
        <SelectTag text={data} eleId="select-2" />
        <SelectTag text={data} eleId="select-3" />
        <SelectTag text={data} eleId="select-4" />

        <div className="active-filter"><span>{activeFilterText}</span></div>
        <div className="selected-chips">
          <Chips label="demo" variant="Cross" />
        </div>
        <div className="clear_section"><span className="clear_chips">{clearText}</span></div>
      </div>
    </div>
  );
};

export default FilterAndSearchBar;
