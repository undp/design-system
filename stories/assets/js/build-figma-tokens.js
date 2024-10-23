import StyleDictionary from 'style-dictionary'

const myStyleDictionary = new StyleDictionary()

const config = await myStyleDictionary.extend({
  "source": ["../../../figma-tokens/input/**/*.json"],
  "platforms": {
    "scss": {
      "buildPath": "../../../stories/assets/scss/figma-scss",
      "transformGroup": "scss",
      "files": [
        {
          "format": "scss/figma-variables",
          "destination": "_figma-variables.scss"
        }
      ]
    }
  }
});

config.buildAllPlatforms();
