import StyleDictionary from 'style-dictionary';

const config = {
  source: ['../../../figma-tokens/input/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: '../../../stories/assets/scss/figma-scss/',
      files: [{
        destination: '_figma-variables.scss',
        format: 'scss/variables',
      }],
    },
  },
};

const StyleDictionaryExtended = StyleDictionary.extend(config);
StyleDictionaryExtended.buildAllPlatforms();
