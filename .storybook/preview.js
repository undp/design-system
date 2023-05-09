import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initializeRTL } from 'storybook-addon-rtl';
// import { anysort } from 'anysort'
// import { addParameters } from '@storybook/react'
import renderToHTML from './renderToHTML'

// include fonts globally
import '../stories/assets/scss/_fonts.scss';

// initialise RTL
initializeRTL();

// Configure Storybook
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
      removeComments: true,
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
      method: 'alphabetical',
      order: ['Getting started',['Intro','How to use our design system?','Browser support'],'Foundation','Components', 'Patterns', 'Utilities','Templates' ],
      includeName: true
    },
  },
  chromatic: {
    pauseAnimationAtEnd: true,
    delay: 1500
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
        { value: 'english', title: 'English', right: 'Default' },
        { value: 'arabic', title: 'Arabic' },
        { value: 'burmese', title: 'Burmese' },
        { value: 'japanese', title: 'Japanese' }
      ],
    },
  },
  accent: {
    name: 'Accent color',
    description: 'Define the accent color.',
    defaultValue: '',
    toolbar: {
      icon: 'paintbrush',
      showName: true,
      items: [
        { value: '', title: 'Default accent', right: 'Default' },
        { value: 'yellow', title: 'Yellow' },
        { value: 'green', title: 'Green' },
        { value: 'red', title: 'Red' },
        { value: 'blue', title: 'Azure' },
      ]
    }
  }
};

/**
 * Function to get current language code.
 * 
 * @param {*} Story renders Stories in iFrame.
 * @param {*} context Current context for Addons.
 * @returns Current Language Code.
 */
const getLangCode = (Story, context) => {
  let activeLang = context.globals.locale;

  // trigger onload event
  // UI has some animation element which trigger on load.
  let delay = 10;
  setTimeout(function() {
    const evt = new Event('load');
    window.dispatchEvent(evt);
  }, delay);

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

const sbFrameReset = (Story, context) => {
  // Get Storybook Iframe's body element.
  const iframeBody = document.querySelector('body');
  // Get Storybook sidebar items in an array.
  const sidebarItem = parent.document.querySelectorAll('.sidebar-item');
  // Add click event listner on each sidebar item.
  sidebarItem.forEach(function (item, i) {
    item.addEventListener('click', function (e) {
      // Classes to remove.
      const classNames = ['sdgmodal-open', 'color-blue'];
      // Check if above classes exist in `body` element and remove them.
      if (classNames.some(className => iframeBody.classList.contains(className))) {
        iframeBody.classList.remove(...classNames);
      }
    });
  });
  return (
    <Story {...context} />
  )
}

const setDirection = (Story, options) => {
  // Set default direction.
  let direction = 'ltr';
  // LTR-RTL Toggle button.
  const input = parent.document.querySelector('[aria-controls="rtl-status"]');
  // Callback function for LTR-RTL Toggle.
  const checkRTL = (elem) => {
    if (elem.checked) {
      direction = 'rtl';
    }
  }
  // Change direction on LTR-RTL Toggle.
  if (input && input.checked) {
    input.addEventListener('change', checkRTL(input), false);
  }
  // Set window object for iframe.
  if (typeof window.UNDP === 'undefined') {
    window.UNDP = {};
  }
  window.UNDP.dir = direction;

  return (
    <Story {...options} />
  )
}

/**
 * Function to set a global "accent-COLOR" class to the body.
 * 
 * @param {*} Story renders Stories in iFrame.
 * @param {*} context Current context for Addons.
 * @returns Story with accent color processed.
 */
const setAccentClass = (Story, context) => {
  let accent = context.globals.accent;
  const bodyElem = document.querySelector('body');
  
  // Remove any prexisting accent-COLOR items so we can apply the most recent
  // global selection.
  bodyElem.classList.forEach((item) => {
    if (item.startsWith('accent-')) {
      bodyElem.classList.remove(item);
    }
  });
  
  if (Boolean(accent)) {
    // Set accent class on body tag (the most parent of parents).
    bodyElem.classList.add(`accent-${accent}`);
  }
  
  return (
    <Story {...context} />
  )
}

// Trigger callback in Storybook Addons.
export const decorators = [getLangCode, sbFrameReset, setDirection, setAccentClass];
