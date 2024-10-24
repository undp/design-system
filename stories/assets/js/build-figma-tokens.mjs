import StyleDictionary from 'style-dictionary';

const config = {
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
};

const myStyleDictionary = StyleDictionary.extend(config);

myStyleDictionary.buildAllPlatforms();
