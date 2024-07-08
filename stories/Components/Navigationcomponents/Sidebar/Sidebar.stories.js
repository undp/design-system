import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import Sidebar from './Sidebar'; // Assuming Sidebar component is imported correctly
import { getCaptionForLocale } from './utils'; // Assuming getCaptionForLocale is imported correctly from utils

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return {
        sidebardata: [
          {
            descriptionText: 'Subpage title',
          },
          {
            descriptionText: 'Subpage with an exceptionally long title on two lines',
          },
          {
            descriptionText: 'Subpage title',
          },
        ],
        headerText: 'PAGE TITLE',
        label: 'MENU',
      };
    case 'ukrainian':
      return {
        sidebardata: [
          {
            descriptionText: 'Назва підсторінки',
          },
          {
            descriptionText:
              'Підсторінка з надзвичайно довгим заголовком у два рядки',
          },
          {
            descriptionText: 'Назва підсторінки',
          },
        ],
        headerText: 'Назва підсторінки',
        label: 'МЕНЮ',
      };
    case 'arabic':
      return {
        sidebardata: [
          {
            descriptionText: 'عنوان الصفحة الفرعية',
          },
          {
            descriptionText: 'صفحة فرعية بعنوان طويل بشكل استثنائي في سطرين',
          },
          {
            descriptionText: 'عنوان الصفحة الفرعية',
          },
        ],
        headerText: 'عنوان الصفحة',
        label: 'قائمة',
      };
    case 'burmese':
      return {
        sidebardata: [
          {
            descriptionText: 'စာမျက်နှာခွဲခေါင်းစဉ်',
          },
          {
            descriptionText:
              'စာကြောင်းနှစ်ကြောင်းတွင်ထူးခြားသောခေါင်းစဉ်ရှည်ပါ ၀ င်သောစာမျက်နှာခွဲ',
          },
          {
            descriptionText: 'စာမျက်နှာခွဲခေါင်းစဉ်',
          },
        ],
        headerText: 'စာမျက်နှာခေါင်းစဉ်',
        label: 'မီနူး',
      };
    case 'japanese':
      return {
        sidebardata: [
          {
            descriptionText: 'サブページのタイトル',
          },
          {
            descriptionText: '2行に非常に長いタイトルのサブページ',
          },
          {
            descriptionText: 'サブページのタイトル',
          },
        ],
        headerText: 'ページタイトル',
        label: 'メニュー',
      };
    default:
      return {
        sidebardata: [
          {
            descriptionText: 'Subpage title',
          },
          {
            descriptionText:
              'Subpage with an exceptionally long title on two lines',
          },
          {
            descriptionText: 'Subpage title',
          },
        ],
        headerText: 'PAGE TITLE',
        label: 'Menu',
      };
  }
};

export default {
  title: 'Components/Navigation components/Sidebar',
  component: Sidebar,
  argTypes: {
    Height: {
      options: ['Default', 'Narrow'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    Height: 'Default',
  },
  parameters: {
    docs: {
      description: {
        component: `
# Sidebar

The Sidebar Component is a shorter piece of text that appears next to and accompanies a longer article.

### Overview

A sidebar is a column on the left or right side of a page which highlights the extra information related to the page.

When to use:

- When an extra piece of information needs to be added to the page.
- When links to the supplementary information need to be added.

### Formatting

#### Default

The sidebar is a column that displays the supplementary information or links related to the page.

### Behaviors

#### States

The sidebar First level row has two types: default and mobile with three states: default, hover, and selected. The mobile sidebar is used for mobile applications.

The following behavior modifiers are available:

##### Default state:

1. The White colored box with the default state indicates that the sidebar is not opened or expanded yet.
2. The White colored box with down arrow and default state indicates that the sidebar isn’t open but expanded.
3. The White colored box with the up arrow and default state indicates that the sidebar is opened and expanded.

##### Hover state:

1. The Gray coloured box with hover state indicates that once the mouse is hovered over the sidebar it changes appearance.
2. The Gray colored box with down arrow and a hover state indicates that the sidebar changes appearance when the mouse hovers over it. The down arrow indicates that it is not opened but expanded.
3. The Gray colored box with the up arrow and hover state indicates that the sidebar changes appearance when the mouse hovers over it. The up arrow indicates that it is opened and expanded.

##### Selected state:

1. The Blue colored box with selected state indicates that the sidebar is selected but it isn’t opened or expanded.
2. The Blue colored box with a down arrow and selected state indicates that the sidebar is selected. The down arrow indicates that the sidebar is expanded but isn’t opened.
3. The Blue colored box with the up arrow and selected state indicates that the sidebar is selected. The up arrow indicates that the sidebar is opened and expanded.
4. The Second level row has two types: default and mobile with two states: default and hover. The font size is smaller for the mobile sidebar to make it more convenient as the mobile screen is smaller than the laptop/desktop.

### Default state:

1. The White colored box with the default state indicates the second sidebar which contains more information regarding the page.

### Hover state:

The Grey colored box with hover state indicates that the sidebar changes appearance once the mouse hovers over it.

<Canvas>
  <Story
    name="Sidebar"
    parameters={{
      chromatic: { viewports: process.env.CHROMATIC_VIEWPORTS },
    }}
  >
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      return (
        <Sidebar
          data={caption.sidebardata}
          headerText={caption.headerText}
          label={caption.label}
          size="large-4"
          active={"default"}
          {...args}
        ></Sidebar>
      );
    }}
  </Story>
</Canvas>

### Usage:

1. Copy HTML from the HTML tab of canvas and also include css and js files listed below
2. Initialize the sidebar for mobile and desktop by calling sidebarNav(), sidebarMenu() functions

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar-data.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar.min.css

#### JS:

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs//js/sidebar.min.js

### Interactions

- The hover state is applied to the entire button.
- The selected state is applied to the entire button.

### Changelog

1.0 — Released component
        `,
      },
    },
  },
};

export const SidebarStory = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);

  return (
    <Canvas>
      <Story name="Sidebar" parameters={{ chromatic: { viewports: process.env.CHROMATIC_VIEWPORTS } }}>
        {(args) => (
          <Sidebar
            data={caption.sidebardata}
            headerText={caption.headerText}
            label={caption.label}
            size="large-4"
            active={"default"}
            {...args}
          />
        )}
      </Story>
    </Canvas>
  );
};

