# United Nations Development Programme Design System

## Purpose

The purpose of this project is to create unified user interfaces for UNDP by the designer and developers.

These projects will have consistent look and feel and accessible in nature by just following the guidelines in the documentation.

By unifying design elements into reusable components, development will simplify and accelerate the development of these digital products.

The Guide is a living document created to meet the needs of UNDP's front-end developers and designers. If there is a Component or Pattern that you need, or you have any other feedback, question or comment please contact us.


## Demo

Living Style Guide & Documentation: **[Demo](https://design.undp.org)**

## Install from NPM
```bash
npm install @undp/design-system
```
See Starter project at the link below for details of implementaiton

## Starter project

Static generator using Design System as dependency: [UNDP Design System starter template](https://github.com/undp/design-system-starter-template)

## Development

Run the following commands to create/update the code.

```bash
# checkout the codebase
git clone

# install project dependencies
npm install

# runs storybook locally
npm run storybook

# build storybook
npm run build-storybook

# build compiled css and js
npm run build
```

## Figma Design Tokens Integration

The design system includes automated integration with Figma design tokens to ensure consistency between design and code.
See [figma-tokens/README.md](figma-tokens/README.md) for complete documentation.

## List of components

View available Components [here](https://design.undp.org). Every components has its own documentation page on the link provided.

## Assets

- All Design System assets ready for production available as a separate package: [@undp/design-system-assets](https://www.npmjs.com/package/@undp/design-system-assets)
- It can be used as a dependency or linked via CDN (https://cdn.jsdelivr.net/npm/@undp/design-system-assets/)
- CSS components and templates are available as individual css files and as cumulative [components.min.css](https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components.min.css) / [templates.min.css](https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/templates.min.css)
- JS plugins available as inidividual files and as a single script [all.min.js](https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/all.min.js)

## License

MIT license.

## Acknowledgments

The design system is based on [Storybook](https://storybook.js.org/)

Thanks to <a href="https://www.chromatic.com/"><img src="https://avatars.githubusercontent.com/u/24584319?s=20&v=4" alt="Chromatic logo"> Chromatic</a> for providing the visual testing platform that helps us review UI changes and catch visual regressions.
