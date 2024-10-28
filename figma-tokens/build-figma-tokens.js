import StyleDictionary from 'style-dictionary';

const config = StyleDictionary.extend({
  source: ['../../../figma-tokens/input/**/*.json'],
  platforms: {
    scss: {
      buildPath: '../../../stories/assets/scss/figma-scss/',
      transformGroup: 'scss',
      files: [
        {
          format: 'scss/variables',
          destination: '_figma-variables.scss',
        },
      ],
    },
  },
});

config.buildAllPlatforms();
