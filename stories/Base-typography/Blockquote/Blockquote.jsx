import React from 'react';
import PropTypes from 'prop-types';
// import { useLocale } from 'storybook-addon-locale';
import './blockquote.scss';


// const getCaptionForLocale = (locale) => {
//   switch (locale) {
//     case 'en': return 'Hello';
//     case 'fr': return 'Bonjour';
//     case 'zh': return '你好';
//     default:
//       return 'Hello'
//   }
// }
/**
 * Primary UI component for user interaction
 */
export const Blockquote = ({ text }) => {
  // const locale = useLocale(context);
  // console.log("eee", lang)
  // const [globals, updateGlobals] = useGlobals();

  // console.log(locale);
  return (
    <blockquote
      cite=""
    >
      {text}
      {/* {locale === 'en' && <div>English</div>}
      {locale === 'fr' && <div>French</div>} */}
    </blockquote>
  );
};

Blockquote.propTypes = {
  /**
   * Blockquote contents
   */
  text: PropTypes.string,
};

