import React from 'react';
import { Meta, Story, Source } from '@storybook/addon-docs';

export default {
  title: 'Foundation/Layout/Breakpoint',
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
};

const Template = () => (
  <>
    <h1>Breakpoints</h1>

    <p>
      The Breakpoints are the points at which the content of the website adapts itself as per the user’s device width.
    </p>

    <h3>Overview</h3>
    <p>
      The Breakpoint components are defined to manage the layout of the website according to the device’s resolution with gutter spacing for left or right margins. The design system uses a mobile-first approach which means styles are applied first to mobile devices. Advanced styles and other overrides for larger screens are then added to the stylesheet via media queries.
    </p>

    <h4>When to use:</h4>
    <ul>
      <li>To make the content of the website adaptable to the user’s device resolution.</li>
    </ul>

    <h4>Formatting</h4>

    <h5>Default</h5>
    <p>
      There are three types of breakpoints: small, medium, and large.
    </p>

    <h5>States</h5>
    <p>
      There are four states in Breakpoints: Desktop, Laptop, Tablet, and Mobile.
      <ol>
        <li>Desktop: The minimum width is 1440px</li>
        <li>Laptop: The minimum width is 1025px and maximum width is 1439px.</li>
        <li>Tablet: The minimum width is 481px and maximum width is 1024px</li>
        <li>Mobile: The maximum width is 480px</li>
      </ol>
    </p>

    <h3>CSS and JS References</h3>
    <p>
      We are mostly using Foundation Grid system for layouting and managing our component for different screen sizes shared above.
      <br />
      You need to include <strong>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</strong> in your html file and you are good to go.
    </p>
  </>
);

export const BreakpointStory = Template.bind({});
BreakpointStory.args = {};
