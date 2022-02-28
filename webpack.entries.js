const path = require('path');
const glob = require('glob');
const cssPathPrefix = 'css';

/*
* Get entry points for webpack
* CSS and JS seperately
*/
module.exports = (type = 'css') => {
  let files = {};
  let suggestFiles = '/**/*.scss';
  let ignoreFiles = [
    './node_modules',
    './stories/assets/**/lib/**',
    './stories/**/_!(swiper)*.scss', // no partials
    './stories/**/normalize.scss', // merged atom into base styling
    './stories/**/style.scss', // we don't need this file
    './stories/Atom/**', // merged atom into base styling
    './stories/**/*.mdx',
    './stories/**/*.jsx'
  ];

  // change pattern if finding for JS only
  if (type == 'js') {
    suggestFiles = '/assets/**/*.js';
  }

  // wildcard file discovery
  glob.sync(`./stories${suggestFiles}`, {
    ignore: ignoreFiles,
  }).map(file => {
    let fileName = path.basename(file, path.extname(file));
    let objKey = `${cssPathPrefix}/components/${fileName}`;

    // if js no 'components' in directory
    if (type == 'js') {
      objKey = `js/${fileName}`;
    }

    // if templates/pages create a seperate directory
    if (file.indexOf('Templates') > 0) {
      objKey = `${cssPathPrefix}/templates/${fileName}`;
    }

    // if base styling keep it in root
    if (file.indexOf('assets/scss') > 0) {
      objKey = `${cssPathPrefix}/${fileName}`;
    }

    // if scss is a partial then remove the leading '_'.
    if (file.indexOf('/_') > 0) {
      fileName = fileName.replace(/[_]/g, '');
      objKey = `${cssPathPrefix}/components/${fileName}`
    }

    // add 'css' and 'js' prefix to create auto directory
    files[objKey] = file;
  });
  return files;
};
