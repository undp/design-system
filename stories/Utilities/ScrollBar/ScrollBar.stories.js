import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { ScrollBar } from './ScrollBar';

export default {
  title: 'Utilities/Scrollbars',
  parameters: {
    docs: {
        page: () => (
            <>
<h1>Scrollbar</h1>
<p>The Scrollbar component defines a scroll on a div or a container when the information is too long.</p>

<h3>Overview</h3>
<p>A scrollbar is a bar usually present at the extreme right or at the bottom of the window. It is used to move the page contents up and down or left and right so that the information on the entire page is visible.</p>

<h4>When to use:</h4>
<ul>
    <li>When the contents of the page are hidden and need scrolling.</li>
</ul>

<h3>Formatting</h3>

<h4>Default</h4>
<p>The Scrollbar is a small rectangular bar and the color of the bar shows the position of the content on the page.</p>

<h3>Behaviors</h3>

<h4>States</h4>
<p>The scroll bars are of two types: Horizontal and Vertical</p>
<ul>
    <li><strong>Horizontal:</strong> The horizontal scroll bar is usually located at the bottom of the page. It enables the user to move the contents of the page either to the left or to the right.</li>
    <li><strong>Vertical:</strong> A vertical scroll bar is usually at the extreme right end of the page. It enables the user to move the contents of the page up or down.</li>
</ul>

<Canvas>
  <Story name="Scrollbars">
    <ScrollBar></ScrollBar>
  </Story>
</Canvas>

<h3>Usage</h3>
<ul>
    <li>Add custom-scrollbar CSS class on the element which needs to have scrollbars. You can add height on the element for vertical scrollbar and width (higher than parent) on sub element for horizontal scrollbar.</li>
</ul>

<h3>CSS and JS References</h3>

<h4>CSS:</h4>
<p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong>, no other CSS file required for this component.</p>

<h4>JS:</h4>
<p>NA</p>

<h3>Interactions</h3>
<p>By clicking on the bar and scrolling it, the contents of the page are moved. As the contents of the page move, the color of the bar changes as well.</p>

<h3>Changelog</h3>
<p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
return <ScrollBar></ScrollBar>;
}

export const ScrollBarStory = Template.bind({});
ScrollBarStory.storyName = 'Scrollbar';
