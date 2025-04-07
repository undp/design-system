import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { StatsSlider } from "./StatsSlider";
import { statsArray } from "./StatsSliderUtils";

export default { 
  title: "Patterns/Stats slider (two rows)",
  parameters: {
    docs: {
        page: () => (
            <>
<h1>Stats Slider</h1>
<p>A Stats slider is a group of cards arranged horizontally in two rows that slide in from opposite directions on a page scroll.</p>

<h3>Overview</h3>
<p>
    The stats slider component is an effective way to represent multiple stats visually. The slider consists of multiple cards arranged in two rows that slide in from opposite directions when the user scrolls the page, thus grabbing the user’s attention.
</p>
<p>
    The stats card slider is a type of pattern which uses multiple components and arranges them in a visually appealing way.
</p>
<p>The stats card slider is used to show various related statistics.</p>

<h3>When to use:</h3>
<ul>
    <li>To showcase related stats</li>
    <li>To grab a user's attention while scrolling through</li>
    <li>If you have only a small space to display a lot of content.</li>
</ul>

<h3>Content</h3>
<p>
    The stats card slider is made up of a group of stats cards arranged in two rows. The stats cards contain a value, label, and description. The description should be precise and not more than a couple of lines.
</p>
<p>The number of cards will be divided equally into two rows and will fit the grid width.</p>

<h3>Behaviors</h3>

<h4>States</h4>
<p>
    A stats card slider has 2 states on larger resolutions: Static and scrolling. By default, only the section title of the slider should be displayed. As a user scrolls down the page, the first card from both rows will be shown at the extreme left and right of the page. As the user scrolls further and the slider is in the center of the viewport, all the cards in both rows should be displayed and both rows should be aligned in the center of the page. Additionally, an accent color overlay is displayed on hover.
</p>
<p>
    On mobile, this slider is converted to a standard carousel. The card in the center of the viewport will display the hover effect.
</p>

<p>The following behavior modifiers are available:</p>

<p>A medium or a small stats card is used in sliders:</p>
<ul>
    <li>Medium: <code>.statscard--md</code></li>
    <li>Small: <code>.statscard--sm</code></li>
</ul>

<Canvas>
  <Story name="Stats slider (two rows)">
    {(args, { globals: { locale, accent } }) => {
      const caption = statsArray(locale);
      return <StatsSlider data={caption} {...args}></StatsSlider>;
    }}
  </Story>
</Canvas>

<h3>Usage:</h3>
<ul>
    <li>Copy HTML from the HTML tab of canvas in your HTML page and include CSS and JS in the ‘CSS and JS References’ section.</li>
    <li>Initialize the swiper and parallax effect by calling functions mentioned below.</li>
    <li>Include the CSS and JS resource and initialize them as defined in the `Stats card`.</li>
    {/* <li><code>swiper('.stats-card-slider')</code></li>
    <li><code>parallaxEffect('.stats-card-slider')</code></li> */}
</ul>
<h4>Method 1: Automatic Initialization (Recommended)</h4>
<ul>
   <li>Include Swiper library from <a href="https://swiperjs.com/get-started">here</a> and GSAP libraries (gsap, ScrollTrigger, and EasePack) from <a href="https://greensock.com/docs/v3/Installation">here</a> in your HTML page.</li>
   <li>Include the component initializer script:
      <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/ext-comp-loader.min.js"&gt;&lt;/script&gt;</code>
   </li>
   <li>Add the required data attribute to your stats slider element:
      <code>data-undpds-component="stats-slider"</code>
   </li>
   <li>The stats slider will initialize automatically when the page loads - no JavaScript calls required!</li>
</ul>
<h4>Method 2: Manual Initialization (Traditional)</h4>
<ul>
   <li>Include Swiper library from <a href="https://swiperjs.com/get-started">here</a> and GSAP libraries (gsap, ScrollTrigger, and EasePack) from <a href="https://greensock.com/docs/v3/Installation">here</a> in your HTML page.</li>
   <li>Include the required JS files as listed in the CSS and JS References section.</li>
   <li>Call the initialization functions directly in your JavaScript:
      <code>swiper('.stats-card-slider');</code>
      <code>parallaxEffect('.stats-card-slider');</code>
   </li>
</ul>
<p>This widget displays parallax on desktop and slider on mobile, so it has to apply both on load. Include Swiper (<a href="https://swiperjs.com/get-started">https://swiperjs.com/get-started</a>) and <a href="https://greensock.com/docs/v3/Installation">GSAP libraries</a> for parallax (include gsap, ScrollTrigger, and EasePack) and slider effects in your HTML file.</p>

<ul>
    <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li>
    <li>Refer to <a href="https://github.com/undp/design-system/wiki/Parallax-documentation">this document</a> for Parallax integration & options.</li>
</ul>

<h3>CSS and JS References</h3>

<h4>CSS:</h4>
<p>Add the base layout style from:</p>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-slider.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-slider.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-cards.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-cards.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
</ul>

<h4>JS:</h4>
<p>Include the following JS Files:</p>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/parallax.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/parallax.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/fitText.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/fitText.min.js</a></li>
</ul>

<p>The following external libraries need to be included as well:</p>
<ul>
    <li>Swiper</li>
    <li>GSAP core</li>
    <li>GSAP ScrollTrigger plugin</li>
    <li>GSAP EasePack plugin</li>
</ul>

<h3>Interactions</h3>
<p>The stats card slider follows the hover-over effect of the cards used. These cards are not clickable.</p>

<h3>Changelog</h3>
<p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale, accent } }) => {
  const caption = statsArray(locale);
  return <StatsSlider data={caption} {...args}></StatsSlider>;
}

export const StatsSliderStory = Template.bind({});
StatsSliderStory.storyName = "Stats slider (two rows)";