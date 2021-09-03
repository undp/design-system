module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@whitespace/storybook-addon-html',
    'storybook-addon-rtl',
    "storybook-rtl-addon",
    'storybook-addon-locale/register',
    '@storybook/addon-a11y',
    '@storybook/preset-scss'
  ]
}