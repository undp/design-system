import React from 'react';
import icon from '../../../assets/images/icon/arrow-left-expand.svg';
import '../icons/icons.scss';
export const Iconexternallink = ({ varient, ...props}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <div className={'external-link'} {...props}>   
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" enable-background="new 0 0 20 18" >
            <defs>
                <clipPath id="a">
                  <path transform="translate(1069 11148)" fill="#fff" stroke="#707070" d="M0 0h20v18H0z"></path>
                </clipPath>
            </defs>
            <g transform="translate(-1069 -11148)" clip-path="url(#a)">
                <g class="transition-arrow">
                  <path d="M1076.1 11153.4h6.5v6.5" fill="none" stroke="currentColor" stroke-width="2"></path>
                  <path d="M1074.6 11160.6l7.7-6.7" fill="none" stroke="currentColor" stroke-width="2"></path>
                </g>
                <path d="M1070.3 11155v9.9h9.7" fill="none" stroke="currentColor" stroke-width="2"></path>
            </g>
        </svg>
    </div>
  );
};

