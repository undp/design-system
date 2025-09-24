import { Meta, Story, Canvas, Source, Anchor } from "@storybook/addon-docs/blocks";
import { DownloadCard } from "./DownloadCard";
import img from "../../../assets/images/card-thumbnail.jpg";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        title: "Document Title",
        format: "PDF (800kb)",
        download: "Download",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        title: "Назва документа",
        format: "PDF (800kб)",
        download: "Завантажити",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        title: "عنوان الوثيقة",
        format: "PDF (800 كيلوبايت)",
        download: "تحميل",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        title: "စာတမ်းခေါင်းစဉ်",
        format: "PDF (800kb)",
        download: "ဒေါင်းလုပ်",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        title: "ドキュメントのタイトル",
        format: "PDF (800kb)",
        download: "ダウンロード",
      };
      return japaneseText;
    default:
      return {
        title: "Document Title",
        format: "PDF (800kb)",
        download: "Download",
      };
  }
};

export default {
  title: "Components/UI components/Cards/Download card",
  argTypes: {
    variant: {
      name: "Variant",
      options: ["External Link", "Download"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    variant: "Download",
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Download Card</h1>

        <p>Download card has the card with information along with various items like title, image, file format with file size and download file link.</p>

        <h3>Overview</h3>

        <p>Download card component will have information of the card with various attributes like title, image related to the card, format of the file implies the file is in the form of pdf or docx, any other way. There will even be a download link that allows the users to download the file.</p>

        <h4>When to use:</h4>

        <p>When the user wants to download the file to know the complete details about the card.</p>

        <h3>Formatting</h3>

        <h4>Default</h4>

        <p>It consists of an image with title, file format with file size, and download link.</p>

        <h3>Content</h3>

        <p>The download card consists of an Image below its title, file format with file size, and download link. The image covers the grid. There are 3 types of download cards:</p>

        <ul>
          <li><strong>Publication module:</strong> In this the user can see the publication image, title, file format, file size, and download link.</li>
          <li><strong>Card module:</strong> In this the user can see image, title, file size, and format along with a downloadable link.</li>
          <li><strong>Download Module:</strong> In this the user will be given title, file format with size, and download link where the user can directly download the file.</li>
        </ul>

        <h3>Behaviors</h3>

        <h4>States</h4>

        <p>There are 2 states in download cards: default and hover state</p>

        <p><strong>Default:</strong> In this state the user can see the image, title, file type and size, and the downloadable link which allows downloading.</p>

        <p><strong>Publication default state view:</strong></p>

        <p><strong>Hover:</strong> In this state, when the mouse hovers over the download card, the image is displayed along with a yellow color overlay on the image.</p>

        <h4>Publication module</h4>

        <Canvas of={PublicationModule} />

        <h4>Card module</h4>

        <Canvas of={CardModule} />

        <anchor storyId="components-ui-components-cards-download-card--download-module"></anchor>

        <h4>Download module</h4>

        <Canvas of={DownloadModule} />

        <h3>Usage:</h3>

        <ul>
          <li>Copy HTML from the HTML tab of canvas and include the below-listed CSS file.</li>
        </ul>

        <h3>CSS and JS References</h3>

        <h4>CSS:</h4>

        <p>Add the base layout style from:</p>

        <ul>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/download-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/download-card.min.css</a></li>
        </ul>

        <h4>JS:</h4>

        <p>NA</p>

        <h3>Interactions</h3>

        <ul>
          <li>Hover state applies to the image only.</li>
          <li>By clicking on the download Link, the associated file will be downloaded.</li>
        </ul>

        

        

        </>
      )
    }
  }
}

const PublicationTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <DownloadCard
      title={caption.title}
      format={caption.format}
      download={caption.download}
      image
      {...args}
    ></DownloadCard>
  );
}

const DownloadModuleTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <DownloadCard
    title={caption.title}
    format={caption.format}
    download={caption.download}
    alt={"feature card"}
    {...args}
  ></DownloadCard>
  );
}

const CardModuleTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <DownloadCard
    title={caption.title}
    format={caption.format}
    download={caption.download}
    image2={img}
    {...args}
  ></DownloadCard>
  );
}

export const PublicationModule = PublicationTemplate.bind({});
PublicationModule.storyName = "Publication module";

export const DownloadModule = DownloadModuleTemplate.bind({});
DownloadModule.storyName = "Download module";

export const CardModule = CardModuleTemplate.bind({});
CardModule.storyName = "Card module";



