import React from "react";
import "./SearchExpand.scss";
import { IconsSearchBlack } from "../../../Atom/Icons/search_black";
import { init } from "../../../assets/js/expand-search.js";
import { useEffect } from "react";

export const SearchExpand = ({}) => {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="expand-search">
      <IconsSearchBlack />
      <input type="text" aria-label="expand-search" />
    </div>
  );
};
