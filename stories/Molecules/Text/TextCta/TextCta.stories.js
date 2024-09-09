import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { TextCta } from "./TextCta";
import { getCaptionForLocale } from "./TextCtaUtils";

export default {
  title: "Components/UI components/Text/Text cta",
  component: {TextCta},
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Text CTA</h1>

              <p>The Text CTA block defines a section of information data with some items - title, button/CTA, and description. <code>H2</code>, <code>P</code>, and <code>Button</code> atom tags are used for creating this section.</p>

              <Canvas>
                <Story name="Text cta">
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <TextCta
                        headerText={caption.header}
                        descriptionText={caption.description}
                        label={caption.button}
                      ></TextCta>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage</h3>

              <ul>
                <li>Take HTML from the HTML tab in canvas.</li>
                <li>Include CSS and JS from the 'CSS and JS References' section.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong> along with the following:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/textcta.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/textcta.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <p>Optional for viewport animation:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

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
    <TextCta
      headerText={caption.header}
      descriptionText={caption.description}
      label={caption.button}
    ></TextCta>
  );
}

export const TextCtaStory = Template.bind({});
TextCtaStory.storyName = "Text Cta";