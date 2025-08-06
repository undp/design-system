import { create } from 'storybook/theming';

export default create({
  base: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  brandTitle: 'UNDP Design system',
  brandUrl: 'https://www.undp.org/',
  brandImage: './images/undp-logo-blue.svg'
});
