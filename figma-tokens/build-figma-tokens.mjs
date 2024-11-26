import StyleDictionary from 'style-dictionary';

// function kebabIt(str) {
//   return str
//       .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
//       .join('-')
//       .toLowerCase();
// }

// StyleDictionaryPackage.registerFormat({
//   name: 'scss/variables',
//   formatter: function (dictionary, config) {
//     return `${this.selector} {
//       ${dictionary.allProperties.map(prop => `${prop.name}: ${prop.value};`).join('\n')}
//     }`
//   }
// });

const sd = new StyleDictionary('./figma-tokens/config/config.json');
await sd.buildAllPlatforms();

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

//Px To Rem

// function fontPxToRem(token, options) {
//   const baseFont = getBasePxFontSize(options);
//   const floatVal = parseFloat(token.value);
//   if (isNaN(floatVal)) {
//     console.log('NaN error', token.name, token.value, 'rem');
//   }
//   if (floatVal === 0) {
//     return '0';
//   }
//   return `${floatVal / baseFont}rem`;
// }

// StyleDictionaryPackage.registerTransform({
//   name: 'size/pxToRem',
//   type: 'value',
//   matcher: (token) => ['fontSizes'].includes(token.type),
//   transformer: (token, options) => fontPxToRem(token, options)
// })
// //
// StyleDictionaryPackage.registerTransform({
//   name: 'sizes/px',
//   type: 'value',
//   matcher: function(prop) {
//       // You can be more specific here if you only want 'em' units for font sizes
//       return ["fontSize", "spacing", "borderRadius", "borderWidth", "sizing"].includes(prop.attributes.category);
//   },
//   transformer: function(prop) {
//       // You can also modify the value here if you want to convert pixels to ems
//       return parseFloat(prop.original.value) + 'px';
//   }
// });
