import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Authorimg } from './AuthorImages';
import user from '../../../assets/images/author.png';
import './author-image.scss';

export default {
  title: 'Foundation/Images/Author image',
  component: Authorimg,
  argTypes: {
    variant: {
      name: "Size variant",
      options: ["Large", "Small"],
      control: { type: "inline-radio" },
    },
    accent: {
      name: "Hover accent color",
      options: ["global", "yellow", "red", "green", "blue"],
      control: { type: "inline-radio" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <section>
            <h1>Author Image</h1>
            <p>
              The Author Image component reveals the photo of the author.
            </p>
            <h3>When to use:</h3>
            <ul>
              <li>When the image of the author is to be displayed.</li>
            </ul>
            <h3>Formatting</h3>
            <p>
              It’s circular shaped with an image inside it.
            </p>
            <h3>Behaviors</h3>
            <p>
              There are two states in the Author Image component: Small and Large.
            </p>
            <ul>
              <li>Small</li>
              <li>Large</li>
            </ul>
            <Canvas>
              <Story
                name="Author Image"
              >
                {args => <Authorimg image={user} alt="Headshot of XYZ" title="Headshot of XYZ" {...args} />}
              </Story>
            </Canvas>
            <h3>CSS and JS References</h3>
            <h4>CSS:</h4>
            <p>
              Add the base layout style from{' '}
              <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">
                https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
              </a>
            </p>
            <h4>JS:</h4>
            <p>NA</p>
          </section>
        </>
      ),
    },
  },
};

const Template = (args) => <Authorimg image={user} alt="Headshot of XYZ" title="Headshot of XYZ" {...args} />;

export const AuthorImage = Template.bind({});
AuthorImage.args = {
  accent: 'global',
  variant: 'Small',
};
