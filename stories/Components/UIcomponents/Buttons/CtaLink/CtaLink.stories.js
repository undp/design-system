import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Ctalink } from './CtaLink';

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
  title: 'Components/UI components/Buttons/CTA link',
  argTypes: {
    Type: {
      options: ['Expanding Arrow', 'Space'],
      control: { type: 'inline-radio' },
    },
    Tag: {
      options: ['Hyperlink', 'Inline'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    Type: 'Expanding Arrow',
    Tag: 'Hyperlink',
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

          <p><strong>CTA Link:</strong><br />
          The CTA link with the arrow prompts the users to take action and is in the default state, but the arrow does not expand.</p>

          <p>The CTA link with the arrow in the hover state changes its appearance once the mouse hovers over it, but the arrow does not expand.</p>

          <p>The CTA link with space expand in the default state is a space expand link where the space after the text expands, but the arrow does not.</p>

          <p>The CTA link with the arrow expand is in a hover state. When the mouse hovers over the link, the text changes its appearance and the arrow expands.</p>

            <Canvas>
            <Story name="CTA link">
              {(args, { globals: { locale } }) => {
                const caption = getCaptionForLocale(locale);
                // replace key
                args["button_option"] = args["Tag"];
                delete args["Tag"];
                return <Ctalink label={caption.detail1} {...args}></Ctalink>;
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
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
          </ul>

          <p>Use the above CSS concerning CTA link.</p>

          <h4>JS:</h4>

          <p>NA</p>

          <h3>Interactions</h3>

          <ul>
            <li>The hover state is applied to the entire button.</li>
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
  args["button_option"] = args["Tag"];
  delete args["Tag"];
  return (
   <Ctalink label={caption.detail1} {...args}></Ctalink>
  );
}

export const CtaLinkStory = Template.bind({});
CtaLinkStory.storyName = 'CTA Link';