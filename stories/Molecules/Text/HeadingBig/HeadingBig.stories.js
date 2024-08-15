import { Meta, Story, Canvas } from "@storybook/blocks";
import { HeadingBig } from "./HeadingBig";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        header: ["Our", <br />, "Mission"],
        description:
          "UNDP works in 170 countries and territories to eradicate poverty while protecting the planet. We help countries develop strong policies, skills, partnerships and institutions so they can sustain their progress.",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        header: ["Наша ", <br />, "місія"],
        description:
          "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        header: ["علامة", <br />, "المحتو"],
        description:
          "يعمل برنامج الأمم المتحدة الإنمائي في 170 دولة وإقليم للقضاء على الفقر مع حماية كوكب الأرض. نحن نساعد البلدان على تطوير سياسات ومهارات وشراكات ومؤسسات قوية حتى تتمكن من الحفاظ على تقدمها.",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        header: ["အကြောင်", <br />, "အကြောင်"],
        description:
          "UNDP သည်ကမ္ဘာနှင့်နယ်မြေ ၁၇၀ တွင်ဆင်းရဲနွမ်းပါးမှုပပျောက်ရန်ကမ္ဘာကိုကာကွယ်နေသည်။ သူတို့ရဲ့တိုးတက်မှုတွေကိုဆက်ထိန်းထားနိုင်အောင်ခိုင်မာတဲ့မူဝါဒတွေ၊ ကျွမ်းကျင်မှုတွေ၊ မိတ်ဖက်တွေ၊ အဖွဲ့အစည်းတွေတည်ဆောက်ဖို့ငါတို့ကကူညီပေးတယ်။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        header: ["コンテン", <br />, "ツタグ"],
        description:
          "UNDPは、地球を保護しながら貧困を根絶するために170の国と地域で活動しています。私たちは、各国が進歩を維持できるように、強力な政策、スキル、パートナーシップ、制度を開発するのを支援します。",
      };
      return japaneseText;
    default:
      return {
        header: ["Our", <br />, "Mission"],
        description:
          "UNDP works in 170 countries and territories to eradicate poverty while protecting the planet. We help countries develop strong policies, skills, partnerships and institutions so they can sustain their progress.",
      };
  }
};

export default {
  title: "Components/UI components/Text/Heading big block",
  component: HeadingBig,
  argTypes: {
    Emphasize: {
      options: ["true", "false"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Emphasize: "true",
  },
  parameters: {
    docs: {
        page: () => (
            <>
              <style>
                {`
                  .background_gray {
                    background-color: #A9B1B7;
                  }
                `}
              </style>

              <h1>Heading Big Block</h1>

              <p>The Heading Block defines a section of information data with some items - Header title, Description. <code>H2</code> <code>H4</code> atoms tags are used for creating this section.</p>

              <Canvas className="background_gray" of={HeadingBigStory} />

              <h3>Usage</h3>

              <ul>
                  <li>Take HTML from the HTML tab in canvas whichever (select variant you like).</li>
                  <li>Include CSS and JS from the 'CSS and JS References' section.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong> along with the following:</p>
              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/headingbig.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/headingbig.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <p><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a> (optional for viewport animation)</p>

              <h3>Changelog</h3>

              <p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <HeadingBig
      headerText={caption.header}
      descriptionText={caption.description}
      listData={caption.listData}
      dataViewport="true"
      {...args}
    ></HeadingBig>
  );
}

export const HeadingBigStory = Template.bind({});
HeadingBigStory.storyName = "Heading big block";
