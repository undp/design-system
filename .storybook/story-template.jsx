/**
 * UNDP Design System — Storybook Story Template
 *
 * Copy this file when adding a new component story.
 * Replace every <PLACEHOLDER> with the real values.
 *
 * Naming convention for the file:
 *   stories/Components/<Category>/<ComponentName>/<ComponentName>.stories.js
 *
 * Lifecycle status — add one of these as a JSDoc @status tag on the default
 * export to drive component-metadata.json generation:
 *   draft      early-stage, API may change, not for production
 *   beta       feature-complete, under review, may have minor changes
 *   stable     production-ready, stable API (default assumption)
 *   deprecated use is discouraged, will be removed in a future major version
 *
 * @example
 *   @status beta
 *   export default { … }
 */

import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { <ComponentName> } from './<ComponentName>';
import { getCaptionForLocale } from './<ComponentName>Utils';

// ---------------------------------------------------------------------------
// Default export — story metadata
// ---------------------------------------------------------------------------

/**
 * @status stable
 */
export default {
  title: 'Components/<Category>/<ComponentName>',

  component: <ComponentName>,

  argTypes: {
    // -----------------------------------------------------------------------
    // Appearance — always expose colorTheme first
    // -----------------------------------------------------------------------
    colorTheme: {
      name: 'Color theme',
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
      description: 'Light or dark color theme.',
      table: { category: 'Appearance' },
    },

    // -----------------------------------------------------------------------
    // Add component-specific props below.
    // Use table.category to group related controls.
    // -----------------------------------------------------------------------

    // Example — text content prop:
    // label: {
    //   name: 'Label',
    //   control: { type: 'text' },
    //   description: 'Button label text.',
    //   table: { category: 'Content' },
    // },

    // Example — boolean prop:
    // isFullWidth: {
    //   name: 'Full width',
    //   control: { type: 'boolean' },
    //   description: 'Stretch to fill the container.',
    //   table: { category: 'Layout' },
    // },

    // Example — enumerated value:
    // size: {
    //   name: 'Size',
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    //   description: 'Visual size variant.',
    //   table: { category: 'Appearance' },
    // },
  },

  parameters: {
    // Inline documentation page rendered in the Docs tab
    docs: {
      page: () => (
        <>
          {/* ----------------------------------------------------------------
            Section 1: Overview
          ----------------------------------------------------------------- */}
          <h1><ComponentName></h1>
          <p>
            One-sentence description of what this component is and does.
          </p>

          <h3>Overview</h3>
          <p>
            Longer explanation of the component's purpose, when to use it, and
            any important design or accessibility considerations.
          </p>

          <h4>When to use:</h4>
          <ul>
            <li>Use case 1.</li>
            <li>Use case 2.</li>
          </ul>

          {/* ----------------------------------------------------------------
            Section 2: Live demo (Canvas + Story)
          ----------------------------------------------------------------- */}
          <h3>Default</h3>
          <Canvas>
            <Story name="<ComponentName>">
              {(args, { globals: { locale } }) => {
                const data = getCaptionForLocale(locale);
                return <ComponentName {...args} data={data} />;
              }}
            </Story>
          </Canvas>

          {/* ----------------------------------------------------------------
            Section 3: States (add more Canvas blocks as needed)
          ----------------------------------------------------------------- */}
          {/*
          <h3>States</h3>
          <h4>Hover / Focus</h4>
          <p>Description of the hover and focus states.</p>
          <Canvas>
            <Story name="Focused">
              {(args) => <ComponentName {...args} forceFocus />}
            </Story>
          </Canvas>
          */}

          {/* ----------------------------------------------------------------
            Section 4: Usage instructions
          ----------------------------------------------------------------- */}
          <h3>Usage</h3>
          <ol>
            <li>
              Copy the HTML from the <strong>HTML</strong> tab of the Canvas
              above.
            </li>
            <li>
              Include the CSS and JS listed below in your page{`'`}s{' '}
              <code>&lt;head&gt;</code> and before <code>&lt;/body&gt;</code>.
            </li>
            <li>
              Add{' '}
              <code>data-undpds-component="<component-key>"</code> to the
              root element, then load{' '}
              <code>init.js</code> — the component will initialise
              automatically.
            </li>
          </ol>

          {/* ----------------------------------------------------------------
            Section 5: CSS and JS CDN references
          ----------------------------------------------------------------- */}
          <h3>CSS and JS References</h3>

          <h4>CSS</h4>
          <ul>
            <li>
              <a
                href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css"
                target="_blank"
                rel="noopener noreferrer"
              >
                base-minimal.min.css
              </a>
            </li>
            <li>
              <a
                href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/<component-name>.min.css"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'<component-name>'}.min.css
              </a>
            </li>
          </ul>

          <h4>JS</h4>
          <p>
            Automatic initialisation via{' '}
            <a
              href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/init.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              init.js
            </a>
            {' '}(recommended):
          </p>
          <pre>
            <code>
              {`<script src="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/init.js"></script>`}
            </code>
          </pre>
          <p>Or load the component script directly:</p>
          <ul>
            <li>
              <a
                href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/<component-name>.min.js"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'<component-name>'}.min.js
              </a>
            </li>
          </ul>

          {/* ----------------------------------------------------------------
            Section 6: Interactions / behaviours
          ----------------------------------------------------------------- */}
          <h3>Interactions</h3>
          <p>Describe interactive behaviour, keyboard navigation, ARIA roles.</p>
        </>
      ),
    },
  },
};

// ---------------------------------------------------------------------------
// Template — shared render function
// ---------------------------------------------------------------------------

const Template = (args, { globals: { locale } }) => {
  const data = getCaptionForLocale(locale);
  return <ComponentName {...args} data={data} />;
};

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

// Default / light theme
export const Default = Template.bind({});
Default.storyName = '<ComponentName>';
Default.args = { colorTheme: 'light' };

// Dark theme variant
export const Dark = Template.bind({});
Dark.storyName = '<ComponentName> — Dark';
Dark.args = { colorTheme: 'dark' };
Dark.parameters = {
  chromatic: { modes: { dark: { colorTheme: 'dark' } } },
};
