import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { OurExpertise } from "./OurExpertise";

const getCaptionForLocale = (locale) => {
  const content = {
    english: [
      {
        title: "3 Directions of change",
        slides: [
          {
            title: "Structural transformation",
            text: "Including green, inclusive and digital transitions: working with countries to effect change in systems and structures that shape a country’s sustainable development",
            image: "",
            color: "#237B45",
          },
          {
            title: "Leaving no-one behind",
            text: "A rights-based approach centered on empowerment, inclusion, equity, human agency and human development",
            image: "",
            color: "#98BC4B",
          },
          {
            title: "Building resilience",
            text: "Strengthening countries and institutions to prevent, mitigate and respond to crisis, conflict, natural disasters, climate and social and economic shocks",
            image: "",
            color: "#B2CA4E",
          },
        ],
      },
      {
        title: "6 Signature solutions",
        slides: [
          {
            title: "Poverty and inequality",
            text: "Tackling inequality of opportunities by investing in the enhanced capabilities people need to move above the poverty line and keep moving forwards.",
            image: "signature-solution-1-poverty.jpg",
            color: "#E6243C",
          },
          {
            title: "Governance",
            text: "Helping countries address emerging complexities by “future-proofing” governance systems through anticipatory approaches and better management of risk.",
            image: "signature-solution-2-governance.jpg",
            color: "#036A9C",
          },
          {
            title: "Resilience",
            text: "Supporting countries and communities in building resilience to diverse shocks and crises, including conflict, climate change, disasters and epidemics.",
            image: "signature-solution-3-resilience.jpg",
            color: "#EF803B",
          },
          {
            title: "Environment",
            text: "Putting nature and the environment at the heart of national economies and planning; helping governments protect, manage and value their natural assets.",
            image: "signature-solution-4-environment.jpg",
            color: "#3E7F45",
          },
          {
            title: "Energy",
            text: "Increasing energy access for those furthest behind and accelerating the transition to renew-able energy.",
            image: "signature-solution-5-energy.jpg",
            color: "#DE9800",
          },
          {
            title: "Gender equality",
            text: "Confronting the structural obstacles to gender equality and strengthening women’s economic empowerment and leadership.",
            image: "signature-solution-6-gender.jpg",
            color: "#EE402C",
          },
        ],
      },
      {
        title: "3 Enablers",
        slides: [
          {
            title: "Digitalisation",
            text: "Supporting countries to build inclusive, ethical and sustainable digital societies",
            image: "enabler-1-digitalisation.jpg",
            color: "#22A4BC",
          },
          {
            title: "Strategic innovation",
            text: "Empowering governments and communities to enhance the performance of entire systems, making them adaptive and resilient",
            image: "enabler-2-innovation.jpg",
            color: "#75D83C",
          },
          {
            title: "Development financing",
            text: "Partnering with governments and the private sector to align public and private capital flows with the SDGs and mobilise finance at scale",
            image: "enabler-3-financing.jpg",
            color: "#2A3C95",
          },
        ],
      },
    ],
  };
  return content[locale] ? content[locale] : content.english;
};

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
