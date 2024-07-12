import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Chips } from './Chips';

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return { detail: 'Label' };
    case 'ukrainian':
      return { detail: 'Мітка' };
    case 'arabic':
      return { detail: 'ملصق' };
    case 'burmese':
      return { detail: 'တံဆိပ်' };
    case 'japanese':
      return { detail: 'ラベル' };
    default:
      return { detail: 'Label' };
  }
};

export default {
  title: 'Components/UI components/Buttons/Chips',
  argTypes: {
    Type: {
      options: ['Without X', 'With X'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    Type: 'Without X',
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <Chips label={caption.detail} {...args}></Chips>;
};

export const ChipsStory = Template.bind({});
ChipsStory.args = {
  Type: 'Without X',
};

ChipsStory.parameters = {
  docs: {
    description: {
      component: `
# Buttons and Labels

A button describes what action will be performed when a user clicks or touches it.

### Overview

A button describes the call to action that will be performed when the user clicks/touches it. It has a label and an optional animation.

#### When to use:

- Buttons should be used as primary or secondary calls to actions
- Ideally, a page should have one or two primary buttons only. Other call-to-actions should be shown as secondary buttons
- Examples of buttons can be to “VIEW MORE” or “READ MORE” or “SIGN UP”
- If there are multiple choices for an action item, one default button should be active and the other buttons inactive

### Formatting

#### Default

There are multiple button types in our design system

1. Primary button with arrow and without arrows
2. Secondary buttons without the arrow
3. CTA links with and without expanding arrows
4. Chips

### Content

### Behaviors

#### States

Chips: Chips are used to show an active search or filter term.

Chip with default state, and an icon. The close icon lets them cancel or delete the information.

Chip with hover state and icon which changes appearance when a mouse hovers over it.

Chip with default state and no close icon which means it doesn’t provide the option of deleting the information written or action which has been taken.

Chip with hover state and close icon. Changes appearance once the mouse moves over it.

<Canvas>
  <Story name="Chips">
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      return <Chips label={caption.detail} {...args}></Chips>;
    }}
  </Story>
</Canvas>

### Usage

- Copy the HTML from the HTML Tab of canvas for either Chips, CTA Button, and CTA Link from the controls.
- Include the CSS files listed below concerning the button you choose.

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/chips.min.css

Use above CSS concerning Chips

#### JS:

NA

### Interactions

- The hover state is applied to the entire button.

### Changelog

1.0 — Released component
`,
    },
  },
};
