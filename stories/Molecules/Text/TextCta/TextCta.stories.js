import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { TextCta } from "./TextCta";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        header: "Join Us in UNDP Partnership",
        description:
          "Partnership is at the heart of everything UNDP does. We offer a nearly universal presence across the world. We are determined to mobilize the means to implement the 2030 Agenda through a revitalized Global Partnership for Sustainable Development, with a focus on the poorest and most vulnerable.",
        button: "READ MORE",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        header: "Стажування",
        description:
          "ПРООН в Україні пропонує студентам останніх курсів унікальну можливість отримати досвід роботи в ПРООН. Програма стажування допоможе отримати нові знання та зрозуміти цілі та принципи роботи ПРООН. До стажування заохочуються студенти, які спеціалізуються на вивченні процесів розвитку та мають досвід у сферах демократичного врядування, розбудови миру та відновлення та сталого розвитку.",
        button: "ЧИТАТИ ДАЛІ",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        header: "انضم إلينا في شراكة برنامج الأمم المتحدة الإنمائية",
        description:
          "الشراكة هي جوهر كل ما يقوم به برنامج الأمم المتحدة الإنمائي. نحن نقدم حضورًا عالميًا تقريبًا في جميع أنحاء العالم. نحن مصممون على حشد الوسائل اللازمة لتنفيذ خطة عام 2030 من خلال شراكة عالمية متجددة من أجل التنمية المستدامة ، مع التركيز على الأشد فقرا وضعفا.",
        button: "انضم إلينا",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        header: "UNDP Partnership တွင် ကျွန်ုပ်တို့နှင့် ပူးပေါင်းပါ။",
        description:
          "UNDP ၏လုပ်ဆောင်မှုအားလုံး၏ အဓိကအချက်မှာ မိတ်ဖက်ဆက်ဆံရေးဖြစ်သည်။ ကျွန်ုပ်တို့သည် ကမ္ဘာတစ်ဝှမ်းရှိ စကြဝဠာနီးပါးတည်ရှိမှုကို ပေးဆောင်ပါသည်။ အဆင်းရဲဆုံးနှင့် ထိခိုက်လွယ်ဆုံးသူများကို အာရုံစိုက်ခြင်းဖြင့် စဉ်ဆက်မပြတ်ဖွံ့ဖြိုးတိုးတက်သော ကမ္ဘာလုံးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို ပြန်လည်အသက်သွင်းထားသော ကမ္ဘာလုံးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုမှတစ်ဆင့် 2030 အစီအစဉ်ကို အကောင်အထည်ဖော်ရန် နည်းလမ်းများကို စုစည်းရန် ကျွန်ုပ်တို့ ဆုံးဖြတ်ထားပါသည်။",
        button: "ငါတို့နဲ့လာပူးပေါင်းပါ",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        header: "UNDPパートナーシップにご参加ください",
        description:
          "パートナーシップは、UNDPが行うすべての中心です。私たちは世界中でほぼ普遍的な存在感を提供します。私たちは、最も貧しく最も脆弱な人々に焦点を当て、持続可能な開発のためのグローバルなパートナーシップを活性化することにより、2030アジェンダを実施するための手段を動員することを決意しています。",
        button: "参加しませんか",
      };
      return japaneseText;
    default:
      return {
        header: "Join Us in UNDP Partnership",
        description:
          "Partnership is at the heart of everything UNDP does. We offer a nearly universal presence across the world. We are determined to mobilize the means to implement the 2030 Agenda through a revitalized Global Partnership for Sustainable Development, with a focus on the poorest and most vulnerable.",
        button: "READ MORE",
      };
  }
};

export default {
  title: "Components/UI components/Text/Text cta",
  component: {TextCta},
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Text CTA</h1>

              <p>The Text CTA block defines a section of information data with some items - title, button/CTA, and description. <code>H2</code>, <code>P</code>, and <code>Button</code> atom tags are used for creating this section.</p>

              <Canvas>
                <Story name="Text cta">
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <TextCta
                        headerText={caption.header}
                        descriptionText={caption.description}
                        label={caption.button}
                      ></TextCta>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage</h3>

              <ul>
                <li>Take HTML from the HTML tab in canvas.</li>
                <li>Include CSS and JS from the 'CSS and JS References' section.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong> along with the following:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/textcta.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/textcta.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <p>Optional for viewport animation:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

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
    <TextCta
      headerText={caption.header}
      descriptionText={caption.description}
      label={caption.button}
    ></TextCta>
  );
}

export const TextCtaStory = Template.bind({});
TextCtaStory.storyName = "Text Cta";