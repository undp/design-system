const sassGuidelines = require('stylelint-config-sass-guidelines');
const rules = { ...sassGuidelines.rules };

delete rules['declaration-block-single-line-max-declarations'];

module.exports = {
  ...sassGuidelines,
  rules,
};
