import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initializeRTL } from 'storybook-addon-rtl';
import "../stories/normalize.scss";

// import '../stories/main.scss';

initializeRTL();
// import { addDecorator } from '@storybook/react';
// import { withDirection } from 'storybook-rtl-addon';

// addDecorator(withDirection);

// import { addParameters } from '@storybook/react';

// addParameters({
//   locales: {
//     fa: { dir: 'rtl', name: 'Persian', text: 'فارسی' },
//     en: { dir: 'ltr', name: 'English', text: 'English' },
//   },
//   defaultLocale: 'fa',
// });



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
      //htmlWhitespaceSensitivity: 'strict',
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
