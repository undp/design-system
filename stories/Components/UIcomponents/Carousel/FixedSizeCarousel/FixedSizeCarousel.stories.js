import { Meta, Story, Canvas, Anchor } from "@storybook/addon-docs/blocks";
import { FixedSizeCarousel } from "./FixedSizeCarousel";
import { ImageOnlyCarousel } from "../ImageOnlyCarousel/ImageOnlyCarousel";
import { statsArray } from "./FixedSizeCarouselUtils";

export default {
  title: 'Components/UI components/Carousel/Fixed carousel',
  component: FixedSizeCarousel,
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Carousel - Fixed Image Size Carousel</h1>

              <p>The Carousel is a slideshow of multiple images or content.</p>

              <h3>Overview</h3>

              <p>The Carousel component is created for showing sliders, designations, and images in a particular section. It is a multi-usage component that creates teasing kinds of content.</p>

              <h3>When to use:</h3>

              <p>When multiple images or content is to be displayed in a single slide.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of multiple grids with an image, description, and CTA link.</p>

              <h3>Content</h3>

              <p>There are 3 types of Carousel: Fluid, Image, and Fixed.</p>

              <ul>
                <li><strong>Fluid Image Size Carousel Component:</strong> In Fluid Image Size Carousel Component, the page layout of the content is adjusted as per the user’s device screen. It consists of a horizontal scroll bar, Image, Text area, CTA Link, and Right cursor arrow (left in case of RTL).</li>
                <li><strong>Image Only Carousel Component:</strong> In Image Only Carousel Component, only images are available in the slideshow while content and CTA links are not included.</li>
                <li><strong>Fixed Image Size Carousel Component:</strong> In Fixed Image Size Carousel Component, the size of the image does not change as per the user’s device screen. It consists of a horizontal scroll bar, Image, Text area, Primary button with arrow, Pagination (tablet only), and Cursor arrow right (left in case of RTL). The horizontal scroll bar indicates the current position.</li>
              </ul>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>Fixed Image Size Carousel Component:</p>

              <ul>
                <li><strong>Default:</strong> The Description and Chip are located beside the Image with enough space between them. When the user is at the first item, the cursor arrow right is displayed. Clicking the arrow will take the user to the next item in the carousel. When the user is on the last item, the left cursor arrow is displayed. Clicking on it will take the user to the previous item in the carousel.</li>
                <li><strong>Mobile:</strong> The Description and Chip are located below the Image with no space between them. Swiping will move the user to the next or previous item.</li>
                <li><strong>Tablet:</strong> The Description and Chip are located beside the Image with minimal space between them. There are arrow buttons beside the Chip to slide back or to the next slide. Clicking pagination will take the user to the next/previous item.</li>
              </ul>

              <Canvas>
                <Story name="Fixed carousel">
                  {(args, { globals: { locale } }) => {
                    const caption = statsArray(locale);
                    return (
                      <FixedSizeCarousel
                        data={caption.data}
                        label={caption.label}
                      ></FixedSizeCarousel>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                <li>Copy HTML from the HTML tab of the canvas.</li>
                <li>Include Swiper library from <a href="https://swiperjs.com/get-started">here</a> in your HTML page.</li>
                <li>Include the CSS files listed below.</li>
                <li>Choose one of the following initialization methods:</li>
                {/* <li>If you use fixed image size carousel, include <code>fluid-image-size-carousel.min.css</code> and initialize carousel by calling <code>swiper('.fixed-carousel', '.fixed-carousel__button-wrap');</code> functions.</li>
                <li>If you use Fluid image size carousel, include <code>fixed-size-carousel.min.css</code> and initialize carousel by calling <code>swiper('.fluid-carousel', '.slide-content');</code> functions.</li>
                <li>If you use Image only carousel, include <code>image-only-carousel.min.css</code> and initialize the carousel by calling <code>swiper('.image-carousel', '.slider-slide');</code> functions.</li>
                <li>If you want to add left-right animation, add <code>data-viewport="true"</code> attribute to the HTML element you want to animate and include <code>viewport.min.js</code> file.</li>
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li> */}
              </ul>
              
              <h4>Method 1: Automatic Initialization (Recommended)</h4>
              <ul>
                <li>Include the component initializer script:
                  <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/init.min.js"&gt;&lt;/script&gt;</code>
                </li>
                <li>Add the required data attributes to your carousel element:
                  <code>data-undpds-component="swiper" data-selector=".fixed-carousel" data-arrows-selector=".fixed-carousel__button-wrap"</code>
                </li>
                <li>The carousel will initialize automatically when the page loads - no JavaScript calls required!</li>
              </ul>

              <p>Additional options:</p>
              <ul>
                <li>If you want to add left-right animation, add <code>data-viewport="true"</code> attribute to the HTML element you want to animate and include <code>viewport.min.js</code> file.</li>
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li>
              </ul>
              <h4>Method 2: Manual Initialization (Traditional)</h4>
              <ul>
                <li>Include <code>swiper.min.js</code> in your HTML.</li>
                <li>Call the initialization function directly in your JavaScript:
                  <code>swiper('.fixed-carousel', '.fixed-carousel__button-wrap');</code>
                </li>
              </ul>
              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-link.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/buttons.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/fixed-size-carousel.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/fixed-size-carousel.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/swiper.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/swiper.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js</a></li>
              </ul>

              <p>3rd party libraries:</p>
              <ul>
                <li>Swiper: <a href="https://swiperjs.com/get-started">Swiper</a></li>
              </ul>

              <h3>Interactions</h3>

              <ul>
                <li>By clicking on the Chips and CTA Links, the user is directed to the detailed information page.</li>
                <li>By clicking on the Arrow Buttons, the slides can be swiped forward or backward.</li>
              </ul>

              

              

            </>
        )
    }
}
};

const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return (
    <FixedSizeCarousel
      data={caption.data}
      label={caption.label}
    ></FixedSizeCarousel>
  );
}

export const FixedSizeCarouselStory = Template.bind({});
FixedSizeCarouselStory.storyName = "Fixed carousel";