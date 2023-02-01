# United Nations Development Programme Design System

## Purpose

The purpose of this project is to create unified user interfaces for UNDP by the designer and developers.

These projects will have consistent look and feel and accessible in nature by just following the guidelines in the documentation.

By unifying design elements into reusable components, development will simplify and accelerate the development of these digital products.

The Guide is a living document created to meet the needs of UNDP's front-end developers and designers. If there is a Component or Pattern that you need, or you have any other feedback, question or comment please contact us.

## Demo

Living Style Guide & Documentation: **[Demo](https://design.undp.org)**


## Development

Run the following commands to create/update the code.

```bash
# checkout the codebase
git clone

# install project dependencies
yarn install

# runs storybook locally
yarn run storybook

# build storybook
yarn run build-storybook

# linting on codebase
# caution: this will write changes to your files
yarn run lint
```

## List of components

View available Components [here](https://design.undp.org). Every components has its own documentation page on the link provided.

## Credits

The design system is based on:

- [Storybook](https://storybook.js.org/)

## Assets

- All the icons/images can be found in the ***stories/assets/images/Icon*** directory.
- CSS directory at: ***dist/css***.
- JS directory at: ***dist/js***.

## Storybook and File references

| Storybook path  | File path |
| ------------- | ------------- |
| Components/UI components/Cards/Download Card   | stories/Molecules/Blocks/DownloadCard/DownloadCard  |
| Components/UI components/Cards/Publication Card  | stories/Molecules/Blocks/DownloadCard/PublicationCard  |
| Components/UI components/Text/Callout   | stories/Molecules/Text/BlockquoteComponent  |
| Components/UI components/Text/CTA Block  | stories/Molecules/Text/CtaBlock  |
| Components/UI components/Text/Heading Big Block  | stories/Molecules/Text/HeadingBig  |
| Components/UI components/Text/Post Block  | stories/Molecules/Text/Post  |
| Components/UI components/Text/Small Copy Lockup  | stories/Molecules/Text/SmallCopy  |
| Components/UI components/Text/Tertiary Block  | stories/Molecules/Text/Tertiary  |
| Components/UI components/Text/Text Background  | stories/Molecules/Text/TextBackground  |
| Components/UI components/Text/Text Cta  | stories/Molecules/Text/TextCta  |
| Components/UI components/Author Summary  | stories/Organism/Blocks/Authorcard  |
| Patterns/Card grids/Content Cards  | stories/Organism/Blocks/ContentCard  |
| Patterns/Card grids/Content Cards With and Without Image  | stories/Organism/Blocks/ContentCardWithAndWithoutImage  |
| Patterns/Card grids/Featured Cards  | stories/Organism/Blocks/FeaturedContentCard/FeaturedCard  |
| Components/UI components/Pagewide Featured Content Card  | stories/Organism/Blocks/FeaturedContentCard/PagewideContentCard  |
| Patterns/Card grids/Image Reveal Cards  | stories/Organism/Blocks/ImageRevealCards  |
| Components/UI components/Footer  | stories/Organism/Footer  |
| Components/UI components/Stats  | stories/Organism/Stats  |
| Components/UI components/Stats Card Slider  | stories/Organism/Statscardslider  |
| Utilities/Progress Bar Navigation  | stories/Atom/Navigation/ProgressBarNavigation  |

## License

MIT license.
