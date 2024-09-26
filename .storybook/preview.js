// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import * as RTLAddon from 'storybook-addon-rtl';
import renderToHTML from './renderToHTML';
import { allModes } from './modes';


// include base styling globally
import '!style-loader!css-loader!sass-loader!../stories/assets/scss/base-minimal.scss';
import '!style-loader!css-loader!sass-loader!../docs/css/components/documentation.min.css';

// Log the contents of RTLAddon for debugging

// console.log(RTLAddon);

// if (RTLAddon && typeof RTLAddon.default === 'function') {
//   RTLAddon.default(); // Use the default export if it is a function
// } else {
//   console.error('RTL initialization method not found.');
// }

// Configure Storybook
export const parameters = {
  // actions: { disable: true },
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
    // viewports: INITIAL_VIEWPORTS,
    viewports: {
      small: { name: "Small", styles: { width: "375px", height: "812px" } },
      medium: { name: "Medium", styles: { width: "768px", height: "900px" } },
      large: { name: "Large", styles: { width: "1380px", height: "768px" } },
      xlarge: { name: "XLarge", styles: { width: "1600px", height: "900px" } },
      hd: { name: "HD", styles: { width: "1920px", height: "1080px" } },
    },
  },
  docs: {
    source: {
      transform: (src, storyContext) => renderToHTML(storyContext.storyFn),
      type: 'code',
    }
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Getting started', ['Intro', 'How to use our design system?', 'Browser support'], 'Foundation', 'Components', 'Patterns', 'Utilities', 'Templates'],
      includeName: true
    },
  },
  chromatic: {
    modes: {
      small: allModes["small"],
      medium: allModes["medium"],
      large: allModes["large"],
      xlarge: allModes["xlarge"],
      hd: allModes["hd"],
    },
    pauseAnimationAtEnd: true,
    delay: 1500
  },
}

/* Implementing locale for language switcher */
export const globalTypes = {
  locale: {
    title: 'Locale',
    description: 'locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      title: 'Locale',
      items: [
        { value: 'english', title: 'English', right: 'Default' },
        { value: 'arabic', title: 'Arabic' },
        { value: 'burmese', title: 'Burmese' },
        { value: 'japanese', title: 'Japanese' },
        { value: 'ukrainian', title: 'Ukrainian' }
      ],
    },
  },
  accent: {
    title: 'Accent color',
    description: 'Define the accent color.',
    defaultValue: '',
    toolbar: {
      icon: 'paintbrush',
      title: 'Accent color',
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

const getLangCode = (Story, context) => {
  let activeLang = context.globals.locale;

  let delay = 10;
  setTimeout(function () {
    const evt = new Event('load');
    window.dispatchEvent(evt);
  }, delay);

  window.UNDP.langCode = (window.UNDP) ? activeLang : window.UNDP = { langCode: activeLang };

  const langArr = {
    'english': 'en',
    'arabic': 'ar',
    'burmese': 'my',
    'japanese': 'ja',
    'ukrainian': 'uk'
  };

  if (typeof langArr[activeLang] == 'undefined') {
    activeLang = 'english';
  }

  const htmlElem = document.querySelector('html');
  htmlElem.setAttribute('lang', langArr[activeLang]);

  return (
    <Story {...context} />
  )
}

const sbFrameReset = (Story, context) => {
  const iframeBody = document.querySelector('body');
  const sidebarItem = parent.document.querySelectorAll('.sidebar-item');
  sidebarItem.forEach(function (item, i) {
    item.addEventListener('click', function (e) {
      const classNames = ['sdgmodal-open', 'color-blue'];
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
  let direction = 'ltr';
  const input = parent.document.querySelector('[aria-controls="rtl-status"]');
  const checkRTL = (elem) => {
    if (elem.checked) {
      direction = 'rtl';
    }
  }
  if (input && input.checked) {
    input.addEventListener('change', checkRTL(input), false);
  }
  if (typeof window.UNDP === 'undefined') {
    window.UNDP = {};
  }
  window.UNDP.dir = direction;

  return (
    <Story {...options} />
  )
}

const setAccentClass = (Story, context) => {
  let accent = context.globals.accent;
  const bodyElem = document.querySelector('body');

  bodyElem.classList.forEach((item) => {
    if (item.startsWith('accent-')) {
      bodyElem.classList.remove(item);
    }
  });

  if (Boolean(accent)) {
    bodyElem.classList.add(`accent-${accent}`);
  }

  return (
    <Story {...context} />
  )
}

export const decorators = [getLangCode, sbFrameReset, setDirection, setAccentClass];
export const tags = ['autodocs', 'autodocs'];
