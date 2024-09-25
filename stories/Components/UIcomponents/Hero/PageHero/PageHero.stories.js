import { ArgsTable, Meta, Story, Canvas, Anchor } from "@storybook/addon-docs";
import { PageHero } from "./PageHero";
import { PageHeroOption } from "./PageHeroOption";
import BackgroundImg from "../../../../assets/images/herooption.jpg";
import BackgroundImg2 from "../../../../assets/images/herooption.jpg";
import BackgroundVideo from "../../../../assets/video/video_sample.mp4";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        herodata: [
          { text: "Home" },
          { text: "Second-level" },
          { text: "Third-level" },
          { text: "Page Title" },
        ],
        title: "The sdgs in action",
        subtitle:
          "Subtitle or excerpt of the story goes below and it is two lines",
        content: "Our Focus",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        cta: "Read more",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        herodata: [
          { text: "Home" },
          { text: "Другий рівень" },
          { text: "Третій рівень" },
          { text: "Назва сторінки" },
        ],
        title: "ЦСР У ДІЇ",
        subtitle:
          "Програма ПРООН із підвищення стійкості та відновлення",
        content: "Наші теми",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        cta: "ЧИТАТИ ДАЛІ",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        herodata: [
          { text: "الصفحة الرئيسية" },
          { text: "المستوى الثاني" },
          { text: "المستوى الثالث" },
          { text: "عنوان الصفحة" },
        ],
        title: "أهداف التنمية المستدامة في العمل",
        content: "تركيزنا",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        cta: "اقرأ أكثر",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        herodata: [
          { text: "အိမ်ပြန်" },
          { text: "ဒုတိယအဆင့်" },
          { text: "တတိယအဆင့်" },
          { text: "စာမျက်နှာခေါင်းစဉ်" },
        ],
        title: "sdgs သည်လုပ်ဆောင်သည်",
        content: "ကျွန်ုပ်တို့၏အာရုံ",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        cta: "ပိုပြီးဖတ်ပါ",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        herodata: [
          { text: "家" },
          { text: "セカンドレベル" },
          { text: "第3レベル" },
          { text: "ページタイトル" },
        ],
        title: "動作中のsdgs",
        content: "私たちの焦点",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        cta: "続きを読む",
      };
      return japaneseText;
    default:
      const dummy = {
        herodata: [
          { text: "Home" },
          { text: "Second-level" },
          { text: "Third-level" },
          { text: "Page Title" },
        ],
        title: "The sdgs in action",
        subtitle:
          "Subtitle or excerpt of the story goes below and it is two lines",
        content: "Our Focus",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        cta: "Read more",
      };
      return dummy;
  }
};

export default {
  title: "Components/UI components/Hero/Page/PageHero",
  argTypes: {
    Variant: {
      name: "Variant",
      options: ["Video", "Image", "No background"],
      control: { type: "inline-radio" },
    },
    CTA: {
      name: "Enable CTA",
      options: ["On", "Off"],
      control: { type: "inline-radio" },
    },
    Overline: {
      name: "Enable Overline",
      options: ["On", "Off"],
      control: { type: "inline-radio" },
    },
    Subtitle: {
      name: "Enable Subtitle",
      options: ["On", "Off"],
      control: { type: "inline-radio" },
    },
      MobileImagePosition: {
      name: "Mobile Image Position",
      options: ["left", "center", "right"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Variant: "Image",
    CTA: "Off",
    Overline: "Off",
    Subtitle: "Off",
    MobileImagePosition: "center",
  },
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Page Hero - Full-width</h1>

              <p>The Full-width homepage Hero images are large-sized with text in front of the image and present at the top of the page.</p>

              <h3>Overview</h3>

              <p>The Page Hero component is a multi-usage component that creates boxes that are usually teasing some kind of content like Image, Text, Subtitle, and Breadcrumb. Animation and atom tags are used for creating this card.</p>

              <h4>When to use:</h4>

              <p>When the website needs to grab the user's attention to a particular page.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a grid with title, subtitle, image, and breadcrumbs.</p>

              <h3>Content</h3>

              <p>The Full-width Page Hero image consists of an Image and text, subtitle, and breadcrumbs in front of the image. The image covers the entire grid.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are two states in the Full-width Page: Default and Mobile.</p>

              <ol>
                  <li><strong>Default:</strong> It consists of an image and breadcrumbs in front of the image at the top and title and subtitle below it.</li>
                  <li><strong>Mobile:</strong> It consists of a vertical image with breadcrumbs, title, and subtitles in front of the image.</li>
              </ol>

              <Canvas>
                <Story
                  name="Page hero full-width"
                >
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    const cta = { label: caption.cta, for_primary: "Arrow" };
                    return (
                      <PageHero
                        data={caption.herodata}
                        title={caption.title}
                        subtitle={caption?.subtitle}
                        content={caption?.content}
                        variant={args.Variant}
                        active={"white"}
                        imgsrc={caption.imgsrc}
                        imgalt={caption.imgalt}
                        cta={cta}
                        mobileImagePosition={args.MobileImagePosition}
                        {...args}
                      ></PageHero>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                  <li>Choose the variant either video or Image from the control tab on canvas.</li>
                  <li>Grab the HTML from the HTML tab and also include the CSS and JS files listed below.</li>
                  <li>If you want to add left-right animation then add <code>data-viewport="true"</code> attribute to your HTML element and include <code>viewport.min.js</code> file.</li>
                  <li>If you want the image to expand size on scroll, then include <code>animation.min.js</code> and initialize <code>expandToSize('.pagehero-fulll')</code>.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from:</p>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/page-hero.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/page-hero.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

              <h3>Interactions</h3>

              <p>When the page is opened, the contents of the card appear beside the image, and the image zooms in.</p>

              <h3>Changelog</h3>

              <p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  const cta = { label: caption.cta, for_primary: "Arrow" };
  return (
    <PageHero
      data={caption.herodata}
      title={caption.title}
      subtitle={caption?.subtitle}
      content={caption?.content}
      variant={args.Variant}
      active={"white"}
      imgsrc={caption.imgsrc}
      imgalt={caption.imgalt}
      cta={cta}
      mobileImagePosition={args.MobileImagePosition}
      {...args}
    ></PageHero>
  );
}

export const PageHeroStory = Template.bind({});
PageHeroStory.storyName = "Page Hero - full width";
