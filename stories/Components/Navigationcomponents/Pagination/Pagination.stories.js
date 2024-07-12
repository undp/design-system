import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Pagination } from './Pagination';

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      const engText = { text: 'Page', text2: 'of' };
      return engText;
    case 'ukrainian':
      return { text: 'Сторінка', text2: 'з' };
    case 'arabic':
      const arabicText = { text: 'صفحة', text2: 'من' };
      return arabicText;
    case 'burmese':
      const burmeseText = { text: 'စာမျက်နှာ', text2: '၏' };
      return burmeseText;
    case 'japanese':
      const japaneseText = { text: 'ページ', text2: 'の' };
      return japaneseText;
    default:
      return { text: 'Page', text2: 'of' };
  }
};

export default {
  title: 'Components/Navigation components/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: `
# Pagination

The Pagination component divides the content of the website into different pages.

### Overview

The Pagination component allows users to make large amounts of content easy to find and breaks up several entries or web content into multiple pages.

When to use:

- When web content needs to be divided into pages.

Formatting

#### Default

The Pagination component displays the number of the page and contains navigational arrows to flip through the pages. The dark colored arrow represents that there are more pages to go backward or forwards. The Light colored arrow represents the last or first page.

### Behaviors

#### States

There is only the default state of Pagination.

### Usage:

1. Copy the HTML from the HTML tab of canvas and add it in your html file
2. Include below listed CSS files

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/pagination.min.css

#### JS:

NA

### Interactions

By clicking on the forward or backward arrow, the pages are flipped forwards or backwards.

### Changelog

1.0 — Released component
        `,
      },
    },
  },
};

export const PaginationStory = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);

  return (
    <Canvas>
      <Story name="Pagination">
        {(args) => (
          <Pagination text={caption.text} text2={caption.text2} {...args} />
        )}
      </Story>
    </Canvas>
  );
};

PaginationStory.parameters = {
  docs: {
    source: {
      code: `
<Meta title="Components/Navigation components/Pagination" />

<Canvas>
  <Story name="Pagination">
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      return <Pagination text={caption.text} text2={caption.text2}></Pagination>;
    }}
  </Story>
</Canvas>
      `,
    },
  },
};
