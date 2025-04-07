import React from "react";
import { Meta, Canvas, Story } from "@storybook/addon-docs";
import { ImageOnlyCarousel } from "./ImageOnlyCarousel";
import fluidCarouselImg from "../../../../assets/images/carousel3-img.jpg";

const statsArray = (locale) => {
  switch (locale) {
    case "english":
      return [
        { slideImage: fluidCarouselImg },
        { slideImage: fluidCarouselImg },
        { slideImage: fluidCarouselImg },
      ];
    case "arabic":
      return [
        { slideImage: fluidCarouselImg },
        { slideImage: fluidCarouselImg },
        { slideImage: fluidCarouselImg },
      ];
    case "burmese":
      return [
        { slideImage: fluidCarouselImg },
        { slideImage: fluidCarouselImg },
        { slideImage: fluidCarouselImg },
      ];
    case "japanese":
      return [
        { slideImage: fluidCarouselImg },
        { slideImage: fluidCarouselImg },
        { slideImage: fluidCarouselImg },
      ];
    default:
      return [
        { slideImage: fluidCarouselImg },
        { slideImage: fluidCarouselImg },
        { slideImage: fluidCarouselImg },
      ];
  }
};

export default {
  title: "Components/UI components/Carousel/Image carousel",
  component: ImageOnlyCarousel,
  parameters: {
    docs: {
      page: () => (
        <>
           <h1>carousel - Image only carousel component</h1>
        <p>The Carousel is a slideshow of multiple images or content.</p>

        <h3>Overview</h3>
        <p>The Carousel component is created for showing sliders, designation, and image in a particular section. It is a multi-usage component that creates teasing kinds of content.</p>

        <h4>When to use:</h4>
        <p>When multiple images or content is to be displayed in a single slide.</p>

        <h3>Formatting</h3>
        <h4>Default</h4>
        <p>It consists of multiple grids with an image, description, and CTA link.</p>

        <h3>Content</h3>
        <p>There are 3 types of Carousel: Fluid, Image, and Fixed</p>
        <ol>
          <li>
            <b>Fluid Image Size Carousel Component:</b>
            <p>In Fluid Image Size Carousel Component, the page layout of the content is adjusted as per the user’s device screen. It consists of a horizontal scroll bar, Image, Text area, CTA Link, Right cursor arrow (left in case of RTL).</p>
          </li>
          <li>
            <b>Image Only Carousel Component:</b>
            <p>In Image Only Carousel Component, only images are available in the slideshow while content and cta links are not included.</p>
          </li>
          <li>
            <b>Fixed Image Size Carousel Component:</b>
            <p>In Fixed Image Size Carousel Component, the size of the image does not change as per the user’s device screen. It consists of a horizontal scroll bar, Image, Text area, Primary button with arrow, Pagination(tablet only), Cursor arrow right (left in case of RTL). The horizontal scroll bar indicates the current position.</p>
          </li>
        </ol>

        <h3>Behaviors</h3>
        <h4>States</h4>
        <p>Image Only Carousel Component:</p>
        <ul>
          <li>Default</li>
          <li>Mobile</li>
        </ul>

        <Canvas>
        <Story name="Image carousel">
          {(args, { globals: { locale } }) => {
            const caption = statsArray(locale);
            return <ImageOnlyCarousel data={caption}></ImageOnlyCarousel>;
          }}
        </Story>
      </Canvas>

        <h3>Usage</h3>
        <p>Copy HTML from the HTML tab of canvas.</p>
        <p>Include Swiper library from here <a href="https://swiperjs.com/get-started">https://swiperjs.com/get-started</a> in your html page.</p>
        {/* <p>If you use fixed image size carousel then include fluid-image-size-carousel.min.css and initialize carousel by calling swiper('.fixed-carousel', '.fixed-carousel__button-wrap'); functions</p>
        <p>If you use Fluid image size carousel then include fixed-size-carousel.min.css and initialize carousel by calling swiper('.fluid-carousel', '.slide-content'); functions</p>
        <p>If you use Image only carousel then include image-only-carousel.min.css and initialize the carousel by calling swiper('.image-carousel', '.slider-slide'); functions.</p>
        <p>If you want to add left-right animation then add data-viewport=”true” attribute to the HTML element you want to animate and include viewport.min.js file.</p>
        <p>Refer <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options</p> */}
        
        <h4>Method 1: Automatic Initialization (Recommended)</h4>
        <ul>
          <li>Include the component initializer script:
            <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js"&gt;&lt;/script&gt;</code>
          </li>
          <li>Add the required data attributes to your carousel element:
            <code>data-undpds-component="swiper" data-selector=".image-carousel" data-arrows-selector=".slider-slide"</code>
          </li>
          <li>The carousel will initialize automatically when the page loads - no JavaScript calls required!</li>
        </ul>
        <h4>Method 2: Manual Initialization (Traditional)</h4>
        <ul>
          <li>Include <code>swiper.min.js</code> in your HTML.</li>
          <li>Call the initialization function directly in your JavaScript:
            <code>swiper('.image-carousel', '.slider-slide');</code>
          </li>
        </ul>

        <p>Additional options:</p>
        <ul>
          <li>If you want to add left-right animation, add <code>data-viewport="true"</code> attribute to the HTML element you want to animate and include <code>viewport.min.js</code> file.</li>
          <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li>
        </ul>
        <h3>CSS and JS References</h3>
        <h4>CSS:</h4>
        <ul>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-only-carousel.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-only-carousel.min.css</a></li>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
        </ul>

        <h4>JS:</h4>
        <ul>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js</a></li>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
        </ul>
        <p>3rd party libraries: Swiper (<a href="https://swiperjs.com/get-started">https://swiperjs.com/get-started</a>)</p>

        <h3>Interactions</h3>
        <p>By clicking on the Chips and CTA Links user is directed to the detailed information page.</p>
        <p>By clicking on the Arrows Buttons, the slides can be swiped forward or backward.</p>

        <h3>Changelog</h3>
        <p>1.0 — Released component</p>
        </>
      )
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return <ImageOnlyCarousel data={caption}></ImageOnlyCarousel>;
};

export const ImageCarousel = Template.bind({});
ImageCarousel.storyName = "Image carousel";