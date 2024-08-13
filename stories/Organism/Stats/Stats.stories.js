import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Stats } from "./Stats";
import BackgroundImg from "../../assets/images/card2.jpg";

const statsArray = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            number: "35",
            percent: "Percent",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            number: "19",
            percent: "People",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            number: "70",
            percent: "Countries",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            number: "50",
            percent: "Years",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      };
      return engText.data;
    case "ukrainian":
      const ukText = {
        data: [
          {
            number: " 44 млн ",
            percent: " населення ",
            content: "(Держстат, 2020)",
          },
          {
            number: " 49 ",
            percent: " Індекс ",
            content: "гендерної нерівності: 52-га з 162 країн і територій (HDR 2021)",
          },
          {
            number: " 21% ",
            percent: " місць ",
            content: "у парламенті займають жінки (Парламент, 2019)",
          },
          {
            number: " 0.773 ",
            percent: " Індекс ",
            content: "людського розвитку, 77 позиція зі 191 (HDR 2021)",
          },
        ],
      };
      return ukText.data;
    case "arabic":
      const arabicText = {
        data: [
          {
            number: "35",
            percent: "نسبه مئويه",
            content: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
          },
          {
            number: "19",
            percent: "الناس",
            content: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
          },
          {
            number: "70",
            percent: "بلدان",
            content: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
          },
          {
            number: "50",
            percent: "سنوات",
            content: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
          },
        ],
      };
      return arabicText.data;
    case "burmese":
      const burmeseText = {
        data: [
          {
            number: "35",
            percent: "ရာခိုင်နှုန်း",
            content: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
          },
          {
            number: "19",
            percent: "လူတွေ",
            content: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
          },
          {
            number: "70",
            percent: "နိုင်ငံတွေ",
            content: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
          },
          {
            number: "50",
            percent: "နှစ်တွေ",
            content: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
          },
        ],
      };
      return burmeseText.data;
    case "japanese":
      const japaneseText = {
        data: [
          {
            number: "35",
            percent: "パーセント",
            content: "痛み自体は愛、主な顧客です",
          },
          {
            number: "19",
            percent: "人",
            content: "痛み自体は愛、主な顧客です",
          },
          {
            number: "70",
            percent: "国",
            content: "痛み自体は愛、主な顧客です",
          },
          {
            number: "50",
            percent: "年",
            content: "痛み自体は愛、主な顧客です",
          },
        ],
      };
      return japaneseText.data;
    default:
      const dummy = {
        data: [
          {
            number: "35",
            percent: "Percent",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            number: "19",
            percent: "People",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            number: "70",
            percent: "Countries",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            number: "50",
            percent: "Years",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      };
      return dummy.data;
  }
};

export default { 
  title: "Components/UI components/Stats",
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Stats</h1>

              <p>The Stats component is designed for showing the Statspanel grid and image in a particular section. It is a multi-usage component that often teases some kind of content.</p>

              <Canvas>
                <Story
                  name="Stats"
                >
                  {(args, { globals: { locale, accent } }) => {
                    const caption = statsArray(locale);
                    return <Stats data={caption} imageback={BackgroundImg} {...args}></Stats>;
                  }}
                </Story>
              </Canvas>

              <hr />

              <h3>Usage</h3>

              <ul>
                  <li>Copy the HTML from the canvas.</li>
                  <li>Include the <code>dist/css/components/stats.min.css</code> file.</li>
                  <li>In your JS file, initialize the following JS function:</li>
                  <ul>
                      <li><code>statsHover();</code></li>
                  </ul>
                  <li>Add the following JS files as well:</li>
                  <ul>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/stats.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/stats.min.js</a></li>
                  </ul>
              </ul>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return <Stats data={caption} imageback={BackgroundImg} {...args}></Stats>;
}

export const StatsStory = Template.bind({});
StatsStory.storyName = "Stats";