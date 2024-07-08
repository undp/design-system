import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Spacing } from './Spacing';

export default {
  title: 'Foundation/Layout/Spacing',
  component: Spacing,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
};

const Template = () => (
  <>
    <h1>Spacing</h1>

    <p>The Spacing units create visual rhythm and balance.</p>

    <h3>When to use:</h3>
    <ul>
      <li>To create spacing before, after, or in-between texts.</li>
    </ul>

    <h3>States</h3>
    <p>There are thirteen states with different spacing widths.</p>

    <Canvas>
      <Story name="Spacing">
        <Spacing />
      </Story>
    </Canvas>

    <h3>Usage</h3>
    <p>
      Use of standard spaces are already applied on different components, if you want to change the space, that can be done in <strong>stories/assets/scss/_variables.scss</strong>.
    </p>
  </>
);

export const SpacingStory = () => <Template />;
SpacingStory.parameters = {
  docs: {
    source: {
      code: `
import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Spacing } from "./Spacing";

<Meta
  title="Foundation/Layout/Spacing"
  component={Spacing}
  parameters={{
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  }}
/>

# Spacing

The Spacing units create visual rhythm and balance.

### When to use:

- To create spacing before, after, or in-between texts.

### States

There are thirteen states with different spacing widths.

<Canvas>
  <Story name="Spacing">
    <Spacing></Spacing>
  </Story>
</Canvas>

### Usage

Use of standard spaces are already applied on different components, if you want to change the space, that can be done in **stories/assets/scss/_varaibles.scss**.
`,
    },
  },
};
