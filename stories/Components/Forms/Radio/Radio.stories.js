import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Radio } from './Radio';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      const engText = { label: 'Category' };
      return engText;
    case 'ukrainian':
      return { label: 'Категорія', value: 'Категорія' };
    case 'arabic':
      const arabicText = { label: 'فئة' };
      return arabicText;
    case 'burmese':
      const burmeseText = { label: 'အမျိုးအစား' };
      return burmeseText;
    case 'japanese':
      const japaneseText = { label: 'カテゴリー' };
      return japaneseText;
    default:
      return { label: 'Category' };
  }
};

export default {
  title: 'Components/Forms/Radio',
  component: Radio,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Radio button</h1>
            <p>A radio button is a utility that allows the user to select a single option from a set of options by clicking on the button.</p>

            <h3>Overview</h3>
            <p>A radio button is a type of indicator that informs the user to choose a single option among the available set of options. If a radio button is selected and the user clicks on another radio button, then the previous one gets deselected.</p>

            <h4>When to use:</h4>
            <ul>
              <li>When the user needs to select a single option.</li>
            </ul>

            <h3>Formatting</h3>

            <h4>Default</h4>
            <p>The radio button is a circular button and it is displayed beside each option that can be selected.</p>

            <h3>Content</h3>
            <p>The radio button is circular shaped. The color and the space inside the circle indicate if the option is selected or not.</p>

            <h3>Behaviors</h3>

            <h4>States</h4>
            <p>The radio button has defaulted, active, and hover states which indicate that an option is to be selected or already selected.</p>

            <p>The following behavior modifiers are available:</p>
            <ol>
              <li><strong>Default state:</strong> A Red circular button with white space indicates the default state where a user can select an option.</li>
              <li><strong>Active state:</strong> A Red circular button with a dot indicates the active state in which an option is already selected by the user.</li>
              <li><strong>Hover state:</strong> A Light Red circular button with white space indicates the hover state which changes appearance when the mouse hovers over it.</li>
            </ol>

            <Canvas>
              <Story name="Radio">
                {(args) => (
                  <Radio
                    label={getCaptionForLocale('english').label}
                    name='undp'
                    id="undp"
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
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/radio.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/radio.min.css</a></li>
            </ul>

            <h4>JS:</h4>
            <p>NA</p>

            <h3>Interactions</h3>
            <ul>
              <li>The hover state is applied to the entire button.</li>
              <li>The active state is applied to the entire button.</li>
            </ul>

            <h3>Changelog</h3>
            <p>1.0 — Released component</p>

        </>
      ),
    },
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Radio
      label={caption.label}
      name='undp'
      id="undp"
      {...args}
    />
  );
}

export const RadioStory = Template.bind({});
RadioStory.storyName = 'Radio';
