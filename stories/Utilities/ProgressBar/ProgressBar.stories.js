import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'Utilities/Progress bar',
  component: ProgressBar,
  argTypes: {
    Percentage: {
      options: ['0', '25', '50', '100'],
      control: { type: 'radio' },
    },
  },
  args: {
    Percentage: '25',
  },
  parameters: {
    docs: {
        page: () => (
            <>
<h1>Progress bar</h1>
<p>The Progress Bar provides a visual representation of a user’s progress on-page.</p>

<h3>Overview</h3>
<p>A progress bar is a graphical content element that shows the progress of an ongoing task on a computer.</p>

<h4>When to use:</h4>
<ul>
    <li>When the process requires more time to complete the user gets the exact progress.</li>
</ul>

<h3>Formatting</h3>

<h4>Default</h4>
<p>The progress bar is an elongated rectangular bar that displays the progress of an extended computer operation.</p>

<h3>Behaviors</h3>

<h4>States</h4>
<p>The progress bar has two states: default and short.</p>
<ul>
    <li><strong>Progress Bar 0:</strong> Progress bar provides a visual representation of a user’s progress on a page indicating the progress bar is in 0 state showing the progress bar is in the initial state.</li>
    <li><strong>Progress Bar 25:</strong> Progress bar provides a visual representation of a user’s progress on a page indicating the progress bar is in 25% progress.</li>
    <li><strong>Progress Bar 50:</strong> Progress bar provides a visual representation of a user’s progress on a page indicating the progress bar is in 50% progress.</li>
    <li><strong>Progress Bar 100:</strong> Progress bar provides a visual representation of a user’s progress on a page indicating the progress bar is in 100% progress.</li>
</ul>

<Canvas>
  <Story name="Progress bar">
    {(args) => {
        return <ProgressBar {...args}></ProgressBar>;
    }}
  </Story>
</Canvas>

<h3>Usage</h3>
<ul>
    <li>Copy the HTML from the HTML tab of canvas and include the CSS file.</li>
    <li>To change the visual on the progress bar, need to change the value of the value attribute [0 to 100].</li>
</ul>

<h3>CSS and JS References</h3>

<h4>CSS:</h4>
<p>Add the base layout style from <strong>dist/css/base-minimal.min.css</strong></p>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/progress.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/progress.min.css</a></li>
</ul>

<h4>JS:</h4>
<p>NA</p>

<h4>Interactions</h4>
<p>No interactions are needed with the progress bar.</p>

<h3>Changelog</h3>
<p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  return <ProgressBar {...args}></ProgressBar>;
}

export const ProgressBarStory = Template.bind({});
ProgressBarStory.storyName = 'Progress bar';

