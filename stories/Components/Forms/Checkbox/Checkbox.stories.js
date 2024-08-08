import React from 'react';
import { Meta, Story } from '@storybook/addon-docs';
import { Checkbox } from './Checkbox';

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return { label: 'Category', value: 'category' };
    case 'ukrainian':
      return { label: 'Категорія', value: 'Категорія' };
    case 'arabic':
      return { label: 'فئة', value: 'فئة' };
    case 'burmese':
      return { label: 'အမျိုးအစား', value: 'အမျိုးအစား' };
    case 'japanese':
      return { label: 'カテゴリー', value: 'カテゴリー' };
    default:
      return { label: 'Category' };
  }
};

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      title: 'Components/Forms/Checkbox',
    },
  },
};

const Template = () => {
  const locale = 'english'; // Set default locale here or via controls in Storybook
  const caption = getCaptionForLocale(locale);

  return (
    <div>
      <h1>Checkbox</h1>

      <h2>Overview</h2>
      <p>
        A checkbox or tick box is an interactive box that allows the user to
        select one, none, or multiple options.
      </p>

      <h3>When to use:</h3>
      <p>Use a checkbox when the user needs to select or deselect multiple options.</p>

      <h2>Formatting</h2>
      <h3>Default</h3>
      <p>
        The checkbox is a square-shaped selection box with white space or tick
        which displays if options are selected or deselected. Independent
        checkboxes are available beside each option.
      </p>

      <h2>Content</h2>
      <p>The checkbox is square-shaped. The color and the space inside the square indicates if the options are selected or not.</p>

      <h2>Behaviors</h2>
      <h3>States</h3>
      <p>The checkbox has defaulted, checked, and hover states which indicates that an option is to be selected or has already been selected.</p>

      <h4>Default state</h4>
      <p>The Red-colored checkbox with white space indicates the default state where the user gets an option to select it.</p>

      <h4>Checked state</h4>
      <p>The Red-colored checkbox with a tick inside it indicates the checked state where the option has already been selected and can be deselected as well.</p>

      <h4>Hover state</h4>
      <p>The Light Red colored checkbox with white space indicates the hover state which changes appearance when the mouse hovers over it.</p>

      <Story name="Checkbox">
        {(args) => (
          <Checkbox
            label={caption.label}
            value={caption.value}
            id="edit-checkbox"
            {...args}
          />
        )}
      </Story>

      <h2>Usage</h2>
      <ol>
        <li>Copy the HTML from the HTML tab of canvas and include the css file mentioned below.</li>
      </ol>

      <h2>CSS and JS References</h2>
      <h3>CSS:</h3>
      <ul>
        <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</li>
        <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/checkbox.min.css</li>
      </ul>

      <h3>JS:</h3>
      <p>N/A</p>

      <h2>Interactions</h2>
      <ul>
        <li>The hover state is applied to the entire button.</li>
        <li>The checked state is applied to the entire button.</li>
      </ul>

      <h2>Changelog</h2>
      <p>1.0 — Released component</p>
    </div>
  );
};

export const CheckboxComponent = Template.bind({});
