import React from 'react';
import { Canvas, Meta, Story } from '@storybook/addon-docs';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: () => (
        <>
    <h1>Checkbox</h1>
        <p>A checkbox or tick box is an interactive box that allows the user to select one, none, or multiple options.</p>

        <h3>Overview</h3>
        <p>A checkbox is a type of indicator which allows the user to choose single or multiple options from the select box. Each checkbox is independent, which allows the user to select multiple options and the previously selected options do not get canceled.</p>

        <h4>When to use:</h4>
        <ul>
          <li>When the user needs to select or deselect multiple options.</li>
        </ul>

        <h3>Formatting</h3>

        <h4>Default</h4>
        <p>The checkbox is a square-shaped selection box with white space or tick which displays if options are selected or deselected. Independent checkboxes are available beside each option.</p>

        <h3>Content</h3>
        <p>The checkbox is square-shaped. The color and the space inside the square indicates if the options are selected or not.</p>

        <h3>Behaviors</h3>

        <h4>States</h4>
        <p>The checkbox has defaulted, checked, and hover states which indicates that an option is to be selected or has already been selected.</p>
        <p>The following behavior modifiers are available:</p>

        <h4>Default state</h4>
        <p>The Red-colored checkbox with white space indicates the default state where the user gets an option to select it.</p>

        <h4>Checked state:</h4>
        <p>The Red-colored checkbox with a tick inside it indicates the checked state where the option has already been selected and can be deselected as well.</p>

        <h4>Hover state</h4>
        <p>The Light Red colored checkbox with white space indicates the hover state which changes appearance when the mouse hovers over it.</p>


      <Canvas>
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
      </Canvas>
  
      <h3>Usage</h3>
        <ol>
          <li>Copy the HTML from the HTML tab of canvas and include the CSS file mentioned below.</li>
        </ol>

        <h3>CSS and JS References</h3>

        <h4>CSS:</h4>
        <p>Add the base layout style from:</p>
        <ul>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/checkbox.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/checkbox.min.css</a></li>
        </ul>

        <h4>JS:</h4>
        <p>NA</p>

        <h4>Interactions</h4>
        <ul>
          <li>The hover state is applied to the entire button.</li>
          <li>The checked state is applied to the entire button.</li>
        </ul>

        <h4>Changelog</h4>
        <p>1.0 — Released component</p>
        </>
      )
    },
  },
};

const getCaptionForLocale = (locale) => {
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

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Checkbox
      label={caption.label}
      value={caption.value}
      id="edit-checkbox"
      {...args}
    />
  );
};

export const CheckboxStory = Template.bind({});
CheckboxStory.storyName = 'Checkbox';
CheckboxStory.argTypes = {
  label_pos: {table : {disable: true}},
};