import { Meta, Story, Canvas, Source } from "@storybook/addon-docs/blocks";
import { PublicationCard } from "./PublicationCard";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      return { download: "Download", readmore: "READ MORE" };
    case "ukrainian":
      return { download: "Завантажити", readmore: "ЧИТАТИ ДАЛІ" };
    case "arabic":
      const arabicText = { download: "تحميل", readmore: "اقرأ أكثر" };
      return arabicText;
    case "burmese":
      const burmeseText = { download: "ဒေါင်းလုပ်", readmore: "ပိုပြီးဖတ်ပါ" };
      return burmeseText;
    case "japanese":
      const japaneseText = { download: "ダウンロード", readmore: "続きを読む" };
      return japaneseText;
    default:
      return { download: "Download", readmore: "READ MORE" };
  }
};

export default {
  title: "Components/UI components/Cards/Publication card",
  argTypes: {
    variant: {
      name: "Variant",
      options: ["Readmore", "Download", "Both"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    variant: "Both",
  },
  parameters: {
    docs: {
        page: () => (
            <>
            <h1>Publication Card</h1>

            <p>The Publication card defines a card of information data with some items - Title, Image, Format, and Download files.</p>

            <h3>Overview</h3>

            <p>Publication cards show the publication category images, title, format, and download option related to the content in the design with short information.</p>

            <Canvas>
              <Story name="Publication card">
                {(args, { globals: { locale, accent } }) => {
                  const caption = getCaptionForLocale(locale);
                  return (
                    <PublicationCard
                      download={caption.download}
                      readmore={caption.readmore}
                      image
                      {...args}
                    ></PublicationCard>
                  );
                }}
              </Story>
            </Canvas>

            <h3>Usage</h3>

            <p>Copy HTML from the HTML tab of canvas and include the below listed CSS file.</p>

            <h3>CSS and JS References</h3>

            <h4>CSS:</h4>

            <p>Add the base layout style from:</p>

            <ul>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/publication-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/publication-card.min.css</a></li>
            </ul>

            <h4>JS:</h4>

            <p>NA</p>

            <h3>Interactions</h3>

            <ul>
              <li>Hover state applies to the entire card.</li>
              <li>By clicking on the download link, the associated file will be downloaded.</li>
              <li>By clicking on the read more link, the associated URL will be opened.</li>
            </ul>

            

            
            </>
        )
    }
}
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <PublicationCard
      download={caption.download}
      readmore={caption.readmore}
      image
      {...args}
    ></PublicationCard>
  );
}

export const PublicationCardStory = Template.bind({});
PublicationCardStory.storyName = "Publication card";

