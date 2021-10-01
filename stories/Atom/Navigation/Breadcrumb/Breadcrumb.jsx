import React from 'react';
import './breadcrumb.scss';

export const Breadcrumb = ({ text }) => {
  return (
    <a href="#" className={'breadcrumb__item'}>{text}</a>
  );
};
