import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { ContentCard } from "./ContentCard";

import { getCaptionForLocale } from "./ContentCardUtils";


export default { 
  title: "Patterns/Card grids/Content cards",
  parameters: {
    docs: {
        page: () => (
            <>
<h1>Content Cards</h1>
<p>This is just a collection of the <a href="/docs/components-ui-components-cards-content-card-with-image--with-image">Content card</a></p>

<Canvas>
  <Story name="Content cards">
    {(args, { globals: { locale, accent } }) => {
      const caption = getCaptionForLocale(locale);
      return (
        <ContentCard
          data={caption.groupcontentdata}
          buttontype={caption.buttonname}
          {...args}
        ></ContentCard>
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
    <ContentCard
      data={caption.groupcontentdata}
      buttontype={caption.buttonname}
      {...args}
    ></ContentCard>
  );
}

export const ContentCardStory = Template.bind({});
ContentCardStory.storyName = "Content cards";

