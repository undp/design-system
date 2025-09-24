import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { Chips } from './Chips';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return { detail: 'Label' };
    case 'ukrainian':
      return { detail: 'Мітка' };
    case 'arabic':
      return { detail: 'ملصق' };
    case 'burmese':
      return { detail: 'တံဆိပ်' };
    case 'japanese':
      return { detail: 'ラベル' };
    default:
      return { detail: 'Label' };
  }
};

export default {
  title: 'Components/UI components/Buttons/Chips',
  argTypes: {
    Type: {
      options: ['Without X', 'With X'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    Type: 'Without X',
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Buttons and Labels</h1>

          <p>A button describes what action will be performed when a user clicks or touches it.</p>

          <h3>Overview</h3>

          <p>A button describes the call to action that will be performed when the user clicks/touches it. It has a label and an optional animation.</p>

          <h4>When to use:</h4>

          <ul>
            <li>Buttons should be used as primary or secondary calls to actions</li>
            <li>Ideally, a page should have one or two primary buttons only. Other call-to-actions should be shown as secondary buttons</li>
            <li>Examples of buttons can be to “VIEW MORE” or “READ MORE” or “SIGN UP”</li>
            <li>If there are multiple choices for an action item, one default button should be active and the other buttons inactive</li>
          </ul>

          <h3>Formatting</h3>

          <h4>Default</h4>

          <p>There are multiple button types in our design system:</p>

          <ol>
            <li>Primary button with arrow and without arrows</li>
            <li>Secondary buttons without the arrow</li>
            <li>CTA links with and without expanding arrows</li>
            <li>Chips</li>
          </ol>

          <h3>Content</h3>

          <h3>Behaviors</h3>

          <h4>States</h4>

          <p><strong>Chips:</strong> Chips are used to show an active search or filter term.</p>

          <ul>
            <li>Chip with default state and an icon. The close icon lets users cancel or delete the information.</li>
            <li>Chip with hover state and icon changes appearance when a mouse hovers over it.</li>
            <li>Chip with default state and no close icon, meaning it doesn’t provide the option of deleting the information written or action that has been taken.</li>
            <li>Chip with hover state and close icon. Changes appearance once the mouse moves over it.</li>
          </ul>

          <Canvas>
          <Story name="Chips">
            {(args, { globals: { locale } }) => {
              const caption = getCaptionForLocale(locale);
              return <Chips label={caption.detail} {...args}></Chips>;
            }}
          </Story>
          </Canvas>

          <h3>Usage</h3>

          <ul>
            <li>Copy the HTML from the HTML Tab of Canvas for either Chips, CTA Button, or CTA Link from the controls.</li>
            <li>Include the CSS files listed below concerning the button you choose.</li>
          </ul>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>

          <p>Add the base layout style from:</p>

          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/chips.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/chips.min.css</a></li>
          </ul>

          <p>Use the above CSS concerning Chips.</p>

          <h4>JS:</h4>

          <p>NA</p>

          <h3>Interactions</h3>

          <ul>
            <li>The hover state is applied to the entire button.</li>
          </ul>

          

          

        </>
      ),
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Chips label={caption.detail} {...args}></Chips>
  );
};

export const ChipsStory = Template.bind({});
ChipsStory.storyName = 'Chips';