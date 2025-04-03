import React from 'react';
import { Canvas, Meta, Story } from '@storybook/addon-docs';
import CustomSelect from './CustomSelect';

const getCaptionForLocale = (locale) => {
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
      page: () => (
        <>
          <h1>Custom Select</h1>
          <p>The custom select dropdown allows the user to select one.</p>

          <h3>Overview</h3>
          <p>The custom select dropdown element allows users to choose a single option from a list. It is used in forms when there are single choices that can be collapsed under one title.</p>

          <h4>When to use:</h4>
          <ul>
            <li>When single or custom options are to be grouped under a single title.</li>
          </ul>

          <h3>Formatting</h3>

          <h4>Default</h4>
          <p>It consists of a dropdown with an arrow from which the user can select any one option.</p>

          <h3>Content</h3>
          <p>In the custom dropdown select, only one option can be selected.</p>
          <p>The direction of the arrow indicates if one option is selected. The downward arrow indicates a closed box and the upward arrow indicates an open box.</p>

          <h3>Behaviors</h3>

          <h4>States</h4>
          <p>The Dropdown boxes are either opened or closed. The Custom dropdown boxes either have auto or fixed height.</p>

          <ul>
            <li>Closed and Auto Height:</li>
            <li>Closed and Fixed Height:</li>
            <li>Open and Auto Height:</li>
            <li>Open and Fixed Height:</li>
          </ul>

          <Canvas>
            <Story name="Select">
              {(args) => (
                <CustomSelect
                  label={caption.label}
                  value={caption.value}
                  id="edit-select"
                  {...args}
                />
              )}
            </Story>
          </Canvas>

          <h3>Usage:</h3>
          <p>Copy the HTML from the HTML tab of Canvas. Include the CSS and JS files listed below. Add the <code>data-undpds-component="custom-select"</code> attribute to the select-box element. If you need a fixed height dropdown, then apply height to the <code>&lt;ul&gt;</code> tag of the dropdown. It will scroll inside the dropdown.</p>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>
          <p>Add the base layout style from:</p>
          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/custom-select.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/custom-select.min.css</a></li>
          </ul>

          <h4>JS:</h4>
          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/select.min.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/select.min.js</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/ext-comp-loader.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/ext-comp-loader.js -- To be updated</a></li>
          </ul>

          <h3>Interactions</h3>
          <ul>
            <li>By clicking on the arrow, the custom select dropdown box can be opened or closed.</li>
            <li>By clicking on the option/options, those can be selected.</li>
          </ul>

          <h3>Changelog</h3>
          <p>1.0 — Released component</p>

        </>
      ),
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <CustomSelect
      text={caption}
      {...args}
    />
  );
}

export const CustomSelectStory = Template.bind({});
CustomSelectStory.storyName = 'Custom Select';

