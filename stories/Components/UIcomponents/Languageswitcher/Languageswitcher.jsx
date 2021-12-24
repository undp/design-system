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
    <div className="dropdown-language sr-only">
      <button className={['dropdown-btn', `${variant_options[`${args.variant}`]}`].join(' ')} aria-label="English, Select your language" aria-expanded="false">{headerText}</button>
      <ul className="dropdown-language__content" role="listbox">
        {data.map((item, index) => (
          <li key={index}>
            <a href="#" lang={item.lang} hreflang={item.lang} role="option">
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
