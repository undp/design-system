const path = require('path');
const glob = require('glob');
const fs = require('fs');

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
    './stories/assets/js/init.js', './stories/assets/js/storybook-init.js', // initialization script, not a module, doesn't need to be bundled
    './stories/**/_!(swiper)*.scss', // no partials
    './stories/**/normalize.scss', // merged atom into base styling
    './stories/**/style.scss', // we don't need this file
    './stories/Atom/**', // merged atom into base styling
    './stories/**/*.mdx',
    './stories/**/*.jsx',
    './stories/**/*.stories.js',
  ];

  // Collect for cumulative bundle generation (css only)
  const componentScssList = [];
  const templateScssList = [];

  // change pattern if finding for JS only
  if (type == 'js') {
    suggestFiles = '/assets/**/*.js';
  }

  // wildcard file discovery
  glob.sync(`./stories${suggestFiles}`, { ignore: ignoreFiles }).map((file) => {
    let fileName = path.basename(file, path.extname(file));
    let objKey = `${cssPathPrefix}/components/${fileName}`;

    if (type == 'js') {
      objKey = `js/${fileName}`;
    }

    const isTemplate = file.indexOf('Templates') > 0;

    if (isTemplate) {
      objKey = `${cssPathPrefix}/templates/${fileName}`;
    }

    if (file.indexOf('assets/scss') > 0) {
      objKey = `${cssPathPrefix}/${fileName}`;
    }

    if (file.indexOf('/_') > 0) {
      fileName = fileName.replace(/[_]/g, '');
      objKey = `${cssPathPrefix}/components/${fileName}`;
    }

    files[objKey] = file;

    // Build cumulative lists only for css build (exclude base + templates from components bundle logic conditions below)
    if (type === 'css') {
      // Exclude base-minimal & other root asset scss from component aggregation
      const isBase = file.indexOf('assets/scss') > 0;
      if (!isBase) {
        if (isTemplate) {
          templateScssList.push(file);
        } else {
          componentScssList.push(file);
        }
      }
    }
  });

  // Generate cumulative bundle entries (css only)
  if (type === 'css') {
    const genDir = path.resolve(__dirname, '.generated');
    if (!fs.existsSync(genDir)) {
      fs.mkdirSync(genDir);
    }

    const toImportBlock = (filesArr) => filesArr.map(f => {
      // make path relative for nicer source maps
      const rel = path.relative(genDir, path.resolve(__dirname, f.replace(/^\.\//, ''))).replace(/\\/g, '/');
      return `@import "${rel}";`;
    }).join('\n');

    const componentsBundlePath = path.join(genDir, 'components.bundle.scss');
    const templatesBundlePath = path.join(genDir, 'templates.bundle.scss');

    fs.writeFileSync(componentsBundlePath, `// AUTO-GENERATED: Aggregated component styles\n${toImportBlock(componentScssList)}\n`);
    fs.writeFileSync(templatesBundlePath, `// AUTO-GENERATED: Aggregated template styles\n${toImportBlock(templateScssList)}\n`);

    // Keys to produce components.min.css and template.min.css
    files[`${cssPathPrefix}/components`] = componentsBundlePath; // -> css/components.min.css
    files[`${cssPathPrefix}/templates`] = templatesBundlePath;    // -> css/template.min.css
  }
  return files;
};