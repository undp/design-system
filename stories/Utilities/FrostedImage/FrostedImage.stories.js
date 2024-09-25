import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { FrostedImage } from './FrostedImage';

export default {
  title: 'Utilities/Frosted background',
  component: FrostedImage,
  parameters: {
    docs: {
        page: () => (
            <>
<h1>Frosted background</h1>
<p>The Frosted background is used to embed an overlay in a web page.</p>

<Canvas>
  <Story name="Frosted background">
    <FrostedImage></FrostedImage>
  </Story>
</Canvas>

<h3>Usage</h3>
<ul>
    <li>Take HTML from the HTML tab in canvas.</li>
</ul>

<h3>CSS and JS References</h3>

<h4>CSS:</h4>
<p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong> along with the following:</p>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/froasted-background.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/froasted-background.min.css</a></li>
</ul>

<h4>JS:</h4>
<p>NA</p>

<h3>Changelog</h3>
<p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
return <FrostedImage></FrostedImage>;
}

export const FrostedImageStory = Template.bind({});
FrostedImageStory.storyName = 'Frosted background';


