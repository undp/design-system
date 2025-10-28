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

# In Windows environment apply patch to the mdx1-csf plugin.
# This can be omitted when this PR is merged: https://github.com/storybookjs/mdx1-csf/pull/27
npm run windows-patch-package

# runs storybook locally
npm run storybook

# build storybook
npm run build-storybook

# build compiled css and js
npm run build

# sync design tokens from Figma
npm run tokens:sync
```

### Important

Make sure to run `npm run build` to compile production ready css and js files and include them with your development work. This will help save some extra steps when it comes time to deploy to production.

## Figma Design Token Integration

The UNDP Design System uses Figma as the authoritative source for design tokens (colors, typography, spacing, etc.). These tokens are automatically synchronized to Storybook's SCSS variables.

**Quick Start:**
1. Export tokens from Figma using the Tokens Studio plugin (save as `tokens/figma/tokens.json`)
2. Run `npm run tokens:sync` to synchronize tokens to Storybook
3. Review changes and test components
4. Commit the updated token files

For detailed setup instructions, plugin configuration, and workflow documentation, see [docs/FIGMA_TOKENS_INTEGRATION.md](docs/FIGMA_TOKENS_INTEGRATION.md).

## List of components

View available Components [here](https://design.undp.org). Every components has its own documentation page on the link provided.

## Credits

The design system is based on:

- [Storybook](https://storybook.js.org/)

## Assets

=======

- All the icons/images can be found in the **_docs/images_** directory.
- Fonts: **_docs/fonts_**
- CSS directory at: **_docs/css_**
- JS directory at: **_docs/js_**

## Storybook and File references

| Storybook path                                           | File path                                                       |
| -------------------------------------------------------- | --------------------------------------------------------------- |
| Components/UI components/Cards/Download Card             | stories/Molecules/Blocks/DownloadCard/DownloadCard              |
| Components/UI components/Cards/Publication Card          | stories/Molecules/Blocks/DownloadCard/PublicationCard           |
| Components/UI components/Text/Callout                    | stories/Molecules/Text/BlockquoteComponent                      |
| Components/UI components/Text/CTA Block                  | stories/Molecules/Text/CtaBlock                                 |
| Components/UI components/Text/Heading Big Block          | stories/Molecules/Text/HeadingBig                               |
| Components/UI components/Text/Post Block                 | stories/Molecules/Text/Post                                     |
| Components/UI components/Text/Small Copy Lockup          | stories/Molecules/Text/SmallCopy                                |
| Components/UI components/Text/Tertiary Block             | stories/Molecules/Text/Tertiary                                 |
| Components/UI components/Text/Text Background            | stories/Molecules/Text/TextBackground                           |
| Components/UI components/Text/Text Cta                   | stories/Molecules/Text/TextCta                                  |
| Components/UI components/Author Summary                  | stories/Organism/Blocks/Authorcard                              |
| Patterns/Card grids/Content Cards                        | stories/Organism/Blocks/ContentCard                             |
| Patterns/Card grids/Content Cards With and Without Image | stories/Organism/Blocks/ContentCardWithAndWithoutImage          |
| Patterns/Card grids/Featured Cards                       | stories/Organism/Blocks/FeaturedContentCard/FeaturedCard        |
| Components/UI components/Pagewide Featured Content Card  | stories/Organism/Blocks/FeaturedContentCard/PagewideContentCard |
| Patterns/Card grids/Image Reveal Cards                   | stories/Organism/Blocks/ImageRevealCards                        |
| Components/UI components/Footer                          | stories/Organism/Footer                                         |
| Components/UI components/Stats                           | stories/Organism/Stats                                          |
| Components/UI components/Stats Card Slider               | stories/Organism/Statscardslider                                |
| Utilities/Progress Bar Navigation                        | stories/Atom/Navigation/ProgressBarNavigation                   |

## License

MIT license.

## Acknowledgments

Thanks to <a href="https://www.chromatic.com/"><img src="https://avatars.githubusercontent.com/u/24584319?s=20&v=4" alt="Chromatic logo"> Chromatic</a> for providing the visual testing platform that helps us review UI changes and catch visual regressions.
