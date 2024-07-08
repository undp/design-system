import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Authorimg } from './AuthorImages';
import user from '../../../assets/images/author.png';

export default {
  title: 'Foundation/Images/Author image',
  argTypes: {
    variant: {
      name: 'Size variant',
      options: ['Large', 'Small'],
      control: { type: 'inline-radio' },
    },
    accent: {
      name: 'Hover accent color',
      options: ['global', 'yellow', 'red', 'green', 'blue'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    accent: 'global',
    variant: 'Small',
  },
};

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      const engText = {};
      return engText;
    case 'ukrainian':
      return { detail: '' };
    case 'arabic':
      const arabicText = {};
      return arabicText;
    case 'burmese':
      const burmeseText = {};
      return burmeseText;
    case 'japanese':
      const japaneseText = {};
      return japaneseText;
    default:
      return {};
  }
};

const Template = (args, { globals: { locale, accent } }) => {
  const caption = getCaptionForLocale(locale);
  return <Authorimg image={user} alt="Headshot of XYZ" {...args} />;
};

export const AuthorImageStory = Template.bind({});
AuthorImageStory.args = {
  accent: 'global',
  variant: 'Small',
};

// Documentation content
AuthorImageStory.parameters = {
  docs: {
    description: {
      component: `
# Author Image

The Author Image component reveals the photo of the author.

### Overview

The Author Image component displays the author’s image but does not contain any information.

#### When to use:

- When the image of the author is to be displayed.

### Formatting

#### Default

It’s circular shaped with an image inside it.

### Behaviors

#### States

There are two states in the Author Image component: Small and Large.

- Small
- Large

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css

#### JS:

- N/A

### Changelog

1.0 — Released component
`,
    },
  },
};
