import React from "react";
import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { StatsCards } from "./StatsCards";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        titlename: "Lorem ipsum",
        percentname: "Percent",
        numbername: "35",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        titlename: "Чисельність,",
        percentname: "Відсотки",
        numbername: "0.2",
        text: "Населення, що належить до категорії багатовимірно бідних",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        titlename: "عنوان مستقل",
        percentname: "نسبه مئويه",
        numbername: "35",
        text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        titlename: "လွတ်လပ်သောခေါင်းစဉ်",
        percentname: "ရာခိုင်နှုန်း",
        numbername: "35",
        text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        titlename: "独立したタイトル",
        percentname: "パーセント",
        numbername: "35",
        text: "痛み自体は愛、主な顧客です",
      };
      return japaneseText;
    default:
      return {
        titlename: "Lorem Title",
        percentname:
          "Percents, with very long subheader, spanning several lines",
        numbername: "35",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
  }
};

export default {
  title: "Components/UI components/Cards/Stats card",
  component: { StatsCards },
  argTypes: {
    Size: {
      name: "Size variant",
      options: ["Small", "Medium", "Large", "Extra large"],
      control: { type: "inline-radio" },
    },
    Hovercolor: {
      name: "Hover accent color",
      options: ["global", "yellow", "red", "green", "blue"],
      control: { type: "inline-radio" },
    },
    MaxWidth: {
      name: "Max Width",
      options: ["Yes", "No"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Size: "Medium",
    Hovercolor: "global",
    MaxWidth: "Yes",
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Stats Cards</h1>

          <p>
            A stats card contains the value, label, and a one-line description
            of a statistic.
          </p>

          <h3>Overview</h3>

          <p>
            A stats card highlights an individual statistic. It contains a
            value, label, and a short description. Stats cards are usually
            displayed as a part of a collection of similar cards highlighting
            various statistics. A card is intended to be modular, which means
            you can vary the order of cards in a collection without destroying
            any individual card’s meaning.
          </p>

          <h3>When to use:</h3>

          <p>
            To display and highlight multiple statistics about a subject or
            country.
          </p>

          <h3>Formatting</h3>

          <h4>Default</h4>

          <p>
            The stats card consists of a value, label, and short description. An
            accent color overlay is displayed on hover.
          </p>

          <h3>Content</h3>

          <p>
            The stats card requires at a minimum a value and label. A short
            description can also be added optionally. Extra-large and large
            cards can also have a title.
          </p>

          <h3>Behaviors</h3>

          <h4>States</h4>

          <p>
            The stats card has default and hover states. There are 4 size
            variations of the card: Small, Medium, Large, and Extra-large. The
            following size modifiers are available:
          </p>

          <ul>
            <li>Extra Large</li>
            <li>Large</li>
            <li>Medium</li>
            <li>Small</li>
          </ul>

          <h4>MaxWidth Option</h4>
          <p>
            Stats cards support a `MaxWidth` option that affects the card's
            layout behavior:
          </p>
          <ul>
            <li>
              Yes: The card maintains its default maximum width for the selected
              size (e.g., Small, Medium, etc.).
            </li>
            <li>
              No: The card expands to fill the full width of its container,
              removing the default maximum width constraint.
            </li>
          </ul>
          <Canvas>
            <Story name="Stats card">
              {(args, { globals: { locale, accent } }) => {
                const caption = getCaptionForLocale(locale);
                return (
                  <StatsCards
                    title={caption.titlename}
                    percent={caption.percentname}
                    content={caption.text}
                    number={caption.numbername}
                    {...args}
                  ></StatsCards>
                );
              }}
            </Story>
          </Canvas>

          <h3>Usage</h3>

          <ul>
            <li>
              Choose a different variation from the control tab on canvas.
            </li>
            <li>Copy the HTML from the HTML tab in the canvas.</li>
            <li>Include the CSS and JS shared below.</li>
            <li>
              To dynamically adjust Stat text size to its container, initialize
              script with <code>fitText(selector, options)</code> where{" "}
              <code>options</code> is an associative array containing maximum
              sizes for the stat figure for desktop and mobile, i.e.{" "}
              <code>desktop: 110, mobile: 80</code> for standard medium card.
            </li>
          </ul>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>

          <p>Add the base layout style from:</p>

          <ul>
            <li>
              <a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">
                https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css
              </a>
            </li>
            <li>
              <a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/stats-cards.min.css">
                https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/stats-cards.min.css
              </a>
            </li>
          </ul>

          <h4>JS:</h4>

          <p>
            <a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/fitText.min.js">
              https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/fitText.min.js
            </a>
          </p>

          <p>
            Call <code>fitText(selector, options);</code>
          </p>

          <h3>Interactions</h3>

          <p>The hover state is applied to the entire card.</p>

          

          
        </>
      ),
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <StatsCards
      title={caption.titlename}
      percent={caption.percentname}
      content={caption.text}
      number={caption.numbername}
      {...args}
    ></StatsCards>
  );
};

export const StatsCardStory = Template.bind({});
StatsCardStory.storyName = "Stats card";
