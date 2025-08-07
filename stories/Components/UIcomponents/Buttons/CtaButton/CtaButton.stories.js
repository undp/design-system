import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { CtaButton } from './CtaButton';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return { detail1: 'READ MORE' };
    case 'ukrainian':
      return { detail1: 'ЧИТАТИ ДАЛІ' };
    case 'arabic':
      return { detail1: 'اقرأ أكثر' };
    case 'burmese':
      return { detail1: 'ပိုပြီးဖတ်ပါ' };
    case 'japanese':
      return { detail1: '続きを読む' };
    default:
      return { detail1: 'READ MORE' };
  }
};

export default {
  title: 'Components/UI components/Buttons/Buttons',
  argTypes: {
    Type: {
      options: ['Primary', 'Secondary'],
      control: { type: 'inline-radio' },
    },
    State: {
      options: ['Active', 'Disabled'],
      control: { type: 'inline-radio' },
    },
    Icon: {
      options: ['Arrow', 'No Arrow', 'Download', 'External link'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    Type: 'Primary',
    State: 'Active',
    Icon: 'Arrow',
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

          <p>The button’s color and text indicate the default setting and call of action of the button:</p>

          <ul>
            <li><strong>Primary CTA:</strong> 
              <ul>
                <li><strong>Dark Red:</strong> Default call of action button</li>
                <li><strong>Red:</strong> Hover over call of action button</li>
                <li><strong>Gray:</strong> Disabled call of action button</li>
              </ul>
            </li>
            <li><strong>Secondary Button:</strong> 
              <ul>
                <li><strong>Blue-600:</strong> Default secondary button</li>
                <li><strong>Blue-400:</strong> Hover over secondary button</li>
                <li><strong>Gray-400:</strong> Disabled secondary button</li>
              </ul>
            </li>
          </ul>

          <h3>Behaviors</h3>

          <h4>States</h4>

          <p>The following size modifiers are available:</p>

          <ul>
            <li><strong>Primary CTA:</strong>
              <ul>
                <li>The Dark Red Primary button with an arrow is the default button displayed on the website with a default breakpoint, indicating the main task to be completed.</li>
                <li>The Red Primary button with an arrow is a hover button with a default breakpoint, changing its appearance once a mouse hovers over it, even if it is not selected.</li>
                <li>The Gray-400 Primary button is disabled with an arrow and default breakpoint, which will be disabled if there is an error, and the error needs to be cleared for enabling it.</li>
              </ul>
            </li>
            <li><strong>Secondary Buttons:</strong>
              <ul>
                <li>The Blue-600 Secondary Button is the default secondary button used as an alternative to the primary button. Its color is different from the Primary button to avoid viewer confusion.</li>
                <li>The Blue-400 Secondary button is a hover button that changes its appearance once the mouse hovers over it.</li>
                <li>The Gray-400 Secondary button is in a disabled state and will require error corrections to enable it for selecting the alternative option.</li>
              </ul>
            </li>
          </ul>

          <Canvas>
          <Story name="Buttons">
            {(args, { globals: { locale } }) => {
              const caption = getCaptionForLocale(locale);
              return <CtaButton label={caption.detail} {...args}></CtaButton>;
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

          <p>Add the base layout style from <code>dist/css/base-minimal.min.css</code>:</p>

          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/buttons.min.css</a></li>
          </ul>

          <p>Use the above CSS concerning the CTA Button.</p>

          <h4>JS:</h4>

          <p>NA</p>

          <h3>Interactions</h3>

          <ul>
            <li>The hover state is applied to the entire button.</li>
          </ul>

          

          

        </>
      ),
    }
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <CtaButton label={caption.detail1} {...args}></CtaButton>
  );
}

export const CtaButtonStory = Template.bind({});
CtaButtonStory.storyName = 'Buttons';

