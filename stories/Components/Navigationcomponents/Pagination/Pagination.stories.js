import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { Pagination } from './Pagination';

const getCaptionForLocale = (locale) => {
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
      page: () => (
        <>
           <h1>Pagination</h1>
    <p>The Pagination component divides the content of the website into different pages.</p>

    <h3>Overview</h3>
    <p>The Pagination component allows users to make large amounts of content easy to find and breaks up several entries or web content into multiple pages.</p>
    <p><strong>When to use:</strong></p>
    <ul>
        <li>When web content needs to be divided into pages.</li>
    </ul>

    <h3>Formatting</h3>
    <h4>Default</h4>
    <p>The Pagination component displays the number of the page and contains navigational arrows to flip through the pages. The dark colored arrow represents that there are more pages to go backward or forwards. The light colored arrow represents the last or first page.</p>

    <h3>Behaviors</h3>
    <h4>States</h4>
    <p>There is only the default state of Pagination.</p>

      <Canvas>
        <Story name="Pagination">
          {(args) => (
            <Pagination
              text={getCaptionForLocale("english")}
              text2={getCaptionForLocale("english")}
              {...args}
            />
          )}
        </Story>
      </Canvas>

    <h3>Usage:</h3>
    <ol>
        <li>Copy the HTML from the HTML tab of canvas and add it in your HTML file.</li>
        <li>Include below listed CSS files.</li>
    </ol>

    <h3>CSS and JS References</h3>
    <h4>CSS:</h4>
    <ul>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/pagination.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/pagination.min.css</a></li>
    </ul>
    <h4>JS:</h4>
    <p>NA</p>

    <h3>Interactions</h3>
    <p>By clicking on the forward or backward arrow, the pages are flipped forwards or backwards.</p>

    
    
        </>
      )
    }
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Pagination
      text={caption.text}
      text2={caption.text2}
      {...args}
    />
  );
}

export const PaginationStory = Template.bind({});
PaginationStory.storyName = 'Pagination';

      