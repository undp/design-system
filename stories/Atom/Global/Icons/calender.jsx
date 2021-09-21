import React from 'react';
import icon from '../../../assets/images/Icon/Calendar.svg'
import './icons.scss';

export const IconsCalendar = ({ varient, ...props}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className={'icon-calendar'} />
  );
};

