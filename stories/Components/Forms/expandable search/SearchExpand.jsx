import React from 'react';
import './SearchExpand.scss';
import { IconsSearchBlack } from '../../../Atom/Icons/search_black';

export const SearchExpand = ({ }) => (
    <div className="expand-search">
      <label for="expand-search">Category</label>
      <input type="text" id="expand-search" />
      <IconsSearchBlack />
    </div>
);
