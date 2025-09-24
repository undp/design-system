import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { OurExpertise } from "./OurExpertise";
import { getCaptionForLocale } from "./OurExpertiseUtils";

export default {
  title: "Patterns/Our Expertise",
  component: {OurExpertise},
  parameters: {
    docs: {
        page: () => (
            <>
<h1>Our Expertise</h1>
<p>Our Expertise section on the main Homepage combining two vertical panels, one of which represents a tabbed slider.</p>

<h3>Overview</h3>

<Canvas>
  <Story name="Our Expertise">
    {(args, { globals: { locale } }) => {
      const content = getCaptionForLocale(locale);
      return <OurExpertise content={content}></OurExpertise>;
    }}
  </Story>
</Canvas>

<h3>Usage</h3>
<ul>
  <li>Copy HTML from the Canvas page and add CSS and JS from the 'CSS and JS References' section below.</li>
  {/* <li>Initialize the slider in document ready or window load by calling the <code>ourExpertise()</code> function.</li> */}
</ul>
<h4>Method 1: Automatic Initialization (Recommended)</h4>
<ul>
   <li>Include the required CSS and JS files listed in the CSS and JS References section.</li>
   <li>Include the component initializer script:
      <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/init.min.js"&gt;&lt;/script&gt;</code>
   </li>
   <li>Add the required data attribute to your Our Expertise element:
      <code>data-undpds-component="our-expertise"</code>
   </li>
   <li>The Our Expertise component will initialize automatically when the page loads - no JavaScript calls required!</li>
</ul>
<h4>Method 2: Manual Initialization (Traditional)</h4>
<ul>
   <li>Include the required CSS and JS files listed in the CSS and JS References section.</li>
   <li>Call the initialization function directly in your JavaScript:
      <code>ourExpertise();</code>
   </li>
</ul>
<h3>CSS and JS References</h3>

<h4>CSS:</h4>
<p>Add the base layout style from:</p>
<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/our-expertise.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/our-expertise.min.css</a></li>
</ul>

<h4>JS:</h4>
<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/components/our-expertise.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/components/our-expertise.min.js</a></li>
</ul>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <OurExpertise content={caption}></OurExpertise>;
}

export const OurExpertiseStory = Template.bind({});
OurExpertiseStory.storyName = "Our Expertise";

