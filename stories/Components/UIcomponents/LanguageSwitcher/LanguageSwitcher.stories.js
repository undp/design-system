import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Languageswitcher } from "./LanguageSwitcher";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        languagedata: [
          {
            descriptionText: "Français",
            lang: "fr",
          },
          {
            descriptionText: "Español",
            lang: "es",
          },
        ],
        headerText: "English",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        languagedata: [
          {
            descriptionText: "Français",
            lang: "fr",
          },
          {
            descriptionText: "Español",
            lang: "es",
          },
        ],
        headerText: "Українська",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        languagedata: [
          {
            descriptionText: "Français",
            lang: "fr",
          },
          {
            descriptionText: "Español",
            lang: "es",
          },
        ],
        headerText: "إنجليزي",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        languagedata: [
          {
            descriptionText: "Français",
            lang: "fr",
          },
          {
            descriptionText: "Español",
            lang: "es",
          },
        ],
        headerText: "အင်္ဂလိပ်စာ",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        languagedata: [
          {
            descriptionText: "Français",
            lang: "fr",
          },
          {
            descriptionText: "Español",
            lang: "es",
          },
        ],
        headerText: "英語",
      };
      return japaneseText;
    default:
      const dummy = {
        languagedata: [
          {
            descriptionText: "Français",
            lang: "fr",
          },
          {
            descriptionText: "Español",
            lang: "es",
          },
        ],
        headerText: "English",
      };
      return dummy;
  }
};

export default {
  title: "Components/UI components/Language switcher",
  argTypes: {
    variant: {
      options: ["blue", "white"],
      control: { type: "radio" },
    },
  },
  args: {
    variant: "blue",
  },
  parameters: {
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#D4D6D8" }],
    },
  }
}


const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return <Languageswitcher data={caption} />;
};

export const LanguageSwitcherStory = Template.bind({});
LanguageSwitcherStory.args = { variant: "blue" };
LanguageSwitcherStory.parameters = {
  docs: {
    description: {
      component: `

# Language Switcher

The Language Switcher changes the language of the page.

### Overview

The Language Switcher component allows visitors to select the language in which they want to read your content. It is constructed with a Language icon, current language title and dropdown with other language options.

#### When to use:

To change the language of the page.

### Formatting

#### Default

It consists of a drop-down menu of languages to select.Language labels provided in the respective languages, not the language of the page

### Content

Language switcher has two colors: Default and White.

### Behaviors

#### States

There are two states: Default and Open.

1. Default: It shows the option to select the language. It has a downward arrow to open the menu.
2. Open: It shows that the language switcher is opened and the user can select the desired language. It has an upward arrow with an opened menu.

<Canvas>
  <Story
    name="Language switcher"
    parameters={{
      backgrounds: { default: "gray" },
      docs: {
        story: {
          inline: false,
          iframeHeight: "100%",
        },
      },
    }}
  >
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      return (
        <Languageswitcher
          data={caption.languagedata}
          headerText={caption.headerText}
          {...args}
        ></Languageswitcher>
      );
    }}
  </Story>
</Canvas>

### Usage:

- Choose the color variant either Blue or White from the control tab of canvas.
- Copy HTML from the HTML tab and also include css and js files listed below.
- Initialize the Language Switcher by calling langSwitch() function.

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css

#### JS:

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js

### Interactions

- By clicking on the drop-down menu, language can be selected.
- After selecting the language, the language of the entire page is changed.

### Changelog

1.0 — Released component
`,
    },
  },
};