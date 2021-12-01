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

