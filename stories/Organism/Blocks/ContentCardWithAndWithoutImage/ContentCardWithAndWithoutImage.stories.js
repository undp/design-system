import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { ContentCardWithAndWithoutImage } from "./ContentCardWithAndWithoutImage";
import { getCaptionForLocale } from "./ContentCardWithAndWithoutImageUtils";

export default {
  title: "Patterns/Card grids/Content cards with and without image",
  argTypes: {
    Emphasize: {
      control: "boolean",
    },
    Hovercolors: {
      options: ["global", "yellow", "red", "green", "blue"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Emphasize: false,
    Hovercolors: "global",
  },
  parameters: {
    docs: {
        page: () => (
            <>
<h1>Content Card With and Without Image</h1>
<p>This is just a collection of the following components:</p>
<ul>
  <li><a href="/docs/components-ui-components-cards-content-card-with-image--with-image">Content card</a></li>
  <li><a href="/docs/components-ui-components-cards-content-card-without-image--without-emphasize">Content card without Emphasize</a></li>
  <li><a href="/story/components-ui-components-cards-content-card-without-image--with-emphasize">Content card with Emphasize</a></li>
</ul>

<Canvas>
  <Story name="Content cards with and without image">
    {(args, { globals: { locale, accent } }) => {
      const caption = getCaptionForLocale(locale);
      return (
        <ContentCardWithAndWithoutImage
          data={caption.contentdata}
          storyBtn={caption.storyBtn}
          dataViewport="false"
          {...args}
        ></ContentCardWithAndWithoutImage>
      );
    }}
  </Story>
</Canvas>

<hr />

<h3>Usage</h3>
<ul>
  <li>Copy the HTML from the canvas</li>
  <li>Include the CSS and JS resource defined in the <em>Content card</em></li>
</ul>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <ContentCardWithAndWithoutImage
      data={caption.contentdata}
      storyBtn={caption.storyBtn}
      dataViewport="false"
      {...args}
    ></ContentCardWithAndWithoutImage>
  );
}

export const ContentCardWithAndWithoutImageStory = Template.bind({});
ContentCardWithAndWithoutImageStory.storyName = "Content cards with and without image";

