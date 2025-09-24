import { Meta, Story, Canvas, Source } from "@storybook/addon-docs/blocks";
import { PageWideCard } from "./PageWideCard";
// import user from '../../../../assets/images/Pagewide.jpg';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        tag: "CONTENT TAG",
        label1: [<a href="#">Socio-economic impact of COVID-19</a>],
        label2: [
          <a href="#">
            Across the globe, the UN is supporting countries in preparing
            assessments of the socio-economic impacts of Covid-19. What are
            these assessments saying and what are the key socio-economic issues
            caused by the pandemic that the UN and its partners are seeing on
            the ground?
          </a>,
        ],
        btnlabel: "READ MORE",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        tag: "Блог",
        label1: [<a href="#">Конкурс грантів для підсилення можливості громад, постраждалих від мінно-вибухової діяльності, шляхом надання комплексної підтримки</a>],
        label2: [
          <a href="#">
            Програма розвитку ООН (ПРООН) запрошує українські неурядові громадські чи благодійні організації, громадські спілки до участі в грантовому конкурсі «Підсилення мо...
          </a>,
        ],
        btnlabel: "Читати далі",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        tag: "علامة المحتوى",
        label1: [<a href="#">التأثير الاجتماعي والاقتصادي لـ COVID-19</a>],
        label2: [
          <a href="#">
            في جميع أنحاء العالم ، تدعم الأمم المتحدة البلدان في إعداد تقييمات
            للآثار الاجتماعية والاقتصادية لـ Covid-19. ماذا تقول هذه التقييمات
            وما هي القضايا الاجتماعية وال
          </a>,
        ],
        btnlabel: "اقرأ أكثر",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        tag: "အကြောင်းအရာ",
        label1: [<a href="#">COVID-19 ၏ လူမှုစီးပွား သက်ရောက်မှု</a>],
        label2: [
          <a href="#">
            ကမ္ဘာတစ်ဝှမ်းတွင် Covid-19 ၏ လူမှုစီးပွားဆိုင်ရာ သက်ရောက်မှုများကို
            အကဲဖြတ်ရန် ပြင်ဆင်နေသည့် နိုင်ငံများအား ကုလသမဂ္ဂက
            ပံ့ပိုးပေးလျက်ရှိသည်။ ဒီအကဲဖြတ်ချက်တွေက ဘာပြောသလဲ၊ ကမ္ဘာ့ကုလသမဂ္ဂနဲ့
            သူ့ရဲ့လုပ်ဖော်ကိုင်ဖက်တွေက မြေပြင်မှာ မြင်နေရတဲ့ ကပ်ရောဂါကြောင့်
            ဖြစ်ရတဲ့ အဓိက လူမှုစီးပွားပြဿနာတွေက ဘာတွေလဲ။
          </a>,
        ],
        btnlabel: "ပိုပြီးဖတ်ပါ",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        tag: "コンテンツタグ",
        label1: [<a href="#">COVID-19の社会経済的影響</a>],
        label2: [
          <a href="#">
            国連は世界中で、Covid-19の社会経済的影響の評価を準備する際に各国を支援しています。これらの評価は何を言っているのか、そして国連とそのパートナーが現場で見ているパンデミックによって引き起こされた主要な社会経済的問題は何ですか
          </a>,
        ],
        btnlabel: "続きを読む",
      };
      return japaneseText;
    default:
      return {
        tag: "CONTENT TAG",
        label1: [<a href="#">Socio-economic impact of COVID-19</a>],
        label2: [
          <a href="#">
            Across the globe, the UN is supporting countries in preparing
            assessments of the socio-economic impacts of Covid-19. What are
            these assessments saying and what are the key socio-economic issues
            caused by the pandemic that the UN and its partners are seeing on
            the ground?
          </a>,
        ],
        btnlabel: "READ MORE",
      };
  }
};

export default {
  title: "Components/UI components/Pagewide featured content card",
  component: {PageWideCard},
  argTypes: {
    Hovercolors: {
      name: "Hover accent color",
      options: ["global", "yellow", "red", "green", "blue"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Hovercolors: "global",
  },
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Pagewide Card</h1>

              <p>The Card pagewide components are cards with information along with an image and CTA link.</p>

              <h3>Overview</h3>

              <p>The Card pagewide component defines a card of information with some items: Tag, Title, Image, Paragraph, and CTA Link.</p>

              <h4>When to use:</h4>

              <p>When a card with data, CTA link, and image is to be displayed.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a grid with title tag, paragraph, CTA link, and image.</p>

              <h3>Content</h3>

              <p>The card pagewide requires an image, some information, a title, a content tag, and a CTA that opens with more information.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are two states for card pagewide components: Default and Hover.</p>

              <ul>
                  <li><strong>Default:</strong> It shows the title, paragraph, CTA link, and image for the card with pagewide.</li>
                  <li><strong>Hover:</strong> In the hover state, when the mouse hovers over the card, an image is displayed. The yellow color is displayed with the image.</li>
              </ul>

              <Canvas>
                <Story
                  name="Pagewide featured content card"
                >
                  {(args, { globals: { locale, accent } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <PageWideCard
                        label={caption.tag}
                        title={caption.label1}
                        paragraph={caption.label2}
                        button={caption.btnlabel}
                        {...args}
                      ></PageWideCard>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                  <li>Copy the HTML from the HTML tab into your HTML file.</li>
                  <li>If you want to add visibility animation, then add <code>data-viewport=”true”</code> attribute to your HTML element and include the <code>viewport.min.js</code> file.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from:</p>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/page-wide-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/page-wide-card.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/buttons.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js</a></li>
              </ul>

              <h3>Interactions</h3>

              <ul>
                  <li>Hover state applies to the image only.</li>
                  <li>By clicking on the CTA Link, the associated page is opened.</li>
              </ul>

              

              

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <PageWideCard
      label={caption.tag}
      title={caption.label1}
      paragraph={caption.label2}
      button={caption.btnlabel}
      {...args}
    ></PageWideCard>
  );
}

export const PageWideCardStory = Template.bind({});
PageWideCardStory.storyName = "Pagewide featured content card";