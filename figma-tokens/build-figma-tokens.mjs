import StyleDictionary from 'style-dictionary';

const sd = StyleDictionary.extend('./config/config.json');

await sd.buildAllPlatforms();
