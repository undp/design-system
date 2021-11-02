import React, { useEffect } from 'react';
import toggleFilter from "../../assets/js/FilterAndSearchBar";
import { Chips } from "../../Atom/Buttons-and-labels/Chips/chips";
import { IconsSearch } from '../../Atom/Global/Icons/search';
import SelectTag from '../../Molecules/Multiselect/MultiSelect';
import './FilterAndSearchBar.scss';


export const FilterAndSearchBar = ({text}) => {
    useEffect(() => {
        toggleFilter()
    }, [])

    return (
        <div className='search_filter'>
            <button className="toggleSearch"> <IconsSearch /></button>
            <br />
            <div className="select-wrapper">
                <SelectTag key="select1" text={text} eleId="select1" />
                <SelectTag key="select2" text={text} eleId="select2" />
                <SelectTag key="select3" text={text} eleId="select3" />
                <SelectTag key="select4" text={text} eleId="select4" />
                <div className="Selected_chips"></div>
            </div>
        </div>
    );
};
