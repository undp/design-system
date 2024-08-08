import React from 'react';
import { Meta, Story } from '@storybook/addon-docs';
import CustomSelect from './CustomSelect';

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return 'Select Language';
    case 'ukrainian':
      return 'Оберіть мову';
    case 'arabic':
      return 'اختار اللغة';
    case 'burmese':
      return 'ဘာသာစကားကို ရွေးပါ။';
    case 'japanese':
      return '言語を選択する';
    default:
      return 'Category';
  }
};

export default {
  title: 'Components/Forms/Dropdown/Select',
  component: CustomSelect,
  parameters: {
    docs: {
      title: 'Components/Forms/Dropdown/Select',
    },
  },
};

const Template = () => {
  const locale = 'english'; // Set default locale here or via controls in Storybook
  const caption = getCaptionForLocale(locale);

  return (
    <div>
      <h1>Custom Select</h1>

      <h2>Overview</h2>
      <p>
        The custom select dropdown element allows users to choose a single option from a list. It is used in forms when there are single choices that can be collapsed under one title.
      </p>

      <h3>When to use:</h3>
      <p>Use the custom select dropdown when single or custom options are to be grouped under a single title.</p>

      <h2>Formatting</h2>
      <h3>Default</h3>
      <p>It consists of a dropdown with an arrow from which the user can select any one option.</p>

      <h2>Content</h2>
      <p>In the custom dropdown select, only one option can be selected.</p>
      <p>The direction of the arrow indicates if one option is selected. The downward arrow indicates a closed box and the upward arrow indicates an open box.</p>

      <h2>Behaviors</h2>
      <h3>States</h3>
      <ul>
        <li>Closed and Auto Height</li>
        <li>Closed and Fixed Height</li>
        <li>Open and Auto Height</li>
        <li>Open and Fixed Height</li>
      </ul>

      <h2>Canvas</h2>
      <Story name="Select">
        {(args) => <CustomSelect text={caption} {...args} />}
      </Story>

      <h2>Usage</h2>
      <ol>
        <li>Copy the HTML from the HTML tab of Canvas.</li>
        <li>Include the CSS and JS files listed below.</li>
        <li>Initialize the select by calling `select()` function.</li>
        <li>If you need a fixed height dropdown then apply Height to the "ul" tag of dropdown. It will scroll inside the dropdown.</li>
      </ol>

      <h2>CSS and JS References</h2>
      <h3>CSS:</h3>
      <ul>
        <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</li>
        <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/custom-select.min.css</li>
      </ul>

      <h3>JS:</h3>
      <ul>
        <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/select.min.js</li>
      </ul>

      <h2>Interactions</h2>
      <ul>
        <li>By clicking on the arrow, the custom select dropdown box can be opened or closed.</li>
        <li>By clicking on the option/options, those can be selected.</li>
      </ul>

      <h2>Changelog</h2>
      <p>1.0 — Released component</p>
    </div>
  );
};

export const CustomSelectComponent = Template.bind({});
