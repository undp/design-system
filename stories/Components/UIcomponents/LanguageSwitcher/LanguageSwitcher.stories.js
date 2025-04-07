import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Languageswitcher } from "./LanguageSwitcher";
import { getCaptionForLocale } from "./LanguageSwitcherUtils";

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
    docs: {
        page: () => (
            <>
              <h1>Language Switcher</h1>

              <p>The Language Switcher changes the language of the page.</p>

              <h3>Overview</h3>

              <p>The Language Switcher component allows visitors to select the language in which they want to read your content. It is constructed with a Language icon, current language title, and a dropdown with other language options.</p>

              <h4>When to use:</h4>

              <p>To change the language of the page.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a drop-down menu of languages to select. Language labels are provided in the respective languages, not the language of the page.</p>

              <h3>Content</h3>

              <p>Language switcher has two colors: Default and White.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are two states: Default and Open.</p>

              <ol>
                  <li><strong>Default:</strong> It shows the option to select the language. It has a downward arrow to open the menu.</li>
                  <li><strong>Open:</strong> It shows that the language switcher is opened and the user can select the desired language. It has an upward arrow with an opened menu.</li>
              </ol>

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

              <h3>Usage:</h3>

              <ul>
                  <li>Choose the color variant either Blue or White from the control tab of the canvas.</li>
                  <li>Copy HTML from the HTML tab and include the CSS and JS files listed below.</li>
                  <li>Choose one of the following initialization methods:</li>
                  {/* <li>Initialize the Language Switcher by calling <code>langSwitch()</code> function.</li> */}
              </ul>
              <h4>Method 1: Automatic Initialization (Recommended)</h4>
              <ul>
                <li>Include the component initializer script:
                  <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js"&gt;&lt;/script&gt;</code>
                </li>
                <li>Add the required data attribute to your language switcher element:
                  <code>data-undpds-component="language-switcher"</code>
                </li>
                <li>The language switcher will initialize automatically when the page loads - no JavaScript calls required!</li>
              </ul>

              <h4>Method 2: Manual Initialization (Traditional)</h4>
              <ul>
                <li>Include <code>lang-switcher.min.js</code> in your HTML.</li>
                <li>Call the initialization function directly in your JavaScript:
                  <code>langSwitch();</code>
                </li>
              </ul>
              
              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from</p>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js</a></li>
              </ul>

              <h3>Interactions</h3>

              <p>By clicking on the drop-down menu, a language can be selected. After selecting the language, the language of the entire page is changed.</p>

              <h3>Changelog</h3>

              <p>1.0 — Released component</p>
            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Languageswitcher
      data={caption.languagedata}
      headerText={caption.headerText}
      {...args}
    ></Languageswitcher>
  );
}

export const LanguageSwitcherStory = Template.bind({});
LanguageSwitcherStory.parameters = {
  backgrounds: { default: 'gray' },
  docs: {
    story: {
      inline: false,
      iframeHeight: '100%',
    },
  },
}
LanguageSwitcherStory.storyName = "Language switcher";
