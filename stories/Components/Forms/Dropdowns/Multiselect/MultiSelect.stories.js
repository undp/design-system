import React from 'react';
import { Canvas, Meta, Story } from '@storybook/addon-docs/blocks';
import MultiSelect from './MultiSelect';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return 'Category';
    case 'ukrainian':
      return 'Категорія';
    case 'arabic':
      return 'فئة';
    case 'burmese':
      return 'အမျိုးအစား';
    case 'japanese':
      return 'カテゴリー';
    default:
      return 'Category';
  }
};

export default {
  title: 'Components/Forms/Dropdown/MultiSelect',
  component: MultiSelect,
  argTypes: {
    Height: {
      options: ['Fix height', 'Auto height'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['Radio', 'Checkbox'],
      control: { type: 'radio' },
    },
  },
  args: {
    Height: 'Auto height',
    variant: 'Checkbox',
  },
  parameters: {
    docs: {
     page: () => (
      <>
        <h1>MultiSelect</h1>
          <p>The multiselect dropdown allows the user to select multiple options from the list.</p>

          <h3>Overview</h3>
          <p>The multiselect component allows users to choose multiple options from a list. It is used in forms when there are multiple choices that can be collapsed under one title.</p>

          <h4>When to use:</h4>
          <ul>
            <li>When multiselect options are to be grouped under a single title.</li>
          </ul>

          <h3>Formatting</h3>

          <h4>Default</h4>
          <p>It consists of a dropdown with an arrow from which the user can select multiple options.</p>

          <h3>Content</h3>
          <p>In the multiselect dropdown, multiple options can be selected.</p>
          <p>The direction of the arrow indicates if multiple options are selected. The downward arrow indicates a closed box and the upward arrow indicates an open box.</p>

          <h3>Behaviors</h3>

          <h4>States</h4>
          <p>A multi-select box in an open state can adjust its height to the content (default behavior) or use a preset max height by applying a <code>.fix-height</code> class to the unordered list container.</p>

          <ul>
            <li>Closed:</li>
            <li>Open:</li>
          </ul>

          <ul>
            <li>The sidebar component with a red-colored box and empty space in the default state indicates that the option is not selected.</li>
            <li>The sidebar component with a red-colored box and empty space in the hover state indicates that the option is not selected and it changes appearance once the mouse hovers over it.</li>
            <li>The sidebar component with a red-colored box and a red tick in the default state indicates that the option is selected.</li>
            <li>The sidebar component with a red-colored box and a red tick in the hover state indicates that the option is selected and it changes appearance once the mouse hovers over it.</li>
            <li>The sidebar component with the download icon in the default state indicates that the option can be downloaded.</li>
            <li>The sidebar component with the download icon in the hover state indicates that the option can be downloaded and it changes appearance once the mouse hovers over it.</li>
            <li>The sidebar component with an external link icon in the default state indicates that the option contains an external link related to the search.</li>
            <li>The sidebar component with an external link icon in the hover state indicates that the option contains an external link related to the search and it changes appearance once the mouse hovers over it.</li>
          </ul>

          <Canvas>
            <Story name="MultiSelect">
              {(args) => (
                <MultiSelect
                  label={getCaptionForLocale(args.locale)}
                  value={args.locale}
                  id="edit-multiselect"
                  {...args}
                />
              )}
            </Story>
          </Canvas>

          <h3>Usage:</h3>
          <ol>
            <li>Select the variant either Checkbox or Radio button and height option for dropdown which has Fixed Height or Auto Height from the control tab on Canvas.</li>
            <li>Then grab the HTML from the HTML tab and add the <code>data-undpds-component="multi-select"</code> attribute to the multi-select element.</li>
            <li>Include the CSS and JS files listed below, as well as the component initializer script.</li>
            <li>If you choose the Checkbox variant, then include <code>checkbox.min.css</code>.</li>
            <li>If you choose the Radio button variant, then include <code>radio.min.css</code>.</li>
            {/* <li>Initialize the multi-select by calling the <code>multiSelect()</code> function.</li> */}
          </ol>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>
          <p>Add the base layout style from:</p>
          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/multi-select.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/multi-select.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/checkbox.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/checkbox.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/radio.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/radio.min.css</a></li>
          </ul>

          <h4>JS:</h4>
          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/multi-select.min.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/multi-select.min.js</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/init.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/init.js</a></li>
          </ul>

          <h3>Interactions</h3>
          <ul>
            <li>By clicking on the arrow, the drop-down box can be opened or closed.</li>
            <li>By clicking on the option/options, those can be selected.</li>
          </ul>

      </>
    ),
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <MultiSelect
      locale={locale}
      {...args}
      text={caption}
      eleId=''
    />
  );
};

export const MultiSelectStory = Template.bind({});
MultiSelectStory.storyName = 'MultiSelect';

