import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Statscardslider } from "./StatsCardSlider";

const statsArray = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            percentname: "Million",
            numbername: "821",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            percentname: "Countries",
            numbername: "63",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            percentname: "Percent",
            numbername: "22",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            percentname: "Programs",
            numbername: "13",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            percentname: "In three",
            numbername: "ONE",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            percentname: "Offices",
            numbername: "9",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      };
      return engText.data;
    case "ukrainian":
      const ukText = {
        data: [
          {
            percentname: "населення",
            numbername: "44 млн",
            text: "(Держстат, 2020)",
          },
          {
            percentname: "Індекс",
            numbername: "49",
            text: "гендерної нерівності: 52-га з 162 країн і територій (HDR 2021)",
          },
          {
            percentname: "місць",
            numbername: "21%",
            text: "у парламенті займають жінки (Парламент, 2019)",
          },
          {
            percentname: "населення",
            numbername: "44 млн",
            text: "(Держстат, 2020)",
          },
          {
            percentname: "Індекс",
            numbername: "49",
            text: "гендерної нерівності: 52-га з 162 країн і територій (HDR 2021)",
          },
          {
            percentname: "місць",
            numbername: "21%",
            text: "у парламенті займають жінки (Парламент, 2019)",
          },
        ],
      };
      return ukText.data;
    case "arabic":
      const arabicText = {
        data: [
          {
            percentname: "نسبه",
            numbername: "821",
            text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
          },
          {
            percentname: "بلدان",
            numbername: "63",
            text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
          },
          {
            percentname: "نسبه مئويه",
            numbername: "22",
            text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
          },
          {
            percentname: "البرامج",
            numbername: "13",
            text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
          },
          {
            percentname: "سنوات",
            numbername: "ONE",
            text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
          },
          {
            percentname: "مكاتب",
            numbername: "9",
            text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
          },
        ],
      };
      return arabicText.data;
    case "burmese":
      const burmeseText = {
        data: [
          {
            percentname: "ရာခိုင်နှုန်း",
            numbername: "821",
            text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
          },
          {
            percentname: "နိုင်ငံတွေ",
            numbername: "63",
            text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
          },
          {
            percentname: "ရာခိုင်နှုန်း",
            numbername: "22",
            text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
          },
          {
            percentname: "အစီအစဉ်မျာ",
            numbername: "13",
            text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
          },
          {
            percentname: "နှစ်တွေ",
            numbername: "တစ်ခု",
            text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
          },
          {
            percentname: "ရုံးများ",
            numbername: "9",
            text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
          },
        ],
      };
      return burmeseText.data;
    case "japanese":
      const japaneseText = {
        data: [
          {
            percentname: "パーセント",
            numbername: "821",
            text: "痛み自体は愛、主な顧客です",
          },
          {
            percentname: "国",
            numbername: "63",
            text: "痛み自体は愛、主な顧客です",
          },
          {
            percentname: "パーセント",
            numbername: "22",
            text: "痛み自体は愛、主な顧客です",
          },
          {
            percentname: "プログラム",
            numbername: "13",
            text: "痛み自体は愛、主な顧客です",
          },
          {
            percentname: "年",
            numbername: "1",
            text: "痛み自体は愛、主な顧客です",
          },
          {
            percentname: "オフィス",
            numbername: "9",
            text: "痛み自体は愛、主な顧客です",
          },
        ],
      };
      return japaneseText.data;
    default:
      const dummy = {
        data: [
          {
            percentname: "Million",
            numbername: "821",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            percentname: "Percent",
            numbername: "63",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            percentname: "Percent",
            numbername: "22",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            percentname: "Percent",
            numbername: "13",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            percentname: "In three",
            numbername: "One",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            percentname: "Offices",
            numbername: "9",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      };
      return dummy.data;
  }
};

export default {
 title: "Components/UI components/Stats card slider",
 component: Statscardslider,
 parameters: {
  docs: {
      page: () => (
          <>
            <h1>Stats Card Slider</h1>

            <p>This is a collection of <a href="/docs/components-ui-components-cards-stats-card--stats-card">Stats cards</a> organized in a slider.</p>

            <Canvas>
              <Story name="Stats card slider">
                {(args, { globals: { locale, accent } }) => {
                  const caption = statsArray(locale);
                  return <Statscardslider data={caption} {...args}></Statscardslider>;
                }}
              </Story>
            </Canvas>

            <hr />

            <h3>Usage</h3>

            <ul>
                <li>Copy the HTML from the HTML tab of the canvas and include the CSS and JS files listed below. Remove all inline styling added by Swiper.</li>
                <li>Include the CSS and JS resources defined in the <a href="/docs/components-ui-components-cards-stats-card--stats-card#css-and-js-references">Stats card</a> documentation. Pay attention to any required JS initialization.</li>
                <li>Include the CSS and JS files listed below.</li>
                <li>Initialize the swiper by calling the following function: <code>swiper('.stats-slider');</code></li>
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration and options.</li>
            </ul>

            <h4>CSS and JS References</h4>

            <h5>CSS:</h5>
            <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a> (only once)</li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-card-slider.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-card-slider.min.css</a></li>
            </ul>

            <h5>JS:</h5>
            <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js">https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js</a></li>
            </ul>

          </>
      )
  }
}
}

const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return <Statscardslider data={caption} {...args}></Statscardslider>;
}

export const StatsCardSliderStory = Template.bind({});
StatsCardSliderStory.storyName = "Stats card slider";
