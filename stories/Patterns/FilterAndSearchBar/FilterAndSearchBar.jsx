import React, { useEffect } from 'react';
import toggleFilter from '../../assets/js/filter-search-bar';
import SelectTag from '../../Components/Forms/Dropdowns/Multiselect/MultiSelect';
import './filter-and-search-bar.scss';
import '../../Components/UIcomponents/Buttons/Chips/chips.scss';
import { SearchExpand } from '../../Components/Forms/SearchExpand/SearchExpand';

const FilterAndSearchBar = ({
  args, data, clearText, activeFilterText, locale, buttonData
}) => {
  useEffect(() => {
    toggleFilter(locale);
  }, [locale]);

  return (
    <>
    <button className="button button-secondary sort-filter-search">
      {buttonData.sort}<span>{buttonData.close}</span>
    </button>
    <div className="search-filter">
      <SearchExpand />
      <div className="select-wrapper">
        <SelectTag {...args} text={data} eleId="1" />
        <SelectTag {...args} text={data} eleId="2" />
        <SelectTag {...args} text={data} eleId="3" />
        <SelectTag {...args} text={data} eleId="4" />

        <span className="active-filter">{activeFilterText}</span>
        <div className="selected-chips"></div>
        <button className='clear-search-filter'>{clearText}</button>
      </div>
    </div>
    </>
  );
};

export default FilterAndSearchBar;
