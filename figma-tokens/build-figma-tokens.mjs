import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary('./figma-tokens/config/config.json');
await sd.buildAllPlatforms();
