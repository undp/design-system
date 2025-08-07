import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { ProgressBarNavigation } from './ProgressBarNavigation';

export default {
  title: 'Utilities/Progress bar navigation',
  argTypes: {
    Type: {
      name: 'Type',
      options: ['Large', 'Small'],
      control: { type: 'inline-radio' },
    },
    Colors: {
      name: 'Accent color',
      options: ['global', 'yellow', 'red', 'green', 'blue'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    Colors: 'global',
    Type: 'Large',
  },
  parameters: {
    docs: {
      page: () => (
        <>
        <h1>Progress Bar</h1>

        <p>
          The Progress Bar is used to display an indicator showing the completion progress of a task, typically displayed as a progress bar.
        </p>

        <h3>When to use:</h3>
        <ul>
          <li>When a user page needs an indicator to be displayed on top of the page to show the length of scroll for a particular page.</li>
        </ul>

        <h3>Formatting</h3>
        <h4>Default</h4>
        <p>
          Progress bar can be used as reading meter where scrolling progress of the page is captured in the bar. In this case additional javascript initialization is required as explained below.
        </p>

        <p>
          It has different color variations, which increase the length of the color based on the amount of scrolling done by the user.
        </p>

        <Canvas>
          <Story
            name="Progress bar navigation"
            parameters={{
              layout: 'fullscreen',
              docs: {
                story: {
                  inline: false,
                },
              },
            }}
          >
            {(args, { globals: { accent } }) => {
              return <ProgressBarNavigation {...args}></ProgressBarNavigation>;
            }}
          </Story>
        </Canvas>

        <h3>Usage</h3>
        <p>To use this component, follow these steps:</p>
        <ul>
          <li>Copy the HTML from the canvas</li>
          <li>Add it to your HTML page</li>
          <li>Include the CSS and JS listed below</li>
          <li>You should have loader-ready</li>
        </ul>

        <h3>CSS and JS References</h3>

        <h4>CSS:</h4>
        <ul>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css" target="_blank">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/progress-bar.min.css" target="_blank">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/progress-bar.min.css</a></li>
        </ul>

        <h4>JS:</h4>
        <ul>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/scrolling-progress-bar.min.js" target="_blank">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/scrolling-progress-bar.min.js</a></li>
        </ul>

      </>
      ),
    },
  },
};

const Template = (args) => <ProgressBarNavigation {...args}></ProgressBarNavigation>;

export const ProgressBarNavigationStory = Template.bind({});