SidebarStory.parameters = {
  docs: {
    source: {
      code: `
<Meta
  title="Components/Navigation components/Sidebar"
  argTypes={{
    Height: {
      options: ["Default", "Narrow"],
      control: { type: "inline-radio" },
    },
  }}
  args={{
    Height: "Default",
  }}
/>

# Sidebar

The Sidebar Component is a shorter piece of text that appears next to and accompanies a longer article.

### Overview

A sidebar is a column on the left or right side of a page which highlights the extra information related to the page.

When to use:

- When an extra piece of information needs to be added to the page.
- When links to the supplementary information need to be added.

### Formatting

#### Default

The sidebar is a column that displays the supplementary information or links related to the page.

### Behaviors

#### States

The sidebar First level row has two types: default and mobile with three states: default, hover, and selected. The mobile sidebar is used for mobile applications.

The following behavior modifiers are available:

##### Default state:

1. The White colored box with the default state indicates that the sidebar is not opened or expanded yet.
2. The White colored box with down arrow and default state indicates that the sidebar isn’t open but expanded.
3. The White colored box with the up arrow and default state indicates that the sidebar is opened and expanded.

##### Hover state:

1. The Gray coloured box with hover state indicates that once the mouse is hovered over the sidebar it changes appearance.
2. The Gray colored box with down arrow and a hover state indicates that the sidebar changes appearance when the mouse hovers over it. The down arrow indicates that it is not opened but expanded.
3. The Gray colored box with the up arrow and hover state indicates that the sidebar changes appearance when the mouse hovers over it. The up arrow indicates that it is opened and expanded.

##### Selected state:

1. The Blue colored box with selected state indicates that the sidebar is selected but it isn’t opened or expanded.
2. The Blue colored box with a down arrow and selected state indicates that the sidebar is selected. The down arrow indicates that the sidebar is expanded but isn’t opened.
3. The Blue colored box with the up arrow and selected state indicates that the sidebar is selected. The up arrow indicates that the sidebar is opened and expanded.
4. The Second level row has two types: default and mobile with two states: default and hover. The font size is smaller for the mobile sidebar to make it more convenient as the mobile screen is smaller than the laptop/desktop.

### Default state:

1. The White colored box with the default state indicates the second sidebar which contains more information regarding the page.

### Hover state:

The Grey colored box with hover state indicates that the sidebar changes appearance once the mouse hovers over it.

<Canvas>
  <Story
    name="Sidebar"
    parameters={{
      chromatic: { viewports: process.env.CHROMATIC_VIEWPORTS },
    }}
  >
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      return (
        <Sidebar
          data={caption.sidebardata}
          headerText={caption.headerText}
          label={caption.label}
          size="large-4"
          active={"default"}
          {...args}
        ></Sidebar>
      );
    }}
  </Story>
</Canvas>

### Usage:

1. Copy HTML from the HTML tab of canvas and also include css and js files listed below
2. Initialize the sidebar for mobile and desktop by calling sidebarNav(), sidebarMenu() functions

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar-data.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar.min.css

#### JS:

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs//js/sidebar.min.js

### Interactions

- The hover state is applied to the entire button.
- The selected state is applied to the entire button.

### Changelog

1.0 — Released component
        `,
      },
    },
  };
