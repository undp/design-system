import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Ctalink } from './CtaLink';

export default {
  title: 'Components/UI components/Buttons/CTA link',
  argTypes: {
    Type: {
      options: ['Expanding Arrow', 'Space'],
      control: { type: 'inline-radio' },
    },
    Tag: {
      options: ['Hyperlink', 'Inline'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    Type: 'Expanding Arrow',
    Tag: 'Hyperlink',
  },
};

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return { detail1: 'READ MORE' };
    case 'ukrainian':
      return { detail1: 'ЧИТАТИ ДАЛІ' };
    case 'arabic':
      return { detail1: 'اقرأ أكثر' };
    case 'burmese':
      return { detail1: 'ပိုပြီးဖတ်ပါ' };
    case 'japanese':
      return { detail1: '続きを読む' };
    default:
      return { detail1: 'READ MORE' };
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  // Replace key
  args['button_option'] = args['Tag'];
  delete args['Tag'];
  return <Ctalink label={caption.detail1} {...args}></Ctalink>;
};

export const CtaLinkStory = Template.bind({});
CtaLinkStory.args = {
  Type: 'Expanding Arrow',
  Tag: 'Hyperlink',
};

// Documentation content
CtaLinkStory.parameters = {
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

CTA Link:
The CTA link with the arrow prompts the users to take action and is in default state but the arrow does not expand.

The CTA links with the arrow in the hover state which changes its appearance once the mouse hovers over it but the arrow does not expand.

The CTA link with space expand in default state is a space expand link where the space after the text expands but the arrow does not.

The CTA link with the arrow expand is in a hover state. When the mouse hovers over the link the text changes its appearance and the arrow expands.

### Usage

- Copy the HTML from the HTML Tab of canvas for either Chips, CTA Button, and CTA Link from the controls.
- Include the CSS files listed below concerning the button you choose.

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css

Use above CSS concerning CTA link.

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
