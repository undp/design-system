// import { INITIAL_VIEWPORTS } from 'storybook/viewport';
// import * as RTLAddon from 'storybook-addon-rtl';
import { allModes } from './modes'
import renderToHTML from './renderToHTML'
import { addons } from 'storybook/preview-api';

// include base styling globally
import '!style-loader!css-loader!sass-loader!../docs/css/components/documentation.min.css'
import '!style-loader!css-loader!sass-loader!../stories/assets/scss/base-minimal.scss'

//import init-loader
import { initializeComponents } from '../stories/assets/js/storybook-init';

// Configure Storybook
const parameters = {
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
    options: {
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
      order: ['Getting started', ['Intro', 'How to use our design system?', 'Browser support', 'Internationalization'], 'Foundation', 'Components', 'Patterns', 'Utilities', 'Templates'],
      includeNames: true
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
  layout: 'fullscreen',
  backgrounds: {
    options: {
      light: { name: "light", value: "#FFFFFF" },
      dark: { name: "dark", value: "#55606e" }
    },
    disabled: true
  }
}

/* Implementing locale for language switcher */
const globalTypes = {
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
        { value: 'ukrainian', title: 'Ukrainian' },
        // { value: 'azerbaijani', title: 'Azerbaijani' },
        // { value: 'georgian', title: 'Georgian' },
        // { value: 'khmer', title: 'Khmer' },
        // { value: 'nepali', title: 'Nepali' },
        // { value: 'chinese', title: 'Chinese' },
        // { value: 'korean', title: 'Korean' }
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
  },
  // theme: {
  //   description: 'Global theme for components',
  //   toolbar: {
  //     // The label to show for this toolbar item
  //     title: 'Theme',
  //     icon: 'circlehollow',
  //     // Array of plain string values or MenuItem shape (see below)
  //     items: ['light', 'dark'],
  //     // Change title based on selected value
  //     dynamicTitle: true,
  //   },
  // },
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
    'ukrainian': 'uk',
  };

  if (typeof langArr[activeLang] == 'undefined') {
    activeLang = 'english';
  }

  const htmlElem = document.querySelectorAll('#storybook-root, .sb-story');
  htmlElem.forEach(ele => {
    ele.setAttribute('lang', langArr[activeLang]);
    ele.setAttribute('dir', activeLang === 'arabic' ? 'rtl' : 'ltr');
  });

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

// Decorator: Dynamically set canvas/background color based on the story arg `colorTheme` only (no global emission)
const setColorThemeBackgroundFromArgs = (Story, context) => {
  // Prefer explicit story arg, fallback to global theme
  const theme = context.args?.colorTheme || context.globals?.theme || 'light';
  const body = document.body;
  const bg = theme === 'dark' ? '#55606e' : '#FFFFFF';
  if (body.style.backgroundColor !== bg) {
    body.style.backgroundColor = bg;
  }
  body.setAttribute('data-color-theme', theme);
  return <Story {...context} />;
};

export default {
  parameters: parameters,
  globalTypes: globalTypes,
  initialGlobals: { theme: 'light' },
  decorators: [getLangCode, sbFrameReset, setDirection, setAccentClass, setColorThemeBackgroundFromArgs, initializeComponents],
  tags: ['autodocs', 'autodocs'],
};