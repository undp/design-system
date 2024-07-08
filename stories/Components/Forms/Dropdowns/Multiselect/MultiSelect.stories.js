import React from 'react';
import { Meta, Story } from '@storybook/addon-docs';
import MultiSelect from './MultiSelect';

export const getCaptionForLocale = (locale) => {
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
  parameters: {
    docs: {
      title: 'Components/Forms/Dropdown/MultiSelect',
      description: `
        The multiselect dropdown allows the user to multiple options from the list.
        
        ### Overview
        
        The multiselect component allows users to choose multiple options from a list. It is used in forms when there are multiple choices that can be collapsed under one title.
        
        #### When to use:
        
        - When multiselect options are to be grouped under a single title.
        
        ### Formatting
        
        #### Default
        
        It consists of a dropdown with an arrow from which the user can select multiple options.
        
        ### Content
        
        In the multiselect dropdown, multiple options can be selected.
        
        The direction of the arrow indicates if multiple options are selected. The downward arrow indicates a closed box and upward arrow indicates open box.
        
        ### Behaviors
        
        #### States
        
        A multi-select box in an open state can adjust its height to the content (default behavior) or use preset max height by applying a .fix-height class to the unordered list container.
        
        #### Closed:
        
        #### Open:
        
        - The sidebar component with a red colored box and empty space in the default state indicates that the option is not selected.
        - The sidebar component with a red colored box and empty space in the hover state indicates that the option is not selected and it changes appearance once the mouse hovers over it.
        - The sidebar component with a red colored box and red tick in the default state indicate that the option is selected.
        - The sidebar component with a red colored box and red tick in the hover state indicate that the option is selected and it changes appearance once the mouse hovers over it.
        - The sidebar component with the download icon in the default state indicates that the option can be downloaded.
        - The sidebar component with the download icon in the hover state indicates that the option can be downloaded and it changes appearance once the mouse hovers over it.
        - The sidebar component with an external link icon in the default state indicates that the option contains an external link related to the search.
        - The sidebar component with external link icon in hover state indicates that the options contains an external link related to the search and it changes appearance once the mouse hovers over it.
      `,
    },
  },
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
};

const Template = (args) => {
  const locale = 'english'; // Set default locale here or via controls in Storybook
  const caption = getCaptionForLocale(locale);

  return (
    <div>
      <h1>MultiSelect</h1>

      <h2>Overview</h2>
      <p>
        The multiselect dropdown allows the user to select multiple options from the list.
      </p>

      <h3>When to use:</h3>
      <p>Use the multiselect dropdown when multiple options are to be grouped under a single title.</p>

      <h2>Formatting</h2>
      <h3>Default</h3>
      <p>It consists of a dropdown with an arrow from which the user can select multiple options.</p>

      <h2>Content</h2>
      <p>In the multiselect dropdown, multiple options can be selected.</p>
      <p>The direction of the arrow indicates if multiple options are selected. The downward arrow indicates a closed box and upward arrow indicates an open box.</p>

      <h2>Behaviors</h2>
      <h3>States</h3>
      <p>A multi-select box in an open state can adjust its height to the content (default behavior) or use preset max height by applying a .fix-height class to the unordered list container.</p>

      <h2>Canvas</h2>
      <Story name="MultiSelect">
        {(args, { globals: { locale } }) => (
          <MultiSelect locale={locale} {...args} text={caption} eleId="" />
        )}
      </Story>

      <h2>Usage</h2>
      <ol>
        <li>Select the variant either Checkbox or Radio button and height option for dropdown which has Fixed Height or Auto Height from the control tab on canvas.</li>
        <li>Then grab the HTML from the HTML tab and include the below listed css and js files.</li>
        <li>If you choose Checkbox variant then include checkbox.min.css.</li>
        <li>If you choose Radio button variant then include radio.min.css.</li>
        <li>Initialize the multi-select by calling multiSelect() function.</li>
      </ol>

      <h2>CSS and JS References</h2>
      <h3>CSS:</h3>
      <ul>
        <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</li>
        <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/multi-select.min.css</li>
        {args.variant === 'Checkbox' && (
          <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/checkbox.min.css</li>
        )}
        {args.variant === 'Radio' && (
          <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/radio.min.css</li>
        )}
      </ul>

      <h3>JS:</h3>
      <ul>
        <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/multi-select.min.js</li>
      </ul>

      <h2>Interactions</h2>
      <ul>
        <li>By clicking on the arrow, the drop-down box can be opened or closed.</li>
        <li>By clicking on the option/options, those can be selected.</li>
      </ul>

      <h2>Changelog</h2>
      <p>1.0 — Released component</p>
    </div>
  );
};

export const MultiSelectComponent = Template.bind({});
MultiSelectComponent.args = {
  Height: 'Auto height',
  variant: 'Checkbox',
};
