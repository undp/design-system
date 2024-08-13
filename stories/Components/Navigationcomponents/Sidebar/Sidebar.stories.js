import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Sidebar } from './Sidebar';

const getCaptionForLocale = (locale) => {
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
     page: () => (
      <>
        <h1>Sidebar</h1>

<p>The Sidebar Component is a shorter piece of text that appears next to and accompanies a longer article.</p>

<h3>Overview</h3>
<p>A sidebar is a column on the left or right side of a page which highlights the extra information related to the page.</p>
<p><strong>When to use:</strong></p>
<ul>
    <li>When an extra piece of information needs to be added to the page.</li>
    <li>When links to the supplementary information need to be added.</li>
</ul>

<h3>Formatting</h3>

<h4>Default</h4>
<p>The sidebar is a column that displays the supplementary information or links related to the page.</p>

<h3>Behaviors</h3>

<h4>States</h4>
<p>The sidebar First level row has two types: default and mobile with three states: default, hover, and selected. The mobile sidebar is used for mobile applications.</p>
<p>The following behavior modifiers are available:</p>

<h5>Default state:</h5>
<ol>
    <li>The White colored box with the default state indicates that the sidebar is not opened or expanded yet.</li>
    <li>The White colored box with down arrow and default state indicates that the sidebar isn’t open but expanded.</li>
    <li>The White colored box with the up arrow and default state indicates that the sidebar is opened and expanded.</li>
</ol>

<h5>Hover state:</h5>
<ol>
    <li>The Gray coloured box with hover state indicates that once the mouse is hovered over the sidebar it changes appearance.</li>
    <li>The Gray colored box with down arrow and a hover state indicates that the sidebar changes appearance when the mouse hovers over it. The down arrow indicates that it is not opened but expanded.</li>
    <li>The Gray colored box with the up arrow and hover state indicates that the sidebar changes appearance when the mouse hovers over it. The up arrow indicates that it is opened and expanded.</li>
</ol>

<h5>Selected state:</h5>
<ol>
    <li>The Blue colored box with selected state indicates that the sidebar is selected but it isn’t opened or expanded.</li>
    <li>The Blue colored box with a down arrow and selected state indicates that the sidebar is selected. The down arrow indicates that the sidebar is expanded but isn’t opened.</li>
    <li>The Blue colored box with the up arrow and selected state indicates that the sidebar is selected. The up arrow indicates that the sidebar is opened and expanded.</li>
    <li>The Second level row has two types: default and mobile with two states: default and hover. The font size is smaller for the mobile sidebar to make it more convenient as the mobile screen is smaller than the laptop/desktop.</li>
</ol>

<h4>Default state:</h4>
<ol>
    <li>The White colored box with the default state indicates the second sidebar which contains more information regarding the page.</li>
</ol>

<h4>Hover state:</h4>
<p>The Grey colored box with hover state indicates that the sidebar changes appearance once the mouse hovers over it.</p>

<Canvas>
    <Story name="Sidebar">
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

<h3>Usage:</h3>
<ol>
    <li>Copy HTML from the HTML tab of canvas and also include CSS and JS files listed below.</li>
    <li>Initialize the sidebar for mobile and desktop by calling <code>sidebarNav()</code>, <code>sidebarMenu()</code> functions.</li>
</ol>

<h3>CSS and JS References</h3>
<h4>CSS:</h4>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar-data.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar-data.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar.min.css</a></li>
</ul>

<h4>JS:</h4>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/sidebar.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/sidebar.min.js</a></li>
</ul>

<h3>Interactions</h3>
<ul>
    <li>The hover state is applied to the entire button.</li>
    <li>The selected state is applied to the entire button.</li>
</ul>

<h3>Changelog</h3>
<p>1.0 — Released component</p>

      </>
     )
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Sidebar
    data={caption.sidebardata}
    headerText={caption.headerText}
    label={caption.label}
    size="large-4"
    active={"default"}
    {...args}
    />
  );
};

export const SidebarStory = Template.bind({});
SidebarStory.storyName = 'Sidebar';

