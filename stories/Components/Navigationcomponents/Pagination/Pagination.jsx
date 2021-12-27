import React from 'react';
import './pagination.scss';

export const Pagination = ({ text, text2 }) => (
  <nav aria-label="Pagination" role="navigation">
    <ul className="pagination">
      <li className="disabled"><a href="#" role="button" aria-current="true" aria-label="Previous">Previous</a></li>
      <li>
        {text}
        <span>
          {' '}
          <a href="#" aria-label="1">1</a>
        </span>
        {text2}
        <span>
          {' '}
          <a href="#" aria-label="123">123</a>
        </span>
      </li>
      <li><a href="#" aria-label="Next">Next</a></li>
    </ul>
  </nav>
);
