import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initializeRTL } from 'storybook-addon-rtl';
import anysort from 'anysort'
import { addParameters } from '@storybook/react'
import renderToHTML from './renderToHTML'

//import '../stories/assets/scss/normalize.scss';

initializeRTL();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    transformSource: (src, storyContext) => renderToHTML(storyContext.storyFn),
  },
   options: {
    storySort: {
      order: ['Getting started', ['Intro', 'How to use our design system?', 'Browser support'],'Foundation','Components', ,['Navigation components',['Breadcrumbs'],['Main Navigation']],'Patterns', 'Utilities','Templates' ],
    },
  },
}

/* Implementing locale for language switcher */
// Note: Languages added to items array need to be added to the getLangCode() function below.
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'english', title: 'English' },
        { value: 'arabic', title: 'Arabic' },
        { value: 'burmese', title: 'Burmese' },
        { value: 'japanese', title: 'Japanese' }
      ],
    },
  },
};


addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
    storySort: (previous, next) => {
      const [previousStory, previousMeta] = previous
      const [nextStory, nextMeta] = next

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Getting started/**',
        'Foundation/**',
        'Components/**',
        'Patterns/**',
        'Utilities/**',
        'Templates/**'
      ])
    }
  },
})

/**
 * Function to get current language code.
 * @param {*} Story renders Stories in iFrame.
 * @param {*} context Current context for Addons.
 * @returns Current Language Code.
 */
const getLangCode=(Story,context)=>{
  let activeLang = context.globals.locale;

  // Set window object for iframe.
  window.UNDP.langCode = (window.UNDP) ? activeLang : window.UNDP= { langCode : activeLang };

  // Language Array to map language alpha code.
  const langArr = {
    'english' : 'en',
    'arabic': 'ar',
    'burmese': 'my',
    'japanese': 'ja'
  };

  // Check if language exists.
  if (typeof langArr[activeLang] == 'undefined') {
    activeLang = 'english';
  }

  // Set HTML lang attribute for iframe.
  const htmlElem = document.querySelector('html');
  htmlElem.setAttribute('lang', langArr[activeLang]);

  return (
    <Story {...context} />
  )
}

// Trigger callback in Storybook Addons.
export const decorators = [getLangCode];
