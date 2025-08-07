import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { BlockquoteComponent } from "./BlockquoteComponent";
import { getCaptionForLocale } from "./BlockquoteComponentUtils";

export default {
  title: "Components/UI components/Text/Callout",
  component: {BlockquoteComponent},
  argTypes: {
    Colors: {
      name: "Accent color",
      options: ["default", "global", "yellow", "red", "green", "blue", "gray"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Colors: "default",
  },
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Callout</h1>

              <p>The Callout component indicates that the enclosed text is an extended quotation or information. It is rendered visually by a surrounding box. <code>Blockquote</code> and <code>Cite</code> atoms tags are used for creating this section.</p>

              <Canvas>
                <Story name="Callout">
                  {(args, { globals: { locale, accent } }) => {
                    const caption = getCaptionForLocale(locale);
                    args.accent = accent;
                    return (
                      <BlockquoteComponent
                        blockquoteText={caption.blockquote}
                        citeText={caption.cite}
                        Colors={accent}
                        {...args}
                      ></BlockquoteComponent>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage</h3>

              <ul>
                  <li>Take HTML from the HTML tab in canvas whichever background color you like.</li>
                  <li>Include CSS and JS from the 'CSS and JS References' section.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong> along with the following:</p>
              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/blockquotecomp.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/blockquotecomp.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <p>NA</p>

              

              

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale, accent } }) => {
  const caption = getCaptionForLocale(locale);
  args.accent = accent;
  return (
    <BlockquoteComponent
      blockquoteText={caption.blockquote}
      citeText={caption.cite}
      Colors={accent}
      {...args}
    ></BlockquoteComponent>
  );
}

export const BlockquoteStory = Template.bind({});
BlockquoteStory.storyName = "Callout";
