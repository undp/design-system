import React from 'react';
import { Meta, Story } from '@storybook/addon-docs';
import { Link } from './Links';

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return { detail: 'Default link' };
    case 'ukrainian':
      return { detail: 'Посилання' };
    case 'arabic':
      return { detail: 'الارتباط الافتراضي' };
    case 'burmese':
      return { detail: 'မူရင်းလင့်ခ်' };
    case 'japanese':
      return { detail: 'デフォルトのリンク' };
    default:
      return { detail: 'Default link' };
  }
};

export default {
  title: 'Foundation/Typography/Links',
  component: Link,
  parameters: {
    docs: {
      title: 'Foundation/Typography/Links',
    },
  },
};

const Template = () => {
  const locale = 'english'; // Set default locale here or via controls in Storybook
  const caption = getCaptionForLocale(locale);

  return (
    <div>
      <h1>Link</h1>

      <h2>Overview</h2>
      <p>The Link component is used to attach links to the text component.</p>

      <h3>When to use:</h3>
      <p>Use the Link component to create hyperlinks.</p>

      <h2>Formatting</h2>
      <h3>Default</h3>
      <p>The Link component displays a hyperlink with a red horizontal line below it.</p>

      <h2>Behaviors</h2>
      <h3>States</h3>
      <p>The Link component has different states for Desktop & Laptop.</p>

      <h4>Desktop & Laptop</h4>
      <p>The font size of the Link is larger on Desktop and Laptop.</p>

      <Story name="Links">
        {(args) => <Link label={caption.detail} {...args} />}
      </Story>

      <h2>Usage</h2>
      <p>Copy the HTML from the Canvas page to use the Link component.</p>

      <h2>CSS and JS References</h2>
      <h3>CSS:</h3>
      <p>Add the base layout style from:</p>
      <ul>
        <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</li>
      </ul>

      <h3>JS:</h3>
      <p>N/A</p>

      <h2>Interactions</h2>
      <p>Clicking on the link forwards the current page to the linked page.</p>

      <h2>Changelog</h2>
      <p>1.0 — Released component</p>
    </div>
  );
};

export const Links = Template.bind({});
