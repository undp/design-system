import { Meta, Story, Canvas } from "@storybook/addon-docs";
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
  <li>Initialize the slider in document ready or window load by calling the <code>ourExpertise()</code> function.</li>
</ul>

<h3>CSS and JS References</h3>

<h4>CSS:</h4>
<p>Add the base layout style from:</p>
<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/our-expertise.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/our-expertise.min.css</a></li>
</ul>

<h4>JS:</h4>
<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/components/our-expertise.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/components/our-expertise.min.js</a></li>
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

