import React from 'react';
import { Meta, Story, Canvas, Source } from '@storybook/addon-docs';
import { Images } from './ImageCaptionCredit';
import farmlandlg from '../../../assets/images/farmland-lg.jpg';
import farmlandmd from '../../../assets/images/farmland-md.jpg';
import farmlandsm from '../../../assets/images/farmland-sm.jpg';

export default {
  title: 'Foundation/Images/Image with credit + caption',
  argTypes: {
    size: {
      options: ['wide', 'medium', 'portrait'],
      control: { type: 'inline-radio' },
    },
    caption: {
      options: ['true', 'false'],
      control: { type: 'inline-radio' },
    },
    credit: {
      options: ['true', 'false'],
      control: { type: 'inline-radio' },
    },
    animation: {
      options: ['true', 'false'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    size: 'wide',
    caption: 'true',
    credit: 'true',
    animation: 'false',
  },
};

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return {
        label: ['UNDP/Angola', <br />, <strong>Jerome Bell</strong>],
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus. ',
      };
    case 'ukrainian':
      return {
        label: ['ПРООН в Україні', <br />, <strong>Андрій Крєпкіх</strong>],
        paragraph:
          'Аварійні роботи, що сприяють відновленню та відбудові',
      };
    case 'arabic':
      return {
        label: [
          'برنامج الأمم المتحدة الإنمائي / أنغولا',
          <br />,
          <strong>جيروم بيل</strong>,
        ],
        paragraph:
          'الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Morbi lorem tortor، fermentum eu lorem at، venenatis malesuada laughter.',
      };
    case 'burmese':
      return {
        label: ['UNDP/အန်ဂိုလာ', <br />, <strong>ဂျရုမ်း ဘဲလ်</strong>],
        paragraph:
          'နာကျင်မှုကိုယ်တိုင်က နာကျင်ပေမယ့် အဓိက အာရုံစိုက်တာက ဖောက်သည်အပေါ်ပါ။ Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada ရယ်မောခြင်း။',
      };
    case 'japanese':
      return {
        label: ['UNDP /アンゴラ', <br />, <strong>ジェロームベル</strong>],
        paragraph:
          '痛み自体は多くの痛みですが、主な焦点は顧客にあります。 Morbi lorem tortor、fermentum eu lorem at、venenatismalesuadaの笑い声。',
      };
    default:
      return {
        label: ['UNDP/Angola', <br />, <strong>Jerome Bell</strong>],
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus. ',
      };
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Images
      imagelg={farmlandlg}
      imagemd={farmlandmd}
      imagesm={farmlandsm}
      alt="farmland"
      label={caption.label}
      paragraph={caption.paragraph}
      {...args}
    />
  );
};

export const ImageCaptionCreditStory = Template.bind({});
ImageCaptionCreditStory.args = {
  size: 'wide',
  caption: true,
  credit: true,
  animation: false,
};

// Documentation content
ImageCaptionCreditStory.parameters = {
  docs: {
    description: {
      component: `
# Image with caption and credit component

The Image with Caption and Credit describes the image and gives credit to its source.

## Overview

The Image with caption and credit creates boxes that are usually teasing some kind of content like- Image, Text, and Image author name. A grid system is used to manage the different types of sizes and caption molecules are used for creating the card.

#### When to use:

- When description and credit for the source of the image are to be added.

### Formatting

#### Default

It consists of a grid with an image and the description and the source of the image mentioned below or beside the image.

### Behaviors

#### States

It consists of three states: Wide, Medium, and Portrait.

- Wide: In the wide state, the image is large-sized and the caption and credit are mentioned below the image.
- Medium: In the medium state, the image is medium-sized and the caption and credit are mentioned below the image.
- Portrait: In portrait state, the image is situated on either side of the grid, and the caption and credit beside the image.

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-caption.min.css

#### JS:

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js

### Interactions

When the page containing the image is opened, the image zooms out and gives a 3-D effect.

### Changelog

1.0 — Released component
`,
    },
  },
};
