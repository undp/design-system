import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initializeRTL } from 'storybook-addon-rtl';
import '../stories/assets/scss/normalize.scss';

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
}

/* Implementing locale for language switcher */
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




