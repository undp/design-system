import React from "react";
import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { Images } from "./ImageCaptionCredit";
import farmlandlg from "../../../assets/images/farmland-lg.jpg";
import farmlandmd from "../../../assets/images/farmland-md.jpg";
import farmlandsm from "../../../assets/images/farmland-sm.jpg";
import { getCaptionForLocale } from "./ImageCaptionCreditUtils";


export default {
  title: 'Foundation/Images/Image with credit + caption',
  component: Images,
  argTypes: {
    size: {
      options: ['wide', 'medium', 'portrait'],
      control: { type: 'inline-radio' },
    },
    caption: {
      options: ["true", "false"],
      control: { type: 'inline-radio' },
    },
    credit: {
      options: ["true", "false"],
      control: { type: 'inline-radio' },
    },
    animation: {
      options: ["true", "false"],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <section>
            <h1>Image with caption and credit component</h1>
            <p>The Image with Caption and Credit describes the image and gives credit to its source.</p>
            <h3>Overview</h3>
            <p>
              The Image with caption and credit creates boxes that are usually teasing some kind of content like- Image,
              Text, and Image author name. A grid system is used to manage the different types of sizes and caption
              molecules are used for creating the card.
            </p>
            <h3>When to use:</h3>
            <ul>
              <li>When description and credit for the source of the image are to be added.</li>
            </ul>
            <h3>Formatting</h3>
            <h4>Default</h4>
            <p>
              It consists of a grid with an image and the description and the source of the image mentioned below or
              beside the image.
            </p>
            <h3>Behaviors</h3>
            <h4>States</h4>
            <p>
              It consists of three states: Wide, Medium, and Portrait.
              <ul>
                <li>
                  <strong>Wide:</strong> In the wide state, the image is large-sized and the caption and credit are
                  mentioned below the image.
                </li>
                <li>
                  <strong>Medium:</strong> In the medium state, the image is medium-sized and the caption and credit are
                  mentioned below the image.
                </li>
                <li>
                  <strong>Portrait:</strong> In portrait state, the image is situated on either side of the grid, and the
                  caption and credit beside the image.
                </li>
              </ul>
            </p>
            <Canvas>
              <Story
                name="Image with credit + caption"
              >
                {Template}
              </Story>
            </Canvas>
            <h3>CSS and JS References</h3>
            <h4>CSS:</h4>
            <p>
              Add the base layout style from:
              <ul>
                <li>
                  <a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">
                    https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css
                  </a>
                </li>
                <li>
                  <a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/image-caption.min.css">
                    https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/image-caption.min.css
                  </a>
                </li>
              </ul>
            </p>
            <h4>JS:</h4>
            <p>
              <a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js">
                https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js
              </a>
            </p>
            <h3>Interactions</h3>
            <p>
              When the page containing the image is opened, the image zooms out and gives a 3-D effect.
            </p>
          </section>
        </>
      ),
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Images
      imagelg={farmlandlg}
      imagemd={farmlandmd}
      imagesm={farmlandsm}
      alt="farmland"
      label={caption.label}
      paragraph={caption.paragraph}
      {...args}
    />
  );
};

export const ImageCaptionCreditStory = Template.bind({});
ImageCaptionCreditStory.args = {
  size: 'wide',
  caption: "true",
  credit: "true",
  animation: "true",
};
