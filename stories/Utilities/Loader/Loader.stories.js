import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { Loader } from './Loader';

export default {
  title: 'Utilities/Loader',
  component: Loader,
  argTypes: {
    Variant: {
      name: "Display variant",
      options: ["Responsive", "Small", "Large"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Variant: "Responsive",
  },

  parameters: {
    docs: {
        page: () => (
            <>
<h1>Loader</h1>
<p>A loading spinner is a utility that shows a loading page overlay when clicking a link or button</p>

<h3>Overview</h3>
<p>A loading spinner displays a loading page overlay to inform the user of some background activity happening in response to their action on a page. This helps the user understand that they need to wait for the activity to finish before proceeding further.</p>

<h4>When to use:</h4>
<ul>
    <li>To inform the user that some background activity is happening when they encounter a delay in response to a button or link click</li>
</ul>

<h3>Formatting</h3>

<h4>Default</h4>
<p>The loading spinner is a simple animation that informs the user that the page is loading. It will be displayed until the full page has been loaded. By default it displays small version on small screens and large version for medium screens and desktops.</p>

<h4>Small/Large</h4>
<p>Loader will be displayed in a respective size variant for all screens.</p>

<h3>Content</h3>
<p>The loading spinner is a simple circle animation. The size varies depending on the screen size.</p>

<h3>Behaviors</h3>

<h4>States</h4>
<p>The loading spinner has just one state - spinning. As soon as the page loads, the loading spinner should be removed.</p>

<Canvas>
  <Story name="Loader">
    <Loader></Loader>
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
<p>Add the base layout style from <strong>dist/css/base-minimal.min.css</strong></p>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/loader.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/loader.css</a></li>
</ul>

<h4>JS:</h4>
<p>NA</p>

<h4>Interactions</h4>
<p>No interactions are needed with the loader</p>


            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  return <Loader {...args}></Loader>;
}

export const LoaderStory = Template.bind({});
LoaderStory.storyName = 'Loader';

