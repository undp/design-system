import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';

export default {
  title: 'Foundation/Layout/Grid',
  parameters: {
    docs: {
      page: () => (
        <section>
          <h1>Grid system</h1>
          <p>
            A grid is a series of rows where the developer specifies the content. This Design system is based on Foundation Grid, more you can find about grid system here (<a href="https://get.foundation/sites/docs/xy-grid.html">https://get.foundation/sites/docs/xy-grid.html</a>)
          </p>

          <h4>When to use:</h4>
          <ul>
            <li>When the user needs to control the layout in two dimensions. With Grid users have rows and columns, cells, and grid areas (a group of more than one cell) and items must be placed in these cells or Grid areas</li>
          </ul>

          <h3>Usage</h3>
          <p>
            Design system is based on <a href="https://get.foundation/sites/docs/xy-grid.html">Foundation Grid</a>, you can get more detail about the layout and grid from their <a href="https://get.foundation/sites/docs/index.html">getting started guide</a>.
          </p>

          <p><strong>Note</strong>: As the base of the design system is using Foundation grid but components are independent of the grid system, that means components can be used with any other grid system (e.g., Bootstrap)</p>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>
          <p>
            Add the base layout style from below path which includes the grid system of Foundation.<br />
            - <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a>
          </p>

          <h4>JS:</h4>
          <p>- NA</p>
        </section>
      ),
    },
  },
};

const Template = () => (
  <>
    <h1>Grid system</h1>

    <p>
      A grid is a series of rows where the developer specifies the content. This Design system is based on Foundation Grid, more you can find about grid system here (<a href="https://get.foundation/sites/docs/xy-grid.html">https://get.foundation/sites/docs/xy-grid.html</a>)
    </p>

    <h4>When to use:</h4>
    <ul>
      <li>When the user needs to control the layout in two dimensions. With Grid users have rows and columns, cells, and grid areas (a group of more than one cell) and items must be placed in these cells or Grid areas</li>
    </ul>

    <h3>Usage</h3>
    <p>
      Design system is based on <a href="https://get.foundation/sites/docs/xy-grid.html">Foundation Grid</a>, you can get more detail about the layout and grid from their <a href="https://get.foundation/sites/docs/index.html">getting started guide</a>.
    </p>

    <p><strong>Note</strong>: As the base of the design system is using Foundation grid but components are independent of the grid system, that means components can be used with any other grid system (e.g., Bootstrap)</p>

    <h3>CSS and JS References</h3>

    <h4>CSS:</h4>
    <p>
      Add the base layout style from below path which includes the grid system of Foundation.<br />
      - <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a>
    </p>

    <h4>JS:</h4>
    <p>- NA</p>
  </>
);

export const GridStory = Template.bind({});
