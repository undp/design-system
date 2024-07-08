import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Radio } from './Radio';

export const getCaptionForLocale = (locale) => {
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

export const parameters = {
  title: 'Components/Forms/Radio',
};

export const RadioComponent = () => (
  <>
    <Meta title="Components/Forms/Radio" />

    <h1>Radio button</h1>

    <p>
      A radio button is a utility that allows the user to select a single option from a set of options
      by clicking on the button.
    </p>

    <h2>Overview</h2>

    <p>
      A radio button is a type of indicator that informs the user to choose a single option among the
      available set of options. If a radio button is selected and the user clicks on another radio
      button, then the previous one gets deselected.
    </p>

    <h3>When to use:</h3>

    <p>- When the user needs to select a single option.</p>

    <h2>Formatting</h2>

    <h3>Default</h3>

    <p>The radio button is a circular button and it is displayed beside each option that can be selected.</p>

    <h2>Content</h2>

    <p>The radio button is circular shaped. The color and the space inside the circle indicate if the option is selected or not.</p>

    <h3>Behaviors</h3>

    <h4>States</h4>

    <p>
      The radio button has defaulted, active, and hovers states which indicates that an option is to be
      selected or already selected.
    </p>

    <h5>The following behavior modifiers are available:</h5>

    <ol>
      <li>
        Default state:
        A Red circular button with white space indicates the default state where a user can select an option.
      </li>
      <li>
        Active state:
        A Red circular button with a dot indicates the active state in which an option is already selected by the user.
      </li>
      <li>
        Hover state:
        A Light Red circular button with white space indicates the hover state which changes appearance when the mouse hovers over it.
      </li>
    </ol>

    <Canvas>
      <Story name="Radio">
        {(args, { globals: { locale } }) => {
          const caption = getCaptionForLocale(locale);
          return <Radio label={caption.label} id="undp" name="undp" />;
        }}
      </Story>
    </Canvas>

    <h2>Usage</h2>

    <ol>
      <li>Copy the HTML from the HTML tab of canvas and include the css file mentioned below.</li>
    </ol>

    <h2>CSS and JS References</h2>

    <h3>CSS:</h3>

    <ul>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/radio.min.css</li>
    </ul>

    <h3>JS:</h3>

    <p>NA</p>

    <h2>Interactions</h2>

    <ul>
      <li>The hover state is applied to the entire button.</li>
      <li>The active state is applied to the entire button.</li>
    </ul>

    <h2>Changelog</h2>

    <p>1.0 — Released component</p>
  </>
);

export default {
  title: 'Components/Forms/Radio',
};
