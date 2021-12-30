import React, { useEffect } from 'react';
import { LangSwitch } from '../../../assets/js/Lang_switcher';
import './languageswitcher.scss';

export const variant_options = {
  blue: 'blue',
  white: 'white',
};

export const Languageswitcher = ({
  headerText, data, lang, ...args
}) => {
  useEffect(() => {
    LangSwitch();
  }, []);

  return (
    <div className="dropdown-language">
      <button className={[`${variant_options[`${args.variant}`]}`].join(' ')} aria-label="English, Select your language" aria-expanded="false">{headerText}</button>
      <ul role="menu">
        {data.map((item, index) => (
          <li key={index} role="menuitem" >
            <a href="#" lang={item.lang} hrefLang={item.lang} tabindex="0">
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
