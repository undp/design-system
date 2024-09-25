import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { AuthorSummary } from "./AuthorSummary";
import user from "../../../assets/images/user.svg";
import { getCaptionForLocale } from "./AuthorSummaryUtils";

export default {
  title: "Components/UI components/Author summary",
  component: {AuthorSummary},
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Author Summary</h1>

            <h3>Overview</h3>

            <p>The Author summary is created for showing the author's name, designation, photo, and bio in a particular section. It is a multi-usage component that is usually teasing some kind of content.</p>

            <Canvas>
              <Story name="Author summary">
                {(args) => (
                  <AuthorSummary
                  image={user}
                  para={caption.paragraph}
                  text={caption.text1}
                  Authorlabel={caption.text2}
                  para1={caption.text3}
                  {...args}
                  />
                )}
              </Story>
            </Canvas>

            <h3>Usage</h3>

            <ul>
              <li>Copy the HTML from the Canvas page and add CSS and JS from the 'CSS and JS References' section below.</li>
            </ul>

            <h3>CSS and JS References</h3>

            <h4>CSS:</h4>

            <p>Add the base layout style from:</p>

            <ul>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-summary.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-summary.min.css</a></li>
            </ul>

            <h4>JS:</h4>

            <p>NA</p>

            <h3>Changelog</h3>

            <p>1.0 — Released component</p>

        </>
      ),
    },
  },
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <AuthorSummary
    image={user}
    para={caption.paragraph}
    text={caption.text1}
    Authorlabel={caption.text2}
    para1={caption.text3}
    {...args}
    />
  );
}

export const AuthorSummaryStory = Template.bind({});
AuthorSummaryStory.storyName = "Author summary";