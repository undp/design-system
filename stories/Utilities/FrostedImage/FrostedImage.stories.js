import React from 'react';
import { Meta, Story } from '@storybook/addon-docs';
import { FrostedImage } from './FrostedImage';

export default {
  title: 'Utilities/Frosted background',
  component: FrostedImage,
};

const Template = (args) => <FrostedImage {...args} />;

export const FrostedBackgroundStory = Template.bind({});
FrostedBackgroundStory.storyName = 'Frosted background';

FrostedBackgroundStory.parameters = {
  docs: {
    description: {
      component: `
# Frosted background

The Frosted background is used to embed an overlay in a web page.

### Usage

- Take HTML from the HTML tab in canvas.

### CSS and JS References

#### CSS:

Add the base style only, located at **dist/css/base-minimal.min.css** along with the following:

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/froasted-background.min.css

#### JS:

NA

### Changelog

1.0 — Released component.
`,
    },
  },
};
