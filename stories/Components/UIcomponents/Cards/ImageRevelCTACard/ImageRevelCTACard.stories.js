import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { ImageRevelCard } from './ImageRevelCTACard';
import img from '../../../../assets/images/cardimage.jpg';
import imgsmall from '../../../../assets/images/CardImgsmall.jpg';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            contentname:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
            btnlabel: "READ MORE",
            link: "#",
            size: "medium-4",
            imageback: img,
          },
        ],
      };
      return engText;
    case "ukrainian":
      const ukText = {
        data: [
          {
            contentname: "Програма ПРООН із підвищення стійкості та відновлення",
            btnlabel: "ЧИТАТИ ДАЛІ",
            link: "#",
            size: "medium-4",
            imageback: img,
          },
        ],
      };
      return ukText;
    case "arabic":
      const arabicText = {
        data: [
          {
            contentname: "الألم هو الحب نفسه",
            btnlabel: "متجر",
            link: "#",
            size: "medium-4",
            imageback: img,
          },
        ],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        data: [
          {
            contentname:
              "နာကျင်မှုကအချစ်ပါဘဲ နာကျင်မှုက အချစ်ပါဘဲ နာကျ င်မှုကအချစ်ပါဘဲနာကျင်မှုကအချစ်ပါဘဲ",
            btnlabel: "ပိုပြီးဖတ်ပါ",
            link: "#",
            size: "medium-4",
            imageback: img,
          },
        ],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        data: [
          {
            contentname: "痛みは愛そのものです",
            btnlabel: "店",
            link: "#",
            size: "medium-4",
            imageback: img,
          },
        ],
      };
      return japaneseText;
    default:
      const dummy = {
        data: [
          {
            contentname:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
            btnlabel: "READ MORE",
            link: "#",
            size: "medium-4",
            imageback: img,
          },
        ],
      };
      return dummy;
  }
};

export default {
  title: 'Components/UI components/Cards/Image reveal card',
  argTypes: {
    Size: {
      name: 'Size variant',
      options: ['Large', 'Small'],
      control: { type: 'inline-radio' },
    },
    Hovercolor: {
      name: 'Hover accent color',
      options: ['global', 'yellow', 'red', 'green', 'blue'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    Size: 'Large',
    Hovercolor: 'global',
  },
  parameters: {
    docs: {
        page: () => (
            <>
            <h1>Image Reveal Card</h1>

            <p>Image reveal cards are cards with information about the image and CTA links for detailed information.</p>

            <h3>Overview</h3>

            <p>The Image reveals card component is a multi-usage component that creates boxes that are usually teasing some kind of content like- Image, Text, and CTA Link.</p>

            <h4>When to use:</h4>

            <p>When text and CTA Link need to be attached with an image.</p>

            <h3>Formatting</h3>

            <h4>Default</h4>

            <p>It consists of a grid with an image, text, and CTA link.</p>

            <h3>Content</h3>

            <p>There are two types of image reveal card: Medium and Small</p>

            <ul>
              <li><strong>Medium:</strong> Image Reveal Card of medium-size shows the Image and CTA Link. The Text will show on hover.</li>
              <li><strong>Small:</strong> Image Reveal Card of small size comes with a different Image and CTA Link. The Text will show on hover.</li>
            </ul>

            <h3>Behaviors</h3>

            <h4>States</h4>

            <p>There are 2 states in the Image Reveal Card: Default and Hover.</p>

            <ul>
              <li><strong>Default:</strong> It consists of Image and CTA Link.
                <ul>
                  <li>Medium size</li>
                  <li>Small size</li>
                </ul>
              </li>
              <li><strong>Hover:</strong> It consists of Image, Text, and CTA Link. It changes appearance when the mouse hovers over it.
                <ul>
                  <li>Medium size</li>
                  <li>Small size</li>
                </ul>
              </li>
            </ul>

            <h4>Image reveal card</h4>

            <Canvas>
              <Story name="Image reveal card">
                {(args, { globals: { locale, accent } }) => {
                  const caption = getCaptionForLocale(locale);
                  return (
                    <ImageRevelCard data={caption.data} {...args}>
                      {" "}
                    </ImageRevelCard>
                  );
                }}
              </Story>
            </Canvas>

            <h3>Usage</h3>

            <ul>
              <li>Select size control either Large or Small from the control tab on canvas.</li>
              <li>Copy the HTML from the HTML tab and include the below listed CSS and JS files.</li>
              <li>If you want to add left-right animation then add data-viewport=”true” attribute to your HTML element and include viewport.min.js file.</li>
            </ul>

            <h3>CSS and JS References</h3>

            <h4>CSS:</h4>

            <p>Add the base layout style from:</p>

            <ul>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
              <li>Include <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">dist/css/components/cta-link.min.css</a></li>
              <li>Include <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-revel-cta-card.min.css">dist/css/components/image-revel-cta-card.min.css</a></li>
            </ul>

            <h4>JS:</h4>

            <ul>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
            </ul>

            <h3>Interactions</h3>

            <ul>
              <li>Hover state applies to the entire card.</li>
              <li>By clicking on the CTA Link, the page is forwarded to the detailed information page.</li>
            </ul>

            <h3>Changelog</h3>

            <p>1.0 — Released component</p>

            </>
        )
    }
}
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <ImageRevelCard data={caption.data} {...args}>
    {" "}
    </ImageRevelCard>
  );
}

export const ImageRevelCTACard = Template.bind({});
ImageRevelCTACard.storyName = 'Image reveal card';

