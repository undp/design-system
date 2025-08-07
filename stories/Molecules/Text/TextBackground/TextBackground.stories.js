import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { TextBackground } from "./TextBackground";
import { getCaptionForLocale } from "./TextBackgroundUtils";

export default { 
  title: "Components/UI components/Text/Text background",
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Text Background</h1>

              <p>The Text Background block defines a section of information data with some items - title and description. <code>H2</code> and <code>H4</code> atom tags are used for creating this section.</p>

              <Canvas>
                <Story name="Text background">
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <TextBackground
                        headerText={caption.header}
                        descriptionText={caption.description}
                      ></TextBackground>
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
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/textbackground.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/textbackground.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <p>Optional for viewport animation:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js</a></li>
              </ul>

              

              

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <TextBackground
      headerText={caption.header}
      descriptionText={caption.description}
    ></TextBackground>
  );
}

export const TextBackgroundStory = Template.bind({});
TextBackgroundStory.storyName = "Text background";
