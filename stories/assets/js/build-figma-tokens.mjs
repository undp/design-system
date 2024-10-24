import StyleDictionary from 'style-dictionary';

const myStyleDictionary = StyleDictionary.extend({
  source: ["../../../figma-tokens/input/**/*.json"],
  platforms: {
    scss: {
      buildPath: "../../../stories/assets/scss/figma-scss/",
      transformGroup: "scss",
      files: [
        {
          format: "scss/variables",
          destination: "_figma-variables.scss",
        },
      ],
    },
  },
});

myStyleDictionary.buildAllPlatforms();
