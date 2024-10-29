import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary('./config/config.json');
await sd.buildAllPlatforms();
