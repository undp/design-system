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
    './stories/**/documentation.scss', // no Storybook documentation
    './stories/Templates/* rtl/*.scss',
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
    // Normalize path to use forward slashes for consistent checking across OS
    const normalizedFile = file.replace(/\\/g, '/');
    let fileName = path.basename(file, path.extname(file));
    let objKey = `${cssPathPrefix}/components/${fileName}`;

    if (type == 'js') {
      objKey = `js/${fileName}`;
    }

    const isTemplate = normalizedFile.includes('Templates');

    if (isTemplate) {
      objKey = `${cssPathPrefix}/templates/${fileName}`;
    }

    if (normalizedFile.includes('assets/scss')) {
      objKey = `${cssPathPrefix}/${fileName}`;
    }

    if (normalizedFile.includes('/_')) {
      fileName = fileName.replace(/[_]/g, '');
      objKey = `${cssPathPrefix}/components/${fileName}`;
    }

    // Ensure paths start with ./ for webpack resolution
    const resolvedPath = normalizedFile.startsWith('./') ? normalizedFile : `./${normalizedFile}`;
    files[objKey] = resolvedPath;

    // Build cumulative lists only for css build (exclude base + templates from components bundle logic conditions below)
    if (type === 'css') {
      // Exclude base-minimal & other root asset scss from component aggregation
      const isBase = normalizedFile.includes('assets/scss');
      if (!isBase) {
        // Ensure paths start with ./ for webpack resolution
        const resolvedPath = normalizedFile.startsWith('./') ? normalizedFile : `./${normalizedFile}`;
        if (isTemplate) {
          templateScssList.push(resolvedPath);
        } else {
          componentScssList.push(resolvedPath);
        }
      }
    }
  });

  // Generate cumulative bundle entries (css only)
  if (type === 'css') {

    // Ensure components sit after organism entries and before patterns in the bundle
    if (componentScssList.length) {
      const isComponentsEntry = (file) => file.replace(/\\/g, '/').includes('/stories/Components/');
      const isPatternsEntry = (file) => file.replace(/\\/g, '/').includes('/stories/Patterns/');
      const isOrganismEntry = (file) => file.replace(/\\/g, '/').includes('/stories/Organism/');

      const componentsEntries = [];
      const retainedEntries = componentScssList.filter((file) => {
        if (isComponentsEntry(file)) {
          componentsEntries.push(file);
          return false;
        }
        return true;
      });

      if (componentsEntries.length) {
        const findLastIndex = (arr, predicate) => {
          for (let i = arr.length - 1; i >= 0; i -= 1) {
            if (predicate(arr[i])) {
              return i;
            }
          }
          return -1;
        };

        const firstPatternIndex = retainedEntries.findIndex(isPatternsEntry);
        const lastOrganismIndex = findLastIndex(retainedEntries, isOrganismEntry);

        let insertionIndex = retainedEntries.length;

        if (lastOrganismIndex !== -1) {
          insertionIndex = lastOrganismIndex + 1;
        } else if (firstPatternIndex !== -1) {
          insertionIndex = firstPatternIndex;
        }

        // Guard to keep components before patterns even if organisms absent
        if (firstPatternIndex !== -1 && insertionIndex > firstPatternIndex) {
          insertionIndex = firstPatternIndex;
        }

        retainedEntries.splice(insertionIndex, 0, ...componentsEntries);

        componentScssList.length = 0;
        componentScssList.push(...retainedEntries);
      }
    }

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

    //

    fs.writeFileSync(componentsBundlePath, `// AUTO-GENERATED: Aggregated component styles\n${toImportBlock(componentScssList)}\n`);
    fs.writeFileSync(templatesBundlePath, `// AUTO-GENERATED: Aggregated template styles\n${toImportBlock(templateScssList)}\n`);

    // Keys to produce components.min.css and template.min.css
    files[`${cssPathPrefix}/components`] = componentsBundlePath; // -> css/components.min.css
    files[`${cssPathPrefix}/templates`] = templatesBundlePath;    // -> css/template.min.css
  }
  return files;
};