import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Spacing } from './Spacing';
import './spacing.scss';

export default {
  title: 'Foundation/Layout/Spacing',
  component: Spacing,
  parameters: {
    docs: {
      page: () => (
        <section>
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
            Use of standard spaces are already applied on different components. If you want to change the space, that can be done in <strong>stories/assets/scss/_variables.scss</strong>.
          </p>
        </section>
      ),
    },
  },
};

const Template = () => (
  <div className="spacing-wrapper">
    <div className="spacing__row">
      <div className="spacing__define">
        <div className="spacing__name">
          <div className="spacing__label">spacing-01</div>
          <div className="spacing__size">0.125rem</div>
          <div className="spacing-1" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-02</div>
          <div className="spacing__size">0.25rem</div>
          <div className="spacing-2" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-03</div>
          <div className="spacing__size">0.5rem</div>
          <div className="spacing-3" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-04</div>
          <div className="spacing__size">0.75rem</div>
          <div className="spacing-4" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-05</div>
          <div className="spacing__size">1rem</div>
          <div className="spacing-5" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-06</div>
          <div className="spacing__size">1.5rem</div>
          <div className="spacing-6" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-07</div>
          <div className="spacing__size">2rem</div>
          <div className="spacing-7" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-08</div>
          <div className="spacing__size">2.5rem</div>
          <div className="spacing-8" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-09</div>
          <div className="spacing__size">3rem</div>
          <div className="spacing-9" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-10</div>
          <div className="spacing__size">4rem</div>
          <div className="spacing-10" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-11</div>
          <div className="spacing__size">5rem</div>
          <div className="spacing-11" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-12</div>
          <div className="spacing__size">6rem</div>
          <div className="spacing-12" />
        </div>
        <div className="spacing__name">
          <div className="spacing__label">spacing-13</div>
          <div className="spacing__size">10rem</div>
          <div className="spacing-13" />
        </div>
      </div>
    </div>
  </div>
);

export const SpacingStory = Template.bind({});
SpacingStory.storyName = 'Spacing';
