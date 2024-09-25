import { Meta, Story, Canvas, Source } from "@storybook/addon-docs";
import { ImageRevealCards } from "./ImageRevealCards";
import { getCaptionForLocale } from "./ImageRevealCardsUtils";


export default { 
  title: "Patterns/Card grids/Image reveal cards",
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Image Reveal Cards</h1>
              <p>This is just a collection of the <a href="/docs/components-ui-components-cards-image-reveal-card--image-reveal-card">Featured card</a></p>

              <Canvas>
                <Story name="Image reveal cards">
                  {(args, { globals: { locale, accent } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <ImageRevealCards
                        data={caption.data}
                        label={caption.label}
                        {...args}
                      ></ImageRevealCards>
                    );
                  }}
                </Story>
              </Canvas>

              <hr />

              <h3>Usage</h3>
              <ul>
                <li>Copy the HTML from the canvas</li>
                <li>Include the CSS and JS resource defined in the <em>Image reveal card</em></li>
                <li>Include the <code>dist/css/components/image-reveal-cards.min.css</code> file</li>
              </ul>
          </>
      )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <ImageRevealCards
      data={caption.data}
      label={caption.label}
      {...args}
    ></ImageRevealCards>
  );
}

export const ImageRevealCardsStory = Template.bind({});
ImageRevealCardsStory.storyName = "Image Reveal Cards";

