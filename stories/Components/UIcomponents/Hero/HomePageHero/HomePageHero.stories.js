import { Meta, Story, Canvas, Anchor } from "@storybook/addon-docs";
import { Homepagehero } from "./HomePageHero";
import { Homepageherosplit } from "./HomePageHeroSplit";
import { Homepageherooption } from "./HomePageHeroOption";
import BackgroundImg from "../../../../assets/images/refugee.jpg";
import BackgroundImg2 from "../../../../assets/images/refugee2.jpg";
import BackgroundVideo from "../../../../assets/video/video_sample.mp4";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        titlename: "Title of the hero story",
        text: "Subtitle or excerpt of the story goes below and it is two lines ",
        btnlabel: "READ MORE",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis quis nibh in molestie. Proin fermentum eleifend erat eget eleifend. Duis in eros condimentum, pretium ligula.",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
      return engText;
    case "ukrainian":
      const ukText = {
        titlename: "ПРООН",
        text: "Програма ПРООН із підвищення стійкості та відновлення ",
        btnlabel: "ЧИТАТИ ДАЛІ",
        subtitle:
          "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
      return ukText;
    case "arabic":
      const arabicText = {
        titlename: "عنوان قصة البطل",
        text: "يوجد أدناه عنوان فرعي أو مقتطف من القصة ويتألف من سطرين",
        btnlabel: "اقرأ أكثر",
        subtitle:
          "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Cras mattis quis nibh في molestie. وهكذا كان المراهقون الدافئون هم احتياجات المراهقين. Duis in eros sauce سعر الملعقة.",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        titlename: "သူရဲကောင်းဇာတ်လမ်းခေါင်းစဉ်",
        text: "ဇာတ်လမ်း၏ ခေါင်းစဉ်ခွဲ သို့မဟုတ် ကောက်နုတ်ချက်သည် အောက်တွင်ရှိပြီး ၎င်းသည် စာကြောင်းနှစ်ကြောင်းဖြစ်သည်။",
        btnlabel: "ပိုပြီးဖတ်ပါ",
        subtitle:
          "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ Cras mattis quis nibh မုဒိန်းကျင့်ခံရခြင်း။ ထို့ကြောင့်နွေးထွေးသောဆယ်ကျော်သက်များသည်ဆယ်ကျော်သက်များ၏လိုအပ်ချက်များဖြစ်သည်။ Duis in eros ငံပြာရည် တစ်ဇွန်း၏စျေးနှုန်း။",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        titlename: "ヒーローストーリーのタイトル",
        text: "ストーリーの字幕または抜粋は以下のとおりで、2行です",
        btnlabel: "続きを読む",
        subtitle:
          "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 Cras mattis quis nibh inmolestie。 したがって、暖かいティーンエイジャーはティーンエイジャーのニーズでした。 エロスソースの飲酒運転、スプーンの価格。",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
      return japaneseText;
    default:
      return {
        titlename: "Title of the hero story",
        text: "Subtitle or excerpt of the story goes below and it is two lines",
        btnlabel: "READ MORE",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis quis nibh in molestie. Proin fermentum eleifend erat eget eleifend. Duis in eros condimentum, pretium ligula.",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
  }
};

export default {
  title: "Components/UI components/Hero/Homepage",
  argTypes: {
    variant: {
      options: ["video", "image"],
      control: { type: "radio" },
    },
  },
  args: {
    variant: "image",
  },
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Homepage Hero - Full-width</h1>

              <p>The Homepage Hero images are large sized images with text in front of the image and present at the top of the homepage.</p>

              <h3>Overview</h3>

              <p>The homepage Hero component is a multi-usage component which creates boxes that are usually teasing some kind of content like- Image, Text, Subtitle and Breadcrumb. Animation and atom tags are used for creating this card.</p>

              <h4>When to use:</h4>

              <p>When the website needs to grab the user's attention to a particular page.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a grid with title, subtitle, image and chip.</p>

              <h3>Content</h3>

              <p>The Full-width homepage consists of an Image and title, subtitle, breadcrumbs and chip is in front of the image. The entire grid is covered with the image.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are two states in the Full-width homepage- Default and Mobile.</p>

              <ol>
                  <li>Default: It consists of a horizontal image</li>
                  <li>Mobile: It consists of a vertical image.</li>
              </ol>

              <Canvas>
                <Story name="Homepage hero - full-width">
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <Homepagehero
                        title={caption.titlename}
                        content={caption.text}
                        button={caption.btnlabel}
                        {...args}
                      ></Homepagehero>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                  <li>Choose the variant either video or Image from the control tab on canvas.</li>
                  <li>Grab the HTML from the HTML tab and also include css and js files listed below.</li>
                  <li>If you want to add left-right animation then add <code>data-viewport="true"</code> attribute to your HTML element and include <code>viewport.min.js</code> file.</li>
                  <li>If you want the image to expand size on scroll then include <code>animation.min.js</code> and initialize <code>expandToSize('.homepage-hero-full')</code>.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from:</p>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepagehero.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepagehero.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

              <h3>Interactions</h3>

              <p>When the page is opened, the contents on the card appear over the image.</p>

              <Anchor storyId="components-ui-components-hero--homepage-hero-tall-image"></Anchor>

              <h1>Homepage Hero - Tall Image</h1>

              <p>The tall homepage Hero component is a multi-usage component which creates boxes that are usually teasing some kind of content like- Image, Text, Subtitle and Breadcrumb. Animation and atom tags are used for creating this card.</p>

              <h3>When to use:</h3>

              <p>When the website needs to grab the user's attention to a particular page.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a grid with title, subtitle, image and chip.</p>

              <h3>Content</h3>

              <p>The Tall homepage image consists of an Image on one side of the grid and title, subtitle, breadcrumbs and chip on the other side of the grid. Half of the grid is covered with an image and the other half with content.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are two states in the Tall Image homepage- Default and Mobile.</p>

              <ol>
                  <li>Default: It consists of an image on either side of the page and content on the other side of the page.</li>
                  <li>Mobile: It consists of title and subtitle in the top, image below it and the chip in the bottom in vertical position.</li>
              </ol>

              <Canvas>
                <Story name="Homepage hero - tall image">
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <Homepageherosplit
                        title={caption.titlename}
                        content={caption.text}
                        button={caption.btnlabel}
                        {...args}
                      ></Homepageherosplit>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                  <li>Choose the variant either video or Image from the control tab on canvas.</li>
                  <li>Grab the HTML from the HTML tab and also include css and js files listed below.</li>
                  <li>If you want to add left-right animation then add <code>data-viewport="true"</code> attribute to your HTML element and include <code>viewport.min.js</code> file.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from <code>dist/css/base-minimal.min.css</code>:</p>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepage-hero.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepage-hero.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

              <h3>Interactions</h3>

              <p>When the page is opened, the contents on the card appear beside the image.</p>

              <Anchor storyId="components-ui-components-hero--homepage-hero-wide-image"></Anchor>

              <h1>Homepage hero - Wide image</h1>

              <p>The Homepage Hero wide images are large sized at the bottom right of the grid which is present at the top of the homepage.</p>

              <h3>Overview</h3>

              <p>The wide homepage Hero component is a multi-usage component which creates boxes that are usually teasing some kind of content like- Image, Text, Subtitle and Breadcrumb. Animation and atom tags are used for creating this card.</p>

              <h4>When to use:</h4>

              <p>When the website needs to grab the user's attention to a particular page.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a grid with title, subtitle, image and chip.</p>

              <h3>Content</h3>

              <p>The Wide homepage image consists of an image situated at the bottom right or middle of the grid. The title is at the top of the grid and subtitles with a chip beside the image.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are two states in the wide Image homepage- Default and Mobile.</p>

              <ol>
                  <li>Default: It consists of an image situated at the bottom right of the grid. The title is at the top and subtitle with chip beside the image.</li>
                  <li>Mobile: It consists of title and subtitle in the top, image below it and the chip in the bottom of the grid.</li>
              </ol>

              <Canvas>
                <Story
                  name="Homepage hero - wide image"
                >
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <Homepageherooption
                        title={caption.titlename}
                        content={caption.text}
                        button={caption.btnlabel}
                        subtitle={caption.subtitle}
                        imgsrc={caption.imgsrc}
                        imgsrc2={caption.imgsrc2}
                        imgalt={caption.imgalt}
                        headingTop={caption.headingTop}
                        {...args}
                      ></Homepageherooption>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                  <li>Choose the variant either video or Image from the control tab on canvas.</li>
                  <li>Grab the HTML from the HTML tab and also include css and js files listed below.</li>
                  <li>If you want to add left-right animation then add <code>data-viewport="true"</code> attribute to your HTML element and include <code>viewport.min.js</code> file.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from <code>dist/css/base-minimal.min.css</code>:</p>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepagehero.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepagehero.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

              <h3>Interactions</h3>

              <p>When the page is opened, the contents of the card appears beside the image.</p>

              <h3>Changelog</h3>

              <p>1.0 — Released component</p>

            </>
        )
    }
}
}

const HomePageHeroTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Homepagehero
      title={caption.titlename}
      content={caption.text}
      button={caption.btnlabel}
      {...args}
    ></Homepagehero>
  );
}

const HomePageHeroSplitTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Homepageherosplit
      title={caption.titlename}
      content={caption.text}
      button={caption.btnlabel}
      {...args}
    ></Homepageherosplit>
  );
}

const HomePageHeroOptionTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Homepageherooption
      title={caption.titlename}
      content={caption.text}
      button={caption.btnlabel}
      subtitle={caption.subtitle}
      imgsrc={caption.imgsrc}
      imgsrc2={caption.imgsrc2}
      imgalt={caption.imgalt}
      headingTop={caption.headingTop}
      {...args}
    ></Homepageherooption>
  );
}

export const HomePageHeroStory = HomePageHeroTemplate.bind({});
HomePageHeroStory.storyName = "Homepage Hero";

export const HomePageHeroSplitStory = HomePageHeroSplitTemplate.bind({});
HomePageHeroSplitStory.storyName = "Homepage Hero Split";

export const HomePageHeroOptionStory = HomePageHeroOptionTemplate.bind({});
HomePageHeroOptionStory.storyName = "Homepage Hero Option";
