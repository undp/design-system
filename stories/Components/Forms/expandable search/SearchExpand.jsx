import React from 'react';
import './SearchExpand.scss';
import { IconsSearchBlack } from '../../../Atom/Icons/search_black';

export const SearchExpand = ({ }) => (
    <div className="expand-search">
      <input type="text" aria-label="expand-search"/>
      <IconsSearchBlack />
    </div>
);
