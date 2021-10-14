import React from "react";
import "./pagination.scss";

export const Pagination = ({ text, text2 }) => {
  return (
    <ul className="pagination-wrapper">
      <li className="page__item page__item--disabled">
        <a href="#"></a>
      </li>
      <li className="page__item">
        {text} <span> <a href="#">1 </a> </span> {text2} <span> <a href="#">123 </a></span>
      </li>
      <li className="page__item">
        <a href="#"></a>
      </li>
    </ul>
  );
};
