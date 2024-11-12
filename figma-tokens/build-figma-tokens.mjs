import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary('./figma-tokens/config/config.json');
await sd.buildAllPlatforms();

//

// import StyleDictionary from 'style-dictionary';

// const config = {
//   source: ['../transformed-tokens/**/*.json'],
//   platforms: {
//     scss: {
//       transformGroup: 'scss',
//       buildPath: '../../stories/assets/scss/figma-scss/',
//       files: [
//         {
//           destination: '_figma-variables.scss',
//           format: 'scss/variables',
//         },
//       ],
//     },
//   },
// };

// const sd = StyleDictionary.extend(config);
// sd.buildAllPlatforms();

//

// import {StyleDictionary} from 'style-dictionary-utils'

// const myStyleDictionary = new StyleDictionary()

// // when using style dictionary 4 you whave to await the extend method
// const extendedSd = await myStyleDictionary.extend({
//   "source": ["../transformed-tokens/**/*.json"],
//   "platforms": {
//     "scss": {
//       "transformGroup": "scss",
//       "buildPath": "../../stories/assets/scss/figma-scss/",
//       "files": [
//         {
//           "destination": "_figma-variables.scss",
//           "format": "scss/variables"
//         }
//       ]
//     }
//   }
// });

// extendedSd.buildAllPlatforms();
