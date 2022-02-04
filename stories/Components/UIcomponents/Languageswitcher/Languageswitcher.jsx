import React, { useEffect } from 'react';
import { langSwitch } from '../../../assets/js/lang-switcher';
import './language-switcher.scss';

export const variant_options = {
  blue: 'blue',
  white: 'white',
};

export const Languageswitcher = ({
  headerText, data, lang, ...args
}) => {
  useEffect(() => {
    langSwitch();
  }, []);
  let color_variant = variant_options[`${args.variant}`];
  return (
    <div className="dropdown-language">
      <button className={[`${color_variant}`].join(' ')} aria-label="English, Select your language" aria-expanded="false">{headerText}</button>
      <ul role="menu">
        {data.map((item, index) => (
          <li key={index} role="menuitem">
            <a href="#" lang={item.lang} hrefLang={item.lang} tabIndex="-1">
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
