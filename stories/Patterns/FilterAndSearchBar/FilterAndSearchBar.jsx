import React, { useEffect } from 'react';
import toggleFilter from '../../assets/js/filter_seach_bar';
import { Chips } from '../../Components/UIcomponents/Buttons/Chips/chips';
import SelectTag from '../../Components/Forms/Dropdowns/Multiselect/MultiSelect';
import './FilterAndSearchBar.scss';
import { SearchExpand } from '../../Components/Forms/ExpandableSearch/SearchExpand';

const FilterAndSearchBar = ({
  args, data, clearText, activeFilterText, locale,
}) => {
  useEffect(() => {
    toggleFilter(locale);
  }, [locale]);

  return (
    <div className="search-filter">
      <SearchExpand />
      <div className="select-wrapper">
        <SelectTag {...args} text={data} eleId="1" />
        <SelectTag {...args} text={data} eleId="2" />
        <SelectTag {...args} text={data} eleId="3" />
        <SelectTag {...args} text={data} eleId="4" />

        <div className="active-filter"><span>{activeFilterText}</span></div>
        <div className="selected-chips">
          <Chips label="demo" Type="With X" />
        </div>
        <div className="clear_section"><span className="clear_chips">{clearText}</span></div>
      </div>
    </div>
  );
};

export default FilterAndSearchBar;
