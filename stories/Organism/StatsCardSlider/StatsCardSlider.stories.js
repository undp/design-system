import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Statscardslider } from "./StatsCardSlider";
import { statsArray } from "./StatsCardSliderUtils";


export default {
 title: "Components/UI components/Stats card slider",
 component: Statscardslider,
 parameters: {
  docs: {
      page: () => (
          <>
            <h1>Stats Card Slider</h1>

            <p>This is a collection of <a href="/docs/components-ui-components-cards-stats-card--stats-card">Stats cards</a> organized in a slider.</p>

            <Canvas>
              <Story name="Stats card slider">
                {(args, { globals: { locale, accent } }) => {
                  const caption = statsArray(locale);
                  return <Statscardslider data={caption} {...args}></Statscardslider>;
                }}
              </Story>
            </Canvas>

            <hr />

            <h3>Usage</h3>

            <ul>
                <li>Copy the HTML from the HTML tab of the canvas and include the CSS and JS files listed below. Remove all inline styling added by Swiper.</li>
                <li>Include the CSS and JS resources defined in the <a href="/docs/components-ui-components-cards-stats-card--stats-card#css-and-js-references">Stats card</a> documentation. Pay attention to any required JS initialization.</li>
                <li>Include the CSS and JS files listed below.</li>
                {/* <li>Initialize the swiper by calling the following function: <code>swiper('.stats-slider');</code></li> */}
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration and options.</li>
                <li>Choose one of the following initialization methods:</li>
            </ul>
            <h4>Method 1: Automatic Initialization (Recommended)</h4>
            <ul>
              <li>Include the component initializer script:
                <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/ext-comp-loader.min.js"&gt;&lt;/script&gt;</code>
              </li>
              <li>Add the required data attributes to your slider element:
                <code>data-undpds-component="swiper" data-selector=".stats-slider"</code>
              </li>
              <li>The slider will initialize automatically when the page loads - no JavaScript calls required!</li>
            </ul>
            <h4>Method 2: Manual Initialization (Traditional)</h4>
            <ul>
              <li>Include <code>swiper.min.js</code> in your HTML.</li>
              <li>Call the initialization function directly in your JavaScript:
                <code>swiper('.stats-slider');</code>
              </li>
            </ul>


            <h4>CSS and JS References</h4>

            <h5>CSS:</h5>
            <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a> (only once)</li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-card-slider.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-card-slider.min.css</a></li>
            </ul>

            <h5>JS:</h5>
            <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js">https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js</a></li>
            </ul>

          </>
      )
  }
}
}

const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return <Statscardslider data={caption} {...args}></Statscardslider>;
}

export const StatsCardSliderStory = Template.bind({});
StatsCardSliderStory.storyName = "Stats card slider";
