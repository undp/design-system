import React from 'react';
import icon from '../../../assets/images/icon/arrow-left-expand.svg';
import '../icons/icons.scss';
export const Icondownload= ({ varient, ...props}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <div className={'download-icon'} {...props}>   
      <svg class="coh-inline-element" width="19.536" height="17.291">
        <g class="coh-inline-element" data-name="Component 187 – 7">
            <g class="coh-inline-element" data-name="Group 1052" fill="none" stroke="#eb3828" stroke-width="2">
              <path class="coh-inline-element path1" data-name="Path 1085" d="M1 10.151v6.141h17.536v-6.141"></path>
              <path class="coh-inline-element path2" data-name="Path 1086" d="M9.768 0v11.189"></path>
              <path class="coh-inline-element path4" data-name="Path 1087" d="M5.014 6.855l4.79 5.139 4.791-5.139"></path>
            </g>
        </g>
      </svg>
    </div>
  );
};

