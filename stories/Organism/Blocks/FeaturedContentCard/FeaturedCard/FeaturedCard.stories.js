import { Meta, Story, Canvas, Source } from "@storybook/addon-docs";
import { FeaturedCard } from "./FeaturedCard";
import { getCaptionForLocale } from "./FeaturedContentCardUtils";

export default {
  title: "Patterns/Card grids/Featured cards",
  component: FeaturedCard,
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Featured Cards</h1>
              <p>This is just a collection of the <a href="/story/components-ui-components-cards-featured-card--featured-card">Featured card</a></p>

              <Canvas>
                <Story name="Featured cards">
                  {(args, { globals: { locale, accent } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <FeaturedCard
                        data={caption.featureddata}
                        headertext={caption.headertext}
                        {...args}
                      ></FeaturedCard>
                    );
                  }}
                </Story>
              </Canvas>

              <hr />

              <h3>Usage</h3>
              <ul>
                <li>Copy the HTML from the canvas</li>
                <li>Include the CSS and JS resource defined in the <em>Featured card</em></li>
                <li>Include the <code>dist/css/components/featured-card.min.css</code> file</li>
              </ul>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <FeaturedCard
      data={caption.featureddata}
      headertext={caption.headertext}
      {...args}
    ></FeaturedCard>
  );
}

export const FeaturedCardStory = Template.bind({});
FeaturedCardStory.storyName = "Featured cards";

