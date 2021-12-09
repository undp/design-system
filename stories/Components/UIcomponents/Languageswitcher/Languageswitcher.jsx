import React, { useEffect } from 'react';
import { LangSwitch } from '../../../assets/js/Lang_switcher';
import './languageswitcher.scss';

export const variant_options = {
  blue: 'blue',
  white: 'white',
};

export const Languageswitcher = ({
  headerText, data, ...args
}) => {
  useEffect(() => {
    LangSwitch();
  }, []);

  return (
    <div className="dropdown-language" id="switcher">
      <button className={['dropdown-btn', `${variant_options[`${args.variant}`]}`].join(' ')}>{headerText}</button>
      <ul className="dropdown-language__content">
        {data.map((item, index) => (
          <li className="dropdown-language__content-item" key={index}>
            <a href="#">
              {item.descriptionText}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Languageswitcher.defaultProps = {
  variant: 'blue',
};
